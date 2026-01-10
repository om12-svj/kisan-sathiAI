/**
 * KISAN SAHAY - Multi-language Support
 * Languages: Marathi (mr), Hindi (hi), English (en), Kannada (kn), Telugu (te), Tamil (ta), Gujarati (gu), Bengali (bn)
 */

const SUPPORTED_LANGUAGES = ['mr', 'hi', 'en', 'kn', 'te', 'ta', 'gu', 'bn'];

const LANGUAGE_NAMES = {
    mr: 'मराठी',
    hi: 'हिंदी',
    en: 'English',
    kn: 'ಕನ್ನಡ',
    te: 'తెలుగు',
    ta: 'தமிழ்',
    gu: 'ગુજરાતી',
    bn: 'বাংলা'
};

const TRANSLATIONS = {
    // ============================================
    // COMMON / HEADER
    // ============================================
    appName: {
        mr: 'किसान सहाय्य',
        hi: 'किसान सहायता',
        en: 'Kisan Sahay',
        kn: 'ರೈತ ಸಹಾಯ',
        te: 'రైతు సహాయం',
        ta: 'விவசாயி உதவி',
        gu: 'ખેડૂત સહાય',
        bn: 'কৃষক সাহায্য'
    },
    appTagline: {
        mr: 'Farmer Mental Health Support',
        hi: 'किसान मानसिक स्वास्थ्य सहायता',
        en: 'Farmer Mental Health Support',
        kn: 'ರೈತ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಬೆಂಬಲ',
        te: 'రైతు మానసిక ఆరోగ్య మద్దతు',
        ta: 'விவசாயி மன நல ஆதரவு',
        gu: 'ખેડૂત માનસિક સ્વાસ્થ્ય સહાય',
        bn: 'কৃষক মানসিক স্বাস্থ্য সহায়তা'
    },
    navCheckin: {
        mr: 'Check-in',
        hi: 'चेक-इन',
        en: 'Check-in',
        kn: 'ಚೆಕ್-ಇನ್',
        te: 'చెక్-ఇన్',
        ta: 'செக்-இன்',
        gu: 'ચેક-ઇન',
        bn: 'চেক-ইন'
    },
    navHistory: {
        mr: 'इतिहास',
        hi: 'इतिहास',
        en: 'History',
        kn: 'ಇತಿಹಾಸ',
        te: 'చరిత్ర',
        ta: 'வரலாறு',
        gu: 'ઇતિહાસ',
        bn: 'ইতিহাস'
    },
    navHelplines: {
        mr: 'Helplines',
        hi: 'हेल्पलाइन',
        en: 'Helplines',
        kn: 'ಹೆಲ್ಪ್‌ಲೈನ್',
        te: 'హెల్ప్‌లైన్లు',
        ta: 'உதவி எண்கள்',
        gu: 'હેલ્પલાઇન',
        bn: 'হেল্পলাইন'
    },
    navAbout: {
        mr: 'About',
        hi: 'परिचय',
        en: 'About',
        kn: 'ಬಗ್ಗೆ',
        te: 'గురించి',
        ta: 'பற்றி',
        gu: 'વિશે',
        bn: 'সম্পর্কে'
    },
    logout: {
        mr: 'बाहेर पडा',
        hi: 'लॉग आउट',
        en: 'Logout',
        kn: 'ಲಾಗ್ ಔಟ್',
        te: 'లాగ్ అవుట్',
        ta: 'வெளியேறு',
        gu: 'લૉગ આઉટ',
        bn: 'লগ আউট'
    },

    // ============================================
    // HERO SECTION
    // ============================================
    heroTitle: {
        mr: 'शेतकरी बंधू-भगिनींसाठी',
        hi: 'किसान भाई-बहनों के लिए',
        en: 'For Our Farmer Brothers & Sisters',
        kn: 'ನಮ್ಮ ರೈತ ಸಹೋದರ-ಸಹೋದರಿಯರಿಗಾಗಿ',
        te: 'మన రైతు సోదరులు & సోదరీమణులకు',
        ta: 'நம் விவசாயி சகோதர சகோதரிகளுக்காக',
        gu: 'અમારા ખેડૂત ભાઈ-બહેનો માટે',
        bn: 'আমাদের কৃষক ভাই-বোনদের জন্য'
    },
    heroSubtitle: {
        mr: 'Supporting Our Farmers',
        hi: 'हमारे किसानों का समर्थन',
        en: 'Supporting Our Farmers',
        kn: 'ನಮ್ಮ ರೈತರಿಗೆ ಬೆಂಬಲ',
        te: 'మన రైతులకు మద్దతు',
        ta: 'நம் விவசாயிகளுக்கு ஆதரவு',
        gu: 'અમારા ખેડૂતોને ટેકો',
        bn: 'আমাদের কৃষকদের সহায়তা'
    },
    heroDescription: {
        mr: 'तुमची काळजी आम्हाला आहे। Weekly check-in करा आणि योग्य मार्गदर्शन मिळवा।',
        hi: 'आपकी चिंता हमें है। Weekly check-in करें और उचित मार्गदर्शन पाएं।',
        en: 'We care about you. Do a weekly check-in and get proper guidance.',
        kn: 'ನಿಮ್ಮ ಬಗ್ಗೆ ನಮಗೆ ಕಾಳಜಿ ಇದೆ. ವಾರದ ಚೆಕ್-ಇನ್ ಮಾಡಿ ಮತ್ತು ಸರಿಯಾದ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.',
        te: 'మీ గురించి మాకు శ్రద్ధ ఉంది. వారపు చెక్-ఇన్ చేయండి మరియు సరైన మార్గదర్శకత్వం పొందండి.',
        ta: 'உங்களைப் பற்றி எங்களுக்கு அக்கறை. வாராந்திர செக்-இன் செய்து சரியான வழிகாட்டுதலைப் பெறுங்கள்.',
        gu: 'અમને તમારી ચિંતા છે. સાપ્તાહિક ચેક-ઇન કરો અને યોગ્ય માર્ગદર્શન મેળવો.',
        bn: 'আমরা আপনার যত্ন নিই। সাপ্তাহিক চেক-ইন করুন এবং সঠিক নির্দেশনা পান।'
    },
    ctaButton: {
        mr: 'साप्ताहिक तपासणी करा',
        hi: 'साप्ताहिक जांच करें',
        en: 'Weekly Check-in',
        kn: 'ವಾರದ ಚೆಕ್-ಇನ್',
        te: 'వారపు చెక్-ఇన్',
        ta: 'வாராந்திர செக்-இன்',
        gu: 'સાપ્તાહિક ચેક-ઇન',
        bn: 'সাপ্তাহিক চেক-ইন'
    },
    heroCardText: {
        mr: 'तुम्ही एकटे नाही आहात',
        hi: 'आप अकेले नहीं हैं',
        en: 'You are not alone',
        kn: 'ನೀವು ಒಬ್ಬಂಟಿಯಲ್ಲ',
        te: 'మీరు ఒంటరిగా లేరు',
        ta: 'நீங்கள் தனியாக இல்லை',
        gu: 'તમે એકલા નથી',
        bn: 'আপনি একা নন'
    },

    // ============================================
    // FORM SECTION
    // ============================================
    formTitle: {
        mr: 'साप्ताहिक तपासणी',
        hi: 'साप्ताहिक जांच',
        en: 'Weekly Check-in',
        kn: 'ವಾರದ ಚೆಕ್-ಇನ್',
        te: 'వారపు చెక్-ఇన్',
        ta: 'வாராந்திர செக்-இன்',
        gu: 'સાપ્તાહિક ચેક-ઇન',
        bn: 'সাপ্তাহিক চেক-ইন'
    },
    formSubtitle: {
        mr: 'कृपया खालील माहिती भरा। तुमची सर्व माहिती गोपनीय राहील।',
        hi: 'कृपया नीचे दी गई जानकारी भरें। आपकी सभी जानकारी गोपनीय रहेगी।',
        en: 'Please fill the information below. All your data will remain confidential.',
        kn: 'ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಮಾಹಿತಿಯನ್ನು ಭರ್ತಿ ಮಾಡಿ. ನಿಮ್ಮ ಎಲ್ಲಾ ಡೇಟಾ ಗೌಪ್ಯವಾಗಿ ಉಳಿಯುತ್ತದೆ.',
        te: 'దయచేసి క్రింది సమాచారం నింపండి. మీ డేటా అంతా గోప్యంగా ఉంటుంది.',
        ta: 'கீழே உள்ள தகவலை நிரப்பவும். உங்கள் தரவு ரகசியமாக இருக்கும்.',
        gu: 'કૃપા કરી નીચેની માહિતી ભરો. તમારો તમામ ડેટા ગોપનીય રહેશે.',
        bn: 'নিচের তথ্য পূরণ করুন। আপনার সমস্ত ডেটা গোপনীয় থাকবে।'
    },

    // Form Labels
    cropCondition: {
        mr: 'पीक स्थिती',
        hi: 'फसल की स्थिति',
        en: 'Crop Condition',
        kn: 'ಬೆಳೆ ಸ್ಥಿತಿ',
        te: 'పంట స్థితి',
        ta: 'பயிர் நிலை',
        gu: 'પાક સ્થિતિ',
        bn: 'ফসল অবস্থা'
    },
    cropExcellent: {
        mr: 'उत्कृष्ट',
        hi: 'उत्कृष्ट',
        en: 'Excellent',
        kn: 'ಅತ್ಯುತ್ತಮ',
        te: 'అద్భుతం',
        ta: 'சிறந்த',
        gu: 'ઉત્તમ',
        bn: 'চমৎকার'
    },
    cropGood: {
        mr: 'चांगली',
        hi: 'अच्छी',
        en: 'Good',
        kn: 'ಉತ್ತಮ',
        te: 'మంచిది',
        ta: 'நல்ல',
        gu: 'સારી',
        bn: 'ভালো'
    },
    cropModerate: {
        mr: 'मध्यम',
        hi: 'मध्यम',
        en: 'Moderate',
        kn: 'ಮಧ್ಯಮ',
        te: 'మధ్యస్థం',
        ta: 'நடுத்தரம்',
        gu: 'મધ્યમ',
        bn: 'মাঝারি'
    },
    cropPoor: {
        mr: 'खराब',
        hi: 'खराब',
        en: 'Poor',
        kn: 'ಕಳಪೆ',
        te: 'చెడ్డ',
        ta: 'மோசமான',
        gu: 'ખરાબ',
        bn: 'খারাপ'
    },
    cropDestroyed: {
        mr: 'पूर्ण नुकसान',
        hi: 'पूर्ण नुकसान',
        en: 'Destroyed',
        kn: 'ನಾಶವಾಗಿದೆ',
        te: 'నాశనం',
        ta: 'அழிந்தது',
        gu: 'નાશ',
        bn: 'ধ্বংস'
    },

    loanPressure: {
        mr: 'कर्जाचा भार',
        hi: 'कर्ज का बोझ',
        en: 'Loan Pressure',
        kn: 'ಸಾಲದ ಒತ್ತಡ',
        te: 'రుణ ఒత్తిడి',
        ta: 'கடன் அழுத்தம்',
        gu: 'લોન દબાણ',
        bn: 'ঋণ চাপ'
    },
    loanNone: {
        mr: 'कर्ज नाही',
        hi: 'कर्ज नहीं',
        en: 'None',
        kn: 'ಸಾಲ ಇಲ್ಲ',
        te: 'రుణం లేదు',
        ta: 'கடன் இல்லை',
        gu: 'કોઈ લોન નથી',
        bn: 'কোন ঋণ নেই'
    },
    loanLow: {
        mr: 'कमी',
        hi: 'कम',
        en: 'Low',
        kn: 'ಕಡಿಮೆ',
        te: 'తక్కువ',
        ta: 'குறைவு',
        gu: 'ઓછું',
        bn: 'কম'
    },
    loanMedium: {
        mr: 'मध्यम',
        hi: 'मध्यम',
        en: 'Medium',
        kn: 'ಮಧ್ಯಮ',
        te: 'మధ్యస్థం',
        ta: 'நடுத்தரம்',
        gu: 'મધ્યમ',
        bn: 'মাঝারি'
    },
    loanHigh: {
        mr: 'जास्त',
        hi: 'ज्यादा',
        en: 'High',
        kn: 'ಹೆಚ್ಚು',
        te: 'ఎక్కువ',
        ta: 'அதிக',
        gu: 'વધારે',
        bn: 'বেশি'
    },
    loanSevere: {
        mr: 'अत्यंत जास्त',
        hi: 'बहुत ज्यादा',
        en: 'Severe',
        kn: 'ತೀವ್ರ',
        te: 'తీవ్రమైన',
        ta: 'கடுமையான',
        gu: 'ગંભીર',
        bn: 'গুরুতর'
    },

    sleepQuality: {
        mr: 'झोपेची गुणवत्ता',
        hi: 'नींद की गुणवत्ता',
        en: 'Sleep Quality',
        kn: 'ನಿದ್ರೆ ಗುಣಮಟ್ಟ',
        te: 'నిద్ర నాణ్యత',
        ta: 'தூக்க தரம்',
        gu: 'ઊંઘની ગુણવત્તા',
        bn: 'ঘুমের গুণমান'
    },
    sleepGood: {
        mr: 'चांगली झोप (7+ तास)',
        hi: 'अच्छी नींद (7+ घंटे)',
        en: 'Good (7+ hrs)',
        kn: 'ಉತ್ತಮ ನಿದ್ರೆ (7+ ಗಂ)',
        te: 'మంచి నిద్ర (7+ గం)',
        ta: 'நல்ல தூக்கம் (7+ மணி)',
        gu: 'સારી ઊંઘ (7+ કલાક)',
        bn: 'ভালো ঘুম (৭+ ঘণ্টা)'
    },
    sleepFair: {
        mr: 'ठीक (5-6 तास)',
        hi: 'ठीक (5-6 घंटे)',
        en: 'Fair (5-6 hrs)',
        kn: 'ಸಾಧಾರಣ (5-6 ಗಂ)',
        te: 'సాధారణ (5-6 గం)',
        ta: 'சரி (5-6 மணி)',
        gu: 'ઠીક (5-6 કલાક)',
        bn: 'ঠিক আছে (৫-৬ ঘণ্টা)'
    },
    sleepPoor: {
        mr: 'कमी झोप (3-4 तास)',
        hi: 'कम नींद (3-4 घंटे)',
        en: 'Poor (3-4 hrs)',
        kn: 'ಕಡಿಮೆ ನಿದ್ರೆ (3-4 ಗಂ)',
        te: 'తక్కువ నిద్ర (3-4 గం)',
        ta: 'குறைவான தூக்கம் (3-4 மணி)',
        gu: 'ઓછી ઊંઘ (3-4 કલાક)',
        bn: 'কম ঘুম (৩-৪ ঘণ্টা)'
    },
    sleepVeryPoor: {
        mr: 'अत्यंत कमी (<3 तास)',
        hi: 'बहुत कम (<3 घंटे)',
        en: 'Very Poor (<3 hrs)',
        kn: 'ತುಂಬಾ ಕಡಿಮೆ (<3 ಗಂ)',
        te: 'చాలా తక్కువ (<3 గం)',
        ta: 'மிகக் குறைவு (<3 மணி)',
        gu: 'ખૂબ ઓછી (<3 કલાક)',
        bn: 'খুব কম (<৩ ঘণ্টা)'
    },

    familySupport: {
        mr: 'कुटुंबाचा आधार',
        hi: 'परिवार का सहारा',
        en: 'Family Support',
        kn: 'ಕುಟುಂಬ ಬೆಂಬಲ',
        te: 'కుటుంబ మద్దతు',
        ta: 'குடும்ப ஆதரவு',
        gu: 'પરિવાર સહાય',
        bn: 'পারিবারিক সহায়তা'
    },
    familyStrong: {
        mr: 'मजबूत आधार',
        hi: 'मजबूत सहारा',
        en: 'Strong',
        kn: 'ಬಲವಾದ',
        te: 'బలమైన',
        ta: 'வலுவான',
        gu: 'મજબૂત',
        bn: 'শক্তিশালী'
    },
    familyModerate: {
        mr: 'मध्यम आधार',
        hi: 'मध्यम सहारा',
        en: 'Moderate',
        kn: 'ಮಧ್ಯಮ',
        te: 'మధ్యస్థం',
        ta: 'நடுத்தரம்',
        gu: 'મધ્યમ',
        bn: 'মাঝারি'
    },
    familyWeak: {
        mr: 'कमी आधार',
        hi: 'कम सहारा',
        en: 'Weak',
        kn: 'ದುರ್ಬಲ',
        te: 'బలహీనమైన',
        ta: 'பலவீனமான',
        gu: 'નબળું',
        bn: 'দুর্বল'
    },
    familyNone: {
        mr: 'आधार नाही',
        hi: 'सहारा नहीं',
        en: 'None',
        kn: 'ಇಲ್ಲ',
        te: 'లేదు',
        ta: 'இல்லை',
        gu: 'કોઈ નહીં',
        bn: 'নেই'
    },

    hopeLevel: {
        mr: 'आशा पातळी',
        hi: 'आशा का स्तर',
        en: 'Hope Level',
        kn: 'ಆಶಾ ಮಟ್ಟ',
        te: 'ఆశ స్థాయి',
        ta: 'நம்பிக்கை நிலை',
        gu: 'આશા સ્તર',
        bn: 'আশা স্তর'
    },
    hopeLow: {
        mr: 'निराश',
        hi: 'निराश',
        en: 'Hopeless',
        kn: 'ನಿರಾಶೆ',
        te: 'నిరాశ',
        ta: 'நம்பிக்கையற்ற',
        gu: 'નિરાશ',
        bn: 'নিরাশ'
    },
    hopeHigh: {
        mr: 'आशावादी',
        hi: 'आशावादी',
        en: 'Hopeful',
        kn: 'ಆಶಾವಾದಿ',
        te: 'ఆశావాది',
        ta: 'நம்பிக்கையான',
        gu: 'આશાવાદી',
        bn: 'আশাবাদী'
    },

    additionalNotes: {
        mr: 'अतिरिक्त माहिती',
        hi: 'अतिरिक्त जानकारी',
        en: 'Additional Notes',
        kn: 'ಹೆಚ್ಚುವರಿ ಟಿಪ್ಪಣಿಗಳು',
        te: 'అదనపు గమనికలు',
        ta: 'கூடுதல் குறிப்புகள்',
        gu: 'વધારાની નોંધો',
        bn: 'অতিরিক্ত নোট'
    },
    notesPlaceholder: {
        mr: 'तुम्हाला आणखी काही सांगायचे असल्यास येथे लिहा...',
        hi: 'अगर आप कुछ और कहना चाहते हैं तो यहां लिखें...',
        en: 'Write here if you want to share anything else...',
        kn: 'ನೀವು ಇನ್ನೂ ಏನಾದರೂ ಹಂಚಿಕೊಳ್ಳಲು ಬಯಸಿದರೆ ಇಲ್ಲಿ ಬರೆಯಿರಿ...',
        te: 'మీరు ఇంకేమైనా షేర్ చేయాలనుకుంటే ఇక్కడ రాయండి...',
        ta: 'வேறு எதையாவது பகிர விரும்பினால் இங்கே எழுதுங்கள்...',
        gu: 'જો તમે કંઈક વધુ શેર કરવા માંગો છો તો અહીં લખો...',
        bn: 'আপনি আরও কিছু শেয়ার করতে চাইলে এখানে লিখুন...'
    },

    analyzeButton: {
        mr: 'विश्लेषण करा',
        hi: 'विश्लेषण करें',
        en: 'Analyze',
        kn: 'ವಿಶ್ಲೇಷಿಸಿ',
        te: 'విశ్లేషించు',
        ta: 'பகுப்பாய்வு செய்',
        gu: 'વિશ્લેષણ કરો',
        bn: 'বিশ্লেষণ করুন'
    },
    selectOption: {
        mr: '-- निवडा --',
        hi: '-- चुनें --',
        en: '-- Select --',
        kn: '-- ಆಯ್ಕೆಮಾಡಿ --',
        te: '-- ఎంచుకోండి --',
        ta: '-- தேர்ந்தெடுங்கள் --',
        gu: '-- પસંદ કરો --',
        bn: '-- নির্বাচন করুন --'
    },

    // ============================================
    // RESULTS SECTION
    // ============================================
    riskLevel: {
        mr: 'जोखीम पातळी',
        hi: 'जोखिम स्तर',
        en: 'Risk Level',
        kn: 'ಅಪಾಯ ಮಟ್ಟ',
        te: 'ప్రమాద స్థాయి',
        ta: 'ஆபத்து நிலை',
        gu: 'જોખમ સ્તર',
        bn: 'ঝুঁকি স্তর'
    },
    riskLow: {
        mr: 'कमी',
        hi: 'कम',
        en: 'Low',
        kn: 'ಕಡಿಮೆ',
        te: 'తక్కువ',
        ta: 'குறைவு',
        gu: 'ઓછું',
        bn: 'কম'
    },
    riskModerate: {
        mr: 'मध्यम',
        hi: 'मध्यम',
        en: 'Moderate',
        kn: 'ಮಧ್ಯಮ',
        te: 'మధ్యస్థం',
        ta: 'நடுத்தரம்',
        gu: 'મધ્યમ',
        bn: 'মাঝারি'
    },
    riskHigh: {
        mr: 'जास्त',
        hi: 'ज्यादा',
        en: 'High',
        kn: 'ಹೆಚ್ಚು',
        te: 'ఎక్కువ',
        ta: 'அதிக',
        gu: 'વધારે',
        bn: 'বেশি'
    },
    riskCritical: {
        mr: 'अत्यंत जास्त',
        hi: 'बहुत ज्यादा',
        en: 'Critical',
        kn: 'ನಿರ್ಣಾಯಕ',
        te: 'క్లిష్టమైన',
        ta: 'முக்கியமான',
        gu: 'ગંભીર',
        bn: 'সংকটপূর্ণ'
    },

    supportMessage: {
        mr: 'सहाय्य संदेश',
        hi: 'सहायता संदेश',
        en: 'Support Message',
        kn: 'ಬೆಂಬಲ ಸಂದೇಶ',
        te: 'మద్దతు సందేశం',
        ta: 'ஆதரவு செய்தி',
        gu: 'સહાય સંદેશ',
        bn: 'সহায়তা বার্তা'
    },
    practicalSuggestions: {
        mr: 'व्यावहारिक सूचना',
        hi: 'व्यावहारिक सुझाव',
        en: 'Practical Suggestions',
        kn: 'ಪ್ರಾಯೋಗಿಕ ಸಲಹೆಗಳು',
        te: 'ఆచరణాత్మక సూచనలు',
        ta: 'நடைமுறை ஆலோசனைகள்',
        gu: 'વ્યવહારુ સૂચનો',
        bn: 'ব্যবহারিক পরামর্শ'
    },
    emergencyContacts: {
        mr: 'तातडी संपर्क',
        hi: 'आपातकालीन संपर्क',
        en: 'Emergency Contacts',
        kn: 'ತುರ್ತು ಸಂಪರ್ಕಗಳು',
        te: 'అత్యవసర సంప్రదింపులు',
        ta: 'அவசர தொடர்புகள்',
        gu: 'કટોકટી સંપર્કો',
        bn: 'জরুরি যোগাযোগ'
    },

    newCheckin: {
        mr: 'नवीन तपासणी',
        hi: 'नई जांच',
        en: 'New Check-in',
        kn: 'ಹೊಸ ಚೆಕ್-ಇನ್',
        te: 'కొత్త చెక్-ఇన్',
        ta: 'புதிய செக்-இன்',
        gu: 'નવું ચેક-ઇન',
        bn: 'নতুন চেক-ইন'
    },
    printResults: {
        mr: 'प्रिंट करा',
        hi: 'प्रिंट करें',
        en: 'Print',
        kn: 'ಮುದ್ರಿಸಿ',
        te: 'ప్రింట్ చేయి',
        ta: 'அச்சிடு',
        gu: 'છાપો',
        bn: 'প্রিন্ট করুন'
    },

    disclaimer: {
        mr: 'टीप: हे वैद्यकीय किंवा कायदेशीर सल्ला नाही। तुम्हाला अधिक मदत हवी असल्यास कृपया तज्ञांशी बोला।',
        hi: 'नोट: यह चिकित्सा या कानूनी सलाह नहीं है। अधिक मदद के लिए कृपया विशेषज्ञों से बात करें।',
        en: 'Note: This is not medical or legal advice. Please consult experts for more help.',
        kn: 'ಟಿಪ್ಪಣಿ: ಇದು ವೈದ್ಯಕೀಯ ಅಥವಾ ಕಾನೂನು ಸಲಹೆ ಅಲ್ಲ. ಹೆಚ್ಚಿನ ಸಹಾಯಕ್ಕಾಗಿ ದಯವಿಟ್ಟು ತಜ್ಞರನ್ನು ಸಂಪರ್ಕಿಸಿ.',
        te: 'గమనిక: ఇది వైద్య లేదా చట్టపరమైన సలహా కాదు. మరింత సహాయం కోసం దయచేసి నిపుణులను సంప్రదించండి.',
        ta: 'குறிப்பு: இது மருத்துவ அல்லது சட்ட ஆலோசனை அல்ல. மேலும் உதவிக்கு நிபுணர்களை அணுகவும்.',
        gu: 'નોંધ: આ તબીબી અથવા કાનૂની સલાહ નથી. વધુ મદદ માટે કૃપા કરી નિષ્ણાતોનો સંપર્ક કરો.',
        bn: 'দ্রষ্টব্য: এটি চিকিৎসা বা আইনি পরামর্শ নয়। আরও সাহায্যের জন্য অনুগ্রহ করে বিশেষজ্ঞদের সাথে যোগাযোগ করুন।'
    },

    // ============================================
    // HELPLINES SECTION
    // ============================================
    helplineTitle: {
        mr: 'मदत क्रमांक',
        hi: 'मदद नंबर',
        en: 'Helpline Numbers',
        kn: 'ಸಹಾಯವಾಣಿ ಸಂಖ್ಯೆಗಳು',
        te: 'హెల్ప్‌లైన్ నంబర్లు',
        ta: 'உதவி எண்கள்',
        gu: 'હેલ્પલાઇન નંબરો',
        bn: 'হেল্পলাইন নম্বর'
    },
    helplineSubtitle: {
        mr: 'या सर्व सेवा विनामूल्य आणि गोपनीय आहेत',
        hi: 'ये सभी सेवाएं मुफ्त और गोपनीय हैं',
        en: 'All these services are free and confidential',
        kn: 'ಈ ಎಲ್ಲಾ ಸೇವೆಗಳು ಉಚಿತ ಮತ್ತು ಗೌಪ್ಯ',
        te: 'ఈ సేవలన్నీ ఉచితం మరియు గోప్యమైనవి',
        ta: 'இந்த சேவைகள் அனைத்தும் இலவசம் மற்றும் ரகசியமானவை',
        gu: 'આ બધી સેવાઓ મફત અને ગોપનીય છે',
        bn: 'এই সমস্ত সেবা বিনামূল্যে এবং গোপনীয়'
    },

    // Helpline Card Descriptions
    icallDesc: {
        mr: 'मराठी, हिंदी, English मध्ये बोलता येतं',
        hi: 'मराठी, हिंदी, English में बात कर सकते हैं',
        en: 'Available in Marathi, Hindi, English',
        kn: 'ಮರಾಠಿ, ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಮಾತನಾಡಬಹುದು',
        te: 'మరాఠీ, హిందీ, ఇంగ్లీష్‌లో మాట్లాడవచ్చు',
        ta: 'மராட்டி, இந்தி, ஆங்கிலத்தில் பேசலாம்',
        gu: 'મરાઠી, હિન્દી, અંગ્રેજીમાં વાત કરી શકો છો',
        bn: 'মারাঠি, হিন্দি, ইংরেজিতে কথা বলতে পারেন'
    },
    icallTiming: {
        mr: 'सोम-शनि: 8am - 10pm',
        hi: 'सोम-शनि: 8am - 10pm',
        en: 'Mon-Sat: 8am - 10pm',
        kn: 'ಸೋಮ-ಶನಿ: 8am - 10pm',
        te: 'సోమ-శని: 8am - 10pm',
        ta: 'திங்கள்-சனி: 8am - 10pm',
        gu: 'સોમ-શનિ: 8am - 10pm',
        bn: 'সোম-শনি: সকাল ৮টা - রাত ১০টা'
    },
    vandrevalaDesc: {
        mr: '24/7 मानसिक आरोग्य सहाय्य',
        hi: '24/7 मानसिक स्वास्थ्य सहायता',
        en: '24/7 Mental Health Support',
        kn: '24/7 ಮಾನಸಿಕ ಆರೋಗ್ಯ ಬೆಂಬಲ',
        te: '24/7 మానసిక ఆరోగ్య మద్దతు',
        ta: '24/7 மன நல ஆதரவு',
        gu: '24/7 માનસિક સ્વાસ્થ્ય સહાય',
        bn: '24/7 মানসিক স্বাস্থ্য সহায়তা'
    },
    vandrevelaTiming: {
        mr: '24 तास उपलब्ध',
        hi: '24 घंटे उपलब्ध',
        en: 'Available 24 hours',
        kn: '24 ಗಂಟೆಗಳ ಲಭ್ಯ',
        te: '24 గంటలు అందుబాటులో',
        ta: '24 மணி நேரம் கிடைக்கும்',
        gu: '24 કલાક ઉપલબ્ધ',
        bn: '24 ঘণ্টা উপলব্ধ'
    },
    kisanDesc: {
        mr: 'शेती संबंधित सर्व समस्यांसाठी',
        hi: 'खेती संबंधित सभी समस्याओं के लिए',
        en: 'For all farming related issues',
        kn: 'ಎಲ್ಲಾ ಕೃಷಿ ಸಂಬಂಧಿತ ಸಮಸ್ಯೆಗಳಿಗೆ',
        te: 'అన్ని వ్యవసాయ సంబంధిత సమస్యలకు',
        ta: 'அனைத்து விவசாய தொடர்பான பிரச்சனைகளுக்கு',
        gu: 'તમામ ખેતી સંબંધિત સમસ્યાઓ માટે',
        bn: 'সমস্ত কৃষি সম্পর্কিত সমস্যার জন্য'
    },
    kisanTiming: {
        mr: 'सकाळी 6 ते रात्री 10',
        hi: 'सुबह 6 से रात 10 बजे',
        en: '6 AM to 10 PM',
        kn: 'ಬೆಳಗ್ಗೆ 6 ರಿಂದ ರಾತ್ರಿ 10',
        te: 'ఉదయం 6 నుండి రాత్రి 10',
        ta: 'காலை 6 முதல் இரவு 10 வரை',
        gu: 'સવારે 6 થી રાત્રે 10',
        bn: 'সকাল ৬টা থেকে রাত ১০টা'
    },
    farmerHelplineDesc: {
        mr: 'कर्ज, पीक विमा, सरकारी योजना',
        hi: 'कर्ज, फसल बीमा, सरकारी योजनाएं',
        en: 'Loans, Crop Insurance, Govt Schemes',
        kn: 'ಸಾಲ, ಬೆಳೆ ವಿಮೆ, ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
        te: 'రుణాలు, పంట బీమా, ప్రభుత్వ పథకాలు',
        ta: 'கடன், பயிர் காப்பீடு, அரசு திட்டங்கள்',
        gu: 'લોન, પાક વીમો, સરકારી યોજનાઓ',
        bn: 'ঋণ, ফসল বীমা, সরকারি প্রকল্প'
    },
    farmerHelplineTiming: {
        mr: 'कार्यालयीन वेळ',
        hi: 'कार्यालय समय',
        en: 'Office Hours',
        kn: 'ಕಚೇರಿ ಸಮಯ',
        te: 'కార్యాలయ సమయం',
        ta: 'அலுவலக நேரம்',
        gu: 'ઓફિસ સમય',
        bn: 'অফিস সময়'
    },

    // ============================================
    // ABOUT SECTION
    // ============================================
    aboutTitle: {
        mr: 'या प्रणालीबद्दल',
        hi: 'इस प्रणाली के बारे में',
        en: 'About This System',
        kn: 'ಈ ವ್ಯವಸ್ಥೆ ಬಗ್ಗೆ',
        te: 'ఈ వ్యవస్థ గురించి',
        ta: 'இந்த அமைப்பு பற்றி',
        gu: 'આ સિસ્ટમ વિશે',
        bn: 'এই সিস্টেম সম্পর্কে'
    },
    aboutDescription: {
        mr: 'किसान सहाय्य ही एक मानसिक आरोग्य सहाय्य प्रणाली आहे जी भारतातील शेतकऱ्यांसाठी विशेषत: तयार केलेली आहे। साप्ताहिक check-in द्वारे आम्ही तुमच्या एकूण परिस्थितीचे मूल्यांकन करतो आणि योग्य मार्गदर्शन देतो।',
        hi: 'किसान सहायता भारत के किसानों के लिए विशेष रूप से बनाई गई एक मानसिक स्वास्थ्य सहायता प्रणाली है। साप्ताहिक check-in द्वारा हम आपकी समग्र स्थिति का मूल्यांकन करते हैं और उचित मार्गदर्शन देते हैं।',
        en: 'Kisan Sahay is a mental health support system specially designed for farmers in India. Through weekly check-ins, we assess your overall situation and provide appropriate guidance.',
        kn: 'ಕಿಸಾನ್ ಸಹಾಯ ಭಾರತದ ರೈತರಿಗಾಗಿ ವಿಶೇಷವಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ಮಾನಸಿಕ ಆರೋಗ್ಯ ಬೆಂಬಲ ವ್ಯವಸ್ಥೆಯಾಗಿದೆ.',
        te: 'కిసాన్ సహాయ భారతదేశంలోని రైతులకు ప్రత్యేకంగా రూపొందించబడిన మానసిక ఆరోగ్య మద్దతు వ్యవస్థ.',
        ta: 'கிசான் சஹாய் இந்தியாவில் விவசாயிகளுக்காக வடிவமைக்கப்பட்ட மன நல ஆதரவு அமைப்பு.',
        gu: 'કિસાન સહાય ભારતના ખેડૂતો માટે ખાસ રચાયેલ માનસિક સ્વાસ્થ્ય સહાય પ્રણાલી છે.',
        bn: 'কিসান সাহায় ভারতের কৃষকদের জন্য বিশেষভাবে ডিজাইন করা মানসিক স্বাস্থ্য সহায়তা ব্যবস্থা।'
    },
    featureConfidential: {
        mr: 'गोपनीय',
        hi: 'गोपनीय',
        en: 'Confidential',
        kn: 'ಗೌಪ್ಯ',
        te: 'గోప్యమైన',
        ta: 'ரகசியமான',
        gu: 'ગોપનીય',
        bn: 'গোপনীয়'
    },
    featureConfidentialDesc: {
        mr: 'तुमची माहिती सुरक्षित',
        hi: 'आपकी जानकारी सुरक्षित',
        en: 'Your data is secure',
        kn: 'ನಿಮ್ಮ ಡೇಟಾ ಸುರಕ್ಷಿತ',
        te: 'మీ డేటా సురక్షితం',
        ta: 'உங்கள் தரவு பாதுகாப்பானது',
        gu: 'તમારો ડેટા સુરક્ષિત છે',
        bn: 'আপনার ডেটা সুরক্ষিত'
    },
    featureEmpathetic: {
        mr: 'सहानुभूतीपूर्ण',
        hi: 'सहानुभूतिपूर्ण',
        en: 'Empathetic',
        kn: 'ಸಹಾನುಭೂತಿ',
        te: 'సానుభూతిగల',
        ta: 'அனுதாபமுள்ள',
        gu: 'સહાનુભૂતિપૂર્ણ',
        bn: 'সহানুভূতিশীল'
    },
    featureEmpatheticDesc: {
        mr: 'समजून घेणारे मार्गदर्शन',
        hi: 'समझदारी से मार्गदर्शन',
        en: 'Understanding guidance',
        kn: 'ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವ ಮಾರ್ಗದರ್ಶನ',
        te: 'అర్థం చేసుకునే మార్గదర్శకత్వం',
        ta: 'புரிந்துகொள்ளும் வழிகாட்டுதல்',
        gu: 'સમજદાર માર્ગદર્શન',
        bn: 'বোঝাপড়ার নির্দেশনা'
    },
    featureLanguage: {
        mr: 'बहुभाषिक',
        hi: 'बहुभाषी',
        en: 'Multi-language',
        kn: 'ಬಹುಭಾಷಾ',
        te: 'బహుళభాషా',
        ta: 'பல மொழி',
        gu: 'બહુભાષી',
        bn: 'বহুভাষী'
    },
    featureLanguageDesc: {
        mr: 'तुमच्या भाषेत सहाय्य',
        hi: 'आपकी भाषा में सहायता',
        en: 'Support in your language',
        kn: 'ನಿಮ್ಮ ಭಾಷೆಯಲ್ಲಿ ಬೆಂಬಲ',
        te: 'మీ భాషలో మద్దతు',
        ta: 'உங்கள் மொழியில் ஆதரவு',
        gu: 'તમારી ભાષામાં સહાય',
        bn: 'আপনার ভাষায় সহায়তা'
    },
    featureAvailable: {
        mr: 'कधीही उपलब्ध',
        hi: 'कभी भी उपलब्ध',
        en: 'Always Available',
        kn: 'ಯಾವಾಗಲೂ ಲಭ್ಯ',
        te: 'ఎల్లప్పుడూ అందుబాటులో',
        ta: 'எப்போதும் கிடைக்கும்',
        gu: 'હંમેશા ઉપલબ્ધ',
        bn: 'সবসময় উপলব্ধ'
    },
    featureAvailableDesc: {
        mr: '24/7 ऑनलाइन',
        hi: '24/7 ऑनलाइन',
        en: '24/7 Online',
        kn: '24/7 ಆನ್‌ಲೈನ್',
        te: '24/7 ఆన్‌లైన్',
        ta: '24/7 ஆன்லைன்',
        gu: '24/7 ઓનલાઇન',
        bn: '24/7 অনলাইন'
    },

    // ============================================
    // FOOTER
    // ============================================
    footerText: {
        mr: 'शेतकरी बंधू-भगिनींच्या सेवेत',
        hi: 'किसान भाई-बहनों की सेवा में',
        en: 'In service of our farmers',
        kn: 'ನಮ್ಮ ರೈತರ ಸೇವೆಯಲ್ಲಿ',
        te: 'మన రైతుల సేవలో',
        ta: 'நமது விவசாயிகளின் சேவையில்',
        gu: 'અમારા ખેડૂતોની સેવામાં',
        bn: 'আমাদের কৃষকদের সেবায়'
    },

    // ============================================
    // LOGIN PAGE
    // ============================================
    welcome: {
        mr: 'स्वागत आहे!',
        hi: 'स्वागत है!',
        en: 'Welcome!',
        kn: 'ಸ್ವಾಗತ!',
        te: 'స్వాగతం!',
        ta: 'வரவேற்கிறோம்!',
        gu: 'સ્વાગત છે!',
        bn: 'স্বাগতম!'
    },
    login: {
        mr: 'लॉगिन',
        hi: 'लॉगिन',
        en: 'Login',
        kn: 'ಲಾಗಿನ್',
        te: 'లాగిన్',
        ta: 'உள்நுழை',
        gu: 'લૉગિન',
        bn: 'লগইন'
    },
    register: {
        mr: 'नोंदणी',
        hi: 'पंजीकरण',
        en: 'Register',
        kn: 'ನೋಂದಣಿ',
        te: 'నమోదు',
        ta: 'பதிவு',
        gu: 'નોંધણી',
        bn: 'নিবন্ধন'
    },
    mobileNumber: {
        mr: 'मोबाईल नंबर',
        hi: 'मोबाइल नंबर',
        en: 'Mobile Number',
        kn: 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
        te: 'మొబైల్ నంబర్',
        ta: 'மொபைல் எண்',
        gu: 'મોબાઇલ નંબર',
        bn: 'মোবাইল নম্বর'
    },
    password: {
        mr: 'पासवर्ड',
        hi: 'पासवर्ड',
        en: 'Password',
        kn: 'ಪಾಸ್‌ವರ್ಡ್',
        te: 'పాస్వర్డ్',
        ta: 'கடவுச்சொல்',
        gu: 'પાસવર્ડ',
        bn: 'পাসওয়ার্ড'
    },
    rememberMe: {
        mr: 'मला लक्षात ठेवा',
        hi: 'मुझे याद रखें',
        en: 'Remember me',
        kn: 'ನನ್ನನ್ನು ನೆನಪಿಟ್ಟುಕೊಳ್ಳಿ',
        te: 'నన్ను గుర్తుంచుకో',
        ta: 'என்னை நினைவில் கொள்',
        gu: 'મને યાદ રાખો',
        bn: 'আমাকে মনে রাখুন'
    },
    forgotPassword: {
        mr: 'पासवर्ड विसरलात?',
        hi: 'पासवर्ड भूल गए?',
        en: 'Forgot password?',
        kn: 'ಪಾಸ್‌ವರ್ಡ್ ಮರೆತಿರಾ?',
        te: 'పాస్వర్డ్ మర్చిపోయారా?',
        ta: 'கடவுச்சொல் மறந்துவிட்டதா?',
        gu: 'પાસવર્ડ ભૂલી ગયા?',
        bn: 'পাসওয়ার্ড ভুলে গেছেন?'
    },
    loginButton: {
        mr: 'लॉगिन करा',
        hi: 'लॉगिन करें',
        en: 'Login',
        kn: 'ಲಾಗಿನ್ ಮಾಡಿ',
        te: 'లాగిన్ చేయండి',
        ta: 'உள்நுழைக',
        gu: 'લૉગિન કરો',
        bn: 'লগইন করুন'
    },
    orText: {
        mr: 'किंवा',
        hi: 'या',
        en: 'or',
        kn: 'ಅಥವಾ',
        te: 'లేదా',
        ta: 'அல்லது',
        gu: 'અથવા',
        bn: 'অথবা'
    },
    otpLogin: {
        mr: 'OTP द्वारे लॉगिन करा',
        hi: 'OTP द्वारा लॉगिन करें',
        en: 'Login via OTP',
        kn: 'OTP ಮೂಲಕ ಲಾಗಿನ್',
        te: 'OTP ద్వారా లాగిన్',
        ta: 'OTP மூலம் உள்நுழை',
        gu: 'OTP દ્વારા લૉગિન',
        bn: 'OTP দিয়ে লগইন'
    },
    smsOtp: {
        mr: 'SMS OTP',
        hi: 'SMS OTP',
        en: 'SMS OTP'
    },
    whatsappOtp: {
        mr: 'WhatsApp OTP',
        hi: 'WhatsApp OTP',
        en: 'WhatsApp OTP'
    },
    newRegistration: {
        mr: 'नवीन नोंदणी',
        hi: 'नया पंजीकरण',
        en: 'New Registration'
    },
    fullName: {
        mr: 'पूर्ण नाव',
        hi: 'पूरा नाम',
        en: 'Full Name'
    },
    village: {
        mr: 'गाव',
        hi: 'गांव',
        en: 'Village'
    },
    taluka: {
        mr: 'तालुका',
        hi: 'तालुका',
        en: 'Taluka'
    },
    district: {
        mr: 'जिल्हा',
        hi: 'जिला',
        en: 'District'
    },
    farmSize: {
        mr: 'शेती क्षेत्र (एकर)',
        hi: 'खेत का क्षेत्र (एकड़)',
        en: 'Farm Size (Acres)',
        kn: 'ಕೃಷಿ ಕ್ಷೇತ್ರ (ಎಕರೆ)',
        te: 'వ్యవసాయ క్షేత్రం (ఎకరాలు)',
        ta: 'வேளாண் பரப்பு (ஏக்கர்)',
        gu: 'ખેતી ક્ષેત્ર (એકર)',
        bn: 'কৃষি ক্ষেত্র (একর)'
    },
    confirmPassword: {
        mr: 'पासवर्ड पुन्हा',
        hi: 'पासवर्ड फिर से',
        en: 'Confirm Password',
        kn: 'ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ',
        te: 'పాస్వర్డ్ నిర్ధారించండి',
        ta: 'கடவுச்சொல்லை உறுதிப்படுத்து',
        gu: 'પાસવર્ડ પુષ્ટિ કરો',
        bn: 'পাসওয়ার্ড নিশ্চিত করুন'
    },
    agreeTerms: {
        mr: 'मी अटी व शर्ती मान्य करतो',
        hi: 'मैं नियम और शर्तें स्वीकार करता हूं',
        en: 'I agree to terms and conditions',
        kn: 'ನಾನು ನಿಯಮಗಳನ್ನು ಒಪ್ಪುತ್ತೇನೆ',
        te: 'నేను నిబంధనలతో అంగీకరిస్తున్నాను',
        ta: 'நான் விதிமுறைகளை ஏற்கிறேன்',
        gu: 'હું નિયમો અને શરતો સ્વીકારું છું',
        bn: 'আমি শর্তাবলী মানতে রাজি'
    },
    registerButton: {
        mr: 'नोंदणी करा',
        hi: 'पंजीकरण करें',
        en: 'Register',
        kn: 'ನೋಂದಾಯಿಸಿ',
        te: 'నమోదు చేయండి',
        ta: 'பதிவு செய்க',
        gu: 'નોંધણી કરો',
        bn: 'নিবন্ধন করুন'
    },
    enterOtp: {
        mr: 'OTP प्रविष्ट करा',
        hi: 'OTP दर्ज करें',
        en: 'Enter OTP',
        kn: 'OTP ನಮೂದಿಸಿ',
        te: 'OTP నమోదు చేయండి',
        ta: 'OTP உள்ளிடவும்',
        gu: 'OTP દાખલ કરો',
        bn: 'OTP লিখুন'
    },
    verifyButton: {
        mr: 'सत्यापित करा',
        hi: 'सत्यापित करें',
        en: 'Verify',
        kn: 'ಪರಿಶೀಲಿಸಿ',
        te: 'ధృవీకరించండి',
        ta: 'சரிபார்க்கவும்',
        gu: 'ચકાસો',
        bn: 'যাচাই করুন'
    },
    resendOtp: {
        mr: 'पुन्हा पाठवा',
        hi: 'फिर से भेजें',
        en: 'Resend',
        kn: 'ಮರುಕಳುಹಿಸಿ',
        te: 'మళ్ళీ పంపండి',
        ta: 'மீண்டும் அனுப்பு',
        gu: 'ફરીથી મોકલો',
        bn: 'আবার পাঠান'
    },
    goBack: {
        mr: '← मागे जा',
        hi: '← वापस जाएं',
        en: '← Go Back',
        kn: '← ಹಿಂದೆ ಹೋಗಿ',
        te: '← వెనక్కి వెళ్ళు',
        ta: '← பின் செல்',
        gu: '← પાછા જાઓ',
        bn: '← ফিরে যান'
    },
    needHelp: {
        mr: 'मदत हवी आहे? कॉल करा:',
        hi: 'मदद चाहिए? कॉल करें:',
        en: 'Need help? Call:',
        kn: 'ಸಹಾಯ ಬೇಕೇ? ಕರೆ ಮಾಡಿ:',
        te: 'సహాయం కావాలా? కాల్ చేయండి:',
        ta: 'உதவி தேவையா? அழைக்கவும்:',
        gu: 'મદદ જોઈએ? કૉલ કરો:',
        bn: 'সাহায্য দরকার? কল করুন:'
    },

    // Placeholder translations
    mobilePlaceholder: {
        mr: '10 अंकी मोबाईल नंबर',
        hi: '10 अंकों का मोबाइल नंबर',
        en: '10 digit mobile number',
        kn: '10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
        te: '10 అంకెల మొబైల్ నంబర్',
        ta: '10 இலக்க மொபைல் எண்',
        gu: '10 અંકનો મોબાઇલ નંબર',
        bn: '১০ সংখ্যার মোবাইল নম্বর'
    },
    passwordPlaceholder: {
        mr: 'तुमचा पासवर्ड',
        hi: 'आपका पासवर्ड',
        en: 'Your password',
        kn: 'ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್',
        te: 'మీ పాస్వర్డ్',
        ta: 'உங்கள் கடவுச்சொல்',
        gu: 'તમારો પાસવર્ડ',
        bn: 'আপনার পাসওয়ার্ড'
    },
    fullNamePlaceholder: {
        mr: 'तुमचे पूर्ण नाव',
        hi: 'आपका पूरा नाम',
        en: 'Your full name',
        kn: 'ನಿಮ್ಮ ಪೂರ್ಣ ಹೆಸರು',
        te: 'మీ పూర్తి పేరు',
        ta: 'உங்கள் முழு பெயர்',
        gu: 'તમારું પૂરું નામ',
        bn: 'আপনার পুরো নাম'
    },
    villagePlaceholder: {
        mr: 'गावाचे नाव',
        hi: 'गांव का नाम',
        en: 'Village name',
        kn: 'ಹಳ್ಳಿಯ ಹೆಸರು',
        te: 'గ్రామం పేరు',
        ta: 'கிராமத்தின் பெயர்',
        gu: 'ગામનું નામ',
        bn: 'গ্রামের নাম'
    },
    talukaPlaceholder: {
        mr: 'तालुका',
        hi: 'तालुका',
        en: 'Taluka',
        kn: 'ತಾಲ್ಲೂಕು',
        te: 'తాలూకా',
        ta: 'தாலுகா',
        gu: 'તાલુકો',
        bn: 'তালুক'
    },
    farmSizePlaceholder: {
        mr: 'उदा. 5',
        hi: 'उदा. 5',
        en: 'e.g. 5',
        kn: 'ಉದಾ. 5',
        te: 'ఉదా. 5',
        ta: 'எ.கா. 5',
        gu: 'દા.ત. 5',
        bn: 'যেমন ৫'
    },
    minCharsPlaceholder: {
        mr: 'किमान 6 अक्षरे',
        hi: 'कम से कम 6 अक्षर',
        en: 'Minimum 6 characters',
        kn: 'ಕನಿಷ್ಠ 6 ಅಕ್ಷರಗಳು',
        te: 'కనీసం 6 అక్షరాలు',
        ta: 'குறைந்தது 6 எழுத்துக்கள்',
        gu: 'ઓછામાં ઓછા 6 અક્ષરો',
        bn: 'ন্যূনতম ৬ অক্ষর'
    },
    confirmPlaceholder: {
        mr: 'पुन्हा टाका',
        hi: 'फिर से टाइप करें',
        en: 'Re-enter',
        kn: 'ಮತ್ತೆ ಟೈಪ್ ಮಾಡಿ',
        te: 'మళ్ళీ టైప్ చేయండి',
        ta: 'மீண்டும் உள்ளிடு',
        gu: 'ફરીથી ટાઇપ કરો',
        bn: 'আবার টাইপ করুন'
    },
    selectDistrict: {
        mr: '-- जिल्हा निवडा --',
        hi: '-- जिला चुनें --',
        en: '-- Select District --',
        kn: '-- ಜಿಲ್ಲೆ ಆಯ್ಕೆಮಾಡಿ --',
        te: '-- జిల్లా ఎంచుకోండి --',
        ta: '-- மாவட்டம் தேர்ந்தெடுங்கள் --',
        gu: '-- જિલ્લો પસંદ કરો --',
        bn: '-- জেলা নির্বাচন করুন --'
    },

    // ============================================
    // HISTORY PAGE
    // ============================================
    historyTitle: {
        mr: 'माझा तपासणी इतिहास',
        hi: 'मेरा जांच इतिहास',
        en: 'My Check-in History'
    },
    historySubtitle: {
        mr: 'तुमच्या सर्व साप्ताहिक तपासण्यांचा आढावा',
        hi: 'आपकी सभी साप्ताहिक जांच का अवलोकन',
        en: 'Overview of all your weekly check-ins'
    },
    totalCheckins: {
        mr: 'एकूण तपासण्या',
        hi: 'कुल जांच',
        en: 'Total Check-ins'
    },
    averageHope: {
        mr: 'सरासरी आशा पातळी',
        hi: 'औसत आशा स्तर',
        en: 'Average Hope Level'
    },
    lastRisk: {
        mr: 'शेवटची जोखीम पातळी',
        hi: 'अंतिम जोखिम स्तर',
        en: 'Last Risk Level'
    },
    lastCheckin: {
        mr: 'शेवटची तपासणी',
        hi: 'अंतिम जांच',
        en: 'Last Check-in'
    },
    hopeTrend: {
        mr: 'आशा पातळी ट्रेंड',
        hi: 'आशा स्तर प्रवृत्ति',
        en: 'Hope Level Trend'
    },
    checkinRecords: {
        mr: 'तपासणी इतिहास',
        hi: 'जांच रिकॉर्ड',
        en: 'Check-in Records'
    },
    filterAll: {
        mr: 'सर्व',
        hi: 'सभी',
        en: 'All'
    },
    exportData: {
        mr: 'डेटा निर्यात करा',
        hi: 'डेटा निर्यात करें',
        en: 'Export Data'
    },
    downloadCsv: {
        mr: 'CSV डाउनलोड',
        hi: 'CSV डाउनलोड',
        en: 'Download CSV'
    },
    deleteHistory: {
        mr: 'इतिहास हटवा',
        hi: 'इतिहास हटाएं',
        en: 'Delete History'
    },
    noHistory: {
        mr: 'अजून कोणतीही तपासणी नाही',
        hi: 'अभी तक कोई जांच नहीं',
        en: 'No check-ins yet'
    },
    doFirstCheckin: {
        mr: 'तुमची पहिली साप्ताहिक तपासणी करा',
        hi: 'अपनी पहली साप्ताहिक जांच करें',
        en: 'Do your first weekly check-in'
    },
    today: {
        mr: 'आज',
        hi: 'आज',
        en: 'Today'
    },
    yesterday: {
        mr: 'काल',
        hi: 'कल',
        en: 'Yesterday'
    },
    daysAgo: {
        mr: 'दिवसांपूर्वी',
        hi: 'दिन पहले',
        en: 'days ago'
    },

    // ============================================
    // LANGUAGE NAMES
    // ============================================
    langMarathi: {
        mr: 'मराठी',
        hi: 'मराठी',
        en: 'Marathi',
        kn: 'ಮರಾಠಿ',
        te: 'మరాఠీ',
        ta: 'மராட்டி',
        gu: 'મરાઠી',
        bn: 'মারাঠি'
    },
    langHindi: {
        mr: 'हिंदी',
        hi: 'हिंदी',
        en: 'Hindi',
        kn: 'ಹಿಂದಿ',
        te: 'హిందీ',
        ta: 'இந்தி',
        gu: 'હિન્દી',
        bn: 'হিন্দি'
    },
    langEnglish: {
        mr: 'English',
        hi: 'English',
        en: 'English',
        kn: 'ಇಂಗ್ಲಿಷ್',
        te: 'ఆంగ్లం',
        ta: 'ஆங்கிலம்',
        gu: 'અંગ્રેજી',
        bn: 'ইংরেজি'
    },
    langKannada: {
        mr: 'कन्नड',
        hi: 'कन्नड़',
        en: 'Kannada',
        kn: 'ಕನ್ನಡ',
        te: 'కన్నడ',
        ta: 'கன்னடம்',
        gu: 'કન્નડ',
        bn: 'কন্নড়'
    },
    langTelugu: {
        mr: 'तेलुगू',
        hi: 'तेलुगु',
        en: 'Telugu',
        kn: 'ತೆಲುಗು',
        te: 'తెలుగు',
        ta: 'தெலுங்கு',
        gu: 'તેલુગુ',
        bn: 'তেলুগু'
    },
    langTamil: {
        mr: 'तमिळ',
        hi: 'तमिल',
        en: 'Tamil',
        kn: 'ತಮಿಳು',
        te: 'తమిళం',
        ta: 'தமிழ்',
        gu: 'તમિલ',
        bn: 'তামিল'
    },
    langGujarati: {
        mr: 'गुजराती',
        hi: 'गुजराती',
        en: 'Gujarati',
        kn: 'ಗುಜರಾತಿ',
        te: 'గుజరాతీ',
        ta: 'குஜராத்தி',
        gu: 'ગુજરાતી',
        bn: 'গুজরাটি'
    },
    langBengali: {
        mr: 'बंगाली',
        hi: 'बंगाली',
        en: 'Bengali',
        kn: 'ಬಂಗಾಳಿ',
        te: 'బెంగాలీ',
        ta: 'பெங்காலி',
        gu: 'બંગાળી',
        bn: 'বাংলা'
    }
};

