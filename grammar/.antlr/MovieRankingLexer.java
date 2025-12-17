// Generated from /Users/tranminhhuy/Desktop/Documents/Backend_Journey/PPL-MovieRanking/grammar/MovieRanking.g4 by ANTLR 4.13.1
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
		GET=1, WHERE=2, GT=3, LT=4, GE=5, LE=6, EQ=7, NUMBER=8, IDENTIFIER=9, 
		WS=10;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"GET", "WHERE", "GT", "LT", "GE", "LE", "EQ", "NUMBER", "INT", "IDENTIFIER", 
			"WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'GET'", "'WHERE'", "'>'", "'<'", "'>='", "'<='", "'='"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "GET", "WHERE", "GT", "LT", "GE", "LE", "EQ", "NUMBER", "IDENTIFIER", 
			"WS"
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
		"\u0004\u0000\nE\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002\u0001"+
		"\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004"+
		"\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007"+
		"\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0003"+
		"\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005"+
		"\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0003\u00071\b\u0007\u0001\b\u0004\b4\b\b\u000b\b\f\b5\u0001\t\u0001"+
		"\t\u0005\t:\b\t\n\t\f\t=\t\t\u0001\n\u0004\n@\b\n\u000b\n\f\nA\u0001\n"+
		"\u0001\n\u0000\u0000\u000b\u0001\u0001\u0003\u0002\u0005\u0003\u0007\u0004"+
		"\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011\u0000\u0013\t\u0015\n\u0001"+
		"\u0000\u0004\u0001\u000009\u0003\u0000AZ__az\u0004\u000009AZ__az\u0003"+
		"\u0000\t\n\r\r  G\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003\u0001"+
		"\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007\u0001"+
		"\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001\u0000"+
		"\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000\u0000"+
		"\u0000\u0000\u0013\u0001\u0000\u0000\u0000\u0000\u0015\u0001\u0000\u0000"+
		"\u0000\u0001\u0017\u0001\u0000\u0000\u0000\u0003\u001b\u0001\u0000\u0000"+
		"\u0000\u0005!\u0001\u0000\u0000\u0000\u0007#\u0001\u0000\u0000\u0000\t"+
		"%\u0001\u0000\u0000\u0000\u000b(\u0001\u0000\u0000\u0000\r+\u0001\u0000"+
		"\u0000\u0000\u000f-\u0001\u0000\u0000\u0000\u00113\u0001\u0000\u0000\u0000"+
		"\u00137\u0001\u0000\u0000\u0000\u0015?\u0001\u0000\u0000\u0000\u0017\u0018"+
		"\u0005G\u0000\u0000\u0018\u0019\u0005E\u0000\u0000\u0019\u001a\u0005T"+
		"\u0000\u0000\u001a\u0002\u0001\u0000\u0000\u0000\u001b\u001c\u0005W\u0000"+
		"\u0000\u001c\u001d\u0005H\u0000\u0000\u001d\u001e\u0005E\u0000\u0000\u001e"+
		"\u001f\u0005R\u0000\u0000\u001f \u0005E\u0000\u0000 \u0004\u0001\u0000"+
		"\u0000\u0000!\"\u0005>\u0000\u0000\"\u0006\u0001\u0000\u0000\u0000#$\u0005"+
		"<\u0000\u0000$\b\u0001\u0000\u0000\u0000%&\u0005>\u0000\u0000&\'\u0005"+
		"=\u0000\u0000\'\n\u0001\u0000\u0000\u0000()\u0005<\u0000\u0000)*\u0005"+
		"=\u0000\u0000*\f\u0001\u0000\u0000\u0000+,\u0005=\u0000\u0000,\u000e\u0001"+
		"\u0000\u0000\u0000-0\u0003\u0011\b\u0000./\u0005.\u0000\u0000/1\u0003"+
		"\u0011\b\u00000.\u0001\u0000\u0000\u000001\u0001\u0000\u0000\u00001\u0010"+
		"\u0001\u0000\u0000\u000024\u0007\u0000\u0000\u000032\u0001\u0000\u0000"+
		"\u000045\u0001\u0000\u0000\u000053\u0001\u0000\u0000\u000056\u0001\u0000"+
		"\u0000\u00006\u0012\u0001\u0000\u0000\u00007;\u0007\u0001\u0000\u0000"+
		"8:\u0007\u0002\u0000\u000098\u0001\u0000\u0000\u0000:=\u0001\u0000\u0000"+
		"\u0000;9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000\u0000<\u0014\u0001"+
		"\u0000\u0000\u0000=;\u0001\u0000\u0000\u0000>@\u0007\u0003\u0000\u0000"+
		"?>\u0001\u0000\u0000\u0000@A\u0001\u0000\u0000\u0000A?\u0001\u0000\u0000"+
		"\u0000AB\u0001\u0000\u0000\u0000BC\u0001\u0000\u0000\u0000CD\u0006\n\u0000"+
		"\u0000D\u0016\u0001\u0000\u0000\u0000\u0005\u000005;A\u0001\u0006\u0000"+
		"\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}