import antlr4 from "antlr4";

import MovieRankingLexer from "../parse/MovieRankingLexer.js";
import MovieRankingParser from "../parse/MovieRankingParser.js";
import ASTBuilder from "../ast/ASTBuilder.js";
import ErrorListener from "./errorListener.js";

export function parseQuery(input) {
    try {
        const chars = new antlr4.InputStream(input);
        const lexer = new MovieRankingLexer(chars);

        lexer.removeErrorListeners();
        lexer.addErrorListener(new ErrorListener());

        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new MovieRankingParser(tokens);

        parser.buildParseTrees = true;

        parser.removeErrorListeners();
        parser.addErrorListener(new ErrorListener());

        const tree = parser.query(); // entry rule
        const astBuilder = new ASTBuilder();

        return astBuilder.visit(tree);
    } catch (err) {
        return {
            error: true,
            message: err.message,
        };
    }
}
