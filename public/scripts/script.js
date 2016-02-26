'use strict';

// **************************
// API Keys & Empty Functions
// **************************

var echoNest = {};

var echoNestKey = 'SO5PRLOHX9IBY34FA';
var echoNestURL = 'http://developer.echonest.com/api/v4/song/search';
var echoNestSongList = [];
var spotifySongList = [];

// **************************
// Artist Variables
// **************************

// Create variables for each artist with name and artistID

var lcdSoundsystem = {
	artistString: "lcdSoundsystem",
	artistName: "Lcd Soundsystem",
	artistID: "ARFIU2R1187B9927F9"
};

var arcadeFire = {
	artistString: "arcadeFire",
	artistName: "Arcade Fire",
	artistID: "ARFC93D1187FB49D2E"
};

var theKillers = {
	artistString: "theKillers",
	artistName: "The Killers",
	artistID: "ARVG4OK1187B9B6BD3"
};

var majorLazer = {
	artistString: "majorLazer",
	artistName: "Major Lazer",
	artistID: "ARLGOUD12298900ACE"
};

var m83 = {
	artistString: "m83",
	artistName: "M83",
	artistID: "ARB6OGR1187FB4D43D"
};

var haim = {
	artistString: "haim",
	artistName: "Haim",
	artistID: "ARY6OP91187B9A55FE"
};

var chvrches = {
	artistString: "chvrches",
	artistName: "CHVRCHES",
	artistID: "ARCZOJQ13A5B8886AB"
};

var rayLamontagne = {
	artistString: "rayLamontagne",
	artistName: "Ray Lamontagne",
	artistID: "AR90WS41187FB3F064"
};

var fkaTwigs = {
	artistString: "fkaTwigs",
	artistName: "Fka Twigs",
	artistID: "ARVDUQU14035F197BB"
};

var future = {
	artistString: "future",
	artistName: "Future",
	artistID: "ARP6DKX1187FB55C12"
};

var chetFaker = {
	artistString: "chetFaker",
	artistName: "Chet Faker",
	artistID: "ARVSUYH1369F265FED"
};

var arkells = {
	artistString: "arkells",
	artistName: "Arkells",
	artistID: "ARNSRDO11EBCD76CE8"
};

var beirut = {
	artistString: "beirut",
	artistName: "Beirut",
	artistID: "ARQOBT71187FB4CCCA"
};

var garyClark = {
	artistString: "garyClark",
	artistName: "Gary Clark Jr.",
	artistID: "AREXBV71187B9A0E36"
};

var macDemarco = {
	artistString: "macDemarco",
	artistName: "Mac Demarco",
	artistID: "ARZLWMD135642F50A0"
};

var wolfParade = {
	artistString: "wolfParade",
	artistName: "Wolf Parade",
	artistID: "ARTVEH31187FB4C8F6"
};

var stars = {
	artistString: "stars",
	artistName: "Stars",
	artistID: "ARK885Q1187FB5398E"
};

var lastShadowPuppets = {
	artistString: "lastShadowPuppets",
	artistName: "The Last Shadow Puppets",
	artistID: "ARRR2C5119B86683E8"
};

var foals = {
	artistString: "foals",
	artistName: "Foals",
	artistID: "ARVXV1J1187FB5BF88"
};

var theArcs = {
	artistString: "theArcs",
	artistName: "The Arcs",
	artistID: "ARH0AWA1187B9AB7F0"
};

var nathanielRateliff = {
	artistString: "nathanielRateliff",
	artistName: "Nathaniel Rateliff & The Night Sweats",
	artistID: "ARHNZSA1269FCD3329"
};

var mattKim = {
	artistString: "mattKim",
	artistName: "Matt & Kim",
	artistID: "ARZX9XW1187FB47DF0"
};

var kurtVile = {
	artistString: "kurtVile",
	artistName: "Kurt Vile & The Violators",
	artistID: "ARQC89A1187B9B04BC"
};

var glassAnimals = {
	artistString: "glassAnimals",
	artistName: "Glass Animals",
	artistID: "ARMDJBV128CFED728F"
};

var thirdEyeBlind = {
	artistString: "thirdEyeBlind",
	artistName: "Third Eye Blind",
	artistID: "AR2FO2M1187B9B9C81"
};

var xAmbassadors = {
	artistString: "xAmbassadors",
	artistName: "X Ambassadors",
	artistID: "AROZWDS13DA2F9F488"
};

var bahamas = {
	artistString: "bahamas",
	artistName: "Bahamas",
	artistID: "ARXPTHP127AF89505D"
};