// ============================================
// LANGUAGE MANAGEMENT
// ============================================

const LANG_KEY = 'kisan_language';
let currentLanguage = 'mr'; // Default to Marathi

// Initialize language
function initializeLanguage() {
    const savedLang = localStorage.getItem(LANG_KEY);
    currentLanguage = savedLang || 'mr';
    applyLanguage(currentLanguage);
    updateLanguageSelector();
}

// Change language
function changeLanguage(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) return;

    currentLanguage = lang;
    localStorage.setItem(LANG_KEY, lang);
    applyLanguage(lang);
    updateLanguageSelector();
}

// Get translation
function t(key) {
    if (TRANSLATIONS[key] && TRANSLATIONS[key][currentLanguage]) {
        return TRANSLATIONS[key][currentLanguage];
    }
    // Fallback to Marathi, then English
    if (TRANSLATIONS[key]) {
        return TRANSLATIONS[key]['mr'] || TRANSLATIONS[key]['en'] || key;
    }
    return key;
}

// Apply language to all elements with data-i18n attribute
function applyLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);

        if (el.tagName === 'INPUT' && el.type === 'text') {
            el.placeholder = translation;
        } else if (el.tagName === 'OPTION') {
            el.textContent = translation;
        } else {
            el.textContent = translation;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });

    // Update titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });

    // Update document language attribute
    document.documentElement.lang = lang;
}

// Update language selector dropdown
function updateLanguageSelector() {
    const selector = document.getElementById('language-selector');
    if (selector) {
        selector.value = currentLanguage;
    }
}

// Expose globally
window.TRANSLATIONS = TRANSLATIONS;
window.t = t;
window.currentLanguage = currentLanguage;
window.changeLanguage = changeLanguage;
window.initializeLanguage = initializeLanguage;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguage);
} else {
    initializeLanguage();
}
