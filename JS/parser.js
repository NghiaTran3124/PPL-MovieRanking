//Biến Tokens thành AST (Abstract Syntax Tree)
export function parse(tokens) {
  console.log("2. Parser received tokens:", tokens);

  // TODO: Viết logic check cú pháp ở đây
  // Tạm thời trả về một AST giả định
  if (tokens.length === 0) throw new Error("No code found!");

  return {
    type: "QUERY",
    command: tokens[0], // Ví dụ: GET
    target: "movies",
  };
}