var borns = {
	artistString: "borns",
	artistName: "B&#216;rns",
	artistID: "ARLQOSZ13100D72572"
};

var toryLanez = {
	artistString: "toryLanez",
	artistName: "Tory Lanez",
	artistID: "ARPSWOE133D0D2775C"
};

var keysNkrates = {
	artistString: "keysNkrates",
	artistName: "Keys N Krates",
	artistID: "ARJQVEF11E90579A95"
};

var aTribeCalledRed = {
	artistString: "aTribeCalledRed",
	artistName: "A Tribe Called Red",
	artistID: "ARRXNOQ131866A5B08"
};

var halfMoonRun = {
	artistString: "halfMoonRun",
	artistName: "Half Moon Run",
	artistID: "ARKVTPS1369F266EAE"
};

var mo = {
	artistString: "mo",
	artistName: "M&#216;",
	artistID: "ARKSSSF1187FB3B4B9"
};

var phosphorescent = {
	artistString: "phosphorescent",
	artistName: "Phosphorescent",
	artistID: "ARL9MID1187B9ABA14"
};

var badbadnotgood = {
	artistString: "badbadnotgood",
	artistName: "Badbadnotgood",
	artistID: "ARCJWFY13559202D1F"
};

var lucius = {
	artistString: "lucius",
	artistName: "Lucius",
	artistID: "ARLLA371187B9B7F48"
};

var patrickWatson = {
	artistString: "patrickWatson",
	artistName: "Patrick Watson",
	artistID: "ARBKWLU1187FB3AA18"
};

var vinceStaples = {
	artistString: "vinceStaples",
	artistName: "Vince Staples",
	artistID: "ARKFMFQ13A6C1556A1"
};

var alunaGeorge = {
	artistString: "alunaGeorge",
	artistName: "Alunageorge",
	artistID: "ARIUUWJ12E0B60F684"
};

var unknownMortalOrchestra = {
	artistString: "unknownMortalOrchestra",
	artistName: "Unknown Mortal Orchestra",
	artistID: "ARQDCOL12D332C2682"
};

var savages = {
	artistString: "savages",
	artistName: "Savages",
	artistID: "AR3S3H21187B9A54EA"
};

var theStruts = {
	artistString: "theStruts",
	artistName: "The Struts",
	artistID: "ARMYVEV1187B9B6A24"
};

var goldlink = {
	artistString: "goldlink",
	artistName: "Goldlink",
	artistID: "ARDEQQQ146CBF5ECFC"
};

var femikuti = {
	artistString: "femikuti",
	artistName: "Femi Kuti & The Positive Force",
	artistID: "ARRXD651187B9A3358"
};

var lindseyStirling = {
	artistString: "lindseyStirling",
	artistName: "Lindsey Stirling",
	artistID: "ARVDGTI12E597F0844"
};

var ohWonder = {
	artistString: "ohWonder",
	artistName: "Oh Wonder",
	artistID: "ARSOCVF14A48B2DE82"
};

var robertDelong = {
	artistString: "robertDelong",
	artistName: "Robert Delong",
	artistID: "ARSHWLT12AA0D91E33"
};

var colemenHell = {
	artistString: "colemen Hell",
	artistName: "Colemen Hell",
	artistID: "AROUAKH1373E16F669"
};

var whiteDenim = {
	artistString: "whiteDenim",
	artistName: "White Denim",
	artistID: "AR975GG1187FB45893"
};

var shad = {
	artistString: "shad",
	artistName: "Shad",
	artistID: "ARVMX4N1187FB442CE"
};

var fidlar = {
	artistString: "fidlar",
	artistName: "Fidlar",
	artistID: "ARZOTOR12E7C5F328D"
};

var tourist = {
	artistString: "tourist",
	artistName: "Tourist",
	artistID: "ARGILYX1187B9B5089"
};

var noahGunderson = {
	artistString: "noahGunderson",
	artistName: "Noah Gunderson",
	artistID: "ARTDLCD145538330B9"
};

var blackMountain = {
	artistString: "blackMountain",
	artistName: "Black Mountain",
	artistID: "ARXD91G1187B99F2CD"
};

var marianHill = {
	artistString: "marianHill",
	artistName: "Marian Hill",
	artistID: "ARUURWT143B5A7C73E"
};

var bombino = {
	artistString: "bombino",
	artistName: "Bombino",
	artistID: "ARRJMSK12F0DAC3C5B"
};

var banners = {
	artistString: "banners",
	artistName: "Banners",
	artistID: "ARIXCAC1462AC11C52"
};

var dillyDally = {
	artistString: "dillyDally",
	artistName: "Dilly Dally",
	artistID: "ARSWYZN1482022B757"
};

