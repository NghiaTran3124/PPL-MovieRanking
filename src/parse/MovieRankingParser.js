// Generated from MovieRanking.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MovieRankingListener from './MovieRankingListener.js';
import MovieRankingVisitor from './MovieRankingVisitor.js';

const serializedATN = [4,1,22,85,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,3,0,
27,8,0,1,0,3,0,30,8,0,1,0,3,0,33,8,0,1,0,1,0,1,1,1,1,1,1,1,2,1,2,1,2,1,3,
1,3,1,3,1,3,3,3,47,8,3,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,6,5,6,57,8,6,10,6,12,
6,60,9,6,1,7,1,7,1,7,5,7,65,8,7,10,7,12,7,68,9,7,1,8,1,8,1,8,1,8,1,8,3,8,
75,8,8,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,
16,18,20,22,0,3,1,0,14,15,1,0,3,8,1,0,19,20,79,0,24,1,0,0,0,2,36,1,0,0,0,
4,39,1,0,0,0,6,42,1,0,0,0,8,48,1,0,0,0,10,51,1,0,0,0,12,53,1,0,0,0,14,61,
1,0,0,0,16,74,1,0,0,0,18,76,1,0,0,0,20,80,1,0,0,0,22,82,1,0,0,0,24,26,3,
2,1,0,25,27,3,4,2,0,26,25,1,0,0,0,26,27,1,0,0,0,27,29,1,0,0,0,28,30,3,6,
3,0,29,28,1,0,0,0,29,30,1,0,0,0,30,32,1,0,0,0,31,33,3,8,4,0,32,31,1,0,0,
0,32,33,1,0,0,0,33,34,1,0,0,0,34,35,5,0,0,1,35,1,1,0,0,0,36,37,5,9,0,0,37,
38,5,18,0,0,38,3,1,0,0,0,39,40,5,10,0,0,40,41,3,10,5,0,41,5,1,0,0,0,42,43,
5,11,0,0,43,44,5,12,0,0,44,46,5,21,0,0,45,47,7,0,0,0,46,45,1,0,0,0,46,47,
1,0,0,0,47,7,1,0,0,0,48,49,5,13,0,0,49,50,5,20,0,0,50,9,1,0,0,0,51,52,3,
12,6,0,52,11,1,0,0,0,53,58,3,14,7,0,54,55,5,17,0,0,55,57,3,14,7,0,56,54,
1,0,0,0,57,60,1,0,0,0,58,56,1,0,0,0,58,59,1,0,0,0,59,13,1,0,0,0,60,58,1,
0,0,0,61,66,3,16,8,0,62,63,5,16,0,0,63,65,3,16,8,0,64,62,1,0,0,0,65,68,1,
0,0,0,66,64,1,0,0,0,66,67,1,0,0,0,67,15,1,0,0,0,68,66,1,0,0,0,69,70,5,1,
0,0,70,71,3,10,5,0,71,72,5,2,0,0,72,75,1,0,0,0,73,75,3,18,9,0,74,69,1,0,
0,0,74,73,1,0,0,0,75,17,1,0,0,0,76,77,5,21,0,0,77,78,3,20,10,0,78,79,3,22,
11,0,79,19,1,0,0,0,80,81,7,1,0,0,81,21,1,0,0,0,82,83,7,2,0,0,83,23,1,0,0,
0,7,26,29,32,46,58,66,74];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MovieRankingParser extends antlr4.Parser {

    static grammarFileName = "MovieRanking.g4";
    static literalNames = [ null, "'('", "')'", "'='", "'!='", "'>'", "'>='", 
                            "'<'", "'<='", "'GET'", "'WHERE'", "'ORDER'", 
                            "'BY'", "'LIMIT'", "'ASC'", "'DESC'", "'AND'", 
                            "'OR'", "'movies'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, "GET", "WHERE", "ORDER", "BY", "LIMIT", 
                             "ASC", "DESC", "AND", "OR", "MOVIES", "STRING", 
                             "NUMBER", "IDENTIFIER", "WS" ];
    static ruleNames = [ "query", "getClause", "whereClause", "orderByClause", 
                         "limitClause", "expression", "orExpression", "andExpression", 
                         "primary", "condition", "comparator", "value" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = MovieRankingParser.ruleNames;
        this.literalNames = MovieRankingParser.literalNames;
        this.symbolicNames = MovieRankingParser.symbolicNames;
    }



	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, MovieRankingParser.RULE_query);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
	        this.getClause();
	        this.state = 26;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===10) {
	            this.state = 25;
	            this.whereClause();
	        }

	        this.state = 29;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11) {
	            this.state = 28;
	            this.orderByClause();
	        }

	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===13) {
	            this.state = 31;
	            this.limitClause();
	        }

	        this.state = 34;
	        this.match(MovieRankingParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	getClause() {
	    let localctx = new GetClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MovieRankingParser.RULE_getClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.match(MovieRankingParser.GET);
	        this.state = 37;
	        this.match(MovieRankingParser.MOVIES);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	whereClause() {
	    let localctx = new WhereClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, MovieRankingParser.RULE_whereClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(MovieRankingParser.WHERE);
	        this.state = 40;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	orderByClause() {
	    let localctx = new OrderByClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MovieRankingParser.RULE_orderByClause);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 42;
	        this.match(MovieRankingParser.ORDER);
	        this.state = 43;
	        this.match(MovieRankingParser.BY);
	        this.state = 44;
	        this.match(MovieRankingParser.IDENTIFIER);
	        this.state = 46;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===14 || _la===15) {
	            this.state = 45;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	limitClause() {
	    let localctx = new LimitClauseContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, MovieRankingParser.RULE_limitClause);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(MovieRankingParser.LIMIT);
	        this.state = 49;
	        this.match(MovieRankingParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, MovieRankingParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.orExpression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	orExpression() {
	    let localctx = new OrExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, MovieRankingParser.RULE_orExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 53;
	        this.andExpression();
	        this.state = 58;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===17) {
	            this.state = 54;
	            this.match(MovieRankingParser.OR);
	            this.state = 55;
	            this.andExpression();
	            this.state = 60;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	andExpression() {
	    let localctx = new AndExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, MovieRankingParser.RULE_andExpression);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 61;
	        this.primary();
	        this.state = 66;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16) {
	            this.state = 62;
	            this.match(MovieRankingParser.AND);
	            this.state = 63;
	            this.primary();
	            this.state = 68;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, MovieRankingParser.RULE_primary);
	    try {
	        this.state = 74;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(MovieRankingParser.T__0);
	            this.state = 70;
	            this.expression();
	            this.state = 71;
	            this.match(MovieRankingParser.T__1);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 73;
	            this.condition();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	condition() {
	    let localctx = new ConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, MovieRankingParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        this.match(MovieRankingParser.IDENTIFIER);
	        this.state = 77;
	        this.comparator();
	        this.state = 78;
	        this.value();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	comparator() {
	    let localctx = new ComparatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, MovieRankingParser.RULE_comparator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 80;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 504) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	value() {
	    let localctx = new ValueContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, MovieRankingParser.RULE_value);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===20)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

MovieRankingParser.EOF = antlr4.Token.EOF;
MovieRankingParser.T__0 = 1;
MovieRankingParser.T__1 = 2;
MovieRankingParser.T__2 = 3;
MovieRankingParser.T__3 = 4;
MovieRankingParser.T__4 = 5;
MovieRankingParser.T__5 = 6;
MovieRankingParser.T__6 = 7;
MovieRankingParser.T__7 = 8;
MovieRankingParser.GET = 9;
MovieRankingParser.WHERE = 10;
MovieRankingParser.ORDER = 11;
MovieRankingParser.BY = 12;
MovieRankingParser.LIMIT = 13;
MovieRankingParser.ASC = 14;
MovieRankingParser.DESC = 15;
MovieRankingParser.AND = 16;
MovieRankingParser.OR = 17;
MovieRankingParser.MOVIES = 18;
MovieRankingParser.STRING = 19;
MovieRankingParser.NUMBER = 20;
MovieRankingParser.IDENTIFIER = 21;
MovieRankingParser.WS = 22;

MovieRankingParser.RULE_query = 0;
MovieRankingParser.RULE_getClause = 1;
MovieRankingParser.RULE_whereClause = 2;
MovieRankingParser.RULE_orderByClause = 3;
MovieRankingParser.RULE_limitClause = 4;
MovieRankingParser.RULE_expression = 5;
MovieRankingParser.RULE_orExpression = 6;
MovieRankingParser.RULE_andExpression = 7;
MovieRankingParser.RULE_primary = 8;
MovieRankingParser.RULE_condition = 9;
MovieRankingParser.RULE_comparator = 10;
MovieRankingParser.RULE_value = 11;

class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_query;
    }

	getClause() {
	    return this.getTypedRuleContext(GetClauseContext,0);
	};

	EOF() {
	    return this.getToken(MovieRankingParser.EOF, 0);
	};

	whereClause() {
	    return this.getTypedRuleContext(WhereClauseContext,0);
	};

	orderByClause() {
	    return this.getTypedRuleContext(OrderByClauseContext,0);
	};

	limitClause() {
	    return this.getTypedRuleContext(LimitClauseContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitQuery(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitQuery(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class GetClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_getClause;
    }

	GET() {
	    return this.getToken(MovieRankingParser.GET, 0);
	};

	MOVIES() {
	    return this.getToken(MovieRankingParser.MOVIES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterGetClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitGetClause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitGetClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class WhereClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_whereClause;
    }

	WHERE() {
	    return this.getToken(MovieRankingParser.WHERE, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterWhereClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitWhereClause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitWhereClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OrderByClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_orderByClause;
    }

	ORDER() {
	    return this.getToken(MovieRankingParser.ORDER, 0);
	};

	BY() {
	    return this.getToken(MovieRankingParser.BY, 0);
	};

	IDENTIFIER() {
	    return this.getToken(MovieRankingParser.IDENTIFIER, 0);
	};

	ASC() {
	    return this.getToken(MovieRankingParser.ASC, 0);
	};

	DESC() {
	    return this.getToken(MovieRankingParser.DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterOrderByClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitOrderByClause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitOrderByClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LimitClauseContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_limitClause;
    }

	LIMIT() {
	    return this.getToken(MovieRankingParser.LIMIT, 0);
	};

	NUMBER() {
	    return this.getToken(MovieRankingParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterLimitClause(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitLimitClause(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitLimitClause(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_expression;
    }

	orExpression() {
	    return this.getTypedRuleContext(OrExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OrExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_orExpression;
    }

	andExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AndExpressionContext);
	    } else {
	        return this.getTypedRuleContext(AndExpressionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MovieRankingParser.OR);
	    } else {
	        return this.getToken(MovieRankingParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitOrExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AndExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_andExpression;
    }

	primary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PrimaryContext);
	    } else {
	        return this.getTypedRuleContext(PrimaryContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(MovieRankingParser.AND);
	    } else {
	        return this.getToken(MovieRankingParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitAndExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_primary;
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_condition;
    }

	IDENTIFIER() {
	    return this.getToken(MovieRankingParser.IDENTIFIER, 0);
	};

	comparator() {
	    return this.getTypedRuleContext(ComparatorContext,0);
	};

	value() {
	    return this.getTypedRuleContext(ValueContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComparatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_comparator;
    }


	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterComparator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitComparator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitComparator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValueContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_value;
    }

	STRING() {
	    return this.getToken(MovieRankingParser.STRING, 0);
	};

	NUMBER() {
	    return this.getToken(MovieRankingParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterValue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitValue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitValue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




MovieRankingParser.QueryContext = QueryContext; 
MovieRankingParser.GetClauseContext = GetClauseContext; 
MovieRankingParser.WhereClauseContext = WhereClauseContext; 
MovieRankingParser.OrderByClauseContext = OrderByClauseContext; 
MovieRankingParser.LimitClauseContext = LimitClauseContext; 
MovieRankingParser.ExpressionContext = ExpressionContext; 
MovieRankingParser.OrExpressionContext = OrExpressionContext; 
MovieRankingParser.AndExpressionContext = AndExpressionContext; 
MovieRankingParser.PrimaryContext = PrimaryContext; 
MovieRankingParser.ConditionContext = ConditionContext; 
MovieRankingParser.ComparatorContext = ComparatorContext; 
MovieRankingParser.ValueContext = ValueContext; 
