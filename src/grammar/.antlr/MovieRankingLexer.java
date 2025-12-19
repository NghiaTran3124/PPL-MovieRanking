// Generated from /Users/tranminhhuy/Desktop/Documents/Backend_Journey/PPL-MovieRanking/src/grammar/MovieRanking.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class MovieRankingLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, GET=9, 
		WHERE=10, ORDER=11, BY=12, LIMIT=13, ASC=14, DESC=15, AND=16, OR=17, MOVIES=18, 
		STRING=19, NUMBER=20, IDENTIFIER=21, WS=22;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "GET", 
			"WHERE", "ORDER", "BY", "LIMIT", "ASC", "DESC", "AND", "OR", "MOVIES", 
			"STRING", "NUMBER", "IDENTIFIER", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "'='", "'!='", "'>'", "'>='", "'<'", "'<='", "'GET'", 
			"'WHERE'", "'ORDER'", "'BY'", "'LIMIT'", "'ASC'", "'DESC'", "'AND'", 
			"'OR'", "'movies'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, "GET", "WHERE", 
			"ORDER", "BY", "LIMIT", "ASC", "DESC", "AND", "OR", "MOVIES", "STRING", 
			"NUMBER", "IDENTIFIER", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public MovieRankingLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "MovieRanking.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0016\u0094\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0002\u0014\u0007\u0014"+
		"\u0002\u0015\u0007\u0015\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0002\u0001\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004"+
		"\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\n\u0001\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\f\u0001\f"+
		"\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001\r\u0001"+
		"\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000e\u0001\u000f\u0001"+
		"\u000f\u0001\u000f\u0001\u000f\u0001\u0010\u0001\u0010\u0001\u0010\u0001"+
		"\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001\u0011\u0001"+
		"\u0011\u0001\u0012\u0001\u0012\u0005\u0012s\b\u0012\n\u0012\f\u0012v\t"+
		"\u0012\u0001\u0012\u0001\u0012\u0001\u0013\u0004\u0013{\b\u0013\u000b"+
		"\u0013\f\u0013|\u0001\u0013\u0001\u0013\u0004\u0013\u0081\b\u0013\u000b"+
		"\u0013\f\u0013\u0082\u0003\u0013\u0085\b\u0013\u0001\u0014\u0001\u0014"+
		"\u0005\u0014\u0089\b\u0014\n\u0014\f\u0014\u008c\t\u0014\u0001\u0015\u0004"+
		"\u0015\u008f\b\u0015\u000b\u0015\f\u0015\u0090\u0001\u0015\u0001\u0015"+
		"\u0000\u0000\u0016\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004\t\u0005"+
		"\u000b\u0006\r\u0007\u000f\b\u0011\t\u0013\n\u0015\u000b\u0017\f\u0019"+
		"\r\u001b\u000e\u001d\u000f\u001f\u0010!\u0011#\u0012%\u0013\'\u0014)\u0015"+
		"+\u0016\u0001\u0000\u0005\u0003\u0000\n\n\r\r\'\'\u0001\u000009\u0003"+
		"\u0000AZ__az\u0004\u000009AZ__az\u0003\u0000\t\n\r\r  \u0099\u0000\u0001"+
		"\u0001\u0000\u0000\u0000\u0000\u0003\u0001\u0000\u0000\u0000\u0000\u0005"+
		"\u0001\u0000\u0000\u0000\u0000\u0007\u0001\u0000\u0000\u0000\u0000\t\u0001"+
		"\u0000\u0000\u0000\u0000\u000b\u0001\u0000\u0000\u0000\u0000\r\u0001\u0000"+
		"\u0000\u0000\u0000\u000f\u0001\u0000\u0000\u0000\u0000\u0011\u0001\u0000"+
		"\u0000\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000"+
		"\u0000\u0000\u0000\u0017\u0001\u0000\u0000\u0000\u0000\u0019\u0001\u0000"+
		"\u0000\u0000\u0000\u001b\u0001\u0000\u0000\u0000\u0000\u001d\u0001\u0000"+
		"\u0000\u0000\u0000\u001f\u0001\u0000\u0000\u0000\u0000!\u0001\u0000\u0000"+
		"\u0000\u0000#\u0001\u0000\u0000\u0000\u0000%\u0001\u0000\u0000\u0000\u0000"+
		"\'\u0001\u0000\u0000\u0000\u0000)\u0001\u0000\u0000\u0000\u0000+\u0001"+
		"\u0000\u0000\u0000\u0001-\u0001\u0000\u0000\u0000\u0003/\u0001\u0000\u0000"+
		"\u0000\u00051\u0001\u0000\u0000\u0000\u00073\u0001\u0000\u0000\u0000\t"+
		"6\u0001\u0000\u0000\u0000\u000b8\u0001\u0000\u0000\u0000\r;\u0001\u0000"+
		"\u0000\u0000\u000f=\u0001\u0000\u0000\u0000\u0011@\u0001\u0000\u0000\u0000"+
		"\u0013D\u0001\u0000\u0000\u0000\u0015J\u0001\u0000\u0000\u0000\u0017P"+
		"\u0001\u0000\u0000\u0000\u0019S\u0001\u0000\u0000\u0000\u001bY\u0001\u0000"+
		"\u0000\u0000\u001d]\u0001\u0000\u0000\u0000\u001fb\u0001\u0000\u0000\u0000"+
		"!f\u0001\u0000\u0000\u0000#i\u0001\u0000\u0000\u0000%p\u0001\u0000\u0000"+
		"\u0000\'z\u0001\u0000\u0000\u0000)\u0086\u0001\u0000\u0000\u0000+\u008e"+
		"\u0001\u0000\u0000\u0000-.\u0005(\u0000\u0000.\u0002\u0001\u0000\u0000"+
		"\u0000/0\u0005)\u0000\u00000\u0004\u0001\u0000\u0000\u000012\u0005=\u0000"+
		"\u00002\u0006\u0001\u0000\u0000\u000034\u0005!\u0000\u000045\u0005=\u0000"+
		"\u00005\b\u0001\u0000\u0000\u000067\u0005>\u0000\u00007\n\u0001\u0000"+
		"\u0000\u000089\u0005>\u0000\u00009:\u0005=\u0000\u0000:\f\u0001\u0000"+
		"\u0000\u0000;<\u0005<\u0000\u0000<\u000e\u0001\u0000\u0000\u0000=>\u0005"+
		"<\u0000\u0000>?\u0005=\u0000\u0000?\u0010\u0001\u0000\u0000\u0000@A\u0005"+
		"G\u0000\u0000AB\u0005E\u0000\u0000BC\u0005T\u0000\u0000C\u0012\u0001\u0000"+
		"\u0000\u0000DE\u0005W\u0000\u0000EF\u0005H\u0000\u0000FG\u0005E\u0000"+
		"\u0000GH\u0005R\u0000\u0000HI\u0005E\u0000\u0000I\u0014\u0001\u0000\u0000"+
		"\u0000JK\u0005O\u0000\u0000KL\u0005R\u0000\u0000LM\u0005D\u0000\u0000"+
		"MN\u0005E\u0000\u0000NO\u0005R\u0000\u0000O\u0016\u0001\u0000\u0000\u0000"+
		"PQ\u0005B\u0000\u0000QR\u0005Y\u0000\u0000R\u0018\u0001\u0000\u0000\u0000"+
		"ST\u0005L\u0000\u0000TU\u0005I\u0000\u0000UV\u0005M\u0000\u0000VW\u0005"+
		"I\u0000\u0000WX\u0005T\u0000\u0000X\u001a\u0001\u0000\u0000\u0000YZ\u0005"+
		"A\u0000\u0000Z[\u0005S\u0000\u0000[\\\u0005C\u0000\u0000\\\u001c\u0001"+
		"\u0000\u0000\u0000]^\u0005D\u0000\u0000^_\u0005E\u0000\u0000_`\u0005S"+
		"\u0000\u0000`a\u0005C\u0000\u0000a\u001e\u0001\u0000\u0000\u0000bc\u0005"+
		"A\u0000\u0000cd\u0005N\u0000\u0000de\u0005D\u0000\u0000e \u0001\u0000"+
		"\u0000\u0000fg\u0005O\u0000\u0000gh\u0005R\u0000\u0000h\"\u0001\u0000"+
		"\u0000\u0000ij\u0005m\u0000\u0000jk\u0005o\u0000\u0000kl\u0005v\u0000"+
		"\u0000lm\u0005i\u0000\u0000mn\u0005e\u0000\u0000no\u0005s\u0000\u0000"+
		"o$\u0001\u0000\u0000\u0000pt\u0005\'\u0000\u0000qs\b\u0000\u0000\u0000"+
		"rq\u0001\u0000\u0000\u0000sv\u0001\u0000\u0000\u0000tr\u0001\u0000\u0000"+
		"\u0000tu\u0001\u0000\u0000\u0000uw\u0001\u0000\u0000\u0000vt\u0001\u0000"+
		"\u0000\u0000wx\u0005\'\u0000\u0000x&\u0001\u0000\u0000\u0000y{\u0007\u0001"+
		"\u0000\u0000zy\u0001\u0000\u0000\u0000{|\u0001\u0000\u0000\u0000|z\u0001"+
		"\u0000\u0000\u0000|}\u0001\u0000\u0000\u0000}\u0084\u0001\u0000\u0000"+
		"\u0000~\u0080\u0005.\u0000\u0000\u007f\u0081\u0007\u0001\u0000\u0000\u0080"+
		"\u007f\u0001\u0000\u0000\u0000\u0081\u0082\u0001\u0000\u0000\u0000\u0082"+
		"\u0080\u0001\u0000\u0000\u0000\u0082\u0083\u0001\u0000\u0000\u0000\u0083"+
		"\u0085\u0001\u0000\u0000\u0000\u0084~\u0001\u0000\u0000\u0000\u0084\u0085"+
		"\u0001\u0000\u0000\u0000\u0085(\u0001\u0000\u0000\u0000\u0086\u008a\u0007"+
		"\u0002\u0000\u0000\u0087\u0089\u0007\u0003\u0000\u0000\u0088\u0087\u0001"+
		"\u0000\u0000\u0000\u0089\u008c\u0001\u0000\u0000\u0000\u008a\u0088\u0001"+
		"\u0000\u0000\u0000\u008a\u008b\u0001\u0000\u0000\u0000\u008b*\u0001\u0000"+
		"\u0000\u0000\u008c\u008a\u0001\u0000\u0000\u0000\u008d\u008f\u0007\u0004"+
		"\u0000\u0000\u008e\u008d\u0001\u0000\u0000\u0000\u008f\u0090\u0001\u0000"+
		"\u0000\u0000\u0090\u008e\u0001\u0000\u0000\u0000\u0090\u0091\u0001\u0000"+
		"\u0000\u0000\u0091\u0092\u0001\u0000\u0000\u0000\u0092\u0093\u0006\u0015"+
		"\u0000\u0000\u0093,\u0001\u0000\u0000\u0000\u0007\u0000t|\u0082\u0084"+
		"\u008a\u0090\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}