var youngEmpires = {
	artistString: "youngEmpires",
	artistName: "Young Empires",
	artistID: "ARGIPAP12ACA2913D0"
};

var allThemWitches = {
	artistString: "allThemWitches",
	artistName: "All Them Witches",
	artistID: "ARPBEXP13833B90751"
};

var mothers = {
	artistString: "mothers",
	artistName: "Mothers",
	artistID: "AR0C62X1187FB3AEDC"
};

var lany = {
	artistString: "lany",
	artistName: "Lany",
	artistID: "ARMDXRY1454D8BD632"
};
var whiteLung = {
	artistString: "whiteLung",
	artistName: "White Lung",
	artistID: "ARIDXVS1242077EC8C"
};

var bishop = {
	artistString: "bishop",
	artistName: "Bishop",
	artistID: "ARMNAWD1187FB55FB6"
};

var thePaperKites = {
	artistString: "thePaperKites",
	artistName: "The Paper Kites",
	artistID: "ARSHLCF13D5B2E1D0A"
};

var littleScream = {
	artistString: "littleScream",
	artistName: "Little Scream",
	artistID: "AREQKZZ12DDD1882BB"
};

var allieX = {
	artistString: "allieX",
	artistName: "Allie X",
	artistID: "ARZQJFB144673C4FC6"
};

var braids = {
	artistString: "braids",
	artistName: "Braids",
	artistID: "ARNNOXC12B7E67A9D9"
};

var riverTiber = {
	artistString: "riverTiber",
	artistName: "River Tiber",
	artistID: "ARGDGUF133F5CF7D99"
};

var tennyson = {
	artistString: "tennyson",
	artistName: "Tennyson",
	artistID: "ARFAOAY13568A19C71"
};

var boomForest = {
	artistString: "boomForest",
	artistName: "Boom Forest",
	artistID: "ARDLTGF1458B758F8D"
};

var theNational = {
	artistString: "theNational",
	artistName: "The National",
	artistID: "ARUUSTM1187B98DB36"
};

var robyn = {
	artistString: "robyn",
	artistName: "Robyn",
	artistID: "AR65M2S1187B9A9C40"
};

var julyTalk = {
	artistString: "julyTalk",
	artistName: "July Talk",
	artistID: "ARHENFK13BDAE330D8"
};

var santigold = {
	artistString: "santigold",
	artistName: "Santigold",
	artistID: "ARRRRYQ12086C11272"
};

var ofMontreal = {
	artistString: "ofMontreal",
	artistName: "Of Montreal",
	artistID: "ARYMCJZ1187FB513DA"
};

var diiv = {
	artistString: "diiv",
	artistName: "Diiv",
	artistID: "ARGFMLB1385DE93944"
};

var charlesBradley = {
	artistString: "charlesBradley",
	artistName: "Charles Bradley & His Extraordinaires",
	artistID: "ARYT7U21187FB517E6"
};

var jazzCartier = {
	artistString: "jazzCartier",
	artistName: "Jazz Cartier",
	artistID: "ARYXRUY12FE0878447"
};

var boyBear = {
	artistString: "boyBear",
	artistName: "Boy & Bear",
	artistID: "ARWIKNK129CDD176DE"
};

var bully = {
	artistString: "bully",
	artistName: "Bully",
	artistID: "ARNH6N51187FB37E2D"
};

var holyFuck = {
	artistString: "holyFuck",
	artistName: "Holy Fuck",
	artistID: "ARFKLA11187FB4C5A3"
};

var plantsAnimals = {
	artistString: "plantsAnimals",
	artistName: "Plants & Animals",
	artistID: "ARTXCA31187FB5409A"
};

var basiaBulat = {
	artistString: "basiaBulat",
	artistName: "Basia Bulat",
	artistID: "ARRF9J21187B9B06FC"
};

var dearRouge = {
	artistString: "dearRouge",
	artistName: "Dear Rouge",
	artistID: "ARBWFHB136E571107D"
};

var raRaRiot = {
	artistString: "raRaRiot",
	artistName: "Ra Ra Riot",
	artistID: "ARFDSEI1187FB567DE"
};

var jasonCollett = {
	artistString: "jasonCollett",
	artistName: "Jason Collett",
	artistID: "ARV5K1K1187B9B4395"
};

var teiShi = {
	artistString: "teiShi",
	artistName: "Tei Shi",
	artistID: "ARXVSIO14006C831F6"
};

var eliotSumner = {
	artistString: "eliotSumner",
	artistName: "Eliot Sumner",
	artistID: "ARAYDRM146D91D0036"
};

