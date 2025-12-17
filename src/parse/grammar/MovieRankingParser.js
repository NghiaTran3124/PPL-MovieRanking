// Generated from grammar/MovieRanking.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import MovieRankingListener from './MovieRankingListener.js';
import MovieRankingVisitor from './MovieRankingVisitor.js';

const serializedATN = [4,1,10,27,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,1,4,0,0,
5,0,2,4,6,8,0,1,1,0,3,7,21,0,10,1,0,0,0,2,16,1,0,0,0,4,18,1,0,0,0,6,22,1,
0,0,0,8,24,1,0,0,0,10,11,5,1,0,0,11,12,3,2,1,0,12,13,5,2,0,0,13,14,3,4,2,
0,14,15,5,0,0,1,15,1,1,0,0,0,16,17,5,9,0,0,17,3,1,0,0,0,18,19,5,9,0,0,19,
20,3,6,3,0,20,21,3,8,4,0,21,5,1,0,0,0,22,23,7,0,0,0,23,7,1,0,0,0,24,25,5,
8,0,0,25,9,1,0,0,0,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class MovieRankingParser extends antlr4.Parser {

    static grammarFileName = "MovieRanking.g4";
    static literalNames = [ null, "'GET'", "'WHERE'", "'>'", "'<'", "'>='", 
                            "'<='", "'='" ];
    static symbolicNames = [ null, "GET", "WHERE", "GT", "LT", "GE", "LE", 
                             "EQ", "NUMBER", "IDENTIFIER", "WS" ];
    static ruleNames = [ "query", "target", "condition", "operator", "value" ];

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
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 10;
	        this.match(MovieRankingParser.GET);
	        this.state = 11;
	        this.target();
	        this.state = 12;
	        this.match(MovieRankingParser.WHERE);
	        this.state = 13;
	        this.condition();
	        this.state = 14;
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



	target() {
	    let localctx = new TargetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, MovieRankingParser.RULE_target);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.match(MovieRankingParser.IDENTIFIER);
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
	    this.enterRule(localctx, 4, MovieRankingParser.RULE_condition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.match(MovieRankingParser.IDENTIFIER);
	        this.state = 19;
	        this.operator();
	        this.state = 20;
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



	operator() {
	    let localctx = new OperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, MovieRankingParser.RULE_operator);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 22;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 248) !== 0))) {
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
	    this.enterRule(localctx, 8, MovieRankingParser.RULE_value);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 24;
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


}

MovieRankingParser.EOF = antlr4.Token.EOF;
MovieRankingParser.GET = 1;
MovieRankingParser.WHERE = 2;
MovieRankingParser.GT = 3;
MovieRankingParser.LT = 4;
MovieRankingParser.GE = 5;
MovieRankingParser.LE = 6;
MovieRankingParser.EQ = 7;
MovieRankingParser.NUMBER = 8;
MovieRankingParser.IDENTIFIER = 9;
MovieRankingParser.WS = 10;

MovieRankingParser.RULE_query = 0;
MovieRankingParser.RULE_target = 1;
MovieRankingParser.RULE_condition = 2;
MovieRankingParser.RULE_operator = 3;
MovieRankingParser.RULE_value = 4;

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

	GET() {
	    return this.getToken(MovieRankingParser.GET, 0);
	};

	target() {
	    return this.getTypedRuleContext(TargetContext,0);
	};

	WHERE() {
	    return this.getToken(MovieRankingParser.WHERE, 0);
	};

	condition() {
	    return this.getTypedRuleContext(ConditionContext,0);
	};

	EOF() {
	    return this.getToken(MovieRankingParser.EOF, 0);
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



class TargetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_target;
    }

	IDENTIFIER() {
	    return this.getToken(MovieRankingParser.IDENTIFIER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterTarget(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitTarget(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitTarget(this);
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

	operator() {
	    return this.getTypedRuleContext(OperatorContext,0);
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



class OperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = MovieRankingParser.RULE_operator;
    }

	GT() {
	    return this.getToken(MovieRankingParser.GT, 0);
	};

	LT() {
	    return this.getToken(MovieRankingParser.LT, 0);
	};

	GE() {
	    return this.getToken(MovieRankingParser.GE, 0);
	};

	LE() {
	    return this.getToken(MovieRankingParser.LE, 0);
	};

	EQ() {
	    return this.getToken(MovieRankingParser.EQ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.enterOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof MovieRankingListener ) {
	        listener.exitOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof MovieRankingVisitor ) {
	        return visitor.visitOperator(this);
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
MovieRankingParser.TargetContext = TargetContext; 
MovieRankingParser.ConditionContext = ConditionContext; 
MovieRankingParser.OperatorContext = OperatorContext; 
MovieRankingParser.ValueContext = ValueContext; 
