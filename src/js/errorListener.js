import antlr4 from "antlr4";

export default class ErrorListener extends antlr4.error.ErrorListener {
    syntaxError(recognizer, offendingSymbol, line, column, message) {
        throw new Error(
            `Syntax error at line ${line}, column ${column}: ${message}`
        );
    }
}
