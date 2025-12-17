grammar MovieRanking;

/*
 * ===================== Parser Rules =====================
 */

query: GET target WHERE condition EOF;

target: IDENTIFIER;

condition: IDENTIFIER operator value;

operator: GT | LT | GE | LE | EQ;

value: NUMBER;

/*
 * ===================== Lexer Rules =====================
 */

GET: 'GET';
WHERE: 'WHERE';

GT: '>';
LT: '<';
GE: '>=';
LE: '<=';
EQ: '=';

NUMBER: INT ('.' INT)?;

fragment INT: [0-9]+;

IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;

WS: [ \t\r\n]+ -> skip;