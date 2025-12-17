// Tách code thành token
export function tokenize(code) {
  console.log("1. Lexer running on:", code);

  // TODO: Viết logic tách từ ở đây (Regex)
  // Tạm thời trả về dummy tokens để test luồng
  const tokens = code.trim().split(/\s+/);

  return tokens;
}
