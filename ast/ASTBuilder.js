import MovieRankingVisitor from "../parse/grammar/MovieRankingVisitor.js";

export default class ASTBuilder extends MovieRankingVisitor {
    visitQuery(ctx) {
        return {
            command: "GET",
            target: ctx.target().getText(),
            filter: this.visit(ctx.condition()),
        };
    }

    visitCondition(ctx) {
        return {
            left: ctx.IDENTIFIER().getText(),
            operator: ctx.operator().getText(),
            right: Number(ctx.value().getText()),
        };
    }
}
