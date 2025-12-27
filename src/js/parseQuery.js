import antlr4 from "antlr4";
import MovieRankingLexer from "../parse/MovieRankingLexer.js";
import MovieRankingParser from "../parse/MovieRankingParser.js";
import ASTBuilder from "../ast/ASTBuilder.js";

class ThrowingErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    throw new Error(`Syntax error at line ${line}:${column} - ${msg}`);
  }
}

export function parseQuery(input) {
  const chars = new antlr4.InputStream(input);
  const lexer = new MovieRankingLexer(chars);

  lexer.removeErrorListeners();
  lexer.addErrorListener(new ThrowingErrorListener());

  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new MovieRankingParser(tokens);

  parser.removeErrorListeners();
  parser.addErrorListener(new ThrowingErrorListener());
  parser.buildParseTrees = true;

  try {
    const tree = parser.query();

    if (parser._input.LA(1) !== antlr4.Token.EOF) {
      throw new Error("Extraneous input detected after valid query.");
    }

    const visitor = new ASTBuilder();
    return visitor.visit(tree);
  } catch (e) {
    throw e;
  }
}