var megMac = {
	artistString: "megMac",
	artistName: "Meg Mac",
	artistID: "ARDUFZX13DC3EB5E24"
};

var lennonMaisy = {
	artistString: "lennonMaisy",
	artistName: "Lennon & Maisy",
	artistID: "AROIIRC13B20C75394"
};

var braveShores = {
	artistString: "braveShores",
	artistName: "Brave Shores",
	artistID: "ARHMWKP14765BDAC18"
};

var torMiller = {
	artistString: "torMiller",
	artistName: "Tor Miller",
	artistID: "ARKVRUW1497032D660"
};

var kalleMattson = {
	artistString: "kalleMattson",
	artistName: "Kalle Mattson",
	artistID: "ARUETPL1242078369A"
};

var charlotteDayWilson = {
	artistString: "charlotteDayWilson",
	artistName: "Charlotte Day Wilson",
	artistID: "ARGCNCV12AF7DB2290"
};

var mostPeople = {
	artistString: "mostPeople",
	artistName: "Most People",
	artistID: "AROVFYE143891C8F3C"
};

var redHotChiliPeppers = {
	artistName: "red hot chili peppers",
	artistString: "redHotChiliPeppers",
	artistID: "ARE8GLF1187FB52532"
};

var lanaDelRey = {
	artistName: "lana del rey",
	artistString: "lanaDelRey",
	artistID: "ARICLSK131AAE25F5E"
};

var radiohead = {
	artistName: "radiohead",
	artistString: "radiohead",
	artistID: "ARH6W4X1187B99274F"
};

var disclosure = {
	artistName: "disclosure",
	artistString: "disclosure",
	artistID: "ARPCATO12B3B3540E2"
};

var theLumineers = {
	artistName: "the lumineers",
	artistString: "theLumineers",
	artistID: "ARDWDTB12CAE3A9816"
};

var grimes = {
	artistName: "grimes",
	artistString: "grimes",
	artistID: "ARJUURB12AF7D91356"
};

var flume = {
	artistName: "flume",
	artistString: "flume",
	artistID: "ARRRSNG1242077E912"
};

var bastille = {
	artistName: "bastille",
	artistString: "bastille",
	artistID: "ARZT6MQ1187FB56487"
};

var passenger = {
	artistName: "passenger",
	artistString: "passenger",
	artistID: "ARMTZR11187B9AD0C2"
};

var walktheMoon = {
	artistName: "walk the moon",
	artistString: "walktheMoon",
	artistID: "ARAZEGJ11E905798ED"
};

var leonBridges = {
	artistName: "leon bridges",
	artistString: "leonBridges",
	artistID: "ARXQDEU14B13A73839"
};

var blocParty = {
	artistName: "bloc party",
	artistString: "blocParty",
	artistID: "ARI7DOB1187FB37AA4"
};

var paulKalkbrenner = {
	artistName: "paul kalkbrenner",
	artistString: "paulKalkbrenner",
	artistID: "ARH33CP1187FB3836B"
};

var macMiller = {
	artistName: "mac miller",
	artistString: "macMiller",
	artistID: "ARSKHHY1269FB3830E"
};

var cypressHill = {
	artistName: "cypress hill",
	artistString: "cypressHill",
	artistID: "ARMD3XX1187B9ACF84"
};

var silversunPickups = {
	artistName: "silversun pickups",
	artistString: "silversunPickups",
	artistID: "ARI276C1187FB39DA4"
};

var theCatEmpire = {
	artistName: "the cat empire",
	artistString: "theCatEmpire",
	artistID: "ARQNLH31187B9ADC1D"
};

var kaytranada = {
	artistName: "kaytranada",
	artistString: "kaytranada",
	artistID: "ARJBOIF13D19662E96"
};

var toddTerjeTheOlsens = {
	artistName: "todd terje & the olsens",
	artistString: "toddTerjeTheOlsens",
	artistID: "AR0U6711187FB3FFB1"
};

var daughter = {
	artistName: "daughter",
	artistString: "daughter",
	artistID: "ARFDJ251187B9B132B"
};

var theBarrBrothers = {
	artistName: "the barr brothers",
	artistString: "theBarrBrothers",
	artistID: "ARKVJZJ12ACA291292"
};

var logic = {
	artistName: "logic",
	artistString: "logic",
	artistID: "ARDFUFY1187B98B206"
};

var boysNoize = {
	artistName: "boys noize",
	artistString: "boysNoize",
	artistID: "ARVXFBU1187B989D86"
};

var elleKing = {
	artistName: "elle king",
	artistString: "elleKing",
	artistID: "ARPNRSK13687E71F38"
};

