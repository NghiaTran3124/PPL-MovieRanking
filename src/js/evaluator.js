// Thực thi logic dựa trên AST và Data
export function evaluate(ast, data) {
  console.log("3. Evaluator executing AST:", ast);

  if (!ast) throw new Error("AST is required");
  if (!Array.isArray(data)) throw new Error("Data must be an array");

  const isQueryObject = ast.type === "Query" || ast.type === "QUERY";
  const isSimpleCommand = typeof ast.command === "string";

  if (isSimpleCommand && ast.command.toUpperCase() === "GET") {
    if (ast.where) return applyModifiers(data, ast);
    return data;
  }

  if (isQueryObject) {
    let results = data;

    if (ast.where) {
      results = results.filter((item) => evalExpression(ast.where, item));
    }

    if (ast.orderBy) {
      const { field, direction } = ast.orderBy;
      results = results.slice().sort((a, b) => {
        const av = a[field];
        const bv = b[field];
        if (av == null && bv == null) return 0;
        if (av == null) return 1;
        if (bv == null) return -1;
        if (av < bv) return direction === "DESC" ? 1 : -1;
        if (av > bv) return direction === "DESC" ? -1 : 1;
        return 0;
      });
    }

    if (ast.limit != null) {
      results = results.slice(0, Number(ast.limit));
    }

    return results;
  }

  return [];
}

function applyModifiers(data, ast) {
  let results = data;
  if (ast.where)
    results = results.filter((item) => evalExpression(ast.where, item));
  if (ast.orderBy) {
    const { field, direction } = ast.orderBy;
    results = results.slice().sort((a, b) => {
      const av = a[field];
      const bv = b[field];
      if (av == null && bv == null) return 0;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (av < bv) return direction === "DESC" ? 1 : -1;
      if (av > bv) return direction === "DESC" ? -1 : 1;
      return 0;
    });
  }
  if (ast.limit != null) results = results.slice(0, Number(ast.limit));
  return results;
}

function evalExpression(node, item) {
  if (!node) return true;

  if (node.type === "Condition") {
    const { field, operator, value } = node;
    const lhs = item[field];

    switch (operator) {
      case ">":
        return Number(lhs) > Number(value);
      case "<":
        return Number(lhs) < Number(value);
      case ">=":
        return Number(lhs) >= Number(value);
      case "<=":
        return Number(lhs) <= Number(value);
      case "=":
        return lhs == value;
      case "!=":
        return lhs != value;
      default:
        return false;
    }
  }

  if (node.type === "AND") {
    return evalExpression(node.left, item) && evalExpression(node.right, item);
  }

  if (node.type === "OR") {
    return evalExpression(node.left, item) || evalExpression(node.right, item);
  }

  return false;
}
