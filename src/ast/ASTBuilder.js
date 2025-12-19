import MovieRankingVisitor from "../parse/MovieRankingVisitor.js";

export default class ASTBuilder extends MovieRankingVisitor {
    visitQuery(ctx) {
        return {
            type: "Query",
            target: "movies",
            where: ctx.whereClause() ? this.visit(ctx.whereClause()) : null,
            orderBy: ctx.orderByClause()
                ? this.visit(ctx.orderByClause())
                : null,
            limit: ctx.limitClause()
                ? Number(ctx.limitClause().NUMBER().getText())
                : null,
        };
    }

    visitWhereClause(ctx) {
        return this.visit(ctx.expression());
    }

    visitOrderByClause(ctx) {
        return {
            field: ctx.IDENTIFIER().getText(),
            direction: ctx.DESC() ? "DESC" : "ASC",
        };
    }

    /* ===================== EXPRESSIONS ===================== */

    visitExpression(ctx) {
        return this.visit(ctx.orExpression());
    }

    visitOrExpression(ctx) {
        let left = this.visit(ctx.andExpression(0));

        for (let i = 1; i < ctx.andExpression().length; i++) {
            left = {
                type: "OR",
                left,
                right: this.visit(ctx.andExpression(i)),
            };
        }

        return left;
    }

    visitAndExpression(ctx) {
        let left = this.visit(ctx.primary(0));

        for (let i = 1; i < ctx.primary().length; i++) {
            left = {
                type: "AND",
                left,
                right: this.visit(ctx.primary(i)),
            };
        }

        return left;
    }

    visitPrimary(ctx) {
        if (ctx.expression()) {
            return this.visit(ctx.expression());
        }
        return this.visit(ctx.condition());
    }

    /* ===================== CONDITION ===================== */

    visitCondition(ctx) {
        return {
            type: "Condition",
            field: ctx.IDENTIFIER().getText(),
            operator: ctx.comparator().getText(),
            value: this.visit(ctx.value()),
        };
    }

    visitValue(ctx) {
        if (ctx.NUMBER()) {
            return Number(ctx.NUMBER().getText());
        }
        return ctx.STRING().getText().slice(1, -1);
    }
}