var yearsYears = {
	artistName: "years & years",
	artistString: "yearsYears",
	artistID: "ARPDYVR13A6C15570C"
};

var gramatik = {
	artistName: "gramatik",
	artistString: "gramatik",
	artistID: "ARNAPXQ123E29C1CAD"
};

var julyTalk = {
	artistName: "july talk",
	artistString: "julyTalk",
	artistID: "ARHENFK13BDAE330D8"
};

var jazzCartier = {
	artistName: "jazz cartier",
	artistString: "jazzCartier",
	artistID: "ARYXRUY12FE0878447"
};

var stLucia = {
	artistName: "st. lucia",
	artistString: "stLucia",
	artistID: "AREOMKJ12AF7D97C5D"
};

var dragonette = {
	artistName: "dragonette",
	artistString: "dragonette",
	artistID: "AR7WSXC1187FB37A2E"
};

var lapsley = {
	artistName: "lapsley",
	artistString: "lapsley",
	artistID: "AREGBNQ12D5CD7B626"
};

var melanieMartinez = {
	artistName: "melanie martinez",
	artistString: "melanieMartinez",
	artistID: "ARDCQBY13C49821879"
};

var skepta = {
	artistName: "skepta",
	artistString: "skepta",
	artistID: "ARJH9IA1187B9B4235"
};

var postMalone = {
	artistName: "post malone",
	artistString: "postMalone",
	artistID: "ARPZUBO14B60AC689F"
};

var thePaperKites = {
	artistName: "the paper kites",
	artistString: "thePaperKites",
	artistID: "ARSHLCF13D5B2E1D0A"
};

var evianChrist = {
	artistName: "evian christ",
	artistString: "evianChrist",
	artistID: "ARZVZPT13B48012AC4"
};

var lane8 = {
	artistName: "lane 8",
	artistString: "lane8",
	artistID: "ARBLARP13FA2347608"
};

var theStrumbellas = {
	artistName: "the strumbellas",
	artistString: "theStrumbellas",
	artistID: "ARXFQIG13544FB4EFB"
};

var theUnderachievers = {
	artistName: "the underachievers",
	artistString: "theUnderachievers",
	artistID: "ARH4PFA1187FB3F682"
};

var frightenedRabbit = {
	artistName: "frightened rabbit",
	artistString: "frightenedRabbit",
	artistID: "AR9W55Y1187FB4AA37"
};

var snakehips = {
	artistName: "snakehips",
	artistString: "snakehips",
	artistID: "AR6BZCE1187FB3618F"
};

var jackGarratt = {
	artistName: "jack garratt",
	artistString: "jackGarratt",
	artistID: "ARJVDAK146F77EA6EE"
};

var muraMasa = {
	artistName: "mura masa",
	artistString: "muraMasa",
	artistID: "ARY79AC1187FB4181E"
};

var goldlink = {
	artistName: "goldlink",
	artistString: "goldlink",
	artistID: "ARDEQQQ146CBF5ECFC"
};

var borisBrejcha = {
	artistName: "boris brejcha",
	artistString: "borisBrejcha",
	artistID: "ARSEBR71187FB523D6"
};

var frances = {
	artistName: "frances",
	artistString: "frances",
	artistID: "ARQIXOG11F4C843E75"
};

var rufusDuSol = {
	artistName: "rufus du sol",
	artistString: "rufusDuSol",
	artistID: "ARPVYGQ143CB2DFA23"
};

var fakear = {
	artistName: "fakear",
	artistString: "fakear",
	artistID: "ARHHRTP13F0DEE3B47"
};

var misterwives = {
	artistName: "misterwives",
	artistString: "misterwives",
	artistID: "ARDHBAZ1412A317967"
};

var theStruts = {
	artistName: "the struts",
	artistString: "theStruts",
	artistID: "ARMYVEV1187B9B6A24"
};

var classixx = {
	artistName: "classixx",
	artistString: "classixx",
	artistID: "ARDFBAM11EBCD78E43"
};

var sonreal = {
	artistName: "sonreal",
	artistString: "sonreal",
	artistID: "ARICKSD12CAE3AA26E"
};

var theWombats = {
	artistName: "the wombats",
	artistString: "theWombats",
	artistID: "ARFAJNM14B13A9DF06"
};

var hiatusKaiyote = {
	artistName: "hiatus kaiyote",
	artistString: "hiatusKaiyote",
	artistID: "ARJSYEA13B0169D271"
};

var jeremyLoops = {
	artistName: "jeremy loops",
	artistString: "jeremyLoops",
	artistID: "ARPRIYJ13CA7DCCB71"
};

