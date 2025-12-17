import antlr4 from "antlr4";

import MovieRankingLexer from "../parse/grammar/MovieRankingLexer.js";
import MovieRankingParser from "../parse/grammar/MovieRankingParser.js";
import ASTBuilder from "../ast/ASTBuilder.js";

export function parseQuery(input) {
    const chars = new antlr4.InputStream(input);
    const lexer = new MovieRankingLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new MovieRankingParser(tokens);

    parser.buildParseTrees = true;

    const tree = parser.query(); // entry rule
    const astBuilder = new ASTBuilder();

    return astBuilder.visit(tree);
}
