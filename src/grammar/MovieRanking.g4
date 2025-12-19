grammar MovieRanking;

/*
 * ===================== Parser Rules =====================
 */

query: getClause whereClause? orderByClause? limitClause? EOF;

getClause: GET MOVIES;

whereClause: WHERE expression;

orderByClause: ORDER BY IDENTIFIER (ASC | DESC)?;

limitClause: LIMIT NUMBER;

/*
 * ===================== Expression =====================
 */
expression: orExpression;

orExpression: andExpression (OR andExpression)*;

andExpression: primary (AND primary)*;

primary: '(' expression ')' | condition;

condition: IDENTIFIER comparator value;

comparator: '=' | '!=' | '>' | '>=' | '<' | '<=';

value: STRING | NUMBER;
/*
 * ===================== Lexer Rules =====================
 */

GET: 'GET';
WHERE: 'WHERE';
ORDER: 'ORDER';
BY: 'BY';
LIMIT: 'LIMIT';
ASC: 'ASC';
DESC: 'DESC';
AND: 'AND';
OR: 'OR';
MOVIES: 'movies';

STRING: '\'' (~['\r\n])* '\'';

NUMBER: [0-9]+ ('.' [0-9]+)?;

IDENTIFIER: [a-zA-Z_][a-zA-Z_0-9]*;

WS: [ \t\r\n]+ -> skip;