var hiLo = {
	artistName: "hi lo",
	artistString: "hiLo",
	artistID: "ARSLAU81187FB440AC"
};

var charlotteCardin = {
	artistName: "charlotte cardin",
	artistString: "charlotteCardin",
	artistID: "ARSGZFQ1492F101F32"
};

var littleSimz = {
	artistName: "little simz",
	artistString: "littleSimz",
	artistID: "ARPHXLG13DEB14A888"
};

var synapson = {
	artistName: "synapson",
	artistString: "synapson",
	artistID: "ARSLMZP12FE0874F36"
};

var nothingButThieves = {
	artistName: "nothing but thieves",
	artistString: "nothingButThieves",
	artistID: "ARBGYGS1377A5F0597"
};

var theRange = {
	artistName: "the range",
	artistString: "theRange",
	artistID: "AR2221M1187B9AAB25"
};

var cloves = {
	artistName: "cloves",
	artistString: "cloves",
	artistID: "ARMNOYV11EB9C81A50"
};

var nightRiots = {
	artistName: "night riots",
	artistString: "nightRiots",
	artistID: "ARGWSHW13CDB825DF1"
};

var jahkoy = {
	artistName: "jahkoy",
	artistString: "jahkoy",
	artistID: "ARDDDLN146B59EB868"
};

var foyVance = {
	artistName: "foy vance",
	artistString: "foyVance",
	artistID: "ARZV4CE1187FB3FFDC"
};

var leMatos = {
	artistName: "le matos",
	artistString: "leMatos",
	artistID: "ARQDVVG1269FB377FE"
};

var haelos = {
	artistName: "haelos",
	artistString: "haelos",
	artistID: "ARLNHID14C05B3394C"
};

var feder = {
	artistName: "feder",
	artistString: "feder",
	artistID: "ARBUOJU13361805FF0"
};

var alexG = {
	artistName: "alex g",
	artistString: "alexG",
	artistID: "ARSWEWS125FEF319B3"
};

var caveboy = {
	artistName: "caveboy",
	artistString: "caveboy",
	artistID: "ARQSZUJ14CF19B6356"
};

var elephantStone = {
	artistName: "elephant stone",
	artistString: "elephantStone",
	artistID: "ARPUVBT11E905795A1"
};

var haute = {
	artistName: "haute",
	artistString: "haute",
	artistID: "ARCUIIG1476D02BA78"
};

var israelNash = {
	artistName: "israel nash",
	artistString: "israelNash",
	artistID: "ARIFZDB1447A74BA8F"
};

var noe = {
	artistName: "noe",
	artistString: "noe",
	artistID: "ARWTSFH12406A89ACE"
};

// **************************
// Music Festival Variables
// **************************

// Create variable for each music festival, containing an array for each artist playing

var wayhome16 = {
	name: 'Wayhome',
	year: '2016',
	location: 'Oro-Medonte, ON',
	country: 'Canada',
	artists: [lcdSoundsystem, arcadeFire, theKillers, majorLazer, m83, haim, chvrches, rayLamontagne, fkaTwigs, future, chetFaker, arkells, beirut, garyClark, macDemarco, wolfParade, stars, lastShadowPuppets, foals, theArcs, nathanielRateliff, mattKim, kurtVile, glassAnimals, thirdEyeBlind, xAmbassadors, bahamas, borns, toryLanez, keysNkrates, aTribeCalledRed, halfMoonRun, mo, phosphorescent, badbadnotgood, lucius, patrickWatson, vinceStaples, alunaGeorge, unknownMortalOrchestra, savages, theStruts, goldlink, femikuti, lindseyStirling, ohWonder, robertDelong, colemenHell, whiteDenim, shad, fidlar, tourist, noahGunderson, blackMountain, marianHill, bombino, banners, dillyDally, youngEmpires, allThemWitches, mothers, lany, whiteLung, bishop, thePaperKites, littleScream, allieX, braids, riverTiber, tennyson, boomForest]
};

var fieldtrip16 = {
	name: 'Wayhome',
	year: '2016',
	location: 'Toronto, ON',
	country: 'Canada',
	artists: [theNational, robyn, julyTalk, santigold, ofMontreal, diiv, charlesBradley, jazzCartier, boyBear, bully, holyFuck, plantsAnimals, basiaBulat, dearRouge, raRaRiot, jasonCollett, teiShi, eliotSumner, megMac, lennonMaisy, braveShores, torMiller, kalleMattson, charlotteDayWilson, mostPeople]
};

