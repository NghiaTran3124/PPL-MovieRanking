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
fragment A: [Aa];
fragment B: [Bb];
fragment C: [Cc];
fragment D: [Dd];
fragment E: [Ee];
fragment G: [Gg];
fragment H: [Hh];
fragment I: [Ii];
fragment L: [Ll];
fragment M: [Mm];
fragment N: [Nn];
fragment O: [Oo];
fragment R: [Rr];
fragment S: [Ss];
fragment T: [Tt];
fragment V: [Vv];
fragment Y: [Yy];
fragment W: [Ww];

GET: G E T;
WHERE: W H E R E;
ORDER: O R D E R;
BY: B Y;
LIMIT: L I M I T;
ASC: A S C;
DESC: D E S C;
AND: A N D;
OR: O R;
MOVIES: M O V I E S;

STRING: '\'' (~['\r\n])* '\'';

NUMBER: [0-9]+ ('.' [0-9]+)?;

IDENTIFIER: [a-zA-Z_][a-zA-Z_0-9]*;

WS: [ \t\r\n]+ -> skip;