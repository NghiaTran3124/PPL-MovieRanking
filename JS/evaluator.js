// Thực thi logic dựa trên AST và Data
export function evaluate(ast, data) {
  console.log("3. Evaluator executing AST:", ast);

  //  logic filter/sort data ở đây

  // Demo: Nếu lệnh là GET thì trả về toàn bộ movie
  if (ast.command === "GET") {
    return data;
  }

  return [];
}