var osheaga16 = {
	name: 'Osheaga',
	year: '2016',
	location: 'Montreal, QC',
	country: 'Canada',
	artists: [redHotChiliPeppers, lanaDelRey, radiohead, disclosure, theLumineers, m83, grimes, flume, beirut, bastille, passenger, walktheMoon, leonBridges, lastShadowPuppets, blocParty, paulKalkbrenner, macMiller, theArcs, cypressHill, silversunPickups, foals, kurtVile, wolfParade, theCatEmpire, nathanielRateliff, kaytranada, toddTerjeTheOlsens, daughter, theBarrBrothers, logic, boysNoize, elleKing, yearsYears, gramatik, toryLanez, julyTalk, jazzCartier, stLucia, ohWonder, vinceStaples, mo, dragonette, lapsley, melanieMartinez, skepta, postMalone, keysNkrates, thePaperKites, evianChrist, lane8, theStrumbellas, theUnderachievers, frightenedRabbit, snakehips, jackGarratt, muraMasa, goldlink, borisBrejcha, borns, frances, rufusDuSol, fakear, colemenHell, lucius, misterwives, theStruts, whiteLung, classixx, sonreal, theWombats, hiatusKaiyote, jeremyLoops, hiLo, marianHill, charlotteCardin, littleSimz, banners, synapson, nothingButThieves, theRange, cloves, nightRiots, dillyDally, tennyson, jahkoy, foyVance, leMatos, haelos, feder, alexG, caveboy, elephantStone, haute, israelNash, noe]
};

// **************************
// Functions for User Selection
// **************************

// When user selects festival, populate festivalName
// var selectedFestival = ''; // *** GET FROM USER SELECTION
var festivalName = '';
var selectedFestival = '';

// Create checkbox/label for each artist in music festival array

// User also selects # of songs (1 - 10)
// Add extra songs for case of duplicates
var userNumSongs = '';
var numSongs = '';

// When user selects artists for playlist create a new array with artist ID's
var selectedArtists = [];

echoNest.populateArtists = function (festivalChoice) {
	var festivalArtists = festivalChoice.artists;

	$.each(festivalArtists, function (i, value) {
		var checkbox = '<input class="festivalArtists" type="checkbox" name="festivalArtists" value="' + value.artistString + '" id="' + value.artistString + '">';
		var label = '<label for="' + value.artistString + '">' + value.artistName + '</label>';

		$('div.artistList ul').append('<li>' + checkbox + label + '</li>');
	});

	$('label').hover(function () {
		$(this).parent().addClass('hover');
	}, function () {
		$(this).parent().removeClass('hover');
	});

	$('input[type=checkbox]').on('click', function (e) {
		if ($('input[type=checkbox]:checked').length > 20) {
			$(this).prop('checked', false);
		} else {
			$(this).parent().toggleClass('select');
		}
	});

	$('input').click(function () {
		$('input:not(:checked)').parent().removeClass("select");
		$('input:checked').parent().addClass("select");
	});

	// if ($('input[type=radio]').is(:checked)) {

	// };

	$('a.getPlaylist').on('click', function () {
		$('#results').removeClass('hidden');
		$('#footer').removeClass('hidden');
		$('span.festival').text(festivalChoice.name);
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#results'
		});
		var userSelectionSongs = $('input:radio[name=numberSongs]:checked').val();
		userNumSongs = parseInt(userSelectionSongs);
		numSongs = userNumSongs + 5;
		// console.log(userNumSongs);
		// console.log(numSongs);
		var userArtistSelection = [];
		$('input:checkbox[name=festivalArtists]:checked').each(function () {
			userArtistSelection.push(window[$(this).val()]);
		});
		// console.log(userArtistSelection);
		$.each(userArtistSelection, function (i, value) {
			selectedArtists.push(value.artistID);
		});
		// console.log(selectedArtists);
		echoNest.getAllSongs(selectedArtists);
	});
};

// **************************
// Functions for song selection
// **************************

var songData = [];

// Write a function to get songs for each artist in array --> uses getArtistSongs, lead into filterSongs
echoNest.getAllSongs = function (artistArray) {
	// Push all API data into one array
	var apiData = [];
	for (var i = 0; i < artistArray.length; i += 1) {
		apiData.push(echoNest.getArtistSongs(artistArray[i], numSongs));
	};
	// console.log(apiData);

	// Filter down API data to information needed (songs)
	$.when.apply(null, apiData).then(function () {
		songData = Array.prototype.slice.apply(arguments);
		songData = songData.map(function (value) {
			return value[0].response.songs;
		});
		// console.log(songData);
		echoNest.filterSongs(songData);
	});
};

