import antlr4 from "antlr4";
import MovieRankingLexer from "../parse/MovieRankingLexer.js";
import MovieRankingParser from "../parse/MovieRankingParser.js";
import ASTBuilder from "../ast/ASTBuilder.js";

export function parseQuery(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new MovieRankingLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new MovieRankingParser(tokens);

  parser.buildParseTrees = true;
  const tree = parser.query();

  const visitor = new ASTBuilder();
  return visitor.visit(tree);
}