// Write a function to call back # of songs
echoNest.getArtistSongs = function (artistID, songNum, time) {
	return $.ajax({
		url: echoNestURL,
		method: 'GET',
		dataType: 'json',
		data: {
			api_key: echoNestKey,
			artist_id: artistID,
			format: 'json',
			sort: 'song_hotttnesss-desc',
			start: 0,
			results: songNum,
			bucket: ['id:spotify', 'tracks'],
			limit: true
		},
		traditional: true
	});
};

// Write a function to delete duplicate songs from arrays
echoNest.filterSongs = function (songs) {
	var cleanedSongs = [];
	for (var i = 0; i < songs.length; i = i + 1) {
		var noDuplicates = _.uniq(songs[i], function (value) {
			return value.title;
		});

		// Filter out Christmas songs??
		// var noDuplicatesChristmas = _.filter(noDuplicates[i], function(value){
		// 	return value.title != /([^Christmas])\w+/i;
		// });
		cleanedSongs.push(noDuplicates);
	};
	// console.log(cleanedSongs);
	echoNest.compileSongs(cleanedSongs);
};

// Write a function to take the userNum # of songs from each cleaned array
echoNest.compileSongs = function (songArrays) {
	// For each array inside the main array, push the # of song OBJECTS that the user requested
	$.each(songArrays, function () {
		for (var i = 0; i < userNumSongs; i = i + 1) {
			echoNestSongList.push(this[i]);
		};
	});
	// console.log(echoNestSongList);
	// echoNest.postSongInfo(echoNestSongList);
	var shuffled = echoNest.shuffleSongs(echoNestSongList);
	// console.log(shuffled);
	var doubleShuffle = echoNest.shuffleSongs(shuffled);
	echoNest.cleanArray(doubleShuffle);
};

// function to shuffle
echoNest.shuffleSongs = function (array) {
	for (var i = array.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
};

echoNest.cleanArray = function (data) {
	var cleandata = data.filter(function (element) {
		return !!element;
	});
	// console.log(cleandata);
	echoNest.postSongInfo(cleandata);
};

// Write a function to post song info onto page *** TO BE CHANGED *** SUFFLE SONGS?
echoNest.postSongInfo = function (data) {
	// console.log(data);
	$.each(data, function (i, value) {
		// console.log(this);
		var songNumber = i + 1;
		var songItem = '<td>' + songNumber + '</td>';
		var songName = this.title;
		var nameItem = '<td>' + songName + '</td>';
		var artistName = this.artist_name;
		var artistItem = '<td>' + artistName + '</td>';

		$('.results table').append('<tr>' + songItem + nameItem + artistItem + '</tr>');

		// Get spotify song ID
		var songID = this.tracks[0].foreign_id;
		var onlySongID = songID.replace("spotify:track:", "");
		spotifySongList.push(onlySongID);
	});
	// console.log(spotifySongList);
	echoNest.populateSpotify(spotifySongList);
};

echoNest.populateSpotify = function () {
	// Join all spotify song IDs into one string and create into URL for spotify player
	var spotifySongListChain = spotifySongList.join(',');
	var spotifySongListURL = 'https://embed.spotify.com/?uri=spotify:trackset:' + selectedFestival.name + ' ' + selectedFestival.year + ' Playlist:' + spotifySongListChain + '&theme=white';
	// console.log(spotifySongListURL);
	// Update spotify player on the page
	$('iframe').attr('src', spotifySongListURL);
};

// Initialize Function
echoNest.init = function () {
	$("#mySelect").heapbox();

	$('a.start').on('click', function (e) {
		e.preventDefault();
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#festival'
		});
	});

	$('.heapOption a').on('click', function () {
		$('#artists').removeClass('hidden');
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#artists'
		});
		selectedFestival = window[$('select').find(":selected").val()];
		// console.log(selectedFestival);
		// var festivalName = selectedFestival.name + ' ' + selectedFestival.year;
		festivalName = selectedFestival.name + ' ' + 'Lineup';
		// console.log(festivalName);
		$('h2.festival').text(festivalName);
		echoNest.populateArtists(selectedFestival);
	});
};

// **************************
// DOCUMENT READY
// **************************

$(document).ready(function () {
	echoNest.init();

	// $('input[type=checkbox]').on('click', function(evt) {
	//    if($("input[name='festivalArtists']:checked").length > 20) {
	// console.log('too many');
	//    	this.checked = false;
	//    };
	// });

	$('.startOver').on('click', function (e) {
		e.preventDefault();
		$.smoothScroll({
			scrollElement: $('body'),
			scrollTarget: '#home'
		});
		location.reload();
	});
});