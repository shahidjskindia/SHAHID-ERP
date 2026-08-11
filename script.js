// ==================== DATA DEFINITIONS ====================
const AIR_MIN_THRESHOLDS = {
    'CARTAGE': 450,
    'MCC': 550,
    'XRAY': 850,
    'GATE PASS': 850
};

const airChargePlaceholders = {
    "AIR FREIGHT": "Min 850 INR",
    "CARTAGE": "Rate per KGS (min 450)",
    "MCC": "Rate per KGS (min 550)",
    "XRAY": "Rate per KGS (min 850)",
    "GATE PASS": "Rate per KGS ×4 (min 850)",
    "PALLETISATION": "₹1,875/pallet (auto)",
    "PLY": "₹600/ply (auto)"
};



const defaultCharges = {
    sea: ["FREIGHT", "THC", "SEAL", "MUC", "DOCS", "SEAWAY BL", "ETS", "HAZ DOCS", "AMS", "CFS", "CLEARANCE", "VGM",
        "TOLL", "LASHING & CHOKING", "HAZ STICKER", "TRANSPORTATION", "LOLO", "ON WHEEL", "OTHER LOCALS"
    ],
    air: ["AIR FREIGHT", "CARTAGE", "MCC", "XRAY", "GATE PASS", "ASI GMAX", "CUSTOM CLEARANCE", "TERMINAL TRANSFER",
        "AWB FEES", "TEDI", "AMS", "PALLETISATION", "PLY", "LOADING & UNLOADING", "DG FEES", "DG AGENT FEE",
        "REPACKING", "TRANSPORATION", "ADD.SURCHARGE"
    ],
    lcl: ["FREIGHT", "THC", "MUC", "DOCS", "SEAWAY BL", "HAZ DOCS", "AMS", "CLEARANCE", "VGM"]
};

const chargeCategories = {
    sea: {
        "Freight": ["FREIGHT"],
        "Carrier Charges": ["THC", "SEAL", "MUC", "DOCS", "SEAWAY BL", "ETS", "HAZ DOCS", "AMS"],
        "CFS / Transport Charges": ["CFS", "CLEARANCE", "VGM", "TOLL", "LASHING & CHOKING", "HAZ STICKER",
            "ON WHEEL", "TRANSPORTATION", "LOLO", "OTHER LOCALS"
        ]
    },
    air: {
        "Freight": ["AIR FREIGHT"],
        "Origin Charges": ["CARTAGE", "MCC", "XRAY", "GATE PASS", "ASI GMAX", "AMS", "PALLETISATION", "PLY",
            "LOADING & UNLOADING", "DG FEES", "DG AGENT FEE", "REPACKING", "AWB FEES", "TEDI",
            "ADD.SURCHARGE", "TRANSPORATION"
        ],
        "Local Charges": ["CUSTOM CLEARANCE", "TERMINAL TRANSFER"]
    },
    lcl: {
        "Freight": ["FREIGHT"],
        "Origin Charges": ["THC", "MUC", "DOCS", "SEAWAY BL", "HAZ DOCS", "AMS", "CLEARANCE", "VGM"]
    }
};


const defaultContainerDimensions = [
    { type: "20 GP", length: "5.898m", width: "2.352m", height: "2.393m", maxWeight: "28,200 kg", cbm: "33.2" },
    { type: "40 GP", length: "12.032m", width: "2.352m", height: "2.393m", maxWeight: "26,580 kg", cbm: "67.7" },
    { type: "40 HC", length: "12.032m", width: "2.352m", height: "2.698m", maxWeight: "26,480 kg", cbm: "76.3" },
    { type: "20 RF", length: "5.444m", width: "2.286m", height: "2.275m", maxWeight: "27,700 kg", cbm: "28.4" },
    { type: "40 RF", length: "11.572m", width: "2.286m", height: "2.275m", maxWeight: "26,500 kg", cbm: "54.3" },
    { type: "20 TK", length: "5.898m", width: "2.352m", height: "2.393m", maxWeight: "24,000 kg", cbm: "33.2" },
    { type: "40 TK", length: "12.032m", width: "2.352m", height: "2.393m", maxWeight: "26,000 kg", cbm: "67.7" }
];

// ==================== EMBEDDED BACKUP DATA (FULL) ====================
const EMBEDDED_BACKUP = {
  "carriers": [
    "MSC", "COSCO", "CMA", "HAPAG", "EVERGREEN", "WAN HAI", "UNI FEEDER", "SAMSARA", "ESL", "AIYER",
    "SCI", "WIN WIN", "SEA BRIDGE", "SEA HORSE", "ECON", "KMTC", "PIL", "OOCL", "SINOKOR", "ONE",
    "SAMUDERA", "HMM", "ANL", "MAERSK", "25", "GOOD RICH", "SEA LEAD", "INTER ASIA", "SIMA MARINE",
    "RCL", "YML", "T S LINE", "33", "BEN LINE", "ZIM", "FESCO", "Z LINE", "SEMA MARINE",
    "QNL / MILAHA", "GIGA", "GOLD", "DGR", "NVOCC", "ALADIN EXP", "SEAPOL", "MAXICON", "RADIANT",
    "HUB & LINK", "TURKON", "GOLDAIR"
  ],
  "pol": [
    "-", "MUMBAI, IN", "AHMEDABAD, IN", "HYDERABAD, IN", "DELHI, IN", "NHAVA SHEVA, IN",
    "MUNDRA, IN", "HAZIRA, IN", "ANKLESWAR, IN", "VADODRA, IN", "PIPAVAV, IN", "CHENNAI, IN",
    "JAIPUR, IN"
  ],
  "pod": [
    "ALGIERS, DZ", "ANNABA, DZ", "ORAN, DZ", "LOBITO, AO", "LUANDA, AO", "BAHIA BLANCA, AR",
    "BUENOS AIRES, AR", "PUERTO BELGRANO, AR", "ROSARIO, AR", "ADELAIDE, AU", "BRISBANE, AU",
    "FREMANTLE, AU", "GLADSTONE, AU", "MELBOURNE, AU", "NEWCASTLE, AU", "PORT HEDLAND, AU",
    "SYDNEY, AU", "VIENNA, AT", "BAHRAIN, BH", "CHATTOGRAM, BD", "ICD DHAKA, BD", "ANTWERP, BE",
    "BELIZE CITY, BZ", "COTONOU, BJ", "FORTALEZA, BR", "ITAJAI, BR", "ITAPOA, BR", "NAVEGANTES, BR",
    "PARANAGUA, BR", "PECEM, BR", "RIO DE JANEIRO, BR", "SANTOS, BR", "SUAPE, BR", "VILA DO CONDE, BR",
    "PHNOM PENH, KH", "SIHANOUKVILLE, KH", "DOUALA, CM", "HALIFAX, CA", "MONTREAL, CA",
    "PRINCE RUPERT, CA", "VANCOUVER, CA", "TORONTO, CA", "ARICA, CL", "IQUIQUE, CL", "SAN ANTONIO, CL",
    "VALPARAISO, CL", "BEICUN, CN", "BEIJAO, CN", "CHANGSHA, CN", "CHANGZHOU, CN", "CHIWAN, CN",
    "CHONGQING, CN", "DALIAN, CN", "DOU MEN, CN", "FOSHAN JIUJIANG, CN", "GAOMING, CN", "GAOYAO, CN",
    "GAOLAN, CN", "GAOSHA, CN", "HAIKOU, CN", "HEFEI, CN", "HONGWAN, CN", "HUADU, CN", "HUANGPU, CN",
    "HUMEN, CN", "JIANGMEN, CN", "JIANGYIN, CN", "JIAOXIN, CN", "JIUJIANG, CN", "LIANHUA SHAN, CN",
    "LIANYUNGANG, CN", "MAWEI, CN", "NANCHANG, CN", "NANJING, CN", "NANSHA, CN", "NANTONG, CN",
    "NINGBO, CN", "PSA DONGGUAN, CN", "QINGDAO, CN", "QINGYUAN, CN", "QINZHOU, CN", "SANSHAN, CN",
    "SANSHUI, CN", "SHANGHAI, CN", "SHANTOU, CN", "SHATIAN, CN", "SHEKOU, CN", "SHENZHEN, CN",
    "SHUNDE LELIU, CN", "SHUNDE NEW PORT, CN", "SI HUI, CN", "TAICANG, CN", "TIANJIN, CN",
    "XINGANG, CN", "WENZHOU, CN", "WU ZHOU, CN", "WUHAN, CN", "WUHU, CN", "XIAMEN, CN",
    "XIAOLAN, CN", "XINHUI, CN", "YANGZHOU, CN", "YANGPU, CN", "YANTIAN, CN", "YICHANG, CN",
    "YUEYANG, CN", "ZHANGJIAGANG, CN", "ZHANJIANG, CN", "ZHAOQING, CN", "ZHAPU, CN", "ZHONGSHAN, CN",
    "BARRANQUILLA, CO", "BUENAVENTURA, CO", "CARTAGENA, CO", "COMUNION, CO", "MATADI, CD",
    "POINTE-NOIRE, CG", "PUERTO CALDERA, CR", "PUERTO LIMON, CR", "HAVANA, CU", "MARIEL, CU",
    "ESBJERG, DK", "AARHUS, DK", "DJIBOUTI, DJ", "CAUCEDO, DO", "GUAYAQUIL, EC", "MANTA, EC",
    "PUERTO BOLIVAR, EC", "AL SOKHNA, EG", "ALEXANDRIA, EG", "DAMIETTA, EG", "PORT SAID, EG",
    "ACAJUTLA, SV", "MASSAWA, ER", "HELSINKI, FI", "FOS SUR MER, FR", "LE HAVRE, FR", "MARSEILLE, FR",
    "LIBREVILLE, GA", "BREMERHAVEN, DE", "HAMBURG, DE", "ACCRA (TEMA), GH", "TAKORADI, GH",
    "HERAKLION, GR", "PIRAEUS, GR", "THESSALONIKI, GR", "PUERTO QUETZAL, GT", "CONAKRY, GN",
    "MALABO, GQ", "PUERTO CORTES, HN", "HONG KONG, HK", "BUDAPEST, HU", "BALIKPAPAN, ID",
    "BATAM, ID", "BELAWAN, ID", "JAKARTA, ID", "PALEMBANG, ID", "PANJANG, ID", "PONTIANAK, ID",
    "SEMARANG, ID", "SURABAYA, ID", "BANDAR ABBAS, IR", "CHABAHAR, IR", "BUSHEHR, IR", "BASRA, IQ",
    "UMM QASR, IQ", "ASHDOD, IL", "HAIFA, IL", "GENOA, IT", "GIOIA TAURO, IT", "NAPLES, IT",
    "RAVENNA, IT", "TRIESTE, IT", "LA SPEZIA, IT", "LIVORNO, IT", "TARANTO, IT", "ABIDJAN, CI",
    "SAN PEDRO, CI", "KINGSTON, JM", "FUKUYAMA, JP", "HAKATA, JP", "HIROSHIMA, JP", "KAWASAKI, JP",
    "KOBE, JP", "MATSUYAMA, JP", "MIZUSHIMA, JP", "MOJI, JP", "NAGOYA, JP", "OSAKA, JP",
    "SENDAI, JP", "SHIMIZU, JP", "TOKYO, JP", "YOKKAICHI, JP", "YOKOHAMA, JP", "LAMU, KE",
    "MOMBASA, KE", "NAIROBI, KE", "KUWAIT, KW", "SHUAIBA, KW", "RIGA, LV", "KLAIPEDA, LT",
    "TOAMASINA, MG", "BINTULU, MY", "KOTA KINABALU, MY", "KUCHING, MY", "MIRI, MY",
    "PASIR GUDANG, MY", "PENANG, MY", "PORT KLANG, MY", "SANDAKAN, MY", "SIBU, MY",
    "TANJUNG PELEPAS, MY", "TAWAO, MY", "MALTA FREEPORT, MT", "PORT LOUIS, MU", "ALTAMIRA, MX",
    "ENSENADA, MX", "LAZARO CARDENAS, MX", "MANZANILLO, MX", "TAMPICO, MX", "VERACRUZ, MX",
    "AGADIR, MA", "CASABLANCA, MA", "TANGER MED, MA", "BEIRA, MZ", "MAPUTO, MZ", "NACALA, MZ",
    "YANGON, MM", "ROTTERDAM, NL", "AUCKLAND, NZ", "LYTTELTON, NZ", "NAPIER, NZ", "TAURANGA, NZ",
    "WELLINGTON, NZ", "CORINTO, NI", "LAGOS, NG", "APAPA, NG", "ONNE, NG", "PORT HARCOURT, NG",
    "OSLO, NO", "STAVANGER, NO", "SALALAH, OM", "SOHAR, OM", "KARACHI, PK", "CALLAO, PE",
    "CHIMBOTE, PE", "MATARANI, PE", "PAITA, PE", "BATANGAS, PH", "CAGAYAN DE ORO, PH", "CEBU, PH",
    "DAVAO, PH", "GENERAL SANTOS, PH", "MANILA NORTH, PH", "MANILA SOUTH, PH", "MANILA, PH",
    "SUBIC BAY, PH", "GDANSK, PL", "GDYNIA, PL", "LISBON, PT", "SINES, PT", "HAMAD, QA",
    "CONSTANTA, RO", "NOVOROSSIYSK, RU", "ST PETERSBURG, RU", "VLADIVOSTOK, RU", "DAMMAM, SA",
    "JEDDAH, SA", "RIYADH, SA", "YANBU, SA", "DAKAR, SN", "SINGAPORE, SG", "BERBERA, SO",
    "BOSASO, SO", "KISMAYO, SO", "MERCA, SO", "MOGADISHU, SO", "CAPE TOWN, ZA", "DURBAN, ZA",
    "JOHANNESBURG, ZA", "PORT ELIZABETH, ZA", "RICHARDS BAY, ZA", "BUSAN, KR", "GWANGYANG, KR",
    "INCHON, KR", "ULSAN, KR", "ALGECIRAS, ES", "BARCELONA, ES", "BILBAO, ES", "VALENCIA, ES",
    "VIGO, ES", "COLOMBO, LK", "HAMBANTOTA, LK", "PORT SUDAN, SD", "GOTHENBURG, SE", "KAOHSIUNG, TW",
    "KEELUNG, TW", "TAICHUNG, TW", "TAIPEI, TW", "TAOYUAN, TW", "BAGAMOYO, TZ", "DAR ES SALAAM, TZ",
    "ZANZIBAR, TZ", "BANGKOK PAT, TH", "BANGKOK, TH", "LAEM CHABANG, TH", "LAT KRABANG, TH",
    "LOME, TG", "BIZERTE, TN", "RADES, TN", "SFAX, TN", "GABZE, TR", "GEMLIK, TR", "ISKENDERUN, TR",
    "ISTANBUL, TR", "IZMIR, TR", "IZMIT, TR", "MERSIN, TR", "ABU DHABI, AE", "JEBEL ALI, AE",
    "KHALIFA PORT, AE", "SHARJAH, AE", "FELIXSTOWE, GB", "LIVERPOOL, GB", "LONDON GATEWAY, GB",
    "SOUTHAMPTON, GB", "MONTEVIDEO, UY", "NUEVA PALMIRA, UY", "LONG BEACH, US", "LOS ANGELES, US",
    "OAKLAND, US", "SEATTLE, US", "TACOMA, US", "PORTLAND, US", "SAN DIEGO, US", "NEW YORK, US",
    "NEW JERSEY, US", "SAVANNAH, US", "NORFOLK, VA", "CHARLESTON, US", "JACKSONVILLE, US",
    "BALTIMORE, US", "COLUMBUS, OH", "BOSTON, US", "HOUSTON, US", "GALVESTON, US", "FREEPORT, US",
    "MOBILE, US", "MIAMI, US", "PORT EVERGLADES, US", "TAMPA, US", "NEW ORLEANS, US", "NORFOLK, US",
    "PHILADELPHIA, US", "CHICAGO, US", "KINGSBURY, US", "DALLAS, US", "MEMPHIS, US",
    "MINNEAPOLIS, US", "ATLANTA, US", "KANSAS CITY, US", "LA GUAIRA, VE", "MARACAIBO, VE",
    "PUERTO CABELLO, VE", "CAI MEP, VN", "CAT LAI, VN", "DANANG, VN", "HAIPHONG, VN",
    "HO CHI MINH, VN", "PHUOC LONG ICD, VN", "QUY NHON, VN", "VUNG TAU, VN", "ADEN, YE",
    "AL HODEIDAH, YE", "AL MUKALLA, YE", "ASH SHIHR, YE", "MOKHA, YE", "NASHTOON, YE",
    "RAS ISA, YE", "SALEEF, YE", "SOCOTRA, YE", "MUARA, BN", "SAN JUAN, PR", "TAMATAVE, MG",
    "LEIXOES, PT", "PORT OF SPAIN", "BRIDGETOWN, BB", "PARANGUA, BR", "BEIRUT, LB",
    "LOUISVILLE, KY", "NOUAKCHOTT, MR", "FUJAIRAH, AE", "KHOR FAKKAN, AE", "AQABA, JD",
    "INDIANAPOLIS, US", "KOPER, SI"
  ],
  "incoterms": ["EXW", "FOB", "CIF", "CFR", "DAP", "DDP", "FCA", "CPT"],
  "containers": ["20 GP", "40 GP", "40 HC", "20 RF", "40 RF", "20 TK", "40 TK"],
  "containerDimensions": [
    {"type":"20 GP","length":5.898,"width":2.352,"height":2.393,"maxWeight":28200,"cbm":33.2,"tareWeight":"0 kg","unit":"m"},
    {"type":"40 GP","length":12.032,"width":2.352,"height":2.393,"maxWeight":26580,"cbm":67.7,"tareWeight":"0 kg","unit":"m"},
    {"type":"40 HC","length":12.032,"width":2.352,"height":2.698,"maxWeight":26480,"cbm":76.3,"tareWeight":"0 kg","unit":"m"},
    {"type":"20 RF","length":5.444,"width":2.286,"height":2.275,"maxWeight":27700,"cbm":28.4,"tareWeight":"0 kg","unit":"m"},
    {"type":"40 RF","length":11.572,"width":2.286,"height":2.275,"maxWeight":26500,"cbm":54.3,"tareWeight":"0 kg","unit":"m"},
    {"type":"20 TK","length":5.898,"width":2.352,"height":2.393,"maxWeight":24000,"cbm":33.2,"tareWeight":"0 kg","unit":"m"},
    {"type":"40 TK","length":12.032,"width":2.352,"height":2.393,"maxWeight":26000,"cbm":67.7,"tareWeight":"0 kg","unit":"m"}
  ],
  "companyName": "GATEWAY EXIM",
  "companyAddress": "OFFICE NO.523, TOWER 1A, 73, EAST AVENUE, NR. GENDA CIRCLE, SARA BHAI CAMPUS, VADODARA, GUJARAT 390007 - INDIA",
  "defaultUser": "Shaikh Shahid",
  "exchangeRates": {"USD":97,"GBP":105.2,"RMB":11.5,"EUR":90.1,"AED":22.75,"INR":1},
  "defaultSeaCharges": [
    {"pol":"HAZIRA, IN","commodity":"NON HAZ","charges":{"CFS":{"amount":16950,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":2500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"LASHING & CHOKING":{"amount":2000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"ON WHEEL":{"amount":5000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"OTHER LOCALS":{"amount":2020,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"20 GP"},
    {"pol":"HAZIRA, IN","commodity":"NON HAZ","charges":{"CFS":{"amount":23950,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"LASHING & CHOKING":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"ON WHEEL":{"amount":5000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"OTHER LOCALS":{"amount":3320,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"40 HC"},
    {"pol":"NHAVA SHEVA, IN","commodity":"NON HAZ","charges":{"CFS":{"amount":15300,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":2500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"TOLL":{"amount":600,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"LASHING & CHOKING":{"amount":2500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"20 GP"},
    {"pol":"NHAVA SHEVA, IN","commodity":"NON HAZ","charges":{"CFS":{"amount":25500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"TOLL":{"amount":1200,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"LASHING & CHOKING":{"amount":3500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"40 HC"},
    {"pol":"MUNDRA, IN","commodity":"NON HAZ","charges":{"CFS":{"amount":17900,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":2500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"LASHING & CHOKING":{"amount":2000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"ON WHEEL":{"amount":5000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"LOLO":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"OTHER LOCALS":{"amount":2020,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"20 GP"},
    {"pol":"MUNDRA, IN","commodity":"NON HAZ","charges":{"CFS":{"amount":29950,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"LASHING & CHOKING":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"ON WHEEL":{"amount":5000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"LOLO":{"amount":5000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"OTHER LOCALS":{"amount":3320,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"40 HC"},
    {"pol":"HAZIRA, IN","commodity":"HAZ","charges":{"CFS":{"amount":16950,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":2500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"LASHING & CHOKING":{"amount":2000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"ON WHEEL":{"amount":5000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"OTHER LOCALS":{"amount":2020,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"20 GP"},
    {"pol":"HAZIRA, IN","commodity":"HAZ","charges":{"CFS":{"amount":23950,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"LASHING & CHOKING":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"ON WHEEL":{"amount":5000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"OTHER LOCALS":{"amount":3320,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"40 HC"},
    {"pol":"NHAVA SHEVA, IN","commodity":"HAZ","charges":{"CFS":{"amount":15300,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":2500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"TOLL":{"amount":600,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"LASHING & CHOKING":{"amount":2500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"HAZ STCKER":{"amount":700,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"20 GP"},
    {"pol":"NHAVA SHEVA, IN","commodity":"HAZ","charges":{"CFS":{"amount":25500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"TOLL":{"amount":1200,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"LASHING & CHOKING":{"amount":3500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"HAZ STCKER":{"amount":900,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"40 HC"},
    {"pol":"MUNDRA, IN","commodity":"HAZ","charges":{"CFS":{"amount":17900,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":2500,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"LASHING & CHOKING":{"amount":2000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"ON WHEEL":{"amount":5000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"LOLO":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"OTHER LOCALS":{"amount":2020,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"20 GP"},
    {"pol":"MUNDRA, IN","commodity":"HAZ","charges":{"CFS":{"amount":29950,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"CLEARANCE":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"VGM":{"amount":25,"currency":"USD","buyAmount":0,"buyCurrency":"USD","basis":"Normal"},"LASHING & CHOKING":{"amount":3000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"ON WHEEL":{"amount":5000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"LOLO":{"amount":5000,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"},"OTHER LOCALS":{"amount":3320,"currency":"INR","buyAmount":0,"buyCurrency":"INR","basis":"Normal"}},"carrier":"ALL","container":"40 HC"}
  ],
  "defaultAirCharges": [
    {"pol":"MUMBAI, IN","commodity":"NON HAZ","charges":{"CARTAGE":{"amount":1,"currency":"INR"},"MCC":{"amount":1,"currency":"INR"},"XRAY":{"amount":3.14,"currency":"INR"},"CUSTOM CLEARANCE":{"amount":3500,"currency":"INR"},"AWB FEES":{"amount":800,"currency":"INR"},"LOADING & UNLOADING":{"amount":800,"currency":"INR"},"ASI GMAX":{"amount":281,"currency":"INR"},"AMS":{"amount":1750,"currency":"INR"},"TEDI":{"amount":225,"currency":"INR"}}},
    {"pol":"MUMBAI, IN","commodity":"HAZ","charges":{"CARTAGE":{"amount":1,"currency":"INR"},"MCC":{"amount":1,"currency":"INR"},"XRAY":{"amount":3.14,"currency":"INR"},"CUSTOM CLEARANCE":{"amount":3500,"currency":"INR"},"AWB FEES":{"amount":800,"currency":"INR"},"LOADING & UNLOADING":{"amount":800,"currency":"INR"},"ASI GMAX":{"amount":281,"currency":"INR"},"AMS":{"amount":1750,"currency":"INR"},"TEDI":{"amount":225,"currency":"INR"},"DG FEES":{"amount":10000,"currency":"INR"},"DG AGENT FEE":{"amount":3500,"currency":"INR"}},"createdAt":"2026-07-30T16:23:38.785Z","updatedAt":"2026-07-30T16:23:38.785Z"},
    {"pol":"AHMEDABAD, IN","commodity":"NON HAZ","charges":{"CARTAGE":{"amount":850,"currency":"INR"},"MCC":{"amount":850,"currency":"INR"},"XRAY":{"amount":850,"currency":"INR"},"CUSTOM CLEARANCE":{"amount":2500,"currency":"INR"},"AWB FEES":{"amount":800,"currency":"INR"},"LOADING & UNLOADING":{"amount":800,"currency":"INR"},"ASI GMAX":{"amount":281,"currency":"INR"},"AMS":{"amount":1750,"currency":"INR"},"TEDI":{"amount":225,"currency":"INR"}},"createdAt":"2026-07-30T16:26:44.137Z","updatedAt":"2026-07-30T16:26:44.137Z"},
    {"pol":"AHMEDABAD, IN","commodity":"HAZ","charges":{"CARTAGE":{"amount":850,"currency":"INR"},"MCC":{"amount":850,"currency":"INR"},"XRAY":{"amount":850,"currency":"INR"},"CUSTOM CLEARANCE":{"amount":2500,"currency":"INR"},"AWB FEES":{"amount":800,"currency":"INR"},"LOADING & UNLOADING":{"amount":800,"currency":"INR"},"ASI GMAX":{"amount":281,"currency":"INR"},"AMS":{"amount":1750,"currency":"INR"},"TEDI":{"amount":225,"currency":"INR"},"DG FEES":{"amount":10000,"currency":"INR"},"DG AGENT FEE":{"amount":3500,"currency":"INR"}},"createdAt":"2026-07-30T16:27:00.870Z","updatedAt":"2026-07-30T16:27:00.870Z"}
  ],
  "defaultLclCharges": [
    {"pol":"NHAVA SHEVA, IN","commodity":"NON HAZ","charges":{"THC":{"amount":1000,"currency":"INR"},"CLEARANCE":{"amount":2500,"currency":"INR"},"VGM":{"amount":25,"currency":"USD"},"DOCS":{"amount":3200,"currency":"INR"}}},
    {"pol":"NHAVA SHEVA, IN","commodity":"HAZ","charges":{"THC":{"amount":1350,"currency":"INR"},"CLEARANCE":{"amount":2500,"currency":"INR"},"VGM":{"amount":25,"currency":"USD"},"DOCS":{"amount":3200,"currency":"INR"},"HAZ DOCS":{"amount":2500,"currency":"INR"}},"createdAt":"2026-07-30T16:25:47.841Z","updatedAt":"2026-07-30T16:25:47.841Z"}
  ],
  "carrierChargesSeaLcl": [
    {"mode":"sea","carrier":"HAPAG","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":18408,"currency":"INR","buyAmount":18408,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":2118,"currency":"INR","buyAmount":2118,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5300,"currency":"INR","buyAmount":5300,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":3750,"currency":"INR","buyAmount":3750,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":23238,"currency":"INR","buyAmount":23238,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":11560,"currency":"INR","buyAmount":11560,"buyCurrency":"INR"},"SEAL":{"amount":1120,"currency":"INR","buyAmount":1120,"buyCurrency":"INR"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR"},"DOCS":{"amount":5300,"currency":"INR","buyAmount":5300,"buyCurrency":"INR"},"AMS":{"amount":3750,"currency":"INR","buyAmount":3750,"buyCurrency":"INR"}},"updated":"2026-07-30T16:29:17.129Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":17805,"currency":"INR","buyAmount":17805,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"AHMEDABAD, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":11700,"currency":"INR","buyAmount":11700,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":920,"currency":"INR","buyAmount":920,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5300,"currency":"INR","buyAmount":5300,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":45450,"currency":"INR","buyAmount":45450,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":3750,"currency":"INR","buyAmount":3750,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"AHMEDABAD, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":17668,"currency":"INR","buyAmount":17668,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"AHMEDABAD, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":20498,"currency":"INR","buyAmount":20498,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":920,"currency":"INR","buyAmount":920,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5300,"currency":"INR","buyAmount":5300,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":3750,"currency":"INR","buyAmount":3750,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"AHMEDABAD, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":25877,"currency":"INR","buyAmount":25877,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":20725,"currency":"INR","buyAmount":20725,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":920,"currency":"INR","buyAmount":920,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5300,"currency":"INR","buyAmount":5300,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":3750,"currency":"INR","buyAmount":3750,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"HAZIRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":30796,"currency":"INR","buyAmount":30796,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":10512,"currency":"INR","buyAmount":10512,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":920,"currency":"INR","buyAmount":920,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5300,"currency":"INR","buyAmount":5300,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":3750,"currency":"INR","buyAmount":3750,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"HAZIRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":14808,"currency":"INR","buyAmount":14808,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":20498,"currency":"INR","buyAmount":20498,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":920,"currency":"INR","buyAmount":920,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5300,"currency":"INR","buyAmount":5300,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":3750,"currency":"INR","buyAmount":3750,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"MUNDRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":25877,"currency":"INR","buyAmount":25877,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":13200,"currency":"INR","buyAmount":13200,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":1120,"currency":"INR","buyAmount":1120,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5300,"currency":"INR","buyAmount":5300,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":3750,"currency":"INR","buyAmount":3750,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HAPAG","pol":"MUNDRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":16075,"currency":"INR","buyAmount":16075,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":10940,"currency":"INR","buyAmount":10940,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":38,"currency":"USD","buyAmount":38,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":17925,"currency":"INR","buyAmount":17925,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":14305,"currency":"INR","buyAmount":14305,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":38,"currency":"USD","buyAmount":38,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":3300,"currency":"INR","buyAmount":3300,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":21775,"currency":"INR","buyAmount":21775,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":12385,"currency":"INR","buyAmount":12385,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":38,"currency":"USD","buyAmount":38,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"MUNDRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":17170,"currency":"INR","buyAmount":17170,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":18050,"currency":"INR","buyAmount":18050,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":33,"currency":"USD","buyAmount":33,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":3300,"currency":"INR","buyAmount":3300,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"MUNDRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":23645,"currency":"INR","buyAmount":23645,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":9795,"currency":"INR","buyAmount":9795,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":33,"currency":"USD","buyAmount":33,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"HAZIRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":14455,"currency":"INR","buyAmount":14455,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":14255,"currency":"INR","buyAmount":14255,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":38,"currency":"USD","buyAmount":38,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":3300,"currency":"INR","buyAmount":3300,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"HAZIRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":21675,"currency":"INR","buyAmount":21675,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":9070,"currency":"INR","buyAmount":9070,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"},"ETS":{"amount":2800,"currency":"INR","buyAmount":2800,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":15000,"currency":"INR","buyAmount":15000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":11500,"currency":"INR","buyAmount":11500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":9,"currency":"USD","buyAmount":9,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":30,"currency":"USD","buyAmount":30,"buyCurrency":"USD","basis":"Normal"},"ETS":{"amount":2800,"currency":"INR","buyAmount":2800,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":30,"currency":"USD","buyAmount":30,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":16700,"currency":"INR","buyAmount":16700,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":11590,"currency":"INR","buyAmount":11590,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":9,"currency":"USD","buyAmount":9,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":30,"currency":"USD","buyAmount":30,"buyCurrency":"USD","basis":"Normal"},"ETS":{"amount":2800,"currency":"INR","buyAmount":2800,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":30,"currency":"USD","buyAmount":30,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"MUNDRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":15690,"currency":"INR","buyAmount":15690,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":15690,"currency":"INR","buyAmount":15690,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":9,"currency":"USD","buyAmount":9,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":30,"currency":"USD","buyAmount":30,"buyCurrency":"USD","basis":"Normal"},"ETS":{"amount":2800,"currency":"INR","buyAmount":2800,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":30,"currency":"USD","buyAmount":30,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"MUNDRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":17790,"currency":"INR","buyAmount":17790,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":9400,"currency":"INR","buyAmount":9400,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"},"ETS":{"amount":2800,"currency":"INR","buyAmount":2800,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":30,"currency":"USD","buyAmount":30,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"HAZIRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":13850,"currency":"INR","buyAmount":13850,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":12000,"currency":"INR","buyAmount":12000,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":9,"currency":"USD","buyAmount":9,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":30,"currency":"USD","buyAmount":30,"buyCurrency":"USD","basis":"Normal"},"ETS":{"amount":2800,"currency":"INR","buyAmount":2800,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":30,"currency":"USD","buyAmount":30,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MSC","pol":"HAZIRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":17500,"currency":"INR","buyAmount":17500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":11575,"currency":"INR","buyAmount":11575,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":1050,"currency":"INR","buyAmount":1050,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":1250,"currency":"INR","buyAmount":1250,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"HAZIRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":17100,"currency":"INR","buyAmount":17100,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":20300,"currency":"INR","buyAmount":20300,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":1050,"currency":"INR","buyAmount":1050,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":1250,"currency":"INR","buyAmount":1250,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"HAZIRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":30200,"currency":"INR","buyAmount":30200,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":12850,"currency":"INR","buyAmount":12850,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":1050,"currency":"INR","buyAmount":1050,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":1250,"currency":"INR","buyAmount":1250,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"MUNDRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":19800,"currency":"INR","buyAmount":19800,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":30100,"currency":"INR","buyAmount":30100,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":1050,"currency":"INR","buyAmount":1050,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":1250,"currency":"INR","buyAmount":1250,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"MUNDRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":45125,"currency":"INR","buyAmount":45125,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":11625,"currency":"INR","buyAmount":11625,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":1050,"currency":"INR","buyAmount":1050,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":1250,"currency":"INR","buyAmount":1250,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":18775,"currency":"INR","buyAmount":18775,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":16125,"currency":"INR","buyAmount":16125,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":1050,"currency":"INR","buyAmount":1050,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":1250,"currency":"INR","buyAmount":1250,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ZIM","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":26100,"currency":"INR","buyAmount":26100,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ESL","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4300,"currency":"INR","buyAmount":4300,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1600,"currency":"INR","buyAmount":1600,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ESL","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4300,"currency":"INR","buyAmount":4300,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1600,"currency":"INR","buyAmount":1600,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ESL","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4300,"currency":"INR","buyAmount":4300,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1600,"currency":"INR","buyAmount":1600,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ESL","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4300,"currency":"INR","buyAmount":4300,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1600,"currency":"INR","buyAmount":1600,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ESL","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4300,"currency":"INR","buyAmount":4300,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1600,"currency":"INR","buyAmount":1600,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ESL","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4300,"currency":"INR","buyAmount":4300,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1600,"currency":"INR","buyAmount":1600,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"EVERGREEN","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":12400,"currency":"INR","buyAmount":12400,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":700,"currency":"INR","buyAmount":700,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"EVERGREEN","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":11500,"currency":"INR","buyAmount":11500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"EVERGREEN","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":700,"currency":"INR","buyAmount":700,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5000,"currency":"INR","buyAmount":5000,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1000,"currency":"INR","buyAmount":1000,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":14,"currency":"USD","buyAmount":14,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ONE","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4200,"currency":"INR","buyAmount":4200,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ONE","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4200,"currency":"INR","buyAmount":4200,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ONE","pol":"MUNDRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":16225,"currency":"INR","buyAmount":16225,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ONE","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4200,"currency":"INR","buyAmount":4200,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ONE","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4200,"currency":"INR","buyAmount":4200,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ONE","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4200,"currency":"INR","buyAmount":4200,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ONE","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4200,"currency":"INR","buyAmount":4200,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MAERSK","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":11,"currency":"USD","buyAmount":11,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":20,"currency":"USD","buyAmount":20,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MAERSK","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":11,"currency":"USD","buyAmount":11,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":40,"currency":"USD","buyAmount":40,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MAERSK","pol":"MUNDRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":15700,"currency":"INR","buyAmount":15700,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MAERSK","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":11,"currency":"USD","buyAmount":11,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":40,"currency":"USD","buyAmount":40,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MAERSK","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":11,"currency":"USD","buyAmount":11,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":40,"currency":"USD","buyAmount":40,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MAERSK","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":11,"currency":"USD","buyAmount":11,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":20,"currency":"USD","buyAmount":20,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MAERSK","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":15515,"currency":"INR","buyAmount":15515,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":11,"currency":"USD","buyAmount":11,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":40,"currency":"USD","buyAmount":40,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MAERSK","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":21200,"currency":"INR","buyAmount":21200,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ALADINEXP","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4000,"currency":"INR","buyAmount":4000,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1200,"currency":"INR","buyAmount":1200,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ALADINEXP","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4000,"currency":"INR","buyAmount":4000,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1200,"currency":"INR","buyAmount":1200,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ALADINEXP","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4000,"currency":"INR","buyAmount":4000,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1200,"currency":"INR","buyAmount":1200,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ALADINEXP","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":24500,"currency":"INR","buyAmount":24500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4000,"currency":"INR","buyAmount":4000,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1200,"currency":"INR","buyAmount":1200,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ALADINEXP","pol":"MUNDRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":38500,"currency":"INR","buyAmount":38500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ALADINEXP","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":10222,"currency":"INR","buyAmount":10222,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4000,"currency":"INR","buyAmount":4000,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1200,"currency":"INR","buyAmount":1200,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ALADINEXP","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":16608,"currency":"INR","buyAmount":16608,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ALADINEXP","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":15000,"currency":"INR","buyAmount":15000,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4000,"currency":"INR","buyAmount":4000,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":1200,"currency":"INR","buyAmount":1200,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ALADINEXP","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":22470,"currency":"INR","buyAmount":22470,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":9250,"currency":"INR","buyAmount":9250,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5000,"currency":"INR","buyAmount":5000,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"HAZIRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":14200,"currency":"INR","buyAmount":14200,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":17000,"currency":"INR","buyAmount":17000,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5000,"currency":"INR","buyAmount":5000,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"HAZIRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":26000,"currency":"INR","buyAmount":26000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":12650,"currency":"INR","buyAmount":12650,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5000,"currency":"INR","buyAmount":5000,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"MUNDRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":19767,"currency":"INR","buyAmount":19767,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":28462,"currency":"INR","buyAmount":28462,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5000,"currency":"INR","buyAmount":5000,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"MUNDRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":44476,"currency":"INR","buyAmount":44476,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":10968,"currency":"INR","buyAmount":10968,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5000,"currency":"INR","buyAmount":5000,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":17655,"currency":"INR","buyAmount":17655,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":13108,"currency":"INR","buyAmount":13108,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5000,"currency":"INR","buyAmount":5000,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"HMM","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":21935,"currency":"INR","buyAmount":21935,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ECON","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":11500,"currency":"INR","buyAmount":11500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":400,"currency":"INR","buyAmount":400,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ECON","pol":"HAZIRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":17000,"currency":"INR","buyAmount":17000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ECON","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":20500,"currency":"INR","buyAmount":20500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":400,"currency":"INR","buyAmount":400,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ECON","pol":"HAZIRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":30000,"currency":"INR","buyAmount":30000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ECON","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":400,"currency":"INR","buyAmount":400,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ECON","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":400,"currency":"INR","buyAmount":400,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ECON","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":12500,"currency":"INR","buyAmount":12500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":400,"currency":"INR","buyAmount":400,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"ECON","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":400,"currency":"INR","buyAmount":400,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":15,"currency":"USD","buyAmount":15,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"NVOCC","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":13500,"currency":"INR","buyAmount":13500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":3500,"currency":"INR","buyAmount":3500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"NVOCC","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":18500,"currency":"INR","buyAmount":18500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"NVOCC","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":18500,"currency":"INR","buyAmount":18500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":3500,"currency":"INR","buyAmount":3500,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"EVERGREEN","pol":"HAZIRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":25500,"currency":"INR","buyAmount":25500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"EVERGREEN","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":700,"currency":"INR","buyAmount":700,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5000,"currency":"INR","buyAmount":5000,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":3500,"currency":"INR","buyAmount":3500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"WANHAI","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":11300,"currency":"INR","buyAmount":11300,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":400,"currency":"INR","buyAmount":400,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"WANHAI","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":18300,"currency":"INR","buyAmount":18300,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"WANHAI","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":13100,"currency":"INR","buyAmount":13100,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":400,"currency":"INR","buyAmount":400,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"WANHAI","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":21100,"currency":"INR","buyAmount":21100,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"HAZIRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":18000,"currency":"INR","buyAmount":18000,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":5,"currency":"USD","buyAmount":5,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"HAZIRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":27000,"currency":"INR","buyAmount":27000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":9000,"currency":"INR","buyAmount":9000,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":5,"currency":"USD","buyAmount":5,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"HAZIRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":13500,"currency":"INR","buyAmount":13500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"MUNDRA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":29000,"currency":"INR","buyAmount":29000,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":5,"currency":"USD","buyAmount":5,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"MUNDRA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":43450,"currency":"INR","buyAmount":43450,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"MUNDRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":11900,"currency":"INR","buyAmount":11900,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":5,"currency":"USD","buyAmount":5,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"MUNDRA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":17800,"currency":"INR","buyAmount":17800,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":13700,"currency":"INR","buyAmount":13700,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":5,"currency":"USD","buyAmount":5,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":21250,"currency":"INR","buyAmount":21250,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":10000,"currency":"INR","buyAmount":10000,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":5,"currency":"USD","buyAmount":5,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5500,"currency":"INR","buyAmount":5500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"COSCO","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":15900,"currency":"INR","buyAmount":15900,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"SEAPOL","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":15500,"currency":"INR","buyAmount":15500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":3000,"currency":"INR","buyAmount":3000,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"SEAPOL","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":22500,"currency":"INR","buyAmount":22500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"KMTC","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":11400,"currency":"INR","buyAmount":11400,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"KMTC","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":17900,"currency":"INR","buyAmount":17900,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"KMTC","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":14500,"currency":"INR","buyAmount":14500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":8,"currency":"USD","buyAmount":8,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"HAZDOCS":{"amount":3000,"currency":"INR","buyAmount":3000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"KMTC","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":22500,"currency":"INR","buyAmount":22500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"MAXICON","pol":"HAZIRA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":13500,"currency":"INR","buyAmount":13500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":750,"currency":"INR","buyAmount":750,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5000,"currency":"INR","buyAmount":5000,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"RADIANT","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":13000,"currency":"INR","buyAmount":13000,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":750,"currency":"INR","buyAmount":750,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":3000,"currency":"INR","buyAmount":3000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"RADIANT","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":19500,"currency":"INR","buyAmount":19500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"RADIANT","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":18500,"currency":"INR","buyAmount":18500,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":750,"currency":"INR","buyAmount":750,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"SEAWAY":{"amount":3000,"currency":"INR","buyAmount":3000,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2500,"currency":"INR","buyAmount":2500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"RADIANT","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":28000,"currency":"INR","buyAmount":28000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"SINOKOR","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":15779,"currency":"INR","buyAmount":15779,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"SINOKOR","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":3000,"currency":"INR","buyAmount":3000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"AHMEDABAD, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":17270,"currency":"INR","buyAmount":17270,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"CMA","pol":"AHMEDABAD, IN","container":"20 GP","commodity":"NON HAZ","charges":{"SEAL":{"amount":10,"currency":"USD","buyAmount":10,"buyCurrency":"USD","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":5100,"currency":"INR","buyAmount":5100,"buyCurrency":"INR","basis":"Normal"},"ETS":{"amount":33,"currency":"USD","buyAmount":33,"buyCurrency":"USD","basis":"Normal"},"AMS":{"amount":35,"currency":"USD","buyAmount":35,"buyCurrency":"USD","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"TURKON","pol":"NHAVA SHEVA, IN","container":"20 GP","commodity":"NON HAZ","charges":{"THC":{"amount":12000,"currency":"INR","buyAmount":12000,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":2068,"currency":"INR","buyAmount":2068,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"TURKON","pol":"NHAVA SHEVA, IN","container":"40 HC","commodity":"NON HAZ","charges":{"THC":{"amount":19000,"currency":"INR","buyAmount":19000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"TURKON","pol":"NHAVASHEVA, IN","container":"20 GP","commodity":"HAZ","charges":{"THC":{"amount":14250,"currency":"INR","buyAmount":14250,"buyCurrency":"INR","basis":"Normal"},"SEAL":{"amount":2068,"currency":"INR","buyAmount":2068,"buyCurrency":"INR","basis":"Normal"},"MUC":{"amount":170,"currency":"INR","buyAmount":170,"buyCurrency":"INR","basis":"Normal"},"DOCS":{"amount":4500,"currency":"INR","buyAmount":4500,"buyCurrency":"INR","basis":"Normal"},"HAZDOCS":{"amount":2000,"currency":"INR","buyAmount":2000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"},
    {"mode":"sea","carrier":"TURKON","pol":"NHAVASHEVA, IN","container":"40 HC","commodity":"HAZ","charges":{"THC":{"amount":22000,"currency":"INR","buyAmount":22000,"buyCurrency":"INR","basis":"Normal"}},"updated":"2026-07-30T16:17:43.350Z"}
  ],
  "carrierChargesAir": [],
  "drafts": {"sea":[],"air":[],"lcl":[]},
  "rates": {"sea":[],"air":[],"lcl":[]},
  "rateSheet": [],
  "hiddenItems": {"pol":[],"pod":[],"incoterms":[],"containers":[],"carriers":[]},
  "theme": "light",
  "lastBackup": "2026-07-30T18:09:22.760Z",
  "duplicateDetectionDays": 30,
  "navState": {"expandedCategories":["newQuote","quoteSheet","dsrCat","reports","admin"],"lastTab":"database"},
  "shipments": [],
  "bldrafts": [],
  "cargoStatusMaster": ["RATES REQUESTED","RATES RECEIVED","RATES QUOTED","INQUERY","LOST","NO SERVICE","HIGH RATES","RATES APPROVED","BOOKING PLACED","BOOKING RECEIVED","BOOKING SENT","CARGO PICKED","TRANSPORATION","AT CFS","UNDER CLEARANCE","CONTAINER GATEIN","BY ROAD MOVEMENT","BY RAIL MOVEMENT","SOB DONE","COMPLETED","PLANNING","DUPLICATE"],
  "docsStatusMaster": ["DOCS RECEIVED","CHECKLIST PENDING","CHECKLIST SHARED","CHECKLIST CORRECTION","CHECKLIST APPROVED","LEO RECEIVED","SI SUBMITED","DRAFT SHARED","BL CORRECTION","BL APPROVED","SELL GIVEN","INVOICE PENDING","PERFORMA INVOICE SENT","INVOICE APPROVED","TAX INVOICE SEND"],
  "users": [{"id":"Shaikh Shahid","password":"123789","name":"Shaikh Shahid","role":"master","permissions":"all"}],
  "defaults": {"gst":18,"insurance":0.05,"profitMargin":15,"defaultCurrency":"USD","usDuty":0,"usTariff":0,"usMPF":0.3464,"usHMF":0.125,"inDuty":7.5,"inSocialWelfare":10,"drawback":0,"rodtep":0},
  "stuffing": [],
  "truckingShipments": [],
  "detentionLots": [
    {"id":"lot-1","name":"20 GP Standard","freeDays":5,"slabs":[{"from":1,"to":5,"rate":10},{"from":6,"to":10,"rate":30},{"from":11,"to":20,"rate":50},{"from":21,"to":30,"rate":70},{"from":31,"to":999,"rate":100}]},
    {"id":"lot-2","name":"40 GP Standard","freeDays":5,"slabs":[{"from":1,"to":5,"rate":10},{"from":6,"to":10,"rate":30},{"from":11,"to":20,"rate":50},{"from":21,"to":30,"rate":70},{"from":31,"to":999,"rate":100}]},
    {"id":"lot-3","name":"40 HC Standard","freeDays":5,"slabs":[{"from":1,"to":5,"rate":10},{"from":6,"to":10,"rate":30},{"from":11,"to":20,"rate":50},{"from":21,"to":30,"rate":70},{"from":31,"to":999,"rate":100}]},
    {"id":"lot-4","name":"Reefer 20 RF","freeDays":3,"slabs":[{"from":1,"to":5,"rate":10},{"from":6,"to":10,"rate":30},{"from":11,"to":20,"rate":50},{"from":21,"to":30,"rate":70},{"from":31,"to":999,"rate":100}]},
    {"id":"lot-5","name":"Reefer 40 RF","freeDays":3,"slabs":[{"from":1,"to":5,"rate":10},{"from":6,"to":10,"rate":30},{"from":11,"to":20,"rate":50},{"from":21,"to":30,"rate":70},{"from":31,"to":999,"rate":100}]}
  ],
  "detentionRecords": [],
  "freightCalculations": [],
  "plannerNotes": [],
  "plannerTasks": []
};

// ==================== MAIN DB OBJECT ====================
// Initialize defaultDB from the embedded backup (deep clone to avoid mutation)
const defaultDB = JSON.parse(JSON.stringify(EMBEDDED_BACKUP));

// ---------- Global Variables ----------
let plannerCurrentDate = new Date();
let plannerSelectedDate = new Date();
let plannerEditingNote = null;
let currentRateRequestFormat = 'seaWithShipper';
let _previewRRData = null;


// ---------- Helper Functions ----------
function formatDateKey(date) {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getDayOfWeek(dateKey) {
    return new Date(dateKey + 'T00:00:00').getDay(); // 0=Sun
}

function getDayOfMonth(dateKey) {
    return parseInt(dateKey.split('-')[2]);
}

function isDateInRange(dateKey, start, end) {
    const d = new Date(dateKey + 'T00:00:00');
    const s = new Date(start + 'T00:00:00');
    const e = new Date(end + 'T00:00:00');
    return d >= s && d <= e;
}

// ---------- Get Notes for a Date (including recurring) ----------
function getNotesForDate(dateKey) {
    const all = [];
    const dayOfWeek = getDayOfWeek(dateKey);
    const dayOfMonth = getDayOfMonth(dateKey);
    const currentDate = new Date(dateKey + 'T00:00:00');

    db.plannerNotes.forEach(n => {
        if (n.recurrence === 'none' || !n.recurrence) {
            if (n.date === dateKey) all.push(n);
        } else if (n.recurrence === 'weekly') {
            if (n.dayOfWeek === dayOfWeek) all.push({ ...n, _recurring: true });
        } else if (n.recurrence === 'monthly') {
            if (n.dayOfMonth === dayOfMonth) all.push({ ...n, _recurring: true });
        } else if (n.recurrence === 'thisweek') {
            // Check if the date falls within the same week as n.date
            const weekStart = getWeekStart(new Date(n.date + 'T00:00:00'));
            const weekEnd = getWeekEnd(weekStart);
            if (currentDate >= weekStart && currentDate <= weekEnd) {
                all.push({ ...n, _recurring: true });
            }
        } else if (n.recurrence === 'thismonth') {
            // Check if the date falls within the same month as n.date
            const noteDate = new Date(n.date + 'T00:00:00');
            if (noteDate.getFullYear() === currentDate.getFullYear() &&
                noteDate.getMonth() === currentDate.getMonth()) {
                all.push({ ...n, _recurring: true });
            }
        }
    });
    return all;
}

// Helper to get week start (Monday)
function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
    return new Date(d.setDate(diff));
}

function getWeekEnd(weekStart) {
    const d = new Date(weekStart);
    d.setDate(d.getDate() + 6);
    return d;
}

function getNotesForDate_Original(dateKey) {
    return (db.plannerNotes || []).filter(n => n.date === dateKey);
}

function getTasksForDate(dateKey) {
    return (db.plannerTasks || []).filter(t => t.dueDate === dateKey);
}

function getQuotesForDate(dateKey) {
    const all = [];
    ['sea', 'air', 'lcl'].forEach(mode => {
        db.rates[mode].forEach(q => {
            const qDate = new Date(q.timestamp);
            if (formatDateKey(qDate) === dateKey) {
                all.push({ ...q, mode });
            }
        });
    });
    return all;
}

function getExpiringQuotesForDate(dateKey) {
    const all = [];
    ['sea', 'air', 'lcl'].forEach(mode => {
        db.rates[mode].forEach(q => {
            if (q.validityDate === dateKey) {
                all.push({ ...q, mode });
            }
        });
    });
    return all;
}

function getShipmentsUnderProcessForDate(dateKey) {
    const statuses = ['Booked', 'Confirmed', 'In Transit', 'Ready'];
    return (db.shipments || []).filter(s => {
        const sDate = new Date(s.createdAt || s.date);
        if (formatDateKey(sDate) !== dateKey) return false;
        return statuses.includes(s.cargoStatus);
    });
}

function getShipmentMilestonesForDate(dateKey) {
    const milestones = [];
    (db.shipments || []).forEach(s => {
        if (s.etd && formatDateKey(new Date(s.etd)) === dateKey) {
            milestones.push({ ...s, milestoneType: 'ETD', milestoneDate: s.etd });
        }
        if (s.eta && formatDateKey(new Date(s.eta)) === dateKey) {
            milestones.push({ ...s, milestoneType: 'ETA', milestoneDate: s.eta });
        }
    });
    return milestones;
}

function getRatesExpiringToday() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const todayStr = `${year}-${month}-${day}`; // YYYY-MM-DD

    return (db.rateSheet || []).filter(r => {
        if (!r.validTo) return false;
        // Normalize the date from the rate (it might be a string or Date)
        const rateDate = new Date(r.validTo);
        const rYear = rateDate.getFullYear();
        const rMonth = String(rateDate.getMonth() + 1).padStart(2, '0');
        const rDay = String(rateDate.getDate()).padStart(2, '0');
        const rateStr = `${rYear}-${rMonth}-${rDay}`;
        return rateStr === todayStr;
    });
}

// ---------- Render Calendar (with dots) ----------
function renderPlannerCalendar() {
    const year = plannerCurrentDate.getFullYear();
    const month = plannerCurrentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const grid = document.getElementById('planner-calendar-grid');
    grid.innerHTML = '';
    // Headers
    ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].forEach(d => {
        const div = document.createElement('div');
        div.style.fontWeight = '600';
        div.style.color = 'var(--text-light)';
        div.textContent = d;
        grid.appendChild(div);
    });

    const today = new Date();
    const todayKey = formatDateKey(today);
    const selectedKey = formatDateKey(plannerSelectedDate);

    // Precompute data for dots
    const hasData = {
        notes: {}, quotes: {}, expiring: {}, tasks: {}, shipments: {}, milestones: {}
    };

    // Notes (including recurring)
    const allDates = [];
    for (let d = 1; d <= daysInMonth; d++) {
        const dateObj = new Date(year, month, d);
        allDates.push(formatDateKey(dateObj));
    }
    allDates.forEach(dateKey => {
        // Notes (including recurring)
        const notes = getNotesForDate(dateKey);
        if (notes.length > 0) hasData.notes[dateKey] = true;
        // Quotes
        const quotes = getQuotesForDate(dateKey);
        if (quotes.length > 0) hasData.quotes[dateKey] = true;
        // Expiring
        const exp = getExpiringQuotesForDate(dateKey);
        if (exp.length > 0) hasData.expiring[dateKey] = true;
        // Tasks
        const tasks = getTasksForDate(dateKey);
        if (tasks.length > 0) hasData.tasks[dateKey] = true;
        // Shipments under process
        const ships = getShipmentsUnderProcessForDate(dateKey);
        if (ships.length > 0) hasData.shipments[dateKey] = true;
        // Milestones
        const miles = getShipmentMilestonesForDate(dateKey);
        if (miles.length > 0) hasData.milestones[dateKey] = true;
    });

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.style.visibility = 'hidden';
        grid.appendChild(empty);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateObj = new Date(year, month, day);
        const dateKey = formatDateKey(dateObj);
        const isToday = dateKey === todayKey;
        const isSelected = dateKey === selectedKey;

        const cell = document.createElement('div');
        cell.className = 'planner-day';
        if (isSelected) cell.classList.add('selected');
        if (isToday) cell.style.border = '2px solid var(--primary)';
        cell.textContent = day;

        // Dots container
        const dotsContainer = document.createElement('div');
        dotsContainer.className = 'dots-container';
        const dotTypes = [
            { key: 'notes', cls: 'dot-note' },
            { key: 'quotes', cls: 'dot-quote' },
            { key: 'expiring', cls: 'dot-expiring' },
            { key: 'tasks', cls: 'dot-task' },
            { key: 'shipments', cls: 'dot-shipment' },
            { key: 'milestones', cls: 'dot-milestone' }
        ];
        dotTypes.forEach(({ key, cls }) => {
            if (hasData[key] && hasData[key][dateKey]) {
                const dot = document.createElement('span');
                dot.className = 'dot ' + cls;
                dotsContainer.appendChild(dot);
            }
        });
        cell.appendChild(dotsContainer);

        cell.dataset.date = dateKey;
        cell.style.cursor = 'pointer';
        cell.addEventListener('click', function() {
            plannerSelectedDate = new Date(dateKey + 'T00:00:00');
            renderPlannerCalendar();
            loadPlannerDay(dateKey);
        });
        grid.appendChild(cell);
    }

    document.getElementById('planner-month-year').textContent =
        `${new Intl.DateTimeFormat('en', { month: 'long' }).format(plannerCurrentDate)} ${year}`;
}

// ---------- Load Day Details ----------
function loadPlannerDay(dateKey) {
    const displayDate = new Date(dateKey + 'T00:00:00');
    document.getElementById('planner-selected-date').textContent =
        `📅 ${displayDate.toLocaleDateString('en-IN', { weekday:'long', day:'numeric', month:'long', year:'numeric' })}`;

    // ---- NOTES ----
    const notes = getNotesForDate(dateKey);
    const notesContainer = document.getElementById('planner-notes-container');
    if (notes.length === 0) {
        notesContainer.innerHTML = '<em style="color:var(--text-light);">No notes for this day.</em>';
    } else {
        notesContainer.innerHTML = notes.map(n =>
            `<div class="planner-note-item">
                <span class="note-text">${escapeHtml(n.note)}${n._recurring ? ' <span class="note-recurring">↻ ' + (n.recurrence === 'weekly' ? 'Weekly' : n.recurrence === 'monthly' ? 'Monthly' : n.recurrence) + '</span>' : ''}</span>
                <div>
                    ${!n._recurring ? `<button class="btn btn-sm btn-preview" onclick="plannerEditNote('${n.id}')">✏️</button>` : ''}
                    ${!n._recurring ? `<button class="btn btn-sm btn-clear" onclick="plannerDeleteNote('${n.id}')">×</button>` : '<span style="font-size:0.6rem;color:var(--text-light);">(recurring)</span>'}
                </div>
            </div>`
        ).join('');
    }

    // ---- MILESTONES ----
    const milestones = getShipmentMilestonesForDate(dateKey);
    const milesContainer = document.getElementById('planner-milestones-list');
    if (milestones.length === 0) {
        milesContainer.innerHTML = '<em style="color:var(--text-light);">No milestones on this day.</em>';
    } else {
        milesContainer.innerHTML = milestones.map(s =>
            `<div class="planner-milestone-item">
                <div>
                    <span class="milestone-type ${s.milestoneType === 'ETD' ? 'milestone-etd' : 'milestone-eta'}">${s.milestoneType}</span>
                    <a href="javascript:void(0)" onclick="plannerOpenShipment('${s.code}')" style="color:var(--primary);">
                        ${s.code} - ${s.shipper}
                    </a>
                    (${s.pol} → ${s.pod})
                </div>
                <span style="font-size:0.7rem;color:var(--text-light);">${s.milestoneDate}</span>
            </div>`
        ).join('');
    }

    // ---- QUOTES QUOTED ----
    const quotes = getQuotesForDate(dateKey);
    const quotesContainer = document.getElementById('planner-quotes-list');
    if (quotes.length === 0) {
        quotesContainer.innerHTML = '<em style="color:var(--text-light);">No quotes quoted on this day.</em>';
    } else {
        quotesContainer.innerHTML = quotes.map(q =>
            `<div style="padding:2px 0; border-bottom:1px solid var(--border);">
                <a href="javascript:void(0)" onclick="plannerOpenQuote('${q.quoteNumber}','${q.mode}')" style="color:var(--primary);">
                    ${q.quoteNumber}
                </a>
                - ${q.client} (${q.pol} → ${q.pod})
            </div>`
        ).join('');
    }

    // ---- EXPIRING QUOTES ----
    const expQuotes = getExpiringQuotesForDate(dateKey);
    const expQuotesContainer = document.getElementById('planner-expiring-quotes-list');
    if (expQuotes.length === 0) {
        expQuotesContainer.innerHTML = '<em style="color:var(--text-light);">No quotes expiring on this day.</em>';
    } else {
        expQuotesContainer.innerHTML = expQuotes.map(q =>
            `<div style="padding:2px 0; border-bottom:1px solid var(--border); color:#991b1b;">
                <a href="javascript:void(0)" onclick="plannerOpenQuote('${q.quoteNumber}','${q.mode}')" style="color:#991b1b;">
                    ${q.quoteNumber}
                </a>
                - ${q.client} (${q.pol} → ${q.pod})
            </div>`
        ).join('');
    }

    // ---- RATES EXPIRING ON SELECTED DATE (from Rate Sheet) ----
    const expRates = getRatesExpiringOnDate(dateKey);
    const expRatesContainer = document.getElementById('planner-expiring-today-list-detail');
    if (expRates.length === 0) {
        expRatesContainer.innerHTML = '<em style="color:var(--text-light);">No rates expiring on this date.</em>';
    } else {
        expRatesContainer.innerHTML = expRates.map(r =>
            `<div style="padding:2px 0; border-bottom:1px solid var(--border);">
                <strong>${r.carrierName}</strong> - ${r.pol} → ${r.pod} (${r.freightType}) - ${r.freightAmount} ${r.currency}
                <button class="btn btn-sm btn-preview" onclick="plannerRenewRate('${r.id}')">🔄 Renew</button>
            </div>`
        ).join('');
    }

    // ---- TASKS ----
    const tasks = getTasksForDate(dateKey);
    const tasksContainer = document.getElementById('planner-tasks-list');
    if (tasks.length === 0) {
        tasksContainer.innerHTML = '<em style="color:var(--text-light);">No tasks for this day.</em>';
    } else {
        tasksContainer.innerHTML = tasks.map(t => {
            const statusClass = t.status === 'Done' ? 'task-status-done' :
                              t.status === 'In Progress' ? 'task-status-progress' : 'task-status-pending';
            return `<div class="planner-task-item">
                <span class="task-title">${escapeHtml(t.title)} ${t.priority === 'High' ? '🔴' : t.priority === 'Low' ? '🟢' : '🟡'}</span>
                <span class="task-status ${statusClass}">${t.status || 'Pending'}</span>
                <div>
                    <button class="btn btn-sm btn-preview" onclick="plannerToggleTaskStatus('${t.id}')">🔄</button>
                    <button class="btn btn-sm btn-clear" onclick="plannerDeleteTask('${t.id}')">×</button>
                </div>
            </div>`;
        }).join('');
    }

    // ---- SHIPMENTS UNDER PROCESS ----
    const shipments = getShipmentsUnderProcessForDate(dateKey);
    const shipContainer = document.getElementById('planner-shipments-list');
    if (shipments.length === 0) {
        shipContainer.innerHTML = '<em style="color:var(--text-light);">No shipments under process on this day.</em>';
    } else {
        shipContainer.innerHTML = shipments.map(s =>
            `<div style="padding:2px 0; border-bottom:1px solid var(--border);">
                <a href="javascript:void(0)" onclick="plannerOpenShipment('${s.code}')" style="color:var(--primary);">
                    ${s.code} - ${s.shipper}
                </a>
                (${s.pol} → ${s.pod}) - ${s.cargoStatus}
            </div>`
        ).join('');
    }

    // (No need to call updateExpiringToday() separately)
}

// ---------- Expiring Today ----------
function updateExpiringToday() {
    const expiring = getRatesExpiringToday();
    const countEl = document.getElementById('planner-expiring-today-count');
    const listEl = document.getElementById('planner-expiring-today-list');
    if (expiring.length === 0) {
        countEl.textContent = '0';
        listEl.innerHTML = '<em>No rates expiring today.</em>';
    } else {
        countEl.textContent = expiring.length;
        listEl.innerHTML = expiring.map(r =>
            `<div class="expiring-item">
                <strong>${r.carrierName}</strong> - ${r.pol} → ${r.pod} (${r.freightType}) - ${r.freightAmount} ${r.currency}
                <button class="btn btn-sm btn-preview" onclick="plannerRenewRate('${r.id}')">🔄 Renew</button>
            </div>`
        ).join('');
    }
}

// ---------- Navigation ----------
function plannerChangeMonth(delta) {
    plannerCurrentDate.setMonth(plannerCurrentDate.getMonth() + delta);
    renderPlannerCalendar();
    const selectedKey = formatDateKey(plannerSelectedDate);
    loadPlannerDay(selectedKey);
}

function plannerGoToday() {
    plannerCurrentDate = new Date();
    plannerSelectedDate = new Date();
    renderPlannerCalendar();
    loadPlannerDay(formatDateKey(plannerSelectedDate));
}

// ---------- Notes CRUD with Recurrence ----------
function plannerAddNote() {
    document.getElementById('planner-note-input-area').style.display = 'block';
    document.getElementById('planner-note-text').value = '';
    document.getElementById('planner-note-recurring').checked = false;
    document.getElementById('planner-note-recurrence-type').style.display = 'none';
    plannerEditingNote = null;
}

function plannerCancelNote() {
    document.getElementById('planner-note-input-area').style.display = 'none';
    plannerEditingNote = null;
}

function plannerSaveNote() {
    const text = document.getElementById('planner-note-text').value.trim();
    if (!text) return alert('Please enter a note.');
    const dateKey = formatDateKey(plannerSelectedDate);
    const isRecurring = document.getElementById('planner-note-recurring').checked;
    let recurrenceType = document.getElementById('planner-note-recurrence-type').value;

    // If not recurring, force 'none'
    if (!isRecurring) recurrenceType = 'none';

    if (plannerEditingNote) {
        const note = db.plannerNotes.find(n => n.id === plannerEditingNote);
        if (note) {
            note.note = text;
            note.updatedAt = new Date().toISOString();
            note.recurrence = recurrenceType;
            if (recurrenceType !== 'none') {
                note.dayOfWeek = getDayOfWeek(dateKey);
                note.dayOfMonth = getDayOfMonth(dateKey);
            } else {
                delete note.dayOfWeek;
                delete note.dayOfMonth;
            }
        }
    } else {
        const newNote = {
            id: 'note_' + Date.now(),
            date: dateKey,
            note: text,
            recurrence: recurrenceType,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        if (recurrenceType !== 'none') {
            newNote.dayOfWeek = getDayOfWeek(dateKey);
            newNote.dayOfMonth = getDayOfMonth(dateKey);
        }
        db.plannerNotes.push(newNote);
    }
    saveDB();
    plannerCancelNote();
    loadPlannerDay(dateKey);
    renderPlannerCalendar();
    autoBackup();
}

function plannerAddTaskQuick() {
    const dateKey = formatDateKey(plannerSelectedDate);
    const title = prompt('Enter task:');
    if (!title) return;
    db.plannerTasks.push({
        id: 'task_' + Date.now(),
        title: title,
        dueDate: dateKey,
        priority: 'Medium',
        status: 'Pending',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    });
    saveDB();
    loadPlannerDay(dateKey);
    renderPlannerCalendar();
    autoBackup();
}

function plannerEditNote(id) {
    const note = db.plannerNotes.find(n => n.id === id);
    if (!note || note._recurring) {
        alert('Recurring notes cannot be edited directly. Delete and create a new one.');
        return;
    }
    document.getElementById('planner-note-input-area').style.display = 'block';
    document.getElementById('planner-note-text').value = note.note;
    const isRecurring = note.recurrence && note.recurrence !== 'none';
    document.getElementById('planner-note-recurring').checked = isRecurring;
    const typeSelect = document.getElementById('planner-note-recurrence-type');
    typeSelect.style.display = isRecurring ? 'inline-block' : 'none';
    typeSelect.value = note.recurrence || 'weekly';
    plannerEditingNote = id;
}

function plannerDeleteNote(id) {
    if (!confirm('Delete this note?')) return;
    const idx = db.plannerNotes.findIndex(n => n.id === id);
    if (idx !== -1) db.plannerNotes.splice(idx, 1);
    saveDB();
    loadPlannerDay(formatDateKey(plannerSelectedDate));
    renderPlannerCalendar();
    autoBackup();
}

// ---------- Tasks CRUD ----------
function plannerAddTaskModal() {
    const dateKey = formatDateKey(plannerSelectedDate);
    const title = prompt('Enter task title:');
    if (!title) return;
    const priority = prompt('Priority (High/Medium/Low):', 'Medium');
    db.plannerTasks.push({
        id: 'task_' + Date.now(),
        title: title,
        dueDate: dateKey,
        priority: priority || 'Medium',
        status: 'Pending',
        description: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    });
    saveDB();
    loadPlannerDay(dateKey);
    renderPlannerCalendar();
    autoBackup();
}

function plannerAddTaskQuick() {
    const dateKey = formatDateKey(plannerSelectedDate);
    const title = prompt('Enter task title:');
    if (!title) return;
    db.plannerTasks.push({
        id: 'task_' + Date.now(),
        title: title,
        dueDate: dateKey,
        priority: 'Medium',
        status: 'Pending',
        description: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    });
    saveDB();
    loadPlannerDay(dateKey);
    renderPlannerCalendar();
    autoBackup();
}

function plannerToggleTaskStatus(id) {
    const task = db.plannerTasks.find(t => t.id === id);
    if (!task) return;
    const statuses = ['Pending', 'In Progress', 'Done'];
    let idx = statuses.indexOf(task.status);
    idx = (idx + 1) % statuses.length;
    task.status = statuses[idx];
    task.updatedAt = new Date().toISOString();
    saveDB();
    loadPlannerDay(formatDateKey(plannerSelectedDate));
    renderPlannerCalendar();
    autoBackup();
}

function plannerDeleteTask(id) {
    if (!confirm('Delete this task?')) return;
    const idx = db.plannerTasks.findIndex(t => t.id === id);
    if (idx !== -1) db.plannerTasks.splice(idx, 1);
    saveDB();
    loadPlannerDay(formatDateKey(plannerSelectedDate));
    renderPlannerCalendar();
    autoBackup();
}

// ---------- Navigation to other tabs ----------
function plannerOpenQuote(quoteNumber, mode) {
    let quote = null, idx = -1, target = 'rates';
    const modes = ['sea','air','lcl'];
    if (modes.includes(mode)) {
        const arr = db.rates[mode];
        const found = arr.findIndex(q => q.quoteNumber === quoteNumber);
        if (found !== -1) {
            quote = arr[found];
            idx = found;
        } else {
            const draftArr = db.drafts[mode];
            const foundD = draftArr.findIndex(q => q.quoteNumber === quoteNumber);
            if (foundD !== -1) {
                quote = draftArr[foundD];
                idx = foundD;
                target = 'drafts';
            }
        }
    }
    if (!quote) return alert('Quote not found.');
    switchToTab(target);
    setTimeout(() => {
        previewSavedRecord(target, mode, idx);
    }, 500);
}

function plannerOpenShipment(code) {
    const s = db.shipments.find(s => s.code === code);
    if (!s) return alert('Shipment not found.');
    switchToTab('dsr');
    setTimeout(() => {
        editDsrShipment(db.shipments.indexOf(s));
    }, 500);
}

// ===== RATE RENEWAL WITH POPUP =====
let renewRateId = null;

function plannerRenewRate(id) {
    const rate = db.rateSheet.find(r => r.id === id);
    if (!rate) return alert('Rate not found.');

    renewRateId = id;

    // Build the form with current values
    const body = document.getElementById('renewalModalBody');
    body.innerHTML = `
        <h4 style="color:var(--primary); margin-bottom:12px;">Renew Rate</h4>
        <p style="font-size:0.85rem; color:var(--text-light); margin-bottom:12px;">
            Update the rate details below and click <strong>Renew</strong> to create a new entry.
        </p>
        <div class="form-grid-2col">
            <div class="form-group">
                <label>Carrier *</label>
                <input type="text" id="renew-carrier" value="${rate.carrierName || ''}" style="width:100%;" />
            </div>
            <div class="form-group">
                <label>Freight Type *</label>
                <select id="renew-freight-type" style="width:100%;">
                    <option value="SEA" ${rate.freightType === 'SEA' ? 'selected' : ''}>SEA</option>
                    <option value="AIR" ${rate.freightType === 'AIR' ? 'selected' : ''}>AIR</option>
                    <option value="LCL" ${rate.freightType === 'LCL' ? 'selected' : ''}>LCL</option>
                </select>
            </div>
            <div class="form-group">
                <label>POL *</label>
                <input type="text" id="renew-pol" value="${rate.pol || ''}" style="width:100%;" />
            </div>
            <div class="form-group">
                <label>POD *</label>
                <input type="text" id="renew-pod" value="${rate.pod || ''}" style="width:100%;" />
            </div>
            <div class="form-group">
                <label>Container Type</label>
                <input type="text" id="renew-container" value="${rate.containerType || ''}" style="width:100%;" />
            </div>
            <div class="form-group">
                <label>Currency</label>
                <select id="renew-currency" style="width:100%;">
                    ${Object.keys(db.exchangeRates).map(c => 
                        `<option value="${c}" ${c === rate.currency ? 'selected' : ''}>${c}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Freight Amount *</label>
                <input type="number" id="renew-amount" step="0.01" value="${rate.freightAmount || 0}" style="width:100%;" />
            </div>
            <div class="form-group">
                <label>Transit Time</label>
                <input type="text" id="renew-transit" value="${rate.transitTime || ''}" style="width:100%;" />
            </div>
            <div class="form-group">
                <label>Commodity</label>
                <select id="renew-commodity" style="width:100%;">
                    <option value="">Select</option>
                    <option value="NON HAZ" ${rate.commodity === 'NON HAZ' ? 'selected' : ''}>Non Hazardous</option>
                    <option value="HAZ" ${rate.commodity === 'HAZ' ? 'selected' : ''}>Hazardous</option>
                </select>
            </div>
            <div class="form-group">
                <label>Valid From *</label>
                <input type="date" id="renew-valid-from" value="${rate.validFrom || new Date().toISOString().split('T')[0]}" style="width:100%;" />
            </div>
            <div class="form-group" style="grid-column:1/-1;">
                <label>Valid To *</label>
                <input type="date" id="renew-valid-to" value="${rate.validTo || new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0]}" style="width:100%;" />
            </div>
            <div class="form-group" style="grid-column:1/-1;">
                <label>Remarks</label>
                <textarea id="renew-remarks" rows="2" style="width:100%;">${rate.remarks || ''}</textarea>
            </div>
        </div>
        <div style="margin-top:16px; display:flex; gap:8px; justify-content:flex-end;">
            <button class="btn btn-clear" onclick="closeModal('renewalModal')">Cancel</button>
            <button class="btn btn-success" onclick="saveRenewedRate()">💾 Renew Rate</button>
        </div>
    `;
    openModal('renewalModal');
}

// ---------- Toggle recurrence options ----------
document.addEventListener('change', function(e) {
    if (e.target.id === 'planner-note-recurring') {
        const el = document.getElementById('planner-note-recurrence-type');
        el.style.display = e.target.checked ? 'inline-block' : 'none';
    }
});

// ---------- Escape HTML ----------
function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ---------- Init function ----------
function initPlanner() {
    // Ensure data structures exist
    if (!db.plannerNotes) db.plannerNotes = [];
    if (!db.plannerTasks) db.plannerTasks = [];
    plannerGoToday();
    updateExpiringToday
	// If planner tab is active on load (unlikely, but safe)
	// No need to call initPlanner here; it will be called when tab is switched.

}

// ==================== DATABASE INIT ====================
let db = localStorage.getItem('freight_db_v20')
  ? JSON.parse(localStorage.getItem('freight_db_v20'))
  : null;

if (!db) {
  // First time – use the embedded backup
  db = JSON.parse(JSON.stringify(EMBEDDED_BACKUP));
  
  // Merge any missing fields from defaultDB (safety net)
  for (let key in defaultDB) {
    if (!(key in db)) {
      db[key] = defaultDB[key];
    }
  }
  
  // Save the embedded data to localStorage so it persists
  saveDB();
}


if (!db.exchangeRates) db.exchangeRates = { ...defaultDB.exchangeRates };
if (!db.defaultSeaCharges) db.defaultSeaCharges = [];
if (!db.defaultAirCharges) db.defaultAirCharges = [];
if (!db.defaultLclCharges) db.defaultLclCharges = [];
if (!db.carrierChargesSeaLcl) db.carrierChargesSeaLcl = [];
if (!db.carrierChargesAir) db.carrierChargesAir = [];
if (!db.rateSheet) db.rateSheet = [];
if (!db.hiddenItems) db.hiddenItems = { pol: [], pod: [], incoterms: [], containers: [], carriers: [] };
if (!db.companyName) db.companyName = defaultDB.companyName;
if (!db.companyAddress) db.companyAddress = defaultDB.companyAddress;
if (!db.defaultUser) db.defaultUser = defaultDB.defaultUser;
if (!db.theme) db.theme = "light";
if (!db.lastBackup) db.lastBackup = null;
if (!db.duplicateDetectionDays) db.duplicateDetectionDays = 30;
if (!db.containerDimensions) db.containerDimensions = JSON.parse(JSON.stringify(defaultContainerDimensions));
if (!db.navState) db.navState = { expandedCategories: ['newQuote', 'quoteSheet', 'dsrCat', 'reports', 'admin'], lastTab: 'sea' };
if (!db.carriers || db.carriers.length === 0) {
    db.carriers = ["Maersk", "MSC", "CMA CGM", "Hapag-Lloyd", "ONE", "Emirates SkyCargo", "Lufthansa Cargo"];
    saveDB();
}
if (!db.shipments) db.shipments = [];
if (!db.bldrafts) db.bldrafts = [];
if (!db.cargoStatusMaster) db.cargoStatusMaster = ["Booked", "Confirmed", "In Transit", "Delivered", "Cancelled"];
if (!db.docsStatusMaster) db.docsStatusMaster = ["Pending", "In Progress", "Ready", "Sent", "Received"];
// Ensure users and defaults
if (!db.users) db.users = [];
if (!db.plannerNotes) db.plannerNotes = [];
if (!db.plannerTasks) db.plannerTasks = [];
if (!db.users.find(u => u.id === 'Shaikh Shahid')) {
    db.users.push({
        id: 'Shaikh Shahid',
        password: '123789',
        name: 'Shaikh Shahid',
        role: 'master',
        permissions: 'all'
    });
}
if (!db.defaults) {
    db.defaults = JSON.parse(JSON.stringify(defaultDB.defaults));

}
saveDB();

// ==================== APPLICATION STATE ====================
let editingRecord = null;
let _previewData = null;
let currentAddChargeMode = '';
let pendingDeleteCallback = null;
let currentEmailData = null;
let chargesOrder = { sea: null, air: null, lcl: null };
let searchTimeout = null;
let pendingTabSwitch = null;
let hasUnsavedChanges = { sea: false, air: false, lcl: false, rr: false };
let rateSheetFilter = 'all';
let rateSheetPage = 1;
let rateSheetPerPage = 20;
let currentMasterTab = 'pol';
let masterPage = 1;
let masterPerPage = 20;
let masterSearch = '';
let masterShowMode = 'visible';
let masterSort = 'alpha-asc';
let backupFolderHandle = null;
let autoBackupInterval = null;
let currentLocalContainer = null;
let sqliteLoadAttempts = 0;
const MAX_SQLITE_ATTEMPTS = 10;
let dsrDesignMode = false;

// ==================== DATABASE OPERATIONS ====================
function saveDB() {
    try {
        localStorage.setItem('freight_db_v20', JSON.stringify(db));
        return true;
    } catch (e) {
        console.error('Failed to save to localStorage:', e);
        alert('Storage limit reached! Please export your data and clear some old records.');
        return false;
    }
}

// ==================== NAVIGATION ====================
function toggleCategory(categoryId) {
    const items = document.getElementById(`cat-${categoryId}`);
    const arrow = document.getElementById(`arrow-${categoryId}`);
    const header = arrow.parentElement;

    // If this category is already expanded, just collapse it and return
    if (!items.classList.contains('collapsed')) {
        items.classList.add('collapsed');
        header.classList.add('collapsed');
        db.navState.expandedCategories = db.navState.expandedCategories.filter(c => c !== categoryId);
        saveDB();
        return;
    }

    // --- Close all other categories ---
    document.querySelectorAll('.nav-category-items').forEach(cat => {
        if (cat.id !== `cat-${categoryId}`) {
            cat.classList.add('collapsed');
            const catHeader = cat.previousElementSibling;
            if (catHeader && catHeader.classList.contains('nav-category-header')) {
                catHeader.classList.add('collapsed');
            }
            // Remove from navState
            const catId = cat.id.replace('cat-', '');
            db.navState.expandedCategories = db.navState.expandedCategories.filter(c => c !== catId);
        }
    });

    // --- Open the clicked category ---
    items.classList.remove('collapsed');
    header.classList.remove('collapsed');
    if (!db.navState.expandedCategories.includes(categoryId)) {
        db.navState.expandedCategories.push(categoryId);
    }
    saveDB();
}

function restoreNavState() {
    db.navState.expandedCategories.forEach(catId => {
        const items = document.getElementById(`cat-${catId}`);
        const arrow = document.getElementById(`arrow-${catId}`);
        if (items && arrow) {
            items.classList.remove('collapsed');
            arrow.parentElement.classList.remove('collapsed');
        }
    });
    ['newQuote', 'quoteSheet', 'dsrCat', 'reports', 'admin'].forEach(catId => {
        if (!db.navState.expandedCategories.includes(catId)) {
            const items = document.getElementById(`cat-${catId}`);
            const arrow = document.getElementById(`arrow-${catId}`);
            if (items && arrow) {
                items.classList.add('collapsed');
                arrow.parentElement.classList.add('collapsed');
            }
        }
    });
}

document.querySelectorAll('.tab-btn-vertical').forEach(btn => {
    btn.addEventListener('click', function(e) {
        const targetTab = this.dataset.tab;
        const currentTab = document.querySelector('.tab-panel.active')?.id;
        if (['sea', 'air', 'lcl', 'raterequest'].includes(currentTab) && hasUnsavedChanges[currentTab] && currentTab !== targetTab) {
            e.preventDefault();
            e.stopPropagation();
            pendingTabSwitch = targetTab;
            openModal('tabSwitchModal');
            return;
        }
        switchToTab(targetTab);
    });
});

function switchToTab(targetTab) {
    // --- Auto-hide side menu when switching tabs ---
    const wrapper = document.querySelector('.app-wrapper');
    if (wrapper && !wrapper.classList.contains('nav-collapsed')) {
        wrapper.classList.add('nav-collapsed');
        localStorage.setItem('navCollapsed', 'true');
    }

    // --- Existing tab switching logic ---
    document.querySelectorAll('.tab-btn-vertical').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    const btn = document.querySelector(`.tab-btn-vertical[data-tab="${targetTab}"]`);
    if (btn) btn.classList.add('active');
    const panel = document.getElementById(targetTab);
    if (panel) panel.classList.add('active');
    db.navState.lastTab = targetTab;
    saveDB();

    // --- Remove active class from all category headers ---
    document.querySelectorAll('.nav-category-header').forEach(h => h.classList.remove('active'));

    // --- Add active class to the parent category ---
    if (btn) {
        const category = btn.closest('.nav-category');
        if (category) {
            const header = category.querySelector('.nav-category-header');
            if (header) header.classList.add('active');
        }
    }

    // --- Render content based on tab ---
    if (targetTab === 'drafts') renderRecords('drafts');
    if (targetTab === 'rates') renderRecords('rates');
    if (targetTab === 'ratesheet') { renderRateSheet(); updateExpiryDashboard(); }
    if (targetTab === 'dsr') renderShipments();
    if (targetTab === 'bldraft') renderBLDrafts();
    if (targetTab === 'rrdrafts') renderRecords('rrdrafts');
    if (targetTab === 'followup') renderFollowups();
    if (targetTab === 'dashboard') renderDashboard();
    if (targetTab === 'database') renderDatabase();
    
    if (targetTab === 'raterequest') {
        populateRateRequestDropdowns();
        switchRateRequestFormat('seaWithShipper');
    }
     
    if (targetTab === 'measurement') {
        showMeasurementMenu();
        refreshMeasurementDefaults();
        const activeCalc = document.querySelector('.calc-panel.active');
        if (activeCalc) {
            const id = activeCalc.id.replace('calc-', '');
            if (id === 'duty') calcDuty();
            else if (id === 'product') calcProduct();
            else if (id === 'insurance') calcInsurance();
            else if (id === 'us-duty') calcUSDuty();
        }
        setTimeout(populateOOGContainerDropdown, 200);
        setTimeout(renderOOGContainerTable, 300);
        setTimeout(populateDetentionLotDropdown, 200);
        setTimeout(populateFreightDropdowns, 200);
        setTimeout(renderFreightChargeRows, 300);
        setTimeout(renderFreightRecords, 400);
        setTimeout(renderDetentionLots, 250);
        setTimeout(renderDetentionRecords, 300);
        const validFromInput = document.getElementById('fr-valid-from');
        if (validFromInput && !validFromInput.value) {
            validFromInput.valueAsDate = new Date();
        }
        if (targetTab === 'planner') {
            initPlanner();
        }
    }

    if (['sea', 'air', 'lcl'].includes(targetTab)) {
        populateDropdowns();
    }
    if (targetTab === 'sealocal' || targetTab === 'airlocal' || targetTab === 'lcllocal') {
        populateDropdowns();
        const mode = targetTab === 'sealocal' ? 'sea' : targetTab === 'airlocal' ? 'air' : 'lcl';
        currentLocalContainer = targetTab + '-content';
        renderDefaultChargesMaster(mode);
        renderCarrierChargesMaster(mode === 'sea' ? 'sealcl' : mode);
    }
    editingRecord = null;
    chargesOrder = { sea: null, air: null, lcl: null };
}

function openModal(id) { document.getElementById(id).classList.add('active'); }
function closeModal(id) { document.getElementById(id).classList.remove('active'); }

document.getElementById('tabSwitchSaveBtn').addEventListener('click', function() {
    if (pendingTabSwitch) {
        const currentTab = document.querySelector('.tab-panel.active')?.id;
        if (currentTab === 'raterequest') {
            const visibleFormat = document.querySelector('#raterequest .form-section[id^="rr-format-"]:not([style*="display:none"])');
            if (visibleFormat) {
                const format = visibleFormat.id.replace('rr-format-', '');
                const data = getRateRequestData(format);
                if (data.pol && data.pod) {
                    saveRateRequestDraft();
                } else {
                    alert('Please select POL and POD before saving.');
                    return;
                }
            }
        } else if (['sea', 'air', 'lcl'].includes(currentTab)) {
            saveRecord(currentTab, 'drafts');
        }
        hasUnsavedChanges = { sea: false, air: false, lcl: false, rr: false };
        closeModal('tabSwitchModal');
        switchToTab(pendingTabSwitch);
        pendingTabSwitch = null;
    }
});

document.getElementById('tabSwitchDiscardBtn').addEventListener('click', function() {
    if (pendingTabSwitch) {
        const currentTab = document.querySelector('.tab-panel.active')?.id;
        if (currentTab === 'raterequest') {
            clearRateRequestFormForCurrent();
        } else if (['sea', 'air', 'lcl'].includes(currentTab)) {
            clearForm(currentTab);
        }
        hasUnsavedChanges = { sea: false, air: false, lcl: false, rr: false };
        closeModal('tabSwitchModal');
        switchToTab(pendingTabSwitch);
        pendingTabSwitch = null;
    }
});

// Helper to clear the current RR format
function clearRateRequestFormForCurrent() {
    const visibleFormat = document.querySelector('#raterequest .form-section[id^="rr-format-"]:not([style*="display:none"])');
    if (visibleFormat) {
        const format = visibleFormat.id.replace('rr-format-', '');
        clearRateRequestForm(format);
    }
}

function markUnsaved(mode) { hasUnsavedChanges[mode] = true; }

// ==================== DARK MODE ====================
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.querySelector('.theme-toggle').textContent = theme === 'dark' ? '☀️ Light' : '🌙 Dark';
    db.theme = theme;
    saveDB();
}
function toggleDarkMode() { applyTheme(db.theme === 'dark' ? 'light' : 'dark'); }

// ==================== KEYBOARD SHORTCUTS ====================
function showShortcutHint(text) {
    const hint = document.getElementById('shortcutHint');
    hint.textContent = text;
    hint.classList.add('show');
    setTimeout(() => hint.classList.remove('show'), 2000);
}
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey || e.metaKey) {
        if (e.key === 's') {
            e.preventDefault();
            const a = document.querySelector('.tab-panel.active');
            if (a && ['sea', 'air', 'lcl'].includes(a.id)) { saveRecord(a.id, 'drafts'); showShortcutHint('💾 Saved'); }
        } else if (e.key === 'p') {
            e.preventDefault();
            const a = document.querySelector('.tab-panel.active');
            if (a && ['sea', 'air', 'lcl'].includes(a.id)) { downloadPDF(a.id); showShortcutHint('📄 PDF'); }
        } else if (e.key === 'n') {
            e.preventDefault();
            const a = document.querySelector('.tab-panel.active');
            if (a && ['sea', 'air', 'lcl'].includes(a.id)) { clearFormWithConfirm(a.id); showShortcutHint('✨ New'); }
        }
    }
    if (e.key === 'Escape') { document.querySelectorAll('.modal.active').forEach(m => m.classList.remove('active')); }
});

// ==================== INPUT FOCUS HIGHLIGHT ====================
function highlightInput(el) { el.classList.add('input-focus-red'); }
function unhighlightInput(el) { el.classList.remove('input-focus-red'); }

// ==================== CURRENCY HELPERS ====================
function getCurrencyOptions(selected) {
    if (!selected) selected = 'USD';
    return Object.keys(db.exchangeRates).map(c =>
        `<option value="${c}" ${c === selected ? 'selected' : ''}>${c}</option>`
    ).join('');
}

function toINR(amount, currency) {
    if (!amount || isNaN(amount)) return 0;
    const rate = db.exchangeRates[currency] || 1;
    return Math.round(parseFloat(amount) * rate * 100) / 100;
}

function formatINR(n) {
    return '₹ ' + Number(n || 0).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// ==================== QUOTE NUMBER GENERATION ====================
function generateQuoteNumber(mode) {
    const map = { sea: 'S', air: 'A', lcl: 'L' };
    const now = new Date();
    const base = `RQ-${map[mode]}-${String(now.getFullYear()).slice(-2)}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
    const all = [...db.rates[mode], ...db.drafts[mode]];
    let seq = 1;
    let qn = base;
    while (all.some(r => r.quoteNumber === qn)) { seq++; qn = `${base}-${String(seq).padStart(2,'0')}`; }
    return qn;
}

function generateRRNumber() {
    const now = new Date();
    const d = String(now.getDate()).padStart(2, '0');
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const y = String(now.getFullYear()).slice(-2);
    const h = String(now.getHours()).padStart(2, '0');
    const min = String(now.getMinutes()).padStart(2, '0');
    return `RR${d}${m}${y}-${h}${min}`;
}

// ==================== VALIDITY CHECK ====================
function getValidityStatus(validityDate) {
    if (!validityDate) return { status: 'none', text: '', class: '' };
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const valid = new Date(validityDate);
    valid.setHours(0, 0, 0, 0);
    const diffDays = Math.ceil((valid - today) / (1000 * 60 * 60 * 24));
    if (diffDays < 0) return { status: 'expired', text: `Expired ${Math.abs(diffDays)}d ago`, class: 'validity-expired' };
    if (diffDays <= 3) return { status: 'warning', text: `Expires in ${diffDays}d`, class: 'validity-warning' };
    return { status: 'ok', text: `Valid ${diffDays}d`, class: 'validity-ok' };
}

// ==================== DUPLICATE DETECTION ====================
function checkDuplicate(mode, client, pol, pod) {
    if (!client || !pol || !pod) return null;
    const daysBack = db.duplicateDetectionDays || 30;
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - daysBack);
    const allRecords = [...db.rates[mode], ...db.drafts[mode]];
    const duplicates = allRecords.filter(r => {
        if (!r.timestamp) return false;
        const recDate = new Date(r.timestamp);
        if (recDate < cutoffDate) return false;
        return (r.client || '').toLowerCase() === client.toLowerCase() &&
            (r.pol || '').toLowerCase() === pol.toLowerCase() &&
            (r.pod || '').toLowerCase() === pod.toLowerCase();
    });
    if (duplicates.length > 0) {
        const latest = duplicates.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
        return {
            count: duplicates.length,
            lastQuote: latest.quoteNumber,
            lastDate: new Date(latest.timestamp).toLocaleDateString('en-IN'),
            lastAmount: formatINR(latest.totalSellINR)
        };
    }
    return null;
}

// ==================== AIR CHARGE AUTO-CALCULATION ====================
function calculateAirCharges() {
    const weight = parseFloat(document.getElementById('air-weight')?.value) || 0;
    const pallets = parseFloat(document.getElementById('air-pallets')?.value) || 0;
    
    console.log('🔄 calculateAirCharges called with pallets:', pallets);
    
    if (pallets > 0) {
        const plies = pallets * 2;
        
        // ---- PALLETISATION: pallets × 1,875 ----
        const palletCharge = pallets * 1875;
        const palletEl = document.getElementById('air-amt-PALLETISATION');
        if (palletEl) {
            palletEl.value = palletCharge.toFixed(2);
            console.log('✅ PALLETISATION set to:', palletCharge);
        }
        
        // ---- PLY: plies × 600 ----
        const plyCharge = plies * 600;
        const plyEl = document.getElementById('air-amt-PLY');
        if (plyEl) {
            plyEl.value = plyCharge.toFixed(2);
            console.log('✅ PLY set to:', plyCharge);
        }
    }
    
    // Force recalculation of all charges
    recalcTotal('air');
}


function updateLCLPerCBM() {
    const volume = parseFloat(document.getElementById('lcl-volume')?.value) || 0;
    if (volume <= 0) return;
    recalcTotal('lcl');
}

// ==================== CHARGES UI WITH DRAG & DROP ====================
function buildChargesGrid(mode, savedCharges = {}, customOrder = null) {
    const grid = document.getElementById(`${mode}-charges-grid`);
    let html = '';
    const categories = chargeCategories[mode];
    let orderedCategories = {};
    Object.entries(categories).forEach(([cat, charges]) => { orderedCategories[cat] = [...charges]; });
    if (customOrder) {
        orderedCategories = {};
        Object.entries(customOrder).forEach(([cat, charges]) => { orderedCategories[cat] = charges; });
        Object.entries(categories).forEach(([cat, charges]) => {
            if (!orderedCategories[cat]) orderedCategories[cat] = [];
            charges.forEach(ch => {
                if (!Object.values(orderedCategories).flat().includes(ch)) orderedCategories[cat].push(ch);
            });
        });
    }
    Object.entries(orderedCategories).forEach(([category, charges]) => {
        if (charges.length === 0) return;
        html += `<div class="charge-category-header" data-category="${category}" ondragover="handleDragOver(event)" ondragenter="handleDragEnter(event)" ondragleave="handleDragLeave(event)" ondrop="handleDrop(event,'${mode}','${category}')">${category}</div>`;
        charges.forEach(charge => {
            const data = savedCharges[charge] || { amount: '', currency: 'INR', buyAmount: '', buyCurrency: 'INR', basis: 'Normal' };
            const safe = charge.replace(/[^A-Z0-9]/gi, '_');
            let placeholder = "0.00";
            if (mode === 'air' && airChargePlaceholders[charge]) placeholder = airChargePlaceholders[charge];
            if (mode === 'lcl' && (charge === 'FREIGHT' || charge === 'THC')) placeholder = "Per CBM rate";
            const isFreight = charge === 'FREIGHT' || charge === 'AIR FREIGHT';
            const freightClass = isFreight ? ' freight-row' : '';
            let basisHtml = '';
            let basisVal = 'Normal';
			if (mode === 'air') {
				if (charge === 'AIR FREIGHT') {
					basisVal = 'Per KGS';
				} else if (['CARTAGE', 'MCC', 'XRAY'].includes(charge)) {
					basisVal = 'Per KGS';
					placeholder = 'Rate per KGS (min ' + AIR_MIN_THRESHOLDS[charge] + ')';
				} else if (charge === 'GATE PASS') {
					basisVal = 'Per KGS × 4';
					placeholder = 'Rate per KGS ×4 (min ' + AIR_MIN_THRESHOLDS[charge] + ')';
				} else if (charge === 'PALLETISATION' || charge === 'PLY') {
					basisVal = 'Normal';
					placeholder = airChargePlaceholders[charge] || '0.00';
				} else {
					basisVal = data.basis || 'Normal';
				}
			}
            if (mode === 'lcl') {
                if (charge === 'FREIGHT' || charge === 'THC') basisVal = 'Per CBM';
                else basisVal = data.basis || 'Normal';
            }
            let opts = '';
            if (mode === 'air') {
                const basisOptions = ['Normal', 'Per KGS', 'Per KGS × 3', 'Per KGS × 4', 'Per CBM'];
                opts = basisOptions.map(b => `<option value="${b}" ${basisVal===b?'selected':''}>${b}</option>`).join('');
            } else if (mode === 'lcl') {
                const basisOptions = ['Normal', 'Per KGS', 'Per CBM'];
                opts = basisOptions.map(b => `<option value="${b}" ${basisVal===b?'selected':''}>${b}</option>`).join('');
            } else {
                opts = `<option value="Normal" selected>Normal</option>`;
            }
            basisHtml = `<select class="charge-basis" onchange="recalcCharge('${mode}','${charge}')">${opts}</select>`;

            let curOpts = getCurrencyOptions(data.currency || 'INR');
            let buyCurOpts = getCurrencyOptions(data.buyCurrency || 'INR');
            if ((mode === 'sea' || mode === 'lcl') && isFreight) { curOpts = getCurrencyOptions('USD'); buyCurOpts = getCurrencyOptions('USD'); }
            html += `<div class="charge-row${freightClass}" data-charge="${charge}" data-category="${category}" draggable="true" ondragstart="handleDragStart(event,'${mode}','${charge}')" ondragover="handleDragOver(event)" ondragenter="handleDragEnterRow(event)" ondragleave="handleDragLeaveRow(event)" ondrop="handleDropRow(event,'${mode}','${charge}')">
                        <span class="charge-name"><span class="charge-name-wrap"><span>${charge}</span></span></span>
                        <input type="text" step="0.01" class="sell-amt" id="${mode}-amt-${safe}" value="${data.amount||''}" placeholder="${placeholder}" oninput="recalcCharge('${mode}','${charge}')" onblur="evaluateFormula(this,'${mode}','${charge}')" onfocus="highlightInput(this)" onblur="unhighlightInput(this)">
                        <select class="sell-cur" id="${mode}-cur-${safe}" onchange="recalcCharge('${mode}','${charge}')">${curOpts}</select>
                        <input type="text" step="0.01" class="buy-input" id="${mode}-buyAmt-${safe}" value="${data.buyAmount||''}" placeholder="0.00" oninput="recalcCharge('${mode}','${charge}')" onfocus="highlightInput(this)" onblur="evaluateFormula(this,'${mode}','${charge}')">
                        <select class="buy-select" id="${mode}-buyCur-${safe}" onchange="recalcCharge('${mode}','${charge}')">${buyCurOpts}</select>
                        <span class="charge-inr" id="${mode}-inr-${safe}">—</span>
                        <span class="charge-buy-inr" id="${mode}-buyInr-${safe}">—</span>
                        <span class="charge-margin" id="${mode}-margin-${safe}">—</span>
                        <span class="charge-margin" id="${mode}-marginPct-${safe}">—</span>
                        ${basisHtml}
                        <button class="charge-delete-btn" onclick="removeChargeRow('${mode}','${charge}')">×</button>
                    </div>`;
        });
    });
    grid.innerHTML = html;
    recalcTotal(mode);
}

function evaluateFormula(input, mode, charge) {
    const val = input.value.trim();
    if (/^[\d+\-*/.()\s]+$/.test(val)) {
        try {
            const result = Function('"use strict"; return (' + val + ')')();
            if (!isNaN(result) && isFinite(result)) { input.value = result; recalcCharge(mode, charge); }
        } catch (e) {}
    }
}

let dragData = { mode: null, charge: null, sourceCategory: null };
function handleDragStart(e, mode, charge) {
    dragData = { mode, charge };
    const row = e.target.closest('.charge-row');
    dragData.sourceCategory = row?.getAttribute('data-category');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', charge);
    setTimeout(() => row?.classList.add('dragging'), 0);
}
function handleDragOver(e) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; }
function handleDragEnter(e) { e.preventDefault(); const header = e.target.closest('.charge-category-header'); if (header) header.classList.add('drag-over'); }
function handleDragLeave(e) { const header = e.target.closest('.charge-category-header'); if (header) header.classList.remove('drag-over'); }
function handleDragEnterRow(e) { e.preventDefault(); const row = e.target.closest('.charge-row'); if (row) row.classList.add('drag-over-row'); }
function handleDragLeaveRow(e) { const row = e.target.closest('.charge-row'); if (row) row.classList.remove('drag-over-row'); }
function handleDrop(e, mode, targetCategory) {
    e.preventDefault();
    const header = e.target.closest('.charge-category-header');
    if (header) header.classList.remove('drag-over');
    if (!dragData.charge || dragData.mode !== mode) return;
    moveChargeToCategory(mode, dragData.charge, dragData.sourceCategory, targetCategory);
    dragData = { mode: null, charge: null, sourceCategory: null };
}
function handleDropRow(e, mode, targetCharge) {
    e.preventDefault();
    const row = e.target.closest('.charge-row');
    if (row) row.classList.remove('drag-over-row');
    if (!dragData.charge || dragData.mode !== mode || dragData.charge === targetCharge) return;
    moveChargeBefore(mode, dragData.charge, dragData.sourceCategory, targetCharge, targetCharge);
    dragData = { mode: null, charge: null, sourceCategory: null };
}
function getCurrentChargesOrder(mode) {
    const grid = document.getElementById(`${mode}-charges-grid`);
    const order = {};
    let currentCategory = null;
    grid.childNodes.forEach(node => {
        if (node.classList?.contains('charge-category-header')) {
            currentCategory = node.getAttribute('data-category');
            if (!order[currentCategory]) order[currentCategory] = [];
        } else if (node.classList?.contains('charge-row')) {
            const charge = node.getAttribute('data-charge');
            const cat = node.getAttribute('data-category');
            if (!order[cat]) order[cat] = [];
            order[cat].push(charge);
        }
    });
    return order;
}
function moveChargeToCategory(mode, charge, fromCategory, toCategory) {
    const currentOrder = getCurrentChargesOrder(mode);
    if (fromCategory && currentOrder[fromCategory]) currentOrder[fromCategory] = currentOrder[fromCategory].filter(c => c !== charge);
    if (!currentOrder[toCategory]) currentOrder[toCategory] = [];
    currentOrder[toCategory].push(charge);
    chargesOrder[mode] = currentOrder;
    buildChargesGrid(mode, getCurrentChargesData(mode), chargesOrder[mode]);
}
function moveChargeBefore(mode, charge, fromCategory, targetCharge, targetCategory) {
    const currentOrder = getCurrentChargesOrder(mode);
    if (fromCategory && currentOrder[fromCategory]) currentOrder[fromCategory] = currentOrder[fromCategory].filter(c => c !== charge);
    if (!currentOrder[targetCategory]) currentOrder[targetCategory] = [];
    const idx = currentOrder[targetCategory].indexOf(targetCharge);
    if (idx >= 0) currentOrder[targetCategory].splice(idx, 0, charge);
    else currentOrder[targetCategory].push(charge);
    chargesOrder[mode] = currentOrder;
    buildChargesGrid(mode, getCurrentChargesData(mode), chargesOrder[mode]);
}
function getCurrentChargesData(mode) {
    const data = {};
    document.querySelectorAll(`#${mode}-charges-grid .charge-row`).forEach(row => {
        const charge = row.getAttribute('data-charge');
        const safe = charge.replace(/[^A-Z0-9]/gi, '_');
        const basisEl = row.querySelector('.charge-basis');
        data[charge] = {
            amount: document.getElementById(`${mode}-amt-${safe}`)?.value || '',
            currency: document.getElementById(`${mode}-cur-${safe}`)?.value || 'INR',
            buyAmount: document.getElementById(`${mode}-buyAmt-${safe}`)?.value || '',
            buyCurrency: document.getElementById(`${mode}-buyCur-${safe}`)?.value || 'INR',
            basis: basisEl ? basisEl.value : 'Normal'
        };
    });
    return data;
}
function removeChargeRow(mode, charge) {
    const row = document.querySelector(`#${mode}-charges-grid [data-charge="${charge}"]`);
    if (row) { row.remove(); recalcTotal(mode); }
}
function recalcCharge(mode, charge) {
    const safe = charge.replace(/[^A-Z0-9]/gi, '_');
    let sellAmt = parseFloat(document.getElementById(`${mode}-amt-${safe}`)?.value) || 0;
    let buyAmt = parseFloat(document.getElementById(`${mode}-buyAmt-${safe}`)?.value) || 0;
    const sellCur = document.getElementById(`${mode}-cur-${safe}`)?.value || 'INR';
    const buyCur = document.getElementById(`${mode}-buyCur-${safe}`)?.value || 'INR';

    const row = document.querySelector(`#${mode}-charges-grid .charge-row[data-charge="${charge}"]`);
    const basisEl = row ? row.querySelector('.charge-basis') : null;
    const basis = basisEl ? basisEl.value : 'Normal';

    let totalSellAmt = sellAmt;
    let totalBuyAmt = buyAmt;

    // ---- Special logic for PALLETISATION ----
    if (mode === 'air' && charge === 'PALLETISATION') {
        const pallets = parseFloat(document.getElementById('air-pallets')?.value) || 0;
        if (pallets > 0) {
            totalSellAmt = pallets * 1875;
            totalBuyAmt = Math.max(totalBuyAmt, totalSellAmt);
            const inputEl = document.getElementById(`${mode}-amt-${safe}`);
            if (inputEl && parseFloat(inputEl.value) !== totalSellAmt) {
                inputEl.value = totalSellAmt;
            }
        }
    }

    // ---- Special logic for PLY ----
    if (mode === 'air' && charge === 'PLY') {
        const pallets = parseFloat(document.getElementById('air-pallets')?.value) || 0;
        if (pallets > 0) {
            const plies = pallets * 2;
            totalSellAmt = plies * 600;
            totalBuyAmt = Math.max(totalBuyAmt, totalSellAmt);
            const inputEl = document.getElementById(`${mode}-amt-${safe}`);
            if (inputEl && parseFloat(inputEl.value) !== totalSellAmt) {
                inputEl.value = totalSellAmt;
            }
        }
    }

    // ---- Apply basis multipliers for other charges ----
    if (mode === 'air' || mode === 'lcl') {
        const weight = parseFloat(document.getElementById(`${mode}-weight`)?.value) || 0;
        const volume = parseFloat(document.getElementById(`${mode}-volume`)?.value) || 0;
        if (basis === 'Per KGS') {
            totalSellAmt *= weight;
            totalBuyAmt *= weight;
        } else if (basis === 'Per CBM') {
            totalSellAmt *= volume;
            totalBuyAmt *= volume;
        } else if (basis === 'Per KGS × 3') {
            totalSellAmt *= weight * 3;
            totalBuyAmt *= weight * 3;
        } else if (basis === 'Per KGS × 4') {
            totalSellAmt *= weight * 4;
            totalBuyAmt *= weight * 4;
        }
    }

    // ---- AIR minimum threshold - EXCLUDING PALLETISATION and PLY ----
    if (mode === 'air' && charge !== 'PALLETISATION' && charge !== 'PLY') {
        if (basis === 'Per KGS' || basis === 'Per KGS × 4') {
            if (AIR_MIN_THRESHOLDS[charge]) {
                const minVal = AIR_MIN_THRESHOLDS[charge];
                totalSellAmt = Math.max(totalSellAmt, minVal);
                totalBuyAmt = Math.max(totalBuyAmt, minVal);
            }
        }
    }

    // ---- LCL FREIGHT/THC per CBM ----
    if (mode === 'lcl' && (charge === 'FREIGHT' || charge === 'THC')) {
        const volume = parseFloat(document.getElementById('lcl-volume')?.value) || 0;
        if (volume > 0 && basis === 'Normal') {
            totalSellAmt *= volume;
            totalBuyAmt *= volume;
        }
    }

    const sellINR = toINR(totalSellAmt, sellCur);
    const buyINR = toINR(totalBuyAmt, buyCur);
    const margin = sellINR - buyINR;
    const marginPct = sellINR > 0 ? (margin / sellINR) * 100 : 0;

    const inrEl = document.getElementById(`${mode}-inr-${safe}`);
    const buyInrEl = document.getElementById(`${mode}-buyInr-${safe}`);
    const marginEl = document.getElementById(`${mode}-margin-${safe}`);
    const marginPctEl = document.getElementById(`${mode}-marginPct-${safe}`);
    if (inrEl) inrEl.textContent = totalSellAmt ? formatINR(sellINR) : '—';
    if (buyInrEl) buyInrEl.textContent = totalBuyAmt ? formatINR(buyINR) : '—';
    if (marginEl) {
        marginEl.textContent = (totalSellAmt || totalBuyAmt) ? formatINR(margin) : '—';
        marginEl.style.color = margin < 0 ? 'var(--danger)' : margin > 0 ? 'var(--success)' : 'var(--text)';
    }
    if (marginPctEl) marginPctEl.textContent = sellINR > 0 ? marginPct.toFixed(2) + '%' : 'N/A';

    recalcTotal(mode);
}



function recalcTotal(mode) {
    let totalSell = 0, totalBuy = 0;
    
    document.querySelectorAll(`#${mode}-charges-grid .charge-row`).forEach(row => {
        const charge = row.getAttribute('data-charge');
        const safe = charge.replace(/[^A-Z0-9]/gi, '_');
        
        let sellAmt = parseFloat(document.getElementById(`${mode}-amt-${safe}`)?.value) || 0;
        const sellCur = document.getElementById(`${mode}-cur-${safe}`)?.value || 'INR';
        let buyAmt = parseFloat(document.getElementById(`${mode}-buyAmt-${safe}`)?.value) || 0;
        const buyCur = document.getElementById(`${mode}-buyCur-${safe}`)?.value || 'INR';

        const basisEl = row.querySelector('.charge-basis');
        const basis = basisEl ? basisEl.value : 'Normal';

        let totalSellAmt = sellAmt;
        let totalBuyAmt = buyAmt;

        // ---- Special logic for PALLETISATION (calculate from pallets) ----
        if (mode === 'air' && charge === 'PALLETISATION') {
            const pallets = parseFloat(document.getElementById('air-pallets')?.value) || 0;
            if (pallets > 0) {
                totalSellAmt = pallets * 1875;
                totalBuyAmt = Math.max(totalBuyAmt, totalSellAmt);
                const inputEl = document.getElementById(`${mode}-amt-${safe}`);
                if (inputEl && parseFloat(inputEl.value) !== totalSellAmt) {
                    inputEl.value = totalSellAmt;
                }
            }
        }

        // ---- Special logic for PLY (calculate from pallets × 2 × 600) ----
        if (mode === 'air' && charge === 'PLY') {
            const pallets = parseFloat(document.getElementById('air-pallets')?.value) || 0;
            if (pallets > 0) {
                const plies = pallets * 2;
                totalSellAmt = plies * 600;
                totalBuyAmt = Math.max(totalBuyAmt, totalSellAmt);
                const inputEl = document.getElementById(`${mode}-amt-${safe}`);
                if (inputEl && parseFloat(inputEl.value) !== totalSellAmt) {
                    inputEl.value = totalSellAmt;
                }
            }
        }

        // ---- Apply basis multipliers for other charges ----
        if (mode === 'air' || mode === 'lcl') {
            const weight = parseFloat(document.getElementById(`${mode}-weight`)?.value) || 0;
            const volume = parseFloat(document.getElementById(`${mode}-volume`)?.value) || 0;
            if (basis === 'Per KGS') {
                totalSellAmt *= weight;
                totalBuyAmt *= weight;
            } else if (basis === 'Per CBM') {
                totalSellAmt *= volume;
                totalBuyAmt *= volume;
            } else if (basis === 'Per KGS × 3') {
                totalSellAmt *= weight * 3;
                totalBuyAmt *= weight * 3;
            } else if (basis === 'Per KGS × 4') {
                totalSellAmt *= weight * 4;
                totalBuyAmt *= weight * 4;
            }
        }

        // ---- AIR minimum threshold - EXCLUDING PALLETISATION and PLY ----
        if (mode === 'air' && charge !== 'PALLETISATION' && charge !== 'PLY') {
            if (basis === 'Per KGS' || basis === 'Per KGS × 4') {
                if (AIR_MIN_THRESHOLDS[charge]) {
                    const minVal = AIR_MIN_THRESHOLDS[charge];
                    totalSellAmt = Math.max(totalSellAmt, minVal);
                    totalBuyAmt = Math.max(totalBuyAmt, minVal);
                }
            }
        }

        // ---- LCL FREIGHT/THC per CBM ----
        if (mode === 'lcl' && (charge === 'FREIGHT' || charge === 'THC')) {
            const volume = parseFloat(document.getElementById('lcl-volume')?.value) || 0;
            if (volume > 0 && basis === 'Normal') {
                totalSellAmt *= volume;
                totalBuyAmt *= volume;
            }
        }

        totalSell += toINR(totalSellAmt, sellCur);
        totalBuy += toINR(totalBuyAmt, buyCur);
    });

    const margin = totalSell - totalBuy;
    const marginPct = totalSell > 0 ? (margin / totalSell) * 100 : 0;
    document.getElementById(`${mode}-totalSell`).textContent = formatINR(totalSell);
    document.getElementById(`${mode}-totalBuy`).textContent = formatINR(totalBuy);
    document.getElementById(`${mode}-totalMargin`).textContent = formatINR(margin);
    document.getElementById(`${mode}-totalMarginPct`).textContent = totalSell > 0 ? marginPct.toFixed(2) + '%' : 'N/A';

    const warningEl = document.getElementById(`${mode}-margin-warning`);
    if (warningEl) {
        if (margin < 0 && (totalSell > 0 || totalBuy > 0)) warningEl.classList.add('show');
        else warningEl.classList.remove('show');
    }
}

function calcSeaFSTotal() {
    ['20', '40'].forEach(row => {
        const ids = ['oft', 'subc', 'haz', 'ow', 'other', 'other2', 'other3', 'trk', 'ddp'];
        let total = 0;
        ids.forEach(id => {
            const el = document.getElementById(`sea-fs-${id}-${row}`);
            if (el) {
                const val = parseFloat(el.value) || 0;
                total += val;
            }
        });
        const totalEl = document.getElementById(`sea-fs-total-${row}`);
        if (totalEl) totalEl.textContent = total.toFixed(2);
    });
}


function calcAirFSTotal() {
    const ids = ['frt', 'fuel', 'carting', 'mcc', 'xray', 'other'];
    let total = 0;
    ids.forEach(id => {
        const el = document.getElementById(`air-fs-${id}`);
        if (el) {
            const val = parseFloat(el.value) || 0;
            total += val;
        }
    });
    const totalEl = document.getElementById('air-fs-total');
    if (totalEl) totalEl.textContent = total.toFixed(2);
}


// ==================== ADD CUSTOM CHARGE ====================
function openAddChargeModal(mode) {
    currentAddChargeMode = mode;
    document.getElementById('addChargeTitle').textContent = `Add Charge — ${mode.toUpperCase()}`;
    document.getElementById('new-charge-name').value = '';
    document.getElementById('new-charge-sell-amt').value = '';
    document.getElementById('new-charge-buy-amt').value = '';
    const defaultCur = (mode === 'sea' || mode === 'lcl') ? 'USD' : 'INR';
    document.getElementById('new-charge-sell-cur').innerHTML = getCurrencyOptions(defaultCur);
    document.getElementById('new-charge-buy-cur').innerHTML = getCurrencyOptions('INR');
    openModal('addChargeModal');
}
document.getElementById('addChargeSaveBtn').addEventListener('click', function() {
    const chargeName = document.getElementById('new-charge-name').value.trim().toUpperCase();
    if (!chargeName) { alert('Enter charge name'); return; }
    const grid = document.getElementById(`${currentAddChargeMode}-charges-grid`);
    if (grid.querySelector(`[data-charge="${chargeName}"]`)) { alert('Charge exists!'); return; }
    const data = getCurrentChargesData(currentAddChargeMode);
    data[chargeName] = {
        amount: document.getElementById('new-charge-sell-amt').value,
        currency: document.getElementById('new-charge-sell-cur').value,
        buyAmount: document.getElementById('new-charge-buy-amt').value,
        buyCurrency: document.getElementById('new-charge-buy-cur').value,
        basis: 'Normal'
    };
    const order = chargesOrder[currentAddChargeMode] || getCurrentChargesOrder(currentAddChargeMode);
    const lastCat = Object.keys(order).pop() || "Other Charges";
    if (!order[lastCat]) order[lastCat] = [];
    order[lastCat].push(chargeName);
    chargesOrder[currentAddChargeMode] = order;
    if (!defaultCharges[currentAddChargeMode].includes(chargeName)) defaultCharges[currentAddChargeMode].push(chargeName);
    buildChargesGrid(currentAddChargeMode, data, chargesOrder[currentAddChargeMode]);
    closeModal('addChargeModal');
});

// ==================== CLEAR FORM ====================
function clearFormWithConfirm(mode) {
    if (confirm('Are you sure you want to clear all form data? This action cannot be undone.')) clearForm(mode);
}

// ==================== DELETE CONFIRMATION ====================
function showDeleteConfirm(message, callback, showLostReason = false) {
    document.getElementById('deleteMessage').innerHTML = message;
    const lostBox = document.getElementById('lost-reason-box');
    if (showLostReason) lostBox.classList.add('show');
    else lostBox.classList.remove('show');
    pendingDeleteCallback = callback;
    openModal('deleteModal');
}
document.getElementById('deleteConfirmBtn').addEventListener('click', function() {
    if (pendingDeleteCallback) {
        const lostReason = document.getElementById('lost-reason-select').value;
        pendingDeleteCallback(lostReason);
        pendingDeleteCallback = null;
    }
    closeModal('deleteModal');
    document.getElementById('lost-reason-select').value = '';
});

function deleteRecord(target, mode, idx) {
    if (!db[target] || !db[target][mode] || idx < 0 || idx >= db[target][mode].length) {
        alert('Record not found. Please refresh and try again.');
        return;
    }
    const rec = db[target][mode][idx];
    showDeleteConfirm(`Delete quotation?<br><br><strong>${rec.client||'?'}</strong> (${rec.pol||'?'} → ${rec.pod||'?'})<br>${rec.quoteNumber||''}`, function() {
        try {
            if (idx < db[target][mode].length) {
                const recToDelete = db[target][mode][idx];
                db[target][mode].splice(idx, 1);
                saveDB();
                renderRecords(target);
                renderFollowups();
            } else {
                alert('Record no longer exists.');
            }
        } catch (e) { alert('Error: ' + e.message); }
    });
}

// ==================== AUTO-LOAD CHARGES (with "ALL" logic) ====================
function onCarrierChange(mode) { markUnsaved(mode); onCarrierPolChangeInternal(mode); }
function onPolChange(mode) { markUnsaved(mode); onCarrierPolChangeInternal(mode); }
function onContainerChange(mode) { markUnsaved(mode); onCarrierPolChangeInternal(mode); }

function onCarrierPolChangeInternal(mode) {
    const carrier = document.getElementById(`${mode}-carrier`).value;
    const pol = document.getElementById(`${mode}-pol`).value;
    const containerEl = document.getElementById(`${mode}-container`);
    const container = containerEl ? containerEl.value : '';
    const commodity = document.getElementById(`${mode}-commodity`).value;

    if (!carrier || !pol) {
        buildChargesGrid(mode);
        return;
    }

    // Preserve existing manual charges (including those added by user)
    const existingValues = {};
    document.querySelectorAll(`#${mode}-charges-grid .charge-row`).forEach(row => {
        const charge = row.getAttribute('data-charge');
        const safe = charge.replace(/[^A-Z0-9]/gi, '_');
        const sellEl = document.getElementById(`${mode}-amt-${safe}`);
        const curEl = document.getElementById(`${mode}-cur-${safe}`);
        const buyEl = document.getElementById(`${mode}-buyAmt-${safe}`);
        const buyCurEl = document.getElementById(`${mode}-buyCur-${safe}`);
        const basisEl = row.querySelector('.charge-basis');
        if (sellEl && sellEl.value) {
            existingValues[charge] = {
                amount: parseFloat(sellEl.value) || 0,
                currency: curEl ? curEl.value : 'INR',
                buyAmount: buyEl ? parseFloat(buyEl.value) || 0 : 0,
                buyCurrency: buyCurEl ? buyCurEl.value : 'INR',
                basis: basisEl ? basisEl.value : 'Normal'
            };
        }
    });

    // ---- 1. Load default charges (only for SEA, and only if checkbox is OFF) ----
    let defaultCharges = {};
    if (mode === 'sea') {
        const ownCfs = document.getElementById('sea-own-cfs')?.checked || false;
        if (!ownCfs) {
            const defaultMatch = db.defaultSeaCharges.find(d =>
                d.pol === pol && d.commodity === commodity
            );
            if (defaultMatch) {
                defaultCharges = { ...defaultMatch.charges };
                // Handle container suffix (if needed)
                let suffix = '';
                if (container === '20 GP') suffix = '_20';
                else if (container === '40 GP' || container === '40 HC') suffix = '_40';
                if (suffix) {
                    Object.keys(defaultCharges).forEach(key => {
                        if (key.endsWith(suffix)) {
                            const base = key.slice(0, -3);
                            defaultCharges[base] = defaultCharges[key];
                        }
                    });
                    Object.keys(defaultCharges).forEach(key => {
                        if (key.endsWith('_20') || key.endsWith('_40')) delete defaultCharges[key];
                    });
                }
            }
        }
    } else if (mode === 'air') {
        const defaultMatch = db.defaultAirCharges.find(d =>
            d.pol === pol && d.commodity === commodity
        );
        if (defaultMatch) defaultCharges = { ...defaultMatch.charges };
    } else if (mode === 'lcl') {
        const defaultMatch = db.defaultLclCharges.find(d =>
            d.pol === pol && d.commodity === commodity
        );
        if (defaultMatch) defaultCharges = { ...defaultMatch.charges };
    }

    // ---- 2. Load carrier‑specific charges (always) ----
    let carrierCharges = {};
    if (mode === 'sea') {
        const carrierMatch = db.carrierChargesSeaLcl.find(c =>
            c.mode === mode && c.carrier === carrier && c.pol === pol && c.commodity === commodity
        );
        if (carrierMatch) carrierCharges = { ...carrierMatch.charges };
        let suffix = '';
        if (container === '20 GP') suffix = '_20';
        else if (container === '40 GP' || container === '40 HC') suffix = '_40';
        if (suffix) {
            const thcKey = 'THC' + suffix;
            if (carrierCharges[thcKey]) carrierCharges.THC = carrierCharges[thcKey];
            delete carrierCharges.THC_20;
            delete carrierCharges.THC_40;
        }
    } else if (mode === 'air') {
        const carrierMatch = db.carrierChargesAir.find(c =>
            c.carrier === carrier && c.pol === pol && c.commodity === commodity
        );
        if (carrierMatch) carrierCharges = { ...carrierMatch.charges };
    } else if (mode === 'lcl') {
        const carrierMatch = db.carrierChargesSeaLcl.find(c =>
            c.mode === mode && c.carrier === carrier && c.pol === pol && c.commodity === commodity
        );
        if (carrierMatch) carrierCharges = { ...carrierMatch.charges };
    }

    // ---- 3. Merge: defaults + carrier + existing manual ----
    const mergedCharges = { ...defaultCharges, ...carrierCharges };
    const finalCharges = {};
    Object.keys(mergedCharges).forEach(charge => {
        const existing = existingValues[charge];
        const manualAmount = existing ? existing.amount : 0;
        if (manualAmount > 0) {
            finalCharges[charge] = {
                amount: manualAmount,
                currency: existing.currency || 'INR',
                buyAmount: existing.buyAmount || 0,
                buyCurrency: existing.buyCurrency || 'INR',
                basis: existing.basis || 'Normal'
            };
        } else {
            const val = mergedCharges[charge];
            if (val) {
                finalCharges[charge] = {
                    amount: val.amount || 0,
                    currency: val.currency || 'INR',
                    buyAmount: val.buyAmount || 0,
                    buyCurrency: val.buyCurrency || 'INR',
                    basis: val.basis || 'Normal'
                };
            }
        }
    });
    // Keep any manual charges that were not in merged
    Object.keys(existingValues).forEach(charge => {
        if (!finalCharges[charge]) {
            finalCharges[charge] = {
                amount: existingValues[charge].amount,
                currency: existingValues[charge].currency,
                buyAmount: existingValues[charge].buyAmount,
                buyCurrency: existingValues[charge].buyCurrency,
                basis: existingValues[charge].basis
            };
        }
    });

    // ---- 4. Build the order – REMOVE CFS category if checkbox is checked ----
    let order = JSON.parse(JSON.stringify(chargeCategories[mode])); // start fresh
    if (mode === 'sea') {
        const ownCfs = document.getElementById('sea-own-cfs')?.checked || false;
        if (ownCfs) {
            delete order['CFS / Transport Charges'];
        }
    }
    // Remove empty categories
    Object.keys(order).forEach(cat => {
        if (order[cat].length === 0) delete order[cat];
    });

    // ---- 5. Build the grid ----
    buildChargesGrid(mode, finalCharges, order);

    // ---- 6. Recalculate totals and special logic ----
    if (mode === 'air') {
        setTimeout(() => recalcCharge('air', 'PALLETISATION'), 100);
        const weight = parseFloat(document.getElementById('air-weight')?.value) || 0;
        if (weight > 0) {
            Object.keys(finalCharges).forEach(charge => {
                const basis = finalCharges[charge]?.basis || 'Normal';
                if (basis === 'Per KGS' || basis === 'Per KGS × 4') {
                    recalcCharge('air', charge);
                }
            });
        }
    }
    if (mode === 'lcl') {
        const volume = parseFloat(document.getElementById('lcl-volume')?.value) || 0;
        if (volume > 0) {
            Object.keys(finalCharges).forEach(charge => {
                const basis = finalCharges[charge]?.basis || 'Normal';
                if (basis === 'Per CBM') {
                    recalcCharge('lcl', charge);
                }
            });
        }
    }
    recalcTotal(mode);
}

function onOwnCfsToggle(mode) {
    if (mode === 'sea') {
        onCarrierPolChangeInternal('sea');
    }
}

// ==================== SEA AUTO RATE SELECTION ====================
function checkSeaRateAuto() {
    const mode = 'sea';
    const pol = document.getElementById('sea-pol')?.value;
    const pod = document.getElementById('sea-pod')?.value;
    const container = document.getElementById('sea-container')?.value;
    const commodity = document.getElementById('sea-commodity')?.value;
    if (!pol || !pod || !container) return;
    const matches = db.rateSheet.filter(r =>
        r.freightType === 'SEA' &&
        r.pol === pol &&
        r.pod === pod &&
        (r.containerType === container || r.containerType === '' || !r.containerType) &&
        parseFloat(r.freightAmount) > 0
    );
    if (matches.length === 0) return;
    showAutoRateModal(matches, 'sea');
}
function showAutoRateModal(matches, mode) {
    const body = document.getElementById('autoRateBody');
    let html = `<p style="margin-bottom:12px;color:var(--text-light);">Found <strong>${matches.length}</strong> matching rate(s) for this route. Click on a rate to apply it.</p>
                <table class="master-table"><thead><tr><th>Carrier</th><th>Container</th><th>Amount</th><th>Currency</th><th>Commodity</th><th>Valid To</th><th>Action</th></tr></thead><tbody>`;
    matches.forEach((r, idx) => {
        const expiry = getExpiryStatus(r.validTo);
        const statusClass = expiry.status === 'expired' ? 'status-expired' : expiry.status === 'expiring' ? 'status-expiring' : 'status-active';
        html += `<tr><td><strong>${r.carrierName}</strong></td><td>${r.containerType || '-'}</td><td>${Number(r.freightAmount).toLocaleString('en-IN')}</td><td>${r.currency || 'INR'}</td><td>${r.commodity || '-'}</td><td><span class="status-badge ${statusClass}">${r.validTo || '-'}</span></td><td><button class="btn btn-sm btn-success" onclick="applyAutoRate(${idx},'${mode}')">✅ Apply</button></td></tr>`;
    });
    html += `</tbody></table><div style="margin-top:12px;text-align:right;"><button class="btn btn-clear" onclick="closeModal('autoRateModal')">Close</button></div>`;
    body.innerHTML = html;
    window._autoRateMatches = matches;
    window._autoRateMode = mode;
    openModal('autoRateModal');
}
function applyAutoRate(idx, mode) {
    const matches = window._autoRateMatches;
    if (!matches || !matches[idx]) {
        alert('Rate data not found. Please try again.');
        return;
    }
    const rate = matches[idx];
    const freightKey = 'FREIGHT';
    const safe = freightKey.replace(/[^A-Z0-9]/gi, '_');

    // Get form elements – carrier is an INPUT with datalist
    const amtEl = document.getElementById(`${mode}-amt-${safe}`);
    const curEl = document.getElementById(`${mode}-cur-${safe}`);
    const carrierEl = document.getElementById(`${mode}-carrier`); // <input>
    const buyAmtEl = document.getElementById(`${mode}-buyAmt-${safe}`);

    // Verify all critical elements exist
    if (!amtEl || !curEl || !carrierEl) {
        alert('Cannot apply rate – the quotation form is not fully loaded. Please open the correct quotation tab first.');
        return;
    }

    // Populate freight amount and currency
    if (buyAmtEl) buyAmtEl.value = rate.freightAmount;
    if (curEl) curEl.value = rate.currency || 'USD';

    // Set carrier value on the input field
    if (rate.carrierName) {
        carrierEl.value = rate.carrierName;

        // Ensure the carrier exists in the datalist (optional)
        const datalist = document.getElementById(`${mode}-carrier-list`);
        if (datalist) {
            let found = false;
            for (let i = 0; i < datalist.options.length; i++) {
                if (datalist.options[i].value === rate.carrierName) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                const opt = document.createElement('option');
                opt.value = rate.carrierName;
                datalist.appendChild(opt);
            }
        }
    }

    // Recalculate the freight charge
    recalcCharge(mode, freightKey);
    closeModal('autoRateModal');
    alert(`✅ Rate applied from ${rate.carrierName} - ${rate.currency} ${rate.freightAmount}`);
}

// ==================== FORM DATA COLLECTION ====================
function getFormData(mode) {
    const data = { mode: mode.toUpperCase(), timestamp: new Date().toISOString(), lastModified: new Date().toISOString() };
    data.autoDate = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    data.sales = getLoggedInUserName() || db.defaultUser || 'N/A';

    const fields = ['client', 'carrier', 'pol', 'pod', 'incoterm', 'commodity', 'weight', 'transit', 'validityDate'];
    if (mode === 'sea') fields.push('container');
    if (mode === 'air' || mode === 'lcl') fields.push('volume');
    if (mode === 'air') fields.push('pallets');

    fields.forEach(f => {
        const el = document.getElementById(`${mode}-${f}`);
        if (el && el.value) data[f] = el.value;
    });

    const remarksEl = document.getElementById(`${mode}-remarks`);
    if (remarksEl && remarksEl.value) data.remarks = remarksEl.value;

    data.charges = {};
    document.querySelectorAll(`#${mode}-charges-grid .charge-row`).forEach(row => {
        const charge = row.getAttribute('data-charge');
        const safe = charge.replace(/[^A-Z0-9]/gi, '_');
        let sellAmt = parseFloat(document.getElementById(`${mode}-amt-${safe}`)?.value) || 0;
        const sellCur = document.getElementById(`${mode}-cur-${safe}`)?.value || 'INR';
        let buyAmt = parseFloat(document.getElementById(`${mode}-buyAmt-${safe}`)?.value) || 0;
        const buyCur = document.getElementById(`${mode}-buyCur-${safe}`)?.value || 'INR';
        const basisEl = row.querySelector('.charge-basis');
        const basis = basisEl ? basisEl.value : 'Normal';
        if (sellAmt > 0 || buyAmt > 0) {
            data.charges[charge] = { amount: sellAmt, currency: sellCur, buyAmount: buyAmt, buyCurrency: buyCur, basis: basis };
        }
    });
    data.chargesOrder = chargesOrder[mode] || getCurrentChargesOrder(mode);

    // ---- Freight & Surcharges (only for SEA) ----
    if (mode === 'sea') {
        data.freightSurcharges = {
            '20': {
                oft: parseFloat(document.getElementById('sea-fs-oft-20')?.value) || 0,
                subc: parseFloat(document.getElementById('sea-fs-subc-20')?.value) || 0,
                haz: parseFloat(document.getElementById('sea-fs-haz-20')?.value) || 0,
                ow: parseFloat(document.getElementById('sea-fs-ow-20')?.value) || 0,
                other: parseFloat(document.getElementById('sea-fs-other-20')?.value) || 0,
                other2: parseFloat(document.getElementById('sea-fs-other2-20')?.value) || 0,
                other3: parseFloat(document.getElementById('sea-fs-other3-20')?.value) || 0,
                trk: parseFloat(document.getElementById('sea-fs-trk-20')?.value) || 0,
                ddp: parseFloat(document.getElementById('sea-fs-ddp-20')?.value) || 0,
            },
            '40': {
                oft: parseFloat(document.getElementById('sea-fs-oft-40')?.value) || 0,
                subc: parseFloat(document.getElementById('sea-fs-subc-40')?.value) || 0,
                haz: parseFloat(document.getElementById('sea-fs-haz-40')?.value) || 0,
                ow: parseFloat(document.getElementById('sea-fs-ow-40')?.value) || 0,
                other: parseFloat(document.getElementById('sea-fs-other-40')?.value) || 0,
                other2: parseFloat(document.getElementById('sea-fs-other2-40')?.value) || 0,
                other3: parseFloat(document.getElementById('sea-fs-other3-40')?.value) || 0,
                trk: parseFloat(document.getElementById('sea-fs-trk-40')?.value) || 0,
                ddp: parseFloat(document.getElementById('sea-fs-ddp-40')?.value) || 0,
            }
        };
    }

	if (mode === 'air') {
		data.freightSurcharges = {
			frt: parseFloat(document.getElementById('air-fs-frt')?.value) || 0,
			fuel: parseFloat(document.getElementById('air-fs-fuel')?.value) || 0,
			carting: parseFloat(document.getElementById('air-fs-carting')?.value) || 0,
			mcc: parseFloat(document.getElementById('air-fs-mcc')?.value) || 0,
			xray: parseFloat(document.getElementById('air-fs-xray')?.value) || 0,
			other: parseFloat(document.getElementById('air-fs-other')?.value) || 0,
		};
	}



    data.totalSellINR = 0;
    data.totalBuyINR = 0;
    Object.values(data.charges).forEach(c => {
        data.totalSellINR += toINR(c.amount, c.currency);
        data.totalBuyINR += toINR(c.buyAmount, c.buyCurrency);
    });
    data.marginINR = data.totalSellINR - data.totalBuyINR;
    data.marginPct = data.totalSellINR > 0 ? (data.marginINR / data.totalSellINR) * 100 : 0;

    return data;
}

// ==================== SAVE / QUOTE ====================
function saveRecord(mode, target, status = 'DRAFT') {
    const data = getFormData(mode);
    if (!data.client && Object.keys(data.charges).length === 0) return alert('Fill Client Name or at least one charge.');
    if (data.marginINR < 0 && (data.totalSellINR > 0 || data.totalBuyINR > 0)) {
        if (!confirm('⚠️ WARNING: This quote has a negative margin (loss). Do you want to proceed?')) return;
    }
    const dup = checkDuplicate(mode, data.client, data.pol, data.pod);
    if (dup && !editingRecord) {
        const alertEl = document.getElementById(`${mode}-dup-alert`);
        const msgEl = document.getElementById(`${mode}-dup-msg`);
        msgEl.innerHTML = `This client + route was quoted <strong>${dup.count} time(s)</strong> in last ${db.duplicateDetectionDays} days. Last: ${dup.lastQuote} on ${dup.lastDate} for ${dup.lastAmount}.`;
        alertEl.classList.add('show');
        setTimeout(() => alertEl.classList.remove('show'), 10000);
    }
    data.status = status;
    if (editingRecord && editingRecord.target === target && editingRecord.mode === mode) {
        data.quoteNumber = editingRecord.originalQN || generateQuoteNumber(mode);
        data.lastModified = new Date().toISOString();
        db[target][mode][editingRecord.index] = data;
        editingRecord = null;
    } else {
        if (target === 'rates') data.quoteNumber = generateQuoteNumber(mode);
        else data.quoteNumber = 'DRAFT-' + Date.now();
        db[target][mode].push(data);
    }
    if (target === 'drafts' && data.carrier && data.pol) upsertCarrierCharges(mode, data);
    updateRateSheetFromQuote(data, mode);
    if (!saveDB()) return;
    document.getElementById(`${mode}-qn-value`).textContent = data.quoteNumber;
    document.getElementById(`${mode}-qn-box`).classList.add('show');
    hasUnsavedChanges[mode] = false;
    alert(target === 'rates' ? `Quotation finalized!\nQuote No: ${data.quoteNumber}` : 'Saved as Draft.');
    if (target === 'drafts') renderRecords('drafts');
    if (target === 'rates') renderRecords('rates');
    renderFollowups();
    autoBackup();
}

function updateRateSheetFromQuote(data, mode) {
    const freightKey = mode === 'air' ? 'AIR FREIGHT' : 'FREIGHT';
    const freight = data.charges && data.charges[freightKey];
    if (!freight) return;
    
    const freightAmount = parseFloat(freight.buyAmount) || 0;
    const freightCurrency = freight.buyCurrency || freight.currency || 'INR';
    if (freightAmount <= 0) return; // skip if no buy amount

    const carrier = data.carrier || '';
    const pol = data.pol || '';
    const pod = data.pod || '';
    const container = data.container || '';
    const freightType = mode.toUpperCase();
    const commodity = data.commodity || '';
    
    const existing = db.rateSheet.find(r =>
        r.carrierName === carrier &&
        r.freightType === freightType &&
        r.pol === pol &&
        r.pod === pod &&
        r.containerType === container &&
        parseFloat(r.freightAmount) === freightAmount &&
        r.currency === freightCurrency
    );
    if (existing) return;

    const rateData = {
        id: 'RS-' + Date.now(),
        carrierName: carrier,
        freightType: freightType,
        pol: pol,
        pod: pod,
        containerType: container,
        currency: freightCurrency,
        freightAmount: freightAmount,
        transitTime: data.transit ? `${data.transit} days` : '',
        validFrom: new Date().toISOString().split('T')[0],
        validTo: data.validityDate || '',
        commodity: commodity,
        remarks: `Auto-saved from quote ${data.quoteNumber || 'N/A'}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        source: 'quote',
        quoteNumber: data.quoteNumber
    };
    db.rateSheet.push(rateData);
    saveDB();
}

function upsertCarrierCharges(mode, data) {
    if (mode === 'air') {
        const idx = db.carrierChargesAir.findIndex(c => c.carrier === data.carrier && c.pol === data.pol);
        const entry = { carrier: data.carrier, pol: data.pol, charges: data.charges, updated: new Date().toISOString() };
        if (idx >= 0) db.carrierChargesAir[idx] = entry;
        else db.carrierChargesAir.push(entry);
    } else {
        const key = { mode, carrier: data.carrier, pol: data.pol, container: data.container || '' };
        const idx = db.carrierChargesSeaLcl.findIndex(c => c.mode === key.mode && c.carrier === key.carrier && c.pol === key.pol && (c.container || '') === key.container);
        const entry = { ...key, charges: data.charges, updated: new Date().toISOString() };
        if (idx >= 0) db.carrierChargesSeaLcl[idx] = entry;
        else db.carrierChargesSeaLcl.push(entry);
    }
}

function clearForm(mode) {
    const panel = document.getElementById(mode);
    panel.querySelectorAll('input,select,textarea').forEach(el => {
        if (el.tagName === 'SELECT') el.selectedIndex = 0;
        else el.value = '';
    });

    // ---- Reset Freight & Surcharges for SEA ----
    if (mode === 'sea') {
        document.querySelectorAll('#sea .fs-input').forEach(el => el.value = '');
        calcSeaFSTotal();
    }

	if (mode === 'air') {
		document.querySelectorAll('#air .fs-input-air').forEach(el => el.value = '');
		calcAirFSTotal();
	}

    document.getElementById(`${mode}-qn-box`).classList.remove('show');
    document.getElementById(`${mode}-dup-alert`).classList.remove('show');
    document.getElementById(`${mode}-margin-warning`).classList.remove('show');
    chargesOrder[mode] = null;
    buildChargesGrid(mode);
    editingRecord = null;
    hasUnsavedChanges[mode] = false;
    setValidityDefault(mode);
}




function setValidityDefault(mode) {
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const formatted = lastDay.toISOString().split('T')[0];
    const el = document.getElementById(`${mode}-validityDate`);
    if (el && !el.value) el.value = formatted;
}

function editRecord(target, mode, idx) {
    const rec = db[target][mode][idx];
    if (!rec) {
        alert('Record not found.');
        return;
    }

    // --- RR (Rate Request) handling ---
    if (mode === 'rr') {
    switchToTab('raterequest');
    // Determine the format from saved data
    let format = 'seaWithShipper';
    if (rec.clearance !== undefined) format = 'air';
    else if (rec.shipper && !rec.forwarder) format = 'seaWithShipper';
    else if (!rec.shipper && rec.forwarder) format = 'seaWithoutShipper';
    else if (rec.shipper && rec.forwarder) format = 'seaWithShipper';
    
    switchRateRequestFormat(format);  // updates currentRateRequestFormat
    const suffix = format === 'seaWithShipper' ? 'sea1' : format === 'seaWithoutShipper' ? 'sea2' : 'air';
    const fieldMap = {
        'sea1': ['shipper', 'forwarder', 'pol', 'pod', 'commodity', 'inventory', 'weight', 'term', 'validity', 'freeTime'],
        'sea2': ['forwarder', 'pol', 'pod', 'commodity', 'inventory', 'weight', 'term', 'validity', 'freeTime'],
        'air': ['shipper', 'pol', 'pod', 'clearance', 'commodity', 'weight', 'packaging', 'pallet', 'dimension', 'temp']
    };
    const fields = fieldMap[suffix] || [];
    fields.forEach(key => {
        const elId = `rr-${key}-${suffix}`;
        const el = document.getElementById(elId);
        if (el && rec[key] !== undefined && rec[key] !== null && rec[key] !== '') {
            if (el.tagName === 'SELECT') {
                const options = Array.from(el.options);
                const match = options.find(opt => opt.value === rec[key]);
                if (match) el.value = rec[key];
                else el.selectedIndex = 0;
            } else {
                el.value = rec[key];
            }
        }
    });
    editingRecord = { target, mode, index: idx, originalQN: rec.quoteNumber };
    hasUnsavedChanges.rr = false;
    return;
	}

    // --- Existing edit logic for sea, air, lcl ---
    document.querySelectorAll('.tab-btn-vertical').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.querySelector(`.tab-btn-vertical[data-tab="${mode}"]`).classList.add('active');
    document.getElementById(mode).classList.add('active');

    const fields = ['client', 'carrier', 'pol', 'pod', 'incoterm', 'commodity', 'weight', 'transit', 'validityDate'];
    if (mode === 'sea') fields.push('container');
    if (mode === 'air' || mode === 'lcl') fields.push('volume');
    if (mode === 'air') fields.push('pallets');

    fields.forEach(f => {
        const el = document.getElementById(`${mode}-${f}`);
        if (el && rec[f]) el.value = rec[f];
    });

    const remarksEl = document.getElementById(`${mode}-remarks`);
    if (remarksEl) remarksEl.value = rec.remarks || '';

    if (mode === 'sea' && rec.freightSurcharges) {
        const fs = rec.freightSurcharges;
        ['20', '40'].forEach(row => {
            const keys = ['oft', 'subc', 'haz', 'ow', 'other', 'other2', 'other3', 'trk', 'ddp'];
            keys.forEach(key => {
                const el = document.getElementById(`sea-fs-${key}-${row}`);
                if (el) el.value = fs[row]?.[key] || 0;
            });
        });
        calcSeaFSTotal();
    }
    if (mode === 'air' && rec.freightSurcharges) {
        const fs = rec.freightSurcharges;
        const keys = ['frt', 'fuel', 'carting', 'mcc', 'xray', 'other'];
        keys.forEach(key => {
            const el = document.getElementById(`air-fs-${key}`);
            if (el) el.value = fs[key] || 0;
        });
        calcAirFSTotal();
    }

    setTimeout(() => {
        chargesOrder[mode] = rec.chargesOrder || null;
        buildChargesGrid(mode, rec.charges || {}, chargesOrder[mode]);
        if (rec.quoteNumber) {
            document.getElementById(`${mode}-qn-value`).textContent = rec.quoteNumber;
            document.getElementById(`${mode}-qn-box`).classList.add('show');
        }
    }, 80);

    editingRecord = { target, mode, index: idx, originalQN: rec.quoteNumber };
    hasUnsavedChanges[mode] = false;
}



function duplicateQuote(target, mode, idx) {
    const rec = db[target][mode][idx];
    const newRec = JSON.parse(JSON.stringify(rec));
    newRec.quoteNumber = 'DRAFT-' + Date.now();
    newRec.timestamp = new Date().toISOString();
    newRec.lastModified = new Date().toISOString();
    newRec.status = 'DRAFT';
    newRec.followUpStatus = 'PENDING';
    delete newRec.followUpUpdated;
    delete newRec.lostReason;
    db.drafts[mode].push(newRec);
    saveDB();
    renderRecords('drafts');
    alert(`Quote duplicated successfully!\nNew Quote No: ${newRec.quoteNumber}\nSaved to Drafts.`);
}

function clearFilters(target) {
    document.getElementById(`${target}-search-text`).value = '';
    document.getElementById(`${target}-search-qn`).value = '';
    document.getElementById(`${target}-search-date`).value = '';
    if (target === 'rates') document.getElementById('rates-margin-filter').value = '';
    renderRecords(target);
}
function debouncedSearch(target) {
    if (searchTimeout) clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        if (target === 'rrdrafts') renderRRDrafts();
        else renderRecords(target);
    }, 300);
}


// ==================== RECORDS RENDERING ====================
function renderRecords(target) {
    // === ENHANCED RATES VIEW ===
    if (target === 'rates') {
        renderEnhancedRates();
        return;
    }

    // === DRAFTS VIEW (unchanged) ===
    const counterId = target === 'drafts' ? 'drafts-counters' : 'rates-counters';
    const countersEl = document.getElementById(counterId);
    if (countersEl) {
        let seaC = 0, airC = 0, lclC = 0, rrC = 0;
        if (target === 'drafts') {
            seaC = (db.drafts.sea || []).length;
            airC = (db.drafts.air || []).length;
            lclC = (db.drafts.lcl || []).length;
            rrC = (db.drafts.rr || []).length;
        } else {
            // For other targets, keep old counters (should not happen here)
        }
        const prefix = target === 'drafts' ? 'Draft' : 'Quoted';
        countersEl.innerHTML = `
            <div class="counter-card sea"><div class="counter-label">🚢 ${prefix} Sea</div><div class="counter-value">${seaC}</div></div>
            <div class="counter-card air"><div class="counter-label">✈️ ${prefix} Air</div><div class="counter-value">${airC}</div></div>
            <div class="counter-card lcl"><div class="counter-label">📦 ${prefix} LCL</div><div class="counter-value">${lclC}</div></div>
            <div class="counter-card" style="border-color:#8b5cf6;"><div class="counter-label">📊 Total</div><div class="counter-value">${seaC + airC + lclC}</div></div>
        `;
    }

    const searchText = (document.getElementById(`${target}-search-text`)?.value || '').toLowerCase();
    const searchQN = (document.getElementById(`${target}-search-qn`)?.value || '').toLowerCase();
    const searchDate = document.getElementById(`${target}-search-date`)?.value || '';
    const marginFilter = target === 'rates' ? (document.getElementById('rates-margin-filter')?.value || '') : '';
    
    const modes = target === 'drafts' ? ['sea', 'air', 'lcl'] : ['sea', 'air', 'lcl'];
    
    modes.forEach(mode => {
        const list = document.getElementById(`${target}-${mode}-list`);
        if (!list) return;
        let records = [...(db[target] && db[target][mode] ? db[target][mode] : [])];
        records = records.filter(r => {
            const text = `${r.client||''} ${r.pol||''} ${r.pod||''} ${r.carrier||''} ${r.shipper||''}`.toLowerCase();
            if (searchText && !text.includes(searchText)) return false;
            const qn = (r.quoteNumber || '').toLowerCase();
            if (searchQN && !qn.includes(searchQN)) return false;
            if (searchDate) {
                const d = new Date(r.timestamp).toISOString().split('T')[0];
                if (d !== searchDate) return false;
            }
            if (target === 'rates') {
                if (marginFilter === 'positive' && r.marginINR <= 0) return false;
                if (marginFilter === 'negative' && r.marginINR >= 0) return false;
                if (marginFilter === 'high' && r.marginPct <= 15) return false;
                if (marginFilter === 'low' && r.marginPct >= 5) return false;
            }
            return true;
        });
        if (records.length === 0) {
            list.innerHTML = '<p style="color:var(--text-light);padding:10px;">No records.</p>';
            return;
        }
        list.innerHTML = records.map(rec => {
            const realIdx = db[target][mode].indexOf(rec);
            const status = rec.followUpStatus || 'PENDING';
            const validity = getValidityStatus(rec.validityDate);
            const lastMod = rec.lastModified ? new Date(rec.lastModified).toLocaleString('en-IN') : new Date(rec.timestamp).toLocaleString('en-IN');
            const isRR = mode === 'rr';
            const modeClass = isRR ? 'highlight-rr' : `highlight-${mode}`;
            const displayName = isRR ? (rec.shipper || rec.client || '?') : (rec.client || '?');
            const route = isRR ? `${rec.pol || '?'} → ${rec.pod || '?'}` : `${rec.pol || '?'} → ${rec.pod || '?'}`;
            const carrierDisplay = isRR ? 'RR' : (rec.carrier || '?');
            
            let marginInfo = '';
            if (!isRR) {
                marginInfo = `<p class="margin-info">Margin: ${formatINR(rec.marginINR)} (${rec.marginPct.toFixed(2)}%)</p>`;
            }
            
            return `<div class="record-card ${modeClass}">
                        <div class="record-info">
                            <h4>${displayName} (${route}) ${validity.status !== 'none' ? `<span class="validity-badge ${validity.class}">${validity.text}</span>` : ''}</h4>
                            <p class="quote-num">📋 ${rec.quoteNumber||'?'}</p>
                            <p>Carrier: ${carrierDisplay} | Status: <strong>${rec.status}</strong> ${rec.lostReason ? `| Lost Reason: <strong style="color:#991b1b;">${rec.lostReason}</strong>` : ''}</p>
                            ${!isRR ? `<p>Sell: <strong>${formatINR(rec.totalSellINR)}</strong> | Buy: <strong style="color:var(--buy-red);">${formatINR(rec.totalBuyINR)}</strong></p>` : ''}
                            ${marginInfo}
                            <p class="last-modified">🕐 Last Modified: ${lastMod}</p>
                            ${!isRR ? `<div style="margin-top:6px;display:flex;align-items:center;gap:8px;">
                                <label style="font-size:0.72rem;font-weight:700;color:var(--text-light);">ACTION:</label>
                                <select class="follow-up-select follow-up-${status.toLowerCase().replace('-','')}" onchange="setFollowUpStatus('${target}','${mode}',${realIdx},this.value)">
                                    <option value="PENDING" ${status==='PENDING'?'selected':''}>⏳ Pending</option>
                                    <option value="SENT" ${status==='SENT'?'selected':''}>📤 Sent</option>
                                    <option value="FOLLOW-UP" ${status==='FOLLOW-UP'?'selected':''}>🔄 Follow-up</option>
                                    <option value="WON" ${status==='WON'?'selected':''}>✅ Won</option>
                                    <option value="LOST" ${status==='LOST'?'selected':''}>❌ Lost</option>
                                </select>
                            </div>` : ''}
                        </div>
                        <div class="record-actions">
                            <button class="btn btn-sm btn-preview" onclick="previewSavedRecord('${target}','${mode}',${realIdx})">👁 Preview</button>
                            <button class="btn btn-sm btn-pdf" onclick="downloadSavedPDF('${target}','${mode}',${realIdx})">📄 PDF</button>
                            ${!isRR ? `<button class="btn btn-sm btn-email" onclick="emailSavedQuote('${target}','${mode}',${realIdx})">📧 Email</button>` : ''}
                            <button class="btn btn-sm btn-duplicate" onclick="duplicateQuote('${target}','${mode}',${realIdx})">📋 Duplicate</button>
                            <button class="btn btn-sm btn-draft" onclick="editRecord('${target}','${mode}',${realIdx})">✏️ Edit</button>
                            <button class="btn btn-sm btn-clear" onclick="deleteRecord('${target}','${mode}',${realIdx})">🗑️ Delete</button>
                        </div>
                    </div>`;
        }).join('');
    });
}

// ==================== FOLLOW-UPS ====================
function renderFollowups() {
    const list = document.getElementById('followup-list');
    const counters = document.getElementById('followup-counters');

    // Exit silently if the container doesn't exist (tab not active or missing)
    if (!list && !counters) return;

    let allQuotes = [];
    ['sea', 'air', 'lcl'].forEach(mode => {
        db.rates[mode].forEach((rec, idx) => {
            allQuotes.push({ ...rec, _target: 'rates', _mode: mode, _idx: idx });
        });
    });

    // Update counters if they exist
    if (counters) {
        const pending = allQuotes.filter(r => !r.followUpStatus || r.followUpStatus === 'PENDING').length;
        const sent = allQuotes.filter(r => r.followUpStatus === 'SENT').length;
        const followup = allQuotes.filter(r => r.followUpStatus === 'FOLLOW-UP').length;
        const won = allQuotes.filter(r => r.followUpStatus === 'WON').length;
        const lost = allQuotes.filter(r => r.followUpStatus === 'LOST').length;
        counters.innerHTML = `
            <div class="counter-card" style="border-color:#f59e0b;"><div class="counter-label">⏳ Pending</div><div class="counter-value">${pending}</div></div>
            <div class="counter-card" style="border-color:#3b82f6;"><div class="counter-label">📤 Sent</div><div class="counter-value">${sent}</div></div>
            <div class="counter-card" style="border-color:#f97316;"><div class="counter-label">🔄 Follow-up</div><div class="counter-value">${followup}</div></div>
            <div class="counter-card" style="border-color:#10b981;"><div class="counter-label">✅ Won</div><div class="counter-value">${won}</div></div>
            <div class="counter-card" style="border-color:#ef4444;"><div class="counter-label">❌ Lost</div><div class="counter-value">${lost}</div></div>
        `;
    }

    // Update list only if the list element exists
    if (list) {
        const filterStatus = document.getElementById('followup-filter-status')?.value || '';
        let filtered = allQuotes.filter(r => {
            if (!filterStatus) return true;
            return (r.followUpStatus || 'PENDING') === filterStatus;
        });
        filtered.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

        if (filtered.length === 0) {
            list.innerHTML = '<p style="color:var(--text-light);padding:20px;text-align:center;">No quotes found</p>';
        } else {
            list.innerHTML = filtered.map(rec => {
                const status = rec.followUpStatus || 'PENDING';
                const updated = rec.followUpUpdated ? new Date(rec.followUpUpdated) : new Date(rec.timestamp);
                const daysSince = Math.floor((new Date() - updated) / (1000 * 60 * 60 * 24));
                const overdue = daysSince >= 3 && status !== 'WON' && status !== 'LOST';
                const validity = getValidityStatus(rec.validityDate);
                return `<div class="follow-up-card ${overdue?'overdue':''}" style="background:var(--card-bg);border:1px solid var(--border);border-radius:8px;padding:12px;margin-bottom:8px;border-left:5px solid var(--warning);">
                            <h4 style="color:var(--primary);margin-bottom:4px;font-size:0.9rem;">${rec.client||'Unknown'} (${rec.pol||'N/A'} → ${rec.pod||'N/A'}) ${validity.status !== 'none' ? `<span class="validity-badge ${validity.class}">${validity.text}</span>` : ''}</h4>
                            <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:2px;">Quote: <strong>${rec.quoteNumber||'N/A'}</strong> | Carrier: ${rec.carrier||'N/A'}</p>
                            <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:2px;">Status: <strong>${status}</strong> | Last Updated: ${updated.toLocaleDateString('en-IN')}</p>
                            ${rec.lostReason ? `<p style="color:#991b1b;font-weight:600;font-size:0.8rem;">Lost Reason: ${rec.lostReason}</p>` : ''}
                            ${overdue ? `<p style="color:var(--danger);font-weight:700;font-size:0.85rem;margin-top:4px;">⚠️ Overdue: ${daysSince} days since last update</p>` : ''}
                            <div style="margin-top:8px;display:flex;gap:5px;flex-wrap:wrap;align-items:center;">
                                <button class="btn btn-sm btn-preview" onclick="previewSavedRecord('rates','${rec._mode}',${rec._idx})">👁 Preview</button>
                                <select class="follow-up-select follow-up-${status.toLowerCase().replace('-','')}" onchange="setFollowUpStatus('rates','${rec._mode}',${rec._idx},this.value)">
                                    <option value="PENDING" ${status==='PENDING'?'selected':''}>⏳ Pending</option>
                                    <option value="SENT" ${status==='SENT'?'selected':''}>📤 Sent</option>
                                    <option value="FOLLOW-UP" ${status==='FOLLOW-UP'?'selected':''}>🔄 Follow-up</option>
                                    <option value="WON" ${status==='WON'?'selected':''}>✅ Won</option>
                                    <option value="LOST" ${status==='LOST'?'selected':''}>❌ Lost</option>
                                </select>
                            </div>
                        </div>`;
            }).join('');
        }
    }
}

function setFollowUpStatus(target, mode, idx, status) {
    db[target][mode][idx].followUpStatus = status;
    db[target][mode][idx].followUpUpdated = new Date().toISOString();
    db[target][mode][idx].lastModified = new Date().toISOString();
    if (status === 'LOST') {
        saveDB();
        renderFollowups();
        renderRecords(target);
        setTimeout(() => {
            const reason = prompt('Please enter reason for losing this quote:\n\nOptions:\n- High Rates\n- Slow Response\n- No Service\n- Client Not Interested\n- Competitor Won\n- Budget Constraints\n- Other');
            if (reason) {
                db[target][mode][idx].lostReason = reason;
                saveDB();
                renderFollowups();
                renderRecords(target);
            }
        }, 100);
    } else {
        saveDB();
        renderFollowups();
        renderRecords(target);
        if (status === 'WON' && target === 'rates') {
            if (confirm('Quote marked as WON.\n\nDo you want to create a Shipment from this quotation?')) {
                convertQuoteToShipmentByIndex(target, mode, idx);
            }
        }
    }
}

// ==================== DASHBOARD ====================
function renderDashboard() {
    const allRates = [...db.rates.sea, ...db.rates.air, ...db.rates.lcl];
    const totalRevenue = allRates.reduce((sum, r) => sum + (r.totalSellINR || 0), 0);
    const totalMargin = allRates.reduce((sum, r) => sum + (r.marginINR || 0), 0);
    const totalQuotes = allRates.length;
    const wonCount = allRates.filter(r => r.followUpStatus === 'WON').length;
    const conversion = totalQuotes > 0 ? ((wonCount / totalQuotes) * 100).toFixed(1) : 0;
    let expiringCount = 0, expiredCount = 0;
    allRates.forEach(r => {
        const v = getValidityStatus(r.validityDate);
        if (v.status === 'warning') expiringCount++;
        if (v.status === 'expired') expiredCount++;
    });
    document.getElementById('dash-total-revenue').textContent = formatINR(totalRevenue);
    document.getElementById('dash-total-margin').textContent = formatINR(totalMargin);
    document.getElementById('dash-total-quotes').textContent = totalQuotes;
    document.getElementById('dash-conversion').textContent = conversion + '%';
    document.getElementById('dash-expiring').textContent = expiringCount;
    document.getElementById('dash-expired').textContent = expiredCount;
    const clientMap = {};
    allRates.forEach(r => {
        const client = r.client || 'Unknown';
        clientMap[client] = (clientMap[client] || 0) + (r.totalSellINR || 0);
    });
    const topClients = Object.entries(clientMap).sort((a, b) => b[1] - a[1]).slice(0, 10);
    document.getElementById('dash-top-clients').innerHTML = topClients.length ?
        topClients.map(([c, v], i) => `<li style="padding:6px 8px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;"><span><strong style="color:var(--primary);">#${i+1}</strong> ${c}</span><strong>${formatINR(v)}</strong></li>`).join('') :
        '<li style="padding:10px;color:var(--text-light);">No data</li>';
    const routeMap = {};
    allRates.forEach(r => {
        const route = `${r.pol||'?'} → ${r.pod||'?'}`;
        routeMap[route] = (routeMap[route] || 0) + 1;
    });
    const topRoutes = Object.entries(routeMap).sort((a, b) => b[1] - a[1]).slice(0, 10);
    document.getElementById('dash-top-routes').innerHTML = topRoutes.length ?
        topRoutes.map(([r, c], i) => `<li style="padding:6px 8px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;"><span><strong style="color:var(--primary);">#${i+1}</strong> ${r}</span><strong>${c} quotes</strong></li>`).join('') :
        '<li style="padding:10px;color:var(--text-light);">No data</li>';
}

// ==================== MEASUREMENT TOOLS ====================
function calculateCBM() {
    const length = parseFloat(document.getElementById('cbm-length').value) || 0;
    const width = parseFloat(document.getElementById('cbm-width').value) || 0;
    const height = parseFloat(document.getElementById('cbm-height').value) || 0;
    const unit = document.getElementById('cbm-unit').value;
    const qty = parseFloat(document.getElementById('cbm-qty').value) || 1;
    let lengthM = length, widthM = width, heightM = height;
    if (unit === 'cm') { lengthM = length / 100; widthM = width / 100; heightM = height / 100; }
    else if (unit === 'inch') { lengthM = length * 0.0254; widthM = width * 0.0254; heightM = height * 0.0254; }
    else if (unit === 'mm') { lengthM = length / 1000; widthM = width / 1000; heightM = height / 1000; }
    const cbm = lengthM * widthM * heightM * qty;
    document.getElementById('cbm-result').value = cbm.toFixed(4) + ' CBM';

    // Show Save button and store data for saving
    const saveBtn = document.getElementById('cbm-save-btn');
    if (saveBtn) {
        saveBtn.style.display = 'inline-block';
        saveBtn.dataset.length = length;
        saveBtn.dataset.width = width;
        saveBtn.dataset.height = height;
        saveBtn.dataset.unit = unit;
        saveBtn.dataset.qty = qty;
        saveBtn.dataset.cbm = cbm;
    }
    renderCBMRecords();
}

function saveCBMRecord() {
    const btn = document.getElementById('cbm-save-btn');
    if (!btn) return;
    const length = parseFloat(btn.dataset.length) || 0;
    const width = parseFloat(btn.dataset.width) || 0;
    const height = parseFloat(btn.dataset.height) || 0;
    const unit = btn.dataset.unit;
    const qty = parseFloat(btn.dataset.qty) || 1;
    const cbm = parseFloat(btn.dataset.cbm) || 0;
    if (length === 0 || width === 0 || height === 0) {
        alert('Please fill all dimensions first.');
        return;
    }
    const record = {
        id: 'CBM-' + Date.now().toString(36).toUpperCase(),
        length, width, height, unit, qty, cbm,
        timestamp: new Date().toISOString()
    };
    db.cbmRecords.push(record);
    saveDB();
    renderCBMRecords();
    alert('CBM record saved!');
}

function deleteCBMRecord(id) {
    if (!confirm('Delete this CBM record?')) return;
    db.cbmRecords = db.cbmRecords.filter(r => r.id !== id);
    saveDB();
    renderCBMRecords();
}

function renderCBMRecords() {
    const container = document.getElementById('cbm-records-list');
    if (!container) return;
    const records = db.cbmRecords || [];
    if (records.length === 0) {
        container.innerHTML = '<p style="color:var(--text-light);padding:10px;text-align:center;">No CBM records saved.</p>';
        return;
    }
    container.innerHTML = `<table class="master-table">
        <thead><tr>
            <th>#</th><th>L</th><th>W</th><th>H</th><th>Unit</th><th>Qty</th><th>CBM</th><th>Date</th><th>Action</th>
        </tr></thead>
        <tbody>
            ${records.map((r, i) => `
                <tr>
                    <td>${i+1}</td>
                    <td>${r.length}</td><td>${r.width}</td><td>${r.height}</td>
                    <td>${r.unit}</td><td>${r.qty}</td>
                    <td><strong>${r.cbm.toFixed(4)}</strong></td>
                    <td>${new Date(r.timestamp).toLocaleDateString('en-IN')}</td>
                    <td><button class="btn btn-sm btn-clear" onclick="deleteCBMRecord('${r.id}')">×</button></td>
                </tr>
            `).join('')}
        </tbody>
    </table>`;
}


function calculateAirChargeable() {
    const length = parseFloat(document.getElementById('air-length').value) || 0;
    const width = parseFloat(document.getElementById('air-width').value) || 0;
    const height = parseFloat(document.getElementById('air-height').value) || 0;
    const unit = document.getElementById('air-unit').value;
    const qty = parseFloat(document.getElementById('air-qty').value) || 1;
    let volumeCm3 = 0;
    if (unit === 'cm') volumeCm3 = length * width * height;
    else if (unit === 'inch') volumeCm3 = (length * 2.54) * (width * 2.54) * (height * 2.54);
    else if (unit === 'mm') volumeCm3 = (length / 10) * (width / 10) * (height / 10);
    const chargeableWeight = (volumeCm3 / 6000) * qty;
    document.getElementById('air-result').value = chargeableWeight.toFixed(2) + ' KGS';

    const saveBtn = document.getElementById('air-save-btn');
    if (saveBtn) {
        saveBtn.style.display = 'inline-block';
        saveBtn.dataset.length = length;
        saveBtn.dataset.width = width;
        saveBtn.dataset.height = height;
        saveBtn.dataset.unit = unit;
        saveBtn.dataset.qty = qty;
        saveBtn.dataset.weight = chargeableWeight;
    }
    renderAirWeightRecords();
}

function saveAirWeightRecord() {
    const btn = document.getElementById('air-save-btn');
    if (!btn) return;
    const length = parseFloat(btn.dataset.length) || 0;
    const width = parseFloat(btn.dataset.width) || 0;
    const height = parseFloat(btn.dataset.height) || 0;
    const unit = btn.dataset.unit;
    const qty = parseFloat(btn.dataset.qty) || 1;
    const weight = parseFloat(btn.dataset.weight) || 0;
    if (length === 0 || width === 0 || height === 0) {
        alert('Please fill all dimensions first.');
        return;
    }
    const record = {
        id: 'AIR-' + Date.now().toString(36).toUpperCase(),
        length, width, height, unit, qty, weight,
        timestamp: new Date().toISOString()
    };
    db.airWeightRecords.push(record);
    saveDB();
    renderAirWeightRecords();
    alert('Air weight record saved!');
}

function deleteAirWeightRecord(id) {
    if (!confirm('Delete this air weight record?')) return;
    db.airWeightRecords = db.airWeightRecords.filter(r => r.id !== id);
    saveDB();
    renderAirWeightRecords();
}

function renderAirWeightRecords() {
    const container = document.getElementById('air-records-list');
    if (!container) return;
    const records = db.airWeightRecords || [];
    if (records.length === 0) {
        container.innerHTML = '<p style="color:var(--text-light);padding:10px;text-align:center;">No air weight records saved.</p>';
        return;
    }
    container.innerHTML = `<table class="master-table">
        <thead><tr>
            <th>#</th><th>L</th><th>W</th><th>H</th><th>Unit</th><th>Qty</th><th>Chargeable Wt (KGS)</th><th>Date</th><th>Action</th>
        </tr></thead>
        <tbody>
            ${records.map((r, i) => `
                <tr>
                    <td>${i+1}</td>
                    <td>${r.length}</td><td>${r.width}</td><td>${r.height}</td>
                    <td>${r.unit}</td><td>${r.qty}</td>
                    <td><strong>${r.weight.toFixed(2)}</strong></td>
                    <td>${new Date(r.timestamp).toLocaleDateString('en-IN')}</td>
                    <td><button class="btn btn-sm btn-clear" onclick="deleteAirWeightRecord('${r.id}')">×</button></td>
                </tr>
            `).join('')}
        </tbody>
    </table>`;
}


// ==================== CALCULATOR KEYBOARD SUPPORT ====================
document.addEventListener('DOMContentLoaded', function() {
    const calcDisplay = document.getElementById('calc-display');
    if (calcDisplay) {
        calcDisplay.addEventListener('keydown', function(e) {
            e.preventDefault();
            const key = e.key;
            if (/^[0-9]$/.test(key)) {
                calcInput(key);
            } else if (['+', '-', '*', '/'].includes(key)) {
                calcInput(key);
            } else if (key === '.') {
                calcInput('.');
            } else if (key === 'Enter') {
                calcEquals();
            } else if (key === 'Backspace') {
                const current = document.getElementById('calc-display').value;
                document.getElementById('calc-display').value = current.slice(0, -1);
                calcExpression = document.getElementById('calc-display').value;
            } else if (key === 'Delete' || key === 'Escape') {
                calcClear();
            } else if (key === 'Tab') {
                return;
            }
        });
        calcDisplay.focus();
    }
});

let calcExpression = '';
function calcInput(val) { calcExpression += val; document.getElementById('calc-display').value = calcExpression; }
function calcClear() { calcExpression = ''; document.getElementById('calc-display').value = ''; }
function calcEquals() { try { const result = eval(calcExpression); document.getElementById('calc-display').value = result; calcExpression = String(result); } catch (e) { document.getElementById('calc-display').value = 'Error'; calcExpression = ''; } }


document.querySelectorAll('#calc-stuffing input[type="number"]').forEach(input => {
    input.addEventListener('input', function() {
        document.querySelectorAll('#stuffing-table-body .stuffing-departure').forEach(depInput => {
            if (depInput.value) {
                updateStuffingDates(depInput);
            }
        });
    });
});

// ==================== RATE SHEET MANAGEMENT ====================
function getExpiryStatus(validityDate) {
    if (!validityDate) return { status: 'none', days: null, color: 'gray' };
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const valid = new Date(validityDate);
    valid.setHours(0, 0, 0, 0);
    const daysRemaining = Math.ceil((valid - today) / (1000 * 60 * 60 * 24));

    if (daysRemaining < 0) return { status: 'expired', days: daysRemaining, color: 'red' };
    if (daysRemaining === 0) return { status: 'expiring', days: 0, color: 'yellow' }; // today
    if (daysRemaining <= 7) return { status: 'critical', days: daysRemaining, color: 'red' };
    if (daysRemaining <= 30) return { status: 'expiring', days: daysRemaining, color: 'yellow' };
    return { status: 'active', days: daysRemaining, color: 'green' };
}

function updateExpiryDashboard() {
    const rates = db.rateSheet || [];
    let active = 0, expiring30 = 0, critical7 = 0, expired = 0;

    rates.forEach(r => {
        const expiry = getExpiryStatus(r.validTo);
        if (expiry.status === 'active') active++;
        else if (expiry.status === 'expiring') expiring30++;
        else if (expiry.status === 'critical') critical7++;
        else if (expiry.status === 'expired') expired++;
    });

    document.getElementById('expiry-active-count').textContent = active;
    document.getElementById('expiry-30-count').textContent = expiring30 + critical7; // total expiring within 30 days
    document.getElementById('expiry-7-count').textContent = critical7;
    document.getElementById('expiry-expired-count').textContent = expired;

    checkExpiryNotifications();
}

function checkExpiryNotifications() {
    const rates = db.rateSheet || [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    let expiringToday = 0;
    let expiringWithin3Days = 0;

    rates.forEach(r => {
        if (!r.validTo) return;
        const valid = new Date(r.validTo);
        valid.setHours(0, 0, 0, 0);
        const diffDays = Math.ceil((valid - today) / (1000 * 60 * 60 * 24));
        if (diffDays === 0) {
            expiringToday++;
        } else if (diffDays > 0 && diffDays <= 3) {
            expiringWithin3Days++;
        }
    });

    if (expiringToday > 0) {
        console.warn(`⚠️ ${expiringToday} rate(s) expiring today!`);
    }
    if (expiringWithin3Days > 0) {
        console.warn(`⚠️ ${expiringWithin3Days} rate(s) expiring within 3 days.`);
    }
}


function filterRateSheet(filter) {
    rateSheetFilter = filter;
    rateSheetPage = 1;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === filter));
    renderRateSheet();
}
function clearRateSheetFilter() { rateSheetFilter = 'all';
    rateSheetPage = 1;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.filter === 'all'));
    renderRateSheet(); }
function getFilteredRateSheet() {
    let rates = [...(db.rateSheet || [])];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (rateSheetFilter === 'active') {
        rates = rates.filter(r => { const e = getExpiryStatus(r.validTo); return e.status === 'active'; });
    } else if (rateSheetFilter === 'expiring30') {
        rates = rates.filter(r => { const e = getExpiryStatus(r.validTo); return e.status === 'expiring' || e.status === 'critical'; });
    } else if (rateSheetFilter === 'expiring15') {
        rates = rates.filter(r => { const e = getExpiryStatus(r.validTo); return e.status === 'critical' && e.days <= 15; });
    } else if (rateSheetFilter === 'expiring7') {
        rates = rates.filter(r => { const e = getExpiryStatus(r.validTo); return e.status === 'critical'; });
    } else if (rateSheetFilter === 'today') {
        rates = rates.filter(r => { const e = getExpiryStatus(r.validTo); return e.days === 0; });
    } else if (rateSheetFilter === 'expired') {
        rates = rates.filter(r => { const e = getExpiryStatus(r.validTo); return e.status === 'expired'; });
    }
    return rates;
}
function renderRateSheet() {
    const tbody = document.getElementById('ratesheet-body');
    const table = document.getElementById('ratesheet-table');
    const container = document.getElementById('ratesheet-table')?.parentElement;
    if (!tbody || !container) return;

    // --- Ensure action bar exists (only once) ---
    let actionBar = document.querySelector('.ratesheet-action-bar');
    if (!actionBar) {
        actionBar = document.createElement('div');
        actionBar.className = 'ratesheet-action-bar';
        actionBar.style.cssText = 'display:flex; gap:6px; flex-wrap:wrap; margin:10px 0; align-items:center;';
        actionBar.innerHTML = `
            <span style="font-weight:600; font-size:0.8rem; color:var(--text-light); margin-right:8px;">Actions:</span>
            <button class="btn btn-sm btn-preview" onclick="ratesheetBulkAction('preview')">👁 Preview</button>
            <button class="btn btn-sm btn-preview" onclick="ratesheetBulkAction('edit')">✏️ Edit</button>
            <button class="btn btn-sm btn-duplicate" onclick="ratesheetBulkAction('duplicate')">📋 Duplicate</button>
            <button class="btn btn-sm btn-success" onclick="ratesheetBulkAction('renew')">🔄 Renew</button>
            <button class="btn btn-sm btn-clear" onclick="ratesheetBulkAction('delete')">🗑️ Delete</button>
            <span style="margin-left:auto; font-size:0.75rem; color:var(--text-light);" id="ratesheet-selected-count">0 selected</span>
        `;
        const wrapper = container.closest('.table-wrap');
        if (wrapper) {
            wrapper.parentNode.insertBefore(actionBar, wrapper);
        } else {
            container.parentNode.insertBefore(actionBar, container);
        }
    }

    // Get filtered data
    const filtered = getFilteredRateSheet();
    const perPage = rateSheetPerPage;
    const totalPages = Math.ceil(filtered.length / perPage) || 1;
    if (rateSheetPage > totalPages) rateSheetPage = totalPages;
    if (rateSheetPage < 1) rateSheetPage = 1;
    const start = (rateSheetPage - 1) * perPage;
    const pageData = filtered.slice(start, start + perPage);

    // --- COMPLETELY CLEAR THE TABLE ---
    // Remove the old table and create a new one to avoid duplicate headers
    const parent = table.parentNode;
    const newTable = document.createElement('table');
    newTable.id = 'ratesheet-table';
    newTable.className = 'master-table';
    
    // Build the complete table (thead + tbody) in one go
    let html = `<thead>
        <tr>
            <th style="width:30px;"><input type="checkbox" id="ratesheet-select-all" onchange="toggleAllRatesheetCheckboxes()" /></th>
            <th>Carrier</th>
            <th>Type</th>
            <th>POL</th>
            <th>POD</th>
            <th>Container</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Transit</th>
            <th>Commodity</th>
            <th>Valid From</th>
            <th>Valid To</th>
            <th>Days Left</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>`;

    if (pageData.length === 0) {
        html += `<tr><td colspan="14" style="text-align:center;padding:20px;color:var(--text-light);">No rates found</td></tr>`;
    } else {
        pageData.forEach((r) => {
            const realIdx = db.rateSheet.indexOf(r);
            const expiry = getExpiryStatus(r.validTo);
            const rowClass = expiry.status === 'active' ? 'row-active' : expiry.status === 'expiring' ? 'row-expiring' : 'row-expired';
            let statusClass, statusText;
            if (expiry.status === 'expired') { statusClass = 'status-expired'; statusText = 'Expired'; }
            else if (expiry.status === 'expiring') { statusClass = 'status-expiring'; statusText = `Expiring (${expiry.days}d)`; }
            else { statusClass = 'status-active'; statusText = 'Active'; }

            html += `<tr class="${rowClass}" data-idx="${realIdx}">
                <td style="text-align:center;"><input type="checkbox" class="ratesheet-row-checkbox" data-idx="${realIdx}" onchange="updateRatesheetSelectedCount()" /></td>
                <td style="font-weight:bold;">${r.carrierName || '-'}</td>
                <td style="font-weight:bold;">${r.freightType || '-'}</td>
                <td style="font-weight:bold;">${r.pol || '-'}</td>
                <td style="font-weight:bold;">${r.pod || '-'}</td>
                <td style="font-weight:bold;">${r.containerType || '-'}</td>
                <td style="font-weight:bold;">${Number(r.freightAmount || 0).toLocaleString('en-IN')}</td>
                <td style="font-weight:bold;">${r.currency || 'INR'}</td>
                <td style="font-weight:bold;">${r.transitTime || '-'}</td>
                <td style="font-weight:bold;">${r.commodity || '-'}</td>
                <td style="font-weight:bold;">${r.validFrom || '-'}</td>
                <td style="font-weight:bold;">${r.validTo || '-'}</td>
                <td style="font-weight:bold;">${expiry.days !== null ? expiry.days + ' days' : '-'}</td>
                <td style="font-weight:bold;"><span class="status-badge ${statusClass}">${statusText}</span></td>
            </tr>`;
        });
    }

    html += `</tbody>`;
    newTable.innerHTML = html;
    
    // Replace the old table with the new one
    parent.replaceChild(newTable, table);

    // --- Update the tbody reference ---
    const newTbody = document.getElementById('ratesheet-body');
    const newPagination = document.getElementById('ratesheet-pagination');

    // Pagination
    if (filtered.length === 0) {
        if (newPagination) newPagination.innerHTML = '<p style="color:var(--text-light);padding:10px;text-align:center;">No rates found</p>';
        return;
    }
    let pagHtml = `<button class="page-btn" onclick="changeRateSheetPage(${rateSheetPage - 1})" ${rateSheetPage === 1 ? 'disabled' : ''}>‹ Prev</button>`;
    pagHtml += `<span class="page-info">Page ${rateSheetPage} of ${totalPages} (${filtered.length} records)</span>`;
    pagHtml += `<button class="page-btn" onclick="changeRateSheetPage(${rateSheetPage + 1})" ${rateSheetPage === totalPages ? 'disabled' : ''}>Next ›</button>`;
    if (newPagination) newPagination.innerHTML = pagHtml;

    updateRatesheetSelectedCount();
}


function changeRateSheetPage(page) { const filtered = getFilteredRateSheet();
    const totalPages = Math.ceil(filtered.length / rateSheetPerPage) || 1; if (page < 1 || page > totalPages) return;
    rateSheetPage = page;
    renderRateSheet(); }
function openRateSheetModal(editIdx = null) {
    const modal = document.getElementById('rateSheetModal');
    const title = document.getElementById('rateSheetModalTitle');
    const visibleCarriers = ['ALL', ...db.carriers.filter(c => !(db.hiddenItems.carriers || []).includes(c))];
    const carrierSelect = document.getElementById('rs-carrier');
    carrierSelect.innerHTML = '<option value="">Select Carrier</option>' + visibleCarriers.map(c => `<option value="${c}">${c}</option>`).join('');

    document.getElementById('rs-pol').innerHTML = '<option value="">Select POL</option>' + db.pol.map(p => `<option value="${p}">${p}</option>`).join('');
    document.getElementById('rs-pod').innerHTML = '<option value="">Select POD</option>' + db.pod.map(p => `<option value="${p}">${p}</option>`).join('');
    document.getElementById('rs-container').innerHTML = '<option value="">Select Container</option>' + db.containers.map(c => `<option value="${c}">${c}</option>`).join('');
    document.getElementById('rs-currency').innerHTML = getCurrencyOptions('USD');
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('rs-validFrom').value = today;

    if (editIdx !== null) {
        const r = db.rateSheet[editIdx];
        title.textContent = 'Edit Rate';
        document.getElementById('rs-carrier').value = r.carrierName || '';
        document.getElementById('rs-freightType').value = r.freightType || 'SEA';
        document.getElementById('rs-pol').value = r.pol || '';
        document.getElementById('rs-pod').value = r.pod || '';
        document.getElementById('rs-container').value = r.containerType || '';
        document.getElementById('rs-currency').value = r.currency || 'USD';
        document.getElementById('rs-amount').value = r.freightAmount || '';
        document.getElementById('rs-transit').value = r.transitTime || '';
        document.getElementById('rs-commodity').value = r.commodity || '';
        document.getElementById('rs-validFrom').value = r.validFrom || today;
        document.getElementById('rs-validTo').value = r.validTo || '';
        document.getElementById('rs-remarks').value = r.remarks || '';
        document.getElementById('rateSheetSaveBtn').onclick = () => saveRateSheet(editIdx);
    } else {
        title.textContent = 'Add New Rate';
        document.getElementById('rs-carrier').value = '';
        document.getElementById('rs-freightType').value = 'SEA';
        document.getElementById('rs-pol').value = '';
        document.getElementById('rs-pod').value = '';
        document.getElementById('rs-container').value = '';
        document.getElementById('rs-currency').value = 'USD';
        document.getElementById('rs-amount').value = '';
        document.getElementById('rs-transit').value = '';
        document.getElementById('rs-commodity').value = '';
        document.getElementById('rs-validFrom').value = today;
        document.getElementById('rs-validTo').value = '';
        document.getElementById('rs-remarks').value = '';
        document.getElementById('rateSheetSaveBtn').onclick = () => saveRateSheet(null);
    }
    openModal('rateSheetModal');
}
function saveRateSheet(editIdx) {
    const rateData = {
        carrierName: document.getElementById('rs-carrier').value.trim(),
        freightType: document.getElementById('rs-freightType').value,
        pol: document.getElementById('rs-pol').value,
        pod: document.getElementById('rs-pod').value,
        containerType: document.getElementById('rs-container').value,
        currency: document.getElementById('rs-currency').value,
        freightAmount: parseFloat(document.getElementById('rs-amount').value) || 0,
        transitTime: document.getElementById('rs-transit').value.trim(),
        commodity: document.getElementById('rs-commodity').value,
        validFrom: document.getElementById('rs-validFrom').value,
        validTo: document.getElementById('rs-validTo').value,
        remarks: document.getElementById('rs-remarks').value.trim(),
        updatedAt: new Date().toISOString()
    };
    if (!rateData.carrierName || !rateData.pol || !rateData.pod || !rateData.validTo) return alert('Please fill Carrier, POL, POD, and Valid To fields.');
    if (editIdx !== null) {
        db.rateSheet[editIdx] = { ...db.rateSheet[editIdx], ...rateData };
    } else {
        rateData.createdAt = new Date().toISOString();
        rateData.id = 'RS-' + Date.now();
        db.rateSheet.push(rateData);
    }
    saveDB();
    closeModal('rateSheetModal');
    renderRateSheet();
    updateExpiryDashboard();
    alert(editIdx !== null ? 'Rate updated successfully!' : 'Rate saved successfully!');
    autoBackup();
}
function editRateSheet(idx) { openRateSheetModal(idx); }
function duplicateRateSheet(idx) {
    const original = db.rateSheet[idx];
    const copy = JSON.parse(JSON.stringify(original));
    copy.id = 'RS-' + Date.now();
    copy.createdAt = new Date().toISOString();
    copy.updatedAt = new Date().toISOString();
    copy.carrierName = original.carrierName + ' (Copy)';
    db.rateSheet.push(copy);
    saveDB();
    renderRateSheet();
    updateExpiryDashboard();
    alert('Rate duplicated successfully!');
}
function previewRateSheet(idx) {
    const r = db.rateSheet[idx];
    if (!r) return alert('Rate not found');
    const expiry = getExpiryStatus(r.validTo);
    const statusText = expiry.status.charAt(0).toUpperCase() + expiry.status.slice(1);
    const statusColor = expiry.status === 'active' ? '#10b981' : expiry.status === 'expiring' ? '#f59e0b' : '#ef4444';

    // Build a clean, card-style preview
    const html = `
        <div style="background:#f8fafc; border-radius:16px; padding:20px; max-width:800px; margin:0 auto; box-shadow: 0 4px 20px rgba(0,0,0,0.06); font-family:'Segoe UI',Arial,sans-serif;">
            <!-- Header -->
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #e2e8f0; padding-bottom:12px; margin-bottom:16px;">
                <div style="font-size:1.4rem; font-weight:700; color:#1e3a8a;">📋 Rate Details</div>
                <div style="display:flex; align-items:center; gap:12px;">
                    <span style="background:${statusColor}; color:white; padding:4px 14px; border-radius:20px; font-weight:600; font-size:0.75rem; text-transform:uppercase;">${statusText}</span>
                    <span style="background:#f1f5f9; padding:4px 12px; border-radius:20px; font-size:0.7rem; color:#334155;">ID: ${r.id || 'N/A'}</span>
                </div>
            </div>

            <!-- Main Grid -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px 24px; background:white; border-radius:12px; padding:16px; box-shadow: 0 2px 8px rgba(0,0,0,0.03);">
                <div><span style="font-weight:600; color:#64748b; display:block; font-size:0.7rem; text-transform:uppercase;">Carrier</span><span style="font-weight:700; font-size:1rem; color:#0f172a;">${r.carrierName || '-'}</span></div>
                <div><span style="font-weight:600; color:#64748b; display:block; font-size:0.7rem; text-transform:uppercase;">Freight Type</span><span style="font-weight:700; font-size:1rem; color:#0f172a;">${r.freightType || '-'}</span></div>
                <div><span style="font-weight:600; color:#64748b; display:block; font-size:0.7rem; text-transform:uppercase;">POL</span><span style="font-weight:700; font-size:1rem; color:#0f172a;">${r.pol || '-'}</span></div>
                <div><span style="font-weight:600; color:#64748b; display:block; font-size:0.7rem; text-transform:uppercase;">POD</span><span style="font-weight:700; font-size:1rem; color:#0f172a;">${r.pod || '-'}</span></div>
                <div><span style="font-weight:600; color:#64748b; display:block; font-size:0.7rem; text-transform:uppercase;">Container</span><span style="font-weight:700; font-size:1rem; color:#0f172a;">${r.containerType || '-'}</span></div>
                <div><span style="font-weight:600; color:#64748b; display:block; font-size:0.7rem; text-transform:uppercase;">Amount</span><span style="font-weight:700; font-size:1rem; color:#0f172a;">${r.currency} ${Number(r.freightAmount || 0).toLocaleString('en-IN')}</span></div>
                <div><span style="font-weight:600; color:#64748b; display:block; font-size:0.7rem; text-transform:uppercase;">Transit Time</span><span style="font-weight:700; font-size:1rem; color:#0f172a;">${r.transitTime || '-'}</span></div>
                <div><span style="font-weight:600; color:#64748b; display:block; font-size:0.7rem; text-transform:uppercase;">Commodity</span><span style="font-weight:700; font-size:1rem; color:#0f172a;">${r.commodity || '-'}</span></div>
                <div style="grid-column:1/-1;"><span style="font-weight:600; color:#64748b; display:block; font-size:0.7rem; text-transform:uppercase;">Validity</span>
                    <span style="font-weight:700; font-size:0.95rem; color:#0f172a;">${r.validFrom || '-'} → ${r.validTo || '-'}  (${expiry.days !== null ? expiry.days + ' days left' : 'N/A'})</span>
                </div>
                ${r.remarks ? `<div style="grid-column:1/-1; border-top:1px solid #e2e8f0; padding-top:10px; margin-top:4px;"><span style="font-weight:600; color:#64748b; display:block; font-size:0.7rem; text-transform:uppercase;">Remarks</span><span style="font-weight:500; font-size:0.9rem; color:#334155;">${r.remarks}</span></div>` : ''}
            </div>

            <!-- Footer meta -->
            <div style="display:flex; justify-content:space-between; margin-top:12px; font-size:0.7rem; color:#94a3b8; border-top:1px solid #e2e8f0; padding-top:12px;">
                <span>Created: ${r.createdAt ? new Date(r.createdAt).toLocaleString('en-IN') : '-'}</span>
                <span>Last updated: ${r.updatedAt ? new Date(r.updatedAt).toLocaleString('en-IN') : '-'}</span>
            </div>
        </div>
    `;
    document.getElementById('modal-title').textContent = 'Rate Preview';
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}
function renewRateSheet(idx) {
    const original = db.rateSheet[idx];
    const renewBody = document.getElementById('renewBody');
    renewBody.innerHTML = `
        <p style="margin-bottom:12px;">Renewing rate for <strong>${original.carrierName}</strong>: ${original.pol} → ${original.pod}</p>
        <div class="form-grid-2col">
            <div class="form-group"><label>New Valid From</label><input type="date" id="renew-validFrom" value="${new Date().toISOString().split('T')[0]}" onfocus="highlightInput(this)" onblur="unhighlightInput(this)"></div>
            <div class="form-group"><label>New Valid To</label><input type="date" id="renew-validTo" onfocus="highlightInput(this)" onblur="unhighlightInput(this)"></div>
            <div class="form-group"><label>Freight Amount</label><input type="number" id="renew-amount" value="${original.freightAmount}" step="0.01" onfocus="highlightInput(this)" onblur="unhighlightInput(this)"></div>
            <div class="form-group"><label>Currency</label><select id="renew-currency">${getCurrencyOptions(original.currency || 'USD')}</select></div>
            <div class="form-group"><label>Transit Time</label><input type="text" id="renew-transit" value="${original.transitTime || ''}" onfocus="highlightInput(this)" onblur="unhighlightInput(this)"></div>
            <div class="form-group"><label>Commodity</label><select id="renew-commodity"><option value="">Select</option><option value="NON HAZ" ${original.commodity==='NON HAZ'?'selected':''}>Non Hazardous</option><option value="HAZ" ${original.commodity==='HAZ'?'selected':''}>Hazardous</option></select></div>
            <div class="form-group"><label>Remarks</label><input type="text" id="renew-remarks" value="${original.remarks || ''}" onfocus="highlightInput(this)" onblur="unhighlightInput(this)"></div>
        </div>
        <div style="margin-top:16px;text-align:right;display:flex;gap:8px;justify-content:flex-end;">
            <button class="btn btn-clear" onclick="closeModal('renewModal')">Cancel</button>
            <button class="btn btn-success" onclick="confirmRenew(${idx})">🔄 Confirm Renewal</button>
        </div>
    `;
    openModal('renewModal');
}
function confirmRenew(originalIdx) {
    const original = db.rateSheet[originalIdx];
    const newRate = {
        id: 'RS-' + Date.now(),
        carrierName: original.carrierName,
        freightType: original.freightType,
        pol: original.pol,
        pod: original.pod,
        containerType: original.containerType,
        currency: document.getElementById('renew-currency').value,
        freightAmount: parseFloat(document.getElementById('renew-amount').value) || 0,
        transitTime: document.getElementById('renew-transit').value.trim(),
        validFrom: document.getElementById('renew-validFrom').value,
        validTo: document.getElementById('renew-validTo').value,
        commodity: document.getElementById('renew-commodity').value,
        remarks: document.getElementById('renew-remarks').value.trim(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        isRenewal: true,
        parentRecordId: original.id
    };
    if (!newRate.validTo) return alert('Please set Valid To date.');
    db.rateSheet.push(newRate);
    saveDB();
    closeModal('renewModal');
    renderRateSheet();
    updateExpiryDashboard();
    alert('Rate renewed successfully! New record created.');
}
function deleteRateSheet(idx) {
    if (!db.rateSheet || idx < 0 || idx >= db.rateSheet.length) {
        alert('Rate not found.');
        return;
    }
    const rec = db.rateSheet[idx];
    showDeleteConfirm(`Delete rate?<br><br><strong>${rec.carrierName}</strong> (${rec.pol} → ${rec.pod})<br>Amount: ${rec.currency} ${rec.freightAmount}`, function() {
        if (idx < db.rateSheet.length) {
            db.rateSheet.splice(idx, 1);
            saveDB();
            renderRateSheet();
            updateExpiryDashboard();
            autoBackup();
        } else {
            alert('Rate no longer exists.');
        }
    });
}
function openBulkImportModal() {
    document.getElementById('bulk-rates-data').value = '';
    document.getElementById('bulk-import-rates-status').textContent = '';
    openModal('bulkImportModal');
}
function processBulkRateImport() {
    const data = document.getElementById('bulk-rates-data').value.trim();
    const statusEl = document.getElementById('bulk-import-rates-status');
    if (!data) { statusEl.textContent = '❌ Please paste some data';
        statusEl.style.color = 'var(--danger)'; return; }
    const lines = data.split('\n').filter(l => l.trim());
    let imported = 0,
        skipped = 0;
    lines.forEach(line => {
        const parts = line.split('\t');
        if (parts.length >= 10) {
            const rateData = {
                id: 'RS-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5),
                carrierName: parts[0].trim(),
                freightType: parts[1].trim().toUpperCase(),
                pol: parts[2].trim(),
                pod: parts[3].trim(),
                containerType: parts[4].trim(),
                currency: parts[5].trim().toUpperCase() || 'USD',
                freightAmount: parseFloat(parts[6]) || 0,
                transitTime: parts[7].trim(),
                commodity: parts[8] ? parts[8].trim() : '',
                validFrom: parts[9] ? parts[9].trim() : new Date().toISOString().split('T')[0],
                validTo: parts[10] ? parts[10].trim() : '',
                remarks: parts[11] ? parts[11].trim() : '',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };
            if (rateData.carrierName && rateData.pol && rateData.pod && rateData.validTo) {
                db.rateSheet.push(rateData);
                imported++;
            } else { skipped++; }
        } else { skipped++; }
    });
    saveDB();
    statusEl.textContent = `✅ Imported ${imported} rates, ⏭️ Skipped ${skipped}`;
    statusEl.style.color = 'var(--success)';
    document.getElementById('bulk-rates-data').value = '';
    setTimeout(() => { closeModal('bulkImportModal');
        renderRateSheet();
        updateExpiryDashboard(); }, 1500);
    autoBackup();
}
function exportRateSheetReport(format) {
    const filtered = getFilteredRateSheet();
    if (filtered.length === 0) return alert('No data to export');
    if (format === 'excel') {
        const wb = XLSX.utils.book_new();
        const wsData = filtered.map(r => ({
            'Carrier': r.carrierName,
            'Freight Type': r.freightType,
            'POL': r.pol,
            'POD': r.pod,
            'Container': r.containerType,
            'Amount': r.freightAmount,
            'Currency': r.currency,
            'Transit': r.transitTime,
            'Commodity': r.commodity,
            'Valid From': r.validFrom,
            'Valid To': r.validTo,
            'Days Remaining': getExpiryStatus(r.validTo).days,
            'Status': getExpiryStatus(r.validTo).status,
            'Remarks': r.remarks
        }));
        const ws = XLSX.utils.json_to_sheet(wsData);
        XLSX.utils.book_append_sheet(wb, ws, 'Rate Sheet Report');
        XLSX.writeFile(wb, `RateSheet_Report_${new Date().toISOString().split('T')[0]}.xlsx`);
    } else if (format === 'pdf') {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        doc.setFontSize(16);
        doc.text('Rate Sheet Expiry Report', 14, 15);
        doc.setFontSize(10);
        doc.text(`Generated: ${new Date().toLocaleString('en-IN')}`, 14, 22);
        doc.text(`Filter: ${rateSheetFilter} | Total Records: ${filtered.length}`, 14, 28);
        const tableData = filtered.map(r => [
            r.carrierName || '-', r.freightType || '-', r.pol || '-', r.pod || '-',
            r.containerType || '-', `${r.currency || 'USD'} ${Number(r.freightAmount || 0).toLocaleString('en-IN')}`,
            r.transitTime || '-', r.commodity || '-',
            r.validFrom || '-', r.validTo || '-',
            getExpiryStatus(r.validTo).days !== null ? `${getExpiryStatus(r.validTo).days} days` : '-',
            getExpiryStatus(r.validTo).status.toUpperCase()
        ]);
        doc.autoTable({
            startY: 32,
            head: [
                ['Carrier', 'Type', 'POL', 'POD', 'Container', 'Amount', 'Transit', 'Commodity', 'Valid From', 'Valid To', 'Days Left', 'Status']
            ],
            body: tableData,
            styles: { fontSize: 8, cellPadding: 2 },
            headStyles: { fillColor: [30, 58, 138], textColor: 255 },
            didParseCell: function(data) {
                if (data.section === 'body' && data.column.index === 11) {
                    const status = data.cell.raw;
                    if (status === 'ACTIVE') data.cell.styles.textColor = [16, 185, 129];
                    else if (status === 'EXPIRING') data.cell.styles.textColor = [245, 158, 11];
                    else if (status === 'EXPIRED') data.cell.styles.textColor = [239, 68, 68];
                }
            },
            margin: { left: 14, right: 14 }
        });
        doc.save(`RateSheet_Report_${new Date().toISOString().split('T')[0]}.pdf`);
    }
}

// ==================== LOCAL CHARGES SAVE ====================
function saveLocalCharges(mode) {
    const carrier = document.getElementById(`${mode}-carrier`).value;
    const pol = document.getElementById(`${mode}-pol`).value;
    const container = document.getElementById(`${mode}-container`)?.value || '';
    if (!carrier || !pol) return alert('Please select Carrier and POL first.');
    const charges = getCurrentChargesData(mode);
    const hasData = Object.values(charges).some(c => c.amount || c.buyAmount);
    if (!hasData) return alert('No charges to save.');
    if (mode === 'air') {
        const idx = db.carrierChargesAir.findIndex(c => c.carrier === carrier && c.pol === pol);
        const entry = { carrier, pol, charges, updated: new Date().toISOString() };
        if (idx >= 0) { if (confirm('Update existing charges for this carrier?')) { db.carrierChargesAir[idx] = entry; } else return; } else { db.carrierChargesAir.push(entry); }
    } else {
        const key = { mode, carrier, pol, container };
        const idx = db.carrierChargesSeaLcl.findIndex(c => c.mode === mode && c.carrier === carrier && c.pol === pol && (c.container || '') === container);
        const entry = { ...key, charges, updated: new Date().toISOString() };
        if (idx >= 0) { if (confirm('Update existing charges for this carrier?')) { db.carrierChargesSeaLcl[idx] = entry; } else return; } else { db.carrierChargesSeaLcl.push(entry); }
    }
    saveDB();
    alert(`Local charges saved for ${carrier} - ${pol}!`);
    if (document.getElementById('sealocal').classList.contains('active') && mode === 'sea') {
        renderCarrierChargesMaster('sealcl');
    } else if (document.getElementById('airlocal').classList.contains('active') && mode === 'air') {
        renderCarrierChargesMaster('air');
    } else if (document.getElementById('lcllocal').classList.contains('active') && mode === 'lcl') {
        renderCarrierChargesMaster('lcl');
    }
    autoBackup();
}

function saveFreightRate(mode) {
    const carrier = document.getElementById(`${mode}-carrier`).value;
    const pol = document.getElementById(`${mode}-pol`).value;
    const pod = document.getElementById(`${mode}-pod`).value;
    const container = document.getElementById(`${mode}-container`)?.value || '';
    const transit = document.getElementById(`${mode}-transit`).value;
    const validityDate = document.getElementById(`${mode}-validityDate`).value;
    const commodity = document.getElementById(`${mode}-commodity`).value;
    if (!carrier || !pol || !pod) return alert('Please select Carrier, POL, and POD first.');
    const charges = getCurrentChargesData(mode);
    const freightCharge = charges['FREIGHT'] || charges['AIR FREIGHT'] || {};
    const freightAmount = parseFloat(freightCharge.buyAmount) || 0;
    const currency = freightCharge.buyCurrency || 'INR';
    const rateData = {
        id: 'RS-' + Date.now(),
        carrierName: carrier,
        freightType: mode.toUpperCase(),
        pol: pol,
        pod: pod,
        containerType: container,
        currency: currency,
        freightAmount: freightAmount,
        transitTime: transit ? `${transit} days` : '',
        validFrom: new Date().toISOString().split('T')[0],
        validTo: validityDate || '',
        commodity: commodity,
        remarks: `Saved from ${mode.toUpperCase()} quotation`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };
    db.rateSheet.push(rateData);
    saveDB();
    alert(`Freight rate saved to Rate Sheet!\n\nCarrier: ${carrier}\nRoute: ${pol} → ${pod}\nAmount: ${formatINR(freightAmount)}`);
    autoBackup();
}
// ==================== BULK IMPORT (POL/POD/CARRIER) ====================
function bulkImport() {
    const type = document.getElementById('bulk-import-type').value;
    const data = document.getElementById('bulk-import-data').value.trim();
    const statusEl = document.getElementById('bulk-import-status');
    if (!data) { statusEl.textContent = '❌ Please paste some data';
        statusEl.style.color = 'var(--danger)'; return; }
    const lines = data.split('\n').filter(l => l.trim());
    let imported = 0,
        skipped = 0;
    if (type === 'pol' || type === 'pod') {
        lines.forEach(line => {
            const val = line.trim().toUpperCase();
            if (val && !db[type].includes(val)) { db[type].push(val);
                imported++; } else { skipped++; }
        });
    } else if (type === 'carrier') {
        lines.forEach(line => {
            const parts = line.split('\t');
            if (parts.length >= 5) {
                const carrier = parts[0].trim();
                const pol = parts[1].trim();
                const chargeType = parts[2].trim().toUpperCase();
                const amount = parseFloat(parts[3]);
                const currency = parts[4].trim().toUpperCase() || 'INR';
                if (carrier && pol && chargeType && amount) {
                    const isAir = defaultCharges.air.includes(chargeType);
                    const listKey = isAir ? 'carrierChargesAir' : 'carrierChargesSeaLcl';
                    const mode = isAir ? 'air' : 'sea';
                    let entry;
                    if (isAir) {
                        entry = db[listKey].find(c => c.carrier === carrier && c.pol === pol);
                        if (!entry) { entry = { carrier, pol, charges: {}, updated: new Date().toISOString() };
                            db[listKey].push(entry); }
                    } else {
                        entry = db[listKey].find(c => c.mode === mode && c.carrier === carrier && c.pol === pol);
                        if (!entry) { entry = { mode, carrier, pol, container: '', charges: {}, updated: new Date().toISOString() };
                            db[listKey].push(entry); }
                    }
                    entry.charges[chargeType] = { amount, currency };
                    imported++;
                } else { skipped++; }
            } else { skipped++; }
        });
    }
    saveDB();
    statusEl.textContent = `✅ Imported ${imported} records, ⏭️ Skipped ${skipped} (duplicates/invalid)`;
    statusEl.style.color = 'var(--success)';
    document.getElementById('bulk-import-data').value = '';
    if (type === 'pol' || type === 'pod') populateDropdowns();
    autoBackup();
}

// ==================== BACKUP FUNCTIONS ====================

function startAutoBackup() {
    if (autoBackupInterval) clearInterval(autoBackupInterval);
    autoBackupInterval = setInterval(async () => {
        await autoBackup();
    }, 60000);
    const statusEl = document.getElementById('auto-backup-status');
    if (statusEl) statusEl.textContent = '✅ Running (every 1 min) – writing to folder';
}



// ==================== EXPORT/IMPORT ====================
function exportToExcel() {
    const wb = XLSX.utils.book_new();
    const sheets = {
        'Sea Quotes': db.rates.sea,
        'Air Quotes': db.rates.air,
        'LCL Quotes': db.rates.lcl,
        'Sea Drafts': db.drafts.sea,
        'Air Drafts': db.drafts.air,
        'LCL Drafts': db.drafts.lcl,
        'Rate Sheet': db.rateSheet,
        'Shipments': db.shipments,
        'BL Drafts': db.bldrafts,
        'POL': db.pol.map(p => ({ POL: p })),
        'POD': db.pod.map(p => ({ POD: p })),
        'Incoterms': db.incoterms.map(i => ({ Incoterm: i })),
        'Containers': db.containers.map(c => ({ Container: c })),
        'Carriers': db.carriers.map(c => ({ Carrier: c })),
        'Exchange Rates': Object.entries(db.exchangeRates).map(([k, v]) => ({ Currency: k, Rate: v }))
    };
    Object.entries(sheets).forEach(([name, data]) => {
        const ws = XLSX.utils.json_to_sheet(data);
        XLSX.utils.book_append_sheet(wb, ws, name.slice(0, 31));
    });
    XLSX.writeFile(wb, `Backup_${new Date().toISOString().split('T')[0]}.xlsx`);
    alert('Excel file downloaded successfully!');
}

function exportToJSON() {
    const backupData = { timestamp: new Date().toISOString(), data: db };
    const json = JSON.stringify(backupData, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Backup_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}


function importData(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            if (file.name.endsWith('.json')) {
                const imported = JSON.parse(e.target.result);
                const importedDb = imported.data || imported;
                
                // Check if the imported data is valid
                if (!importedDb || typeof importedDb !== 'object') {
                    alert('Invalid JSON format. Please check the file.');
                    return;
                }
                
                if (confirm('This will MERGE the imported data with your existing data.\n\n• New quotes, drafts, and RR will be added\n• Duplicates (by Quote Number) will be skipped\n• Master data (POL, POD, Carriers) will be merged\n\nContinue?')) {
                    const summary = mergeDatabase(importedDb);
                    saveDB();
                    alert(`✅ Data merged successfully!\n\n${summary}`);
                    location.reload();
                }
            } else {
                alert('Please select a JSON file (.json)');
            }
        } catch (err) {
            alert('Error importing file: ' + err.message);
        }
    };
    reader.readAsText(file);
    input.value = '';
}



function mergeDatabase(importedDb) {
    let summary = [];
    let added = { quotes: 0, drafts: 0, rr: 0, ratesheet: 0, shipments: 0, bldrafts: 0 };
    let skipped = { quotes: 0, drafts: 0, rr: 0, ratesheet: 0, shipments: 0, bldrafts: 0 };

    // ---- 1. MERGE QUOTES (SEA, AIR, LCL) ----
    ['sea', 'air', 'lcl'].forEach(mode => {
        if (!importedDb.rates || !importedDb.rates[mode]) return;
        if (!db.rates[mode]) db.rates[mode] = [];
        
        importedDb.rates[mode].forEach(quote => {
            if (!quote.quoteNumber) {
                // If no quote number, just push it
                db.rates[mode].push(quote);
                added.quotes++;
                return;
            }
            // Check if quote already exists by quoteNumber
            const exists = db.rates[mode].some(existing => 
                existing.quoteNumber === quote.quoteNumber
            );
            if (!exists) {
                db.rates[mode].push(quote);
                added.quotes++;
            } else {
                skipped.quotes++;
            }
        });
    });

    // ---- 2. MERGE DRAFTS (SEA, AIR, LCL) ----
    ['sea', 'air', 'lcl'].forEach(mode => {
        if (!importedDb.drafts || !importedDb.drafts[mode]) return;
        if (!db.drafts[mode]) db.drafts[mode] = [];
        
        importedDb.drafts[mode].forEach(draft => {
            if (!draft.quoteNumber) {
                db.drafts[mode].push(draft);
                added.drafts++;
                return;
            }
            const exists = db.drafts[mode].some(existing => 
                existing.quoteNumber === draft.quoteNumber
            );
            if (!exists) {
                db.drafts[mode].push(draft);
                added.drafts++;
            } else {
                skipped.drafts++;
            }
        });
    });

    // ---- 3. MERGE RR DRAFTS (Rate Requests) ----
    if (importedDb.drafts && importedDb.drafts.rr) {
        if (!db.drafts.rr) db.drafts.rr = [];
        
        importedDb.drafts.rr.forEach(rr => {
            if (!rr.quoteNumber) {
                db.drafts.rr.push(rr);
                added.rr++;
                return;
            }
            const exists = db.drafts.rr.some(existing => 
                existing.quoteNumber === rr.quoteNumber
            );
            if (!exists) {
                db.drafts.rr.push(rr);
                added.rr++;
            } else {
                skipped.rr++;
            }
        });
    }

    // ---- 4. MERGE RATE SHEET ----
    if (importedDb.rateSheet && importedDb.rateSheet.length > 0) {
        if (!db.rateSheet) db.rateSheet = [];
        
        importedDb.rateSheet.forEach(rate => {
            const exists = db.rateSheet.some(existing => 
                existing.id === rate.id || 
                (existing.carrierName === rate.carrierName && 
                 existing.pol === rate.pol && 
                 existing.pod === rate.pod && 
                 existing.containerType === rate.containerType &&
                 existing.freightAmount === rate.freightAmount)
            );
            if (!exists) {
                // Ensure it has an ID
                if (!rate.id) rate.id = 'RS-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substr(2, 4);
                db.rateSheet.push(rate);
                added.ratesheet++;
            } else {
                skipped.ratesheet++;
            }
        });
    }

    // ---- 5. MERGE SHIPMENTS ----
    if (importedDb.shipments && importedDb.shipments.length > 0) {
        if (!db.shipments) db.shipments = [];
        
        importedDb.shipments.forEach(ship => {
            const exists = db.shipments.some(existing => 
                existing.code === ship.code || 
                (existing.jobNo === ship.jobNo && existing.mode === ship.mode)
            );
            if (!exists) {
                db.shipments.push(ship);
                added.shipments++;
            } else {
                skipped.shipments++;
            }
        });
    }

    // ---- 6. MERGE BL DRAFTS ----
    if (importedDb.bldrafts && importedDb.bldrafts.length > 0) {
        if (!db.bldrafts) db.bldrafts = [];
        
        importedDb.bldrafts.forEach(bl => {
            const exists = db.bldrafts.some(existing => 
                existing.blNumber === bl.blNumber
            );
            if (!exists) {
                db.bldrafts.push(bl);
                added.bldrafts++;
            } else {
                skipped.bldrafts++;
            }
        });
    }

    // ---- 7. MERGE MASTER DATA (POL, POD, CARRIERS, CONTAINERS, INCOTERMS) ----
    const masterKeys = ['pol', 'pod', 'carriers', 'containers', 'incoterms'];
    masterKeys.forEach(key => {
        if (!importedDb[key] || !Array.isArray(importedDb[key])) return;
        if (!db[key]) db[key] = [];
        
        importedDb[key].forEach(item => {
            if (item && typeof item === 'string' && !db[key].includes(item)) {
                db[key].push(item);
            }
        });
    });

    // ---- 8. MERGE EXCHANGE RATES ----
    if (importedDb.exchangeRates && typeof importedDb.exchangeRates === 'object') {
        if (!db.exchangeRates) db.exchangeRates = { INR: 1 };
        Object.keys(importedDb.exchangeRates).forEach(currency => {
            if (currency !== 'INR') {
                db.exchangeRates[currency] = importedDb.exchangeRates[currency];
            }
        });
    }

    // ---- 9. MERGE USERS ----
    if (importedDb.users && importedDb.users.length > 0) {
        if (!db.users) db.users = [];
        
        importedDb.users.forEach(user => {
            if (!user.id) return;
            const exists = db.users.some(existing => existing.id === user.id);
            if (!exists) {
                db.users.push(user);
            }
        });
    }

    // ---- 10. MERGE DEFAULT CHARGES ----
    ['defaultSeaCharges', 'defaultAirCharges', 'defaultLclCharges'].forEach(key => {
        if (!importedDb[key] || !Array.isArray(importedDb[key])) return;
        if (!db[key]) db[key] = [];
        
        importedDb[key].forEach(charge => {
            // Check duplicate by pol + commodity
            const exists = db[key].some(existing => 
                existing.pol === charge.pol && 
                existing.commodity === charge.commodity
            );
            if (!exists) {
                db[key].push(charge);
            }
        });
    });

    // ---- 11. MERGE CARRIER CHARGES ----
    ['carrierChargesSeaLcl', 'carrierChargesAir'].forEach(key => {
        if (!importedDb[key] || !Array.isArray(importedDb[key])) return;
        if (!db[key]) db[key] = [];
        
        importedDb[key].forEach(charge => {
            // Check duplicate by carrier + pol + mode (for sea/lcl) or carrier + pol (for air)
            let exists;
            if (key === 'carrierChargesAir') {
                exists = db[key].some(existing => 
                    existing.carrier === charge.carrier && 
                    existing.pol === charge.pol
                );
            } else {
                exists = db[key].some(existing => 
                    existing.mode === charge.mode &&
                    existing.carrier === charge.carrier && 
                    existing.pol === charge.pol
                );
            }
            if (!exists) {
                db[key].push(charge);
            }
        });
    });

    // ---- 12. MERGE CARGO STATUS & DOCS STATUS ----
    ['cargoStatusMaster', 'docsStatusMaster'].forEach(key => {
        if (!importedDb[key] || !Array.isArray(importedDb[key])) return;
        if (!db[key]) db[key] = [];
        
        importedDb[key].forEach(item => {
            if (item && typeof item === 'string' && !db[key].includes(item)) {
                db[key].push(item);
            }
        });
    });

    // ---- 13. MERGE DETENTION LOTS & RECORDS ----
    ['detentionLots', 'detentionRecords'].forEach(key => {
        if (!importedDb[key] || !Array.isArray(importedDb[key])) return;
        if (!db[key]) db[key] = [];
        
        importedDb[key].forEach(item => {
            if (!item.id) return;
            const exists = db[key].some(existing => existing.id === item.id);
            if (!exists) {
                db[key].push(item);
            }
        });
    });

    // ---- 14. MERGE TRUCKING SHIPMENTS ----
    if (importedDb.truckingShipments && importedDb.truckingShipments.length > 0) {
        if (!db.truckingShipments) db.truckingShipments = [];
        
        importedDb.truckingShipments.forEach(ship => {
            const exists = db.truckingShipments.some(existing => existing.id === ship.id);
            if (!exists) {
                db.truckingShipments.push(ship);
            }
        });
    }

    // ---- 15. MERGE FREIGHT CALCULATIONS ----
    if (importedDb.freightCalculations && importedDb.freightCalculations.length > 0) {
        if (!db.freightCalculations) db.freightCalculations = [];
        
        importedDb.freightCalculations.forEach(calc => {
            const exists = db.freightCalculations.some(existing => existing.id === calc.id);
            if (!exists) {
                db.freightCalculations.push(calc);
            }
        });
    }

    // ---- 16. MERGE PLANNER NOTES & TASKS ----
    ['plannerNotes', 'plannerTasks'].forEach(key => {
        if (!importedDb[key] || !Array.isArray(importedDb[key])) return;
        if (!db[key]) db[key] = [];
        
        importedDb[key].forEach(item => {
            if (!item.id) return;
            const exists = db[key].some(existing => existing.id === item.id);
            if (!exists) {
                db[key].push(item);
            }
        });
    });

    // ---- 17. MERGE CBM & AIR WEIGHT RECORDS ----
    ['cbmRecords', 'airWeightRecords'].forEach(key => {
        if (!importedDb[key] || !Array.isArray(importedDb[key])) return;
        if (!db[key]) db[key] = [];
        
        importedDb[key].forEach(item => {
            if (!item.id) return;
            const exists = db[key].some(existing => existing.id === item.id);
            if (!exists) {
                db[key].push(item);
            }
        });
    });

    // ---- 18. MERGE STUFFING DATA ----
    if (importedDb.stuffing && importedDb.stuffing.length > 0) {
        if (!db.stuffing) db.stuffing = [];
        // Stuffing records don't have unique IDs, so we'll just append all
        importedDb.stuffing.forEach(item => {
            db.stuffing.push(item);
        });
    }

    // ---- 19. MERGE HIDDEN ITEMS ----
    if (importedDb.hiddenItems && typeof importedDb.hiddenItems === 'object') {
        if (!db.hiddenItems) db.hiddenItems = { pol: [], pod: [], incoterms: [], containers: [], carriers: [] };
        Object.keys(importedDb.hiddenItems).forEach(key => {
            if (!db.hiddenItems[key]) db.hiddenItems[key] = [];
            importedDb.hiddenItems[key].forEach(item => {
                if (!db.hiddenItems[key].includes(item)) {
                    db.hiddenItems[key].push(item);
                }
            });
        });
    }

    // ---- 20. MERGE DSR COLUMNS ----
    if (importedDb.dsrColumns && Array.isArray(importedDb.dsrColumns)) {
        if (!db.dsrColumns) db.dsrColumns = ['code','shipper','pol','pod','liner','cargoStatus','docsStatus','actions'];
        // Only update if new columns are different and valid
        if (importedDb.dsrColumns.length > 0) {
            db.dsrColumns = importedDb.dsrColumns;
        }
    }

    // ---- 21. COMPANY INFO (only if not set) ----
    if (importedDb.companyName && !db.companyName) {
        db.companyName = importedDb.companyName;
    }
    if (importedDb.companyAddress && !db.companyAddress) {
        db.companyAddress = importedDb.companyAddress;
    }
    if (importedDb.defaultUser && !db.defaultUser) {
        db.defaultUser = importedDb.defaultUser;
    }
    if (importedDb.defaultCCEmailSea && !db.defaultCCEmailSea) {
        db.defaultCCEmailSea = importedDb.defaultCCEmailSea;
    }
    if (importedDb.defaultCCEmailAir && !db.defaultCCEmailAir) {
        db.defaultCCEmailAir = importedDb.defaultCCEmailAir;
    }
    if (importedDb.defaultCCEmailLcl && !db.defaultCCEmailLcl) {
        db.defaultCCEmailLcl = importedDb.defaultCCEmailLcl;
    }

    // ---- BUILD SUMMARY ----
    summary.push(`📊 MERGE SUMMARY:`);
    summary.push(`  • Quotes: ${added.quotes} added, ${skipped.quotes} skipped (duplicates)`);
    summary.push(`  • Drafts: ${added.drafts} added, ${skipped.drafts} skipped (duplicates)`);
    summary.push(`  • Rate Requests: ${added.rr} added, ${skipped.rr} skipped (duplicates)`);
    summary.push(`  • Rate Sheet: ${added.ratesheet} added, ${skipped.ratesheet} skipped (duplicates)`);
    summary.push(`  • Shipments: ${added.shipments} added, ${skipped.shipments} skipped (duplicates)`);
    summary.push(`  • BL Drafts: ${added.bldrafts} added, ${skipped.bldrafts} skipped (duplicates)`);
    summary.push(`  • Master Data: Merged (POL, POD, Carriers, Containers, Incoterms)`);
    summary.push(`  • Other Data: Users, Charges, Lots, Records merged`);

    return summary.join('\n');
}

// ==================== RATE SHEET IMPORT ====================
function importRateSheet(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet, { defval: '', raw: false });
            if (jsonData.length === 0) { alert('No data found in Excel file.'); return; }
            const normalized = jsonData.map(row => {
                const newRow = {};
                Object.keys(row).forEach(key => {
                    const normalizedKey = key.trim().toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
                    newRow[normalizedKey] = row[key];
                });
                return newRow;
            });
            const preview = document.getElementById('rate-import-preview');
            let html = `<h4 style="color:var(--primary);margin-bottom:8px;">Preview: ${normalized.length} rows found</h4>`;
            html += `<table class="master-table" style="font-size:0.72rem;"><thead><tr>`;
            const cols = Object.keys(normalized[0]);
            cols.forEach(k => html += `<th>${k}</th>`);
            html += `</tr></thead><tbody>`;
            normalized.slice(0, 10).forEach(row => {
                html += '<tr>';
                cols.forEach(c => html += `<td>${row[c] || ''}</td>`);
                html += '</tr>';
            });
            if (normalized.length > 10) html += `<tr><td colspan="${cols.length}" style="text-align:center;color:var(--text-light);">... and ${normalized.length - 10} more rows</td></tr>`;
            html += `</tbody></table>`;
            html += `<div style="margin-top:10px;text-align:right;"><button class="btn btn-success" onclick="confirmRateImport()">✅ Import All ${normalized.length} Rows</button> <button class="btn btn-clear" onclick="document.getElementById('rate-import-preview').style.display='none'">Cancel</button></div>`;
            preview.innerHTML = html;
            preview.style.display = 'block';
            window._rateSheetData = normalized;
        } catch (err) { alert('Error reading Excel: ' + err.message); }
    };
    reader.readAsArrayBuffer(file);
    input.value = '';
}
function confirmRateImport() {
    const data = window._rateSheetData;
    if (!data) return;
    let imported = 0,
        skipped = 0,
        errors = [];
    data.forEach((row, i) => {
        try {
            let carrier = row.carrier || row.liner || row.shipping_line || row.name || row.shippingline || '';
            let pol = row.pol || row.port_of_loading || row.loading_port || row.origin || row.portofloading || '';
            let chargeType = row.charge_type || row.charge || row.charge_name || row.description || row.type || row.chargetype || '';
            let amount = row.amount || row.rate || row.price || row.value || row.charge_amount || 0;
            let currency = row.currency || row.cur || row.ccy || row.currency_code || 'INR';
            let container = row.container || row.container_type || row.size || row.containertype || '';
            let commodity = row.commodity || row.commodity_type || '';
            carrier = String(carrier).trim();
            pol = String(pol).trim();
            chargeType = String(chargeType).trim().toUpperCase();
            amount = parseFloat(String(amount).replace(/[^\d.-]/g, '')) || 0;
            currency = String(currency).trim().toUpperCase() || 'INR';
            container = String(container).trim();
            commodity = String(commodity).trim().toUpperCase();
            if (commodity && !['NON HAZ', 'HAZ'].includes(commodity)) commodity = 'NON HAZ';
            if (!carrier || !pol || !chargeType || !amount) { skipped++; return; }
            const isAir = defaultCharges.air.includes(chargeType);
            const isLcl = defaultCharges.lcl.includes(chargeType) && !defaultCharges.sea.includes(chargeType);
            let listKey;
            if (isAir) listKey = 'carrierChargesAir';
            else if (isLcl) listKey = 'carrierChargesSeaLcl';
            else listKey = 'carrierChargesSeaLcl';
            const mode = isAir ? 'air' : (isLcl ? 'lcl' : 'sea');
            let entry;
            if (mode === 'air') {
                entry = db[listKey].find(c => c.carrier === carrier && c.pol === pol);
                if (!entry) { entry = { carrier, pol, charges: {}, updated: new Date().toISOString() };
                    db[listKey].push(entry); }
            } else {
                entry = db[listKey].find(c => c.mode === mode && c.carrier === carrier && c.pol === pol && (c.container || '') === container);
                if (!entry) { entry = { mode, carrier, pol, container, charges: {}, updated: new Date().toISOString() };
                    db[listKey].push(entry); }
            }
            entry.charges[chargeType] = { amount, currency };
            imported++;
        } catch (err) { errors.push(`Row ${i+1}: ${err.message}`);
            skipped++; }
    });
    saveDB();
    let msg = `Import Complete!\n✅ Imported: ${imported} charges\n⏭️ Skipped: ${skipped} rows`;
    if (errors.length > 0) msg += `\n\nErrors:\n${errors.slice(0, 5).join('\n')}`;
    alert(msg);
    document.getElementById('rate-import-preview').style.display = 'none';
    window._rateSheetData = null;
    autoBackup();
}

// ==================== COPY QUOTE DATA ====================
function copyQuoteData(mode) {
    const data = getFormData(mode);
    if (!data.client && Object.keys(data.charges).length === 0) { alert('No data to copy. Please fill the form first.'); return; }
    let text = '========================================\n';
    text += `       ${mode.toUpperCase()} FREIGHT QUOTATION\n`;
    text += '========================================\n\n';
    text += `Quote Number: ${data.quoteNumber || 'DRAFT'}\n`;
    text += `Date: ${data.autoDate || ''}\n\n`;
    text += '--- CUSTOMER & SHIPMENT DETAILS ---\n';
    text += `Client: ${data.client || '-'}\n`;
    text += `Carrier: ${data.carrier || '-'}\n`;
    text += `POL: ${data.pol || '-'}\n`;
    text += `POD: ${data.pod || '-'}\n`;
    text += `Incoterm: ${data.incoterm || '-'}\n`;
    if (mode === 'sea') text += `Container: ${data.container || '-'}\n`;
    text += `Commodity: ${data.commodity || '-'}\n`;
    text += `Weight (KGS): ${data.weight || '-'}\n`;
    if (mode === 'air') { text += `Volume (CBM): ${data.volume || '-'}\n`;
        text += `Pallets: ${data.pallets || '-'}\n`; }
    if (mode === 'lcl') text += `Volume (CBM): ${data.volume || '-'}\n`;
    text += `Transit Time: ${data.transit ? data.transit + ' Days' : '-'}\n`;
    text += `Validity Date: ${data.validityDate || '-'}\n`;
    text += `Remarks: ${data.remarks || '-'}\n\n`;
    text += '--- CHARGES BREAKDOWN ---\n';
    const order = data.chargesOrder || getCurrentChargesOrder(mode);
    Object.entries(order).forEach(([category, charges]) => {
        if (charges.length === 0) return;
        const catEntries = charges.filter(ch => data.charges[ch]).map(ch => [ch, data.charges[ch]]);
        if (catEntries.length === 0) return;
        text += `\n[${category.toUpperCase()}]\n`;
        text += '  #  Charge Type              Amount   Currency   INR Equivalent   Basis\n';
        text += '  ----------------------------------------------------------------\n';
        let catTotal = 0;
        catEntries.forEach(([type, c], i) => {
            const inr = toINR(c.amount, c.currency);
            catTotal += inr;
            const typeStr = type.padEnd(24).slice(0, 24);
            const amtStr = String(Number(c.amount).toLocaleString('en-IN')).padStart(8);
            const curStr = c.currency.padEnd(9);
            const inrStr = formatINR(inr);
            const basisStr = (c.basis || 'Normal').padEnd(10);
            text += `  ${String(i+1).padStart(2)}  ${typeStr}  ${amtStr}  ${curStr}  ${inrStr}  ${basisStr}\n`;
        });
        text += `  ----------------------------------------------------------------\n`;
        text += `  Subtotal: ${formatINR(catTotal)}\n`;
    });
    let grandTotal = 0;
    Object.values(data.charges).forEach(c => { grandTotal += toINR(c.amount, c.currency); });
    text += '\n  =========================================\n';
    text += `  GRAND TOTAL (INR): ${formatINR(grandTotal)}\n`;
    text += '  =========================================\n\n';
    text += `--- COMPANY ---\n`;
    text += `${db.companyName || 'GATEWAY EXIM'}\n`;
    text += `${db.companyAddress || ''}\n\n`;
    text += `Prepared By: ${db.defaultUser || 'N/A'}\n`;
    text += `Generated on: ${new Date().toLocaleString('en-IN')}`;
    document.getElementById('copyContent').value = text;
    document.getElementById('modal-title').textContent = `📋 Copy Quote Data — ${mode.toUpperCase()}`;
    openModal('copyModal');
}
function copyToClipboard() {
    const textarea = document.getElementById('copyContent');
    textarea.select();
    document.execCommand('copy');
    alert('✅ Data copied to clipboard!');
}

// ==================== EMAIL FUNCTIONS ====================
function buildEmailHTML(data, mode) {
    const modeLabel = { sea: 'SEA FREIGHT', air: 'AIR FREIGHT', lcl: 'LCL FREIGHT' }[mode];
    const order = data.chargesOrder || getCurrentChargesOrder(mode);
    const toUpper = (val) => val ? String(val).toUpperCase() : '-';
    let grandTotal = 0;
    const chargesWithINR = {};

    Object.entries(data.charges || {}).forEach(([charge, c]) => {
        const manualSellAmt = c.amount;
        const manualBuyAmt = c.buyAmount || 0;
        let totalSellAmt = manualSellAmt;
        let totalBuyAmt = manualBuyAmt;
        let minApplied = false;

        // ---- Special logic for PALLETISATION (AIR only) ----
        if (mode === 'air' && charge === 'PALLETISATION') {
            const pallets = data.pallets || 0;
            if (pallets > 0) {
                const plies = pallets * 2;
                const palletCharge = pallets * 1875;
                const plyCharge = plies * 600;
                totalSellAmt = Math.max(palletCharge, plyCharge);
                totalBuyAmt = Math.max(totalBuyAmt, totalSellAmt);
            }
        }

        // ---- Apply basis multipliers ----
        if (mode === 'air' || mode === 'lcl') {
            const basis = c.basis || 'Normal';
            if (basis === 'Per KGS') {
                totalSellAmt *= (data.weight || 0);
                totalBuyAmt *= (data.weight || 0);
            } else if (basis === 'Per CBM') {
                totalSellAmt *= (data.volume || 0);
                totalBuyAmt *= (data.volume || 0);
            } else if (basis === 'Per KGS × 3') {
                totalSellAmt *= (data.weight || 0) * 3;
                totalBuyAmt *= (data.weight || 0) * 3;
            } else if (basis === 'Per KGS × 4') {
                totalSellAmt *= (data.weight || 0) * 4;
                totalBuyAmt *= (data.weight || 0) * 4;
            }
        }

        // ---- AIR minimum threshold - EXCLUDING PALLETISATION ----
        if (mode === 'air' && charge !== 'PALLETISATION') {
            const basis = c.basis || 'Normal';
            if ((basis === 'Per KGS' || basis === 'Per KGS × 4') && AIR_MIN_THRESHOLDS && AIR_MIN_THRESHOLDS[charge]) {
                const minVal = AIR_MIN_THRESHOLDS[charge];
                if (totalSellAmt < minVal) {
                    minApplied = true;
                    totalSellAmt = minVal;
                    totalBuyAmt = Math.max(totalBuyAmt, minVal);
                }
            }
        }

        // ---- LCL FREIGHT/THC per CBM ----
        if (mode === 'lcl' && (charge === 'FREIGHT' || charge === 'THC')) {
            const volume = data.volume || 0;
            if (volume > 0) {
                const basis = c.basis || 'Normal';
                if (basis === 'Normal') {
                    totalSellAmt *= volume;
                    totalBuyAmt *= volume;
                }
            }
        }

        const sellINR = toINR(totalSellAmt, c.currency);
        const buyINR = toINR(totalBuyAmt, c.buyCurrency || c.currency);
        chargesWithINR[charge] = {
            unitSellAmt: manualSellAmt,
            currency: c.currency,
            sellINR,
            buyINR,
            basis: c.basis || 'Normal',
            minApplied: minApplied
        };
        grandTotal += sellINR;
    });


    // ---- Build HTML ----
    let chargeRowsHtml = '';
    if (Object.keys(chargesWithINR).length > 0) {
        Object.entries(order).forEach(([category, charges]) => {
            if (charges.length === 0) return;
            const catEntries = charges.filter(ch => chargesWithINR[ch]);
            if (catEntries.length === 0) return;

            chargeRowsHtml += `
            <table width="100%" cellspacing="0" cellpadding="0" style="margin-top:12px;">
                <tr><td style="background:#1e3a8a;color:white;padding:6px 10px;font-weight:bold;font-family:Arial;font-size:11px;">${category.toUpperCase()}</td></tr>
            </table>
            <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;border:1px solid #d1d5db;font-family:Arial;font-size:11px;">
                <thead>
                    <tr style="background:#1e3a8a;color:white;">
                        <th style="padding:5px;text-align:left;border-right:1px solid #d1d5db;">#</th>
                        <th style="padding:5px;text-align:left;border-right:1px solid #d1d5db;">Charge Type</th>
                        <th style="padding:5px;text-align:right;border-right:1px solid #d1d5db;">Sell Amt</th>
                        <th style="padding:5px;text-align:left;border-right:1px solid #d1d5db;">Currency</th>
                        <th style="padding:5px;text-align:right;border-right:1px solid #d1d5db;">INR Equivalent</th>
                        <th style="padding:5px;text-align:left;">Basis</th>
                    </tr>
                </thead>
                <tbody>`;

            let catTotal = 0;
            catEntries.forEach((ch, i) => {
                const c = chargesWithINR[ch];
                catTotal += c.sellINR;
                const isFreight = ch.toUpperCase() === 'FREIGHT' || ch.toUpperCase() === 'AIR FREIGHT';
                const rowStyle = isFreight ? 'background:#fee2e2;font-weight:bold;' : '';

                // Determine basis display
                let basisDisplay = c.basis === 'Normal' ? '1' : c.basis;
                if (mode === 'air' && AIR_MIN_THRESHOLDS && AIR_MIN_THRESHOLDS[ch]) {
                    if (c.minApplied) {
                        basisDisplay = 'Minimum';
                    } else {
                        if (ch === 'GATE PASS') {
                            basisDisplay = 'At Actual';
                        } else {
                            basisDisplay = 'Per KGS';
                        }
                    }
                }

                chargeRowsHtml += `
                <tr style="${rowStyle}">
                    <td style="padding:5px;border-bottom:1px solid #d1d5db;border-right:1px solid #d1d5db;">${i+1}</td>
                    <td style="padding:5px;border-bottom:1px solid #d1d5db;border-right:1px solid #d1d5db;">${ch.toUpperCase()}</td>
                    <td style="padding:5px;border-bottom:1px solid #d1d5db;border-right:1px solid #d1d5db;text-align:right;">${Number(c.unitSellAmt).toLocaleString('en-IN')}</td>
                    <td style="padding:5px;border-bottom:1px solid #d1d5db;border-right:1px solid #d1d5db;">${c.currency}</td>
                    <td style="padding:5px;border-bottom:1px solid #d1d5db;border-right:1px solid #d1d5db;text-align:right;">${formatINR(c.sellINR)}</td>
                    <td style="padding:5px;border-bottom:1px solid #d1d5db;">${basisDisplay}</td>
                </tr>`;
            });

            chargeRowsHtml += `
                <tr style="background:#f1f5f9;">
                    <td colspan="5" style="padding:5px;text-align:right;border-bottom:1px solid #d1d5db;font-weight:bold;">Subtotal:</td>
                    <td style="padding:5px;border-bottom:1px solid #d1d5db;font-weight:bold;">${formatINR(catTotal)}</td>
                </tr>
            </tbody></table>`;
        });

        chargeRowsHtml += `
        <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-top:6px;">
            <tr style="background:#10b981;color:white;font-weight:bold;">
                <td style="padding:6px 10px;text-align:right;font-family:Arial;font-size:11px;">GRAND TOTAL (INR)</td>
                <td style="padding:6px 10px;text-align:right;font-family:Arial;font-size:11px;">${formatINR(grandTotal)}</td>
            </tr>
        </table>`;
    }

    // ---- Customer Details ----
    const detailRows = [
        ['Client', toUpper(data.client), 'Quote Date', data.autoDate || '-'],
        ['Carrier', toUpper(data.carrier), 'Incoterm', toUpper(data.incoterm)],
        ['POL', toUpper(data.pol), 'POD', toUpper(data.pod)],
        ['Commodity', toUpper(data.commodity), 'Weight (KGS)', data.weight || '-'],
        [mode === 'sea' ? 'Container' : 'Volume (CBM)', mode === 'sea' ? toUpper(data.container) : (data.volume || '-'), 'Transit Time', data.transit ? data.transit + ' Days' : '-'],
        ['Validity Date', data.validityDate ? new Date(data.validityDate).toLocaleDateString('en-IN') : '-', 'Status', toUpper(data.status)]
    ];

    let detailHtml = `<table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-family:Arial;font-size:11px;">
        <tbody>`;
    detailRows.forEach((row, idx) => {
        const bgColor = idx % 2 === 0 ? '#f1f5f9' : 'white';
        detailHtml += `
        <tr style="background:${bgColor};">
            <td style="padding:5px;border:1px solid #d1d5db;font-weight:bold;width:20%;">${row[0]}</td>
            <td style="padding:5px;border:1px solid #d1d5db;width:30%;">${row[1]}</td>
            <td style="padding:5px;border:1px solid #d1d5db;font-weight:bold;width:20%;">${row[2]}</td>
            <td style="padding:5px;border:1px solid #d1d5db;width:30%;">${row[3]}</td>
        </tr>`;
    });
    detailHtml += `</tbody></table>`;

    // ---- Title ----
    const titleHtml = `
    <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-bottom:12px;">
        <tr>
            <td style="font-size:18px;font-weight:bold;color:#1e3a8a;font-family:Arial;text-align:left;">${modeLabel} QUOTATION</td>
            <td style="font-family:monospace;color:#d97706;font-weight:bold;font-size:12px;background:#fffbeb;padding:4px 10px;text-align:right;">Quote No: ${data.quoteNumber||'DRAFT'}</td>
        </tr>
    </table>`;

    // ---- Remarks ----
    let remarksHtml = '';
    if (data.remarks) {
        remarksHtml = `
        <table width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-top:12px;">
            <tr><td style="background:#1e3a8a;color:white;padding:4px 8px;font-weight:bold;font-family:Arial;font-size:11px;">Remarks</td></tr>
            <tr><td style="border:1px solid #d1d5db;padding:8px;font-family:Arial;font-size:11px;">${data.remarks.toUpperCase()}</td></tr>
        </table>`;
    }

    // ---- Final Output ----
    return `<!DOCTYPE html>
    <html><head><meta charset="UTF-8"></head>
    <body style="font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:20px;background:#ffffff;">
        <div style="background:white;">
            ${titleHtml}
            ${detailHtml}
            ${chargeRowsHtml}
            ${remarksHtml}
        </div>
    </body></html>`;
}

function emailQuote(mode) {
    const data = getFormData(mode);
    if (!data.client && Object.keys(data.charges).length === 0) {
        alert('Fill data first');
        return;
    }
    if (!data.quoteNumber) data.quoteNumber = document.getElementById(`${mode}-qn-value`).textContent || 'DRAFT';
    
    // ---- REVISED: use compact table ----
    const htmlContent = buildCompactEmailHTML(data, mode);
    // -----------------------------------
    
    currentEmailData = { data, mode, htmlContent };
    
    const modeLabel = mode.toUpperCase();
    const containerInfo = mode === 'sea' ? (data.container || 'N/A') : (data.volume ? `${data.volume} CBM` : 'N/A');
    document.getElementById('email-subject').value = `${modeLabel} FREIGHT QUOTE // ${data.quoteNumber} // ${data.pol||'N/A'} TO ${data.pod||'N/A'} // ${containerInfo} // ${data.commodity||'N/A'}`;
    
    document.getElementById('email-html-preview').innerHTML = htmlContent;
	let defaultCC = '';
	if (mode === 'sea') defaultCC = db.defaultCCEmailSea || '';
	else if (mode === 'air') defaultCC = db.defaultCCEmailAir || '';
	else if (mode === 'lcl') defaultCC = db.defaultCCEmailLcl || '';
	// Also for Rate Request – we'll use the LCL default or we can add a separate field? Let's use the SEA default as fallback.
	// But Rate Request uses format 'seaWithShipper', 'seaWithoutShipper', 'air' – we can map:
	if (mode === 'raterequest') {
		const format = currentRateRequestFormat;
		if (format === 'air') defaultCC = db.defaultCCEmailAir || '';
		else defaultCC = db.defaultCCEmailSea || ''; // for sea formats
	}

	document.getElementById('email-cc').value = defaultCC;
	
	openModal('emailModal');
}

function emailSavedQuote(target, mode, idx) {
    const rec = db[target][mode][idx];
    if (!rec) {
        alert('Record not found.');
        return;
    }

    const htmlContent = buildCompactEmailHTML(rec, mode);
    currentEmailData = { data: rec, mode, htmlContent };

    // Determine default CC based on mode
    let defaultCC = '';
    if (mode === 'sea') defaultCC = db.defaultCCEmailSea || '';
    else if (mode === 'air') defaultCC = db.defaultCCEmailAir || '';
    else if (mode === 'lcl') defaultCC = db.defaultCCEmailLcl || '';

    const modeLabel = mode.toUpperCase();
    const containerInfo = mode === 'sea' ? (rec.container || 'N/A') : (rec.volume ? `${rec.volume} CBM` : 'N/A');
    document.getElementById('email-subject').value = `${modeLabel} FREIGHT QUOTE // ${rec.quoteNumber} // ${rec.pol||'N/A'} TO ${rec.pod||'N/A'} // ${containerInfo} // ${rec.commodity||'N/A'}`;
    document.getElementById('email-html-preview').innerHTML = htmlContent;

    // ✅ Set the CC field
    document.getElementById('email-cc').value = defaultCC;

    openModal('emailModal');
}

// NEW: copy compact tables (replaces old copyEmailHTML)
function copyEmailCompact() {
    if (!currentEmailData) {
        alert('No email data available. Please open the email modal first.');
        return;
    }
    const compactHtml = buildCompactEmailHTML(currentEmailData.data, currentEmailData.mode);
    
    if (navigator.clipboard && navigator.clipboard.write) {
        const blobHTML = new Blob([compactHtml], { type: 'text/html' });
        const blobPlain = new Blob([currentEmailData.data.client || 'Quotation'], { type: 'text/plain' });
        const clipboardItem = new ClipboardItem({
            'text/html': blobHTML,
            'text/plain': blobPlain
        });
        navigator.clipboard.write([clipboardItem])
            .then(() => alert('✅ Compact tables copied with formatting.'))
            .catch(() => fallbackCopyText(compactHtml));
    } else {
        fallbackCopyText(compactHtml);
    }
}

// Keep fallbackCopyText (used by copyPreviewTables)
function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function sendEmail() {
    if (!currentEmailData) {
        alert('No data to send.');
        return;
    }

    const to = document.getElementById('email-to').value.trim();
    if (!to) {
        alert('Please enter a recipient email address.');
        return;
    }
    const cc = document.getElementById('email-cc').value.trim();
    const subject = document.getElementById('email-subject').value.trim();
    const htmlContent = currentEmailData.htmlContent;

    // Helper to open Outlook and copy HTML
    const copyAndOpenOutlook = () => {
        // Build mailto link with recipient, subject, and NO body (so default signature appears)
        let mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}`;
        if (cc) mailtoLink += `&cc=${encodeURIComponent(cc)}`;
        window.open(mailtoLink, '_blank');

        // Auto-save draft if Rate Request
        if (currentEmailData.mode === 'raterequest') {
            const data = currentEmailData.data;
            if (data && data.pol && data.pod) {
                saveRateRequestDraftWithData(data);
                console.log('📩 Rate Request auto‑saved as draft with quote:', data.quoteNumber);
                setTimeout(() => {
                    alert('✅ Rate Request draft saved automatically with Quote No: ' + data.quoteNumber);
                }, 500);
            }
        }

        closeModal('emailModal');
    };

    // --- Try Clipboard API with HTML support ---
    if (navigator.clipboard && navigator.clipboard.write) {
        const blobHTML = new Blob([htmlContent], { type: 'text/html' });
        const blobPlain = new Blob([currentEmailData.data?.client || 'Quotation'], { type: 'text/plain' });
        const clipboardItem = new ClipboardItem({
            'text/html': blobHTML,
            'text/plain': blobPlain
        });
        navigator.clipboard.write([clipboardItem])
            .then(function() {
                copyAndOpenOutlook();
            })
            .catch(function(err) {
                console.warn('Clipboard API error, falling back:', err);
                fallbackCopyText(htmlContent);
                copyAndOpenOutlook();
            });
    } else {
        // Fallback for older browsers
        fallbackCopyText(htmlContent);
        copyAndOpenOutlook();
    }
}

// ==================== PDF GENERATION ====================
function calculateChargesWithINR(data, mode) {
    let grandTotal = 0;
    const chargesWithINR = {};
    Object.entries(data.charges || {}).forEach(([charge, c]) => {
        const manualSellAmt = c.amount;
        const manualBuyAmt = c.buyAmount || 0;
        let totalSellAmt = manualSellAmt;
        let totalBuyAmt = manualBuyAmt;
        let minApplied = false;

        // ---- Special logic for PALLETISATION (AIR only) ----
        if (mode === 'air' && charge === 'PALLETISATION') {
            const pallets = data.pallets || 0;
            if (pallets > 0) {
                const plies = pallets * 2;
                const palletCharge = pallets * 1875;
                const plyCharge = plies * 600;
                totalSellAmt = Math.max(palletCharge, plyCharge);
                totalBuyAmt = Math.max(totalBuyAmt, totalSellAmt);
            }
        }

        // ---- Apply basis multipliers ----
        if (mode === 'air' || mode === 'lcl') {
            const basis = c.basis || 'Normal';
            if (basis === 'Per KGS') {
                totalSellAmt *= (data.weight || 0);
                totalBuyAmt *= (data.weight || 0);
            } else if (basis === 'Per CBM') {
                totalSellAmt *= (data.volume || 0);
                totalBuyAmt *= (data.volume || 0);
            } else if (basis === 'Per KGS × 3') {
                totalSellAmt *= (data.weight || 0) * 3;
                totalBuyAmt *= (data.weight || 0) * 3;
            } else if (basis === 'Per KGS × 4') {
                totalSellAmt *= (data.weight || 0) * 4;
                totalBuyAmt *= (data.weight || 0) * 4;
            }
        }

        // ---- AIR minimum threshold - EXCLUDING PALLETISATION ----
        if (mode === 'air' && charge !== 'PALLETISATION') {
            const basis = c.basis || 'Normal';
            if ((basis === 'Per KGS' || basis === 'Per KGS × 4') && AIR_MIN_THRESHOLDS && AIR_MIN_THRESHOLDS[charge]) {
                const minVal = AIR_MIN_THRESHOLDS[charge];
                if (totalSellAmt < minVal) {
                    minApplied = true;
                    totalSellAmt = minVal;
                    totalBuyAmt = Math.max(totalBuyAmt, minVal);
                }
            }
        }

        // ---- LCL FREIGHT/THC per CBM ----
        if (mode === 'lcl' && (charge === 'FREIGHT' || charge === 'THC')) {
            const volume = data.volume || 0;
            if (volume > 0) {
                const basis = c.basis || 'Normal';
                if (basis === 'Normal') {
                    totalSellAmt *= volume;
                    totalBuyAmt *= volume;
                }
            }
        }

        const sellINR = toINR(totalSellAmt, c.currency);
        const buyINR = toINR(totalBuyAmt, c.buyCurrency || c.currency);
        chargesWithINR[charge] = {
            unitSellAmt: manualSellAmt,
            currency: c.currency,
            sellINR,
            buyINR,
            basis: c.basis || 'Normal',
            minApplied: minApplied
        };
        grandTotal += sellINR;
    });
    return { chargesWithINR, grandTotal };
}

function buildPDFDefinition(data, mode) {
    const modeLabel = { sea: 'SEA FREIGHT', air: 'AIR FREIGHT', lcl: 'LCL FREIGHT' }[mode];
    const userName = getLoggedInUserName() || db.defaultUser || 'N/A';
    const order = data.chargesOrder || getCurrentChargesOrder(mode);
    const toUpper = (val) => val ? String(val).toUpperCase() : '-';
    const { chargesWithINR, grandTotal } = calculateChargesWithINR(data, mode);

    const content = [];


    content.push(
        { text: db.companyName || 'GATEWAY EXIM', style: 'companyName' },
        { text: db.companyAddress || '', style: 'companyAddress' },
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#1e3a8a' }] },
        { text: ' ' }
    );

    content.push({
        columns: [
            { text: modeLabel + ' QUOTATION', style: 'title' },
            { text: 'Quote No: ' + (data.quoteNumber || 'DRAFT'), style: 'quoteNum', alignment: 'right' }
        ]
    });

    const detailRows = [
        [{ text: 'Client', style: 'detailLabel' }, { text: toUpper(data.client) }, { text: 'Status', style: 'detailLabel' }, { text: toUpper(data.status) }],
        [{ text: 'POL', style: 'detailLabel' }, { text: toUpper(data.pol) }, { text: 'POD', style: 'detailLabel' }, { text: toUpper(data.pod) }],
        [{ text: 'Commodity', style: 'detailLabel' }, { text: toUpper(data.commodity) }, { text: 'Carrier', style: 'detailLabel' }, { text: toUpper(data.carrier) }],
        [{ text: 'Weight (KGS)', style: 'detailLabel' }, { text: data.weight || '-' }, { text: 'Incoterm', style: 'detailLabel' }, { text: toUpper(data.incoterm) }],
        [
            { text: (mode === 'sea' ? 'Container' : 'Volume (CBM)'), style: 'detailLabel' },
            { text: mode === 'sea' ? toUpper(data.container) : (data.volume || '-') },
            { text: 'Transit Time', style: 'detailLabel' },
            { text: data.transit ? data.transit + ' Days' : '-' }
        ],
        [{ text: 'Quote Date', style: 'detailLabel' }, { text: data.autoDate || '-' }, { text: 'Validity Date', style: 'detailLabel' }, { text: data.validityDate ? new Date(data.validityDate).toLocaleDateString('en-IN') : '-' }]
    ];
    content.push({
        table: {
            widths: ['*', '*', '*', '*'],
            body: detailRows
        },
        layout: {
            hLineWidth: function() { return 1; },
            vLineWidth: function() { return 1; },
            hLineColor: '#d1d5db',
            vLineColor: '#d1d5db',
            fillColor: function(rowIndex) {
                return (rowIndex % 2 === 0) ? '#f1f5f9' : null;
            }
        },
        margin: [0, 10, 0, 10]
    });


    // ---- Charge tables ----
    function buildChargeTableRows(category, charges, startSr) {
        const catEntries = charges.filter(ch => chargesWithINR[ch]);
        if (catEntries.length === 0) return null;

        let rows = [
            [
                { text: 'Sr. No', style: 'Aptos', alignment: 'center' },
                { text: 'Charge Type', style: 'Aptos', alignment: 'center' },
                { text: 'Currency', style: 'Aptos', alignment: 'center' },
                { text: 'Sell Amount', style: 'Aptos', alignment: 'center' },
                { text: 'Basis', style: 'Aptos', alignment: 'center' },
                { text: 'INR Equivalent', style: 'Aptos', alignment: 'center' }
            ]
        ];
        let catTotal = 0;
        let sr = startSr;
        catEntries.forEach((ch) => {
            const c = chargesWithINR[ch];
            catTotal += c.sellINR;
            const isFreight = ch.toUpperCase() === 'FREIGHT' || ch.toUpperCase() === 'AIR FREIGHT';

            let basisDisplay = c.basis === 'Normal' ? '1' : c.basis;
            if (mode === 'air' && AIR_MIN_THRESHOLDS && AIR_MIN_THRESHOLDS[ch]) {
                if (c.minApplied) {
                    basisDisplay = 'Minimum';
                } else {
                    if (ch === 'GATE PASS') {
                        basisDisplay = 'At Actual';
                    } else {
                        basisDisplay = 'Per KGS';
                    }
                }
            }

            rows.push([
                { text: String(sr), alignment: 'center' },
                { text: ch.toUpperCase(), bold: isFreight, color: isFreight ? '#dc2626' : '#000' },
                { text: c.currency, alignment: 'center' },
                { text: Number(c.unitSellAmt).toLocaleString('en-IN'), alignment: 'center' },
                { text: basisDisplay, alignment: 'center' },
                { text: formatINR(c.sellINR), alignment: 'center' }
            ]);
            sr++;
        });
        rows.push([
            { text: 'Subtotal:', colSpan: 4, alignment: 'right', bold: true },
            {}, {}, {},
            {},
            { text: formatINR(catTotal), alignment: 'center', bold: true }
        ]);
        return { rows, nextSr: sr };
    }

    if (Object.keys(chargesWithINR).length > 0) {
        let currentSr = 1;
        Object.entries(order).forEach(([category, charges]) => {
            if (charges.length === 0) return;
            const result = buildChargeTableRows(category, charges, currentSr);
            if (!result) return;
            currentSr = result.nextSr;
            content.push({ text: category.toUpperCase(), style: 'categoryHeader' });
            content.push({
                table: {
                    widths: ['auto', '*', 'auto', 'auto', 'auto', 'auto'],
                    body: result.rows
                },
                layout: {
                    hLineWidth: function() { return 1; },
                    vLineWidth: function() { return 1; },
                    hLineColor: '#d1d5db',
                    vLineColor: '#d1d5db',
                    fillColor: function(rowIndex) {
                        if (rowIndex === 0) return '#1e3a8a';
                        if (rowIndex === result.rows.length - 1) return '#f1f5f9';
                        return null;
                    }
                },
                margin: [0, 5, 0, 10]
            });
        });
        content.push({
            table: {
                widths: ['*', 'auto'],
                body: [
                    [{ text: 'GRAND TOTAL (INR)', alignment: 'right', bold: true, fontSize: 11, color: 'white' },
                    { text: formatINR(grandTotal), alignment: 'right', bold: true, fontSize: 11, color: 'white' }]
                ]
            },
            layout: { fillColor: '#10b981' },
            margin: [0, 0, 0, 10]
        });
    }

    if (data.remarks) {
        content.push({
            table: {
                widths: ['*'],
                body: [
                    [{ text: 'Remarks', style: 'categoryHeader' }],
                    [{ text: data.remarks.toUpperCase(), margin: [5, 5] }]
                ]
            },
            layout: 'noBorders',
            margin: [0, 5, 0, 10]
        });
    }

    content.push(
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#e2e8f0' }] },
        { text: 'This quotation is system-generated. Rates are subject to change based on validity date.', alignment: 'center', fontSize: 8, color: '#64748b', margin: [0, 8, 0, 2] },
        { text: 'Generated on ' + new Date().toLocaleString('en-IN'), alignment: 'center', fontSize: 8, color: '#64748b' },
        { text: 'Prepared By: ' + userName, alignment: 'center', fontSize: 8, color: '#64748b', margin: [0, 2, 0, 0] }
    );

    return {
        content: content,
        styles: {
            companyName: { fontSize: 14, bold: true, color: '#1e3a8a' },
            companyAddress: { fontSize: 9, color: '#64748b', margin: [0, 2, 0, 4] },
            title: { fontSize: 18, bold: true, color: '#1e3a8a' },
            quoteNum: { fontSize: 12, bold: true, color: '#d97706' },
            detailLabel: { fontSize: 11, bold: true, color: '#334155' },
            categoryHeader: { fontSize: 11, bold: true, color: '#1e3a8a', margin: [0, 8, 0, 4] },
            Aptos: { fontSize: 11, bold: true, color: 'white' }
        },
        defaultStyle: {
            fontSize: 10,
            font: 'Roboto'
        }
    };
}


function generatePDF(data, mode) {
    if (typeof pdfMake === 'undefined') {
        alert('pdfmake library is not loaded. Please add the scripts to your HTML and refresh.');
        return;
    }
    if (!data.client && Object.keys(data.charges).length === 0) {
        alert('Please fill the form with at least a Client Name and charges before generating PDF.');
        return;
    }
    if (!data.quoteNumber) {
        data.quoteNumber = document.getElementById(`${mode}-qn-value`).textContent || 'DRAFT-' + Date.now();
    }
    if (!data.chargesOrder || Object.keys(data.chargesOrder).length === 0) {
        data.chargesOrder = getCurrentChargesOrder(mode);
    }
    const docDefinition = buildPDFDefinition(data, mode);
    pdfMake.createPdf(docDefinition).download(`${data.quoteNumber || 'Quote'}.pdf`);
}
function downloadPDF(mode) {
    const data = getFormData(mode);
    if (!data.client && Object.keys(data.charges).length === 0) {
        alert('Please fill the form with at least a Client Name and charges before generating PDF.');
        return;
    }
    if (!data.quoteNumber) data.quoteNumber = document.getElementById(`${mode}-qn-value`).textContent || 'DRAFT';
    generatePDFFromHTML(data, mode);
}
function downloadSavedPDF(target, mode, idx) {
    const rec = db[target][mode][idx];
    if (!rec) {
        alert('Record not found.');
        return;
    }
    if (!rec.chargesOrder || Object.keys(rec.chargesOrder).length === 0) {
        rec.chargesOrder = getCurrentChargesOrder(mode);
    }
    generatePDFFromHTML(rec, mode);
}



function generatePDFFromHTML(data, mode) {
    if (!data.quoteNumber) data.quoteNumber = 'DRAFT-' + Date.now();

    // Build preview HTML (same as modal preview)
    const html = buildPreviewHTML(data, mode, '100%', false);

    const renderArea = document.getElementById('pdf-render-area');
    if (!renderArea) {
        alert('PDF render area not found. Please refresh the page.');
        return;
    }

    renderArea.innerHTML = html;
    renderArea.style.cssText = 'position:fixed;left:0;top:0;width:800px;background:white;z-index:9999;opacity:1;padding:0;margin:0;font-family: Arial, sans-serif;';

    setTimeout(() => {
        html2canvas(renderArea, {
            scale: 3,                 // High DPI for sharp text
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff',
            width: 800,
        })
        .then(canvas => {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
            const pdfWidth = pdf.internal.pageSize.getWidth();   // 210 mm
            const pdfHeight = pdf.internal.pageSize.getHeight(); // 297 mm
            const margin = 5; // 0.5 cm = 5 mm

            // Available area inside margins
            const maxWidth = pdfWidth - 1.5 * margin;
            const maxHeight = pdfHeight - 1.5 * margin;

            // Calculate image dimensions to fit within maxWidth and maxHeight
            let imgWidth = maxWidth;
            let imgHeight = (canvas.height * imgWidth) / canvas.width;

            // If height exceeds maxHeight, scale down to fit height
            if (imgHeight > maxHeight) {
                imgHeight = maxHeight;
                imgWidth = (canvas.width * imgHeight) / canvas.height;
            }

            // Center the image within the margins
            const x = (pdfWidth - imgWidth) / 2;
            const y = (pdfHeight - imgHeight) / 2;

            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
            pdf.save(`${data.quoteNumber || 'Quote'}.pdf`);

            renderArea.style.cssText = 'position:fixed;left:-10000px;top:0;width:800px;background:white;z-index:-1;';
            renderArea.innerHTML = '';
        })
        .catch(err => {
            console.error(err);
            alert('PDF generation failed. Please try again.');
            renderArea.style.cssText = 'position:fixed;left:-10000px;top:0;width:800px;background:white;z-index:-1;';
            renderArea.innerHTML = '';
        });
    }, 500);
}

// ==================== PREVIEW ====================
function buildPreviewHTML(data, mode, maxWidth = '100%', compact = false) {
    const modeLabel = { sea: 'SEA FREIGHT', air: 'AIR FREIGHT', lcl: 'LCL FREIGHT' }[mode];
    const validityDisplay = data.validityDate ? new Date(data.validityDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
    const transitDisplay = data.transit ? `${data.transit} Days` : '—';
    const userName = getLoggedInUserName() || db.defaultUser || 'N/A';
    const order = data.chargesOrder || getCurrentChargesOrder(mode);
    const toUpper = (val) => val ? String(val).toUpperCase() : '-';
    let grandTotal = 0;
    const chargesWithINR = {};

    // ---- FULL CALCULATION LOGIC (same as compact) ----
    Object.entries(data.charges || {}).forEach(([charge, c]) => {
        const manualSellAmt = c.amount;
        const manualBuyAmt = c.buyAmount || 0;
        let totalSellAmt = manualSellAmt;
        let totalBuyAmt = manualBuyAmt;
        let minApplied = false;

        if (mode === 'air' && charge === 'PALLETISATION') {
            const pallets = data.pallets || 0;
            if (pallets > 0) {
                const plies = pallets * 2;
                const palletCharge = pallets * 1875;
                const plyCharge = plies * 600;
                totalSellAmt = Math.max(palletCharge, plyCharge);
                totalBuyAmt = Math.max(totalBuyAmt, totalSellAmt);
            }
        }

        if (mode === 'air' || mode === 'lcl') {
            const basis = c.basis || 'Normal';
            if (basis === 'Per KGS') {
                totalSellAmt *= (data.weight || 0);
                totalBuyAmt *= (data.weight || 0);
            } else if (basis === 'Per CBM') {
                totalSellAmt *= (data.volume || 0);
                totalBuyAmt *= (data.volume || 0);
            } else if (basis === 'Per KGS × 3') {
                totalSellAmt *= (data.weight || 0) * 3;
                totalBuyAmt *= (data.weight || 0) * 3;
            } else if (basis === 'Per KGS × 4') {
                totalSellAmt *= (data.weight || 0) * 4;
                totalBuyAmt *= (data.weight || 0) * 4;
            }
        }

        if (mode === 'air' && charge !== 'PALLETISATION') {
            const basis = c.basis || 'Normal';
            if ((basis === 'Per KGS' || basis === 'Per KGS × 4') && AIR_MIN_THRESHOLDS && AIR_MIN_THRESHOLDS[charge]) {
                const minVal = AIR_MIN_THRESHOLDS[charge];
                if (totalSellAmt < minVal) {
                    minApplied = true;
                    totalSellAmt = minVal;
                    totalBuyAmt = Math.max(totalBuyAmt, minVal);
                }
            }
        }

        if (mode === 'lcl' && (charge === 'FREIGHT' || charge === 'THC')) {
            const volume = data.volume || 0;
            if (volume > 0) {
                const basis = c.basis || 'Normal';
                if (basis === 'Normal') {
                    totalSellAmt *= volume;
                    totalBuyAmt *= volume;
                }
            }
        }

        const sellINR = toINR(totalSellAmt, c.currency);
        const buyINR = toINR(totalBuyAmt, c.buyCurrency || c.currency);
        chargesWithINR[charge] = {
            unitSellAmt: manualSellAmt,
            totalSellAmt: totalSellAmt,
            currency: c.currency,
            sellINR,
            buyINR,
            basis: c.basis || 'Normal',
            minApplied: minApplied
        };
        grandTotal += sellINR;
    });

    // ---- HTML generation with inline styles ----
    const baseFont = '0.78rem';
    const headingSize = '0.90rem';
    const titleFont = '1.2rem';
    const thPadding = '4px 7px';
    const tdPadding = '4px 7px';
    const containerPadding = '10px';
    const headerHeight = '32px';      // fixed height for all main heading rows

    // ---- 1. Customer Details (inline widths) ----
	const detailRows = [
    ['Client', toUpper(data.client), 'Status', toUpper(data.status)],
    ['POL', toUpper(data.pol), 'POD', toUpper(data.pod)],
    ['Commodity', toUpper(data.commodity), (mode === 'sea' ? 'Container' : 'Volume (CBM)'), mode === 'sea' ? toUpper(data.container) : (data.volume || '-')],
    ['Weight (KGS)', data.weight || '-', 'Incoterm', toUpper(data.incoterm)],
    ['Carrier', toUpper(data.carrier), 'Transit Time', transitDisplay],
    ['Quote Date', data.autoDate || '-', 'Validity Date', validityDisplay]
	];

	let detailHtml = `<table style="width:100%;border-collapse:collapse;font-size:${baseFont};">
		<thead>
			<tr><th colspan="4" style="border:1px solid #1e3a8a;padding:${thPadding};text-align:center;background:#1e3a8a;color:white;font-weight:700;font-size:${headingSize};line-height:1.4;vertical-align:middle;height:${headerHeight};">Customer & Shipment Details</th></tr>
		</thead>
		<tbody>`;
	detailRows.forEach((row, idx) => {
		const bg = idx % 2 === 0 ? '#f1f5f9' : 'white';
		// Check if this row contains "Validity Date" in label1 or label2
		const isValidityRow = row[0] === 'Validity Date' || row[2] === 'Validity Date';
		const valueStyle1 = row[0] === 'Validity Date' ? 'color:#dc2626;font-weight:bold;' : '';
		const valueStyle2 = row[2] === 'Validity Date' ? 'color:#dc2626;font-weight:bold;' : '';
		detailHtml += `<tr style="background:${bg};">
			<td style="border:1px solid #d1d5db;padding:${tdPadding};font-weight:700;width:20%;">${row[0]}</td>
			<td style="border:1px solid #d1d5db;padding:${tdPadding};width:30%;${valueStyle1}">${row[1]}</td>
			<td style="border:1px solid #d1d5db;padding:${tdPadding};font-weight:700;width:20%;">${row[2]}</td>
			<td style="border:1px solid #d1d5db;padding:${tdPadding};width:30%;${valueStyle2}">${row[3]}</td>
		</tr>`;
	});
	detailHtml += `</tbody></table>`;

    // ---- 2. Charge groups (inline widths) ----
    function buildGroupTable(groupLabel, categoryNames, srStart) {
        const groupCharges = [];
        categoryNames.forEach(cat => {
            if (order[cat]) {
                order[cat].forEach(ch => {
                    if (chargesWithINR[ch]) {
                        groupCharges.push({ category: cat, charge: ch });
                    }
                });
            }
        });
        if (groupCharges.length === 0) return { html: '', subtotal: 0, nextSr: srStart };

        let html = `<table style="width:100%;border-collapse:collapse;font-size:${baseFont};margin-top:8px;">
            <thead>
                <tr><th colspan="6" style="border:1px solid #1e3a8a;padding:${thPadding};text-align:center;background:#1e3a8a;color:white;font-weight:700;font-size:${headingSize};line-height:1.4;vertical-align:middle;height:${headerHeight};">${groupLabel}</th></tr>
                <tr>
                    <th style="border:1px solid #d1d5db;padding:${tdPadding};text-align:center;background:#3896d9;color:white;font-weight:700;font-size:${baseFont};width:10%;">Sr. No</th>
                    <th style="border:1px solid #d1d5db;padding:${tdPadding};text-align:left;background:#3896d9;color:white;font-weight:700;font-size:${baseFont};width:25%;">Charge Type</th>
                    <th style="border:1px solid #d1d5db;padding:${tdPadding};text-align:center;background:#3896d9;color:white;font-weight:700;font-size:${baseFont};width:10%;">Currency</th>
                    <th style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;background:#3896d9;color:white;font-weight:700;font-size:${baseFont};width:15%;">Sell Amount</th>
                    <th style="border:1px solid #d1d5db;padding:${tdPadding};text-align:center;background:#3896d9;color:white;font-weight:700;font-size:${baseFont};width:10%;">Basis</th>
                    <th style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;background:#3896d9;color:white;font-weight:700;font-size:${baseFont};width:29%;">INR Equivalent</th>
                </tr>
            </thead>
            <tbody>`;

        let sr = srStart;
        let subtotal = 0;
        groupCharges.forEach(({ charge }) => {
            const c = chargesWithINR[charge];
            subtotal += c.sellINR;
            const isFreight = charge.toUpperCase() === 'FREIGHT' || charge.toUpperCase() === 'AIR FREIGHT';
            const rowStyle = isFreight ? 'background:#fee2e2;font-weight:700;color:#dc2626;' : '';

            let basisDisplay = c.basis === 'Normal' ? '1' : c.basis;
            if (mode === 'air' && AIR_MIN_THRESHOLDS && AIR_MIN_THRESHOLDS[charge]) {
                if (c.minApplied) {
                    basisDisplay = 'Minimum';
                } else {
                    if (charge === 'GATE PASS') {
                        basisDisplay = 'At Actual';
                    } else {
                        basisDisplay = 'Per KGS';
                    }
                }
            }

            html += `<tr style="${rowStyle}">
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:center;width:10%;">${sr++}</td>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:left;width:25%;">${charge.toUpperCase()}</td>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:center;width:10%;">${c.currency}</td>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;width:15%;">${Number(c.unitSellAmt).toLocaleString('en-IN')}</td>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:center;width:10%;">${basisDisplay}</td>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;width:29%;">${formatINR(c.sellINR)}</td>
            </tr>`;
        });

        html += `</tbody>
            <tfoot>
                <tr style="font-weight:700;background:#e6f7e6;">
                    <td colspan="5" style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;width:71%;">Subtotal</td>
                    <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;width:29%;">${formatINR(subtotal)}</td>
                </tr>
            </tfoot>
        </table>`;
        return { html, subtotal, nextSr: sr };
    }

    // ---- Build groups ----
    const groupMap = getChargeGroups(mode);
    const group1Label = "Freight & Carrier Charges";
    const group2Label = "CFS / Transport Charges";
    const group1Cats = groupMap.group1 || [];
    const group2Cats = groupMap.group2 || [];

    let srStart = 1;
    let chargeHtml = '';
    if (mode === 'air') {
        const combinedCats = group1Cats.concat(group2Cats);
        const combinedTable = buildGroupTable("AIR FREIGHT CHARGES", combinedCats, srStart);
        chargeHtml = combinedTable.html;
    } else {
        let table1 = buildGroupTable(group1Label, group1Cats, srStart);
        srStart = table1.nextSr;
        let table2 = buildGroupTable(group2Label, group2Cats, srStart);
        chargeHtml = (table1.html || '') + (table2.html || '');
    }

    // ---- Grand Total ----
    if (chargeHtml) {
        chargeHtml += `<table style="width:100%;border-collapse:collapse;font-size:${baseFont};margin-top:4px;">
            <tbody>
                <tr style="background:#05964b;color:#edeef0;font-weight:800;font-size:1.05rem;line-height:1.4;">
                    <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;width:71%;">GRAND TOTAL (INR) + GST additional</td>
                    <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:left;width:29%;">${formatINR(grandTotal)}</td>
                </tr>
            </tbody>
        </table>`;
    }

    // ---- 3. REMARKS – now two separate tables (like compact) ----
    let remarksHtml = '';

    // Special remarks (if any) as a table with its own header
    if (data.remarks && data.remarks.trim()) {
        remarksHtml += `<table style="width:100%;border-collapse:collapse;font-size:${baseFont};margin-top:8px;">
            <tbody>
                <tr>
                    <th style="border:1px solid #b91c1c;padding:${thPadding};text-align:center;background:#b91c1c;color:white;font-weight:700;font-size:${headingSize};line-height:1.4;vertical-align:middle;height:${headerHeight};">⚠️ SPECIAL REMARK</th>
                </tr>
                <tr>
                    <td style="border:1px solid #fee2e2;padding:${tdPadding};background:#fee2e2;color:#b91c1c;font-weight:700;font-size:${baseFont};line-height:1.4;vertical-align:top;">
                        ${data.remarks.toUpperCase()}
                    </td>
                </tr>
            </tbody>
        </table>`;
    }

    // Standard remarks (static per mode) as a separate table
    let standardRemarks = [];
    if (mode === 'air') {
        standardRemarks = [
            "1. Rate Subject To Booking Acceptance",
            "2. 100% Of Total Freight Charges applicable if Shipments Cancelled Within 48 Hours Before The Delivery Cut-Off Time",
            "3. GST At Actual",
            "4. Rest other charges if any at actual as per receipt.",
            "5. Above rates are valid for 3 days",
            "6. THC:0.95/KG – ac actual",
            "7. For Air cargo payment term will be 15 Days from the date of invoice.",
            "8. Surcharges are at cost and subject to change. This rate QUOTED for prepaid shipment.",
            "9. This rate is quote valid for 1.1 General cargo, Stackable and Normal dimension cargo.",
            "10. This rate is not valid for DG/UB /ODC / Fragile/ Special cargo.",
            "11. Acceptance of shipment would be subject to space availability at the time of booking .",
            "12. EY reserves the right to select routing as per space availability",
            "13. Spot rates offered are valid only for two days from the date of quotation.",
            "14. Under current scenario rates are subject to change without prior notice .",
            "15. Reduction in weight by more than 15% would lead to revision in ad Noc rates."
        ];
    } else {
        standardRemarks = [
            "1. Rates are valid as per vessel sailing.",
            "2. Rates are subject to ACD, SEAL, GRI, PSS, Toll + Local Charges.",
            "3. Rates are Subject to space and inventory availability.",
            "4. Rates are Subject to cargo acceptance and Haz approval.",
            "5. All Govt. taxes are applicable at the time of shipment (GST Applicable).",
            "6. Booking cancellation charges will be applicable as per carrier guidelines for general & SPOT booking.",
            "7. Rates are subject to THC as per tariff if container pick-up from ICD locations.",
            "8. Rates are subject to Standard free time and for additional free time charges will be applicable.",
            "9. Rates are subject to POL - THC, Documentation charges and local charges, as per Tariff.",
            "10. SPOT rates are subject to change at the time of booking."
        ];
    }

    const standardRemarksList = standardRemarks.map(line =>
        `<p style="margin:2px 0;font-size:${baseFont};line-height:1.4;">${line}</p>`
    ).join('');

    remarksHtml += `<table style="width:100%;border-collapse:collapse;font-size:${baseFont};margin-top:8px;">
        <tbody>
            <tr>
                <th style="border:1px solid #1e3a8a;padding:${thPadding};text-align:center;background:#1e3a8a;color:white;font-weight:700;font-size:${headingSize};line-height:1.4;vertical-align:middle;height:${headerHeight};">Remarks</th>
            </tr>
            <tr>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};background:#ffffff;font-size:${baseFont};line-height:1.4;vertical-align:top;">
                    ${standardRemarksList}
                </td>
            </tr>
        </tbody>
    </table>`;

    // ---- Final assembly ----
    return `
        <div id="preview-content-container" style="background:#ffffff;color:#1a1a1a;font-family:'Segoe UI',Arial,sans-serif;max-width:${maxWidth};margin:0 auto;padding:${containerPadding};box-sizing:border-box;">
            <div style="border-bottom:2px solid #1e3a8a;padding-bottom:6px;margin-bottom:8px;">
                <div style="font-size:0.9rem;font-weight:700;color:#1e3a8a;">${db.companyName || 'GATEWAY EXIM'}</div>
                <div style="font-size:0.65rem;color:#64748b;">${db.companyAddress || ''}</div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
                <div style="text-align:left;">
                    <div style="font-size:${titleFont};color:#1e3a8a;font-weight:800;letter-spacing:1px;">${modeLabel} QUOTATION</div>
                </div>
                <div style="text-align:right;">
                    <div style="font-family:'Courier New',monospace;color:#d97706;font-weight:700;font-size:0.85rem;background:#fffbeb;padding:4px 10px;border-radius:4px;">Quote No: ${data.quoteNumber||'DRAFT'}</div>
                </div>
            </div>
            ${detailHtml}
            ${chargeHtml}
            ${remarksHtml}
            <div style="margin-top:8px;font-size:0.68rem;color:#64748b;text-align:center;border-top:1px solid #e2e8f0;padding-top:10px;">
                <p style="margin:2px 0;">This quotation is system-generated. Rates are subject to change based on validity date.</p>
                <p style="margin:2px 0;">Generated on ${new Date().toLocaleString('en-IN')}</p>
                <div style="font-size:0.65rem;color:#64748b;margin-top:2px;">Prepared By: ${userName}</div>
            </div>
        </div>
    `;
}
// Helper function to define charge groups per mode
function getChargeGroups(mode) {
    if (mode === 'sea') {
        return { group1: ['Freight', 'Carrier Charges'], group2: ['CFS / Transport Charges'] };
    } else if (mode === 'air') {
        return { group1: ['Freight', 'Origin Charges'], group2: ['Local Charges'] };
    } else if (mode === 'lcl') {
        return { group1: ['Freight', 'Origin Charges'], group2: [] };
    }
    return { group1: [], group2: [] };
}

function previewQuote(mode) {
    const data = getFormData(mode);
    if (!data.client && Object.keys(data.charges).length === 0) {
        alert('Please fill the form with at least a Client Name and charges before previewing.');
        return;
    }
    if (!data.quoteNumber) data.quoteNumber = document.getElementById(`${mode}-qn-value`).textContent || 'DRAFT';
    _previewData = { data, mode };
    const html = buildPreviewHTML(data, mode, '100%', false);
    document.getElementById('modal-title').textContent = 'Quotation Preview';
    document.getElementById('previewBody').innerHTML = `
        <div style="margin-bottom:10px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn btn-info" onclick="copyPreviewTables()">📋 Copy Tables (Compact)</button>
            <button class="btn" onclick="copyPreviewText()" style="background:#25D366; color:white; border:none; padding:6px 12px; border-radius:4px; font-weight:bold; cursor:pointer;">📄 WhatsApp</button>
        </div>
        ${html}
    `;
    document.getElementById('previewBody').style.background = 'white';
    openModal('previewModal');
}

function previewSavedRecord(target, mode, idx) {
    const rec = db[target][mode][idx];
    if (!rec) {
        alert('Record not found.');
        return;
    }
    _previewData = { data: rec, mode };
    const html = buildPreviewHTML(rec, mode, '100%', false);
    document.getElementById('modal-title').textContent = 'Quotation Preview';
    document.getElementById('previewBody').innerHTML = `
        <div style="margin-bottom:10px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn btn-info" onclick="copyPreviewTables()">📋 Copy Tables (Compact)</button>
            <button class="btn" onclick="copyPreviewText()" style="background:#25D366; color:white; border:none; padding:6px 12px; border-radius:4px; font-weight:bold; cursor:pointer;">📄 WhatsApp</button>
            <button class="btn btn-email" onclick="emailFromPreview()">📧 Email</button>
        </div>
        ${html}
    `;
    document.getElementById('previewBody').style.background = 'white';
    openModal('previewModal');
}

function emailFromPreview() {
    if (!_previewData) {
        alert('No preview data available.');
        return;
    }
    const { data, mode } = _previewData;
    // Use the existing emailQuote function or emailSavedQuote
    if (data.quoteNumber) {
        let target = 'rates';
        let idx = -1;
        let foundMode = mode;
        ['sea','air','lcl'].forEach(m => {
            const found = db.rates[m].findIndex(r => r.quoteNumber === data.quoteNumber);
            if (found !== -1) { target = 'rates'; foundMode = m; idx = found; }
        });
        if (idx === -1) {
            ['sea','air','lcl'].forEach(m => {
                const found = db.drafts[m].findIndex(r => r.quoteNumber === data.quoteNumber);
                if (found !== -1) { target = 'drafts'; foundMode = m; idx = found; }
            });
        }
        if (idx !== -1) {
            emailSavedQuote(target, foundMode, idx);
            return;
        }
    }
    // Fallback: use current form data
    emailQuote(mode);
}


function copyPreviewText() {
    if (!_previewData) {
        alert('No preview data available. Please open a preview first.');
        return;
    }
    const { data, mode } = _previewData;

    // Build text summary
    let text = '';
    text += `POL : ${data.pol || 'N/A'}\n`;
    text += `POD : ${data.pod || 'N/A'}\n`;
    // For sea: show Container; for air/lcl: show Volume (CBM)
    if (mode === 'sea') {
        text += `CONTAINER : ${data.container || 'N/A'}\n`;
    } else {
        text += `VOLUME (CBM) : ${data.volume || 'N/A'}\n`;
    }
    text += `CARGO : ${data.commodity || 'N/A'}\n`;
    text += `VALID : ${data.validityDate ? new Date(data.validityDate).toLocaleDateString('en-IN') : 'N/A'}\n\n`;

    // Get charges with their sell amounts and currency symbols
    const chargesWithINR = {};
    let grandTotal = 0;
    Object.entries(data.charges || {}).forEach(([charge, c]) => {
        let unitSellAmt = c.amount;
        let totalSellAmt = unitSellAmt;
        if (mode === 'air' || mode === 'lcl') {
            const basis = c.basis || 'Normal';
            if (basis === 'Per KGS') totalSellAmt *= (data.weight || 0);
            else if (basis === 'Per CBM') totalSellAmt *= (data.volume || 0);
            else if (basis === 'Per KGS × 3') totalSellAmt *= (data.weight || 0) * 3;
        }
        if (mode === 'lcl' && (charge === 'FREIGHT' || charge === 'THC')) {
            const volume = data.volume || 0;
            if (volume > 0) {
                const basis = c.basis || 'Normal';
                if (basis === 'Normal') totalSellAmt *= volume;
            }
        }
        const sellINR = toINR(totalSellAmt, c.currency);
        chargesWithINR[charge] = {
            unitSellAmt: totalSellAmt,
            currency: c.currency,
            sellINR: sellINR
        };
        grandTotal += sellINR;
    });

    // Add charges to text
    text += '--- CHARGES ---\n';
    Object.entries(chargesWithINR).forEach(([charge, c]) => {
        const symbol = c.currency === 'INR' ? '₹' : '$'; // crude but works for now
        text += `${charge} : ${symbol} ${Number(c.unitSellAmt).toLocaleString('en-IN')}\n`;
    });
    text += `\nGRAND TOTAL : ₹ ${Number(grandTotal).toLocaleString('en-IN')}\n`;

    // Copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            alert('✅ Text copied to clipboard!');
        }).catch(() => {
            fallbackCopyText(text);
        });
    } else {
        fallbackCopyText(text);
    }
}

function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('✅ Text copied to clipboard!');
}


// NEW: copy compact tables from preview
function copyPreviewTables() {
    if (!_previewData) {
        alert('No preview data available. Please open a preview first.');
        return;
    }
    const { data, mode } = _previewData;
    const compactHtml = buildCompactEmailHTML(data, mode);

    // Use clipboard API to copy HTML and plain text fallback
    if (navigator.clipboard && navigator.clipboard.write) {
        const blobHTML = new Blob([compactHtml], { type: 'text/html' });
        const blobPlain = new Blob([data.client || 'Quotation'], { type: 'text/plain' });
        const clipboardItem = new ClipboardItem({
            'text/html': blobHTML,
            'text/plain': blobPlain
        });
        navigator.clipboard.write([clipboardItem])
            .then(() => alert('✅ Compact tables copied with formatting.'))
            .catch(() => fallbackCopyText(compactHtml));
    } else {
        fallbackCopyText(compactHtml);
    }
}

// ==================== DSR FUNCTIONS ====================
let addShipmentDropdownOpen = false;
function toggleAddShipmentDropdown() {
    const dd = document.getElementById('addShipmentDropdown');
    addShipmentDropdownOpen = !addShipmentDropdownOpen;
    dd.classList.toggle('show', addShipmentDropdownOpen);
}
document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.add-shipment-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
        document.getElementById('addShipmentDropdown').classList.remove('show');
        addShipmentDropdownOpen = false;
    }
});

// ===== UNIFIED DSR GLOBAL VARIABLES =====
let dsrEditIdx = null;

// ===== UNIFIED DSR FORM BUILDER =====
function buildDsrForm(s, mode, isEdit) {
    const carriers = db.carriers.filter(c => !(db.hiddenItems.carriers || []).includes(c)).sort();
    const polList = db.pol.filter(p => !(db.hiddenItems.pol || []).includes(p)).sort();
    const podList = db.pod.filter(p => !(db.hiddenItems.pod || []).includes(p)).sort();

    // --- Cargo Status dropdown options ---
    let cargoStatusOptions = '';
    const cargoMaster = db.cargoStatusMaster || ["Booked", "Confirmed", "In Transit", "Delivered", "Cancelled"];
    cargoMaster.forEach(status => {
        const selected = (s.cargoStatus === status) ? 'selected' : '';
        cargoStatusOptions += `<option value="${status}" ${selected}>${status}</option>`;
    });

    // --- Docs Status dropdown options ---
    let docsStatusOptions = '';
    const docsMaster = db.docsStatusMaster || ["Pending", "In Progress", "Ready", "Sent", "Received"];
    docsMaster.forEach(status => {
        const selected = (s.docsStatus === status) ? 'selected' : '';
        docsStatusOptions += `<option value="${status}" ${selected}>${status}</option>`;
    });

        let html = `<div class="dsr-btn-bar">
            <button class="btn btn-search" onclick="dsrSearch()">Search</button>
            <button class="btn btn-modify" onclick="dsrModify()">Modify</button>
            <button class="btn btn-addnew" onclick="dsrAddNew()">Add New</button>
            <button class="btn btn-clear-dsr" onclick="dsrClear()">Clear</button>
            <button class="btn btn-exit" onclick="closeModal('dsrModal')">Exit</button>
            ${isEdit ? `<button class="btn btn-update-dsr" onclick="saveDsrShipment(true)">Update</button>` : `<button class="btn btn-save-dsr" onclick="saveDsrShipment(false)">Save</button>`}
            <button class="btn btn-pdf-dsr" onclick="dsrPDF()">PDF</button>
            <button class="btn btn-dup-dsr" onclick="dsrDuplicate()">Duplicate</button>
            ${isEdit ? `<button class="btn btn-del-dsr" onclick="dsrDelete()">Delete</button>` : ''}
        </div>`;

    html += `<div style="background:#f8fafc;padding:10px;border:1px solid #cbd5e1;margin-bottom:10px;">
        <h3 style="text-align:center;font-weight:800;font-size:1.4rem;color:#1e3a8a;margin-bottom:10px;">GATEWAY EXIM <span style="font-weight:400;font-size:1rem;color:#64748b;"></span></h3>
        
        <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:space-between;margin-bottom:10px;">
            <div class="form-group" style="flex:1;"><label>Direction</label>
                <select id="dsr-direction" style="width:100%;"><option value="EXPORT" ${s.exportImport==='EXPORT'?'selected':''}>EXPORT</option><option value="IMPORT" ${s.exportImport==='IMPORT'?'selected':''}>IMPORT</option></select>
            </div>
            <div class="form-group" style="flex:1;"><label>Mode</label>
                <select id="dsr-mode" onchange="changeDsrMode()" style="width:100%;"><option value="SEA" ${mode==='SEA'?'selected':''}>SEA</option><option value="AIR" ${mode==='AIR'?'selected':''}>AIR</option></select>
            </div>
            <div class="form-group" style="flex:1;"><label>Service A</label>
                <select id="dsr-service-a" style="width:100%;"><option value="SELF SEAL" ${s.service1==='SELF SEAL'?'selected':''}>SELF SEAL</option><option value="DOCS STUFFING" ${s.service1==='DOCS STUFFING'?'selected':''}>DOCS STUFFING</option><option value="ON WHEEL CLEARANCE" ${s.service1==='ON WHEEL CLEARANCE'?'selected':''}>ON WHEEL CLEARANCE</option></select>
            </div>
            <div class="form-group" style="flex:1;"><label>Service B</label>
                <select id="dsr-service-b" style="width:100%;"><option value="CLEAN ONLY" ${s.service2==='CLEAN ONLY'?'selected':''}>CLEAN ONLY</option><option value="FORWARDING ONLY" ${s.service2==='FORWARDING ONLY'?'selected':''}>FORWARDING ONLY</option><option value="TRANSPORTATION ONLY" ${s.service2==='TRANSPORTATION ONLY'?'selected':''}>TRANSPORTATION ONLY</option></select>
            </div>
        </div>
        
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div class="form-group"><label>JOB NO.</label><input type="text" id="dsr-job-no" value="${s.jobNo || s.code || ''}" style="width:100%;"></div>
            <div class="form-group"><label>Date</label><input type="date" id="dsr-date" value="${s.date || ''}" style="width:100%;"></div>

            <div class="form-group"><label>Shipper</label><input type="text" id="dsr-shipper" value="${s.shipper || ''}" style="width:100%;"></div>
            <div class="form-group"><label>No. of Pkgs / Cntr.</label><input type="text" id="dsr-packages" value="${s.packages || ''}" style="width:100%;"></div>
            
            <div class="form-group"><label>Port of Loading (POL)</label><select id="dsr-pol" style="width:100%;"><option value="">Select</option></select></div>
            <div class="form-group"><label>Port of Discharge (POD)</label><select id="dsr-pod" style="width:100%;"><option value="">Select</option></select></div>
            
            <div class="form-group"><label>Shipping Line</label><select id="dsr-liner" style="width:100%;"><option value="">Select</option></select></div>
            <div class="form-group"><label>ETD</label><input type="date" id="dsr-etd" value="${s.etd || ''}" style="width:100%;"></div>
            
            <div class="form-group"><label>Shipping Bill NO.</label><input type="text" id="dsr-shipping-bill-no" value="${s.shippingBillNo || ''}" style="width:100%;"></div>
            <div class="form-group"><label>Date</label><input type="date" id="dsr-shipping-bill-date" value="${s.shippingBillDate || ''}" style="width:100%;"></div>
            
            <div class="form-group"><label>MBL NO.</label><input type="text" id="dsr-mbl-no" value="${s.mblNo || ''}" style="width:100%;"></div>
            <div class="form-group"><label>HBL NO</label><input type="text" id="dsr-hbl-no" value="${s.hblNo || ''}" style="width:100%;"></div>
            
            <div class="form-group"><label>Pickup Date</label><input type="date" id="dsr-pickup-date" value="${s.pickupDate || ''}" style="width:100%;"></div>
            <div class="form-group"><label>Clearance Date</label><input type="date" id="dsr-clearance-date" value="${s.clearanceDate || ''}" style="width:100%;"></div>
            
            <div class="form-group"><label>Docs hand. Date</label><input type="date" id="dsr-docs-hand-date" value="${s.docsHandDate || ''}" style="width:100%;"></div>
            <div class="form-group"><label>Gatein Date</label><input type="date" id="dsr-gatein-date" value="${s.gateinDate || ''}" style="width:100%;"></div>
            
            <div class="form-group"><label>DGD Indexing Date</label><input type="date" id="dsr-dgd-indexing-date" value="${s.dgdIndexingDate || ''}" style="width:100%;"></div>
            <div class="form-group"><label>BL Release Date</label><input type="date" id="dsr-bl-release-date" value="${s.blReleaseDate || ''}" style="width:100%;"></div>
            
            <div class="form-group" style="grid-column:span 2;display:flex;gap:10px;">
                <div style="flex:2;"><label>Vessel & ATD</label><input type="text" id="dsr-vessel-atd" value="${s.vesselAtd || ''}" style="width:100%;"></div>
                <div style="flex:1;"><label>ETA</label><input type="date" id="dsr-eta" value="${s.eta || ''}" style="width:100%;"></div>
            </div>
        </div>

        <!-- ===== STATUS DROPDOWNS (NEW) ===== -->
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px;border-top:1px solid #cbd5e1;padding-top:10px;">
            <div class="form-group"><label>Cargo Status</label>
                <select id="dsr-cargo-status" style="width:100%;">
                    ${cargoStatusOptions}
                </select>
            </div>
            <div class="form-group"><label>Docs Status</label>
                <select id="dsr-docs-status" style="width:100%;">
                    ${docsStatusOptions}
                </select>
            </div>
        </div>

        <div class="form-group" style="margin-top:8px;"><label>Remarks</label><textarea id="dsr-remarks" rows="2" style="width:100%;">${s.remarks || ''}</textarea></div>
        <input type="hidden" id="dsr-code" value="${s.code || ''}" />
    </div>
    <div id="dsr-charges-area"></div>`;

    return html;
}

// ===== OPEN DSR MODAL (UNIFIED) =====
function openDsrModal(mode, editIdx = null, prefill = null) {
    document.getElementById('addShipmentDropdown').classList.remove('show');
    addShipmentDropdownOpen = false;
    dsrEditIdx = editIdx;

    const body = document.getElementById('dsrModalBody');
    let s = {};
    let isEdit = false;

    if (prefill) {
        s = { ...prefill };
    } else if (editIdx !== null && db.shipments && db.shipments[editIdx]) {
        s = { ...db.shipments[editIdx] };
        mode = s.mode || mode;
        isEdit = true;
    }

    // Ensure mode is set
    s.mode = mode;

    body.innerHTML = buildDsrForm(s, mode, isEdit);
    document.getElementById('dsrModalTitle').textContent = `${mode} Shipment ~ DSR`;
    openModal('dsrModal');

    setTimeout(() => {
        const visibleCarriers = ['ALL', ...db.carriers.filter(c => !(db.hiddenItems.carriers || []).includes(c))];
        const visiblePol = db.pol.filter(p => !(db.hiddenItems.pol || []).includes(p));
        const visiblePod = db.pod.filter(p => !(db.hiddenItems.pod || []).includes(p));

        // Populate dropdowns
        populateSelect('dsr-pol', visiblePol, s.pol);
        populateSelect('dsr-pod', visiblePod, s.pod);
        populateSelect('dsr-liner', visibleCarriers, s.liner);

        // --- Case‑insensitive fallback for POL, POD, Liner ---
        if (s.pol) {
            const polSel = document.getElementById('dsr-pol');
            if (polSel) {
                const options = Array.from(polSel.options);
                const match = options.find(opt => opt.value.toLowerCase() === s.pol.toLowerCase());
                if (match) polSel.value = match.value;
                else if (options.some(opt => opt.value === s.pol)) polSel.value = s.pol;
            }
        }
        if (s.pod) {
            const podSel = document.getElementById('dsr-pod');
            if (podSel) {
                const options = Array.from(podSel.options);
                const match = options.find(opt => opt.value.toLowerCase() === s.pod.toLowerCase());
                if (match) podSel.value = match.value;
                else if (options.some(opt => opt.value === s.pod)) podSel.value = s.pod;
            }
        }
        if (s.liner) {
            const linerSel = document.getElementById('dsr-liner');
            if (linerSel) {
                const options = Array.from(linerSel.options);
                const match = options.find(opt => opt.value.toLowerCase() === s.liner.toLowerCase());
                if (match) linerSel.value = match.value;
                else if (options.some(opt => opt.value === s.liner)) linerSel.value = s.liner;
            }
        }

        renderDsrCharges(mode, s);
    }, 100);
}

// ===== DSR MODE SWITCH & CHARGES RENDER =====
function renderDsrCharges(mode, s = {}) {
    const area = document.getElementById('dsr-charges-area');
    if (!area) return;

    // For both SEA and AIR: show a simple placeholder
    area.innerHTML = `
        <div style="background: #f1f5f9; padding: 12px; border-radius: 6px; margin-top: 10px; text-align: center; color: #64748b;">
            <span style="font-weight: 600;">📦 No local charges – they are now managed in the Rate Sheet.</span>
        </div>
    `;
}

// ===== DSR HELPER FUNCTIONS =====

function calcAirMargin() {
    const sell = parseFloat(document.getElementById('air-sellpk').value) || 0;
    const buy = parseFloat(document.getElementById('air-buy-pk').value) || 0; // ✅ Fixed typo
    document.getElementById('air-margin').value = (sell - buy).toFixed(2);
}

function dsrSearch() {
    closeModal('dsrModal');
    const s = document.getElementById('dsr-search');
    if (s) { s.focus();
        s.select(); }
}

function dsrModify() {
    const code = document.getElementById('dsr-job-no').value.trim() || document.getElementById('dsr-code').value.trim();
    if (!code) return alert('No shipment to modify.');
    const idx = db.shipments.findIndex(s => s.jobNo === code || s.code === code);
    if (idx === -1) return alert('Shipment not found.');
    closeModal('dsrModal');
    openDsrModal(db.shipments[idx].mode, idx);
}

function dsrAddNew() {
    closeModal('dsrModal');
    openDsrModal('SEA');
}

function dsrClear() {
    if (confirm('Clear all fields?')) {
        document.querySelectorAll('#dsrModalBody input, #dsrModalBody select, #dsrModalBody textarea').forEach(el => {
            if (el.tagName === 'SELECT') el.selectedIndex = 0;
            else if (el.type === 'number') el.value = '0';
            else if (el.type === 'date') el.value = '';
            else el.value = '';
        });
        document.getElementById('dsr-code').value = '';
        document.getElementById('dsr-job-no').value = '';
        dsrEditIdx = null;
    }
}

function dsrDuplicate() {
    const code = document.getElementById('dsr-job-no').value.trim() || document.getElementById('dsr-code').value.trim();
    if (!code) return alert('No shipment to duplicate.');
    const idx = db.shipments.findIndex(s => s.jobNo === code || s.code === code);
    if (idx === -1) return alert('Shipment not found.');
    const copy = JSON.parse(JSON.stringify(db.shipments[idx]));
    copy.code = (copy.mode === 'SEA' ? 'SR-' : 'AR-') + Date.now().toString(36).toUpperCase();
    copy.jobNo = copy.code;
    copy.createdAt = new Date().toISOString();
    copy.lastModified = new Date().toISOString();
    db.shipments.push(copy);
    saveDB();
    closeModal('dsrModal');
    renderShipments();
    alert('Shipment duplicated! New JOB NO: ' + copy.code);
    autoBackup();
}

function dsrDelete() {
    const code = document.getElementById('dsr-job-no').value.trim() || document.getElementById('dsr-code').value.trim();
    if (!code) return alert('No shipment to delete.');
    const idx = db.shipments.findIndex(s => s.jobNo === code || s.code === code);
    if (idx === -1) return alert('Shipment not found.');
    if (confirm(`Delete shipment "${code}"?`)) {
        db.shipments.splice(idx, 1);
        saveDB();
        closeModal('dsrModal');
        renderShipments();
        alert('Shipment deleted.');
        autoBackup();
    }
}

function dsrPDF() {
    const code = document.getElementById('dsr-job-no').value.trim() || document.getElementById('dsr-code').value.trim();
    if (!code) return alert('No shipment data to generate PDF.');
    const idx = db.shipments.findIndex(s => s.jobNo === code || s.code === code);
    if (idx === -1) return alert('Shipment not found.');
    const s = db.shipments[idx];
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    doc.setFontSize(16);
    doc.text(`${s.mode} SHIPMENT DSR`, 105, 20, { align: 'center' });
    doc.setFontSize(10);
    let y = 35;
    const fields = [
        ['Job No', s.jobNo || s.code],
        ['Shipper', s.shipper],
        ['POL', s.pol],
        ['POD', s.pod],
        ['Shipping Line', s.liner],
        ['ETD', s.etd],
        ['ETA', s.eta],
        ['Cargo Status', s.cargoStatus],
        ['Docs Status', s.docsStatus]
    ];
    fields.forEach(([label, value]) => {
        doc.text(`${label}: ${value || '-'}`, 14, y);
        y += 7;
    });
    doc.save(`${s.mode}_Shipment_${s.code}.pdf`);
}

// ===== UNIFIED DSR SAVER =====
function saveDsrShipment(isUpdate) {
    try {
        const mode = document.getElementById('dsr-mode').value;
        const jobNo = document.getElementById('dsr-job-no').value.trim();
        const shipper = document.getElementById('dsr-shipper').value.trim();
        const pol = document.getElementById('dsr-pol').value;
        const pod = document.getElementById('dsr-pod').value;
        const liner = document.getElementById('dsr-liner').value;

        if (!jobNo || !shipper || !pol || !pod || !liner) {
            alert('Mandatory fields: JOB NO, Shipper, POL, POD, Shipping Line');
            return;
        }

        let code = document.getElementById('dsr-code').value.trim();
        if (!code) {
            code = (mode === 'SEA' ? 'SR-' : 'AR-') + Date.now().toString(36).toUpperCase();
        }

        // Common data – no charges
        const data = {
            mode: mode,
            type: mode,
            exportImport: document.getElementById('dsr-direction').value,
            service1: document.getElementById('dsr-service-a').value,
            service2: document.getElementById('dsr-service-b').value,
            jobNo: jobNo,
            code: code,
            date: document.getElementById('dsr-date').value,
            shipper: shipper,
            packages: document.getElementById('dsr-packages').value.trim(),
            pol: pol,
            pod: pod,
            liner: liner,
            etd: document.getElementById('dsr-etd').value,
            shippingBillNo: document.getElementById('dsr-shipping-bill-no').value.trim(),
            shippingBillDate: document.getElementById('dsr-shipping-bill-date').value,
            mblNo: document.getElementById('dsr-mbl-no').value.trim(),
            hblNo: document.getElementById('dsr-hbl-no').value.trim(),
            pickupDate: document.getElementById('dsr-pickup-date').value,
            clearanceDate: document.getElementById('dsr-clearance-date').value,
            docsHandDate: document.getElementById('dsr-docs-hand-date').value,
            gateinDate: document.getElementById('dsr-gatein-date').value,
            dgdIndexingDate: document.getElementById('dsr-dgd-indexing-date').value,
            blReleaseDate: document.getElementById('dsr-bl-release-date').value,
            vesselAtd: document.getElementById('dsr-vessel-atd').value.trim(),
            eta: document.getElementById('dsr-eta').value,
            remarks: document.getElementById('dsr-remarks').value.trim(),
            cargoStatus: document.getElementById('dsr-cargo-status').value,
            docsStatus: document.getElementById('dsr-docs-status').value,
            sales: getLoggedInUserName() || db.defaultUser || '',
            lastModified: new Date().toISOString(),
            // No charges for either mode
            carrierCharges: {},
            otherCharges: {},
            quoteCharges: {},
            sell: 0,
            buy: 0,
            sellPK: 0,
            buyPK: 0,
            margin: 0,
            containerNo: document.getElementById('dsr-container-no')?.value || '',
            grossWeight: 0,
            validEtd: ''
        };

        // Save to database
        const existing = db.shipments.findIndex(s => s.code === code && s.mode === mode);
        if (existing !== -1 && !isUpdate) {
            if (!confirm(`Shipment code "${code}" already exists. Do you want to overwrite?`)) {
                return;
            }
            db.shipments[existing] = { ...db.shipments[existing], ...data };
        } else if (isUpdate && dsrEditIdx !== null) {
            const idx = dsrEditIdx;
            if (idx !== undefined && db.shipments[idx]) {
                db.shipments[idx] = { ...db.shipments[idx], ...data };
            } else {
                alert('Edit index not found.');
                return;
            }
        } else {
            data.createdAt = new Date().toISOString();
            db.shipments.push(data);
        }

        saveDB();
        closeModal('dsrModal');
        renderShipments();
        alert(`${mode} Shipment saved successfully!`);
        autoBackup();
    } catch (e) {
        console.error('Error in saveDsrShipment:', e);
        alert('An error occurred while saving. Please check the console for details.');
    }
}

// ===== EDIT DSR SHIPMENT (CLICK FROM LIST) =====
function editDsrShipment(idx) {
    const s = db.shipments[idx];
    if (!s) {
        alert('Shipment not found.');
        return;
    }
    // Use the mode from the shipment data
    const mode = s.mode || s.type || 'SEA';
    openDsrModal(mode, idx);
}

// ===== Shipment List Rendering =====
function renderShipments() {
    const search = (document.getElementById('dsr-search')?.value || '').toLowerCase();
    const typeFilter = document.getElementById('dsr-type-filter')?.value || '';
    const statusFilter = document.getElementById('dsr-status-filter')?.value || '';
    const sortMode = document.getElementById('dsr-sort')?.value || 'date-desc';
    const perPage = parseInt(document.getElementById('dsr-per-page')?.value) || 25;
    const list = document.getElementById('dsr-list');
    const pagination = document.getElementById('dsr-pagination');
    
    let shipments = db.shipments || [];
    
    // Filter shipments
    shipments = shipments.filter(s => {
        const text = `${s.code||''} ${s.shipper||''} ${s.pol||''} ${s.pod||''} ${s.jobNo||''} ${s.mode||''}`.toLowerCase();
        if (search && !text.includes(search)) return false;
        if (typeFilter && s.mode !== typeFilter && s.type !== typeFilter) return false;
        if (statusFilter && s.cargoStatus !== statusFilter) return false;
        return true;
    });
    
    // Sort shipments
    shipments.sort((a, b) => {
        switch (sortMode) {
            case 'date-desc':
                return new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0);
            case 'date-asc':
                return new Date(a.date || a.createdAt || 0) - new Date(b.date || b.createdAt || 0);
            case 'code':
                return (a.code || '').localeCompare(b.code || '');
            case 'shipper':
                return (a.shipper || '').localeCompare(b.shipper || '');
            case 'pol':
                return (a.pol || '').localeCompare(b.pol || '');
            case 'pod':
                return (a.pod || '').localeCompare(b.pod || '');
            default:
                return 0;
        }
    });
    
    const total = shipments.length;
    const perPageVal = perPage === 0 ? total : perPage;
    const totalPages = perPageVal > 0 ? Math.ceil(total / perPageVal) : 1;
    let page = parseInt(sessionStorage.getItem('dsrPage') || '1');
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    sessionStorage.setItem('dsrPage', String(page));
    const start = (page - 1) * perPageVal;
    const pageData = shipments.slice(start, start + perPageVal);
    
    if (total === 0) {
        list.innerHTML = '<p style="color:var(--text-light);padding:20px;text-align:center;">No shipments found. Click "Add Shipment" to create one.</p>';
        pagination.innerHTML = '';
        return;
    }
    
    // Separate SEA and AIR
    const seaData = pageData.filter(s => s.mode === 'SEA' || s.type === 'SEA');
    const airData = pageData.filter(s => s.mode === 'AIR' || s.type === 'AIR');
    
    let html = '';
    if (seaData.length > 0) {
        html += `<div class="dsr-section-header sea-header">🚢 SEA Shipments <span class="badge">${seaData.length}</span></div>`;
        html += buildShipmentTable(seaData);
    }
    if (airData.length > 0) {
        html += `<div class="dsr-section-header">✈️ AIR Shipments <span class="badge">${airData.length}</span></div>`;
        html += buildShipmentTable(airData);
    }
    
    list.innerHTML = html;
    
    // Pagination
    if (totalPages <= 1) {
        pagination.innerHTML = '';
    } else {
        let pagHtml = `<button class="page-btn" onclick="changeDsrPage(${page - 1})" ${page === 1 ? 'disabled' : ''}>‹ Prev</button>`;
        pagHtml += `<span class="page-info">Page ${page} of ${totalPages} (${total} records)</span>`;
        pagHtml += `<button class="page-btn" onclick="changeDsrPage(${page + 1})" ${page === totalPages ? 'disabled' : ''}>Next ›</button>`;
        pagination.innerHTML = pagHtml;
    }
}
function changeDsrPage(page) {
    const perPage = parseInt(document.getElementById('dsr-per-page')?.value) || 25;
    const total = (db.shipments || []).length;
    const perPageVal = perPage === 0 ? total : perPage;
    const totalPages = perPageVal > 0 ? Math.ceil(total / perPageVal) : 1;
    if (page < 1 || page > totalPages) return;
    sessionStorage.setItem('dsrPage', String(page));
    renderShipments();
}
function buildShipmentTable(data) {
    const colMap = {
        'code': { label: 'JOB NO.', key: 'code' },
        'shipper': { label: 'Shipper', key: 'shipper' },
        'pol': { label: 'POL', key: 'pol' },
        'pod': { label: 'POD', key: 'pod' },
        'liner': { label: 'Shipping Line', key: 'liner' },
        'cargoStatus': { label: 'Cargo Status', key: 'cargoStatus' },
        'docsStatus': { label: 'Docs Status', key: 'docsStatus' }
    };

    let headerHtml = '<tr><th>SR No.</th>';
    dsrColumns.forEach(col => {
        if (col !== 'actions' && colMap[col]) {
            headerHtml += `<th>${colMap[col].label}</th>`;
        }
    });
    if (dsrColumns.includes('actions')) headerHtml += `<th>Actions</th>`;
    headerHtml += '</tr>';

    let html = `<table class="dsr-table"><thead>${headerHtml}</thead><tbody>`;
    data.forEach((s, idx) => {
        const realIdx = db.shipments.indexOf(s);
        html += `<tr><td>${idx + 1}</td>`;
        dsrColumns.forEach(col => {
            if (col === 'actions') return;
            if (col === 'code') {
                html += `<td><a href="javascript:void(0)" onclick="editDsrShipment(${realIdx})" style="color:var(--primary);font-weight:700;text-decoration:underline;cursor:pointer;">${s.jobNo || s.code || '-'}</a></td>`;
            } else {
                const val = s[col] || '-';
                if (col === 'cargoStatus') {
                    const cls = val === 'Delivered' ? 'status-active' : val === 'In Transit' ? 'status-expiring' : 'status-expired';
                    html += `<td><span class="status-badge ${cls}">${val}</span></td>`;
                } else {
                    html += `<td>${val}</td>`;
                }
            }
        });
        if (dsrColumns.includes('actions')) {
            html += `<td>
                <button class="btn btn-sm btn-preview" onclick="previewDsrShipment(${realIdx})">👁</button>
                <button class="btn btn-sm btn-pdf" onclick="downloadDsrPDF(${realIdx})">📄</button>
                <button class="btn btn-sm btn-duplicate" onclick="duplicateDsrShipment(${realIdx})">📋</button>
                <button class="btn btn-sm btn-preview" onclick="editDsrShipment(${realIdx})">✏️</button>
                <button class="btn btn-sm btn-clear" onclick="deleteDsrShipment(${realIdx})">×</button>
            </td>`;
        }
        html += `</tr>`;
    });
    html += '</tbody></table>';
    return html;
}

function openDsrByCode(code) {
    const idx = db.shipments.findIndex(s => s.jobNo === code || s.code === code);
    if (idx === -1) {
        alert('Shipment not found.');
        return;
    }
    editDsrShipment(idx);
}
function editDsrShipment(idx) {
    const s = db.shipments[idx];
    if (!s) return alert('Shipment not found.');
    if (s.type === 'SEA') {
        openSeaDsrModal(idx);
    } else if (s.type === 'AIR') {
        openAirDsrModal(idx);
    } else {
        openShipmentModal(idx);
    }
}


function duplicateDsrShipment(idx) {
    const s = db.shipments[idx];
    if (!s) return alert('Shipment not found.');
    const copy = JSON.parse(JSON.stringify(s));
    const prefix = s.type === 'SEA' ? 'SR-' : 'AR-';
    copy.code = prefix + Date.now().toString(36).toUpperCase();
    copy.createdAt = new Date().toISOString();
    copy.lastModified = new Date().toISOString();
    db.shipments.push(copy);
    saveDB();
    renderShipments();
    alert(`${s.type} Shipment duplicated! New code: ${copy.code}`);
    autoBackup();
}
function deleteDsrShipment(idx) {
    const s = db.shipments[idx];
    if (!s) return alert('Shipment not found.');
    if (confirm(`Delete ${s.type} shipment "${s.code}"?`)) {
        db.shipments.splice(idx, 1);
        saveDB();
        renderShipments();
        alert('Shipment deleted.');
        autoBackup();
    }
}
function clearDSRFilters() {
    document.getElementById('dsr-search').value = '';
    document.getElementById('dsr-type-filter').value = '';
    document.getElementById('dsr-status-filter').value = '';
    document.getElementById('dsr-sort').value = 'date-desc';
    document.getElementById('dsr-per-page').value = '25';
    sessionStorage.setItem('dsrPage', '1');
    renderShipments();
}
// ===== CORRECTED addShipmentFromQuote =====
function addShipmentFromQuote(target, mode, idx) {
    const quote = db[target][mode][idx];
    if (!quote) return alert('Quote not found.');

    const freightKey = mode === 'air' ? 'AIR FREIGHT' : 'FREIGHT';
    let rawSellAmt = 0, rawSellCur = 'INR', rawBuyAmt = 0, rawBuyCur = 'INR';

    // --- 1. Extract raw freight amounts ---
    if (quote.charges && quote.charges[freightKey]) {
        const f = quote.charges[freightKey];
        rawSellAmt = parseFloat(f.amount) || 0;
        rawSellCur = f.currency || 'INR';
        rawBuyAmt = parseFloat(f.buyAmount) || rawSellAmt;
        rawBuyCur = f.buyCurrency || rawSellCur || 'INR';
    }

    // --- 2. Build base shipment ---
    const baseShipment = {
        exportImport: 'EXPORT',
        mode: mode.toUpperCase(),
        service1: 'SELF SEAL',
        service2: 'CLEAN ONLY',
        jobNo: quote.quoteNumber || 'JOB-' + Date.now().toString(36).toUpperCase(),
        date: new Date().toISOString().split('T')[0],
        shipper: quote.client || '',
        packages: '',
        pol: quote.pol || '',
        pod: quote.pod || '',
        liner: quote.carrier || '',
        etd: '',
        shippingBillNo: '',
        shippingBillDate: '',
        mblNo: '',
        hblNo: '',
        pickupDate: '',
        clearanceDate: '',
        docsHandDate: '',
        gateinDate: '',
        dgdIndexingDate: '',
        blReleaseDate: '',
        vesselAtd: '',
        eta: '',
        remarks: quote.remarks || '',
        code: quote.quoteNumber || 'SR-' + Date.now().toString(36).toUpperCase(),
        cargoStatus: (db.cargoStatusMaster && db.cargoStatusMaster[0]) || 'Booked',
        docsStatus: (db.docsStatusMaster && db.docsStatusMaster[0]) || 'Pending',
        sales: getLoggedInUserName() || db.defaultUser || '',
        weight: quote.weight || 0,
        carrierCharges: null,
        otherCharges: null,
        quoteCharges: null,
        sell: 0,
        buy: 0,
        containerNo: '',
        sellPK: 0,
        buyPK: 0,
        grossWeight: 0,
        validEtd: ''
    };

    // --- 3. Mode-specific filling ---
    if (mode === 'sea') {
        let sellAmtUSD = rawSellAmt;
        let buyAmtUSD = rawBuyAmt;
        if (rawSellCur !== 'USD') {
            const inrValue = sellAmtUSD * (db.exchangeRates[rawSellCur] || 1);
            sellAmtUSD = inrValue / (db.exchangeRates.USD || 94.5);
        }
        if (rawBuyCur !== 'USD') {
            const inrValue = buyAmtUSD * (db.exchangeRates[rawBuyCur] || 1);
            buyAmtUSD = inrValue / (db.exchangeRates.USD || 94.5);
        }
        const s = {
            ...baseShipment,
            type: 'SEA',
            sell: sellAmtUSD,
            buy: buyAmtUSD,
            containerNo: quote.container || '',
            packages: quote.container || '',
            carrierCharges: {
                THC: 0, SEAWAY: 0, SEAL: 0, ETS: 0, MUC: 0,
                HAZDOCS: 0, DOCS: 0, AMS: 0,
                GRWEIGHT: parseFloat(quote.weight) || 0
            },
            otherCharges: {
                CFS: 0, CLEARANCE: 0, VGM: 0, TOLL: 0,
                LASCHO: 0, HAZSTICKER: 0, TRANSPORTATION: 0,
                LOLO: 0, OTHERLOCAL: 0, ONWHEEL: 0, OTHERLOCAL3: 0
            }
        };
        const carrierMap = {
            'THC': 'THC', 'SEAL': 'SEAL', 'MUC': 'MUC', 'DOCS': 'DOCS',
            'SEAWAY BL': 'SEAWAY', 'SEAWAY': 'SEAWAY',
            'ETS': 'ETS', 'HAZ DOCS': 'HAZDOCS', 'AMS': 'AMS'
        };
        const otherMap = {
            'CFS': 'CFS', 'CLEARANCE': 'CLEARANCE', 'VGM': 'VGM', 'TOLL': 'TOLL',
            'LASHING & CHOKING': 'LASCHO', 'HAZ STICKER': 'HAZSTICKER',
            'ON WHEEL': 'ON WHEEL', 'TRANSPORTATION': 'TRANSPORTATION',
            'LOLO': 'LOLO', 'OTHER LOCALS': 'OTHERLOCAL'
        };
        const charges = quote.charges || {};
        Object.entries(carrierMap).forEach(([key, val]) => {
            if (charges[key]) s.carrierCharges[val] = parseFloat(charges[key].amount) || 0;
        });
        Object.entries(otherMap).forEach(([key, val]) => {
            if (charges[key]) s.otherCharges[val] = parseFloat(charges[key].amount) || 0;
        });
        db.shipments.push(s);
        saveDB();
        // ✅ Mark quote as converted ONLY if it came from "Rates Quoted"
        if (target === 'rates') {
            quote.convertedToShipment = true;
            saveDB();
        }
        openDsrModal('SEA', null, s);
    }
    else if (mode === 'air') {
        const rawSellPK = rawSellAmt;
        const rawBuyPK = rawBuyAmt;
        const s = {
            ...baseShipment,
            type: 'AIR',
            sellPK: rawSellPK,
            buyPK: rawBuyPK,
            grossWeight: parseFloat(quote.weight) || 0,
            validEtd: quote.validityDate || '',
            packages: quote.pallets ? String(quote.pallets) : '',
            quoteCharges: {
                CARTAGE: 0, MCC: 0, XRAY: 0, GATEPASS: 0, ASI: 0, AMS: 0, PALLET: 0,
                LOADING_UNLOADING: 0, DGFEE: 0, DGAGENT: 0, PLY: 0, REPACKING: 0, AWB: 0, TEDI: 0,
                ADD_SURCHARGE: 0, TRANSPORT: 0, CLEARANCE: 0, TERMINAL_TRANSFER: 0
            }
        };
        const airMap = {
            'CARTAGE': 'CARTAGE', 'MCC': 'MCC', 'XRAY': 'XRAY',
            'GATE PASS': 'GATEPASS', 'ASI GMAX': 'ASI', 'AMS': 'AMS',
            'PALLETISATION': 'PALLET', 'LOADING & UNLOADING': 'LOADING_UNLOADING',
            'DG FEES': 'DGFEE', 'DG AGENT FEE': 'DGAGENT',
            'PLY': 'PLY', 'REPACKING': 'REPACKING', 'AWB FEES': 'AWB',
            'TEDI': 'TEDI', 'ADD.SURCHARGE': 'ADD_SURCHARGE', 'TRANSPORATION': 'TRANSPORT',
            'CUSTOM CLEARANCE': 'CLEARANCE', 'TERMINAL TRANSFER': 'TERMINAL_TRANSFER'
        };
        const charges = quote.charges || {};
        Object.entries(airMap).forEach(([key, val]) => {
            if (charges[key]) s.quoteCharges[val] = parseFloat(charges[key].amount) || 0;
        });
        db.shipments.push(s);
        saveDB();
        // ✅ Mark quote as converted ONLY if it came from "Rates Quoted"
        if (target === 'rates') {
            quote.convertedToShipment = true;
            saveDB();
        }
        openDsrModal('AIR', null, s);
    }
    else {
        alert('Unsupported mode: ' + mode);
    }
}

// ===== CORRECTED editDsrShipment =====
function editDsrShipment(idx) {
    const s = db.shipments[idx];
    if (!s) return alert('Shipment not found.');
    // Use the unified modal with the shipment's mode
    openDsrModal(s.type || 'SEA', idx);
}

function convertQuoteToShipmentByIndex(target, mode, idx) {
    addShipmentFromQuote(target, mode, idx);
}
// Override renderRecords for enhanced views
const originalRenderRecords = renderRecords;
renderRecords = function(target) {
    if (target === 'rates') {
        renderEnhancedRates();
        return;
    }
    if (target === 'drafts') {
        renderEnhancedDrafts();
        return;
    }
    if (target === 'rrdrafts') {
        renderEnhancedRRDrafts();
        return;
    }
    // Fallback for other targets
    originalRenderRecords(target);
};
// ===== NEW: Claymorphism Shipment Preview HTML =====

const originalSaveDB = saveDB;
saveDB = function() {
    const result = originalSaveDB();
    const dsrPanel = document.getElementById('dsr');
    if (dsrPanel && dsrPanel.classList.contains('active')) {
        setTimeout(renderShipments, 100);
    }
    return result;
};
const originalCloseModal = closeModal;
closeModal = function(id) {
    originalCloseModal(id);
    if (id === 'seaDsrModal' || id === 'airDsrModal') {
        const dsrPanel = document.getElementById('dsr');
        if (dsrPanel && dsrPanel.classList.contains('active')) {
            setTimeout(renderShipments, 200);
        }
    }
};

// ==================== BL DRAFT ====================
// ===== OPEN BL MODAL =====
function openBLModal(editIdx = null, shipmentIdx = null, mode = 'SEA') {
    try {
        const modal = document.getElementById('blModal');
        const title = document.getElementById('blModalTitle');
        const body = document.getElementById('blModalBody');
        if (!modal || !title || !body) {
            console.error('BL Modal elements missing');
            return alert('BL Draft modal not found – please refresh the page.');
        }
        if (!db.bldrafts) db.bldrafts = [];
        if (!db.shipments) db.shipments = [];
        if (!db.pol) db.pol = [];
        if (!db.pod) db.pod = [];
        if (!db.containers) db.containers = [];
        if (!db.carriers) db.carriers = [];
        if (!db.hiddenItems) db.hiddenItems = { pol: [], pod: [], containers: [], carriers: [] };
        if (!db.hiddenItems.pol) db.hiddenItems.pol = [];
        if (!db.hiddenItems.pod) db.hiddenItems.pod = [];
        if (!db.hiddenItems.containers) db.hiddenItems.containers = [];
        if (!db.hiddenItems.carriers) db.hiddenItems.carriers = [];

        const today = new Date().toISOString().split('T')[0];
		let b = { 
			status: 'Draft', 
			issueDate: today,
			blDate: today,
			mode: mode,
			forwardingAgent: db.companyName || 'GATEWAY EXIM'   // <-- ADD THIS LINE
		};

        let isEdit = false;

        if (editIdx !== null && db.bldrafts[editIdx]) {
            b = { ...db.bldrafts[editIdx] };
            isEdit = true;
            title.textContent = 'Edit BL Draft';
        } else {
            title.textContent = 'Bill of Lading Draft';
            if (shipmentIdx !== null && db.shipments[shipmentIdx]) {
                const s = db.shipments[shipmentIdx];
                b.shipmentCode = s.code || '';
                b.shipperName = s.shipper || '';
                b.consigneeName = s.shipper || '';
                b.vessel = s.liner || '';
                b.pol = s.pol || '';
                b.pod = s.pod || '';
                b.placeOfIssue = s.pol || '';
                b.containers = [];
                if (s.containerNo) {
                    b.containers.push({ containerNo: s.containerNo, type: '', seal: '', grossWeight: s.weight || 0, netWeight: 0, volume: 0, packages: '' });
                }
                if (s.mode === 'AIR' || s.type === 'AIR') {
                    b.mode = 'AIR';
                }
            }
        }

        const ports = db.pod.filter(p => !db.hiddenItems.pod.includes(p)).sort();
        const pols = db.pol.filter(p => !db.hiddenItems.pol.includes(p)).sort();
        const containers = db.containers.filter(c => !db.hiddenItems.containers.includes(c)).sort();

        // Build container rows (only for SEA)
        let containerRows = '';
        if (b.mode === 'SEA') {
            (b.containers || []).forEach((c, i) => {
                containerRows += `<div class="bl-container-row" data-row="${i}">
                    <input type="text" class="bl-cont-no" value="${c.containerNo||''}" placeholder="Container No." />
                    <select class="bl-cont-type"><option value="">Type</option>${containers.map(t => `<option value="${t}" ${c.type===t?'selected':''}>${t}</option>`).join('')}</select>
                    <input type="text" class="bl-cont-seal" value="${c.seal||''}" placeholder="Seal" />
                    <input type="number" class="bl-cont-weight" value="${c.grossWeight||''}" placeholder="Gross Wt (KGS)" step="0.01" oninput="updateBLTotals()" />
                    <input type="number" class="bl-cont-net-weight" value="${c.netWeight||''}" placeholder="Net Wt (KGS)" step="0.01" oninput="updateBLTotals()" />
                    <input type="number" class="bl-cont-volume" value="${c.volume||''}" placeholder="Volume (CBM)" step="0.01" oninput="updateBLTotals()" />
                    <input type="text" class="bl-cont-packages" value="${c.packages||''}" placeholder="Packages" />
                    <button class="btn btn-sm btn-clear" onclick="this.closest('.bl-container-row').remove(); updateBLTotals();">×</button>
                </div>`;
            });
        }

        const companyName = db.companyName || 'GATEWAY EXIM';

        // Movement options
        const seaMovements = ['OCEAN (PORT TO PORT)','OCEAN (PORT TO RAMP)','OCEAN (PORT TO DOOR)','OCEAN (RAMP TO RAMP)'];
        const airMovements = ['AIR (PORT TO PORT)','AIR (PORT TO DOOR)','AIR (DOOR TO DOOR)'];
        const movementOptions = b.mode === 'AIR' ? airMovements : seaMovements;

        const modeSelectHtml = isEdit ? `<input type="hidden" id="bl-mode" value="${b.mode}" />` :
            `<select id="bl-mode" onchange="onBLModeChange()">
                <option value="SEA" ${b.mode === 'SEA' ? 'selected' : ''}>🚢 SEA</option>
                <option value="AIR" ${b.mode === 'AIR' ? 'selected' : ''}>✈️ AIR</option>
            </select>`;

        const showContainerSection = b.mode === 'SEA';

        // Determine voyage input type and value
        const voyageInputType = b.mode === 'AIR' ? 'date' : 'text';
        const voyageInputValue = b.voyage || '';

        body.innerHTML = `
            <!-- TOP ROW -->
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:10px; margin-bottom:16px;">
                <div class="form-group"><label>Mode</label>${modeSelectHtml}</div>
                <div class="form-group"><label>BL Number *</label><input type="text" id="bl-number" value="${b.blNumber || 'HBL'+Date.now().toString(36).toUpperCase()}" style="font-weight:bold;font-size:1.1rem;" /></div>
                <div class="form-group"><label>Date *</label><input type="date" id="bl-date" value="${b.blDate || today}" style="font-weight:bold;" /></div>
                <div class="form-group"><label>Booking No.</label><input type="text" id="bl-booking-no" value="${b.bookingNo||''}" /></div>
            </div>

			<!-- Export References & Forwarding Agent & Show Agent Toggle -->
			<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-bottom:16px;">
				<div class="form-group"><label>Export References</label><input type="text" id="bl-export-ref" value="${b.exportRef||''}" /></div>
				<div class="form-group"><label>Forwarding Agent / FMC No.</label><input type="text" id="bl-forwarding-agent" value="${b.forwardingAgent || db.companyName || 'GATEWAY EXIM'}" style="width:100%;" /></div>
				<div class="form-group" style="display:flex; align-items:center; gap:8px; margin-top:6px;">
					<input type="checkbox" id="bl-show-agent" ${b.showAgent !== false ? 'checked' : ''} style="width:18px; height:18px;" />
					<label for="bl-show-agent" style="font-weight:600; font-size:0.8rem; cursor:pointer;">Show Agent Details</label>
				</div>
			</div>

            <!-- Shipper & Consignee -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px; background:var(--bg); padding:12px; border-radius:8px;">
                <div>
                    <h4 style="color:var(--primary); margin-bottom:6px;">Shipper / Exporter</h4>
                    <div class="form-group"><label>Name</label><input type="text" id="bl-shipper-name" value="${b.shipperName||''}" style="width:100%;" /></div>
                    <div class="form-group"><label>Address</label><textarea id="bl-shipper-addr" rows="3" style="width:100%;">${b.shipperAddr||''}</textarea></div>
                </div>
                <div>
                    <h4 style="color:var(--primary); margin-bottom:6px;">Consignee</h4>
                    <div class="form-group"><label>Name</label><input type="text" id="bl-consignee-name" value="${b.consigneeName||''}" style="width:100%;" /></div>
                    <div class="form-group"><label>Address</label><textarea id="bl-consignee-addr" rows="3" style="width:100%;">${b.consigneeAddr||''}</textarea></div>
                </div>
            </div>

            <!-- Notify Party & Delivery Agent -->
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:16px; background:var(--bg); padding:12px; border-radius:8px;">
                <div>
                    <h4 style="color:var(--primary); margin-bottom:6px;">Notify Party</h4>
                    <div class="form-group"><label>Name</label><input type="text" id="bl-notify-name" value="${b.notifyName||''}" style="width:100%;" /></div>
                    <div class="form-group"><label>Address</label><textarea id="bl-notify-addr" rows="3" style="width:100%;">${b.notifyAddr||''}</textarea></div>
                </div>
                <div>
                    <h4 style="color:var(--primary); margin-bottom:6px;">Delivery Agent</h4>
                    <div class="form-group"><label>Name</label><input type="text" id="bl-delivery-agent-name" value="${b.deliveryAgentName||''}" style="width:100%;" /></div>
                    <div class="form-group"><label>Address</label><textarea id="bl-delivery-agent-addr" rows="3" style="width:100%;">${b.deliveryAgentAddr||''}</textarea></div>
                </div>
            </div>

            <!-- Vessel & Port Details -->
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr 1fr; gap:10px; margin-bottom:16px; background:var(--bg); padding:12px; border-radius:8px;" id="bl-vessel-row">
                <div class="form-group"><label id="bl-label-pre-carriage">PRE-CARRIAGE BY</label><input type="text" id="bl-pre-carriage" value="${b.preCarriage||''}" /></div>
                <div class="form-group"><label id="bl-label-receipt">PLACE OF RECEIPT</label><input type="text" id="bl-receipt" value="${b.placeOfReceipt||(b.mode==='AIR'?'AIRPORT, INDIA':'HAZIRA PORT, INDIA')}" /></div>
                <div class="form-group"><label id="bl-label-vessel">${b.mode==='AIR'?'15. FLIGHT NO.':'VESSEL NAME'}</label><input type="text" id="bl-vessel" value="${b.vessel||''}" /></div>
                <div class="form-group">
                    <label id="bl-label-voyage">${b.mode==='AIR'?'DATE':'VOYAGE NO.'}</label>
                    <input type="${voyageInputType}" id="bl-voyage" value="${voyageInputValue}" ${b.mode==='AIR' ? '' : 'placeholder="e.g., 123W"'} style="width:100%;" />
                </div>
                <div class="form-group"><label id="bl-label-pol">${b.mode==='AIR'?'16. AIRPORT OF DEPARTURE':'PORT OF LOADING'}</label><input type="text" id="bl-pol" value="${b.pol||''}" list="bl-pol-list" /></div>
                <datalist id="bl-pol-list">${pols.map(p => `<option value="${p}">`).join('')}</datalist>
                <div class="form-group"><label id="bl-label-pod">${b.mode==='AIR'?'17. AIRPORT OF DESTINATION':'PORT OF DISCHARGE'}</label><input type="text" id="bl-pod" value="${b.pod||''}" list="bl-pod-list" /></div>
                <datalist id="bl-pod-list">${ports.map(p => `<option value="${p}">`).join('')}</datalist>
                <div class="form-group"><label id="bl-label-delivery">18. PLACE OF DELIVERY</label><input type="text" id="bl-delivery" value="${b.placeOfDelivery||''}" /></div>
                <div class="form-group"><label id="bl-label-freight">11. FREIGHT PAYABLE</label><select id="bl-freight-payable"><option value="ORIGIN" ${b.freightPayable==='ORIGIN'?'selected':''}>ORIGIN</option><option value="DESTINATION" ${b.freightPayable==='DESTINATION'?'selected':''}>DESTINATION</option></select></div>
                <div class="form-group" style="grid-column:1/-1;">
                    <label id="bl-label-movement">12. TYPE OF MOVEMENT</label>
                    <select id="bl-movement">${movementOptions.map(m => `<option value="${m}" ${b.movement === m ? 'selected' : ''}>${m}</option>`).join('')}</select>
                </div>
            </div>

            <!-- Goods Details -->
            <div style="margin-bottom:16px; background:var(--bg); padding:12px; border-radius:8px;">
                <h4 style="color:var(--primary); margin-bottom:6px;">Goods Details</h4>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px;">
                    <div class="form-group"><label>Marks & Numbers</label><input type="text" id="bl-marks" value="${b.marks||''}" /></div>
                    <div class="form-group"><label>No. of Packages</label><input type="text" id="bl-packages-count" value="${b.packagesCount||''}" /></div>
                    <div class="form-group" style="grid-column:1/-1;"><label>Description of Goods</label><textarea id="bl-goods" rows="3" style="width:100%;">${b.goodsDesc||''}</textarea></div>
                    <div class="form-group"><label>Gross Weight (KGS)</label><input type="number" id="bl-gross-weight" value="${b.grossWeight||''}" step="0.01" oninput="updateBLTotals()" /></div>
                    <div class="form-group"><label>Measurement (CBM)</label><input type="number" id="bl-measurement" value="${b.measurement||''}" step="0.01" oninput="updateBLTotals()" /></div>
                </div>
            </div>

            <!-- Container Details (only for SEA) -->
            ${showContainerSection ? `
            <div style="margin-bottom:16px; background:var(--bg); padding:12px; border-radius:8px;">
                <h4 style="color:var(--primary); margin-bottom:6px;">Container Details <button class="btn btn-sm btn-success" onclick="addBLContainerRow()">+ Add Row</button></h4>
                <div id="bl-container-rows">${containerRows}</div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:10px;">
                    <div class="form-group"><label>Total Gross Weight (KGS)</label><input type="text" id="bl-total-weight" readonly style="background:#f1f5f9;font-weight:bold;" /></div>
                    <div class="form-group"><label>Total Measurement (CBM)</label><input type="text" id="bl-total-volume" readonly style="background:#f1f5f9;font-weight:bold;" /></div>
                </div>
            </div>
            ` : `
            <div style="display:none;"></div>
            `}

            <!-- Freight & Issuance -->
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:10px; margin-bottom:16px; background:var(--bg); padding:12px; border-radius:8px;">
                <div>
                    <h4 style="color:var(--primary); margin-bottom:6px;">Freight & Charges</h4>
                    <div class="form-group"><label>Freight Terms</label><select id="bl-freight"><option value="Prepaid" ${b.freightType==='Prepaid'?'selected':''}>Prepaid</option><option value="Collect" ${b.freightType==='Collect'?'selected':''}>Collect</option></select></div>
                    <div class="form-group"><label>Amount</label><input type="number" id="bl-freight-amt" value="${b.freightAmount||''}" step="0.01" /></div>
                    <div class="form-group"><label>Currency</label><select id="bl-freight-cur">${getCurrencyOptions(b.freightCurrency||'INR')}</select></div>
                </div>
                <div>
                    <h4 style="color:var(--primary); margin-bottom:6px;">Issuance Details</h4>
                    <div class="form-group"><label>No. of Original B/L</label><select id="bl-originals"><option value="1" ${b.numOriginals===1?'selected':''}>1</option><option value="2" ${b.numOriginals===2?'selected':''}>2</option><option value="3" ${b.numOriginals===3?'selected':''}>3</option></select></div>
                    <div class="form-group"><label>Place of Issue</label><input type="text" id="bl-place" value="${b.placeOfIssue||''}" /></div>
                    <div class="form-group"><label>Issue Date</label><input type="date" id="bl-issue-date" value="${b.issueDate||today}" /></div>
                    <div class="form-group"><label>Signature (Agent)</label><input type="text" id="bl-signature" value="${b.signature||companyName}" style="width:100%;" /></div>
                </div>
            </div>

            <!-- Buttons -->
            <div style="margin-top:16px; text-align:right; display:flex; gap:8px; justify-content:flex-end;">
                <button class="btn btn-clear" onclick="closeModal('blModal')">Cancel</button>
                <button class="btn btn-success" onclick="saveBLDraft(${editIdx !== null ? editIdx : 'null'})">💾 Save Draft</button>
                ${isEdit ? `<button class="btn btn-quoted" onclick="finalizeBLDraft(${editIdx})">✅ Finalize</button>` : ''}
            </div>
        `;
        openModal('blModal');
        setTimeout(updateBLTotals, 200);
        if (!isEdit) {
            updateBLLabels(b.mode);
        }
    } catch (e) {
        console.error('Error opening BL modal:', e);
        alert('Failed to open BL Draft. Please check the console for details.');
    }
}

// Helper to update labels when mode changes
function onBLModeChange() {
    const mode = document.getElementById('bl-mode').value;
    const movementSelect = document.getElementById('bl-movement');
    const seaMovements = ['OCEAN (PORT TO PORT)','OCEAN (PORT TO RAMP)','OCEAN (PORT TO DOOR)','OCEAN (RAMP TO RAMP)'];
    const airMovements = ['AIR (PORT TO PORT)','AIR (PORT TO DOOR)','AIR (DOOR TO DOOR)'];
    const options = mode === 'AIR' ? airMovements : seaMovements;
    const currentVal = movementSelect.value;
    movementSelect.innerHTML = options.map(m => `<option value="${m}" ${currentVal === m ? 'selected' : ''}>${m}</option>`).join('');
    updateBLLabels(mode); // This will now also change the voyage input type
}

function updateBLLabels(mode) {
    const isAir = mode === 'AIR';
    document.getElementById('bl-label-vessel').textContent = isAir ? 'FLIGHT NO.' : 'VESSEL NAME';
    document.getElementById('bl-label-voyage').textContent = isAir ? 'DATE' : 'VOYAGE NO.';
    document.getElementById('bl-label-pol').textContent = isAir ? 'AIRPORT OF DEPARTURE' : 'PORT OF LOADING';
    document.getElementById('bl-label-pod').textContent = isAir ? 'AIRPORT OF DESTINATION' : 'PORT OF DISCHARGE';
    document.getElementById('bl-label-receipt').textContent = isAir ? ' PLACE OF RECEIPT (AIRPORT)' : 'PLACE OF RECEIPT';
    
    // Toggle voyage input type
    const voyageInput = document.getElementById('bl-voyage');
    if (voyageInput) {
        if (isAir) {
            voyageInput.type = 'date';
            voyageInput.placeholder = '';
        } else {
            voyageInput.type = 'text';
            voyageInput.placeholder = 'e.g., 123W';
        }
    }
    // Update container placeholders
    document.querySelectorAll('#bl-container-rows .bl-cont-no').forEach(el => {
        el.placeholder = isAir ? 'ULD No.' : 'Container No.';
    });
}


// ==================== DATABASE RENDER ====================
function renderDatabase() {
    document.getElementById('company-name').value = db.companyName || '';
    document.getElementById('company-address').value = db.companyAddress || '';
    document.getElementById('current-company-name').textContent = db.companyName || 'Not Set';
    document.getElementById('default-user-input').value = db.defaultUser || '';
    document.getElementById('current-default-user').textContent = db.defaultUser || 'Not Set';
    renderExchangeRates();
    switchMasterTab(currentMasterTab);
    renderUserTable();
    const d = db.defaults || {};
	loadDefaultCC();

    document.getElementById('def-gst').value = d.gst || 0;
    document.getElementById('def-insurance').value = d.insurance || 0;
    document.getElementById('def-profit').value = d.profitMargin || 0;
    document.getElementById('def-us-duty').value = d.usDuty || 0;
    document.getElementById('def-us-tariff').value = d.usTariff || 0;
    document.getElementById('def-us-mpf').value = d.usMPF || 0;
    document.getElementById('def-us-hmf').value = d.usHMF || 0;
    document.getElementById('def-in-duty').value = d.inDuty || 0;
    document.getElementById('def-in-social').value = d.inSocialWelfare || 0;
    document.getElementById('def-drawback').value = d.drawback || 0;
    document.getElementById('def-rodtep').value = d.rodtep || 0;

    const curSelect = document.getElementById('def-currency');
    if (curSelect) {
        curSelect.innerHTML = Object.keys(db.exchangeRates).map(c =>
            `<option value="${c}" ${c === (d.defaultCurrency || 'USD') ? 'selected' : ''}>${c}</option>`
        ).join('');
    }
}

// ==================== MASTER DATA ====================
function switchMasterTab(tab) {
    currentMasterTab = tab;
    document.querySelectorAll('.master-tab').forEach(t => t.classList.toggle('active', t.dataset.master === tab));
    renderMasterData();
}
function renderMasterData() {
    const list = document.getElementById('master-list');
    const pagination = document.getElementById('master-pagination');
    let data = [];
    if (currentMasterTab === 'carriers') data = db.carriers || [];
    else if (currentMasterTab === 'pol') data = db.pol || [];
    else if (currentMasterTab === 'pod') data = db.pod || [];
    else if (currentMasterTab === 'incoterms') data = db.incoterms || [];
    else if (currentMasterTab === 'containers') data = db.containers || [];
    else if (currentMasterTab === 'cargostatus') data = db.cargoStatusMaster || [];
    else if (currentMasterTab === 'docsstatus') data = db.docsStatusMaster || [];
    const hidden = db.hiddenItems[currentMasterTab] || [];
    let filteredData = data.map((item, idx) => ({ item, idx }));
    if (masterShowMode === 'visible') filteredData = filteredData.filter(({ item }) => !hidden.includes(item));
    else if (masterShowMode === 'hidden') filteredData = filteredData.filter(({ item }) => hidden.includes(item));
    if (masterSearch) {
        const searchLower = masterSearch.toLowerCase();
        filteredData = filteredData.filter(({ item }) => item.toLowerCase().includes(searchLower));
    }
    if (masterSort === 'alpha-asc') filteredData.sort((a, b) => a.item.localeCompare(b.item));
    else if (masterSort === 'alpha-desc') filteredData.sort((a, b) => b.item.localeCompare(a.item));
    const perPage = parseInt(masterPerPage) || 20;
    const totalPages = Math.ceil(filteredData.length / perPage) || 1;
    if (masterPage > totalPages) masterPage = totalPages;
    if (masterPage < 1) masterPage = 1;
    const start = (masterPage - 1) * perPage;
    const pageData = filteredData.slice(start, start + perPage);
    if (pageData.length === 0) {
        list.innerHTML = '<p style="padding:20px;text-align:center;color:var(--text-light);">No items found.</p>';
        pagination.innerHTML = '';
        return;
    }
    list.innerHTML = pageData.map(({ item, idx: originalIdx }) => {
        const isHidden = hidden.includes(item);
        const hiddenClass = isHidden ? 'hidden-item' : '';
        return `<div class="master-item ${hiddenClass}">
            <span>${item}</span>
            <div class="master-item-actions">
                <button class="btn btn-sm btn-preview" onclick="editMasterItem('${currentMasterTab}',${originalIdx})">✏️</button>
                <button class="btn btn-sm btn-warning" onclick="toggleHiddenMasterItem('${currentMasterTab}',${originalIdx})">${isHidden ? '👁 Show' : '🙈 Hide'}</button>
                <button class="btn btn-sm btn-clear" onclick="deleteMasterItem('${currentMasterTab}',${originalIdx})">×</button>
            </div>
        </div>`;
    }).join('');
    if (totalPages <= 1) { pagination.innerHTML = ''; return; }
    let pagHtml = `<button class="page-btn" onclick="changeMasterPage(${masterPage - 1})" ${masterPage === 1 ? 'disabled' : ''}>‹ Prev</button>`;
    pagHtml += `<span class="page-info">Page ${masterPage} of ${totalPages}</span>`;
    pagHtml += `<button class="page-btn" onclick="changeMasterPage(${masterPage + 1})" ${masterPage === totalPages ? 'disabled' : ''}>Next ›</button>`;
    pagination.innerHTML = pagHtml;
}
function changeMasterPage(page) {
    const data = currentMasterTab === 'carriers' ? db.carriers :
        currentMasterTab === 'pol' ? db.pol :
        currentMasterTab === 'pod' ? db.pod :
        currentMasterTab === 'incoterms' ? db.incoterms :
        currentMasterTab === 'containers' ? db.containers :
        currentMasterTab === 'cargostatus' ? db.cargoStatusMaster :
        currentMasterTab === 'docsstatus' ? db.docsStatusMaster :
        db.carriers;
    const hidden = db.hiddenItems[currentMasterTab] || [];
    let filteredData = data.map((item, idx) => ({ item, idx }));
    if (masterShowMode === 'visible') filteredData = filteredData.filter(({ item }) => !hidden.includes(item));
    else if (masterShowMode === 'hidden') filteredData = filteredData.filter(({ item }) => hidden.includes(item));
    if (masterSearch) filteredData = filteredData.filter(({ item }) => item.toLowerCase().includes(masterSearch.toLowerCase()));
    const perPage = parseInt(masterPerPage) || 20;
    const totalPages = Math.ceil(filteredData.length / perPage) || 1;
    if (page < 1 || page > totalPages) return;
    masterPage = page;
    renderMasterData();
}
function addMasterItem() {
    const input = document.getElementById('new-master-item');
    const val = input.value.trim();
    if (!val) return alert('Enter a value');
    const listKey = currentMasterTab === 'carriers' ? 'carriers' :
        currentMasterTab === 'pol' ? 'pol' :
        currentMasterTab === 'pod' ? 'pod' :
        currentMasterTab === 'incoterms' ? 'incoterms' :
        currentMasterTab === 'containers' ? 'containers' :
        currentMasterTab === 'cargostatus' ? 'cargoStatusMaster' :
        currentMasterTab === 'docsstatus' ? 'docsStatusMaster' :
        'carriers';
    if (db[listKey].includes(val)) return alert('Item already exists');
    db[listKey].push(val);
    saveDB();
    input.value = '';
    renderMasterData();
    populateDropdowns();
    autoBackup();
}
function addMultipleMasterItems() {
    const textarea = document.getElementById('new-master-items');
    const items = textarea.value.split(/\n/).map(s => s.trim().toUpperCase()).filter(s => s);
    if (!items.length) return alert('Enter at least one item');
    const listKey = currentMasterTab === 'carriers' ? 'carriers' :
        currentMasterTab === 'pol' ? 'pol' :
        currentMasterTab === 'pod' ? 'pod' :
        currentMasterTab === 'incoterms' ? 'incoterms' :
        currentMasterTab === 'containers' ? 'containers' :
        currentMasterTab === 'cargostatus' ? 'cargoStatusMaster' :
        currentMasterTab === 'docsstatus' ? 'docsStatusMaster' :
        'carriers';
    let added = 0;
    items.forEach(item => {
        if (!db[listKey].includes(item)) {
            db[listKey].push(item);
            added++;
        }
    });
    saveDB();
    textarea.value = '';
    renderMasterData();
    populateDropdowns();
    alert(`Added ${added} items`);
    autoBackup();
}
function editMasterItem(tab, originalIdx) {
    const listKey = tab === 'carriers' ? 'carriers' :
        tab === 'pol' ? 'pol' :
        tab === 'pod' ? 'pod' :
        tab === 'incoterms' ? 'incoterms' :
        tab === 'containers' ? 'containers' :
        tab === 'cargostatus' ? 'cargoStatusMaster' :
        tab === 'docsstatus' ? 'docsStatusMaster' :
        'carriers';
    const data = db[listKey];
    const item = data[originalIdx];
    if (!item) return alert('Item not found');
    const newVal = prompt('Edit item:', item);
    if (newVal && newVal.trim() !== item) {
        data[originalIdx] = newVal.trim();
        saveDB();
        renderMasterData();
        populateDropdowns();
        autoBackup();
    }
}
function toggleHiddenMasterItem(tab, originalIdx) {
    const listKey = tab === 'carriers' ? 'carriers' :
        tab === 'pol' ? 'pol' :
        tab === 'pod' ? 'pod' :
        tab === 'incoterms' ? 'incoterms' :
        tab === 'containers' ? 'containers' :
        tab === 'cargostatus' ? 'cargoStatusMaster' :
        tab === 'docsstatus' ? 'docsStatusMaster' :
        'carriers';
    const data = db[listKey];
    const item = data[originalIdx];
    if (!item) return;
    const hidden = db.hiddenItems[tab] || [];
    if (hidden.includes(item)) {
        db.hiddenItems[tab] = hidden.filter(h => h !== item);
    } else {
        db.hiddenItems[tab].push(item);
    }
    saveDB();
    renderMasterData();
    populateDropdowns();
    autoBackup();
}
function deleteMasterItem(tab, originalIdx) {
    const listKey = tab === 'carriers' ? 'carriers' :
        tab === 'pol' ? 'pol' :
        tab === 'pod' ? 'pod' :
        tab === 'incoterms' ? 'incoterms' :
        tab === 'containers' ? 'containers' :
        tab === 'cargostatus' ? 'cargoStatusMaster' :
        tab === 'docsstatus' ? 'docsStatusMaster' :
        'carriers';
    const data = db[listKey];
    const item = data[originalIdx];
    if (!item) return alert('Item not found');
    if (confirm(`Delete "${item}"?`)) {
        data.splice(originalIdx, 1);
        const hidden = db.hiddenItems[tab] || [];
        if (hidden.includes(item)) {
            db.hiddenItems[tab] = hidden.filter(h => h !== item);
        }
        saveDB();
        renderMasterData();
        populateDropdowns();
        autoBackup();
    }
}

// ==================== EXCHANGE RATES ====================
function renderExchangeRates() {
    const table = document.getElementById('exchange-table');
    if (!table) return;
    table.innerHTML = `
        <thead><tr><th>Currency</th><th>Rate (1 INR = ?)</th><th>Action</th></tr></thead>
        <tbody>
            ${Object.entries(db.exchangeRates).map(([cur, rate]) => `
                <tr>
                    <td><strong>${cur}</strong></td>
                    <td><input type="number" step="0.0001" value="${rate}" onchange="updateExchangeRate('${cur}', this.value)" style="width:120px;padding:4px;border:1px solid var(--border);border-radius:3px;" onfocus="highlightInput(this)" onblur="unhighlightInput(this)"></td>
                    <td><button class="btn btn-sm btn-clear" onclick="deleteExchangeRate('${cur}')">×</button></td>
                </tr>
            `).join('')}
        </tbody>
    `;
}
function updateExchangeRate(currency, rate) {
    const val = parseFloat(rate);
    if (!isNaN(val) && val > 0) {
        db.exchangeRates[currency] = val;
        saveDB();
        ['sea', 'air', 'lcl'].forEach(m => {
            if (document.getElementById(m).classList.contains('active')) {
                recalcTotal(m);
            }
        });
        autoBackup();
    }
}
function addExchangeRate() {
    const cur = document.getElementById('new-currency').value.trim().toUpperCase();
    const rate = parseFloat(document.getElementById('new-rate').value);
    if (!cur || isNaN(rate) || rate <= 0) return alert('Enter valid currency and rate');
    if (db.exchangeRates[cur]) return alert('Currency already exists');
    db.exchangeRates[cur] = rate;
    saveDB();
    document.getElementById('new-currency').value = '';
    document.getElementById('new-rate').value = '';
    renderExchangeRates();
    autoBackup();
}
function deleteExchangeRate(currency) {
    if (currency === 'INR') return alert('Cannot delete INR');
    if (confirm(`Delete exchange rate for ${currency}?`)) {
        delete db.exchangeRates[currency];
        saveDB();
        renderExchangeRates();
        autoBackup();
    }
}

// ==================== COMPANY INFO ====================
function saveCompanyInfo() {
    const name = document.getElementById('company-name').value.trim();
    const address = document.getElementById('company-address').value.trim();
    if (!name) return alert('Company name is required');
    db.companyName = name;
    db.companyAddress = address;
    saveDB();
    document.getElementById('current-company-name').textContent = name;
    alert('Company info saved!');
    autoBackup();
}
function saveDefaultUser() {
    const user = document.getElementById('default-user-input').value.trim();
    if (!user) return alert('User name is required');
    db.defaultUser = user;
    saveDB();
    document.getElementById('current-default-user').textContent = user;
    alert('Default user saved!');
    autoBackup();
}

// ==================== POPULATE DROPDOWNS ====================
function populateDropdowns() {
    if (!db.carriers) db.carriers = [];
    if (!db.pol) db.pol = [];
    if (!db.pod) db.pod = [];
    if (!db.incoterms) db.incoterms = [];
    if (!db.containers) db.containers = [];
    if (!db.exchangeRates) db.exchangeRates = { USD: 94.50, INR: 1 };
    const hiddenCarriers = db.hiddenItems?.carriers || [];
    const hiddenPol = db.hiddenItems?.pol || [];
    const hiddenPod = db.hiddenItems?.pod || [];
    const hiddenIncoterms = db.hiddenItems?.incoterms || [];
    const hiddenContainers = db.hiddenItems?.containers || [];

    const visibleCarriers = ['ALL', ...db.carriers.filter(c => !hiddenCarriers.includes(c))];
    const visiblePol = db.pol.filter(p => !hiddenPol.includes(p));
    const visiblePod = db.pod.filter(p => !hiddenPod.includes(p));
    const visibleIncoterms = db.incoterms.filter(i => !hiddenIncoterms.includes(i));
    const visibleContainers = db.containers.filter(c => !hiddenContainers.includes(c));

    // For each mode, populate datalists and selects
    ['sea', 'air', 'lcl'].forEach(mode => {
        // POL datalist
        const polList = document.getElementById(`${mode}-pol-list`);
        if (polList) polList.innerHTML = visiblePol.map(p => `<option value="${p}">`).join('');
        // POD datalist
        const podList = document.getElementById(`${mode}-pod-list`);
        if (podList) podList.innerHTML = visiblePod.map(p => `<option value="${p}">`).join('');
        // Carrier datalist
        const carrierList = document.getElementById(`${mode}-carrier-list`);
        if (carrierList) carrierList.innerHTML = visibleCarriers.map(c => `<option value="${c}">`).join('');

        // Incoterm datalist
        const incotermList = document.getElementById(`${mode}-incoterm-list`);
        if (incotermList) incotermList.innerHTML = visibleIncoterms.map(i => `<option value="${i}">`).join('');

        // Container datalist (only for sea)
        if (mode === 'sea') {
            const containerList = document.getElementById(`${mode}-container-list`);
            if (containerList) containerList.innerHTML = visibleContainers.map(c => `<option value="${c}">`).join('');
        }

        // Commodity datalist (common for all modes) – we can either use a fixed list or from db; we'll create a fixed one.
        // We'll define a global commodity list or use the existing <select> options.
        // For simplicity, we'll populate with the same values as the select: NON HAZ, HAZ.
        const commodityList = document.getElementById(`${mode}-commodity-list`);
        if (commodityList) {
            commodityList.innerHTML = `<option value="NON HAZ"><option value="HAZ">`;
        }
    });
}


// ==================== DEFAULT CHARGES MASTER ====================
function renderDefaultChargesMaster(mode) {
    const search = (document.getElementById(`dc-${mode}-search`)?.value || '').toLowerCase();
    let records = [];
    if (mode === 'sea') records = db.defaultSeaCharges;
    else if (mode === 'air') records = db.defaultAirCharges;
    else if (mode === 'lcl') records = db.defaultLclCharges;

    const filterPol = document.getElementById(`dc-${mode}-filter-pol`)?.value || '';

    const filtered = records.map((rec, originalIdx) => ({ rec, originalIdx }))
        .filter(({ rec }) => {
            let text = `${rec.pol} ${rec.commodity||''}`.toLowerCase();
            if (search && !text.includes(search)) return false;
            if (filterPol && rec.pol !== filterPol) return false;
            return true;
        });

    const disp = document.getElementById(`dc-${mode}-master-table`);
    if (!disp) return;

    let html = `<table class="master-table"><thead><tr>
        <th style="width:30px;"><input type="checkbox" class="select-all-dc" data-mode="${mode}" /></th>`;
    html += `<th>POL</th>`;
    html += `<th>Commodity / Cargo</th>`;
    html += `<th>Charges</th>`;
    // For SEA, add CFS 20 and CFS 40 columns
    if (mode === 'sea') {
        html += `<th>CFS 20' (INR)</th><th>CFS 40' (INR)</th>`;
    }
    html += `<th>Updated</th><th>Action</th></tr></thead><tbody>`;

    if (filtered.length === 0) {
        const cols = (mode === 'sea') ? 8 : 6;
        html += `<tr><td colspan="${cols}" style="text-align:center;padding:16px;color:var(--text-light);">No records.</td></tr>`;
    } else {
        filtered.forEach(({ rec, originalIdx }) => {
            const chargesCount = Object.keys(rec.charges || {}).filter(k => k !== 'CFS_20' && k !== 'CFS_40').length;
            const updated = rec.updatedAt ? new Date(rec.updatedAt).toLocaleDateString('en-IN') : '—';
            const cfs20 = rec.charges?.CFS_20?.amount || 0;
            const cfs40 = rec.charges?.CFS_40?.amount || 0;

            html += `<tr>`;
            html += `<td><input type="checkbox" class="dc-checkbox" data-mode="${mode}" data-idx="${originalIdx}" data-type="default" /></td>`;
            html += `<td>${rec.pol}</td>`;
            html += `<td>${rec.commodity || '—'}</td>`;
            html += `<td style="text-align:center;"><strong>${chargesCount}</strong></td>`;
            if (mode === 'sea') {
                html += `<td>${cfs20}</td><td>${cfs40}</td>`;
            }
            html += `<td>${updated}</td>`;
            html += `<td>
                <button class="btn btn-sm btn-preview" onclick="previewDefaultCharge('${mode}',${originalIdx})">👁</button>
                <button class="btn btn-sm btn-preview" onclick="openEditDefaultChargeModal('${mode}',${originalIdx})">✏️</button>
                <button class="btn btn-sm btn-duplicate" onclick="duplicateDefaultCharge('${mode}',${originalIdx})">📋</button>
                <button class="btn btn-sm btn-clear" onclick="deleteDefaultChargeEntry('${mode}',${originalIdx})">×</button>
            </td></tr>`;
        });
    }
    html += '</tbody></table>';
    disp.innerHTML = html;

    document.querySelectorAll('.select-all-dc').forEach(cb => {
        cb.addEventListener('change', function() {
            const mode = this.dataset.mode;
            document.querySelectorAll(`.dc-checkbox[data-mode="${mode}"][data-type="default"]`).forEach(c => c.checked = this.checked);
            updateSelectedCount();
        });
    });
    document.querySelectorAll('.dc-checkbox').forEach(cb => {
        cb.addEventListener('change', updateSelectedCount);
    });
    updateSelectedCount();
}

// ==================== CARRIER CHARGES MASTER ====================
function renderCarrierChargesMaster(type) {
    const search = (document.getElementById(`cc-${type}-search`)?.value || '').toLowerCase();
    let records = [];
    let filterMode = '';

    if (type === 'sealcl') {
        records = db.carrierChargesSeaLcl;
        filterMode = document.getElementById('cc-sealcl-filter-mode')?.value || '';
    } else if (type === 'air') {
        records = db.carrierChargesAir;
    } else if (type === 'lcl') {
        records = db.carrierChargesSeaLcl;
        filterMode = 'lcl';
    }

    const filtered = records.map((rec, originalIdx) => ({ rec, originalIdx }))
        .filter(({ rec }) => {
            // Container no longer used for display, but we keep it in data for backward compatibility
            const text = `${rec.carrier} ${rec.pol}`.toLowerCase();
            if (search && !text.includes(search)) return false;
            if (filterMode && rec.mode !== filterMode) return false;
            return true;
        });

    const disp = document.getElementById(`cc-${type}-master-table`);
    if (!disp) return;

    let html = `<table class="master-table"><thead><tr>
        <th style="width:30px;"><input type="checkbox" class="select-all-cc" data-type="${type}" /></th>`;
    // Remove Container column – only Carrier, POL, Commodity, Charges, THC_20, THC_40, Updated, Action
    html += `<th>Carrier</th><th>POL</th><th>Commodity</th>`;
    html += `<th>Charges</th>`;
    if (type === 'sealcl') {
        html += `<th>THC 20' (INR)</th><th>THC 40' (INR)</th>`;
    }
    html += `<th>Updated</th><th>Action</th></tr></thead><tbody>`;

    if (filtered.length === 0) {
        const cols = (type === 'sealcl') ? 9 : (type === 'air' ? 7 : 8);
        html += `<tr><td colspan="${cols}" style="text-align:center;padding:16px;color:var(--text-light);">No records.</td></tr>`;
    } else {
        filtered.forEach(({ rec, originalIdx }) => {
            const chargeCount = Object.keys(rec.charges || {}).filter(k => k !== 'THC_20' && k !== 'THC_40').length;
            const updated = rec.updated ? new Date(rec.updated).toLocaleDateString('en-IN') : '—';
            const thc20 = rec.charges?.THC_20?.amount || 0;
            const thc40 = rec.charges?.THC_40?.amount || 0;
            html += `<tr>`;
            html += `<td><input type="checkbox" class="cc-checkbox" data-type="${type}" data-idx="${originalIdx}" /></td>`;
            html += `<td>${rec.carrier}</td><td>${rec.pol}</td>`;
            html += `<td>${rec.commodity || '—'}</td>`;
            html += `<td style="text-align:center;"><strong>${chargeCount}</strong></td>`;
            if (type === 'sealcl') {
                html += `<td>${thc20}</td><td>${thc40}</td>`;
            }
            html += `<td>${updated}</td>
            <td>
                <button class="btn btn-sm btn-preview" onclick="previewCarrierCharge('${type}',${originalIdx})">👁</button>
                <button class="btn btn-sm btn-preview" onclick="openEditCarrierChargeModal('${type}',${originalIdx})">✏️</button>
                <button class="btn btn-sm btn-duplicate" onclick="duplicateCarrierCharge('${type}',${originalIdx})">📋</button>
                <button class="btn btn-sm btn-clear" onclick="deleteCarrierChargeEntry('${type}',${originalIdx})">×</button>
            </td></tr>`;
        });
    }
    html += '</tbody></table>';
    disp.innerHTML = html;

    document.querySelectorAll('.select-all-cc').forEach(cb => {
        cb.addEventListener('change', function() {
            const type = this.dataset.type;
            document.querySelectorAll(`.cc-checkbox[data-type="${type}"]`).forEach(c => c.checked = this.checked);
            updateSelectedCount();
        });
    });
    document.querySelectorAll('.cc-checkbox').forEach(cb => {
        cb.addEventListener('change', updateSelectedCount);
    });
    updateSelectedCount();
}

// ==================== ADD/EDIT DEFAULT CHARGES ====================
function openEditDefaultChargeModal(mode, idx) {
    let rec;
    if (mode === 'sea') rec = db.defaultSeaCharges[idx];
    else if (mode === 'air') rec = db.defaultAirCharges[idx];
    else rec = db.defaultLclCharges[idx];
    if (!rec) {
        alert('Record not found');
        return;
    }

    const isSea = (mode === 'sea');
    const charges = rec.charges || {};
    const modeCharges = getDefaultChargeTypes(mode);

    // ---------- Build HTML for existing charges ----------
    let chargesHtml = '';
    const baseNames = new Set();
    Object.keys(charges).forEach(key => {
        let base = key;
        if (key.endsWith('_20') || key.endsWith('_40')) {
            base = key.slice(0, -3);
        }
        baseNames.add(base);
    });

    if (baseNames.size === 0) {
        chargesHtml = '<p style="color:var(--text-light);padding:8px;">No charges added yet. Use the "Add Charge" section below.</p>';
    }

    baseNames.forEach(baseKey => {
        let rowHtml = '';
        if (isSea) {
            const v20 = charges[baseKey + '_20'] || { amount: 0, buyAmount: 0, currency: 'INR' };
            const v40 = charges[baseKey + '_40'] || { amount: 0, buyAmount: 0, currency: 'INR' };
            const cur = v20.currency || v40.currency || 'INR';

            rowHtml = `
                <div style="margin-bottom:6px;background:var(--bg);padding:6px;border-radius:5px;border:1px solid var(--border);" data-charge-key="${baseKey}" data-mode="sea">
                    <div style="font-weight:700;color:var(--primary);margin-bottom:4px;font-size:0.8rem;">${baseKey}
                        <button class="btn btn-sm btn-clear" style="float:right;height:22px;padding:2px 6px;" onclick="this.closest('[data-charge-key]').remove()">×</button>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                        <div style="display:flex;gap:4px;">
                            <label style="font-size:0.6rem;font-weight:600;">20' Sell</label>
                            <input type="number" step="0.01" class="modal-chg-amt20" value="${v20.amount}" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                        </div>
                        <div style="display:flex;gap:4px;">
                            <label style="font-size:0.6rem;font-weight:600;">20' Buy</label>
                            <input type="number" step="0.01" class="modal-chg-buy20" value="${v20.buyAmount}" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                        </div>
                        <div style="display:flex;gap:4px;">
                            <label style="font-size:0.6rem;font-weight:600;">40' Sell</label>
                            <input type="number" step="0.01" class="modal-chg-amt40" value="${v40.amount}" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                        </div>
                        <div style="display:flex;gap:4px;">
                            <label style="font-size:0.6rem;font-weight:600;">40' Buy</label>
                            <input type="number" step="0.01" class="modal-chg-buy40" value="${v40.buyAmount}" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                        </div>
                        <div style="grid-column:1/-1;display:flex;gap:4px;align-items:center;">
                            <label style="font-size:0.6rem;font-weight:600;">Currency</label>
                            <select class="modal-chg-cur" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                                ${getCurrencyOptions(cur)}
                            </select>
                        </div>
                    </div>
                </div>
            `;
        } else {
            const v = charges[baseKey] || { amount: 0, buyAmount: 0, currency: 'INR' };
            rowHtml = `
                <div style="margin-bottom:6px;background:var(--bg);padding:6px;border-radius:5px;border:1px solid var(--border);" data-charge-key="${baseKey}" data-mode="air">
                    <div style="font-weight:700;color:var(--primary);margin-bottom:4px;font-size:0.8rem;">${baseKey}
                        <button class="btn btn-sm btn-clear" style="float:right;height:22px;padding:2px 6px;" onclick="this.closest('[data-charge-key]').remove()">×</button>
                    </div>
                    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
                        <div style="display:flex;gap:4px;">
                            <label style="font-size:0.6rem;font-weight:600;">Sell</label>
                            <input type="number" step="0.01" class="modal-chg-single-sell" value="${v.amount}" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                        </div>
                        <div style="display:flex;gap:4px;">
                            <label style="font-size:0.6rem;font-weight:600;">Buy</label>
                            <input type="number" step="0.01" class="modal-chg-single-buy" value="${v.buyAmount}" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                        </div>
                        <div style="display:flex;gap:4px;align-items:center;">
                            <label style="font-size:0.6rem;font-weight:600;">Currency</label>
                            <select class="modal-chg-cur" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                                ${getCurrencyOptions(v.currency || 'INR')}
                            </select>
                        </div>
                    </div>
                </div>
            `;
        }
        chargesHtml += rowHtml;
    });

    // ---------- Build the "Add Charge" section ----------
    let addSectionHtml = '';
    if (isSea) {
        addSectionHtml = `
            <div class="form-group" style="width:90px;"><label>20' Sell</label><input type="number" id="modal-dc-add-amt20" step="0.01" value="0"></div>
            <div class="form-group" style="width:90px;"><label>20' Buy</label><input type="number" id="modal-dc-add-buy20" step="0.01" value="0"></div>
            <div class="form-group" style="width:90px;"><label>40' Sell</label><input type="number" id="modal-dc-add-amt40" step="0.01" value="0"></div>
            <div class="form-group" style="width:90px;"><label>40' Buy</label><input type="number" id="modal-dc-add-buy40" step="0.01" value="0"></div>
        `;
    } else {
        addSectionHtml = `
            <div class="form-group" style="width:90px;"><label>Sell</label><input type="number" id="modal-dc-add-sell" step="0.01" value="0"></div>
            <div class="form-group" style="width:90px;"><label>Buy</label><input type="number" id="modal-dc-add-buy" step="0.01" value="0"></div>
        `;
    }

    // ---------- Complete modal HTML ----------
    const html = `
        <h3 style="color:var(--primary);margin-bottom:12px;">Edit Default ${mode.toUpperCase()} Charge</h3>
        <div class="form-grid-2col">
            <div class="form-group"><label>POL</label>
                <select id="modal-dc-pol-edit">
                    ${db.pol.map(p => `<option value="${p}" ${rec.pol===p?'selected':''}>${p}</option>`).join('')}
                </select>
            </div>
            <div class="form-group"><label>Commodity</label>
                <select id="modal-dc-commodity-edit">
                    <option value="">Select</option>
                    <option value="NON HAZ" ${rec.commodity==='NON HAZ'?'selected':''}>Non Haz</option>
                    <option value="HAZ" ${rec.commodity==='HAZ'?'selected':''}>Haz</option>
                </select>
            </div>
        </div>
        <h4 style="color:var(--primary);margin:12px 0 8px;">Charges</h4>
        <div id="modal-dc-charges-list">
            ${chargesHtml}
        </div>
        <div style="margin-top:8px;display:flex;gap:8px;align-items:end;flex-wrap:wrap;border-top:1px solid var(--border);padding-top:12px;">
            <div class="form-group" style="flex:1;min-width:120px;">
                <label>Charge Name</label>
                <select id="modal-dc-add-charge">
                    ${modeCharges.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </div>
            ${addSectionHtml}
            <div class="form-group" style="width:90px;">
                <label>Currency</label>
                <select id="modal-dc-add-cur">${getCurrencyOptions('INR')}</select>
            </div>
            <button class="btn btn-sm btn-success" style="height:33px;" onclick="addChargeToDCModal('${mode}')">+</button>
        </div>
        <div style="margin-top:16px;text-align:right;display:flex;gap:8px;justify-content:flex-end;">
            <button class="btn btn-clear" onclick="closeModal('previewModal')">Cancel</button>
            <button class="btn btn-quoted" onclick="saveEditDefaultCharge('${mode}', ${idx})">💾 Save</button>
        </div>
    `;

    document.getElementById('modal-title').textContent = `Edit Default ${mode.toUpperCase()} Charge`;
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}


function saveEditDefaultCharge(mode, idx) {
    // ---- 1. Safely get modal elements ----
    const polEl = document.getElementById('modal-dc-pol-edit');
    const commodityEl = document.getElementById('modal-dc-commodity-edit');

    if (!polEl || !commodityEl) {
        alert('❌ Edit modal is not open or elements are missing. Please reopen the modal and try again.');
        return;
    }

    const pol = polEl.value.trim();
    const commodity = commodityEl.value.trim();

    if (!pol) {
        alert('POL is required.');
        return;
    }

    // ---- 2. Validate the record index ----
    let arr;
    if (mode === 'sea') arr = db.defaultSeaCharges;
    else if (mode === 'air') arr = db.defaultAirCharges;
    else arr = db.defaultLclCharges;

    if (!arr || idx < 0 || idx >= arr.length) {
        alert('Record not found.');
        return;
    }
    const rec = arr[idx];

    // ---- 3. Collect charges ----
    const charges = {};
    const rows = document.querySelectorAll('#modal-dc-charges-list [data-charge-key]');

    if (rows.length === 0) {
        alert('No charges found. Please add at least one charge.');
        return;
    }

    let hasValidCharge = false;
    rows.forEach(row => {
        const baseKey = row.getAttribute('data-charge-key');
        if (!baseKey) return;

        const rowMode = row.getAttribute('data-mode') || 'sea';

        if (rowMode === 'sea') {
            const amt20 = row.querySelector('.modal-chg-amt20');
            const buy20 = row.querySelector('.modal-chg-buy20');
            const amt40 = row.querySelector('.modal-chg-amt40');
            const buy40 = row.querySelector('.modal-chg-buy40');
            const cur = row.querySelector('.modal-chg-cur');

            if (amt20 && buy20 && amt40 && buy40 && cur) {
                const a20 = parseFloat(amt20.value) || 0;
                const b20 = parseFloat(buy20.value) || 0;
                const a40 = parseFloat(amt40.value) || 0;
                const b40 = parseFloat(buy40.value) || 0;
                const currency = cur.value || 'INR';

                if (a20 > 0 || b20 > 0) {
                    charges[baseKey + '_20'] = { amount: a20, buyAmount: b20, currency: currency };
                    hasValidCharge = true;
                }
                if (a40 > 0 || b40 > 0) {
                    charges[baseKey + '_40'] = { amount: a40, buyAmount: b40, currency: currency };
                    hasValidCharge = true;
                }
            }
        } else {
            const sell = row.querySelector('.modal-chg-single-sell');
            const buy = row.querySelector('.modal-chg-single-buy');
            const cur = row.querySelector('.modal-chg-cur');

            if (sell && buy && cur) {
                const s = parseFloat(sell.value) || 0;
                const b = parseFloat(buy.value) || 0;
                const currency = cur.value || 'INR';

                if (s > 0 || b > 0) {
                    charges[baseKey] = { amount: s, buyAmount: b, currency: currency };
                    hasValidCharge = true;
                }
            }
        }	
    });

    if (!hasValidCharge) {
        alert('Please add at least one charge with a positive value.');
        return;
    }

    // ---- 4. Update and save ----
    rec.pol = pol;
    rec.commodity = commodity;
    rec.charges = charges;
    rec.updatedAt = new Date().toISOString();

    saveDB();
    closeModal('previewModal');
    renderDefaultChargesMaster(mode);
    alert('✅ Default charge updated successfully.');
    autoBackup();
}


function openAddDefaultChargeModal(mode) {
    const isSea = (mode === 'sea');
    let html = `
        <h3 style="color:var(--primary);margin-bottom:12px;">Add Default ${mode.toUpperCase()} Charge</h3>
        <div class="form-grid-2col">
            <div class="form-group"><label>POL</label><select id="modal-dc-pol">${db.pol.map(p => `<option value="${p}">${p}</option>`).join('')}</select></div>
            <div class="form-group"><label>Commodity</label><select id="modal-dc-commodity"><option value="">Select</option><option value="NON HAZ">Non Haz</option><option value="HAZ">Haz</option></select></div>
        </div>
        <h4 style="color:var(--primary);margin:12px 0 8px;">Charges</h4>
        <div id="modal-dc-charges-list"></div>
        <div style="margin-top:8px;display:flex;gap:8px;align-items:end;flex-wrap:wrap;">
            <div class="form-group" style="flex:1;min-width:120px;">
                <label>Charge Name</label>
                <select id="modal-dc-add-charge">${getDefaultChargeTypes(mode).map(c => `<option value="${c}">${c}</option>`).join('')}</select>
            </div>
    `;

    if (isSea) {
        html += `
            <div class="form-group" style="width:90px;"><label>20' Sell</label><input type="number" id="modal-dc-add-amt20" step="0.01"></div>
            <div class="form-group" style="width:90px;"><label>20' Buy</label><input type="number" id="modal-dc-add-buy20" step="0.01"></div>
            <div class="form-group" style="width:90px;"><label>40' Sell</label><input type="number" id="modal-dc-add-amt40" step="0.01"></div>
            <div class="form-group" style="width:90px;"><label>40' Buy</label><input type="number" id="modal-dc-add-buy40" step="0.01"></div>
        `;
    } else {
        html += `
            <div class="form-group" style="width:90px;"><label>Sell</label><input type="number" id="modal-dc-add-sell" step="0.01"></div>
            <div class="form-group" style="width:90px;"><label>Buy</label><input type="number" id="modal-dc-add-buy" step="0.01"></div>
        `;
    }

    html += `
            <div class="form-group" style="width:90px;">
                <label>Currency</label>
                <select id="modal-dc-add-cur">${getCurrencyOptions('INR')}</select>
            </div>
            <button class="btn btn-sm btn-success" style="height:33px;" onclick="addChargeToDCModal('${mode}')">+</button>
        </div>
        <div style="margin-top:16px;text-align:right;">
            <button class="btn btn-clear" onclick="closeModal('previewModal')">Cancel</button>
            <button class="btn btn-quoted" onclick="saveNewDefaultCharge('${mode}')">Save</button>
        </div>
    `;

    document.getElementById('modal-title').textContent = `Add Default ${mode.toUpperCase()} Charge`;
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}


function addChargeToDCModal(mode) {
    // ---- 1. Verify the modal is open ----
    const list = document.getElementById('modal-dc-charges-list');
    if (!list) {
        alert('❌ Error: The charges list container is not found.\nPlease open the "Add/Edit Default Charge" modal first.');
        return;
    }

    // ---- 2. Get the charge name selector ----
    const chargeSelect = document.getElementById('modal-dc-add-charge');
    if (!chargeSelect) {
        alert('❌ Error: Charge selector not found. Please reopen the modal.');
        return;
    }

    const key = chargeSelect.value.trim();
    if (!key) {
        alert('Please select a charge name from the dropdown.');
        return;
    }

    // ---- 3. Prevent duplicate charges ----
    if (list.querySelector(`[data-charge-key="${key}"]`)) {
        alert('⚠️ Charge "' + key + '" already added. Please remove the existing one first.');
        return;
    }

    // ---- 4. Build the HTML for the new charge row ----
    const isSea = (mode === 'sea');
    let html = '';
    
    if (isSea) {
        // SEA mode: 20' and 40' sell/buy fields
        html = `
            <div style="margin-bottom:6px;background:var(--bg);padding:6px;border-radius:5px;border:1px solid var(--border);" data-charge-key="${key}" data-mode="sea">
                <div style="font-weight:700;color:var(--primary);margin-bottom:4px;font-size:0.8rem;">${key}
                    <button class="btn btn-sm btn-clear" style="float:right;height:22px;padding:2px 6px;" onclick="this.closest('[data-charge-key]').remove()">×</button>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                    <div style="display:flex;gap:4px;">
                        <label style="font-size:0.6rem;font-weight:600;">20' Sell</label>
                        <input type="number" step="0.01" class="modal-chg-amt20" value="0" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                    </div>
                    <div style="display:flex;gap:4px;">
                        <label style="font-size:0.6rem;font-weight:600;">20' Buy</label>
                        <input type="number" step="0.01" class="modal-chg-buy20" value="0" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                    </div>
                    <div style="display:flex;gap:4px;">
                        <label style="font-size:0.6rem;font-weight:600;">40' Sell</label>
                        <input type="number" step="0.01" class="modal-chg-amt40" value="0" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                    </div>
                    <div style="display:flex;gap:4px;">
                        <label style="font-size:0.6rem;font-weight:600;">40' Buy</label>
                        <input type="number" step="0.01" class="modal-chg-buy40" value="0" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                    </div>
                    <div style="grid-column:1/-1;display:flex;gap:4px;align-items:center;">
                        <label style="font-size:0.6rem;font-weight:600;">Currency</label>
                        <select class="modal-chg-cur" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                            ${getCurrencyOptions('INR')}
                        </select>
                    </div>
                </div>
            </div>
        `;
    } else {
        // AIR / LCL mode: single sell/buy fields
        html = `
            <div style="margin-bottom:6px;background:var(--bg);padding:6px;border-radius:5px;border:1px solid var(--border);" data-charge-key="${key}" data-mode="air">
                <div style="font-weight:700;color:var(--primary);margin-bottom:4px;font-size:0.8rem;">${key}
                    <button class="btn btn-sm btn-clear" style="float:right;height:22px;padding:2px 6px;" onclick="this.closest('[data-charge-key]').remove()">×</button>
                </div>
                <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px;">
                    <div style="display:flex;gap:4px;">
                        <label style="font-size:0.6rem;font-weight:600;">Sell</label>
                        <input type="number" step="0.01" class="modal-chg-single-sell" value="0" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                    </div>
                    <div style="display:flex;gap:4px;">
                        <label style="font-size:0.6rem;font-weight:600;">Buy</label>
                        <input type="number" step="0.01" class="modal-chg-single-buy" value="0" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                    </div>
                    <div style="display:flex;gap:4px;align-items:center;">
                        <label style="font-size:0.6rem;font-weight:600;">Currency</label>
                        <select class="modal-chg-cur" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                            ${getCurrencyOptions('INR')}
                        </select>
                    </div>
                </div>
            </div>
        `;
    }

    list.insertAdjacentHTML('beforeend', html);

    // ---- 5. Clear the input fields used to add the charge ----
    if (isSea) {
        ['modal-dc-add-amt20', 'modal-dc-add-buy20', 'modal-dc-add-amt40', 'modal-dc-add-buy40'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
    } else {
        ['modal-dc-add-sell', 'modal-dc-add-buy'].forEach(id => {
            const el = document.getElementById(id);
            if (el) el.value = '';
        });
    }

    // ---- 6. Reset the charge name dropdown to first option ----
    if (chargeSelect.options.length > 0) {
        chargeSelect.selectedIndex = 0;
    }
}


function addCCChargeToModal() {
    const key = document.getElementById('modal-cc-add-charge').value;
    const list = document.getElementById('modal-cc-charges-list');

    if (list.querySelector(`[data-charge-key="${key}"]`)) {
        alert('Charge already added!');
        return;
    }

    list.insertAdjacentHTML('beforeend', `
        <div style="margin-bottom:6px;background:var(--bg);padding:6px;border-radius:5px;border:1px solid var(--border);" data-charge-key="${key}">
            <div style="font-weight:700;color:var(--primary);margin-bottom:4px;font-size:0.8rem;">${key}
                <button class="btn btn-sm btn-clear" style="float:right;height:22px;padding:2px 6px;" onclick="this.closest('[data-charge-key]').remove()">×</button>
            </div>
            <div class="form-grid-2col">
                <div style="display:flex;gap:4px;">
                    <input type="number" step="0.01" class="modal-cc-sell-amt" placeholder="Sell" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                    <select class="modal-cc-sell-cur" style="width:70px;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                        ${getCurrencyOptions('INR')}
                    </select>
                </div>
                <div style="display:flex;gap:4px;">
                    <input type="number" step="0.01" class="modal-cc-buy-amt" placeholder="Buy" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                    <select class="modal-cc-buy-cur" style="width:70px;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                        ${getCurrencyOptions('INR')}
                    </select>
                </div>
            </div>
        </div>
    `);
}


function saveNewDefaultCharge(mode) {
    const polEl = document.getElementById('modal-dc-pol');
    const commodityEl = document.getElementById('modal-dc-commodity');
    if (!polEl || !commodityEl) {
        alert('❌ Add modal not loaded properly. Please close and reopen the modal.');
        return;
    }
    const pol = polEl.value.trim();
    if (!pol) return alert('POL is required.');
    const commodity = commodityEl.value;

    const isSea = (mode === 'sea');
    const charges = {};
    const rows = document.querySelectorAll('#modal-dc-charges-list [data-charge-key]');
    if (rows.length === 0) return alert('Please add at least one charge with a value.');

    rows.forEach(row => {
        const baseKey = row.getAttribute('data-charge-key');
        if (isSea) {
            const amt20 = row.querySelector('.modal-chg-amt20');
            const buy20 = row.querySelector('.modal-chg-buy20');
            const amt40 = row.querySelector('.modal-chg-amt40');
            const buy40 = row.querySelector('.modal-chg-buy40');
            const cur = row.querySelector('.modal-chg-cur');
            if (!amt20 || !buy20 || !amt40 || !buy40 || !cur) return;
            const a20 = parseFloat(amt20.value) || 0;
            const b20 = parseFloat(buy20.value) || 0;
            const a40 = parseFloat(amt40.value) || 0;
            const b40 = parseFloat(buy40.value) || 0;
            const c = cur.value;
            if (a20 > 0 || b20 > 0) {
                charges[baseKey + '_20'] = { amount: a20, buyAmount: b20, currency: c };
            }
            if (a40 > 0 || b40 > 0) {
                charges[baseKey + '_40'] = { amount: a40, buyAmount: b40, currency: c };
            }
        } else {
            const sell = row.querySelector('.modal-chg-single-sell');
            const buy = row.querySelector('.modal-chg-single-buy');
            const cur = row.querySelector('.modal-chg-cur');
            if (!sell || !buy || !cur) return;
            const s = parseFloat(sell.value) || 0;
            const b = parseFloat(buy.value) || 0;
            const c = cur.value;
            if (s > 0 || b > 0) {
                charges[baseKey] = { amount: s, buyAmount: b, currency: c };
            }
        }
    });

    if (Object.keys(charges).length === 0) {
        return alert('Please add at least one charge with a value.');
    }

    const record = { pol, commodity, charges, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
    if (findDefaultChargeDuplicate(mode, record)) return alert('Duplicate entry!');

    if (mode === 'sea') db.defaultSeaCharges.push(record);
    else if (mode === 'air') db.defaultAirCharges.push(record);
    else if (mode === 'lcl') db.defaultLclCharges.push(record);

    saveDB();
    closeModal('previewModal');
    renderDefaultChargesMaster(mode);
    alert('✅ Default charge added successfully!');
    autoBackup();
}

function saveEditDefaultCharge(mode, idx) {
    const polEl = document.getElementById('modal-dc-pol-edit');
    const commodityEl = document.getElementById('modal-dc-commodity-edit');
    if (!polEl || !commodityEl) {
        alert('❌ Edit modal not loaded properly. Please close and reopen the modal, then try again.');
        return;
    }
    const pol = polEl.value.trim();
    if (!pol) return alert('POL is required.');
    const commodity = commodityEl.value;

    let arr;
    if (mode === 'sea') arr = db.defaultSeaCharges;
    else if (mode === 'air') arr = db.defaultAirCharges;
    else arr = db.defaultLclCharges;
    if (!arr || idx < 0 || idx >= arr.length) {
        alert('Record not found.');
        return;
    }

    const isSea = (mode === 'sea');
    const charges = {};
    const rows = document.querySelectorAll('#modal-dc-charges-list [data-charge-key]');
    if (rows.length === 0) {
        return alert('Please add at least one charge with a value.');
    }

    rows.forEach(row => {
        const baseKey = row.getAttribute('data-charge-key');
        if (isSea) {
            const amt20 = row.querySelector('.modal-chg-amt20');
            const buy20 = row.querySelector('.modal-chg-buy20');
            const amt40 = row.querySelector('.modal-chg-amt40');
            const buy40 = row.querySelector('.modal-chg-buy40');
            const cur = row.querySelector('.modal-chg-cur');
            if (!amt20 || !buy20 || !amt40 || !buy40 || !cur) return;
            const a20 = parseFloat(amt20.value) || 0;
            const b20 = parseFloat(buy20.value) || 0;
            const a40 = parseFloat(amt40.value) || 0;
            const b40 = parseFloat(buy40.value) || 0;
            const c = cur.value;
            if (a20 > 0 || b20 > 0) {
                charges[baseKey + '_20'] = { amount: a20, buyAmount: b20, currency: c };
            }
            if (a40 > 0 || b40 > 0) {
                charges[baseKey + '_40'] = { amount: a40, buyAmount: b40, currency: c };
            }
        } else {
            const sell = row.querySelector('.modal-chg-single-sell');
            const buy = row.querySelector('.modal-chg-single-buy');
            const cur = row.querySelector('.modal-chg-cur');
            if (!sell || !buy || !cur) return;
            const s = parseFloat(sell.value) || 0;
            const b = parseFloat(buy.value) || 0;
            const c = cur.value;
            if (s > 0 || b > 0) {
                charges[baseKey] = { amount: s, buyAmount: b, currency: c };
            }
        }
    });

    if (Object.keys(charges).length === 0) {
        return alert('Please add at least one charge with a value.');
    }

    arr[idx].pol = pol;
    arr[idx].commodity = commodity;
    arr[idx].charges = charges;
    arr[idx].updatedAt = new Date().toISOString();

    saveDB();
    closeModal('previewModal');
    renderDefaultChargesMaster(mode);
    alert('✅ Default charge updated successfully!');
    autoBackup();
}

// ==================== CARRIER CHARGE EDIT ====================
function openEditCarrierChargeModal(type, idx) {
    let rec;
    if (type === 'sealcl') rec = db.carrierChargesSeaLcl[idx];
    else if (type === 'air') rec = db.carrierChargesAir[idx];
    else rec = db.carrierChargesSeaLcl[idx];
    if (!rec) return alert('Record not found');

    const mode = (type === 'sealcl') ? 'sea' : (type === 'air' ? 'air' : 'lcl');
    const modeCharges = getDefaultChargeTypes(mode);

    let html = `<h3 style="color:var(--primary);margin-bottom:12px;">Edit Carrier-Wise Charge</h3>
        <div class="form-grid-2col">`;

    if (type === 'sealcl') {
        html += `<input type="hidden" id="modal-cc-mode-edit" value="sea" />`;
    } else if (type === 'air') {
        html += `<input type="hidden" id="modal-cc-mode-edit" value="air" />`;
    } else {
        html += `<input type="hidden" id="modal-cc-mode-edit" value="lcl" />`;
    }

    html += `<div class="form-group"><label>Carrier</label>
        <select id="modal-cc-carrier-edit">
            <option value="">Select</option>
            ${db.carriers.map(c => `<option value="${c}" ${rec.carrier===c?'selected':''}>${c}</option>`).join('')}
        </select>
    </div>
    <div class="form-group"><label>POL</label>
        <select id="modal-cc-pol-edit">
            <option value="">Select</option>
            ${db.pol.map(p => `<option value="${p}" ${rec.pol===p?'selected':''}>${p}</option>`).join('')}
        </select>
    </div>`;

    // Container dropdown removed
    if (type === 'sealcl') {
        const thc20 = rec.charges?.THC_20?.amount || 0;
        const thc40 = rec.charges?.THC_40?.amount || 0;
        html += `<div class="form-group"><label>THC 20' (INR)</label><input type="number" id="modal-cc-thc20" step="0.01" value="${thc20}" /></div>`;
        html += `<div class="form-group"><label>THC 40' (INR)</label><input type="number" id="modal-cc-thc40" step="0.01" value="${thc40}" /></div>`;
    }

    html += `<div class="form-group"><label>Commodity</label>
        <select id="modal-cc-commodity-edit">
            <option value="">Select</option>
            <option value="NON HAZ" ${rec.commodity==='NON HAZ'?'selected':''}>Non Haz</option>
            <option value="HAZ" ${rec.commodity==='HAZ'?'selected':''}>Haz</option>
        </select>
    </div>
</div>`;

    html += `<h4 style="color:var(--primary);margin:12px 0 8px;">Other Charges (Sell & Buy)</h4>
        <div id="modal-cc-charges-list">`;

    const charges = rec.charges || {};
    Object.entries(charges).forEach(([key, val]) => {
        if (key === 'THC_20' || key === 'THC_40') return;
        html += `<div style="margin-bottom:6px;background:var(--bg);padding:6px;border-radius:5px;border:1px solid var(--border);" data-charge-key="${key}">
            <div style="font-weight:700;color:var(--primary);margin-bottom:4px;font-size:0.8rem;">${key}
                <button class="btn btn-sm btn-clear" style="float:right;height:22px;padding:2px 6px;" onclick="this.closest('[data-charge-key]').remove()">×</button>
            </div>
            <div class="form-grid-2col">
                <div style="display:flex;gap:4px;">
                    <input type="number" step="0.01" class="modal-cc-sell-amt" value="${val.amount||''}" placeholder="Sell" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                    <select class="modal-cc-sell-cur" style="width:70px;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                        ${getCurrencyOptions(val.currency||'INR')}
                    </select>
                </div>
                <div style="display:flex;gap:4px;">
                    <input type="number" step="0.01" class="modal-cc-buy-amt" value="${val.buyAmount||''}" placeholder="Buy" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                    <select class="modal-cc-buy-cur" style="width:70px;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">
                        ${getCurrencyOptions(val.buyCurrency||'INR')}
                    </select>
                </div>
            </div>
        </div>`;
    });

    html += `</div>
        <div style="margin-top:8px;display:flex;gap:8px;align-items:end;">
            <div class="form-group" style="flex:1;"><label>Add Charge</label>
                <select id="modal-cc-add-charge">
                    ${modeCharges.map(c => `<option value="${c}">${c}</option>`).join('')}
                </select>
            </div>
            <button class="btn btn-sm btn-success" style="height:33px;" onclick="addCCChargeToModal()">+</button>
        </div>
        <div style="margin-top:16px;text-align:right;display:flex;gap:8px;justify-content:flex-end;">
            <button class="btn btn-clear" onclick="closeModal('previewModal')">Cancel</button>
            <button class="btn btn-quoted" onclick="saveEditCarrierCharge('${type}',${idx})">Save</button>
        </div>`;

    document.getElementById('modal-title').textContent = 'Edit Carrier-Wise Charge';
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}

function addCCChargeToModal() {
    const key = document.getElementById('modal-cc-add-charge').value;
    const list = document.getElementById('modal-cc-charges-list');
    if (list.querySelector(`[data-charge-key="${key}"]`)) {
        alert('Charge already added!');
        return;
    }
    const existingKeys = list.querySelectorAll('[data-charge-key]');
    for (let el of existingKeys) {
        if (el.getAttribute('data-charge-key') === key) {
            alert('Charge already exists!');
            return;
        }
    }
    list.insertAdjacentHTML('beforeend', `<div style="margin-bottom:6px;background:var(--bg);padding:6px;border-radius:5px;border:1px solid var(--border);" data-charge-key="${key}">
        <div style="font-weight:700;color:var(--primary);margin-bottom:4px;font-size:0.8rem;">${key} <button class="btn btn-sm btn-clear" style="float:right;height:22px;padding:2px 6px;" onclick="this.closest('[data-charge-key]').remove()">×</button></div>
        <div class="form-grid-2col">
            <div style="display:flex;gap:4px;">
                <input type="number" step="0.01" class="modal-cc-sell-amt" placeholder="Sell" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;" onfocus="highlightInput(this)" onblur="unhighlightInput(this)">
                <select class="modal-cc-sell-cur" style="width:70px;padding:4px 6px;border:1px solid var(--border);border-radius:3px;">${getCurrencyOptions('INR')}</select>
            </div>
            <div style="display:flex;gap:4px;">
                <input type="number" step="0.01" class="modal-cc-buy-amt" placeholder="Buy" style="flex:1;padding:4px 6px;border:1px solid var(--border);border-radius:3px;color:var(--buy-red);" onfocus="highlightInput(this)" onblur="unhighlightInput(this)">
                <select class="modal-cc-buy-cur" style="width:70px;padding:4px 6px;border:1px solid var(--border);border-radius:3px;color:var(--buy-red);">${getCurrencyOptions('INR')}</select>
            </div>
        </div>
    </div>`);
}
function saveEditCarrierCharge(type, idx) {
    let arr;
    if (type === 'sealcl') arr = db.carrierChargesSeaLcl;
    else if (type === 'air') arr = db.carrierChargesAir;
    else arr = db.carrierChargesSeaLcl;

    if (!arr || idx < 0 || idx >= arr.length) {
        alert('Record not found.');
        return;
    }
    const rec = arr[idx];

    // Collect data (container removed)
    let carrier, pol, commodity, mode;
    if (type === 'sealcl') {
        mode = 'sea';
        carrier = document.getElementById('modal-cc-carrier-edit').value.trim();
        pol = document.getElementById('modal-cc-pol-edit').value.trim();
        commodity = document.getElementById('modal-cc-commodity-edit').value.trim();
        if (!carrier || !pol) return alert('Carrier and POL are required.');
        // Handle THC
        const thc20 = parseFloat(document.getElementById('modal-cc-thc20').value) || 0;
        const thc40 = parseFloat(document.getElementById('modal-cc-thc40').value) || 0;
        // We'll set later
    } else if (type === 'air') {
        carrier = document.getElementById('modal-cc-carrier-edit').value.trim();
        pol = document.getElementById('modal-cc-pol-edit').value.trim();
        commodity = document.getElementById('modal-cc-commodity-edit').value.trim();
        if (!carrier || !pol) return alert('Carrier and POL are required.');
        mode = 'air';
    } else {
        // LCL
        mode = 'lcl';
        carrier = document.getElementById('modal-cc-carrier-edit').value.trim();
        pol = document.getElementById('modal-cc-pol-edit').value.trim();
        commodity = document.getElementById('modal-cc-commodity-edit').value.trim();
        if (!carrier || !pol) return alert('Carrier and POL are required.');
    }

    // Build charges from the list (other charges)
    const charges = {};
    document.querySelectorAll('#modal-cc-charges-list [data-charge-key]').forEach(row => {
        const key = row.getAttribute('data-charge-key');
        const sellAmt = parseFloat(row.querySelector('.modal-cc-sell-amt').value) || 0;
        const sellCur = row.querySelector('.modal-cc-sell-cur').value;
        const buyAmt = parseFloat(row.querySelector('.modal-cc-buy-amt').value) || 0;
        const buyCur = row.querySelector('.modal-cc-buy-cur').value;
        if (sellAmt > 0 || buyAmt > 0) {
            charges[key] = { amount: sellAmt, currency: sellCur, buyAmount: buyAmt, buyCurrency: buyCur };
        }
    });

    // Add THC for SEA
    if (type === 'sealcl') {
        const thc20 = parseFloat(document.getElementById('modal-cc-thc20').value) || 0;
        const thc40 = parseFloat(document.getElementById('modal-cc-thc40').value) || 0;
        if (thc20 > 0) charges.THC_20 = { amount: thc20, currency: 'INR' };
        if (thc40 > 0) charges.THC_40 = { amount: thc40, currency: 'INR' };
    }

    // Update rec – container removed
    rec.mode = mode;
    rec.carrier = carrier;
    rec.pol = pol;
    rec.commodity = commodity;
    rec.charges = charges;
    rec.updated = new Date().toISOString();

    saveDB();
    closeModal('previewModal');
    renderCarrierChargesMaster(type);
    alert('✅ Carrier charge updated.');
    autoBackup();
}

function openAddCarrierChargeModal(type) {
    const mode = (type === 'sealcl') ? 'sea' : (type === 'air' ? 'air' : 'lcl');
    const modeCharges = getDefaultChargeTypes(mode);
    let html = `<h3 style="color:var(--primary);margin-bottom:12px;">Add Carrier-Wise Charge</h3><div class="form-grid-2col">`;
    if (type === 'sealcl') {
        html += `<input type="hidden" id="modal-cc-mode" value="sea" />`;
    }
    html += `<div class="form-group"><label>Carrier</label><select id="modal-cc-carrier"><option value="">Select</option>${db.carriers.map(c => `<option value="${c}">${c}</option>`).join('')}</select></div>`;
    html += `<div class="form-group"><label>POL</label><select id="modal-cc-pol"><option value="">Select</option>${db.pol.map(p => `<option value="${p}">${p}</option>`).join('')}</select></div>`;
    if (type === 'sealcl') {
        // Container dropdown removed – only THC fields
        html += `<div class="form-group"><label>THC 20' (INR)</label><input type="number" id="modal-cc-thc20" step="0.01" placeholder="e.g., 11560" /></div>`;
        html += `<div class="form-group"><label>THC 40' (INR)</label><input type="number" id="modal-cc-thc40" step="0.01" placeholder="e.g., 17805" /></div>`;
    }
    html += `<div class="form-group"><label>Commodity</label><select id="modal-cc-commodity"><option value="">Select</option><option value="NON HAZ">Non Haz</option><option value="HAZ">Haz</option></select></div>`;
    html += `</div>`;

    html += `<h4 style="color:var(--primary);margin:12px 0 8px;">Other Charges (Sell & Buy)</h4><div id="modal-cc-charges-list"></div>
    <div style="margin-top:8px;display:flex;gap:8px;align-items:end;">
        <div class="form-group" style="flex:1;"><label>Add Charge</label><select id="modal-cc-add-charge">${modeCharges.map(c => `<option value="${c}">${c}</option>`).join('')}</select></div>
        <button class="btn btn-sm btn-success" style="height:33px;" onclick="addCCChargeToModal()">+</button>
    </div>
    <div style="margin-top:16px;text-align:right;">
        <button class="btn btn-clear" onclick="closeModal('previewModal')">Cancel</button>
        <button class="btn btn-quoted" onclick="saveNewCarrierCharge('${type}')">Save</button>
    </div>`;
    document.getElementById('modal-title').textContent = 'Add Carrier-Wise Charge';
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}

function saveNewCarrierCharge(type) {
    let record;
    if (type === 'sealcl') {
        const mode = 'sea';
        const carrier = document.getElementById('modal-cc-carrier').value;
        const pol = document.getElementById('modal-cc-pol').value;
        const commodity = document.getElementById('modal-cc-commodity').value;
        const thc20 = parseFloat(document.getElementById('modal-cc-thc20').value) || 0;
        const thc40 = parseFloat(document.getElementById('modal-cc-thc40').value) || 0;
        if (!carrier || !pol) return alert('Carrier and POL are required');
        record = { mode, carrier, pol, commodity, charges: {}, updated: new Date().toISOString() };
        // Container removed
        if (thc20 > 0) record.charges.THC_20 = { amount: thc20, currency: 'INR' };
        if (thc40 > 0) record.charges.THC_40 = { amount: thc40, currency: 'INR' };
        if (findCarrierChargeDuplicate(type, record)) return alert('Duplicate entry!');
        db.carrierChargesSeaLcl.push(record);
    } else if (type === 'air') {
        const carrier = document.getElementById('modal-cc-carrier').value;
        const pol = document.getElementById('modal-cc-pol').value;
        const commodity = document.getElementById('modal-cc-commodity').value;
        if (!carrier || !pol) return alert('Carrier and POL are required');
        record = { carrier, pol, commodity, charges: {}, updated: new Date().toISOString() };
        if (findCarrierChargeDuplicate(type, record)) return alert('Duplicate entry!');
        db.carrierChargesAir.push(record);
    } else {
        // LCL
        const mode = 'lcl';
        const carrier = document.getElementById('modal-cc-carrier').value;
        const pol = document.getElementById('modal-cc-pol').value;
        const commodity = document.getElementById('modal-cc-commodity').value;
        if (!carrier || !pol) return alert('Carrier and POL are required');
        record = { mode, carrier, pol, commodity, charges: {}, updated: new Date().toISOString() };
        if (findCarrierChargeDuplicate(type, record)) return alert('Duplicate entry!');
        db.carrierChargesSeaLcl.push(record);
    }

    // Collect other charges (excluding THC_20/THC_40)
    document.querySelectorAll('#modal-cc-charges-list [data-charge-key]').forEach(row => {
        const key = row.getAttribute('data-charge-key');
        const sellAmt = parseFloat(row.querySelector('.modal-cc-sell-amt').value) || 0;
        const sellCur = row.querySelector('.modal-cc-sell-cur').value;
        const buyAmt = parseFloat(row.querySelector('.modal-cc-buy-amt').value) || 0;
        const buyCur = row.querySelector('.modal-cc-buy-cur').value;
        if (sellAmt > 0 || buyAmt > 0) {
            record.charges[key] = { amount: sellAmt, currency: sellCur, buyAmount: buyAmt, buyCurrency: buyCur };
        }
    });

    saveDB();
    closeModal('previewModal');
    renderCarrierChargesMaster(type);
    alert('Added!');
    autoBackup();
}

// ==================== DELETE FUNCTIONS ====================
function deleteDefaultChargeEntry(mode, idx) {
    let arr;
    if (mode === 'sea') arr = db.defaultSeaCharges;
    else if (mode === 'air') arr = db.defaultAirCharges;
    else arr = db.defaultLclCharges;

    if (!arr || idx < 0 || idx >= arr.length) {
        alert('Record not found.');
        return;
    }

    const record = arr[idx];
    if (!confirm(`Delete this default charge?\n\n${record.pol || 'N/A'} (${mode.toUpperCase()})`)) return;

    // Re-check index in case array changed during confirm
    if (idx >= arr.length) {
        alert('Record already deleted.');
        return;
    }
    arr.splice(idx, 1);
    saveDB();
    renderDefaultChargesMaster(mode);
    autoBackup();
}

// ==================== PREVIEW FUNCTIONS ====================
function previewDefaultCharge(mode, idx) {
    let rec;
    if (mode === 'sea') rec = db.defaultSeaCharges[idx];
    else if (mode === 'air') rec = db.defaultAirCharges[idx];
    else rec = db.defaultLclCharges[idx];
    if (!rec) return alert('Record not found');

    const isSea = (mode === 'sea');
    const charges = rec.charges || {};
    const modeLabel = { sea: 'SEA', air: 'AIR', lcl: 'LCL' }[mode];

    let chargeRows = '';
    let grandTotalSellINR = 0;

    if (isSea) {
        const baseNames = new Set();
        Object.keys(charges).forEach(key => {
            let base = key;
            if (key.endsWith('_20') || key.endsWith('_40')) {
                base = key.slice(0, -3);
            }
            baseNames.add(base);
        });

        let sr = 0;
        baseNames.forEach(base => {
            const v20 = charges[base + '_20'] || null;
            const v40 = charges[base + '_40'] || null;

            if (v20) {
                sr++;
                const sellINR = toINR(v20.amount, v20.currency);
                grandTotalSellINR += sellINR;
                chargeRows += `
                    <tr>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;">${sr}</td>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">${base} (20')</td>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: right;">${Number(v20.amount).toLocaleString('en-IN')}</td>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: right;">${Number(v20.buyAmount || 0).toLocaleString('en-IN')}</td>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;">${v20.currency || 'INR'}</td>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600;">${formatINR(sellINR)}</td>
                    </tr>
                `;
            }
            if (v40) {
                sr++;
                const sellINR = toINR(v40.amount, v40.currency);
                grandTotalSellINR += sellINR;
                chargeRows += `
                    <tr>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;">${sr}</td>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">${base} (40')</td>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: right;">${Number(v40.amount).toLocaleString('en-IN')}</td>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: right;">${Number(v40.buyAmount || 0).toLocaleString('en-IN')}</td>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;">${v40.currency || 'INR'}</td>
                        <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600;">${formatINR(sellINR)}</td>
                    </tr>
                `;
            }
        });
    } else {
        let sr = 0;
        Object.entries(charges).forEach(([chargeName, val]) => {
            sr++;
            const sellINR = toINR(val.amount, val.currency);
            grandTotalSellINR += sellINR;
            chargeRows += `
                <tr>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;">${sr}</td>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">${chargeName}</td>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: right;">${Number(val.amount).toLocaleString('en-IN')}</td>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: right;">${Number(val.buyAmount || 0).toLocaleString('en-IN')}</td>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: center;">${val.currency || 'INR'}</td>
                    <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; text-align: right; font-weight: 600;">${formatINR(sellINR)}</td>
                </tr>
            `;
        });
    }

    const html = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 10px;">
            <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 16px 20px; border-radius: 12px 12px 0 0; margin-bottom: 0;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div style="font-size: 1.2rem; font-weight: 700;">📋 Default Charges Preview</div>
                    <div style="background: rgba(255,255,255,0.2); padding: 4px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: 600;">${modeLabel}</div>
                </div>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: white; padding: 16px 20px; border-left: 1px solid #e2e8f0; border-right: 1px solid #e2e8f0;">
                <div><span style="font-weight: 600; color: #64748b; font-size: 0.7rem; text-transform: uppercase; display: block;">POL</span><span style="font-weight: 700;">${rec.pol}</span></div>
                <div><span style="font-weight: 600; color: #64748b; font-size: 0.7rem; text-transform: uppercase; display: block;">Commodity</span><span style="font-weight: 700;">${rec.commodity || '—'}</span></div>
            </div>
            <div style="background: white; border: 1px solid #e2e8f0; border-radius: 0 0 12px 12px; overflow: hidden; margin-top: 0;">
                <div style="padding: 10px 16px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; font-weight: 700; color: #1e3a8a;">💲 Charges Breakdown</div>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem;">
                        <thead>
                            <tr style="background: #f1f5f9;">
                                <th style="padding: 8px 12px; text-align: center; border-bottom: 1px solid #e2e8f0;">#</th>
                                <th style="padding: 8px 12px; text-align: left; border-bottom: 1px solid #e2e8f0;">Charge Name</th>
                                <th style="padding: 8px 12px; text-align: right; border-bottom: 1px solid #e2e8f0;">Sell Amt</th>
                                <th style="padding: 8px 12px; text-align: right; border-bottom: 1px solid #e2e8f0;">Buy Amt</th>
                                <th style="padding: 8px 12px; text-align: center; border-bottom: 1px solid #e2e8f0;">Currency</th>
                                <th style="padding: 8px 12px; text-align: right; border-bottom: 1px solid #e2e8f0;">INR Equivalent</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${chargeRows || `<tr><td colspan="6" style="padding: 20px; text-align: center; color: #94a3b8;">No charges found</td></tr>`}
                        </tbody>
                        <tfoot>
                            <tr style="background: linear-gradient(135deg, #10b981, #059669); color: white; font-weight: 700; font-size: 1rem;">
                                <td colspan="5" style="padding: 8px 12px; text-align: right;">💰 Grand Total (INR)</td>
                                <td style="padding: 8px 12px; text-align: right;">${formatINR(grandTotalSellINR)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    `;

    document.getElementById('modal-title').textContent = `Preview Default ${mode.toUpperCase()} Charge`;
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}


function duplicateDefaultCharge(mode, idx) {
    let rec;
    if (mode === 'sea') rec = db.defaultSeaCharges[idx];
    else if (mode === 'air') rec = db.defaultAirCharges[idx];
    else rec = db.defaultLclCharges[idx];
    if (!rec) return alert('Record not found');
    const copy = JSON.parse(JSON.stringify(rec));
    if (mode === 'sea') {
        copy.carrier = rec.carrier + ' (Copy)';
    } else {
        copy.pol = rec.pol + ' (Copy)';
    }
    copy.createdAt = new Date().toISOString();
    copy.updatedAt = copy.createdAt;
    if (mode === 'sea') db.defaultSeaCharges.push(copy);
    else if (mode === 'air') db.defaultAirCharges.push(copy);
    else db.defaultLclCharges.push(copy);
    saveDB();
    renderDefaultChargesMaster(mode);
    alert('Default charge duplicated successfully!');
}


function deleteCarrierChargeEntry(type, idx) {
    let arr;
    if (type === 'sealcl') arr = db.carrierChargesSeaLcl;
    else if (type === 'air') arr = db.carrierChargesAir;
    else arr = db.carrierChargesSeaLcl;

    if (!arr || idx < 0 || idx >= arr.length) {
        alert('Record not found.');
        return;
    }

    const record = arr[idx];
    if (!confirm(`Delete this carrier charge?\n\n${record.carrier} (${record.pol})`)) return;

    if (idx >= arr.length) {
        alert('Record already deleted.');
        return;
    }
    arr.splice(idx, 1);
    saveDB();
    renderCarrierChargesMaster(type);
    autoBackup();
}


function previewCarrierCharge(type, idx) {
    let rec = type === 'sealcl' ? db.carrierChargesSeaLcl[idx] : db.carrierChargesAir[idx];
    if (!rec) return alert('Record not found');
    
    const thc20 = rec.charges?.THC_20?.amount || 0;
    const thc40 = rec.charges?.THC_40?.amount || 0;
    
    let html = `
        <div class="preview-card">
            <h3>Carrier Charge Details</h3>
            <div class="preview-grid">
                <div class="item"><span class="label">Mode</span><span class="value">${type.toUpperCase()}</span></div>
                <div class="item"><span class="label">Carrier</span><span class="value">${rec.carrier}</span></div>
                <div class="item"><span class="label">POL</span><span class="value">${rec.pol}</span></div>
                <div class="item"><span class="label">Commodity</span><span class="value">${rec.commodity || '—'}</span></div>
                ${type === 'sealcl' ? `
                    <div class="item"><span class="label">THC 20' (INR)</span><span class="value">${thc20}</span></div>
                    <div class="item"><span class="label">THC 40' (INR)</span><span class="value">${thc40}</span></div>
                ` : ''}
                <div class="item"><span class="label">Updated</span><span class="value">${rec.updated ? new Date(rec.updated).toLocaleString() : '—'}</span></div>
            </div>
        </div>
        <div class="preview-card">
            <h3>Other Charges</h3>
            <table class="preview-charges-table">
                <thead><tr><th>Charge Name</th><th>Sell Amount</th><th>Buy Amount</th><th>Currency</th></tr></thead>
                <tbody>`;
    
    let hasCharges = false;
    for (const [k, v] of Object.entries(rec.charges)) {
        if (k === 'THC_20' || k === 'THC_40') continue;
        hasCharges = true;
        html += `<tr><td>${k}</td><td>${v.amount || '—'}</td><td>${v.buyAmount || '—'}</td><td>${v.currency || 'INR'}</td></tr>`;
    }
    if (!hasCharges) {
        html += `<tr><td colspan="4" style="text-align:center;color:var(--text-light);">No additional charges</td></tr>`;
    }
    html += `</tbody></table></div>`;
    
    document.getElementById('modal-title').textContent = 'Preview Carrier Charge';
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}


function duplicateCarrierCharge(type, idx) {
    let rec = type === 'sealcl' ? db.carrierChargesSeaLcl[idx] : db.carrierChargesAir[idx];
    if (!rec) return alert('Record not found');
    const copy = JSON.parse(JSON.stringify(rec));
    copy.carrier = rec.carrier + ' (Copy)';
    copy.updated = new Date().toISOString();
    if (type === 'sealcl') db.carrierChargesSeaLcl.push(copy);
    else db.carrierChargesAir.push(copy);
    saveDB();
    renderCarrierChargesMaster(type);
    alert('Carrier charge duplicated successfully!');
}

// ==================== HELPER FUNCTIONS ====================
function getDefaultChargeTypes(mode) {
    return defaultCharges[mode] || [];
}
function findDefaultChargeDuplicate(mode, record, excludeIndex) {
    let arr;
    if (mode === 'sea') arr = db.defaultSeaCharges;
    else if (mode === 'air') arr = db.defaultAirCharges;
    else arr = db.defaultLclCharges;
    return arr.some((r, i) => {
        if (i === excludeIndex) return false;
        return r.pol === record.pol && r.commodity === record.commodity;
    });
}

function findCarrierChargeDuplicate(type, record, excludeIndex) {
    let arr;
    if (type === 'sealcl') arr = db.carrierChargesSeaLcl;
    else if (type === 'air') arr = db.carrierChargesAir;
    else arr = db.carrierChargesSeaLcl;
    return arr.some((r, i) => {
        if (i === excludeIndex) return false;
        if (type === 'sealcl') {
            return r.mode === record.mode &&
                   r.carrier === record.carrier &&
                   r.pol === record.pol &&
                   r.commodity === record.commodity; // container removed
        } else {
            return r.carrier === record.carrier &&
                   r.pol === record.pol &&
                   r.commodity === record.commodity;
        }
    });
}

// ==================== LOGIN & USER MANAGEMENT ====================
function getLoggedInUserName() {
    try {
        const userData = sessionStorage.getItem('loggedInUser');
        if (!userData) return null;
        const user = JSON.parse(userData);
        return user.name || user.id || null;
    } catch (e) {
        return null;
    }
}
function checkLogin() {
    const user = sessionStorage.getItem('loggedInUser');
    return user ? JSON.parse(user) : null;
}
function performLogin() {
    const id = document.getElementById('login-id').value.trim();
    const pass = document.getElementById('login-password').value.trim();
    const errorEl = document.getElementById('login-error');
    if (!id || !pass) {
        errorEl.textContent = 'Please enter ID and Password.';
        errorEl.style.display = 'block';
        return;
    }
    const user = db.users.find(u => u.id === id && u.password === pass);
    if (!user) {
        errorEl.textContent = 'Invalid User ID or Password.';
        errorEl.style.display = 'block';
        return;
    }
    errorEl.style.display = 'none';
    sessionStorage.setItem('loggedInUser', JSON.stringify(user));
    document.getElementById('login-overlay').classList.add('hidden');
    applyPermissions();
    init();
}
function performLogout() {
    sessionStorage.removeItem('loggedInUser');
    location.reload();
}
function applyPermissions() {
    const user = checkLogin();
    if (!user) return;
    const adminUserMgmt = document.getElementById('admin-user-management');
    if (adminUserMgmt) adminUserMgmt.style.display = user.role === 'master' ? 'block' : 'none';
    document.querySelectorAll('.tab-btn-vertical').forEach(btn => {
        const tabId = btn.dataset.tab;
        if (user.role === 'master' || user.permissions === 'all' || user.permissions.includes(tabId)) {
            btn.style.display = 'block';
            btn.disabled = false;
        } else {
            btn.style.display = 'none';
            btn.disabled = true;
        }
    });
}
function renderUserTable() {
    const tbody = document.getElementById('user-table-body');
    if (!tbody) return;
    tbody.innerHTML = db.users.map((u, idx) => {
        const permDisplay = u.role === 'master' ? 'All Access' : (u.permissions || []).join(', ');
        return `<tr>
            <td><strong>${u.id}</strong></td>
            <td>${u.name || '-'}</td>
            <td><span class="status-badge ${u.role === 'master' ? 'status-active' : 'status-expiring'}">${u.role.toUpperCase()}</span></td>
            <td style="font-size:0.7rem;">${permDisplay}</td>
            <td>
                <button class="btn btn-sm btn-preview" onclick="openEditUserModal(${idx})">✏️</button>
                ${u.id !== 'Shaikh Shahid' ? `<button class="btn btn-sm btn-clear" onclick="deleteUser(${idx})">×</button>` : ''}
            </td>
        </tr>`;
    }).join('');
}
function openAddUserModal() {
    openUserModal(null);
}
function openEditUserModal(idx) {
    const user = db.users[idx];
    if (!user) return alert('User not found.');
    openUserModal(idx, user);
}
function openUserModal(idx, userData = null) {
    const isEdit = idx !== null;
    const title = isEdit ? 'Edit User' : 'Add New User';
    const data = userData || { id: '', name: '', password: '', role: 'user', permissions: [] };
    const allTabs = ['sea', 'air', 'lcl', 'drafts', 'rates', 'ratesheet', 'dsr', 'bldraft', 'dashboard', 'measurement',
        'database', 'sealocal', 'airlocal', 'lcllocal'
    ];
    let permHtml = '<div class="perm-grid">';
    allTabs.forEach(tab => {
        const checked = data.role === 'master' || (data.permissions && data.permissions.includes(tab)) ? 'checked' : '';
        const disabled = data.role === 'master' ? 'disabled' : '';
        permHtml += `<label class="${data.role === 'master' ? 'disabled' : ''}">
            <input type="checkbox" class="user-perm-cb" value="${tab}" ${checked} ${disabled}>
            ${tab.charAt(0).toUpperCase() + tab.slice(1)}
        </label>`;
    });
    permHtml += '</div>';
    const html = `
        <h3 style="color:var(--primary);margin-bottom:12px;">${title}</h3>
        <div class="form-grid-2col">
            <div class="form-group"><label>User ID *</label><input type="text" id="modal-user-id" value="${data.id}" ${isEdit ? 'readonly' : ''}></div>
            <div class="form-group"><label>Full Name</label><input type="text" id="modal-user-name" value="${data.name || ''}"></div>
            <div class="form-group"><label>Password *</label><input type="text" id="modal-user-pass" value="${data.password || ''}" placeholder="Set password"></div>
            <div class="form-group"><label>Role</label>
                <select id="modal-user-role" onchange="toggleUserPerms()">
                    <option value="user" ${data.role==='user'?'selected':''}>User</option>
                    <option value="master" ${data.role==='master'?'selected':''}>Master (Full Access)</option>
                </select>
            </div>
        </div>
        <div style="margin-top:10px;"><label style="font-weight:700;font-size:0.85rem;color:var(--text-light);">Tab Permissions (for Users)</label>${permHtml}</div>
        <div style="margin-top:16px;text-align:right;">
            <button class="btn btn-clear" onclick="closeModal('previewModal')">Cancel</button>
            <button class="btn btn-quoted" onclick="saveUser(${idx})">💾 Save User</button>
        </div>
    `;
    document.getElementById('modal-title').textContent = title;
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}
function toggleUserPerms() {
    const role = document.getElementById('modal-user-role').value;
    document.querySelectorAll('#previewBody .user-perm-cb').forEach(cb => {
        cb.checked = role === 'master';
        cb.disabled = role === 'master';
        cb.closest('label').classList.toggle('disabled', role === 'master');
    });
}
function saveUser(idx) {
    const id = document.getElementById('modal-user-id').value.trim();
    const name = document.getElementById('modal-user-name').value.trim();
    let password = document.getElementById('modal-user-pass').value.trim();
    const role = document.getElementById('modal-user-role').value;
    if (!id) return alert('User ID is required.');
    if (idx === null && !password) return alert('New users must have a password.');
    if (idx !== null && !password) {
        password = db.users[idx].password;
    }
    let permissions = [];
    if (role !== 'master') {
        document.querySelectorAll('#previewBody .user-perm-cb:checked').forEach(cb => permissions.push(cb.value));
        if (permissions.length === 0) {
            if (!confirm('User has no permissions assigned. They will not see any tabs. Continue?')) return;
        }
    } else {
        permissions = 'all';
    }
    const userData = { id, name, password, role, permissions };
    if (idx !== null && idx >= 0 && idx < db.users.length) {
        if (db.users[idx].id === 'Shaikh Shahid' && role !== 'master') {
            return alert('The Master user must remain Master.');
        }
        db.users[idx] = { ...db.users[idx], ...userData };
    } else {
        if (db.users.find(u => u.id === id)) return alert('User ID already exists.');
        db.users.push(userData);
    }
    saveDB();
    closeModal('previewModal');
    renderUserTable();
    alert('User saved successfully!');
}
function deleteUser(idx) {
    if (idx < 0 || idx >= db.users.length) return alert('User not found.');
    const user = db.users[idx];
    if (user.id === 'Shaikh Shahid') return alert('Cannot delete the Master user.');
    if (!confirm(`Delete user "${user.id}"?`)) return;
    db.users.splice(idx, 1);
    saveDB();
    renderUserTable();
}

// ==================== SQLITE BACKUP ====================
async function initSQLite() {
    return new Promise((resolve, reject) => {
        if (window.SQL) {
            SQL = window.SQL;
            resolve();
            return;
        }
        let attempts = 0;
        const maxAttempts = MAX_SQLITE_ATTEMPTS;
        const loadScript = () => {
            attempts++;
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js';
            script.onload = () => {
                if (window.SQL) {
                    SQL = window.SQL;
                    resolve();
                } else {
                    if (attempts < maxAttempts) {
                        setTimeout(loadScript, 1000);
                    } else {
                        reject(new Error('SQLite library failed to load after ' + maxAttempts + ' attempts.'));
                    }
                }
            };
            script.onerror = () => {
                if (attempts < maxAttempts) {
                    setTimeout(loadScript, 1000);
                } else {
                    reject(new Error('SQLite library failed to load after ' + maxAttempts + ' attempts.'));
                }
            };
            document.head.appendChild(script);
        };
        loadScript();
    });
}
async function exportToSQLite() {
    try {
        await initSQLite();
        if (!SQL) {
            alert('SQLite library failed to load. Please check your internet connection and refresh the page.');
            return;
        }
        const dbInstance = new SQL.Database();
        const createTables = `
            CREATE TABLE IF NOT EXISTS rates (id TEXT, mode TEXT, client TEXT, carrier TEXT, pol TEXT, pod TEXT, incoterm TEXT, commodity TEXT, weight REAL, transit TEXT, validityDate TEXT, charges TEXT, totalSellINR REAL, totalBuyINR REAL, marginINR REAL, marginPct REAL, quoteNumber TEXT, status TEXT, timestamp TEXT, lastModified TEXT, followUpStatus TEXT, lostReason TEXT);
            CREATE TABLE IF NOT EXISTS drafts (id TEXT, mode TEXT, client TEXT, carrier TEXT, pol TEXT, pod TEXT, incoterm TEXT, commodity TEXT, weight REAL, transit TEXT, validityDate TEXT, charges TEXT, totalSellINR REAL, totalBuyINR REAL, marginINR REAL, marginPct REAL, quoteNumber TEXT, status TEXT, timestamp TEXT, lastModified TEXT);
            CREATE TABLE IF NOT EXISTS ratesheet (id TEXT, carrierName TEXT, freightType TEXT, pol TEXT, pod TEXT, containerType TEXT, currency TEXT, freightAmount REAL, transitTime TEXT, commodity TEXT, validFrom TEXT, validTo TEXT, remarks TEXT, createdAt TEXT, updatedAt TEXT);
            CREATE TABLE IF NOT EXISTS shipments (code TEXT, sr TEXT, date TEXT, type TEXT, liner TEXT, jobBkg TEXT, containerNo TEXT, shipper TEXT, pol TEXT, pod TEXT, commodity TEXT, weight REAL, incoterm TEXT, cargoStatus TEXT, docsStatus TEXT, dd TEXT, eta TEXT, dd2 TEXT, valid TEXT, sell REAL, buy REAL, sales TEXT, pickup TEXT, gatein TEXT, remarks TEXT, charges TEXT, createdAt TEXT, updatedAt TEXT);
            CREATE TABLE IF NOT EXISTS bldrafts (blNumber TEXT, shipmentCode TEXT, shipper TEXT, shipperAddr TEXT, consignee TEXT, consigneeAddr TEXT, notifyParty TEXT, vessel TEXT, voyage TEXT, pol TEXT, pod TEXT, placeOfDelivery TEXT, containers TEXT, marks TEXT, goodsDesc TEXT, freightType TEXT, freightAmount REAL, freightCurrency TEXT, numOriginals INTEGER, placeOfIssue TEXT, issueDate TEXT, signature TEXT, status TEXT, createdAt TEXT, updatedAt TEXT);
            CREATE TABLE IF NOT EXISTS master_pol (value TEXT);
            CREATE TABLE IF NOT EXISTS master_pod (value TEXT);
            CREATE TABLE IF NOT EXISTS master_incoterms (value TEXT);
            CREATE TABLE IF NOT EXISTS master_containers (value TEXT);
            CREATE TABLE IF NOT EXISTS master_carriers (value TEXT);
            CREATE TABLE IF NOT EXISTS exchange_rates (currency TEXT, rate REAL);
        `;
        dbInstance.exec(createTables);

        function insertData(table, columns, rows) {
            if (!rows || rows.length === 0) return;
            const placeholders = columns.map(() => '?').join(',');
            const stmt = dbInstance.prepare(`INSERT INTO ${table} (${columns.join(',')}) VALUES (${placeholders})`);
            rows.forEach(row => {
                const values = columns.map(col => {
                    let val = row[col];
                    if (typeof val === 'object') val = JSON.stringify(val);
                    if (val === undefined || val === null) val = '';
                    return val;
                });
                stmt.run(values);
            });
            stmt.free();
        }
        const rates = [...db.rates.sea, ...db.rates.air, ...db.rates.lcl];
        insertData('rates', ['mode', 'client', 'carrier', 'pol', 'pod', 'incoterm', 'commodity', 'weight', 'transit',
            'validityDate', 'charges', 'totalSellINR', 'totalBuyINR', 'marginINR', 'marginPct', 'quoteNumber', 'status',
            'timestamp', 'lastModified', 'followUpStatus', 'lostReason'
        ], rates.map(r => ({ ...r, mode: r.mode || 'SEA' })));
        const drafts = [...db.drafts.sea, ...db.drafts.air, ...db.drafts.lcl];
        insertData('drafts', ['mode', 'client', 'carrier', 'pol', 'pod', 'incoterm', 'commodity', 'weight', 'transit',
            'validityDate', 'charges', 'totalSellINR', 'totalBuyINR', 'marginINR', 'marginPct', 'quoteNumber', 'status',
            'timestamp', 'lastModified'
        ], drafts.map(r => ({ ...r, mode: r.mode || 'SEA' })));
        insertData('ratesheet', ['id', 'carrierName', 'freightType', 'pol', 'pod', 'containerType', 'currency',
            'freightAmount', 'transitTime', 'commodity', 'validFrom', 'validTo', 'remarks', 'createdAt', 'updatedAt'
        ], db.rateSheet);
        insertData('shipments', ['code', 'sr', 'date', 'type', 'liner', 'jobBkg', 'containerNo', 'shipper', 'pol', 'pod',
            'commodity', 'weight', 'incoterm', 'cargoStatus', 'docsStatus', 'dd', 'eta', 'dd2', 'valid', 'sell', 'buy',
            'sales', 'pickup', 'gatein', 'remarks', 'charges', 'createdAt', 'updatedAt'
        ], db.shipments);
        insertData('bldrafts', ['blNumber', 'shipmentCode', 'shipper', 'shipperAddr', 'consignee', 'consigneeAddr',
            'notifyParty', 'vessel', 'voyage', 'pol', 'pod', 'placeOfDelivery', 'containers', 'marks', 'goodsDesc',
            'freightType', 'freightAmount', 'freightCurrency', 'numOriginals', 'placeOfIssue', 'issueDate', 'signature',
            'status', 'createdAt', 'updatedAt'
        ], db.bldrafts);
        insertData('master_pol', ['value'], db.pol.map(p => ({ value: p })));
        insertData('master_pod', ['value'], db.pod.map(p => ({ value: p })));
        insertData('master_incoterms', ['value'], db.incoterms.map(i => ({ value: i })));
        insertData('master_containers', ['value'], db.containers.map(c => ({ value: c })));
        insertData('master_carriers', ['value'], db.carriers.map(c => ({ value: c })));
        insertData('exchange_rates', ['currency', 'rate'], Object.entries(db.exchangeRates).map(([k, v]) => ({ currency: k,
            rate: v })));
        const data = dbInstance.export();
        const blob = new Blob([data], { type: 'application/x-sqlite3' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Backup_${new Date().toISOString().split('T')[0]}.sqlite`;
        a.click();
        URL.revokeObjectURL(url);
        alert('SQLite backup downloaded successfully!');
    } catch (e) {
        alert('SQLite export failed: ' + e.message);
    }
}
async function importFromSQLite(input) {
    const file = input.files[0];
    if (!file) return;
    try {
        await initSQLite();
        if (!SQL) {
            alert('SQLite library failed to load. Please check your internet connection and refresh the page.');
            return;
        }
        const reader = new FileReader();
        reader.onload = async function(e) {
            try {
                const arrayBuffer = e.target.result;
                const uint8Array = new Uint8Array(arrayBuffer);
                const dbInstance = new SQL.Database(uint8Array);

                function readTable(tableName) {
                    const stmt = dbInstance.prepare(`SELECT * FROM ${tableName}`);
                    const rows = [];
                    while (stmt.step()) {
                        const row = stmt.getAsObject();
                        Object.keys(row).forEach(key => {
                            if (typeof row[key] === 'string' && row[key].startsWith('{')) {
                                try { row[key] = JSON.parse(row[key]); } catch (e) {}
                            }
                        });
                        rows.push(row);
                    }
                    stmt.free();
                    return rows;
                }
                const newRates = readTable('rates');
                const newDrafts = readTable('drafts');
                const newRateSheet = readTable('ratesheet');
                const newShipments = readTable('shipments');
                const newBLDrafts = readTable('bldrafts');
                const newPol = readTable('master_pol').map(r => r.value);
                const newPod = readTable('master_pod').map(r => r.value);
                const newIncoterms = readTable('master_incoterms').map(r => r.value);
                const newContainers = readTable('master_containers').map(r => r.value);
                const newCarriers = readTable('master_carriers').map(r => r.value);
                const newExchangeRates = readTable('exchange_rates').reduce((acc, r) => { acc[r.currency] = r.rate; return acc; },
                {});
                db.rates = { sea: [], air: [], lcl: [] };
                newRates.forEach(r => { const mode = (r.mode || 'SEA').toLowerCase(); if (db.rates[mode]) db.rates[mode].push(
                        r); });
                db.drafts = { sea: [], air: [], lcl: [] };
                newDrafts.forEach(r => { const mode = (r.mode || 'SEA').toLowerCase(); if (db.drafts[mode]) db.drafts[mode].push(
                        r); });
                db.rateSheet = newRateSheet;
                db.shipments = newShipments;
                db.bldrafts = newBLDrafts;
                db.pol = newPol;
                db.pod = newPod;
                db.incoterms = newIncoterms;
                db.containers = newContainers;
                db.carriers = newCarriers;
                db.exchangeRates = newExchangeRates;
                saveDB();
                alert('SQLite import successful! Refreshing...');
                location.reload();
            } catch (err) { alert('Import failed: ' + err.message); }
        };
        reader.readAsArrayBuffer(file);
    } catch (err) {
        alert('Import failed: ' + err.message);
    }
    input.value = '';
}

// ==================== DSR DESIGN MODE ====================
function toggleDsrDesignMode() {
    dsrDesignMode = !dsrDesignMode;
    const body = document.querySelector('#seaDsrBody, #airDsrBody');
    if (body) body.classList.toggle('dsr-design-mode', dsrDesignMode);
}
document.addEventListener('dragstart', function(e) {
    const field = e.target.closest('.dsr-field');
    if (!field) return;
    e.dataTransfer.setData('text/plain', field.dataset.fieldId || field.id || '');
    setTimeout(() => field.classList.add('dragging'), 0);
});
document.addEventListener('dragover', function(e) {
    e.preventDefault();
    const field = e.target.closest('.dsr-field');
    if (field && dsrDesignMode) field.classList.add('drag-over');
});
document.addEventListener('dragleave', function(e) {
    const field = e.target.closest('.dsr-field');
    if (field) field.classList.remove('drag-over');
});
document.addEventListener('drop', function(e) {
    e.preventDefault();
    const target = e.target.closest('.dsr-field');
    if (!target || !dsrDesignMode) return;
    target.classList.remove('drag-over');
    const sourceId = e.dataTransfer.getData('text/plain');
    const source = target.parentElement.querySelector(`[data-field-id="${sourceId}"]`);
    if (!source || source === target) return;
    const parent = target.parentElement;
    const children = Array.from(parent.children);
    const srcIdx = children.indexOf(source);
    const tgtIdx = children.indexOf(target);
    if (srcIdx < tgtIdx) {
        parent.insertBefore(source, target.nextSibling);
    } else {
        parent.insertBefore(source, target);
    }
    parent.querySelectorAll('.dragging').forEach(el => el.classList.remove('dragging'));
});

// ==================== GLOBAL OMNI-SEARCH ====================
let globalSearchTimeout = null;

function debouncedGlobalSearch() {
    clearTimeout(globalSearchTimeout);
    globalSearchTimeout = setTimeout(() => performGlobalSearch(), 300);
}

function performGlobalSearch() {
    const input = document.getElementById('global-search');
    const resultsContainer = document.getElementById('global-search-results');
    const term = input.value.trim().toLowerCase();
    if (term.length < 2) {
        resultsContainer.classList.remove('show');
        resultsContainer.innerHTML = '';
        return;
    }
    let matches = [];

    function isMatch(rec, term) {
        const text =
            `${rec.quoteNumber||''} ${rec.client||''} ${rec.pol||''} ${rec.pod||''} ${rec.carrier||''} ${rec.shipper||''} ${rec.code||''} ${rec.blNumber||''} ${rec.carrierName||''}`.toLowerCase();
        return text.includes(term);
    }
    ['sea', 'air', 'lcl'].forEach(mode => {
        db.drafts[mode].forEach((rec, idx) => {
            if (isMatch(rec, term)) {
                matches.push({
                    category: 'Draft',
                    tab: 'drafts',
                    mode: mode,
                    idx: idx,
                    label: `${rec.quoteNumber} - ${rec.client}`,
                    subtitle: `${rec.pol || 'N/A'} → ${rec.pod || 'N/A'}`
                });
            }
        });
    });
    ['sea', 'air', 'lcl'].forEach(mode => {
        db.rates[mode].forEach((rec, idx) => {
            if (isMatch(rec, term)) {
                matches.push({
                    category: 'Quote',
                    tab: 'rates',
                    mode: mode,
                    idx: idx,
                    label: `${rec.quoteNumber} - ${rec.client}`,
                    subtitle: `${rec.pol || 'N/A'} → ${rec.pod || 'N/A'}`
                });
            }
        });
    });
    db.shipments.forEach((rec, idx) => {
        if (isMatch(rec, term)) {
            matches.push({
                category: 'Shipment',
                tab: 'dsr',
                mode: 'dsr',
                idx: idx,
                label: `${rec.code} - ${rec.shipper}`,
                subtitle: `${rec.pol || 'N/A'} → ${rec.pod || 'N/A'}`
            });
        }
    });
    db.bldrafts.forEach((rec, idx) => {
        if (isMatch(rec, term)) {
            matches.push({
                category: 'BL Draft',
                tab: 'bldraft',
                mode: 'bldraft',
                idx: idx,
                label: `${rec.blNumber || 'BL-Draft'} - ${rec.shipper}`,
                subtitle: `${rec.pol || 'N/A'} → ${rec.pod || 'N/A'}`
            });
        }
    });
    db.rateSheet.forEach((rec, idx) => {
        if (isMatch(rec, term)) {
            matches.push({
                category: 'Rate Sheet',
                tab: 'ratesheet',
                mode: 'ratesheet',
                idx: idx,
                label: `${rec.carrierName} - ${rec.freightType}`,
                subtitle: `${rec.pol || 'N/A'} → ${rec.pod || 'N/A'}`
            });
        }
    });
    if (matches.length === 0) {
        resultsContainer.innerHTML =
            `<div class="no-results">No records found matching "<strong>${input.value}</strong>"</div>`;
        resultsContainer.classList.add('show');
        return;
    }
    matches = matches.slice(0, 15);
    let html = '';
    let lastCategory = '';
    matches.forEach(item => {
        if (item.category !== lastCategory) {
            html += `<div class="result-group-title">${item.category}</div>`;
            lastCategory = item.category;
        }
        html += `<div class="result-item" onclick="jumpToRecord('${item.tab}', '${item.mode}', ${item.idx})">
                    <div class="title">${item.label}</div>
                    <div class="subtitle">${item.subtitle}</div>
                    <span class="tag">${item.category}</span>
                </div>`;
    });
    resultsContainer.innerHTML = html;
    resultsContainer.classList.add('show');
}

function jumpToRecord(tab, mode, idx) {
    const resultsContainer = document.getElementById('global-search-results');
    resultsContainer.classList.remove('show');
    document.getElementById('global-search').value = '';
    switchToTab(tab);
    setTimeout(() => {
        if (tab === 'drafts' || tab === 'rates') {
            editRecord(tab, mode, idx);
        } else if (tab === 'dsr') {
            editDsrShipment(idx);
        } else if (tab === 'bldraft') {
            openBLModal(idx);
        } else if (tab === 'ratesheet') {
            openRateSheetModal(idx);
        }
    }, 400);
}
document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('.global-search-wrapper');
    const results = document.getElementById('global-search-results');
    if (wrapper && !wrapper.contains(e.target)) {
        results.classList.remove('show');
    }
});

// ==================== MEASUREMENT DEFAULTS (New) ====================
function refreshMeasurementDefaults() {
    const d = db.defaults || {};
    const dutyPct = document.getElementById('duty-pct');
    if (dutyPct) dutyPct.value = d.inDuty || 0;
    const dutyService = document.getElementById('duty-service');
    if (dutyService) dutyService.value = d.inSocialWelfare || 0;
    const dutyGst = document.getElementById('duty-gst');
    if (dutyGst) dutyGst.value = d.gst || 0;
    const insPct = document.getElementById('ins-pct');
    if (insPct) insPct.value = d.insurance || 0;
    const insGst = document.getElementById('ins-gst');
    if (insGst) insGst.value = d.gst || 0;
    const prodProfit = document.getElementById('prod-profit');
    if (prodProfit) prodProfit.value = d.profitMargin || 0;
    const prodDrawback = document.getElementById('prod-drawback');
    if (prodDrawback) prodDrawback.value = d.drawback || 0;
    const prodRodtep = document.getElementById('prod-rodtep');
    if (prodRodtep) prodRodtep.value = d.rodtep || 0;
    const usDutyPct = document.getElementById('us-duty-pct');
    if (usDutyPct) usDutyPct.value = d.usDuty || 0;
    const usDutyTariff = document.getElementById('us-duty-tariff');
    if (usDutyTariff) usDutyTariff.value = d.usTariff || 0;
    const usDutyMpf = document.getElementById('us-duty-mpf');
    if (usDutyMpf) usDutyMpf.value = d.usMPF || 0;
    const usDutyHmf = document.getElementById('us-duty-hmf');
    if (usDutyHmf) usDutyHmf.value = d.usHMF || 0;
    const defaultCur = d.defaultCurrency || 'USD';
    ['duty-currency', 'prod-currency', 'ins-currency', 'us-duty-currency'].forEach(id => {
        const sel = document.getElementById(id);
        if (sel) {
            sel.value = defaultCur;
            setExchangeRate(id.replace('-currency', '-exrate'), id);
        }
    });
}

function saveMeasurementDefaults() {
    db.defaults.gst = parseFloat(document.getElementById('def-gst').value) || 0;
    db.defaults.insurance = parseFloat(document.getElementById('def-insurance').value) || 0;
    db.defaults.profitMargin = parseFloat(document.getElementById('def-profit').value) || 0;
    db.defaults.defaultCurrency = document.getElementById('def-currency').value || 'USD';
    db.defaults.usDuty = parseFloat(document.getElementById('def-us-duty').value) || 0;
    db.defaults.usTariff = parseFloat(document.getElementById('def-us-tariff').value) || 0;
    db.defaults.usMPF = parseFloat(document.getElementById('def-us-mpf').value) || 0;
    db.defaults.usHMF = parseFloat(document.getElementById('def-us-hmf').value) || 0;
    db.defaults.inDuty = parseFloat(document.getElementById('def-in-duty').value) || 0;
    db.defaults.inSocialWelfare = parseFloat(document.getElementById('def-in-social').value) || 0;
    db.defaults.drawback = parseFloat(document.getElementById('def-drawback').value) || 0;
    db.defaults.rodtep = parseFloat(document.getElementById('def-rodtep').value) || 0;
    saveDB();
    alert('Measurement defaults saved!');
    refreshMeasurementDefaults();
}

// ==================== INIT ====================
function init() {
    const user = checkLogin();
    const overlay = document.getElementById('login-overlay');
    if (!user) {
        overlay.classList.remove('hidden');
        return;
    }
    overlay.classList.add('hidden');
    applyTheme(db.theme);
    restoreNavState();
    const lastTab = db.navState.lastTab || 'sea';
    switchToTab(lastTab);
    populateDropdowns();
    renderDatabase();
    loadJsonSyncUrl();  // <-- Add this line	
	loadBackupPath();
    if (lastTab === 'drafts') renderRecords('drafts');
    if (lastTab === 'rates') renderRecords('rates');
    if (lastTab === 'ratesheet') { renderRateSheet();
        updateExpiryDashboard(); }
    if (lastTab === 'dsr') renderShipments();
    if (lastTab === 'bldraft') renderBLDrafts();
    if (lastTab === 'followup') renderFollowups();
    if (lastTab === 'dashboard') renderDashboard();
	if (!db.cbmRecords) db.cbmRecords = [];
	if (!db.defaultCCEmail) db.defaultCCEmail = "";
	if (!db.airWeightRecords) db.airWeightRecords = [];
	if (!db.defaultCCEmailSea) db.defaultCCEmailSea = "";
	if (!db.defaultCCEmailAir) db.defaultCCEmailAir = "";
	if (!db.defaultCCEmailLcl) db.defaultCCEmailLcl = "";
    if (lastTab === 'measurement') {
        refreshMeasurementDefaults();
    }
    if (lastTab === 'sealocal' || lastTab === 'airlocal' || lastTab === 'lcllocal') {
        const mode = lastTab === 'sealocal' ? 'sea' : lastTab === 'airlocal' ? 'air' : 'lcl';
        renderDefaultChargesMaster(mode);
        renderCarrierChargesMaster(mode === 'sea' ? 'sealcl' : mode);
    }
	
	if (!localStorage.getItem('sea_split_migrated')) {
    migrateDefaultSeaChargesToSplit();
	}
	
	if (!localStorage.getItem('sea_default_migrated')) {
    migrateDefaultSeaCharges();
	}
	
	['sea', 'air', 'lcl'].forEach(mode => {buildChargesGrid(mode);
    setValidityDefault(mode); });

	
    ['sea', 'air', 'lcl'].forEach(mode => { buildChargesGrid(mode);
        setValidityDefault(mode); });
    if (backupFolderHandle) {
        startAutoBackup();
        document.getElementById('backup-folder-path').textContent = `📁 ${backupFolderHandle.name}`;
    }
	
		document.querySelector('#raterequest').addEventListener('input', function(e) {
		if (e.target.closest('.form-section')) {
			hasUnsavedChanges.rr = true;
		}
	});
	document.querySelector('#raterequest').addEventListener('change', function(e) {
		if (e.target.closest('.form-section')) {
			hasUnsavedChanges.rr = true;
		}
	});
	
	document.getElementById('backup-folder-path-input').removeAttribute('readonly');
    console.log('🚢 Gateway EXIM Freight Quotation System loaded successfully.');
    console.log(
        `📊 ${db.rates.sea.length + db.rates.air.length + db.rates.lcl.length} quoted records, ${db.drafts.sea.length + db.drafts.air.length + db.drafts.lcl.length} drafts, ${db.shipments.length} shipments.`
        );
}
document.addEventListener('DOMContentLoaded', init);

// ==================== AUTO-SAVE MEASUREMENT DEFAULTS ON CHANGE ====================
function autoSaveMeasurementDefaults() {
    const inputIds = [
        'def-gst', 'def-insurance', 'def-profit',
        'def-us-tariff', 'def-us-mpf', 'def-us-hmf',
        'def-in-duty', 'def-in-social', 'def-drawback', 'def-rodtep'
    ];
    inputIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('input', function() {
                db.defaults.gst = parseFloat(document.getElementById('def-gst').value) || 0;
                db.defaults.insurance = parseFloat(document.getElementById('def-insurance').value) || 0;
                db.defaults.profitMargin = parseFloat(document.getElementById('def-profit').value) || 0;
                db.defaults.usTariff = parseFloat(document.getElementById('def-us-tariff').value) || 0;
                db.defaults.usMPF = parseFloat(document.getElementById('def-us-mpf').value) || 0;
                db.defaults.usHMF = parseFloat(document.getElementById('def-us-hmf').value) || 0;
                db.defaults.inDuty = parseFloat(document.getElementById('def-in-duty').value) || 0;
                db.defaults.inSocialWelfare = parseFloat(document.getElementById('def-in-social').value) || 0;
                db.defaults.drawback = parseFloat(document.getElementById('def-drawback').value) || 0;
                db.defaults.rodtep = parseFloat(document.getElementById('def-rodtep').value) || 0;
                saveDB();
                refreshMeasurementDefaults();
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    autoSaveMeasurementDefaults();
});

// ==================== MEASUREMENT CALCULATORS ====================
function showMeasurementMenu() {
    document.getElementById('measurement-menu').style.display = 'block';
    document.getElementById('measurement-content').style.display = 'none';
    document.querySelectorAll('#measurement-content .calc-panel').forEach(p => p.classList.remove('active'));
}

function switchCalcTab(tabId) {
    document.getElementById('measurement-menu').style.display = 'none';
    document.getElementById('measurement-content').style.display = 'block';
    document.querySelectorAll('#measurement-content .calc-panel').forEach(p => p.classList.remove('active'));
    const panel = document.getElementById('calc-' + tabId);
    if (panel) panel.classList.add('active');

    if (tabId === 'stuffing') {
        initStuffingPlanning();
    }

    if (['duty', 'product', 'insurance', 'us-duty'].includes(tabId)) {
        const ids = ['duty-currency', 'prod-currency', 'ins-currency', 'us-duty-currency'];
        ids.forEach(id => {
            const sel = document.getElementById(id);
            if (sel && sel.options.length === 0) {
                sel.innerHTML = '<option value="">Select</option>' + Object.keys(db.exchangeRates).map(c =>
                    `<option value="${c}">${c}</option>`).join('');
            }
        });
    }

    refreshMeasurementDefaults();
    if (tabId === 'duty') calcDuty();
    else if (tabId === 'product') calcProduct();
    else if (tabId === 'insurance') calcInsurance();
    else if (tabId === 'us-duty') calcUSDuty();
}

function setExchangeRate(targetInputId, currencyInputId) {
    const cur = document.getElementById(currencyInputId).value;
    const rate = db.exchangeRates[cur];
    if (rate) {
        document.getElementById(targetInputId).value = rate;
        document.getElementById(targetInputId).disabled = false;
    } else {
        document.getElementById(targetInputId).value = '';
        document.getElementById(targetInputId).disabled = false;
    }
    const panel = document.getElementById(currencyInputId).closest('.calc-panel');
    if (panel.id === 'calc-duty') calcDuty();
    else if (panel.id === 'calc-product') calcProduct();
    else if (panel.id === 'calc-insurance') calcInsurance();
    else if (panel.id === 'calc-us-duty') calcUSDuty();
}

document.addEventListener('change', function(e) {
    if (e.target.id === 'duty-currency') setExchangeRate('duty-exrate', 'duty-currency');
    if (e.target.id === 'prod-currency') setExchangeRate('prod-exrate', 'prod-currency');
    if (e.target.id === 'ins-currency') setExchangeRate('ins-exrate', 'ins-currency');
    if (e.target.id === 'us-duty-currency') setExchangeRate('us-duty-exrate', 'us-duty-currency');
});

function calcDuty() {
    const val = parseFloat(document.getElementById('duty-value').value) || 0;
    const freightInsUsd = parseFloat(document.getElementById('duty-freight').value) || 0;
    const ex = parseFloat(document.getElementById('duty-exrate').value) || 0;
    const dutyPct = parseFloat(document.getElementById('duty-pct').value) || 0;
    const swsPct = parseFloat(document.getElementById('duty-service').value) || 0;
    const gstPct = parseFloat(document.getElementById('duty-gst').value) || 0;

    const cargoInr = val * ex;
    const freightInsInr = freightInsUsd * ex;

    const duty = cargoInr * (dutyPct / 100);
    const sws = cargoInr * (swsPct / 100);
    const totalGst = gstPct / 100 * (cargoInr + freightInsInr + duty + sws);
    const totalPayable = duty + sws + totalGst;

    const valUsd = val;
    const freightInsUsdDisplay = freightInsUsd;
    const dutyUsd = duty / ex;
    const swsUsd = sws / ex;
    const totalGstUsd = totalGst / ex;
    const totalPayableUsd = totalPayable / ex;

    const formatUSD = (n) => '$ ' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    document.getElementById('duty-inr').textContent = formatINR(cargoInr);
    document.getElementById('duty-usd').textContent = formatUSD(valUsd);
    document.getElementById('duty-frt-inr').textContent = formatINR(freightInsInr);
    document.getElementById('duty-frt-usd').textContent = formatUSD(freightInsUsdDisplay);
    document.getElementById('duty-amt').textContent = formatINR(duty);
    document.getElementById('duty-amt-usd').textContent = formatUSD(dutyUsd);
    document.getElementById('duty-service-amt').textContent = formatINR(sws);
    document.getElementById('duty-service-usd').textContent = formatUSD(swsUsd);
    document.getElementById('duty-gst-amt').textContent = formatINR(totalGst);
    document.getElementById('duty-gst-usd').textContent = formatUSD(totalGstUsd);
    document.getElementById('duty-total').textContent = formatINR(totalPayable);
    document.getElementById('duty-total-usd').textContent = formatUSD(totalPayableUsd);

    // Update labels with percentages
    document.querySelector('#duty-amt').closest('tr').querySelector('td:first-child').innerHTML =
        `<span style="background:#dbeafe;color:#1e3a8a;padding:2px 8px;border-radius:4px;font-size:0.7rem;">DUT</span> Duty Amount (${dutyPct}%)`;
    document.querySelector('#duty-service-amt').closest('tr').querySelector('td:first-child').innerHTML =
        `<span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:4px;font-size:0.7rem;">SWS</span> SWS Amount (${swsPct}%)`;
    document.querySelector('#duty-gst-amt').closest('tr').querySelector('td:first-child').innerHTML =
        `<span style="background:#dbeafe;color:#1e3a8a;padding:2px 8px;border-radius:4px;font-size:0.7rem;">GST</span> GST on Duty (${gstPct}%)`;
}

function calcProduct() {
    const pricePerUnit = parseFloat(document.getElementById('prod-price').value) || 0;
    const weight = parseFloat(document.getElementById('prod-weight').value) || 0;
    const unit = document.getElementById('prod-unit').value;
    const ex = parseFloat(document.getElementById('prod-exrate').value) || 0;
    const freightUsd = parseFloat(document.getElementById('prod-freight').value) || 0;
    const otherUsd = parseFloat(document.getElementById('prod-other').value) || 0;
    const drawbackPct = parseFloat(document.getElementById('prod-drawback').value) || 0;
    const rodtepPct = parseFloat(document.getElementById('prod-rodtep').value) || 0;
    const profitPct = parseFloat(document.getElementById('prod-profit').value) || 0;

    let weightKgs = weight;
    if (unit === 'tons') weightKgs = weight * 1000;

    const productPriceUsd = pricePerUnit * weightKgs;
    const insuranceUsd = Math.max(productPriceUsd * 0.0005, 25);
    const drawbackUsd = productPriceUsd * (drawbackPct / 100);
    const rodtepUsd = productPriceUsd * (rodtepPct / 100);
    const totalCostUsd = productPriceUsd + freightUsd + insuranceUsd + otherUsd;

    const productPriceInr = productPriceUsd * ex;
    const freightInr = freightUsd * ex;
    const insuranceInr = insuranceUsd * ex;
    const otherInr = otherUsd * ex;
    const drawbackInr = drawbackUsd * ex;
    const rodtepInr = rodtepUsd * ex;
    const totalCostInr = totalCostUsd * ex;

    const profitInr = totalCostInr * (profitPct / 100);
    const profitUsd = profitInr / ex;
    const finalPriceInr = totalCostInr + profitInr;
    const finalPriceUsd = finalPriceInr / ex;
    const totalMarginInr = drawbackInr + rodtepInr + profitInr;
    const totalMarginUsd = drawbackUsd + rodtepUsd + profitUsd;

    const formatUSD = (n) => '$ ' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2,
        maximumFractionDigits: 2 });

    document.getElementById('prod-inr').textContent = formatINR(productPriceInr);
    document.getElementById('prod-usd').textContent = formatUSD(productPriceUsd);
    document.getElementById('prod-ins-inr').textContent = formatINR(insuranceInr);
    document.getElementById('prod-ins-usd').textContent = formatUSD(insuranceUsd);
    document.getElementById('prod-freight-inr').textContent = formatINR(freightInr);
    document.getElementById('prod-freight-usd').textContent = formatUSD(freightUsd);
    document.getElementById('prod-other-inr').textContent = formatINR(otherInr);
    document.getElementById('prod-other-usd').textContent = formatUSD(otherUsd);
    document.getElementById('prod-landed-inr').textContent = formatINR(totalCostInr);
    document.getElementById('prod-landed-usd').textContent = formatUSD(totalCostUsd);
    document.getElementById('prod-profit-inr').textContent = formatINR(profitInr);
    document.getElementById('prod-profit-usd').textContent = formatUSD(profitUsd);
    document.getElementById('prod-final').textContent = formatINR(finalPriceInr);
    document.getElementById('prod-final-usd').textContent = formatUSD(finalPriceUsd);

    document.getElementById('prod-drawback-inr').textContent = formatINR(drawbackInr);
    document.getElementById('prod-drawback-usd').textContent = formatUSD(drawbackUsd);
    document.getElementById('prod-rodtep-inr').textContent = formatINR(rodtepInr);
    document.getElementById('prod-rodtep-usd').textContent = formatUSD(rodtepUsd);
    document.getElementById('prod-benefit-profit-inr').textContent = formatINR(profitInr);
    document.getElementById('prod-benefit-profit-usd').textContent = formatUSD(profitUsd);
    document.getElementById('prod-total-margin-inr').textContent = formatINR(totalMarginInr);
    document.getElementById('prod-total-margin-usd').textContent = formatUSD(totalMarginUsd);

	document.querySelector('#prod-drawback-inr').closest('tr').querySelector('td:first-child').innerHTML =
		`<span style="background:#dbeafe;color:#1e3a8a;padding:2px 8px;border-radius:4px;font-size:0.7rem;">DBK</span> Drawback (${drawbackPct}%)`;
	document.querySelector('#prod-rodtep-inr').closest('tr').querySelector('td:first-child').innerHTML =
		`<span style="background:#fef3c7;color:#92400e;padding:2px 8px;border-radius:4px;font-size:0.7rem;">ROD</span> RODTEP (${rodtepPct}%)`;
	document.querySelector('#prod-benefit-profit-inr').closest('tr').querySelector('td:first-child').innerHTML =
		`<span style="background:#dbeafe;color:#1e3a8a;padding:2px 8px;border-radius:4px;font-size:0.7rem;">PRF</span> Expected Profit (${profitPct}%)`;


}

function createStuffingRow(index) {
    const row = document.createElement('tr');
    row.style.borderBottom = '1px solid var(--border)';
    row.style.background = index % 2 === 0 ? 'var(--bg)' : 'var(--card-bg)';
    row.innerHTML = `
        <td style="padding:8px 14px;text-align:center;font-weight:600;">${index + 1}</td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="text" class="stuffing-vessel" placeholder="Vessel name" style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-departure" onchange="updateStuffingDates(this)" style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-eta" readonly style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;background:#F1F5F9;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-gate-open" readonly style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;background:#F1F5F9;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-gate-cut" readonly style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;background:#F1F5F9;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-sb-cut" readonly style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;background:#F1F5F9;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-si-cut" readonly style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;background:#F1F5F9;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <button class="btn btn-sm btn-clear" onclick="removeStuffingRow(this)" style="padding:2px 8px;">×</button>
        </td>
    `;
    return row;
}

function addStuffingRow() {
    const tbody = document.getElementById('stuffing-table-body');
    const index = tbody.children.length;
    const row = createStuffingRow(index);
    tbody.appendChild(row);
}

function removeStuffingRow(btn) {
    const row = btn.closest('tr');
    const tbody = document.getElementById('stuffing-table-body');
    if (tbody.children.length > 1) {
        row.remove();
        tbody.querySelectorAll('tr').forEach((tr, i) => {
            tr.querySelector('td:first-child').textContent = i + 1;
        });
    } else {
        alert('You must keep at least one row.');
    }
}

function clearStuffingRows() {
    if (confirm('Clear all stuffing rows?')) {
        const tbody = document.getElementById('stuffing-table-body');
        tbody.innerHTML = '';
        addStuffingRow();
    }
}

function updateStuffingDates(departureInput) {
    const row = departureInput.closest('tr');
    const depDate = new Date(departureInput.value);
    if (isNaN(depDate)) return;
    const offsetEta = parseInt(document.getElementById('offset-eta').value) || -1;
    const offsetGateOpen = parseInt(document.getElementById('offset-gate-open').value) || -5;
    const offsetGateCut = parseInt(document.getElementById('offset-gate-cut').value) || -2;
    const offsetSbCut = parseInt(document.getElementById('offset-sb-cut').value) || -2;
    const offsetSiCut = parseInt(document.getElementById('offset-si-cut').value) || -3;
    const formatDate = (date) => date.toISOString().split('T')[0];
    const eta = new Date(depDate);
    eta.setDate(eta.getDate() + offsetEta);
    row.querySelector('.stuffing-eta').value = formatDate(eta);
    const gateOpen = new Date(depDate);
    gateOpen.setDate(gateOpen.getDate() + offsetGateOpen);
    row.querySelector('.stuffing-gate-open').value = formatDate(gateOpen);
    const gateCut = new Date(depDate);
    gateCut.setDate(gateCut.getDate() + offsetGateCut);
    row.querySelector('.stuffing-gate-cut').value = formatDate(gateCut);
    const sbCut = new Date(depDate);
    sbCut.setDate(sbCut.getDate() + offsetSbCut);
    row.querySelector('.stuffing-sb-cut').value = formatDate(sbCut);
    const siCut = new Date(depDate);
    siCut.setDate(siCut.getDate() + offsetSiCut);
    row.querySelector('.stuffing-si-cut').value = formatDate(siCut);
}

function initStuffingPlanning() {
    const tbody = document.getElementById('stuffing-table-body');
    if (tbody && tbody.children.length === 0) {
        addStuffingRow();
    }
}

function calcInsurance() {
    const val = parseFloat(document.getElementById('ins-value').value) || 0;
    const ex = parseFloat(document.getElementById('ins-exrate').value) || 0;
    const insPct = parseFloat(document.getElementById('ins-pct').value) || 0;
    const gstPct = parseFloat(document.getElementById('ins-gst').value) || 0;
    const totalRow = document.getElementById('ins-total-row');
    if (val === 0 || ex === 0) {
        totalRow.style.display = 'none';
        document.getElementById('ins-inr').textContent = '₹ 0.00';
        document.getElementById('ins-usd').textContent = '$ 0.00';
        document.getElementById('ins-amt').textContent = '₹ 0.00';
        document.getElementById('ins-amt-usd').textContent = '$ 0.00';
        document.getElementById('ins-gst-amt').textContent = '₹ 0.00';
        document.getElementById('ins-gst-usd').textContent = '$ 0.00';
        document.getElementById('ins-total').textContent = '₹ 0.00';
        document.getElementById('ins-total-usd').textContent = '$ 0.00';
        return;
    }
    const cargoValueUsd = val;
    const calculatedIns = cargoValueUsd * (insPct / 100);
    const insUsd = Math.max(calculatedIns, 25);
    const insInr = insUsd * ex;
    const gstUsd = insUsd * (gstPct / 100);
    const gstInr = gstUsd * ex;
    const totalUsd = insUsd + gstUsd;
    const totalInr = insInr + gstInr;
    const formatUSD = (n) => '$ ' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2,
        maximumFractionDigits: 2 });
    document.getElementById('ins-inr').textContent = formatINR(val * ex);
    document.getElementById('ins-usd').textContent = formatUSD(val);
    document.getElementById('ins-amt').textContent = formatINR(insInr);
    document.getElementById('ins-amt-usd').textContent = formatUSD(insUsd);
    document.getElementById('ins-gst-amt').textContent = formatINR(gstInr);
    document.getElementById('ins-gst-usd').textContent = formatUSD(gstUsd);
    document.getElementById('ins-total').textContent = formatINR(totalInr);
    document.getElementById('ins-total-usd').textContent = formatUSD(totalUsd);
    totalRow.style.display = 'table-footer-group';
	
	document.querySelector('#ins-gst-amt').closest('tr').querySelector('td:first-child').innerHTML =
    `<span style="background:#dbeafe;color:#1e3a8a;padding:2px 8px;border-radius:4px;font-size:0.7rem;">GST</span> GST on Insurance (${gstPct}%)`;
}

function calcUSDuty() {
    const val = parseFloat(document.getElementById('us-duty-value').value) || 0;
    const ex = parseFloat(document.getElementById('us-duty-exrate').value) || 0;
    const dutyPct = parseFloat(document.getElementById('us-duty-pct').value) || 0;
    const tariffPct = parseFloat(document.getElementById('us-duty-tariff').value) || 0;
    const mpfPct = parseFloat(document.getElementById('us-duty-mpf').value) || 0;
    const hmfPct = parseFloat(document.getElementById('us-duty-hmf').value) || 0;
    const inr = val * ex;
    const duty = inr * (dutyPct / 100);
    const tariff = inr * (tariffPct / 100);
    const mpf = inr * (mpfPct / 100);
    const hmf = inr * (hmfPct / 100);
    const total = duty + tariff + mpf + hmf;
    const valUsd = val;
    const dutyUsd = duty / ex;
    const tariffUsd = tariff / ex;
    const mpfUsd = mpf / ex;
    const hmfUsd = hmf / ex;
    const totalUsd = total / ex;
    const formatUSD = (n) => '$ ' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2,
        maximumFractionDigits: 2 });
    document.getElementById('us-duty-inr').textContent = formatINR(inr);
    document.getElementById('us-duty-usd').textContent = formatUSD(valUsd);
    document.getElementById('us-duty-amt').textContent = formatINR(duty);
    document.getElementById('us-duty-amt-usd').textContent = formatUSD(dutyUsd);
    document.getElementById('us-duty-tariff-amt').textContent = formatINR(tariff);
    document.getElementById('us-duty-tariff-usd').textContent = formatUSD(tariffUsd);
    document.getElementById('us-duty-mpf-amt').textContent = formatINR(mpf);
    document.getElementById('us-duty-mpf-usd').textContent = formatUSD(mpfUsd);
    document.getElementById('us-duty-hmf-amt').textContent = formatINR(hmf);
    document.getElementById('us-duty-hmf-usd').textContent = formatUSD(hmfUsd);
    document.getElementById('us-duty-total').textContent = formatINR(total);
    document.getElementById('us-duty-total-usd').textContent = formatUSD(totalUsd);
}

if (!db.stuffing) db.stuffing = [];

function createStuffingRow(index, data) {
    const row = document.createElement('tr');
    row.style.borderBottom = '1px solid var(--border)';
    row.style.background = index % 2 === 0 ? 'var(--bg)' : 'var(--card-bg)';
    row.dataset.index = index;
    row.innerHTML = `
        <td style="padding:8px 14px;text-align:center;font-weight:600;">${index + 1}</td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="text" class="stuffing-vessel" value="${data?.vessel || ''}" placeholder="Vessel name" style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;" oninput="onStuffingInput()" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-departure" value="${data?.departure || ''}" onchange="updateStuffingDates(this); onStuffingInput();" style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-eta" value="${data?.eta || ''}" readonly style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;background:#f1f5f9;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-gate-open" value="${data?.gateOpen || ''}" readonly style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;background:#f1f5f9;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-gate-cut" value="${data?.gateCut || ''}" readonly style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;background:#f1f5f9;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-sb-cut" value="${data?.sbCut || ''}" readonly style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;background:#f1f5f9;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <input type="date" class="stuffing-si-cut" value="${data?.siCut || ''}" readonly style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;text-align:center;background:#f1f5f9;" />
        </td>
        <td style="padding:8px 14px;text-align:center;">
            <button class="btn btn-sm btn-clear" onclick="removeStuffingRow(this)" style="padding:2px 8px;">×</button>
        </td>
    `;
    return row;
}

function saveStuffingData() {
    const rows = document.querySelectorAll('#stuffing-table-body tr');
    db.stuffing = [];
    rows.forEach((row, i) => {
        const vessel = row.querySelector('.stuffing-vessel').value;
        const departure = row.querySelector('.stuffing-departure').value;
        const eta = row.querySelector('.stuffing-eta').value;
        const gateOpen = row.querySelector('.stuffing-gate-open').value;
        const gateCut = row.querySelector('.stuffing-gate-cut').value;
        const sbCut = row.querySelector('.stuffing-sb-cut').value;
        const siCut = row.querySelector('.stuffing-si-cut').value;
        db.stuffing.push({ vessel, departure, eta, gateOpen, gateCut, sbCut, siCut });
    });
    saveDB();
}

function onStuffingInput() {
    saveStuffingData();
}

function onOffsetChange() {
    document.querySelectorAll('#stuffing-table-body .stuffing-departure').forEach(depInput => {
        if (depInput.value) {
            updateStuffingDates(depInput);
        }
    });
    saveStuffingData();
}

function removeStuffingRow(btn) {
    const row = btn.closest('tr');
    const tbody = document.getElementById('stuffing-table-body');
    if (tbody.children.length > 1) {
        row.remove();
        tbody.querySelectorAll('tr').forEach((tr, i) => {
            tr.querySelector('td:first-child').textContent = i + 1;
        });
        saveStuffingData();
    } else {
        alert('You must keep at least one row.');
    }
}

function initStuffingPlanning() {
    const tbody = document.getElementById('stuffing-table-body');
    tbody.innerHTML = '';
    const data = db.stuffing || [];
    if (data.length === 0) {
        addStuffingRow();
    } else {
        data.forEach((item, idx) => {
            const row = createStuffingRow(idx, item);
            tbody.appendChild(row);
        });
    }
    document.querySelectorAll('#stuffing-table-body .stuffing-departure').forEach(depInput => {
        if (depInput.value) {
            updateStuffingDates(depInput);
        }
    });
}

// ==================== USA TRUCKING MODULE ====================
if (!db.truckingShipments) db.truckingShipments = [];

function formatUSD(n) {
    return '$ ' + Number(n || 0).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function onTruckInput() {
    calcTruckingTotals();
    document.querySelectorAll('#truck-origin, #truck-dest').forEach(el => {
        el.value = el.value.toUpperCase();
    });
}

function calcTruckingTotals() {
    const miles = parseFloat(document.getElementById('truck-miles').value) || 0;
    const distance = miles * 2;
    document.getElementById('truck-distance').value = distance.toFixed(2);
    const perMile = parseFloat(document.getElementById('truck-per-mile').value) || 0;
    const min = parseFloat(document.getElementById('truck-minimum').value) || 0;
    const chassisDays = parseInt(document.getElementById('truck-chassis-days').value) || 2;
    const inventory = parseInt(document.getElementById('truck-inventory').value) || 1;
    let regTotal = Math.max(perMile * distance, min);
    const chassisCost = 45 * chassisDays * inventory;
    regTotal += chassisCost;
    document.getElementById('truck-regular-total').textContent = formatUSD(regTotal);
    let addTotal = 0;
    document.querySelectorAll('#truck-additional-container .truck-additional-row').forEach(row => {
        const amt = parseFloat(row.querySelector('.charge-amt').value) || 0;
        addTotal += amt;
    });
    document.getElementById('truck-additional-total').textContent = formatUSD(addTotal);
    const grand = regTotal + addTotal;
    document.getElementById('truck-grand-total').textContent = formatUSD(grand);
    return { regTotal, addTotal, grand };
}

function buildTruckingAdditionalRows(charges) {
    const container = document.getElementById('truck-additional-container');
    container.innerHTML = '';
    const defaultCharges = charges || [
        { name: 'STORAGE', amount: 0 },
        { name: 'PRE PULL', amount: 0 },
        { name: 'DETENTION', amount: 0 },
        { name: 'STOP OFF CHARGES', amount: 0 },
        { name: 'CHASSIS SPLIT', amount: 0 },
        { name: 'OVER WEIGHT CHARGES', amount: 0 },
        { name: 'TRIAXLE CHASSIS', amount: 0 }
    ];
    defaultCharges.forEach((charge, idx) => {
        addTruckingAdditionalRow(charge.name, charge.amount, idx);
    });
    enableTruckingDragDrop();
}

function addTruckingAdditionalRow(name = '', amount = 0, index = null) {
    const container = document.getElementById('truck-additional-container');
    const row = document.createElement('div');
    row.className = 'truck-additional-row';
    row.draggable = true;
    row.dataset.index = index !== null ? index : container.children.length;
    row.innerHTML = `
        <span class="charge-name">${name || 'NEW CHARGE'}</span>
        <input type="text" class="charge-name-input" value="${name}" placeholder="Charge Name" style="width:120px;font-weight:600;text-transform:uppercase;" oninput="this.value = this.value.toUpperCase(); onTruckInput();">
        <input type="number" class="charge-amt" value="${amount}" step="0.01" placeholder="0.00" oninput="onTruckInput()">
        <button class="charge-del" onclick="removeTruckingAdditionalRow(this)">×</button>
    `;
    container.appendChild(row);
    enableTruckingDragDrop();
    onTruckInput();
}

function removeTruckingAdditionalRow(btn) {
    const row = btn.closest('.truck-additional-row');
    if (document.querySelectorAll('#truck-additional-container .truck-additional-row').length > 1) {
        row.remove();
        onTruckInput();
    } else {
        alert('You must keep at least one additional charge row.');
    }
}

let truckDragData = null;

function enableTruckingDragDrop() {
    document.querySelectorAll('#truck-additional-container .truck-additional-row').forEach(row => {
        row.addEventListener('dragstart', function(e) {
            truckDragData = this;
            this.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
        });
        row.addEventListener('dragend', function(e) {
            this.classList.remove('dragging');
            document.querySelectorAll('#truck-additional-container .truck-additional-row').forEach(r => r.classList.remove(
            'drag-over'));
        });
        row.addEventListener('dragover', function(e) {
            e.preventDefault();
            this.classList.add('drag-over');
        });
        row.addEventListener('dragleave', function(e) {
            this.classList.remove('drag-over');
        });
        row.addEventListener('drop', function(e) {
            e.preventDefault();
            this.classList.remove('drag-over');
            if (truckDragData && truckDragData !== this) {
                const container = document.getElementById('truck-additional-container');
                const children = Array.from(container.children);
                const srcIdx = children.indexOf(truckDragData);
                const tgtIdx = children.indexOf(this);
                if (srcIdx < tgtIdx) {
                    container.insertBefore(truckDragData, this.nextSibling);
                } else {
                    container.insertBefore(truckDragData, this);
                }
                truckDragData = null;
                onTruckInput();
            }
        });
    });
}

function getTruckingFormData() {
    const data = {
        origin: document.getElementById('truck-origin').value.trim().toUpperCase(),
        destination: document.getElementById('truck-dest').value.trim().toUpperCase(),
        inventory: parseInt(document.getElementById('truck-inventory').value) || 1,
        miles: parseFloat(document.getElementById('truck-miles').value) || 0,
        perMile: parseFloat(document.getElementById('truck-per-mile').value) || 0,
        minimum: parseFloat(document.getElementById('truck-minimum').value) || 0,
        chassisDays: parseInt(document.getElementById('truck-chassis-days').value) || 2,
        additional: []
    };
    document.querySelectorAll('#truck-additional-container .truck-additional-row').forEach(row => {
        const name = row.querySelector('.charge-name-input').value.trim().toUpperCase();
        const amount = parseFloat(row.querySelector('.charge-amt').value) || 0;
        data.additional.push({ name, amount });
    });
    const totals = calcTruckingTotals();
    data.regularTotal = totals.regTotal;
    data.additionalTotal = totals.addTotal;
    data.grandTotal = totals.grand;
    data.timestamp = new Date().toISOString();
    data.lastModified = data.timestamp;
    return data;
}

function loadTruckingForm(data) {
    document.getElementById('truck-origin').value = data.origin || '';
    document.getElementById('truck-dest').value = data.destination || '';
    document.getElementById('truck-inventory').value = data.inventory || 1;
    document.getElementById('truck-miles').value = data.miles || 0;
    document.getElementById('truck-per-mile').value = data.perMile || 0;
    document.getElementById('truck-minimum').value = data.minimum || 0;
    document.getElementById('truck-chassis-days').value = data.chassisDays || 2;
    buildTruckingAdditionalRows(data.additional || []);
    onTruckInput();
}

function saveTruckingShipment() {
    const data = getTruckingFormData();
    if (!data.origin || !data.destination) {
        alert('Please fill Origin and Destination.');
        return;
    }
    const editId = document.getElementById('trucking-edit-id').value;
    if (editId) {
        const idx = db.truckingShipments.findIndex(s => s.id === editId);
        if (idx !== -1) {
            data.id = editId;
            data.createdAt = db.truckingShipments[idx].createdAt || data.timestamp;
            db.truckingShipments[idx] = data;
            document.getElementById('trucking-edit-id').value = '';
        } else {
            alert('Record not found.');
            return;
        }
    } else {
        data.id = 'TR-' + Date.now().toString(36).toUpperCase();
        data.createdAt = data.timestamp;
        data.status = 'Active';
        db.truckingShipments.push(data);
    }
    saveDB();
    renderTruckingList();
    alert('Trucking shipment saved!');
    clearTruckingForm();
    autoBackup();
}

function clearTruckingForm() {
    document.getElementById('truck-origin').value = '';
    document.getElementById('truck-dest').value = '';
    document.getElementById('truck-inventory').value = 1;
    document.getElementById('truck-miles').value = '';
    document.getElementById('truck-per-mile').value = '';
    document.getElementById('truck-minimum').value = '';
    document.getElementById('truck-chassis-days').value = 2;
    document.getElementById('trucking-edit-id').value = '';
    buildTruckingAdditionalRows();
    onTruckInput();
}

function renderTruckingList() {
    const search = (document.getElementById('truck-search').value || '').toLowerCase();
    const statusFilter = document.getElementById('truck-status-filter').value;
    const sort = document.getElementById('truck-sort').value;
    const perPage = parseInt(document.getElementById('truck-per-page').value) || 10;
    let shipments = db.truckingShipments || [];
    shipments = shipments.filter(s => {
        const text = `${s.origin} ${s.destination}`.toLowerCase();
        if (search && !text.includes(search)) return false;
        if (statusFilter && s.status !== statusFilter) return false;
        return true;
    });
    shipments.sort((a, b) => {
        switch (sort) {
            case 'date-desc':
                return new Date(b.timestamp) - new Date(a.timestamp);
            case 'date-asc':
                return new Date(a.timestamp) - new Date(b.timestamp);
            case 'origin':
                return (a.origin || '').localeCompare(b.origin || '');
            default:
                return 0;
        }
    });
    const total = shipments.length;
    const totalPages = Math.ceil(total / perPage) || 1;
    let page = parseInt(sessionStorage.getItem('truckPage') || '1');
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    sessionStorage.setItem('truckPage', String(page));
    const start = (page - 1) * perPage;
    const pageData = shipments.slice(start, start + perPage);
    const list = document.getElementById('trucking-list');
    if (total === 0) {
        list.innerHTML = '<p style="color:var(--text-light);padding:20px;text-align:center;">No trucking shipments found.</p>';
        document.getElementById('trucking-pagination').innerHTML = '';
        return;
    }
    list.innerHTML = pageData.map((s, i) => {
        const realIdx = db.truckingShipments.indexOf(s);
        const statusClass = s.status === 'Active' ? 'status-active' : s.status === 'Completed' ? 'status-expiring' :
            'status-expired';
        return `<div class="truck-shipment-card">
            <div class="info">
                <h4>${s.origin} → ${s.destination}</h4>
                <p>Inventory: ${s.inventory} | Miles: ${s.miles} | Grand Total: ${formatUSD(s.grandTotal)}</p>
                <p>Status: <span class="status-badge ${statusClass}">${s.status}</span> | Saved: ${new Date(s.timestamp).toLocaleDateString('en-IN')}</p>
            </div>
            <div class="actions">
                <button class="btn btn-sm btn-preview" onclick="previewTruckingShipment(${realIdx})">👁</button>
                <button class="btn btn-sm btn-preview" onclick="editTruckingShipment(${realIdx})">✏️</button>
                <button class="btn btn-sm btn-duplicate" onclick="duplicateTruckingShipment(${realIdx})">📋</button>
                <button class="btn btn-sm btn-clear" onclick="deleteTruckingShipment(${realIdx})">×</button>
            </div>
        </div>`;
    }).join('');
    const pag = document.getElementById('trucking-pagination');
    if (totalPages <= 1) { pag.innerHTML = ''; return; }
    let pagHtml = `<button class="page-btn" onclick="changeTruckingPage(${page - 1})" ${page === 1 ? 'disabled' : ''}>‹ Prev</button>`;
    pagHtml += `<span class="page-info">Page ${page} of ${totalPages} (${total} records)</span>`;
    pagHtml += `<button class="page-btn" onclick="changeTruckingPage(${page + 1})" ${page === totalPages ? 'disabled' : ''}>Next ›</button>`;
    pag.innerHTML = pagHtml;
}

function changeTruckingPage(page) {
    sessionStorage.setItem('truckPage', String(page));
    renderTruckingList();
}

function clearTruckingFilters() {
    document.getElementById('truck-search').value = '';
    document.getElementById('truck-status-filter').value = '';
    document.getElementById('truck-sort').value = 'date-desc';
    document.getElementById('truck-per-page').value = '10';
    sessionStorage.setItem('truckPage', '1');
    renderTruckingList();
}

function editTruckingShipment(idx) {
    const s = db.truckingShipments[idx];
    if (!s) return alert('Shipment not found.');
    loadTruckingForm(s);
    document.getElementById('trucking-edit-id').value = s.id;
    document.getElementById('calc-us-trucking').scrollIntoView({ behavior: 'smooth' });
}

function duplicateTruckingShipment(idx) {
    const s = db.truckingShipments[idx];
    if (!s) return alert('Shipment not found.');
    const copy = JSON.parse(JSON.stringify(s));
    copy.id = 'TR-' + Date.now().toString(36).toUpperCase();
    copy.timestamp = new Date().toISOString();
    copy.lastModified = copy.timestamp;
    copy.status = 'Active';
    delete copy._id;
    db.truckingShipments.push(copy);
    saveDB();
    renderTruckingList();
    alert('Shipment duplicated!');
    autoBackup();
}

function deleteTruckingShipment(idx) {
    const s = db.truckingShipments[idx];
    if (!s) return alert('Shipment not found.');
    if (confirm(`Delete trucking shipment "${s.origin} → ${s.destination}"?`)) {
        db.truckingShipments.splice(idx, 1);
        saveDB();
        renderTruckingList();
        autoBackup();
    }
}

function duplicateTruckingCurrent() {
    const data = getTruckingFormData();
    if (!data.origin || !data.destination) {
        alert('Please fill Origin and Destination.');
        return;
    }
    data.id = 'TR-' + Date.now().toString(36).toUpperCase();
    data.timestamp = new Date().toISOString();
    data.lastModified = data.timestamp;
    data.status = 'Active';
    db.truckingShipments.push(data);
    saveDB();
    renderTruckingList();
    alert('Current form duplicated and saved!');
    autoBackup();
}

function previewTruckingShipment(idx = null) {
    let data;
    if (idx !== null) {
        data = db.truckingShipments[idx];
        if (!data) return alert('Shipment not found.');
    } else {
        data = getTruckingFormData();
        if (!data.origin || !data.destination) {
            alert('Please fill Origin and Destination.');
            return;
        }
    }
    const html = buildTruckingPreviewHTML(data);
    document.getElementById('modal-title').textContent = 'Trucking Shipment Preview';
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}

function buildTruckingPreviewHTML(data) {
    const addRows = data.additional.map(a =>
        `<tr><td>${a.name}</td><td style="text-align:right;">${formatUSD(a.amount)}</td></tr>`).join('');
    return `
        <div style="background:#ffffff;color:#1a1a1a;font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:10px;">
            <h3 style="color:var(--primary);border-bottom:2px solid var(--primary);padding-bottom:6px;">🚛 US Trucking Shipment</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                <tr><td style="padding:4px 8px;font-weight:bold;">Origin</td><td>${data.origin}</td><td style="padding:4px 8px;font-weight:bold;">Destination</td><td>${data.destination}</td></tr>
                <tr><td style="padding:4px 8px;font-weight:bold;">Inventory</td><td>${data.inventory}</td><td style="padding:4px 8px;font-weight:bold;">Miles</td><td>${data.miles}</td></tr>
                <tr><td style="padding:4px 8px;font-weight:bold;">Per Mile</td><td>${formatUSD(data.perMile)}</td><td style="padding:4px 8px;font-weight:bold;">Minimum</td><td>${formatUSD(data.minimum)}</td></tr>
                <tr><td style="padding:4px 8px;font-weight:bold;">Chassis Days</td><td>${data.chassisDays}</td><td style="padding:4px 8px;font-weight:bold;">Chassis Cost</td><td>${formatUSD(45 * data.chassisDays * data.inventory)}</td></tr>
            </table>
            <h4 style="color:var(--primary);margin-top:12px;">Regular Total: ${formatUSD(data.regularTotal)}</h4>
            <h4 style="color:var(--accent);margin-top:8px;">Additional Services</h4>
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                <thead><tr style="background:#1e3a8a;color:white;"><th style="padding:4px 8px;text-align:left;">Service</th><th style="padding:4px 8px;text-align:right;">Amount</th></tr></thead>
                <tbody>${addRows || '<tr><td colspan="2" style="padding:4px 8px;text-align:center;color:var(--text-light);">No additional services</td></tr>'}</tbody>
                <tfoot><tr style="background:#f1f5f9;"><td style="padding:4px 8px;font-weight:bold;">Additional Total</td><td style="padding:4px 8px;text-align:right;font-weight:bold;">${formatUSD(data.additionalTotal)}</td></tr></tfoot>
            </table>
            <div style="margin-top:12px;background:#10b981;color:white;padding:8px;text-align:center;font-weight:bold;border-radius:4px;">
                GRAND TOTAL: ${formatUSD(data.grandTotal)}
            </div>
            <p style="margin-top:12px;font-size:0.7rem;color:var(--text-light);text-align:center;">Generated on ${new Date().toLocaleString('en-IN')}</p>
        </div>
    `;
}

function downloadTruckingPDF(idx = null) {
    let data;
    if (idx !== null) {
        data = db.truckingShipments[idx];
        if (!data) return alert('Shipment not found.');
    } else {
        data = getTruckingFormData();
        if (!data.origin || !data.destination) {
            alert('Please fill Origin and Destination.');
            return;
        }
    }
    const html = buildTruckingPreviewHTML(data);
    const renderArea = document.getElementById('pdf-render-area');
    renderArea.innerHTML = html;
    renderArea.style.cssText = 'position:fixed;left:0;top:0;width:800px;background:white;z-index:9999;opacity:1;padding:10px;font-family: Arial, sans-serif;';

    setTimeout(() => {
        // 🚀 FIX: Use scale 3 for ultra-high DPI
        html2canvas(renderArea, {
            scale: 3,                 // <--- यह 3 गुना रेजोल्यूशन बढ़ा देगा
            useCORS: true,
            logging: false,
            backgroundColor: '#ffffff'
        })
        .then(canvas => {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const margin = 10;
            const imgData = canvas.toDataURL('image/jpeg', 1.0); // 🌟 100% Image Quality
            
            let imgWidth = pdfWidth - 2 * margin;
            let imgHeight = (canvas.height * imgWidth) / canvas.width;
            const maxHeight = pdfHeight - 2 * margin;
            if (imgHeight > maxHeight) {
                const scale = maxHeight / imgHeight;
                imgWidth *= scale;
                imgHeight *= scale;
            }
            const x = (pdfWidth - imgWidth) / 2;
            const y = (pdfHeight - imgHeight) / 2;
            pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
            pdf.save(`Trucking_${data.origin}_${data.destination}.pdf`);
            
            renderArea.style.cssText = 'position:fixed;left:-10000px;top:0;width:800px;background:white;z-index:-1;';
            renderArea.innerHTML = '';
        }).catch(err => {
            console.error(err);
            alert('PDF generation failed.');
            renderArea.style.cssText = 'position:fixed;left:-10000px;top:0;width:800px;background:white;z-index:-1;';
            renderArea.innerHTML = '';
        });
    }, 500);
}

// ==================== OOG & OT (OVER DIMENSION / OVERWEIGHT) ====================
const oogContainerData = [
    { type: "20 GP", internal: { l: 5.898, w: 2.352, h: 2.393 }, door: { w: 2.340, h: 2.280 }, maxWeight: 28200 },
    { type: "40 GP", internal: { l: 12.032, w: 2.352, h: 2.393 }, door: { w: 2.340, h: 2.280 }, maxWeight: 26580 },
    { type: "40 HC", internal: { l: 12.032, w: 2.352, h: 2.698 }, door: { w: 2.340, h: 2.580 }, maxWeight: 26480 },
    { type: "20 RF", internal: { l: 5.444, w: 2.286, h: 2.275 }, door: { w: 2.280, h: 2.220 }, maxWeight: 27700 },
    { type: "40 RF", internal: { l: 11.572, w: 2.286, h: 2.275 }, door: { w: 2.280, h: 2.220 }, maxWeight: 26500 },
    { type: "20 TK", internal: { l: 5.898, w: 2.352, h: 2.393 }, door: { w: 2.340, h: 2.280 }, maxWeight: 24000 },
    { type: "40 TK", internal: { l: 12.032, w: 2.352, h: 2.393 }, door: { w: 2.340, h: 2.280 }, maxWeight: 26000 }
];

function populateOOGContainerDropdown() {
    console.log("▶️ populateOOGContainerDropdown started");
    const sel = document.getElementById('oog-container');
    if (!sel) {
        console.error("❌ Element #oog-container not found in HTML!");
        return;
    }
    let containerList = [];
    if (db.containerDimensions && db.containerDimensions.length > 0) {
        console.log("✅ Found db.containerDimensions with", db.containerDimensions.length, "items");
        containerList = db.containerDimensions.map(c => c.type);
        console.log("   Container types:", containerList);
    } else {
        console.warn("⚠️ db.containerDimensions is empty or missing. Using fallback list.");
        containerList = ["20 GP", "40 GP", "40 HC", "20 RF", "40 RF", "20 TK", "40 TK"];
    }
    sel.innerHTML = '<option value="">Select Container</option>' +
        containerList.map(t => `<option value="${t}">${t}</option>`).join('');
    console.log("✅ Dropdown populated with", containerList.length, "options");
}

const doorDimMap = {
    "20 GP": { w: 2.340, h: 2.280 },
    "40 GP": { w: 2.340, h: 2.280 },
    "40 HC": { w: 2.340, h: 2.580 },
    "20 RF": { w: 2.280, h: 2.220 },
    "40 RF": { w: 2.280, h: 2.220 },
    "20 TK": { w: 2.340, h: 2.280 },
    "40 TK": { w: 2.340, h: 2.280 }
};

function parseDim(str) {
    if (!str) return 0;
    return parseFloat(String(str).replace(/[^0-9.]/g, '')) || 0;
}

function parseWeight(str) {
    if (!str) return 0;
    return parseFloat(String(str).replace(/[^0-9.]/g, '')) || 0;
}

function calcOOG() {
    const containerType = document.getElementById('oog-container').value;
    const unit = document.getElementById('oog-unit').value;
    const cargoL = parseFloat(document.getElementById('oog-length').value) || 0;
    const cargoW = parseFloat(document.getElementById('oog-width').value) || 0;
    const cargoH = parseFloat(document.getElementById('oog-height').value) || 0;
    const cargoWeight = parseFloat(document.getElementById('oog-weight').value) || 0;
    let factor = 1;
    if (unit === 'cm') factor = 0.01;
    else if (unit === 'inch') factor = 0.0254;
    const cargoLm = cargoL * factor;
    const cargoWm = cargoW * factor;
    const cargoHm = cargoH * factor;

    let containerData = null;
    if (db.containerDimensions && db.containerDimensions.length) {
        containerData = db.containerDimensions.find(c => c.type === containerType);
    }
    if (!containerData) {
        const fallback = oogContainerData.find(c => c.type === containerType);
        if (fallback) {
            containerData = {
                type: fallback.type,
                length: fallback.internal.l,
                width: fallback.internal.w,
                height: fallback.internal.h,
                maxWeight: fallback.maxWeight
            };
        }
    }
    const resultArea = document.getElementById('oog-result-area');
    if (!containerType || !containerData) {
        resultArea.innerHTML =
            '<div class="modern-section" style="padding:20px;text-align:center;color:var(--text-light);">⚠️ Please select a container type.</div>';
        return;
    }
    const intL = parseFloat(containerData.length) || 0;
    const intW = parseFloat(containerData.width) || 0;
    const intH = parseFloat(containerData.height) || 0;
    const maxWt = parseFloat(containerData.maxWeight) || 0;
    const door = doorDimMap[containerType] || { w: 0, h: 0 };
    const hasDoorData = door.w > 0 && door.h > 0;

    // Checks
    const intL_ok = cargoLm <= intL;
    const intW_ok = cargoWm <= intW;
    const intH_ok = cargoHm <= intH;
    const doorW_ok = hasDoorData ? (cargoWm <= door.w) : true;
    const doorH_ok = hasDoorData ? (cargoHm <= door.h) : true;
    const isOOG = !intL_ok || !intW_ok || !intH_ok || !doorW_ok || !doorH_ok;
    const isOT = cargoWeight > maxWt;

    // Exceed details
    let exceedDetails = [];
    if (!intL_ok) exceedDetails.push(`Length (${(cargoLm - intL).toFixed(3)}m over)`);
    if (!intW_ok) exceedDetails.push(`Width (${(cargoWm - intW).toFixed(3)}m over)`);
    if (!intH_ok) exceedDetails.push(`Height (${(cargoHm - intH).toFixed(3)}m over)`);
    if (hasDoorData && !doorW_ok) exceedDetails.push(`Door Width (${(cargoWm - door.w).toFixed(3)}m over)`);
    if (hasDoorData && !doorH_ok) exceedDetails.push(`Door Height (${(cargoHm - door.h).toFixed(3)}m over)`);
    if (isOT) exceedDetails.push(`Weight (${(cargoWeight - maxWt).toFixed(0)} KGS over)`);

    const exceedHtml = exceedDetails.length > 0
        ? `<tr><td style="font-weight:700;color:#dc2626;">🚨 Exceed Details</td><td colspan="3" style="font-weight:700;color:#dc2626;">${exceedDetails.join('; ')}</td></tr>`
        : '';

    let statusText = '', gradientStyle = '', gradientColors = '';
    if (isOOG && isOT) {
        statusText = '❌ OVER DIMENSION & OVERWEIGHT';
        gradientColors = 'linear-gradient(135deg, #ef4444, #b91c1c)';
    } else if (isOOG) {
        statusText = '⚠️ OVER DIMENSION (OOG)';
        gradientColors = 'linear-gradient(135deg, #f97316, #ea580c)';
    } else if (isOT) {
        statusText = '⚠️ OVERWEIGHT (OT)';
        gradientColors = 'linear-gradient(135deg, #f97316, #ea580c)';
    } else {
        statusText = '✅ STANDARD FIT – NO OOG / OT';
        gradientColors = 'linear-gradient(135deg, #10b981, #059669)';
    }

    const html = `
    <div class="modern-section">
        <div class="modern-section-title"><span>📦 Container & Cargo Breakdown</span></div>
        <table class="modern-table" style="background: white; border-collapse: collapse; width: 100%;">
            <thead><tr><th>Component</th><th>Details / Limit</th><th>Your Cargo</th></tr></thead>
            <tbody>
                <tr><td><span class="badge badge-blue">CTR</span> Container</td><td>${containerType}</td><td class="text-muted">Internal: ${intL}m x ${intW}m x ${intH}m</td></tr>
                <tr><td><span class="badge badge-yellow">DOOR</span> Door</td><td>${hasDoorData ? door.w+'m x '+door.h+'m' : 'N/A'}</td><td class="text-muted">Max Payload: ${maxWt.toLocaleString()} KGS</td></tr>
                <tr><td><span class="badge badge-purple">LEN</span> Length</td><td>${intL}m</td><td>${cargoLm.toFixed(3)}m</td></tr>
                <tr><td><span class="badge badge-purple">WID</span> Width</td><td>${intW}m</td><td>${cargoWm.toFixed(3)}m</td></tr>
                <tr><td><span class="badge badge-purple">HGT</span> Height</td><td>${intH}m</td><td>${cargoHm.toFixed(3)}m</td></tr>
                <tr><td><span class="badge badge-red">WGT</span> Weight</td><td>${maxWt.toLocaleString()} KGS</td><td>${cargoWeight.toLocaleString()} KGS</td></tr>
                ${exceedHtml}
            </tbody>
        </table>
    </div>
    <div class="modern-section">
        <div class="modern-section-title"><span>📊 OOG / OT Analysis</span></div>
        <table class="modern-table" style="background: white; border-collapse: collapse; width: 100%;">
            <thead><tr><th>Check</th><th>Container Limit</th><th>Your Cargo</th><th>Status</th></tr></thead>
            <tbody>
                <tr><td>Length</td><td>${intL}m</td><td>${cargoLm.toFixed(3)}m</td><td><span class="badge ${intL_ok ? 'badge-green' : 'badge-red'}">${intL_ok ? '✅ Fit' : '❌ Exceed'}</span></td></tr>
                <tr><td>Width (Int)</td><td>${intW}m</td><td>${cargoWm.toFixed(3)}m</td><td><span class="badge ${intW_ok ? 'badge-green' : 'badge-red'}">${intW_ok ? '✅ Fit' : '❌ Exceed'}</span></td></tr>
                <tr><td>Height (Int)</td><td>${intH}m</td><td>${cargoHm.toFixed(3)}m</td><td><span class="badge ${intH_ok ? 'badge-green' : 'badge-red'}">${intH_ok ? '✅ Fit' : '❌ Exceed'}</span></td></tr>
                <tr><td>Weight</td><td>${maxWt.toLocaleString()} KGS</td><td>${cargoWeight.toLocaleString()} KGS</td><td><span class="badge ${!isOT ? 'badge-green' : 'badge-red'}">${!isOT ? '✅ Fit' : '❌ Overweight'}</span></td></tr>
            </tbody>
            <!-- 🟢/🟠/🔴 GRADIENT FOOTER with inline styles -->
            <tfoot style="background: transparent !important;">
                <tr style="background: ${gradientColors} !important; color: white !important; font-weight: bold; font-size: 1.1rem;">
                    <td colspan="4" style="padding: 8px 12px; text-align: center; background: transparent !important; color: white !important; border-radius: 0 0 8px 8px;">${statusText}</td>
                </tr>
            </tfoot>
        </table>
    </div>`;
    resultArea.innerHTML = html;
}

function migrateOOGContainers() {
    if (!db.containerDimensions) {
        db.containerDimensions = JSON.parse(JSON.stringify(defaultContainerDimensions));
    }
    db.containerDimensions.forEach(c => {
        if (!c.tareWeight) c.tareWeight = "0 kg";
        if (!c.unit) {
            let match = String(c.length).match(/[a-zA-Z]+$/);
            c.unit = match ? match[0] : 'm';
            c.length = parseDim(c.length);
            c.width = parseDim(c.width);
            c.height = parseDim(c.height);
            c.maxWeight = parseWeight(c.maxWeight);
            c.cbm = parseDim(c.cbm);
        }
    });
    saveDB();
}

function renderOOGContainerTable() {
    const tbody = document.getElementById('oog-container-tbody');
    if (!tbody) return;
    migrateOOGContainers();
    tbody.innerHTML = db.containerDimensions.map((c, i) => {
        const unitOpts = ['m', 'cm', 'inch'].map(u =>
            `<option value="${u}" ${c.unit === u ? 'selected' : ''}>${u}</option>`
        ).join('');
        return `<tr data-index="${i}">
            <td style="text-align:center;font-weight:600;">${i+1}</td>
            <td><input type="text" class="oog-edit-type" value="${c.type}" placeholder="e.g. 45 GP"></td>
            <td><input type="number" step="0.001" class="oog-edit-length" value="${c.length}" placeholder="0.00"></td>
            <td><input type="number" step="0.001" class="oog-edit-width" value="${c.width}" placeholder="0.00"></td>
            <td><input type="number" step="0.001" class="oog-edit-height" value="${c.height}" placeholder="0.00"></td>
            <td><input type="text" class="oog-edit-tare" value="${c.tareWeight}" placeholder="e.g. 2,280 kg"></td>
            <td><input type="text" class="oog-edit-maxwt" value="${c.maxWeight}" placeholder="e.g. 28,200 kg"></td>
            <td><input type="number" step="0.01" class="oog-edit-cbm" value="${c.cbm}" placeholder="0.00"></td>
            <td><select class="oog-edit-unit">${unitOpts}</select></td>
            <td style="text-align:center;"><button class="btn btn-sm btn-clear" onclick="deleteOOGContainerRow(${i})">×</button></td>
        </tr>`;
    }).join('');
}

function addOOGContainerRow() {
    const tbody = document.getElementById('oog-container-tbody');
    const newRow = document.createElement('tr');
    const newIndex = tbody.children.length;
    newRow.innerHTML = `
        <td style="text-align:center;font-weight:600;">${newIndex+1}</td>
        <td><input type="text" class="oog-edit-type" value="NEW" placeholder="e.g. 45 GP"></td>
        <td><input type="number" step="0.001" class="oog-edit-length" value="0" placeholder="0.00"></td>
        <td><input type="number" step="0.001" class="oog-edit-width" value="0" placeholder="0.00"></td>
        <td><input type="number" step="0.001" class="oog-edit-height" value="0" placeholder="0.00"></td>
        <td><input type="text" class="oog-edit-tare" value="0 kg" placeholder="e.g. 2,280 kg"></td>
        <td><input type="text" class="oog-edit-maxwt" value="0 kg" placeholder="e.g. 28,200 kg"></td>
        <td><input type="number" step="0.01" class="oog-edit-cbm" value="0" placeholder="0.00"></td>
        <td><select class="oog-edit-unit"><option value="m">m</option><option value="cm">cm</option><option value="inch">inch</option></select></td>
        <td style="text-align:center;"><button class="btn btn-sm btn-clear" onclick="deleteOOGContainerRow(${newIndex})">×</button></td>
    `;
    tbody.appendChild(newRow);
}

function deleteOOGContainerRow(index) {
    if (!confirm('Delete this container dimension?')) return;
    const rows = document.querySelectorAll('#oog-container-tbody tr');
    if (rows[index]) rows[index].remove();
    document.querySelectorAll('#oog-container-tbody tr').forEach((row, i) => {
        row.querySelector('td:first-child').textContent = i + 1;
    });
}

function saveOOGContainers() {
    const newData = [];
    document.querySelectorAll('#oog-container-tbody tr').forEach(row => {
        const type = row.querySelector('.oog-edit-type').value.trim();
        const length = parseFloat(row.querySelector('.oog-edit-length').value) || 0;
        const width = parseFloat(row.querySelector('.oog-edit-width').value) || 0;
        const height = parseFloat(row.querySelector('.oog-edit-height').value) || 0;
        const tareWeight = row.querySelector('.oog-edit-tare').value.trim() || '0 kg';
        const maxWeight = row.querySelector('.oog-edit-maxwt').value.trim() || '0 kg';
        const cbm = parseFloat(row.querySelector('.oog-edit-cbm').value) || 0;
        const unit = row.querySelector('.oog-edit-unit').value;
        if (type) {
            newData.push({ type, length, width, height, tareWeight, maxWeight, cbm, unit });
        }
    });
    if (newData.length === 0) {
        alert('At least one valid container must exist.');
        return;
    }
    db.containerDimensions = newData;
    saveDB();
    populateOOGContainerDropdown();
    renderOOGContainerTable();
    calcOOG();
    alert('✅ Container dimensions saved successfully!');
    autoBackup();
}

// ==================== DETENTION & DEMURRAGE (5 SLAB PROGRESSIVE) ====================
if (!db.detentionLots) db.detentionLots = [];
if (!db.detentionRecords) db.detentionRecords = [];

const defaultDetentionSlabs = [
    { from: 1, to: 5, rate: 10 },
    { from: 6, to: 10, rate: 30 },
    { from: 11, to: 20, rate: 50 },
    { from: 21, to: 30, rate: 70 },
    { from: 31, to: 999, rate: 100 }
];

const defaultDetentionLots = [
    { id: 'lot-1', name: '20 GP Standard', freeDays: 5, slabs: JSON.parse(JSON.stringify(defaultDetentionSlabs)) },
    { id: 'lot-2', name: '40 GP Standard', freeDays: 5, slabs: JSON.parse(JSON.stringify(defaultDetentionSlabs)) },
    { id: 'lot-3', name: '40 HC Standard', freeDays: 5, slabs: JSON.parse(JSON.stringify(defaultDetentionSlabs)) },
    { id: 'lot-4', name: 'Reefer 20 RF', freeDays: 3, slabs: JSON.parse(JSON.stringify(defaultDetentionSlabs)) },
    { id: 'lot-5', name: 'Reefer 40 RF', freeDays: 3, slabs: JSON.parse(JSON.stringify(defaultDetentionSlabs)) }
];

function renderDetentionSlabs(slabs) {
    const container = document.getElementById('det-slabs-rows');
    if (!container) return;
    let displaySlabs = slabs || defaultDetentionSlabs;
    if (!displaySlabs || displaySlabs.length !== 5) {
        displaySlabs = JSON.parse(JSON.stringify(defaultDetentionSlabs));
    }
    container.innerHTML = displaySlabs.map((s, i) => `
        <div style="display:grid;grid-template-columns:80px 80px 1fr 1fr;gap:6px;margin-bottom:4px;align-items:center;">
            <span style="font-weight:600;font-size:0.8rem;color:var(--text);padding:4px 8px;">Slab ${i+1}</span>
            <input type="number" class="det-slab-from" value="${s.from}" min="1" style="padding:4px 6px;border:1px solid var(--border);border-radius:4px;width:100%;" oninput="calcDetention()" />
            <input type="number" class="det-slab-to" value="${s.to}" min="1" style="padding:4px 6px;border:1px solid var(--border);border-radius:4px;width:100%;" oninput="calcDetention()" />
            <input type="number" class="det-slab-rate" value="${s.rate}" step="0.01" style="padding:4px 6px;border:1px solid var(--border);border-radius:4px;width:100%;" oninput="calcDetention()" />
        </div>
    `).join('');
}

function populateDetentionLotDropdown() {
    const sel = document.getElementById('det-lot');
    if (!sel) return;
    if (!db.detentionLots || db.detentionLots.length === 0) {
        db.detentionLots = JSON.parse(JSON.stringify(defaultDetentionLots));
        saveDB();
    }
    sel.innerHTML = '<option value="">Select a Lot or Custom</option>' +
        db.detentionLots.map(l => `<option value="${l.id}">${l.name} (${l.freeDays}d free)</option>`).join('');
}

function onDetLotChange() {
    const sel = document.getElementById('det-lot');
    const selected = sel.options[sel.selectedIndex];
    if (selected && selected.value) {
        const lot = db.detentionLots.find(l => l.id === selected.value);
        if (lot) {
            document.getElementById('det-free-days').value = lot.freeDays;
            renderDetentionSlabs(lot.slabs);
        }
    } else {
        document.getElementById('det-free-days').value = '';
        renderDetentionSlabs(defaultDetentionSlabs);
    }
    calcDetention();
}

function calculateProgressiveCost(chargeableDays, slabs) {
    if (!chargeableDays || chargeableDays <= 0) return 0;
    let total = 0;
    const sortedSlabs = [...slabs].sort((a, b) => a.from - b.from);
    for (let d = 1; d <= chargeableDays; d++) {
        let rate = 0;
        for (let s of sortedSlabs) {
            if (d >= s.from && d <= s.to) {
                rate = s.rate;
                break;
            }
        }
        if (rate === 0 && sortedSlabs.length > 0) {
            rate = sortedSlabs[sortedSlabs.length - 1].rate;
        }
        total += rate;
    }
    return total;
}

function calcDetention() {
    const pickup = document.getElementById('det-pickup').value;
    const ret = document.getElementById('det-return').value;
    const freeDays = parseInt(document.getElementById('det-free-days').value) || 0;
    const currency = document.getElementById('det-currency').value;
    let slabs = [];
    document.querySelectorAll('#det-slabs-rows > div').forEach(row => {
        const from = parseInt(row.querySelector('.det-slab-from').value) || 1;
        const to = parseInt(row.querySelector('.det-slab-to').value) || 0;
        const rate = parseFloat(row.querySelector('.det-slab-rate').value) || 0;
        if (from > 0 && to >= from) slabs.push({ from, to, rate });
    });
    if (slabs.length === 0) slabs = JSON.parse(JSON.stringify(defaultDetentionSlabs));

    let totalDays = 0, chargeableDays = 0, totalUSD = 0, totalINR = 0;
    let slabBreakdown = '';

    if (pickup && ret) {
        const p = new Date(pickup);
        const r = new Date(ret);
        if (r > p) {
            totalDays = Math.ceil((r - p) / (1000 * 60 * 60 * 24));
            chargeableDays = Math.max(0, totalDays - freeDays);
            totalUSD = calculateProgressiveCost(chargeableDays, slabs);
            const rate = currency === 'INR' ? 1 : (db.exchangeRates.USD || 94.5);
            totalINR = totalUSD * rate;
            const sortedSlabs = [...slabs].sort((a, b) => a.from - b.from);
            sortedSlabs.forEach(s => {
                const daysInSlab = Math.max(0, Math.min(chargeableDays, s.to) - s.from + 1);
                if (daysInSlab > 0) {
                    slabBreakdown += `<tr>
                        <td><span class="badge badge-yellow">SLB</span> Days ${s.from}-${s.to}</td>
                        <td class="text-right">${formatUSD(daysInSlab * s.rate)}</td>
                        <td class="text-right">${formatINR(daysInSlab * s.rate * rate)}</td>
                    </tr>`;
                }
            });
        }
    }

    const resultArea = document.getElementById('det-result-area');
    let html = `
    <div class="modern-section">
        <div class="modern-section-title"><span>⏳ Detention Breakdown</span></div>
        <table class="modern-table" style="background: white; border-collapse: collapse; width: 100%;">
            <thead><tr><th>Component</th><th>Amount (USD)</th><th>Amount (INR)</th></tr></thead>
            <tbody>
                <tr><td><span class="badge badge-blue">DAY</span> Total Days Used</td><td class="text-right">${totalDays}</td><td class="text-right">${totalDays}</td></tr>
                <tr><td><span class="badge badge-green">FREE</span> Free Days</td><td class="text-right">${freeDays}</td><td class="text-right">${freeDays}</td></tr>
                <tr><td><span class="badge badge-red">CHG</span> Chargeable Days</td><td class="text-right">${chargeableDays}</td><td class="text-right">${chargeableDays}</td></tr>
                ${slabBreakdown || '<tr><td colspan="3" class="text-muted text-center">No chargeable days to display slabs</td></tr>'}
            </tbody>
            <!-- 🟢 GRADIENT TOTAL ROW with explicit inline styles -->
            <tfoot style="background: transparent !important;">
                <tr style="background: linear-gradient(135deg, #10b981, #059669) !important; color: white !important; font-weight: bold; font-size: 1.1rem;">
                    <td style="padding: 8px 12px; text-align: right; background: transparent !important; color: white !important; border-radius: 0 0 0 8px;">💰 TOTAL CHARGES</td>
                    <td style="padding: 8px 12px; text-align: right; background: transparent !important; color: white !important;">${formatUSD(totalUSD)}</td>
                    <td style="padding: 8px 12px; text-align: right; background: transparent !important; color: white !important; border-radius: 0 0 8px 0;">${formatINR(totalINR)}</td>
                </tr>
            </tfoot>
        </table>
    </div>`;
    resultArea.innerHTML = html;
}

function clearDetentionForm() {
    document.getElementById('det-lot').value = '';
    document.getElementById('det-pickup').value = '';
    document.getElementById('det-return').value = '';
    document.getElementById('det-free-days').value = '';
    document.getElementById('det-edit-id').value = '';
    renderDetentionSlabs(defaultDetentionSlabs);
    calcDetention();
}

function openAddDetentionLotModal(editIdx = null) {
    const modalTitle = document.getElementById('modal-title');
    const body = document.getElementById('previewBody');
    let title = editIdx !== null ? 'Edit Lot' : 'Add New Lot';
    modalTitle.textContent = title;
    let lot = { name: '', freeDays: 5, slabs: JSON.parse(JSON.stringify(defaultDetentionSlabs)) };
    if (editIdx !== null && db.detentionLots[editIdx]) {
        lot = db.detentionLots[editIdx];
    }
    let slabHtml = lot.slabs.map((s, i) => `
        <div style="display:grid;grid-template-columns:80px 1fr 1fr 1fr;gap:6px;margin-bottom:4px;align-items:center;">
            <span style="font-weight:600;font-size:0.8rem;">Slab ${i+1}</span>
            <input type="number" class="modal-slab-from" value="${s.from}" min="1" style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;" />
            <input type="number" class="modal-slab-to" value="${s.to}" min="1" style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;" />
            <input type="number" class="modal-slab-rate" value="${s.rate}" step="0.01" style="width:100%;padding:4px;border:1px solid var(--border);border-radius:4px;" />
        </div>
    `).join('');
    body.innerHTML = `
        <div class="form-grid-2col">
            <div class="form-group" style="grid-column:1/-1;"><label>Lot Name *</label><input type="text" id="modal-det-lot-name" value="${lot.name}" placeholder="e.g. 20 GP Standard" /></div>
            <div class="form-group" style="grid-column:1/-1;"><label>Free Days</label><input type="number" id="modal-det-free" value="${lot.freeDays}" /></div>
        </div>
        <div style="margin-top:12px;border-top:1px solid var(--border);padding-top:12px;">
            <h4 style="color:var(--primary);font-size:0.9rem;margin-bottom:6px;">📈 Progressive Slabs (5 Lots)</h4>
            ${slabHtml}
        </div>
        <div style="margin-top:16px;text-align:right;display:flex;gap:8px;justify-content:flex-end;">
            <button class="btn btn-clear" onclick="closeModal('previewModal')">Cancel</button>
            <button class="btn btn-success" onclick="saveDetentionLot(${editIdx !== null ? editIdx : 'null'})">💾 Save Lot</button>
        </div>
    `;
    openModal('previewModal');
}

function saveDetentionLot(editIdx) {
    const name = document.getElementById('modal-det-lot-name').value.trim();
    const freeDays = parseInt(document.getElementById('modal-det-free').value) || 0;
    if (!name) return alert('Lot Name is required.');
    let slabs = [];
    document.querySelectorAll('#previewBody .modal-slab-from').forEach((el, i) => {
        const from = parseInt(el.value) || 1;
        const to = parseInt(document.querySelectorAll('#previewBody .modal-slab-to')[i].value) || 0;
        const rate = parseFloat(document.querySelectorAll('#previewBody .modal-slab-rate')[i].value) || 0;
        if (from > 0 && to >= from) slabs.push({ from, to, rate });
    });
    if (slabs.length !== 5) {
        alert('You must define exactly 5 slabs (From, To, Rate)');
        return;
    }
    if (editIdx !== null && editIdx >= 0) {
        db.detentionLots[editIdx] = { id: db.detentionLots[editIdx].id || 'lot-' + Date.now(), name, freeDays, slabs };
    } else {
        db.detentionLots.push({ id: 'lot-' + Date.now(), name, freeDays, slabs });
    }
    saveDB();
    closeModal('previewModal');
    renderDetentionLots();
    populateDetentionLotDropdown();
    alert('Lot saved with 5 slabs!');
    autoBackup();
}

function deleteDetentionLot(idx) {
    if (!confirm('Delete this lot?')) return;
    db.detentionLots.splice(idx, 1);
    saveDB();
    renderDetentionLots();
    populateDetentionLotDropdown();
    autoBackup();
}

function renderDetentionLots() {
    const container = document.getElementById('det-lot-list');
    if (!container) return;
    if (db.detentionLots.length === 0) {
        container.innerHTML =
            '<p style="color:var(--text-light);padding:10px;text-align:center;">No lots defined. Click "Add New Lot" to create one.</p>';
        return;
    }
    container.innerHTML = db.detentionLots.map((l, i) => `
        <div class="det-lot-card">
            <div class="lot-info">
                <h4>${l.name}</h4>
                <p>Free: ${l.freeDays} days | 5 Progressive Slabs</p>
            </div>
            <div style="display:flex;gap:4px;">
                <button class="btn btn-sm btn-preview" onclick="openAddDetentionLotModal(${i})">✏️</button>
                <button class="btn btn-sm btn-clear" onclick="deleteDetentionLot(${i})">×</button>
            </div>
        </div>
    `).join('');
}

function getDetentionFormData() {
    const lotName = document.getElementById('det-lot').selectedIndex > 0 ? document.getElementById('det-lot').value :
        'Custom';
    const pickup = document.getElementById('det-pickup').value;
    const ret = document.getElementById('det-return').value;
    const freeDays = parseInt(document.getElementById('det-free-days').value) || 0;
    let slabs = [];
    document.querySelectorAll('#det-slabs-rows > div').forEach(row => {
        const from = parseInt(row.querySelector('.det-slab-from').value) || 1;
        const to = parseInt(row.querySelector('.det-slab-to').value) || 0;
        const rate = parseFloat(row.querySelector('.det-slab-rate').value) || 0;
        if (from > 0 && to >= from) slabs.push({ from, to, rate });
    });
    if (slabs.length !== 5) slabs = JSON.parse(JSON.stringify(defaultDetentionSlabs));
    const totalDays = parseInt(document.getElementById('det-total-days').textContent) || 0;
    const chargeableDays = parseInt(document.getElementById('det-chargeable-days').textContent) || 0;
    const totalUSD = parseFloat(document.getElementById('det-total-usd').textContent.replace(/[^0-9.-]/g, '')) || 0;
    const totalINR = parseFloat(document.getElementById('det-total-inr').textContent.replace(/[^0-9.-]/g, '')) || 0;
    return { lotName, pickup, ret, freeDays, slabs, totalDays, chargeableDays, totalUSD, totalINR, timestamp: new Date()
            .toISOString() };
}

function saveDetentionRecord() {
    const data = getDetentionFormData();
    if (!data.pickup || !data.ret) return alert('Please select Pickup and Return dates.');
    const editId = document.getElementById('det-edit-id').value;
    if (editId) {
        const idx = db.detentionRecords.findIndex(r => r.id === editId);
        if (idx !== -1) {
            data.id = editId;
            data.createdAt = db.detentionRecords[idx].createdAt || data.timestamp;
            db.detentionRecords[idx] = data;
            document.getElementById('det-edit-id').value = '';
        } else { alert('Record not found.');
            return; }
    } else {
        data.id = 'DD-' + Date.now().toString(36).toUpperCase();
        data.createdAt = data.timestamp;
        db.detentionRecords.push(data);
    }
    saveDB();
    renderDetentionRecords();
    alert('Detention record saved with progressive slabs!');
    clearDetentionForm();
    autoBackup();
}

function renderDetentionRecords() {
    const search = (document.getElementById('det-search').value || '').toLowerCase();
    const perPage = parseInt(document.getElementById('det-per-page').value) || 10;
    let records = db.detentionRecords || [];
    records = records.filter(r => {
        const text = `${r.lotName} ${r.pickup} ${r.ret}`.toLowerCase();
        return text.includes(search);
    });
    records.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    const total = records.length;
    const totalPages = Math.ceil(total / perPage) || 1;
    let page = parseInt(sessionStorage.getItem('detPage') || '1');
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    sessionStorage.setItem('detPage', String(page));
    const start = (page - 1) * perPage;
    const pageData = records.slice(start, start + perPage);
    const list = document.getElementById('det-records-list');
    if (total === 0) { list.innerHTML =
            '<p style="color:var(--text-light);padding:20px;text-align:center;">No detention records found.</p>';
        document.getElementById('det-records-pagination').innerHTML = ''; return; }
    list.innerHTML = pageData.map((r, i) => {
        const realIdx = db.detentionRecords.indexOf(r);
        return `<div class="det-record-card">
            <div class="info">
                <h4>${r.lotName} (${r.pickup} → ${r.ret})</h4>
                <p>Free Days: ${r.freeDays} | Chargeable: ${r.chargeableDays} | Total: ${formatUSD(r.totalUSD)} / ${formatINR(r.totalINR)}</p>
                <p style="font-size:0.7rem;color:var(--text-light);">Saved: ${new Date(r.timestamp).toLocaleDateString('en-IN')}</p>
            </div>
            <div class="actions">
                <button class="btn btn-sm btn-preview" onclick="previewDetentionRecord(${realIdx})">👁</button>
                <button class="btn btn-sm btn-preview" onclick="editDetentionRecord(${realIdx})">✏️</button>
                <button class="btn btn-sm btn-duplicate" onclick="duplicateDetentionRecord(${realIdx})">📋</button>
                <button class="btn btn-sm btn-clear" onclick="deleteDetentionRecord(${realIdx})">×</button>
            </div>
        </div>`;
    }).join('');
    const pag = document.getElementById('det-records-pagination');
    if (totalPages <= 1) { pag.innerHTML = ''; return; }
    pag.innerHTML =
        `<button class="page-btn" onclick="changeDetentionPage(${page - 1})" ${page === 1 ? 'disabled' : ''}>‹ Prev</button>
    <span class="page-info">Page ${page} of ${totalPages} (${total} records)</span>
    <button class="page-btn" onclick="changeDetentionPage(${page + 1})" ${page === totalPages ? 'disabled' : ''}>Next ›</button>`;
}

function changeDetentionPage(page) { sessionStorage.setItem('detPage', String(page));
    renderDetentionRecords(); }

function clearDetentionFilters() { document.getElementById('det-search').value = '';
    document.getElementById('det-per-page').value = '10';
    sessionStorage.setItem('detPage', '1');
    renderDetentionRecords(); }

function editDetentionRecord(idx) {
    const r = db.detentionRecords[idx];
    if (!r) return alert('Record not found.');
    document.getElementById('det-lot').value = db.detentionLots.find(l => l.name === r.lotName)?.id || '';
    document.getElementById('det-pickup').value = r.pickup;
    document.getElementById('det-return').value = r.ret;
    document.getElementById('det-free-days').value = r.freeDays;
    renderDetentionSlabs(r.slabs || defaultDetentionSlabs);
    document.getElementById('det-edit-id').value = r.id;
    calcDetention();
    document.getElementById('calc-detention').scrollIntoView({ behavior: 'smooth' });
}

function duplicateDetentionRecord(idx) {
    const r = db.detentionRecords[idx];
    if (!r) return alert('Record not found.');
    const copy = JSON.parse(JSON.stringify(r));
    copy.id = 'DD-' + Date.now().toString(36).toUpperCase();
    copy.timestamp = new Date().toISOString();
    copy.createdAt = copy.timestamp;
    delete copy._id;
    db.detentionRecords.push(copy);
    saveDB();
    renderDetentionRecords();
    alert('Record duplicated!');
    autoBackup();
}

function deleteDetentionRecord(idx) {
    const r = db.detentionRecords[idx];
    if (!r) return alert('Record not found.');
    if (confirm(`Delete record "${r.lotName}"?`)) { db.detentionRecords.splice(idx, 1);
        saveDB();
        renderDetentionRecords();
        autoBackup(); }
}

function buildDetentionPreviewHTML(data) {
    const slabHtml = (data.slabs || defaultDetentionSlabs).map(s =>
        `<tr><td style="padding:2px 8px;">${s.from} - ${s.to}</td><td style="padding:2px 8px;text-align:right;">${formatUSD(s.rate)}</td></tr>`
    ).join('');
    return `
        <div style="background:#ffffff;color:#1a1a1a;font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:10px;">
            <h3 style="color:var(--primary);border-bottom:2px solid var(--primary);padding-bottom:6px;">⏳ Detention / Demurrage Report</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;">
                <tr><td style="padding:4px 8px;font-weight:bold;">Lot / Reference</td><td>${data.lotName}</td><td style="padding:4px 8px;font-weight:bold;">Pickup Date</td><td>${data.pickup}</td></tr>
                <tr><td style="padding:4px 8px;font-weight:bold;">Return Date</td><td>${data.ret}</td><td style="padding:4px 8px;font-weight:bold;">Free Days Allowed</td><td>${data.freeDays}</td></tr>
                <tr><td style="padding:4px 8px;font-weight:bold;">Total Days Used</td><td>${data.totalDays}</td><td style="padding:4px 8px;font-weight:bold;">Chargeable Days</td><td>${data.chargeableDays}</td></tr>
                <tr><td style="padding:4px 8px;font-weight:bold;">Total Charge (USD)</td><td>${formatUSD(data.totalUSD)}</td><td style="padding:4px 8px;font-weight:bold;">Total Charge (INR)</td><td>${formatINR(data.totalINR)}</td></tr>
            </table>
            <h4 style="color:var(--text-light);font-size:0.8rem;margin-top:12px;">📈 Progressive Slabs Used</h4>
            <table style="width:100%;border-collapse:collapse;font-size:0.8rem;border:1px solid var(--border);">
                <thead><tr style="background:#1e3a8a;color:white;"><th style="padding:4px 8px;">Days Range</th><th style="padding:4px 8px;text-align:right;">Rate / Day</th></tr></thead>
                <tbody>${slabHtml}</tbody>
            </table>
            <p style="margin-top:12px;font-size:0.7rem;color:var(--text-light);text-align:center;">Generated on ${new Date().toLocaleString('en-IN')}</p>
        </div>
    `;
}

function previewDetentionRecord(idx = null) {
    let data;
    if (idx !== null) { data = db.detentionRecords[idx]; if (!data) return alert('Record not found.'); } else { data =
            getDetentionFormData(); if (!data.pickup || !data.ret) return alert('Please fill dates.'); }
    document.getElementById('modal-title').textContent = 'Detention / Demurrage Preview';
    document.getElementById('previewBody').innerHTML = buildDetentionPreviewHTML(data);
    openModal('previewModal');
}

function downloadDetentionPDF(idx = null) {
    let data;
    if (idx !== null) { data = db.detentionRecords[idx]; if (!data) return alert('Record not found.'); } else { data =
            getDetentionFormData(); if (!data.pickup || !data.ret) return alert('Please fill dates.'); }
    const html = buildDetentionPreviewHTML(data);
    const renderArea = document.getElementById('pdf-render-area');
    renderArea.innerHTML = html;
    renderArea.style.cssText = 'position:fixed;left:0;top:0;width:800px;background:white;z-index:9999;opacity:1;padding:10px;';
    setTimeout(() => {
        html2canvas(renderArea, { scale: 1, useCORS: true, backgroundColor: '#ffffff' })
            .then(canvas => {
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const margin = 10;
                const imgData = canvas.toDataURL('image/jpeg', 0.95);
                let imgWidth = pdfWidth - 2 * margin;
                let imgHeight = (canvas.height * imgWidth) / canvas.width;
                const maxHeight = pdfHeight - 2 * margin;
                if (imgHeight > maxHeight) { const scale = maxHeight / imgHeight;
                    imgWidth *= scale;
                    imgHeight *= scale; }
                const x = (pdfWidth - imgWidth) / 2;
                const y = (pdfHeight - imgHeight) / 2;
                pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
                pdf.save(`Detention_${data.lotName}_${data.pickup}.pdf`);
                renderArea.style.cssText = 'position:fixed;left:-10000px;top:0;width:800px;background:white;z-index:-1;';
                renderArea.innerHTML = '';
            }).catch(err => { console.error(err);
                alert('PDF generation failed.');
                renderArea.style.cssText = 'position:fixed;left:-10000px;top:0;width:800px;background:white;z-index:-1;';
                renderArea.innerHTML = ''; });
    }, 500);
}

// ==================== MULTI-CARRIER FREIGHT CALCULATOR ====================
if (!db.freightCalculations) db.freightCalculations = [];

const defaultFreightCharges = [
    { name: 'OCEAN FREIGHT', unit: 'CTR', currency: 'USD', rate20: 4900, qty20: 1, rate40: 5000, qty40: 1 },
    { name: 'BUNKER SURCHARGE', unit: 'TEU', currency: 'USD', rate20: 16, qty20: 1, rate40: 32, qty40: 1 },
    { name: 'ETS', unit: 'TEU', currency: 'USD', rate20: 78, qty20: 1, rate40: 156, qty40: 1 },
    { name: 'EFS', unit: 'TEU', currency: 'USD', rate20: 125, qty20: 1, rate40: 250, qty40: 1 },
    { name: 'TERMINAL HANDLING', unit: 'CTR', currency: 'USD', rate20: 150, qty20: 1, rate40: 200, qty40: 1 },
    { name: 'DOCUMENTATION', unit: 'BL', currency: 'USD', rate20: 30, qty20: 1, rate40: 30, qty40: 1 },
    { name: 'SECURITY S/M', unit: 'BL', currency: 'USD', rate20: 25, qty20: 1, rate40: 25, qty40: 1 }
];

function renderFreightChargeRows(charges) {
    const tbody = document.getElementById('fr-charges-tbody');
    if (!tbody) return;
    const rows = charges || defaultFreightCharges;
    tbody.innerHTML = rows.map((c, i) => `
        <tr draggable="true" data-index="${i}" ondragstart="onFrRowDragStart(event)" ondragover="onFrRowDragOver(event)" ondragleave="onFrRowDragLeave(event)" ondrop="onFrRowDrop(event)">
            <td style="text-align:center;font-weight:600;">${i+1}</td>
            <td><input type="text" class="fr-charge-name" value="${c.name}" oninput="calcFreight()" placeholder="Charge Name" onfocus="highlightInput(this)" onblur="unhighlightInput(this)" /></td>
            <td>
                <select class="fr-charge-unit" onchange="calcFreight()" onfocus="highlightInput(this)" onblur="unhighlightInput(this)" style="text-align:center;width:100%;">
                    <option value="CNT" ${c.unit === 'CNT' ? 'selected' : ''}>CNT</option>
                    <option value="TEU" ${c.unit === 'TEU' ? 'selected' : ''}>TEU</option>
                </select>
            </td>
            <td>
                <select class="fr-charge-currency" onchange="calcFreight()" onfocus="highlightInput(this)" onblur="unhighlightInput(this)">
                    <option value="USD" ${c.currency === 'USD' ? 'selected' : ''}>USD</option>
                    <option value="INR" ${c.currency === 'INR' ? 'selected' : ''}>INR</option>
                </select>
            </td>
            <td><input type="number" class="fr-rate20" step="0.01" value="${c.rate20}" oninput="calcFreight()" onfocus="highlightInput(this)" onblur="unhighlightInput(this)" /></td>
            <td><input type="number" class="fr-qty20" step="1" value="${c.qty20}" min="0" oninput="calcFreight()" onfocus="highlightInput(this)" onblur="unhighlightInput(this)" /></td>
            <td><input type="number" class="fr-rate40" step="0.01" value="${c.rate40}" oninput="calcFreight()" onfocus="highlightInput(this)" onblur="unhighlightInput(this)" /></td>
            <td><input type="number" class="fr-qty40" step="1" value="${c.qty40}" min="0" oninput="calcFreight()" onfocus="highlightInput(this)" onblur="unhighlightInput(this)" /></td>
            <td style="text-align:center;"><button class="btn btn-sm btn-clear" onclick="deleteFreightChargeRow(this)">×</button></td>
        </tr>
    `).join('');
    enableFreightDragDrop();
    calcFreight();
}

let frDragData = null;

function onFrRowDragStart(e) { frDragData = e.target.closest('tr');
    frDragData.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move'; }

function onFrRowDragOver(e) { e.preventDefault();
    const row = e.target.closest('tr'); if (row) row.classList.add('drag-over'); }

function onFrRowDragLeave(e) { const row = e.target.closest('tr'); if (row) row.classList.remove('drag-over'); }

function onFrRowDrop(e) {
    e.preventDefault();
    const target = e.target.closest('tr');
    if (target) target.classList.remove('drag-over');
    if (frDragData && frDragData !== target) {
        const container = document.getElementById('fr-charges-tbody');
        const children = Array.from(container.children);
        const srcIdx = children.indexOf(frDragData);
        const tgtIdx = children.indexOf(target);
        if (srcIdx < tgtIdx) container.insertBefore(frDragData, target.nextSibling);
        else container.insertBefore(frDragData, target);
        frDragData.classList.remove('dragging');
        frDragData = null;
        container.querySelectorAll('tr').forEach((tr, i) => tr.querySelector('td:first-child').textContent = i + 1);
        calcFreight();
    }
}

function enableFreightDragDrop() {
    document.querySelectorAll('#fr-charges-tbody tr').forEach(row => {
        row.addEventListener('dragend', (e) => { e.target.closest('tr').classList.remove('dragging'); });
    });
}

function addFreightChargeRow() {
    const tbody = document.getElementById('fr-charges-tbody');
    const newRow = document.createElement('tr');
    const idx = tbody.children.length;
    newRow.draggable = true;
    newRow.innerHTML = `
        <td style="text-align:center;font-weight:600;">${idx+1}</td>
        <td><input type="text" class="fr-charge-name" value="NEW CHARGE" oninput="calcFreight()" /></td>
        <td><input type="text" class="fr-charge-unit" value="CTR" oninput="calcFreight()" /></td>
        <td><select class="fr-charge-currency" onchange="calcFreight()"><option value="USD">USD</option><option value="INR">INR</option></select></td>
        <td><input type="number" class="fr-rate20" step="0.01" value="0" oninput="calcFreight()" /></td>
        <td><input type="number" class="fr-qty20" step="1" value="0" min="0" oninput="calcFreight()" /></td>
        <td><input type="number" class="fr-rate40" step="0.01" value="0" oninput="calcFreight()" /></td>
        <td><input type="number" class="fr-qty40" step="1" value="0" min="0" oninput="calcFreight()" /></td>
        <td class="row-total" id="fr-total-${idx}">$ 0.00</td>
        <td style="text-align:center;"><button class="btn btn-sm btn-clear" onclick="deleteFreightChargeRow(this)">×</button></td>
    `;
    tbody.appendChild(newRow);
    enableFreightDragDrop();
    calcFreight();
}

function deleteFreightChargeRow(btn) {
    const row = btn.closest('tr');
    if (document.querySelectorAll('#fr-charges-tbody tr').length > 1) {
        row.remove();
        document.querySelectorAll('#fr-charges-tbody tr').forEach((tr, i) => tr.querySelector('td:first-child').textContent = i +
            1);
        calcFreight();
    } else {
        alert('You must keep at least one charge row.');
    }
}

function calcFreight() {
    let grand20USD = 0,
        grand40USD = 0;
    document.querySelectorAll('#fr-charges-tbody tr').forEach((row) => {
        const unit = row.querySelector('.fr-charge-unit').value;
        let rate20 = parseFloat(row.querySelector('.fr-rate20').value) || 0;
        let rate40 = parseFloat(row.querySelector('.fr-rate40').value) || 0;
        if (unit === 'TEU') {
            rate40 = rate20 * 2;
            row.querySelector('.fr-rate40').value = rate40.toFixed(2);
        }
        const qty20 = parseInt(row.querySelector('.fr-qty20').value) || 0;
        const qty40 = parseInt(row.querySelector('.fr-qty40').value) || 0;
        const curr = row.querySelector('.fr-charge-currency').value;
        let row20 = rate20 * qty20;
        let row40 = rate40 * qty40;
        if (curr === 'INR') {
            const rateUSD = db.exchangeRates.USD || 94.5;
            row20 = row20 / rateUSD;
            row40 = row40 / rateUSD;
        }
        grand20USD += row20;
        grand40USD += row40;
    });
    document.getElementById('fr-summary-area').dataset.total20 = grand20USD;
    document.getElementById('fr-summary-area').dataset.total40 = grand40USD;
    applyFreightMargin();
}

function applyFreightMargin() {
    const marginPct = parseFloat(document.getElementById('fr-margin-pct').value) || 0;
    const total20 = parseFloat(document.getElementById('fr-summary-area').dataset.total20) || 0;
    const total40 = parseFloat(document.getElementById('fr-summary-area').dataset.total40) || 0;
    const margin20 = total20 * (marginPct / 100);
    const margin40 = total40 * (marginPct / 100);
    const sell20 = total20 + margin20;
    const sell40 = total40 + margin40;

    const html = `
    <div class="modern-section">
        <div class="modern-section-title"><span>💰 Freight Cost Breakdown</span></div>
        <table class="modern-table" style="background: white; border-collapse: collapse; width: 100%;">
            <thead>
                <tr><th style="padding: 6px 12px; text-align: left;">Component</th><th style="padding: 6px 12px; text-align: right;">20 GP (USD)</th><th style="padding: 6px 12px; text-align: right;">40 HC (USD)</th></tr>
            </thead>
            <tbody>
                <tr><td><span class="badge badge-blue">FRT</span> Total Freight Cost</td><td class="text-right">${formatUSD(total20)}</td><td class="text-right">${formatUSD(total40)}</td></tr>
                <tr><td><span class="badge badge-yellow">MRG</span> Margin % (${marginPct}%)</td><td class="text-right">${formatUSD(margin20)}</td><td class="text-right">${formatUSD(margin40)}</td></tr>
            </tbody>
            <!-- 🟠 GRADIENT FOOTER – now a single row with label + amounts -->
            <tfoot style="background: transparent !important;">
                <tr style="background: linear-gradient(135deg, #f59e0b, #d97706) !important; color: white !important; font-weight: 800; font-size: 1.05rem;">
                    <td style="padding: 8px 12px; text-align: right; background: transparent !important; color: white !important; border-radius: 0 0 0 8px;">🏷️ FINAL SELLING PRICE</td>
                    <td style="padding: 8px 12px; text-align: right; background: transparent !important; color: white !important;">${formatUSD(sell20)}</td>
                    <td style="padding: 8px 12px; text-align: right; background: transparent !important; color: white !important; border-radius: 0 0 8px 0;">${formatUSD(sell40)}</td>
                </tr>
            </tfoot>
        </table>
    </div>`;
    document.getElementById('fr-summary-area').innerHTML = html;
}

function saveFreightRecord() {
    const carrier = document.getElementById('fr-carrier').value.trim().toUpperCase();
    const pol = document.getElementById('fr-pol').value.trim().toUpperCase();
    const pod = document.getElementById('fr-pod').value.trim().toUpperCase();
    const commodity = document.getElementById('fr-commodity').value;
    const validFrom = document.getElementById('fr-valid-from').value;
    const validTill = document.getElementById('fr-valid-till').value;

    if (!carrier || !pol || !pod || !validTill) {
        alert('Please fill Carrier, POL, POD, and Valid Till (mandatory fields).');
        return;
    }

    // ✅ Get the total cost (without margin)
    const cost20 = parseFloat(document.getElementById('fr-summary-area').dataset.total20) || 0;
    const cost40 = parseFloat(document.getElementById('fr-summary-area').dataset.total40) || 0;

    if (cost20 <= 0 && cost40 <= 0) {
        alert('No freight costs calculated. Please enter valid rates and quantities.');
        return;
    }

    const now = new Date().toISOString();

    const upsertRate = (containerType, amount) => {
        if (amount <= 0) return;
        const existingIdx = db.rateSheet.findIndex(r =>
            r.carrierName === carrier &&
            r.pol === pol &&
            r.pod === pod &&
            r.containerType === containerType &&
            r.freightType === 'SEA' &&
            r.validFrom === validFrom &&
            r.validTo === validTill
        );
        if (existingIdx !== -1) db.rateSheet.splice(existingIdx, 1);

        db.rateSheet.push({
            id: 'RS-' + Date.now().toString(36).toUpperCase() + '-' + containerType.replace(' ', ''),
            carrierName: carrier,
            freightType: 'SEA',
            pol: pol,
            pod: pod,
            containerType: containerType,
            currency: 'USD',          // Cost is in USD
            freightAmount: amount,    // ✅ Now saves the base cost, not sell price
            transitTime: '',
            commodity: commodity,
            validFrom: validFrom || new Date().toISOString().split('T')[0],
            validTo: validTill,
            remarks: `Auto-saved from Freight Calculator (${containerType}) – Base Cost`,
            createdAt: now,
            updatedAt: now,
            source: 'calc'
        });
    };

    upsertRate('20 GP', cost20);
    upsertRate('40 HC', cost40);

    saveDB();
    alert(`✅ Base freight costs saved to Rate Sheet!\n20 GP: $${cost20.toFixed(2)}\n40 HC: $${cost40.toFixed(2)}`);
    clearFreightForm();
    if (document.getElementById('ratesheet')?.classList.contains('active')) {
        renderRateSheet();
        updateExpiryDashboard();
    }
    autoBackup();
}

function renderFreightRecords() {
    // Safely get elements – if they don't exist, use defaults
    const searchInput = document.getElementById('fr-search');
    const perPageSelect = document.getElementById('fr-per-page');
    const listEl = document.getElementById('fr-records-list');
    const paginationEl = document.getElementById('fr-records-pagination');

    // If the list container isn't present, exit silently (panel may be hidden)
    if (!listEl) return;

    const search = searchInput ? searchInput.value.toLowerCase() : '';
    const perPage = perPageSelect ? parseInt(perPageSelect.value) || 10 : 10;

    let records = db.freightCalculations || [];
    records = records.filter(r => {
        const text = `${r.carrier || ''} ${r.origin || ''}`.toLowerCase();
        return text.includes(search);
    });
    records.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    const total = records.length;
    const totalPages = Math.ceil(total / perPage) || 1;
    let page = parseInt(sessionStorage.getItem('frPage') || '1');
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    sessionStorage.setItem('frPage', String(page));

    const start = (page - 1) * perPage;
    const pageData = records.slice(start, start + perPage);

    if (total === 0) {
        listEl.innerHTML = '<p style="color:var(--text-light);padding:20px;text-align:center;">No freight records found.</p>';
        if (paginationEl) paginationEl.innerHTML = '';
        return;
    }

    listEl.innerHTML = pageData.map((r, i) => {
        const realIdx = db.freightCalculations.indexOf(r);
        return `<div class="det-record-card" style="border-left:4px solid var(--primary);">
            <div class="info">
                <h4>${r.carrier || 'N/A'} (${r.origin || 'N/A'})</h4>
                <p>${(r.charges || []).length} charges | Total: ${formatUSD(r.totalUSD || 0)} / ${formatINR(r.totalINR || 0)}</p>
                <p style="font-size:0.7rem;color:var(--text-light);">Saved: ${r.timestamp ? new Date(r.timestamp).toLocaleDateString('en-IN') : '-'}</p>
            </div>
            <div class="actions">
                <button class="btn btn-sm btn-preview" onclick="previewFreightRecord(${realIdx})">👁</button>
                <button class="btn btn-sm btn-preview" onclick="editFreightRecord(${realIdx})">✏️</button>
                <button class="btn btn-sm btn-duplicate" onclick="duplicateFreightRecord(${realIdx})">📋</button>
                <button class="btn btn-sm btn-clear" onclick="deleteFreightRecord(${realIdx})">×</button>
            </div>
        </div>`;
    }).join('');

    if (paginationEl) {
        if (totalPages <= 1) {
            paginationEl.innerHTML = '';
            return;
        }
        paginationEl.innerHTML =
            `<button class="page-btn" onclick="changeFreightPage(${page - 1})" ${page === 1 ? 'disabled' : ''}>‹ Prev</button>
            <span class="page-info">Page ${page} of ${totalPages} (${total} records)</span>
            <button class="page-btn" onclick="changeFreightPage(${page + 1})" ${page === totalPages ? 'disabled' : ''}>Next ›</button>`;
    }
}

function changeFreightPage(page) {
    sessionStorage.setItem('frPage', String(page));
    renderFreightRecords();
}

function clearFreightFilters() {
    const searchInput = document.getElementById('fr-search');
    const perPageSelect = document.getElementById('fr-per-page');
    if (searchInput) searchInput.value = '';
    if (perPageSelect) perPageSelect.value = '10';
    sessionStorage.setItem('frPage', '1');
    renderFreightRecords();
}

function clearFreightForm() {
    document.getElementById('fr-carrier').value = '';
    document.getElementById('fr-pol').value = '';
    document.getElementById('fr-pod').value = '';
    document.getElementById('fr-commodity').value = 'NON HAZ';
    document.getElementById('fr-valid-from').valueAsDate = new Date();
    document.getElementById('fr-valid-till').value = '';
    document.getElementById('fr-currency').value = 'USD';
    document.getElementById('fr-margin-pct').value = '5';
    document.querySelectorAll('#fr-charges-tbody tr').forEach(row => {
        row.querySelector('.fr-rate20').value = '0';
        row.querySelector('.fr-rate40').value = '0';
        row.querySelector('.fr-qty20').value = '0';
        row.querySelector('.fr-qty40').value = '0';
        row.querySelector('.fr-charge-unit').value = 'CNT';
    });
    calcFreight();
}

function editFreightRecord(idx) {
    const r = db.freightCalculations[idx];
    if (!r) return alert('Record not found.');
    loadFreightForm(r);
    document.getElementById('calc-freight').scrollIntoView({ behavior: 'smooth' });
}

function duplicateFreightRecord(idx) {
    const r = db.freightCalculations[idx];
    if (!r) return alert('Record not found.');
    const copy = JSON.parse(JSON.stringify(r));
    copy.id = 'FR-' + Date.now().toString(36).toUpperCase();
    copy.timestamp = new Date().toISOString();
    copy.createdAt = copy.timestamp;
    delete copy._id;
    db.freightCalculations.push(copy);
    saveDB();
    renderFreightRecords();
    alert('Record duplicated!');
    autoBackup();
}

function duplicateFreightCurrent() {
    const data = getFreightFormData();
    if (!data.carrier) return alert('Please fill Carrier.');
    data.id = 'FR-' + Date.now().toString(36).toUpperCase();
    data.timestamp = new Date().toISOString();
    data.createdAt = data.timestamp;
    db.freightCalculations.push(data);
    saveDB();
    renderFreightRecords();
    alert('Current form duplicated and saved!');
    clearFreightForm();
    autoBackup();
}

function deleteFreightRecord(idx) {
    const r = db.freightCalculations[idx];
    if (!r) return alert('Record not found.');
    if (confirm(`Delete freight calculation for "${r.carrier}"?`)) { db.freightCalculations.splice(idx, 1);
        saveDB();
        renderFreightRecords();
        autoBackup(); }
}

function buildFreightPreviewHTML(data) {
    const chargeRows = data.charges.map((c, i) => `
        <tr><td>${i+1}</td><td>${c.name}</td><td>${c.unit}</td><td>${c.currency}</td>
        <td style="text-align:right;">${formatUSD(c.rate20)}</td><td style="text-align:center;">${c.qty20}</td>
        <td style="text-align:right;">${formatUSD(c.rate40)}</td><td style="text-align:center;">${c.qty40}</td>
        <td style="text-align:right;font-weight:700;">${formatUSD((c.rate20*c.qty20)+(c.rate40*c.qty40))}</td></tr>
    `).join('');
    return `
        <div style="background:#ffffff;color:#1a1a1a;font-family:Arial,sans-serif;max-width:800px;margin:0 auto;padding:10px;">
            <h3 style="color:var(--primary);border-bottom:2px solid var(--primary);padding-bottom:6px;">💰 Freight Calculation</h3>
            <table style="width:100%;border-collapse:collapse;font-size:0.85rem;margin-bottom:12px;">
                <tr><td style="padding:4px 8px;font-weight:bold;">Carrier</td><td>${data.carrier}</td><td style="padding:4px 8px;font-weight:bold;">Origin</td><td>${data.origin}</td></tr>
                <tr><td style="padding:4px 8px;font-weight:bold;">Base Currency</td><td colspan="3">${data.baseCurrency}</td></tr>
            </table>
            <h4 style="color:var(--primary);font-size:0.9rem;">📋 Charges Breakdown</h4>
            <table style="width:100%;border-collapse:collapse;font-size:0.8rem;border:1px solid var(--border);">
                <thead><tr style="background:#1e3a8a;color:white;"><th>#</th><th>Charge</th><th>Unit</th><th>Curr</th><th>20′ Rate</th><th>20′ Qty</th><th>40′ Rate</th><th>40′ Qty</th><th>Total</th></tr></thead>
                <tbody>${chargeRows}</tbody>
                <tfoot><tr style="background:#f1f5f9;font-weight:bold;"><td colspan="8" style="text-align:right;padding:6px 8px;">GRAND TOTAL</td><td style="text-align:right;padding:6px 8px;color:var(--primary);">${formatUSD(data.totalUSD)}</td></tr></tfoot>
            </table>
            <p style="margin-top:12px;font-size:0.7rem;color:var(--text-light);text-align:center;">Generated on ${new Date().toLocaleString('en-IN')}</p>
        </div>
    `;
}

function previewFreightRecord(idx = null) {
    let data;
    if (idx !== null) { data = db.freightCalculations[idx]; if (!data) return alert('Record not found.'); } else { data =
            getFreightFormData(); if (!data.carrier) return alert('Please fill Carrier.'); }
    document.getElementById('modal-title').textContent = 'Freight Calculation Preview';
    document.getElementById('previewBody').innerHTML = buildFreightPreviewHTML(data);
    openModal('previewModal');
}

function downloadFreightPDF(idx = null) {
    let data;
    if (idx !== null) { data = db.freightCalculations[idx]; if (!data) return alert('Record not found.'); } else { data =
            getFreightFormData(); if (!data.carrier) return alert('Please fill Carrier.'); }
    const html = buildFreightPreviewHTML(data);
    const renderArea = document.getElementById('pdf-render-area');
    renderArea.innerHTML = html;
    renderArea.style.cssText = 'position:fixed;left:0;top:0;width:800px;background:white;z-index:9999;opacity:1;padding:10px;';
    setTimeout(() => {
        html2canvas(renderArea, { scale: 1, useCORS: true, backgroundColor: '#ffffff' })
            .then(canvas => {
                const { jsPDF } = window.jspdf;
                const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();
                const margin = 10;
                const imgData = canvas.toDataURL('image/jpeg', 0.95);
                let imgWidth = pdfWidth - 2 * margin;
                let imgHeight = (canvas.height * imgWidth) / canvas.width;
                const maxHeight = pdfHeight - 2 * margin;
                if (imgHeight > maxHeight) { const scale = maxHeight / imgHeight;
                    imgWidth *= scale;
                    imgHeight *= scale; }
                const x = (pdfWidth - imgWidth) / 2;
                const y = (pdfHeight - imgHeight) / 2;
                pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
                pdf.save(`Freight_${data.carrier}_${data.origin}.pdf`);
                renderArea.style.cssText = 'position:fixed;left:-10000px;top:0;width:800px;background:white;z-index:-1;';
                renderArea.innerHTML = '';
            }).catch(err => { console.error(err);
                alert('PDF generation failed.');
                renderArea.style.cssText = 'position:fixed;left:-10000px;top:0;width:800px;background:white;z-index:-1;';
                renderArea.innerHTML = ''; });
    }, 500);
}

function populateFreightDropdowns() {
    const selCarrier = document.getElementById('fr-carrier');
    const selPol = document.getElementById('fr-pol');
    const selPod = document.getElementById('fr-pod');
    const visibleCarriers = db.carriers.filter(c => !(db.hiddenItems.carriers || []).includes(c));
    const visiblePol = db.pol.filter(p => !(db.hiddenItems.pol || []).includes(p));
    const visiblePod = db.pod.filter(p => !(db.hiddenItems.pod || []).includes(p));
    if (selCarrier) {
        selCarrier.innerHTML = '<option value="">Select Carrier</option>' +
            visibleCarriers.map(c => `<option value="${c}">${c}</option>`).join('');
    }
    if (selPol) {
        selPol.innerHTML = '<option value="">Select POL</option>' +
            visiblePol.map(p => `<option value="${p}">${p}</option>`).join('');
    }
    if (selPod) {
        selPod.innerHTML = '<option value="">Select POD</option>' +
            visiblePod.map(p => `<option value="${p}">${p}</option>`).join('');
    }
}
// ==================== COMPACT EMAIL BUILDER ====================
function buildCompactEmailHTML(data, mode) {
    const modeLabel = { sea: 'SEA FREIGHT', air: 'AIR FREIGHT', lcl: 'LCL FREIGHT' }[mode];
    const validityDisplay = data.validityDate ? new Date(data.validityDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';
    const transitDisplay = data.transit ? `${data.transit} Days` : '—';
    const order = data.chargesOrder || getCurrentChargesOrder(mode);
    const toUpper = (val) => val ? String(val).toUpperCase() : '-';
    let grandTotal = 0;
    const chargesWithINR = {};

    // ---- FULL CALCULATION (identical to original) ----
    Object.entries(data.charges || {}).forEach(([charge, c]) => {
        const manualSellAmt = c.amount;
        const manualBuyAmt = c.buyAmount || 0;
        let totalSellAmt = manualSellAmt;
        let totalBuyAmt = manualBuyAmt;
        let minApplied = false;

        if (mode === 'air' && charge === 'PALLETISATION') {
            const pallets = data.pallets || 0;
            if (pallets > 0) {
                const plies = pallets * 2;
                const palletCharge = pallets * 1875;
                const plyCharge = plies * 600;
                totalSellAmt = Math.max(palletCharge, plyCharge);
                totalBuyAmt = Math.max(totalBuyAmt, totalSellAmt);
            }
        }

        if (mode === 'air' || mode === 'lcl') {
            const basis = c.basis || 'Normal';
            if (basis === 'Per KGS') {
                totalSellAmt *= (data.weight || 0);
                totalBuyAmt *= (data.weight || 0);
            } else if (basis === 'Per CBM') {
                totalSellAmt *= (data.volume || 0);
                totalBuyAmt *= (data.volume || 0);
            } else if (basis === 'Per KGS × 3') {
                totalSellAmt *= (data.weight || 0) * 3;
                totalBuyAmt *= (data.weight || 0) * 3;
            } else if (basis === 'Per KGS × 4') {
                totalSellAmt *= (data.weight || 0) * 4;
                totalBuyAmt *= (data.weight || 0) * 4;
            }
        }

        if (mode === 'air' && charge !== 'PALLETISATION') {
            const basis = c.basis || 'Normal';
            if ((basis === 'Per KGS' || basis === 'Per KGS × 4') && AIR_MIN_THRESHOLDS && AIR_MIN_THRESHOLDS[charge]) {
                const minVal = AIR_MIN_THRESHOLDS[charge];
                if (totalSellAmt < minVal) {
                    minApplied = true;
                    totalSellAmt = minVal;
                    totalBuyAmt = Math.max(totalBuyAmt, minVal);
                }
            }
        }

        if (mode === 'lcl' && (charge === 'FREIGHT' || charge === 'THC')) {
            const volume = data.volume || 0;
            if (volume > 0) {
                const basis = c.basis || 'Normal';
                if (basis === 'Normal') {
                    totalSellAmt *= volume;
                    totalBuyAmt *= volume;
                }
            }
        }

        const sellINR = toINR(totalSellAmt, c.currency);
        const buyINR = toINR(totalBuyAmt, c.buyCurrency || c.currency);
        chargesWithINR[charge] = {
            unitSellAmt: manualSellAmt,
            totalSellAmt: totalSellAmt,
            currency: c.currency,
            sellINR,
            buyINR,
            basis: c.basis || 'Normal',
            minApplied: minApplied
        };
        grandTotal += sellINR;
    });

    // ---- HTML generation with inline widths ----
    const fontStack = "'Aptos', 'Segoe UI', Arial, sans-serif";
    const dataSize = '10px';
    const headingSize = '12px';
    const titleSize = '13px';
    const thPadding = '4px 8px';
    const tdPadding = '4px 8px';
    const tableWidth = '15cm';
    const maxTableWidth = '17cm';

    // ---- 1. Customer Details (inline widths) ----
	const detailRows = [
		['Client', toUpper(data.client), 'Status', toUpper(data.status)],
		['POL', toUpper(data.pol), 'POD', toUpper(data.pod)],
		['Commodity', toUpper(data.commodity), (mode === 'sea' ? 'Container' : 'Volume (CBM)'), mode === 'sea' ? toUpper(data.container) : (data.volume || '-')],
		['Weight (KGS)', data.weight || '-', 'Incoterm', toUpper(data.incoterm)],
		['Carrier', toUpper(data.carrier), 'Transit Time', transitDisplay],
		['Quote Date', data.autoDate || '-', 'Validity Date', validityDisplay]
	];

	let detailHtml = `<table style="width:${tableWidth};min-width:${tableWidth};max-width:100%;border-collapse:collapse;margin-top:0;font-size:${dataSize};">
		<thead>
			<tr><th colspan="4" style="border:1px solid #1e3a8a;padding:${thPadding};text-align:center;background:#1e3a8a;color:white;font-weight:700;font-size:${headingSize};line-height:1.4;vertical-align:middle;">Customer & Shipment Details</th></tr>
		</thead>
		<tbody>`;
	detailRows.forEach((row, idx) => {
		const bg = idx % 2 === 0 ? '#f1f5f9' : 'white';
		const isValidityRow = row[0] === 'Validity Date' || row[2] === 'Validity Date';
		const valueStyle1 = row[0] === 'Validity Date' ? 'color:#dc2626;font-weight:bold;' : '';
		const valueStyle2 = row[2] === 'Validity Date' ? 'color:#dc2626;font-weight:bold;' : '';
		detailHtml += `<tr style="background:${bg};">
			<th style="border:1px solid #d1d5db;padding:${thPadding};text-align:left;background:#d2e5f7;font-weight:700;width:15%;">${row[0]}</th>
			<td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:left;width:35%;${valueStyle1}">${row[1]}</td>
			<th style="border:1px solid #d1d5db;padding:${thPadding};text-align:left;background:#d2e5f7;font-weight:700;width:15%;">${row[2]}</th>
			<td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:left;width:35%;${valueStyle2}">${row[3]}</td>
		</tr>`;
	});
	detailHtml += `</tbody></table><br>`;

    // ---- 2. Helper to build charge group with inline widths ----
    function buildGroupTableHTML(groupLabel, categoryNames, srStart) {
        const groupCharges = [];
        categoryNames.forEach(cat => {
            if (order[cat]) {
                order[cat].forEach(ch => {
                    if (chargesWithINR[ch]) {
                        groupCharges.push({ category: cat, charge: ch });
                    }
                });
            }
        });
        if (groupCharges.length === 0) return { html: '', subtotal: 0, nextSr: srStart };

        let html = `<table style="width:${tableWidth};min-width:${tableWidth};max-width:100%;border-collapse:collapse;margin-top:0;font-size:${dataSize};">
            <thead>
                <tr><th colspan="6" style="border:1px solid #1e3a8a;padding:${thPadding};text-align:center;background:#1e3a8a;color:white;font-weight:700;font-size:${headingSize};line-height:1.4;vertical-align:middle;">${groupLabel}</th></tr>
                <tr>
                    <th style="border:1px solid #d1d5db;padding:${thPadding};text-align:center;background:#3896d9;color:white;font-weight:700;font-size:${dataSize};width:10%;">Sr. No</th>
                    <th style="border:1px solid #d1d5db;padding:${thPadding};text-align:left;background:#3896d9;color:white;font-weight:700;font-size:${dataSize};width:30%;">Charge Type</th>
                    <th style="border:1px solid #d1d5db;padding:${thPadding};text-align:center;background:#3896d9;color:white;font-weight:700;font-size:${dataSize};width:10%;">Currency</th>
                    <th style="border:1px solid #d1d5db;padding:${thPadding};text-align:right;background:#3896d9;color:white;font-weight:700;font-size:${dataSize};width:15%;">Sell Amount</th>
                    <th style="border:1px solid #d1d5db;padding:${thPadding};text-align:center;background:#3896d9;color:white;font-weight:700;font-size:${dataSize};width:10%;">Basis</th>
                    <th style="border:1px solid #d1d5db;padding:${thPadding};text-align:right;background:#3896d9;color:white;font-weight:700;font-size:${dataSize};width:29%;">INR Equivalent</th>
                </tr>
            </thead>
            <tbody>`;

        let sr = srStart;
        let subtotal = 0;
        groupCharges.forEach(({ charge }) => {
            const c = chargesWithINR[charge];
            subtotal += c.sellINR;
            const isFreight = charge.toUpperCase() === 'FREIGHT' || charge.toUpperCase() === 'AIR FREIGHT';
            const rowStyle = isFreight ? 'background:#fee2e2;font-weight:700;color:#dc2626;' : '';

            let basisDisplay = c.basis === 'Normal' ? '1' : c.basis;
            if (mode === 'air' && AIR_MIN_THRESHOLDS && AIR_MIN_THRESHOLDS[charge]) {
                if (c.minApplied) {
                    basisDisplay = 'Minimum';
                } else {
                    if (charge === 'GATE PASS') {
                        basisDisplay = 'At Actual';
                    } else {
                        basisDisplay = 'Per KGS';
                    }
                }
            }

            html += `<tr style="${rowStyle}">
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:center;font-size:${dataSize};line-height:1.4;vertical-align:middle;width:10%;">${sr++}</td>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:left;font-size:${dataSize};line-height:1.4;vertical-align:middle;width:30%;">${charge.toUpperCase()}</td>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:center;font-size:${dataSize};line-height:1.4;vertical-align:middle;width:10%;">${c.currency}</td>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;font-size:${dataSize};line-height:1.4;vertical-align:middle;width:15%;">${Number(c.unitSellAmt).toLocaleString('en-IN')}</td>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:center;font-size:${dataSize};line-height:1.4;vertical-align:middle;width:10%;">${basisDisplay}</td>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;font-size:${dataSize};line-height:1.4;vertical-align:middle;width:29%;">${formatINR(c.sellINR)}</td>
            </tr>`;
        });

        html += `</tbody>
            <tfoot>
                <tr style="font-weight:700;background:#e6f7e6;">
                    <td colspan="5" style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;font-size:${dataSize};line-height:1.4;vertical-align:middle;width:71%;">Subtotal</td>
                    <td style="border:1px solid #d1d5db;padding:${tdPadding};text-align:right;font-size:${dataSize};line-height:1.4;vertical-align:middle;width:29%;">${formatINR(subtotal)}</td>
                </tr>
            </tfoot>
        </table>`;
        return { html, subtotal, nextSr: sr };
    }

    // ---- 3. Build charge groups ----
    const groupMap = getChargeGroups(mode);
    const group1Label = "Freight & Carrier Charges";
    const group2Label = "CFS / Transport Charges";
    const group1Cats = groupMap.group1 || [];
    const group2Cats = groupMap.group2 || [];

    let srStart = 1;
    let chargeHtml = '';
    if (mode === 'air') {
        const combinedCats = group1Cats.concat(group2Cats);
        const combinedTable = buildGroupTableHTML("AIR FREIGHT CHARGES", combinedCats, srStart);
        chargeHtml = combinedTable.html;
    } else {
        let table1 = buildGroupTableHTML(group1Label, group1Cats, srStart);
        srStart = table1.nextSr;
        let table2 = buildGroupTableHTML(group2Label, group2Cats, srStart);
        chargeHtml = (table1.html || '') + (table2.html || '');
    }

    // ---- 4. Grand Total ----
    if (chargeHtml) {
        chargeHtml += `<table style="width:${tableWidth};min-width:${tableWidth};max-width:100%;border-collapse:collapse;margin-top:0;font-size:${dataSize};">
            <tbody>
                <tr style="background:#05964b;color:#edeef0;font-weight:800;font-size:15px;line-height:1;vertical-align:middle;">
                    <td style="border:1px solid #d1d5db;padding:4px 8px;text-align:right;width:71%;">GRAND TOTAL (INR) + GST additional</td>
                    <td style="border:1px solid #d1d5db;padding:4px 8px;text-align:left;width:29%;">${formatINR(grandTotal)}</td>
                </tr>
            </tbody>
        </table>`;
    }

    // ---- 5. REMARKS: SPECIAL (Red, Bold, Highlighted) + STANDARD (static list) ----
    let specialRemarksHtml = '';
    if (data.remarks && data.remarks.trim()) {
        specialRemarksHtml = `<div style="background:#fee2e2;border:2px solid #dc2626;border-radius:4px;padding:8px 12px;margin-bottom:8px;color:#991b1b;font-weight:700;font-size:${dataSize};">
            ${data.remarks}
        </div>`;
    }

    // Standard remarks (static per mode)
    let standardRemarks = [];
    if (mode === 'air') {
        standardRemarks = [
            "1. Rate Subject To Booking Acceptance",
            "2. 100% Of Total Freight Charges applicable if Shipments Cancelled Within 48 Hours Before The Delivery Cut-Off Time",
            "3. GST At Actual",
            "4. Rest other charges if any at actual as per receipt.",
            "5. Above rates are valid for 3 days",
            "6. THC:0.95/KG – ac actual",
            "7. For Air cargo payment term will be 15 Days from the date of invoice.",
            "8. Surcharges are at cost and subject to change. This rate QUOTED for prepaid shipment.",
            "9. This rate is quote valid for 1.1 General cargo, Stackable and Normal dimension cargo.",
            "10. This rate is not valid for DG/UB /ODC / Fragile/ Special cargo.",
            "11. Acceptance of shipment would be subject to space availability at the time of booking .",
            "12. EY reserves the right to select routing as per space availability",
            "13. Spot rates offered are valid only for two days from the date of quotation.",
            "14. Under current scenario rates are subject to change without prior notice .",
            "15. Reduction in weight by more than 15% would lead to revision in ad Noc rates."
        ];
    } else {
        standardRemarks = [
            "1. Rates are valid as per vessel sailing.",
            "2. Rates are subject to ACD, SEAL, GRI, PSS, Toll + Local Charges.",
            "3. Rates are Subject to space and inventory availability.",
            "4. Rates are Subject to cargo acceptance and Haz approval.",
            "5. All Govt. taxes are applicable at the time of shipment (GST Applicable).",
            "6. Booking cancellation charges will be applicable as per carrier guidelines for general & SPOT booking.",
            "7. Rates are subject to THC as per tariff if container pick-up from ICD locations.",
            "8. Rates are subject to Standard free time and for additional free time charges will be applicable.",
            "9. Rates are subject to POL - THC, Documentation charges and local charges, as per Tariff.",
            "10. SPOT rates are subject to change at the time of booking."
        ];
    }

    let standardRemarksHtml = standardRemarks.map(line => 
        `<p style="margin:2px 0;font-size:${dataSize};line-height:1.4;">${line}</p>`
    ).join('');

    let remarksHtml = `<table style="width:${tableWidth};min-width:${tableWidth};max-width:100%;border-collapse:collapse;margin-top:0;font-size:${dataSize};">
        <tbody>
            <tr>
                <th style="border:1px solid #1e3a8a;padding:2px 8px;text-align:center;background:#1e3a8a;color:white;font-weight:700;font-size:${headingSize};line-height:1.4;vertical-align:middle;">Remarks</th>
            </tr>
            <tr>
                <td style="border:1px solid #d1d5db;padding:${tdPadding};background:#ffffff;font-size:${dataSize};line-height:1.4;vertical-align:top;">
                    ${specialRemarksHtml}
                    ${standardRemarksHtml}
                </td>
            </tr>
        </tbody>
    </table>`;

    // ---- 6. Final assembly ----
    let html = `<div style="max-width:${maxTableWidth};min-width:${tableWidth};width:auto;margin:0 auto;font-family:${fontStack};background:#ffffff;padding:4px;box-sizing:border-box;color:#1a1a1a;font-size:${dataSize};">
        <p style="margin:0 0 4px 0;font-size:${titleSize};line-height:1.4;">Dear Sir / Madam,</p>
        <br>
        <p style="margin:0 0 10px 0;font-size:${titleSize};line-height:1.4;">Good day !</p>
        <div style="font-size:${titleSize};font-weight:800;color:#1e3a8a;">${modeLabel} QUOTATION / Quote: ${data.quoteNumber || 'DRAFT'}</div>
        <br>
        ${detailHtml}
        ${chargeHtml}
        ${remarksHtml}
    </div>`;
    return html;
}



// =============================================================
// 1. previewDsrShipment - Main modal caller
// =============================================================
function previewDsrShipment(idx) {
    const s = db.shipments[idx];
    if (!s) return alert('Shipment not found.');
    const html = buildShipmentPreviewHTML(s, s.type === 'SEA' ? 'sea' : 'air');
    
    document.getElementById('modal-title').textContent = `Shipment Preview — ${s.code || s.jobNo || 'Unknown'}`;
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}

// =============================================================
// 2. buildShipmentPreviewHTML - Claymorphism UI
// =============================================================
function buildShipmentPreviewHTML(s, mode) {
    const userName = getLoggedInUserName() || db.defaultUser || 'N/A';
    const modeLabel = mode === 'sea' ? 'SEA SHIPMENT DSR' : 'AIR SHIPMENT DSR';
    const getVal = (val) => (val !== undefined && val !== null && val !== '') ? val : '-';

    // Define field groups (label, value)
    const fields = [
        ['CODE', s.code],
        ['TYPE', s.type || s.mode],
        ['SHIPPER', s.shipper],
        ['POL', s.pol],
        ['POD', s.pod],
        ['SHIPPING LINE', s.liner],
        ['CARGO STATUS', s.cargoStatus],
        ['DOCS STATUS', s.docsStatus],
        ['BOOKING NO.', s.bookingNo || s.jobBkg],
        ['CONTAINER NO.', s.containerNo],
        ['ETD', s.etd || s.dd],
        ['ETA', s.eta],
        ['COMMODITY', s.commodity],
        ['WEIGHT (KGS)', s.weight || s.grossWeight],
        ['REMARKS', s.remarks]
    ];

    // Build table rows – alternate background
    let rowsHtml = fields.map(([label, value], idx) => {
        const bg = idx % 2 === 0 ? '#f8fafc' : 'white';
        return `
            <tr style="background:${bg};">
                <td style="padding:8px 12px; border-bottom:1px solid #e2e8f0; font-weight:700; color:#1e3a8a; width:40%;">${label}</td>
                <td style="padding:8px 12px; border-bottom:1px solid #e2e8f0; color:#1a1a1a; font-weight:500;">${getVal(value)}</td>
            </tr>
        `;
    }).join('');

    // Build the HTML
    return `
    <div style="max-width:800px; margin:0 auto; font-family:'Segoe UI',Arial,sans-serif;">
        <!-- Header Card -->
        <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 16px 20px; border-radius: 12px 12px 0 0; display:flex; justify-content:space-between; align-items:center;">
            <div style="font-size:1.2rem; font-weight:700; letter-spacing:0.5px;">${modeLabel}</div>
            <div style="background:rgba(255,255,255,0.2); padding:4px 14px; border-radius:20px; font-size:0.8rem; font-weight:600;">Ref: ${getVal(s.code)}</div>
        </div>

        <!-- Details Table -->
        <div style="background:white; border:1px solid #e2e8f0; border-radius:0 0 12px 12px; overflow:hidden;">
            <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>
        </div>

        <!-- Footer -->
        <div style="margin-top:12px; font-size:0.7rem; color:#94a3b8; text-align:center; border-top:1px solid #e2e8f0; padding-top:10px;">
            <p style="margin:2px 0;">Generated on ${new Date().toLocaleString('en-IN')}</p>
            <div style="font-weight:500; color:#64748b;">Prepared By: ${getVal(s.sales) || userName}</div>
        </div>
    </div>
    `;
}

// =============================================================
// buildDsrPDFDefinition - FINAL 100% WORKING VERSION
// =============================================================
function buildDsrPDFDefinition(s, mode) {
    const userName = getLoggedInUserName() || db.defaultUser || 'N/A';
    const modeLabel = mode === 'sea' ? 'SEA SHIPMENT DSR' : 'AIR SHIPMENT DSR';
    const toUpper = (val) => val ? String(val).toUpperCase() : '-';

    // Helper to get value or '-'
    const getVal = (val) => (val !== undefined && val !== null && val !== '') ? val : '-';

    // Build details rows (without charges)
    const details = [
        ['Code', getVal(s.code)],
        ['Type', getVal(s.type || s.mode)],
        ['Shipper', getVal(s.shipper)],
        ['POL', getVal(s.pol)],
        ['POD', getVal(s.pod)],
        ['Shipping Line', getVal(s.liner)],
        ['Cargo Status', getVal(s.cargoStatus)],
        ['Docs Status', getVal(s.docsStatus)],
        ['Booking No.', getVal(s.bookingNo || s.jobBkg)],
        ['Container No.', getVal(s.containerNo)],
        ['ETD', getVal(s.etd || s.dd)],
        ['ETA', getVal(s.eta)],
        ['Commodity', getVal(s.commodity)],
        ['Weight (KGS)', getVal(s.weight || s.grossWeight)]
    ];

    // Build PDF content
    const content = [];

    // Company header
    content.push(
        { text: db.companyName || 'GATEWAY EXIM', style: 'companyName' },
        { text: db.companyAddress || '', style: 'companyAddress' },
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 2, lineColor: '#1e3a8a' }] },
        { text: ' ' }
    );

    // Title
    content.push({
        columns: [
            { text: modeLabel, style: 'title', alignment: 'left' },
            { text: 'Ref: ' + getVal(s.code), style: 'quoteNum', alignment: 'right' }
        ]
    });

    // Details table (2 columns per row)
    const detailBody = [];
    for (let i = 0; i < details.length; i += 2) {
        const row = [
            { text: details[i][0], style: 'detailLabel' },
            { text: details[i][1] },
            (i+1 < details.length) ? { text: details[i+1][0], style: 'detailLabel' } : { text: '' },
            (i+1 < details.length) ? { text: details[i+1][1] } : { text: '' }
        ];
        detailBody.push(row);
    }

    content.push({
        table: {
            widths: ['*', '*', '*', '*'],
            body: detailBody
        },
        layout: {
            hLineWidth: function() { return 1; },
            vLineWidth: function() { return 1; },
            hLineColor: '#d1d5db',
            vLineColor: '#d1d5db',
            fillColor: function(rowIndex) {
                return (rowIndex % 2 === 0) ? '#f1f5f9' : null;
            }
        },
        margin: [0, 10, 0, 10]
    });

    // Remarks (if any)
    if (s.remarks) {
        content.push(
            { text: 'Remarks', style: 'categoryHeader' },
            { text: s.remarks.toUpperCase(), margin: [5, 5] }
        );
    }

    // Footer
    content.push(
        { canvas: [{ type: 'line', x1: 0, y1: 0, x2: 515, y2: 0, lineWidth: 1, lineColor: '#e2e8f0' }] },
        { text: 'Generated on ' + new Date().toLocaleString('en-IN'), alignment: 'center', fontSize: 8, color: '#64748b' },
        { text: 'Prepared By: ' + userName, alignment: 'center', fontSize: 8, color: '#64748b', margin: [0, 2, 0, 0] }
    );

    return {
        content: content,
        styles: {
            companyName: { fontSize: 14, bold: true, color: '#1e3a8a' },
            companyAddress: { fontSize: 9, color: '#64748b', margin: [0, 2, 0, 4] },
            title: { fontSize: 18, bold: true, color: '#1e3a8a' },
            quoteNum: { fontSize: 12, bold: true, color: '#d97706' },
            detailLabel: { fontSize: 11, bold: true, color: '#334155' },
            categoryHeader: { fontSize: 11, bold: true, color: '#1e3a8a', margin: [0, 8, 0, 4] }
        },
        defaultStyle: { fontSize: 10 }
    };
}

// =============================================================
// 2. downloadDsrPDF - Complete Debug version
// =============================================================
function downloadDsrPDF(idx) {
    try {
        const s = db.shipments[idx];
        if (!s) return alert('Shipment not found.');

        if (typeof pdfMake === 'undefined') {
            alert('pdfMake library is not loaded.');
            return;
        }

        const docDefinition = buildDsrPDFDefinition(s, s.type === 'SEA' ? 'sea' : 'air');
        pdfMake.createPdf(docDefinition).download(`${s.type || 'SHIPMENT'}_${s.code || 'UNKNOWN'}.pdf`);
    } catch (e) {
        alert('PDF generation failed: ' + e.message);
        console.error(e);
    }
}
// ==================== BL DRAFT FUNCTIONS ====================

function renderBLDrafts() {
    const list = document.getElementById('bldraft-list');
    if (!list) return;
    if (!db.bldrafts || db.bldrafts.length === 0) {
        list.innerHTML = '<p style="color:var(--text-light);padding:20px;text-align:center;">No BL drafts found. Click "New BL Draft" to create one.</p>';
        return;
    }
    list.innerHTML = db.bldrafts.map((b, idx) => {
        const statusClass = b.status === 'Finalized' ? 'badge-green' : 'badge-yellow';
        const totalContainers = (b.containers || []).length;
        const shipperDisplay = b.shipperName ? b.shipperName.substring(0, 50) : '-';
        const consigneeDisplay = b.consigneeName ? b.consigneeName.substring(0, 50) : '-';
        const modeIcon = b.mode === 'AIR' ? '✈️' : '🚢';
        const blDateDisplay = b.blDate ? new Date(b.blDate).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) : '-';
        return `<div class="record-card">
            <div class="record-info">
                <h4>${modeIcon} ${b.blNumber || 'BL-Draft'}</h4>
                <p>Date: ${blDateDisplay} | Shipper: ${shipperDisplay} | Consignee: ${consigneeDisplay}</p>
                <p>${b.mode === 'AIR' ? 'Flight' : 'Vessel'}: ${b.vessel || '-'} | ${b.mode === 'AIR' ? 'Airport' : 'Port'}: ${b.pol || '-'} → ${b.pod || '-'}</p>
                ${b.mode !== 'AIR' ? `<p>Containers: ${totalContainers} | Gross Wt: ${b.totalGrossWeight || 0} KGS | Volume: ${b.totalVolume || 0} CBM</p>` : `<p>Gross Wt: ${b.grossWeight || 0} KGS | Volume: ${b.measurement || 0} CBM</p>`}
                <p>Status: <span class="badge ${statusClass}">${b.status || 'Draft'}</span></p>
                <p class="last-modified">Created: ${b.createdAt ? new Date(b.createdAt).toLocaleString('en-IN') : '-'}</p>
            </div>
            <div class="record-actions">
                <button class="btn btn-sm btn-preview" onclick="previewBLDraft(${idx})">👁 Preview</button>
                <button class="btn btn-sm btn-pdf" onclick="downloadBLPDF(${idx})">📄 PDF</button>
                <button class="btn btn-sm btn-duplicate" onclick="duplicateBLDraft(${idx})">📋 Duplicate</button>
                <button class="btn btn-sm btn-preview" onclick="openBLModal(${idx})">✏️ Edit</button>
                ${b.status !== 'Finalized' ? `<button class="btn btn-sm btn-quoted" onclick="finalizeBLDraft(${idx})">✅ Finalize</button>` : ''}
                <button class="btn btn-sm btn-clear" onclick="deleteBLDraft(${idx})">×</button>
            </div>
        </div>`;
    }).join('');
}

function saveBLDraft(editIdx) {
    const blNumber = document.getElementById('bl-number').value.trim();
    if (!blNumber) return alert('BL Number is required.');
    
    const mode = document.getElementById('bl-mode').value;

    const data = {
        mode: mode,
        blNumber: blNumber,
        blDate: document.getElementById('bl-date').value,  // NEW: BL Date
        bookingNo: document.getElementById('bl-booking-no').value.trim(),
        exportRef: document.getElementById('bl-export-ref').value.trim(),
        shipperName: document.getElementById('bl-shipper-name').value.trim(),
	    showAgent: document.getElementById('bl-show-agent').checked, // ← NEW	
        shipperAddr: document.getElementById('bl-shipper-addr').value.trim(),
        consigneeName: document.getElementById('bl-consignee-name').value.trim(),
        consigneeAddr: document.getElementById('bl-consignee-addr').value.trim(),
        notifyName: document.getElementById('bl-notify-name').value.trim(),
        notifyAddr: document.getElementById('bl-notify-addr').value.trim(),
        forwardingAgent: document.getElementById('bl-forwarding-agent').value.trim(),
        deliveryAgentName: document.getElementById('bl-delivery-agent-name').value.trim(),
        deliveryAgentAddr: document.getElementById('bl-delivery-agent-addr').value.trim(),
        preCarriage: document.getElementById('bl-pre-carriage').value.trim(),
        placeOfReceipt: document.getElementById('bl-receipt').value.trim(),
        vessel: document.getElementById('bl-vessel').value.trim(),
        voyage: document.getElementById('bl-voyage').value.trim(),
        pol: document.getElementById('bl-pol').value.trim(),
        pod: document.getElementById('bl-pod').value.trim(),
        placeOfDelivery: document.getElementById('bl-delivery').value.trim(),
        freightPayable: document.getElementById('bl-freight-payable').value,
        movement: document.getElementById('bl-movement').value,
        marks: document.getElementById('bl-marks').value.trim(),
        packagesCount: document.getElementById('bl-packages-count').value.trim(),
        goodsDesc: document.getElementById('bl-goods').value.trim(),
        grossWeight: parseFloat(document.getElementById('bl-gross-weight').value) || 0,
        measurement: parseFloat(document.getElementById('bl-measurement').value) || 0,
        freightType: document.getElementById('bl-freight').value,
        freightAmount: parseFloat(document.getElementById('bl-freight-amt').value) || 0,
        freightCurrency: document.getElementById('bl-freight-cur').value,
        numOriginals: parseInt(document.getElementById('bl-originals').value) || 1,
        placeOfIssue: document.getElementById('bl-place').value.trim(),
        issueDate: document.getElementById('bl-issue-date').value,
        signature: document.getElementById('bl-signature').value.trim() || db.companyName || 'GATEWAY EXIM',
        status: 'Draft',
        lastModified: new Date().toISOString()
    };

    // Collect containers (only for SEA)
    const containerRows = document.querySelectorAll('#bl-container-rows .bl-container-row');
    data.containers = [];
    let totalGrossWeight = 0, totalNetWeight = 0, totalVolume = 0;
    containerRows.forEach(row => {
        const contNo = row.querySelector('.bl-cont-no').value.trim();
        const contType = row.querySelector('.bl-cont-type').value;
        const seal = row.querySelector('.bl-cont-seal').value.trim();
        const grossWeight = parseFloat(row.querySelector('.bl-cont-weight').value) || 0;
        const netWeight = parseFloat(row.querySelector('.bl-cont-net-weight').value) || 0;
        const volume = parseFloat(row.querySelector('.bl-cont-volume').value) || 0;
        const packages = row.querySelector('.bl-cont-packages').value.trim();
        if (contNo) {
            data.containers.push({ 
                containerNo: contNo, 
                type: contType, 
                seal, 
                grossWeight, 
                netWeight, 
                volume, 
                packages 
            });
            totalGrossWeight += grossWeight;
            totalNetWeight += netWeight;
            totalVolume += volume;
        }
    });
    data.totalGrossWeight = totalGrossWeight;
    data.totalNetWeight = totalNetWeight;
    data.totalVolume = totalVolume;

    if (editIdx !== null && editIdx >= 0 && editIdx < db.bldrafts.length) {
        data.createdAt = db.bldrafts[editIdx].createdAt || data.lastModified;
        db.bldrafts[editIdx] = { ...db.bldrafts[editIdx], ...data };
    } else {
        data.createdAt = data.lastModified;
        db.bldrafts.push(data);
    }
    saveDB();
    closeModal('blModal');
    renderBLDrafts();
    alert('BL Draft saved!');
    autoBackup();
}

function finalizeBLDraft(idx) {
    if (idx === null || idx === undefined) return alert('No BL selected.');
    if (!db.bldrafts[idx]) return alert('BL not found.');
    if (db.bldrafts[idx].status === 'Finalized') return alert('Already finalized.');
    db.bldrafts[idx].status = 'Finalized';
    db.bldrafts[idx].lastModified = new Date().toISOString();
    saveDB();
    renderBLDrafts();
    alert('BL Finalized!');
    autoBackup();
}

function deleteBLDraft(idx) {
    if (!db.bldrafts[idx]) return alert('BL not found.');
    if (!confirm('Delete this BL Draft?')) return;
    db.bldrafts.splice(idx, 1);
    saveDB();
    renderBLDrafts();
    autoBackup();
}

function updateBLTotals() {
    let totalGrossWeight = 0, totalNetWeight = 0, totalVolume = 0;
    document.querySelectorAll('#bl-container-rows .bl-container-row').forEach(row => {
        const grossWt = parseFloat(row.querySelector('.bl-cont-weight').value) || 0;
        const netWt = parseFloat(row.querySelector('.bl-cont-net-weight').value) || 0;
        const volume = parseFloat(row.querySelector('.bl-cont-volume').value) || 0;
        totalGrossWeight += grossWt;
        totalNetWeight += netWt;
        totalVolume += volume;
    });
    const weightEl = document.getElementById('bl-total-weight');
    const volumeEl = document.getElementById('bl-total-volume');
    if (weightEl) weightEl.value = totalGrossWeight.toFixed(2) + ' KGS';
    if (volumeEl) volumeEl.value = totalVolume.toFixed(2) + ' CBM';
}

function addBLContainerRow(containerData) {
    const container = document.getElementById('bl-container-rows');
    if (!container) return;
    const modeEl = document.getElementById('bl-mode');
    const mode = modeEl ? modeEl.value : 'SEA';
    const placeholder = mode === 'AIR' ? 'ULD No.' : 'Container No.';
    const row = document.createElement('div');
    row.className = 'bl-container-row';
    row.innerHTML = `
        <input type="text" class="bl-cont-no" value="${containerData?.containerNo || ''}" placeholder="${placeholder}" />
        <select class="bl-cont-type">
            <option value="">Type</option>
            ${db.containers.map(t => `<option value="${t}" ${containerData?.type === t ? 'selected' : ''}>${t}</option>`).join('')}
        </select>
        <input type="text" class="bl-cont-seal" value="${containerData?.seal || ''}" placeholder="Seal" />
        <input type="number" class="bl-cont-weight" value="${containerData?.grossWeight || ''}" placeholder="Gross Wt (KGS)" step="0.01" oninput="updateBLTotals()" />
        <input type="number" class="bl-cont-net-weight" value="${containerData?.netWeight || ''}" placeholder="Net Wt (KGS)" step="0.01" oninput="updateBLTotals()" />
        <input type="number" class="bl-cont-volume" value="${containerData?.volume || ''}" placeholder="Volume (CBM)" step="0.01" oninput="updateBLTotals()" />
        <input type="text" class="bl-cont-packages" value="${containerData?.packages || ''}" placeholder="Packages" />
        <button class="btn btn-sm btn-clear" onclick="this.closest('.bl-container-row').remove(); updateBLTotals();">×</button>
    `;
    container.appendChild(row);
    updateBLTotals();
}

function previewBLDraft(idx) {
    const b = db.bldrafts[idx];
    if (!b) return alert('BL not found.');
    const html = buildBLPreviewHTML(b);
    document.getElementById('modal-title').textContent = 'BL Draft Preview';
    document.getElementById('previewBody').innerHTML = html;
    openModal('previewModal');
}

function buildBLPreviewHTML(b) {
    const companyName = db.companyName || 'GATEWAY EXIM';
    const companyAddress = db.companyAddress || '';
    const now = new Date();
    const formattedDateTime = now.toLocaleString('en-IN');
    const mode = b.mode || 'SEA';
    const isAir = mode === 'AIR';

    const titleText = isAir ? 'AIR WAYBILL' : 'BILL OF LADING';
    const subtitleText = isAir ? 'NON-NEGOTIABLE AIR WAYBILL' : 'NON-NEGOTIABLE UNLESS CONSIGNED TO ORDER';

    const statusBadge = b.status === 'Finalized' 
        ? '<span style="background:#10b981; color:white; padding:2px 10px; border-radius:12px; font-size:0.7rem; font-weight:700; margin-left:8px;">✅ FINALIZED</span>' 
        : '<span style="background:#f59e0b; color:white; padding:2px 10px; border-radius:12px; font-size:0.7rem; font-weight:700; margin-left:8px;">📝 DRAFT</span>';

    const vesselLabel = isAir ? 'FLIGHT NO.' : 'VESSEL NAME';
    const voyageLabel = isAir ? 'DATE' : 'VOYAGE NO.';
    const polLabel = isAir ? 'AIRPORT OF DEPARTURE' : 'PORT OF LOADING';
    const podLabel = isAir ? 'AIRPORT OF DESTINATION' : 'PORT OF DISCHARGE';
    const receiptLabel = isAir ? 'PLACE OF RECEIPT (AIRPORT)' : 'PLACE OF RECEIPT';

    const blDateDisplay = b.blDate ? new Date(b.blDate).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) : '-';

    // ---- GOODS TABLE ----
    const goodsTable = `
        <table style="width:100%; border-collapse:collapse; font-size:0.78rem; border:1px solid #d1d5db;">
            <thead>
                <tr style="background:#1e3a8a; color:white;">
                    <th style="padding:6px 8px; text-align:left; width:15%; border:1px solid #d1d5db;">MARKS & NOS</th>
                    <th style="padding:6px 8px; text-align:left; width:12%; border:1px solid #d1d5db;">NO. OF PACKAGES</th>
                    <th style="padding:6px 8px; text-align:left; width:38%; border:1px solid #d1d5db;">DESCRIPTION OF PACKAGES AND GOODS</th>
                    <th style="padding:6px 8px; text-align:right; width:20%; border:1px solid #d1d5db;">GROSS WEIGHT (KGS)</th>
                    <th style="padding:6px 8px; text-align:right; width:15%; border:1px solid #d1d5db;">MEASUREMENT (CBM)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:6px 8px; border:1px solid #d1d5db; vertical-align:top;">${b.marks || '-'}</td>
                    <td style="padding:6px 8px; border:1px solid #d1d5db; vertical-align:top;">${b.packagesCount || '-'}</td>
                    <td style="padding:6px 8px; border:1px solid #d1d5db; white-space:pre-wrap; line-height:1.4; vertical-align:top;">${b.goodsDesc || '-'}</td>
                    <td style="padding:6px 8px; border:1px solid #d1d5db; text-align:right; font-weight:600;">${(b.grossWeight || 0).toFixed(2)}</td>
                    <td style="padding:6px 8px; border:1px solid #d1d5db; text-align:right; font-weight:600;">${(b.measurement || 0).toFixed(2)}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr style="background:#f1f5f9; font-weight:700;">
                    <td colspan="3" style="padding:6px 8px; text-align:right; border:1px solid #d1d5db;">TOTALS</td>
                    <td style="padding:6px 8px; text-align:right; border:1px solid #d1d5db;">${(b.totalGrossWeight || b.grossWeight || 0).toFixed(2)}</td>
                    <td style="padding:6px 8px; text-align:right; border:1px solid #d1d5db;">${(b.totalVolume || b.measurement || 0).toFixed(2)}</td>
                </tr>
            </tfoot>
        </table>
    `;

    // ---- CONTAINER TABLE ----
    let containerHtml = '';
    if (!isAir && b.containers && b.containers.length > 0) {
        let containersHtml = '';
        let totalGross = 0, totalNet = 0, totalVol = 0;
        b.containers.forEach((c) => {
            const gross = c.grossWeight || 0;
            const net = c.netWeight || 0;
            const vol = c.volume || 0;
            totalGross += gross;
            totalNet += net;
            totalVol += vol;
            containersHtml += `
                <tr>
                    <td style="padding:4px 6px; border:1px solid #d1d5db; text-align:left;">${c.containerNo || '-'}</td>
                    <td style="padding:4px 6px; border:1px solid #d1d5db; text-align:center;">${c.type || '-'}</td>
                    <td style="padding:4px 6px; border:1px solid #d1d5db; text-align:center;">${c.seal || '-'}</td>
                    <td style="padding:4px 6px; border:1px solid #d1d5db; text-align:right;">${gross.toFixed(2)}</td>
                    <td style="padding:4px 6px; border:1px solid #d1d5db; text-align:right;">${net.toFixed(2)}</td>
                    <td style="padding:4px 6px; border:1px solid #d1d5db; text-align:center;">${c.packages || '-'}</td>
                    <td style="padding:4px 6px; border:1px solid #d1d5db; text-align:right;">${vol.toFixed(2)}</td>
                </tr>
            `;
        });

        containerHtml = `
            <div style="margin-top:8px; border:1px solid #d1d5db; border-radius:4px; overflow:hidden;">
                <div style="background:#1e3a8a; color:white; padding:4px 10px; font-weight:700; font-size:0.8rem;">CONTAINER DETAILS</div>
                <div style="overflow-x:auto; padding:4px;">
                    <table style="width:100%; border-collapse:collapse; font-size:0.72rem;">
                        <thead>
                            <tr style="background:#f1f5f9; font-weight:700;">
                                <th style="padding:4px 6px; border:1px solid #d1d5db; text-align:left;">CONTAINER NO.</th>
                                <th style="padding:4px 6px; border:1px solid #d1d5db; text-align:center;">TYPE</th>
                                <th style="padding:4px 6px; border:1px solid #d1d5db; text-align:center;">SEAL</th>
                                <th style="padding:4px 6px; border:1px solid #d1d5db; text-align:right;">GROSS WT (KGS)</th>
                                <th style="padding:4px 6px; border:1px solid #d1d5db; text-align:right;">NET WT (KGS)</th>
                                <th style="padding:4px 6px; border:1px solid #d1d5db; text-align:center;">PKGS</th>
                                <th style="padding:4px 6px; border:1px solid #d1d5db; text-align:right;">VOLUME (CBM)</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${containersHtml}
                        </tbody>
                        <tfoot>
                            <tr style="background:#f1f5f9; font-weight:700;">
                                <td colspan="3" style="padding:4px 6px; text-align:right; border-top:2px solid #1e3a8a;">TOTALS</td>
                                <td style="padding:4px 6px; text-align:right; border-top:2px solid #1e3a8a;">${totalGross.toFixed(2)}</td>
                                <td style="padding:4px 6px; text-align:right; border-top:2px solid #1e3a8a;">${totalNet.toFixed(2)}</td>
                                <td style="padding:4px 6px; text-align:center; border-top:2px solid #1e3a8a;">${b.containers.reduce((sum, c) => sum + (parseInt(c.packages) || 0), 0)}</td>
                                <td style="padding:4px 6px; text-align:right; border-top:2px solid #1e3a8a;">${totalVol.toFixed(2)}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        `;
    }

    // ---- MAIN HTML ----
    return `
    <div id="bl-preview-container" style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 1000px; margin: 0 auto; padding: 5mm; background: #ffffff; color: #1a1a1a; border: none; box-shadow: none;">
        
        <!-- COMPANY HEADER -->
        <div style="text-align:center; border-bottom: 2px solid #1e3a8a; padding-bottom: 4px; margin-bottom: 6px;">
            <div style="font-size: 1.3rem; font-weight: 800; color: #1e3a8a; letter-spacing: 1px;">${companyName}</div>
            <div style="font-size: 0.65rem; color: #64748b;">${companyAddress}</div>
        </div>

        <!-- TITLE -->
        <div style="text-align:center; margin-bottom: 6px;">
            <div style="display:flex; align-items:center; justify-content:center; flex-wrap:wrap; gap:4px;">
                <span style="font-size: 1.1rem; font-weight: 700; color: #1e3a8a;">${titleText}</span>
                <span style="font-size: 0.65rem; color: #64748b; font-weight:500;">${subtitleText}</span>
                ${statusBadge}
            </div>
            <div style="border-bottom: 1px solid #e2e8f0; margin-top: 2px;"></div>
        </div>

        <!-- TOP ROW: BL No, Date, Booking No, Export Ref -->
        <table style="width:100%; border-collapse:collapse; font-size:0.75rem; margin-bottom:4px; border:1px solid #d1d5db;">
            <tr>
                <td style="padding:4px 8px; font-weight:700; width:12%; border:1px solid #d1d5db;">BL NO.</td>
                <td style="padding:4px 8px; font-weight:700; color:#1e3a8a; width:28%; border:1px solid #d1d5db;">${b.blNumber || 'N/A'}</td>
                <td style="padding:4px 8px; font-weight:700; width:10%; border:1px solid #d1d5db;">DATE</td>
                <td style="padding:4px 8px; font-weight:700; width:20%; border:1px solid #d1d5db;">${blDateDisplay}</td>
                <td style="padding:4px 8px; font-weight:700; width:12%; border:1px solid #d1d5db;">BOOKING NO.</td>
                <td style="padding:4px 8px; width:18%; border:1px solid #d1d5db;">${b.bookingNo || '-'}</td>
            </tr>
            ${(b.showAgent !== false) ? `
            <tr>
                <td style="padding:4px 8px; font-weight:700; border:1px solid #d1d5db;">EXPORT REF.</td>
                <td style="padding:4px 8px; border:1px solid #d1d5db;">${b.exportRef || '-'}</td>
                <td style="padding:4px 8px; font-weight:700; border:1px solid #d1d5db;">FORWARDING AGENT</td>
                <td colspan="3" style="padding:4px 8px; border:1px solid #d1d5db;">${b.forwardingAgent || '-'} ${b.fmcNo ? 'FMC NO. '+b.fmcNo : ''}</td>
            </tr>
            ` : ''}
        </table>

        <!-- PARTIES -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:4px;">
            <div style="border:1px solid #d1d5db; border-radius:3px; padding:6px 8px; background:#f8fafc;">
                <div style="font-weight:700; color:#1e3a8a; font-size:0.65rem; border-bottom:1px solid #d1d5db; padding-bottom:2px; margin-bottom:2px;">SHIPPER / EXPORTER</div>
                <div style="font-size:0.75rem; white-space:pre-wrap; line-height:1.3;"><strong>${b.shipperName || ''}</strong>${b.shipperAddr ? '<br>'+b.shipperAddr : ''}</div>
            </div>
            <div style="border:1px solid #d1d5db; border-radius:3px; padding:6px 8px; background:#f8fafc;">
                <div style="font-weight:700; color:#1e3a8a; font-size:0.65rem; border-bottom:1px solid #d1d5db; padding-bottom:2px; margin-bottom:2px;">CONSIGNEE</div>
                <div style="font-size:0.75rem; white-space:pre-wrap; line-height:1.3;"><strong>${b.consigneeName || ''}</strong>${b.consigneeAddr ? '<br>'+b.consigneeAddr : ''}</div>
            </div>
            <div style="border:1px solid #d1d5db; border-radius:3px; padding:6px 8px; background:#f8fafc;">
                <div style="font-weight:700; color:#1e3a8a; font-size:0.65rem; border-bottom:1px solid #d1d5db; padding-bottom:2px; margin-bottom:2px;">NOTIFY PARTY</div>
                <div style="font-size:0.75rem; white-space:pre-wrap; line-height:1.3;"><strong>${b.notifyName || ''}</strong>${b.notifyAddr ? '<br>'+b.notifyAddr : ''}</div>
            </div>
            <div style="border:1px solid #d1d5db; border-radius:3px; padding:6px 8px; background:#f8fafc;">
                <div style="font-weight:700; color:#1e3a8a; font-size:0.65rem; border-bottom:1px solid #d1d5db; padding-bottom:2px; margin-bottom:2px;">DELIVERY AGENT</div>
                <div style="font-size:0.75rem; white-space:pre-wrap; line-height:1.3;"><strong>${b.deliveryAgentName || ''}</strong>${b.deliveryAgentAddr ? '<br>'+b.deliveryAgentAddr : ''}</div>
            </div>
        </div>

        <!-- VESSEL & PORT TABLE -->
        <table style="width:100%; border-collapse:collapse; font-size:0.72rem; margin-bottom:4px; border:1px solid #d1d5db; border-radius:3px; overflow:hidden;">
            <thead>
                <tr style="background:#1e3a8a; color:white;">
                    <th style="padding:4px 8px; text-align:left; font-weight:600; width:25%; border:1px solid #d1d5db;">PRE-CARRIAGE BY</th>
                    <th style="padding:4px 8px; text-align:left; font-weight:600; width:25%; border:1px solid #d1d5db;">${receiptLabel}</th>
                    <th style="padding:4px 8px; text-align:left; font-weight:600; width:25%; border:1px solid #d1d5db;">${vesselLabel}</th>
                    <th style="padding:4px 8px; text-align:left; font-weight:600; width:25%; border:1px solid #d1d5db;">${voyageLabel}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding:4px 8px; border-bottom:1px solid #d1d5db; border:1px solid #d1d5db;">${b.preCarriage || '-'}</td>
                    <td style="padding:4px 8px; border-bottom:1px solid #d1d5db; border:1px solid #d1d5db;">${b.placeOfReceipt || '-'}</td>
                    <td style="padding:4px 8px; border-bottom:1px solid #d1d5db; border:1px solid #d1d5db;">${b.vessel || '-'}</td>
                    <td style="padding:4px 8px; border-bottom:1px solid #d1d5db; border:1px solid #d1d5db;">${b.voyage || '-'}</td>
                </tr>
                <tr style="background:#1e3a8a; color:white;">
                    <td style="padding:4px 8px; font-weight:600; border:1px solid #d1d5db;">${polLabel}</td>
                    <td style="padding:4px 8px; font-weight:600; border:1px solid #d1d5db;">${podLabel}</td>
                    <td style="padding:4px 8px; font-weight:600; border:1px solid #d1d5db;">PLACE OF DELIVERY</td>
                    <td style="padding:4px 8px; font-weight:600; border:1px solid #d1d5db;">FREIGHT PAYABLE</td>
                </tr>
                <tr>
                    <td style="padding:4px 8px; border:1px solid #d1d5db;">${b.pol || '-'}</td>
                    <td style="padding:4px 8px; border:1px solid #d1d5db;">${b.pod || '-'}</td>
                    <td style="padding:4px 8px; border:1px solid #d1d5db;">${b.placeOfDelivery || '-'}</td>
                    <td style="padding:4px 8px; border:1px solid #d1d5db;">${b.freightPayable || 'ORIGIN'}</td>
                </tr>
            </tbody>
        </table>

        <!-- GOODS TABLE -->
        <div style="margin-top:2px; border:1px solid #d1d5db; border-radius:4px; overflow:hidden;">
            <div style="padding:4px 2px; overflow-x:auto;">
                ${goodsTable}
            </div>
        </div>

        <!-- CONTAINER DETAILS -->
        ${!isAir ? containerHtml : ''}

        <!-- FREIGHT & ISSUANCE -->
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:4px;">
            <div style="border:1px solid #d1d5db; border-radius:3px; padding:6px 8px;">
                <div style="font-weight:700; color:#1e3a8a; font-size:0.65rem; border-bottom:1px solid #d1d5db; padding-bottom:2px; margin-bottom:2px;">FREIGHT & CHARGES</div>
                <table style="width:100%; font-size:0.7rem;">
                    <tr><td style="padding:2px 4px; font-weight:700;">Terms</td><td style="padding:2px 4px;">${b.freightType || 'Prepaid'}</td></tr>
                    <tr><td style="padding:2px 4px; font-weight:700;">Amount</td><td style="padding:2px 4px;">${b.freightCurrency || 'USD'} ${(b.freightAmount || 0).toFixed(2)}</td></tr>
                </table>
            </div>
            <div style="border:1px solid #d1d5db; border-radius:3px; padding:6px 8px;">
                <div style="font-weight:700; color:#1e3a8a; font-size:0.65rem; border-bottom:1px solid #d1d5db; padding-bottom:2px; margin-bottom:2px;">ISSUANCE DETAILS</div>
                <table style="width:100%; font-size:0.7rem;">
                    <tr><td style="padding:2px 4px; font-weight:700;">Originals</td><td style="padding:2px 4px;">${b.numOriginals || 1}</td></tr>
                    <tr><td style="padding:2px 4px; font-weight:700;">Place</td><td style="padding:2px 4px;">${b.placeOfIssue || '-'}</td></tr>
                    <tr><td style="padding:2px 4px; font-weight:700;">Date</td><td style="padding:2px 4px;">${b.issueDate ? new Date(b.issueDate).toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }) : '-'}</td></tr>
                    <tr><td style="padding:2px 4px; font-weight:700;">Signature</td><td style="padding:2px 4px;">${b.signature || '-'}</td></tr>
                </table>
            </div>
        </div>

        <!-- FOOTER -->
        <div style="border-top: 2px solid #1e3a8a; padding-top: 4px; margin-top: 6px; font-size: 0.6rem; color: #64748b; text-align: center;">
            <div style="font-weight:700; color: #1e3a8a;">
                ${companyName} — AS AGENT FOR THE CARRIER
            </div>
            <div style="margin-top: 2px; font-size: 0.55rem;">
                Generated on ${formattedDateTime}
            </div>
        </div>
    </div>
    `;
}


function downloadBLPDF(idx) {
    const b = db.bldrafts[idx];
    if (!b) return alert('BL not found.');
    const html = buildBLPreviewHTML(b);
    const renderArea = document.getElementById('pdf-render-area');
    renderArea.innerHTML = html;
    renderArea.style.cssText = 'position:fixed;left:0;top:0;width:1000px;background:white;z-index:9999;opacity:1;padding:0;';

    setTimeout(() => {
        html2canvas(renderArea, { 
            scale: 3, 
            useCORS: true, 
            backgroundColor: '#ffffff',
            logging: false,
            width: 1000
        })
        .then(canvas => {
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();

            const imgData = canvas.toDataURL('image/jpeg', 1.0);
            let imgWidth = pdfWidth;
            let imgHeight = (canvas.height * imgWidth) / canvas.width;
            
            if (imgHeight > pdfHeight) {
                let remainingHeight = canvas.height;
                let yOffset = 0;
                let page = 1;
                const pageCanvas = document.createElement('canvas');
                const pageCtx = pageCanvas.getContext('2d');
                const pageSegmentHeight = (pdfHeight / imgHeight) * canvas.height;
                
                while (remainingHeight > 0) {
                    const segHeight = Math.min(remainingHeight, pageSegmentHeight);
                    pageCanvas.width = canvas.width;
                    pageCanvas.height = segHeight;
                    pageCtx.drawImage(canvas, 0, yOffset, canvas.width, segHeight, 0, 0, canvas.width, segHeight);
                    
                    const pageImgData = pageCanvas.toDataURL('image/jpeg', 1.0);
                    const pageImgWidth = pdfWidth;
                    const pageImgHeight = (segHeight * pageImgWidth) / canvas.width;
                    
                    if (page > 1) pdf.addPage();
                    pdf.addImage(pageImgData, 'JPEG', 0, 0, pageImgWidth, pageImgHeight);
                    
                    yOffset += segHeight;
                    remainingHeight -= segHeight;
                    page++;
                }
            } else {
                pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
            }
            pdf.save(`BL_${b.blNumber || 'Draft'}.pdf`);
            renderArea.style.cssText = 'position:fixed;left:-10000px;top:0;width:1000px;background:white;z-index:-1;';
            renderArea.innerHTML = '';
        }).catch(err => { 
            console.error(err); 
            alert('PDF generation failed. Please try again.');
            renderArea.style.cssText = 'position:fixed;left:-10000px;top:0;width:1000px;background:white;z-index:-1;';
            renderArea.innerHTML = '';
        });
    }, 500);
}

// ==================== DSR CUSTOM COLUMNS ====================
let dsrColumns = db.dsrColumns || ['code','shipper','pol','pod','liner','cargoStatus','docsStatus','actions'];

function toggleDSRColumns() {
    const settings = document.getElementById('dsr-column-settings');
    if (settings) {
        settings.style.display = settings.style.display === 'none' ? 'flex' : 'none';
        document.querySelectorAll('.dsr-col-toggle').forEach(cb => {
            cb.checked = dsrColumns.includes(cb.dataset.col);
        });
    }
}

function saveDSRColumns() {
    const checkboxes = document.querySelectorAll('.dsr-col-toggle');
    dsrColumns = [];
    checkboxes.forEach(cb => { if (cb.checked) dsrColumns.push(cb.dataset.col); });
    db.dsrColumns = dsrColumns;
    saveDB();
    renderShipments();
    document.getElementById('dsr-column-settings').style.display = 'none';
    alert('Columns updated!');
}
// ==================== EXPORT DSR & BL ====================
function exportDSRToExcel() {
    if (!db.shipments || db.shipments.length === 0) return alert('No shipments to export.');
    const wb = XLSX.utils.book_new();
    const data = db.shipments.map(s => ({
        'Code': s.code,
        'Mode': s.mode || s.type,
        'Shipper': s.shipper,
        'POL': s.pol,
        'POD': s.pod,
        'Liner': s.liner,
        'ETD': s.etd,
        'ETA': s.eta,
        'Cargo Status': s.cargoStatus,
        'Docs Status': s.docsStatus,
        'Sell (USD)': s.sell || 0,
        'Buy (USD)': s.buy || 0,
        'Margin (USD)': (s.sell || 0) - (s.buy || 0),
        'Created': s.createdAt ? new Date(s.createdAt).toLocaleString('en-IN') : ''
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'DSR');
    XLSX.writeFile(wb, `DSR_Export_${new Date().toISOString().split('T')[0]}.xlsx`);
}

function exportBLDraftsToExcel() {
    if (!db.bldrafts || db.bldrafts.length === 0) return alert('No BL drafts to export.');
    const wb = XLSX.utils.book_new();
    const data = db.bldrafts.map(b => ({
        'BL Number': b.blNumber,
        'Status': b.status,
        'Shipper': b.shipper,
        'Consignee': b.consignee,
        'Vessel': b.vessel,
        'POL': b.pol,
        'POD': b.pod,
        'Containers': (b.containers || []).map(c => c.containerNo).join(', '),
        'Goods Desc.': b.goodsDesc,
        'Freight Amount': b.freightAmount,
        'Freight Currency': b.freightCurrency,
        'Created': b.createdAt ? new Date(b.createdAt).toLocaleString('en-IN') : ''
    }));
    const ws = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'BL Drafts');
    XLSX.writeFile(wb, `BL_Drafts_Export_${new Date().toISOString().split('T')[0]}.xlsx`);
}

// ===== BL MODE CHOOSER =====
let blModeChooserOpen = false;

function toggleBLModeChooser() {
    const dd = document.getElementById('blModeChooser');
    blModeChooserOpen = !blModeChooserOpen;
    dd.classList.toggle('show', blModeChooserOpen);
}

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    const wrapper = document.querySelector('#bldraft .add-shipment-wrapper');
    if (wrapper && !wrapper.contains(e.target)) {
        const dd = document.getElementById('blModeChooser');
        if (dd) {
            dd.classList.remove('show');
            blModeChooserOpen = false;
        }
    }
});

function duplicateBLDraft(idx) {
    if (!db.bldrafts || idx < 0 || idx >= db.bldrafts.length) {
        alert('BL Draft not found.');
        return;
    }
    const original = db.bldrafts[idx];
    if (!original) return alert('Original draft not found.');

    // Ask for confirmation
    if (!confirm(`Duplicate BL Draft "${original.blNumber}"?`)) return;

    // Create a deep copy
    const copy = JSON.parse(JSON.stringify(original));

    // Generate a new BL number (add "-COPY" or generate a new unique number)
    const baseNumber = original.blNumber || 'HBL';
    // Remove any existing "-COPY" or suffix to avoid duplication
    const cleanBase = baseNumber.replace(/-COPY\d*$/, '').replace(/-COPY$/, '');
    let newBlNumber = cleanBase + '-COPY';
    // If a copy with that number already exists, add a counter
    let counter = 1;
    while (db.bldrafts.some(b => b.blNumber === newBlNumber)) {
        newBlNumber = cleanBase + '-COPY' + (counter++);
    }
    copy.blNumber = newBlNumber;

    // Reset timestamps and status
    const now = new Date().toISOString();
    copy.createdAt = now;
    copy.lastModified = now;
    copy.status = 'Draft'; // Always start as Draft, regardless of original status
    // Remove any finalized flag if exists
    delete copy._id; // just in case

    // Ensure containers array exists (if not, set to empty)
    if (!copy.containers) copy.containers = [];

    // Push to database
    db.bldrafts.push(copy);
    saveDB();
    renderBLDrafts();
    alert(`BL Draft duplicated successfully!\nNew BL Number: ${newBlNumber}`);
    autoBackup();
}
function plannerJumpToDate() {
    const dateInput = document.getElementById('planner-date-picker');
    if (!dateInput.value) return alert('Please select a date.');
    const dateKey = dateInput.value;
    plannerSelectedDate = new Date(dateKey + 'T00:00:00');
    plannerCurrentDate = new Date(plannerSelectedDate);
    renderPlannerCalendar();
    loadPlannerDay(dateKey);
}

function saveRenewedRate() {
    // Get values from the form
    const carrier = document.getElementById('renew-carrier').value.trim();
    const freightType = document.getElementById('renew-freight-type').value;
    const pol = document.getElementById('renew-pol').value.trim();
    const pod = document.getElementById('renew-pod').value.trim();
    const containerType = document.getElementById('renew-container').value.trim();
    const currency = document.getElementById('renew-currency').value;
    const freightAmount = parseFloat(document.getElementById('renew-amount').value) || 0;
    const transitTime = document.getElementById('renew-transit').value.trim();
    const commodity = document.getElementById('renew-commodity').value;
    const validFrom = document.getElementById('renew-valid-from').value;
    const validTo = document.getElementById('renew-valid-to').value;
    const remarks = document.getElementById('renew-remarks').value.trim();

    // Validation
    if (!carrier) return alert('Carrier is required.');
    if (!pol) return alert('POL is required.');
    if (!pod) return alert('POD is required.');
    if (!freightAmount || freightAmount <= 0) return alert('Please enter a valid freight amount.');
    if (!validFrom) return alert('Valid From date is required.');
    if (!validTo) return alert('Valid To date is required.');

    // Create new rate
    const newRate = {
        id: 'RS-' + Date.now().toString(36).toUpperCase(),
        carrierName: carrier,
        freightType: freightType,
        pol: pol,
        pod: pod,
        containerType: containerType,
        currency: currency,
        freightAmount: freightAmount,
        transitTime: transitTime,
        commodity: commodity,
        validFrom: validFrom,
        validTo: validTo,
        remarks: remarks || 'Renewed from previous rate',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    };

    // Check for duplicates (optional)
    const duplicate = db.rateSheet.some(r => 
        r.carrierName === carrier &&
        r.pol === pol &&
        r.pod === pod &&
        r.containerType === containerType &&
        r.freightAmount === freightAmount &&
        r.validFrom === validFrom &&
        r.validTo === validTo
    );
    if (duplicate) {
        if (!confirm('A rate with these exact details already exists. Duplicate anyway?')) return;
    }

    db.rateSheet.push(newRate);
    saveDB();

    closeModal('renewalModal');

    // Refresh the planner display
    updateExpiringToday();
    loadPlannerDay(formatDateKey(plannerSelectedDate));

    alert(`✅ Rate renewed successfully!\nNew rate: ${carrier} - ${pol} → ${pod}\nAmount: ${currency} ${freightAmount.toFixed(2)}`);
    autoBackup();
}
function refreshPlanner() {
    const dateKey = formatDateKey(plannerSelectedDate);
    loadPlannerDay(dateKey);
    renderPlannerCalendar();
}
function getRatesExpiringOnDate(dateKey) {
    // dateKey format: YYYY-MM-DD
    if (!dateKey) return [];

    return (db.rateSheet || []).filter(r => {
        if (!r.validTo) return false;
        // Normalize both to YYYY-MM-DD
        const rateDate = new Date(r.validTo);
        const rYear = rateDate.getFullYear();
        const rMonth = String(rateDate.getMonth() + 1).padStart(2, '0');
        const rDay = String(rateDate.getDate()).padStart(2, '0');
        const rateStr = `${rYear}-${rMonth}-${rDay}`;
        return rateStr === dateKey;
    });
}

// ============================================================
// BULK EXPORT / IMPORT – LOCAL CHARGES
// ============================================================

function bulkExportLocalCharges() {
    if (typeof XLSX === 'undefined') {
        alert('XLSX library not loaded. Please refresh and try again.');
        return;
    }

    const wb = XLSX.utils.book_new();

    // Helper: flatten charges into rows
    function flattenCharges(base, chargesObj) {
        const rows = [];
        for (const [chargeName, chargeData] of Object.entries(chargesObj || {})) {
            rows.push({
                ...base,
                'Charge Name': chargeName,
                'Sell Amount': chargeData.amount || '',
                'Sell Currency': chargeData.currency || 'INR',
                'Buy Amount': chargeData.buyAmount || '',
                'Buy Currency': chargeData.buyCurrency || 'INR',
                'Basis': chargeData.basis || 'Normal'
            });
        }
        return rows;
    }

    // 1. Sea Default Charges
    let seaDefaultRows = [];
    db.defaultSeaCharges.forEach(r => {
        const base = {
            Carrier: r.carrier || 'ALL',
            POL: r.pol,
            Container: r.container || '',
            Commodity: r.commodity || ''
        };
        seaDefaultRows = seaDefaultRows.concat(flattenCharges(base, r.charges));
    });
    if (seaDefaultRows.length) {
        const ws = XLSX.utils.json_to_sheet(seaDefaultRows);
        XLSX.utils.book_append_sheet(wb, ws, 'Sea Default');
    }

    // 2. Air Default Charges
    let airDefaultRows = [];
    db.defaultAirCharges.forEach(r => {
        const base = {
            POL: r.pol,
            Commodity: r.commodity || ''
        };
        airDefaultRows = airDefaultRows.concat(flattenCharges(base, r.charges));
    });
    if (airDefaultRows.length) {
        const ws = XLSX.utils.json_to_sheet(airDefaultRows);
        XLSX.utils.book_append_sheet(wb, ws, 'Air Default');
    }

    // 3. LCL Default Charges
    let lclDefaultRows = [];
    db.defaultLclCharges.forEach(r => {
        const base = {
            POL: r.pol,
            Commodity: r.commodity || ''
        };
        lclDefaultRows = lclDefaultRows.concat(flattenCharges(base, r.charges));
    });
    if (lclDefaultRows.length) {
        const ws = XLSX.utils.json_to_sheet(lclDefaultRows);
        XLSX.utils.book_append_sheet(wb, ws, 'Lcl Default');
    }

    // 4. Carrier Sea/Lcl
    let carrierSLRows = [];
    db.carrierChargesSeaLcl.forEach(r => {
        const base = {
            Mode: r.mode || 'sea',
            Carrier: r.carrier,
            POL: r.pol,
            Container: r.container || '',
            Commodity: r.commodity || ''
        };
        carrierSLRows = carrierSLRows.concat(flattenCharges(base, r.charges));
    });
    if (carrierSLRows.length) {
        const ws = XLSX.utils.json_to_sheet(carrierSLRows);
        XLSX.utils.book_append_sheet(wb, ws, 'Carrier Sea/Lcl');
    }

    // 5. Carrier Air
    let carrierAirRows = [];
    db.carrierChargesAir.forEach(r => {
        const base = {
            Carrier: r.carrier,
            POL: r.pol,
            Commodity: r.commodity || ''
        };
        carrierAirRows = carrierAirRows.concat(flattenCharges(base, r.charges));
    });
    if (carrierAirRows.length) {
        const ws = XLSX.utils.json_to_sheet(carrierAirRows);
        XLSX.utils.book_append_sheet(wb, ws, 'Carrier Air');
    }

    XLSX.writeFile(wb, `LocalCharges_Backup_${new Date().toISOString().split('T')[0]}.xlsx`);
    alert('✅ Export completed! Each charge is now a separate row.');
}

function bulkImportLocalCharges(input) {
    if (!input.files || !input.files[0]) return;
    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            let updated = 0;

            // Helper: read sheet and group rows by base fields, building charges object
            function processSheet(sheetName, baseFields, mode) {
                const sheet = workbook.Sheets[sheetName];
                if (!sheet) return [];
                const rows = XLSX.utils.sheet_to_json(sheet);
                if (!rows.length) return [];

                // Group by a composite key of base fields
                const groups = {};
                rows.forEach(row => {
                    // Build key from base fields
                    const key = baseFields.map(f => row[f] || '').join('||');
                    if (!groups[key]) {
                        groups[key] = {};
                        baseFields.forEach(f => groups[key][f] = row[f] || '');
                        groups[key].charges = {};
                    }
                    const chargeName = row['Charge Name'];
                    if (chargeName) {
                        groups[key].charges[chargeName] = {
                            amount: parseFloat(row['Sell Amount']) || 0,
                            currency: row['Sell Currency'] || 'INR',
                            buyAmount: parseFloat(row['Buy Amount']) || 0,
                            buyCurrency: row['Buy Currency'] || 'INR',
                            basis: row['Basis'] || 'Normal'
                        };
                    }
                });
                return Object.values(groups);
            }

            // 1. Sea Default
            const seaDefaults = processSheet('Sea Default', ['Carrier', 'POL', 'Container', 'Commodity']);
            if (seaDefaults.length) {
                db.defaultSeaCharges = seaDefaults.map(g => ({
                    carrier: g.Carrier || 'ALL',
                    pol: g.POL || '',
                    container: g.Container || '',
                    commodity: g.Commodity || '',
                    charges: g.charges || {}
                }));
                updated += seaDefaults.length;
            }

            // 2. Air Default
            const airDefaults = processSheet('Air Default', ['POL', 'Commodity']);
            if (airDefaults.length) {
                db.defaultAirCharges = airDefaults.map(g => ({
                    pol: g.POL || '',
                    commodity: g.Commodity || '',
                    charges: g.charges || {}
                }));
                updated += airDefaults.length;
            }

            // 3. LCL Default
            const lclDefaults = processSheet('Lcl Default', ['POL', 'Commodity']);
            if (lclDefaults.length) {
                db.defaultLclCharges = lclDefaults.map(g => ({
                    pol: g.POL || '',
                    commodity: g.Commodity || '',
                    charges: g.charges || {}
                }));
                updated += lclDefaults.length;
            }

            // 4. Carrier Sea/Lcl
            const carrierSL = processSheet('Carrier Sea/Lcl', ['Mode', 'Carrier', 'POL', 'Container', 'Commodity']);
            if (carrierSL.length) {
                db.carrierChargesSeaLcl = carrierSL.map(g => ({
                    mode: g.Mode || 'sea',
                    carrier: g.Carrier || '',
                    pol: g.POL || '',
                    container: g.Container || '',
                    commodity: g.Commodity || '',
                    charges: g.charges || {},
                    updated: new Date().toISOString()
                }));
                updated += carrierSL.length;
            }

            // 5. Carrier Air
            const carrierAir = processSheet('Carrier Air', ['Carrier', 'POL', 'Commodity']);
            if (carrierAir.length) {
                db.carrierChargesAir = carrierAir.map(g => ({
                    carrier: g.Carrier || '',
                    pol: g.POL || '',
                    commodity: g.Commodity || '',
                    charges: g.charges || {},
                    updated: new Date().toISOString()
                }));
                updated += carrierAir.length;
            }

            saveDB();
            alert(`✅ Import successful! ${updated} charge groups updated.`);
            
            // Refresh the local tabs if visible
            ['sealocal', 'airlocal', 'lcllocal'].forEach(tab => {
                const panel = document.getElementById(tab);
                if (panel && panel.classList.contains('active')) {
                    const mode = tab === 'sealocal' ? 'sea' : tab === 'airlocal' ? 'air' : 'lcl';
                    renderDefaultChargesMaster(mode);
                    renderCarrierChargesMaster(mode === 'sea' ? 'sealcl' : mode);
                }
            });
            autoBackup();
        } catch (err) {
            alert('❌ Import failed: ' + err.message);
            console.error(err);
        }
    };
    reader.readAsArrayBuffer(file);
    input.value = '';
}
// ============================================================
// BULK EXPORT / IMPORT – LOCAL CHARGES (SEA, AIR, LCL)
// ============================================================

// ---------- 1. Export Default Charges ----------
function bulkExportDefaultCharges() {
    if (typeof XLSX === 'undefined') {
        alert('XLSX library not loaded. Please refresh and try again.');
        return;
    }

    // Determine active mode
    let mode = 'sea';
    if (document.getElementById('airlocal')?.classList.contains('active')) mode = 'air';
    else if (document.getElementById('lcllocal')?.classList.contains('active')) mode = 'lcl';

    console.log('🔹 Exporting default charges for mode:', mode);

    let records = [];
    if (mode === 'sea') records = db.defaultSeaCharges || [];
    else if (mode === 'air') records = db.defaultAirCharges || [];
    else if (mode === 'lcl') records = db.defaultLclCharges || [];

    if (records.length === 0) {
        alert(`No default charges found for ${mode.toUpperCase()}.`);
        return;
    }

    // ---- For SEA: all charges are container-specific (if they have _20/_40 suffix) ----
    // For AIR/LCL: no container suffix
    const isSea = (mode === 'sea');

    // Collect all base charge names (without suffix)
    const chargeSet = new Set();
    records.forEach(rec => {
        Object.keys(rec.charges || {}).forEach(key => {
            let base = key;
            if (key.endsWith('_20') || key.endsWith('_40')) {
                base = key.slice(0, -3);
            }
            chargeSet.add(base);
        });
    });
    const chargeColumns = Array.from(chargeSet).sort();

    // Build rows
    const rows = [];
    records.forEach(rec => {
        const baseRow = {
            MODE: mode.toUpperCase(),
            POL: rec.pol || '',
            COMMODITY: rec.commodity || ''
        };

        // Check which suffixes exist for this record
        const has20 = Object.keys(rec.charges).some(k => k.endsWith('_20'));
        const has40 = Object.keys(rec.charges).some(k => k.endsWith('_40'));

        if (!isSea || (!has20 && !has40)) {
            // AIR, LCL, or SEA with no container-specific charges: single row with CONTAINER = "ALL"
            const row = { ...baseRow, CONTAINER: 'ALL' };
            chargeColumns.forEach(col => {
                const val = rec.charges?.[col];
                row[col] = val?.amount || '';
            });
            rows.push(row);
            return;
        }

        // ---- SEA: create separate rows for each container ----
        // Row for 20 GP
        if (has20) {
            const row = { ...baseRow, CONTAINER: '20 GP' };
            chargeColumns.forEach(col => {
                const key = col + '_20'; // All charges get _20 suffix for 20 GP
                const val = rec.charges?.[key];
                row[col] = val?.amount || '';
            });
            rows.push(row);
        }

        // Row for 40 HC
        if (has40) {
            const row = { ...baseRow, CONTAINER: '40 HC' };
            chargeColumns.forEach(col => {
                const key = col + '_40'; // All charges get _40 suffix for 40 HC
                const val = rec.charges?.[key];
                row[col] = val?.amount || '';
            });
            rows.push(row);
        }
    });

    if (rows.length === 0) {
        alert('No data to export.');
        return;
    }

    console.log(`📤 Exporting ${rows.length} rows. Sample:`, rows[0]);

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Default Charges Horizontal');
    XLSX.writeFile(wb, `DefaultCharges_${mode.toUpperCase()}_${new Date().toISOString().split('T')[0]}.xlsx`);
    alert(`✅ Exported ${rows.length} default charge rows.\nCheck console for details.`);
}


// ---------- 3. Import Carrier-Specific Charges ----------
function bulkImportDefaultCharges(input) {
    if (!input.files || !input.files[0]) {
        alert('Please select an Excel file.');
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Try to find the sheet
            let sheetName = 'Default Charges Horizontal';
            let sheet = workbook.Sheets[sheetName];
            if (!sheet) {
                sheetName = workbook.SheetNames[0];
                sheet = workbook.Sheets[sheetName];
                console.warn(`Sheet "${'Default Charges Horizontal'}" not found, using "${sheetName}" instead.`);
            }
            if (!sheet) {
                alert('❌ No sheets found in the Excel file.');
                return;
            }

            const rows = XLSX.utils.sheet_to_json(sheet);
            if (!rows || rows.length === 0) {
                alert('❌ No data rows found.');
                return;
            }

            console.log('📊 Importing', rows.length, 'rows from sheet:', sheetName);

            function normalize(str) {
                if (!str) return '';
                return str.toString().trim().replace(/\s*,\s*/g, ', ').replace(/\s+/g, ' ').toUpperCase();
            }

            // Detect mode from first row
            const mode = normalize(rows[0].MODE || '');
            if (!['SEA','AIR','LCL'].includes(mode)) {
                alert(`❌ Invalid MODE "${mode}". Must be SEA, AIR, or LCL.`);
                return;
            }
            const modeKey = mode.toLowerCase();
            const isSea = (modeKey === 'sea');

            let targetArr;
            if (isSea) targetArr = db.defaultSeaCharges;
            else if (modeKey === 'air') targetArr = db.defaultAirCharges;
            else targetArr = db.defaultLclCharges;

            // All columns except MODE, POL, COMMODITY, CONTAINER
            const header = Object.keys(rows[0]);
            const chargeColumns = header.filter(h => !['MODE','POL','COMMODITY','CONTAINER'].includes(h));

            if (chargeColumns.length === 0) {
                alert('❌ No charge columns found. Ensure the file has charge names as column headers.');
                return;
            }

            console.log('📋 Charge columns found:', chargeColumns);

            // Group rows by (POL, COMMODITY)
            const groups = {};
            rows.forEach((row, idx) => {
                const pol = normalize(row.POL || '');
                const commodity = normalize(row.COMMODITY || '');
                if (!pol) {
                    console.warn(`⚠️ Row ${idx+1} skipped: POL is empty.`);
                    return;
                }
                const key = `${pol}||${commodity}`;
                if (!groups[key]) {
                    groups[key] = { pol, commodity, containerRows: [] };
                }
                // Store container and charges
                const container = normalize(row.CONTAINER || '');
                const charges = {};
                chargeColumns.forEach(col => {
                    const raw = row[col];
                    if (raw === undefined || raw === null || raw === '') return;
                    let strVal = String(raw).trim();
                    let currency = 'INR';
                    let numericStr = strVal;
                    if (strVal.includes('$')) {
                        currency = 'USD';
                        numericStr = strVal.replace(/[^0-9.]/g, '');
                    } else {
                        numericStr = strVal.replace(/,/g, '').replace(/[^0-9.]/g, '');
                    }
                    const val = parseFloat(numericStr);
                    if (isNaN(val) || val <= 0) return;
                    charges[col] = { amount: val, currency, buyAmount: val, buyCurrency: currency };
                });
                groups[key].containerRows.push({ container, charges });
            });

            console.log('📦 Groups found:', Object.keys(groups).length);

            let imported = 0, updated = 0;

            // Process each group
            Object.values(groups).forEach(group => {
                const { pol, commodity, containerRows } = group;
                if (containerRows.length === 0) return;

                // Merge all container rows into one charges object
                const mergedCharges = {};
                containerRows.forEach(cr => {
                    const container = cr.container;
                    Object.entries(cr.charges).forEach(([chargeName, chargeVal]) => {
                        let key = chargeName;
                        // For SEA, add suffix based on container
                        if (isSea && container) {
                            if (container === '20 GP') key = chargeName + '_20';
                            else if (container === '40 HC') key = chargeName + '_40';
                            // If container is "ALL", keep as base name (no suffix)
                        }
                        // If the charge already exists, keep the larger amount
                        if (!mergedCharges[key]) {
                            mergedCharges[key] = chargeVal;
                        } else {
                            if (chargeVal.amount > mergedCharges[key].amount) {
                                mergedCharges[key].amount = chargeVal.amount;
                                mergedCharges[key].buyAmount = chargeVal.buyAmount;
                            }
                            mergedCharges[key].currency = chargeVal.currency || mergedCharges[key].currency;
                            mergedCharges[key].buyCurrency = chargeVal.buyCurrency || mergedCharges[key].buyCurrency;
                        }
                    });
                });

                if (Object.keys(mergedCharges).length === 0) return;

                console.log(`📌 Merged charges for ${pol} | ${commodity}:`, Object.keys(mergedCharges));

                // Find existing record
                const existingIdx = targetArr.findIndex(r =>
                    normalize(r.pol) === pol &&
                    normalize(r.commodity || '') === commodity
                );

                if (existingIdx !== -1) {
                    // Merge
                    const existing = targetArr[existingIdx];
                    Object.entries(mergedCharges).forEach(([key, val]) => {
                        if (!existing.charges[key]) {
                            existing.charges[key] = val;
                        } else {
                            if (val.amount > existing.charges[key].amount) {
                                existing.charges[key].amount = val.amount;
                                existing.charges[key].buyAmount = val.buyAmount;
                            }
                            existing.charges[key].currency = val.currency || existing.charges[key].currency;
                            existing.charges[key].buyCurrency = val.buyCurrency || existing.charges[key].buyCurrency;
                        }
                    });
                    existing.updatedAt = new Date().toISOString();
                    updated++;
                } else {
                    // Create new
                    const newRec = {
                        pol,
                        commodity,
                        charges: mergedCharges,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    };
                    targetArr.push(newRec);
                    imported++;
                }
            });

            saveDB();
            renderDefaultChargesMaster(modeKey);
            alert(`✅ Import completed.\nNew: ${imported}, Updated: ${updated}\nTotal: ${imported + updated}\nCheck console for details.`);
            autoBackup();
        } catch (err) {
            alert('❌ Import failed: ' + err.message);
            console.error('Import error:', err);
        }
    };
    reader.readAsArrayBuffer(file);
    input.value = '';
}

function updateSelectedCount() {
    const count = document.querySelectorAll('.dc-checkbox:checked, .cc-checkbox:checked').length;
    const el = document.getElementById('selected-count');
    if (el) el.textContent = count + ' selected';
}

function bulkDeleteSelectedLocal() {
    const selected = document.querySelectorAll('.dc-checkbox:checked, .cc-checkbox:checked');
    if (selected.length === 0) {
        alert('No entries selected.');
        return;
    }
    if (!confirm(`Delete ${selected.length} selected entries? This cannot be undone.`)) return;

    // Group by array type: 'default' or 'sealcl' or 'air'
    const groups = {};
    selected.forEach(cb => {
        const type = cb.dataset.type;   // 'default' or 'sealcl' or 'air'
        const mode = cb.dataset.mode;   // for default only: 'sea', 'air', 'lcl'
        const idx = parseInt(cb.dataset.idx);
        const key = (type === 'default') ? `default-${mode}` : type; // 'sealcl' or 'air'
        if (!groups[key]) groups[key] = [];
        groups[key].push(idx);
    });

    for (const [key, indices] of Object.entries(groups)) {
        const sorted = indices.sort((a, b) => b - a);
        if (key.startsWith('default-')) {
            const mode = key.replace('default-', '');
            let arr;
            if (mode === 'sea') arr = db.defaultSeaCharges;
            else if (mode === 'air') arr = db.defaultAirCharges;
            else if (mode === 'lcl') arr = db.defaultLclCharges;
            if (arr) {
                sorted.forEach(i => { if (i < arr.length) arr.splice(i, 1); });
            }
        } else if (key === 'sealcl') {
            const arr = db.carrierChargesSeaLcl;
            sorted.forEach(i => { if (i < arr.length) arr.splice(i, 1); });
        } else if (key === 'air') {
            const arr = db.carrierChargesAir;
            sorted.forEach(i => { if (i < arr.length) arr.splice(i, 1); });
        } else {
            // fallback: treat as carrier? we can ignore.
        }
    }

    saveDB();
    // Refresh all tables
    ['sea','air','lcl'].forEach(m => renderDefaultChargesMaster(m));
    renderCarrierChargesMaster('sealcl');
    renderCarrierChargesMaster('air');
    renderCarrierChargesMaster('lcl');
    updateSelectedCount();
    alert('Selected entries deleted.');
    autoBackup();
}

function populateSelect(id, options, selectedValue) {
    const sel = document.getElementById(id);
    if (!sel) return;
    options = options || [];
    // Sort alphabetically
    const sorted = options.sort((a, b) => a.localeCompare(b));
    sel.innerHTML = '<option value="">Select</option>' + sorted.map(o => `<option value="${o}">${o}</option>`).join('');
    if (selectedValue && options.includes(selectedValue)) {
        sel.value = selectedValue;
    }
}



// Load saved path on page load
async function loadBackupPath() {
    const path = db.backupFolderPath || '';
    const inputEl = document.getElementById('backup-folder-path-input');
    const displayEl = document.getElementById('backup-folder-path');

    if (inputEl) inputEl.value = path;

    // Try to restore the folder handle from IndexedDB
    try {
        const handle = await getFolderHandle();
        if (handle) {
            backupFolderHandle = handle;
            if (displayEl) {
                displayEl.textContent = `📁 ${handle.name || path || 'Selected folder'} (auto-write enabled)`;
            }
            if (handle && !autoBackupInterval) startAutoBackup();
        } else {
            if (displayEl) {
                displayEl.textContent = path ? `📁 ${path} (path saved)` : 'No folder selected';
            }
        }
    } catch (e) {
        console.warn('Could not restore folder handle:', e);
        if (displayEl) {
            displayEl.textContent = path ? `📁 ${path} (path saved)` : 'No folder selected';
        }
    }
}




function migrateDefaultSeaCharges() {
    // Only run once – check if migration already done
    if (localStorage.getItem('sea_default_migrated')) return;
    
    const oldCharges = db.defaultSeaCharges || [];
    if (oldCharges.length === 0) return;

    // Group by (pol, commodity)
    const groups = {};
    oldCharges.forEach(rec => {
        const key = `${rec.pol}||${rec.commodity || ''}`;
        if (!groups[key]) {
            groups[key] = {
                pol: rec.pol,
                commodity: rec.commodity || '',
                charges: {},
                cfs20: 0,
                cfs40: 0,
                cfs20Buy: 0,
                cfs40Buy: 0,
                currency: 'INR'
            };
        }
        // Collect other charges (excluding CFS)
        Object.entries(rec.charges || {}).forEach(([chargeName, val]) => {
            if (chargeName.toUpperCase() === 'CFS') {
                // Store CFS based on container
                if (rec.container === '20 GP') {
                    groups[key].cfs20 = val.amount || 0;
                    groups[key].cfs20Buy = val.buyAmount || 0;
                    groups[key].currency = val.currency || 'INR';
                } else if (rec.container === '40 HC' || rec.container === '40 GP') {
                    groups[key].cfs40 = val.amount || 0;
                    groups[key].cfs40Buy = val.buyAmount || 0;
                    groups[key].currency = val.currency || 'INR';
                }
                // If no container, treat as both? We'll assign to both if only one record
            } else {
                // Add other charges (if not already present)
                if (!groups[key].charges[chargeName]) {
                    groups[key].charges[chargeName] = val;
                }
            }
        });
    });

    // Build new defaultSeaCharges array
    const newSeaCharges = [];
    Object.values(groups).forEach(g => {
        const charges = { ...g.charges };
        // Add CFS_20 and CFS_40 as separate charges
        if (g.cfs20 > 0) {
            charges.CFS_20 = { amount: g.cfs20, buyAmount: g.cfs20Buy, currency: g.currency || 'INR' };
        }
        if (g.cfs40 > 0) {
            charges.CFS_40 = { amount: g.cfs40, buyAmount: g.cfs40Buy, currency: g.currency || 'INR' };
        }
        newSeaCharges.push({
            pol: g.pol,
            commodity: g.commodity,
            charges: charges,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });
    });

    db.defaultSeaCharges = newSeaCharges;
    saveDB();
    localStorage.setItem('sea_default_migrated', 'true');
    console.log('✅ Default Sea Charges migrated to new format (CFS_20 and CFS_40).');
}

function migrateDefaultSeaChargesToSplit() {
    if (localStorage.getItem('sea_split_migrated')) return;
    const records = db.defaultSeaCharges || [];
    let changed = false;
    records.forEach(rec => {
        const newCharges = {};
        Object.entries(rec.charges || {}).forEach(([key, val]) => {
            // If it's already a split charge (ends with _20 or _40), keep as is
            if (key.endsWith('_20') || key.endsWith('_40')) {
                newCharges[key] = val;
                return;
            }
            // For CFS, we already have CFS_20 and CFS_40 from previous migration, so skip
            if (key === 'CFS') {
                // Should have been already migrated, but if not, we'll handle here
                // We'll create CFS_20 and CFS_40 with same value if missing
                if (!rec.charges.CFS_20) {
                    newCharges['CFS_20'] = { amount: val.amount || 0, buyAmount: val.buyAmount || 0, currency: val.currency || 'INR' };
                }
                if (!rec.charges.CFS_40) {
                    newCharges['CFS_40'] = { amount: val.amount || 0, buyAmount: val.buyAmount || 0, currency: val.currency || 'INR' };
                }
                return;
            }
            // For other charges, create both _20 and _40 with the same value (user can edit later)
            newCharges[key + '_20'] = { amount: val.amount || 0, buyAmount: val.buyAmount || 0, currency: val.currency || 'INR' };
            newCharges[key + '_40'] = { amount: val.amount || 0, buyAmount: val.buyAmount || 0, currency: val.currency || 'INR' };
        });
        rec.charges = newCharges;
        changed = true;
    });
    if (changed) {
        db.defaultSeaCharges = records;
        saveDB();
        localStorage.setItem('sea_split_migrated', 'true');
        console.log('✅ Default SEA charges migrated to split 20/40 format.');
    }
}


function bulkExportCarrierCharges() {
    if (typeof XLSX === 'undefined') {
        alert('XLSX library not loaded. Please refresh and try again.');
        return;
    }

    const rows = [];

    function addCarrierChargeRow(mode, rec) {
        const charges = rec.charges || {};
        Object.entries(charges).forEach(([key, val]) => {
            let container = '';
            let chargeName = key;
            if (key === 'THC_20') {
                container = '20 GP';
                chargeName = 'THC';
            } else if (key === 'THC_40') {
                container = '40 HC';
                chargeName = 'THC';
            }
            rows.push({
                'Mode': mode.toUpperCase(),
                'Carrier': rec.carrier,
                'POL': rec.pol,
                'Commodity': rec.commodity || '',
                'Charge Name': chargeName,
                'Container': container,
                'Sell Amount': val.amount || 0,
                'Buy Amount': val.buyAmount || 0,
                'Currency': val.currency || 'INR'
            });
        });
    }

    // SEA Carrier Charges
    db.carrierChargesSeaLcl.forEach(r => {
        if (r.mode === 'sea') addCarrierChargeRow('SEA', r);
    });
    // LCL Carrier Charges
    db.carrierChargesSeaLcl.forEach(r => {
        if (r.mode === 'lcl') addCarrierChargeRow('LCL', r);
    });
    // AIR Carrier Charges
    db.carrierChargesAir.forEach(r => {
        addCarrierChargeRow('AIR', r);
    });

    if (rows.length === 0) {
        alert('⚠️ No carrier-specific charges found to export.');
        return;
    }

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Carrier Charges');
    XLSX.writeFile(wb, `CarrierCharges_Backup_${new Date().toISOString().split('T')[0]}.xlsx`);
    alert('✅ Carrier charges exported (vertical format – one row per charge).');
}


// ─────────────────────────────────────────────────────────────
// Helper: returns the charge column names for a given mode
// ─────────────────────────────────────────────────────────────
function getHorizontalChargeColumns(mode) {
    const map = {
        sea: [
            'THC 20', 'THC 40', 'SEAL', 'MUC', 'DOCS', 'SEAWAY BL',
            'ETS', 'HAZ DOCS', 'AMS'
        ],
        lcl: [
            'FREIGHT', 'THC', 'MUC', 'DOCS', 'SEAWAY BL',
            'HAZ DOCS', 'AMS', 'CLEARANCE', 'VGM'
        ],
        air: [
            'AIR FREIGHT', 'CARTAGE', 'MCC', 'XRAY', 'GATE PASS',
            'ASI GMAX', 'AMS', 'PALLETISATION', 'PLY',
            'LOADING & UNLOADING', 'DG FEES', 'DG AGENT FEE',
            'REPACKING', 'AWB FEES', 'TEDI', 'ADD.SURCHARGE',
            'TRANSPORTATION', 'CUSTOM CLEARANCE', 'TERMINAL TRANSFER'
        ]
    };
    return map[mode] || [];
}

// ─────────────────────────────────────────────────────────────
// EXPORT CARRIER CHARGES (Horizontal)
// ─────────────────────────────────────────────────────────────
function bulkExportCarrierCharges() {
    if (typeof XLSX === 'undefined') {
        alert('XLSX library not loaded. Please refresh and try again.');
        return;
    }

    // Determine which local tab is active
    let mode = 'sea';
    if (document.getElementById('airlocal') && document.getElementById('airlocal').classList.contains('active')) mode = 'air';
    else if (document.getElementById('lcllocal') && document.getElementById('lcllocal').classList.contains('active')) mode = 'lcl';

    const chargeColumns = getHorizontalChargeColumns(mode);
    let source;
    if (mode === 'air') {
        source = db.carrierChargesAir || [];
    } else {
        source = (db.carrierChargesSeaLcl || []).filter(r => r.mode === mode);
    }

    // Group by (carrier, pol, commodity)
    const groups = {};
    source.forEach(rec => {
        const key = `${rec.carrier||''}||${rec.pol||''}||${(rec.commodity||'')}`;
        if (!groups[key]) {
            groups[key] = {
                MODE: mode.toUpperCase(),
                POL: rec.pol || '',
                LINER: rec.carrier || '',
                CARGO: rec.commodity || '',
                charges: {}
            };
        }
        // Map internal names to display columns
        Object.entries(rec.charges || {}).forEach(([charge, val]) => {
            let displayName = charge;
            if (charge === 'THC_20') displayName = 'THC 20';
            else if (charge === 'THC_40') displayName = 'THC 40';
            groups[key].charges[displayName] = val.amount || 0;
        });
    });

    // Build rows
    const rows = [];
    Object.values(groups).forEach(g => {
        const row = {
            MODE: g.MODE,
            POL: g.POL,
            LINER: g.LINER,
            CARGO: g.CARGO
        };
        chargeColumns.forEach(col => {
            // If amount is 0, leave empty (not 0)
            row[col] = g.charges[col] || '';
        });
        rows.push(row);
    });

    if (rows.length === 0) {
        alert(`No carrier charges found for ${mode.toUpperCase()}.`);
        return;
    }

    const ws = XLSX.utils.json_to_sheet(rows);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Carrier Charges Horizontal');
    XLSX.writeFile(wb, `CarrierCharges_${mode.toUpperCase()}_${new Date().toISOString().split('T')[0]}.xlsx`);
    alert(`✅ Exported ${rows.length} carrier charge groups (horizontal format).`);
}

// ─────────────────────────────────────────────────────────────
// IMPORT CARRIER CHARGES (Horizontal) with currency detection
// ─────────────────────────────────────────────────────────────
function bulkImportCarrierCharges(input) {
    if (!input.files || !input.files[0]) {
        alert('Please select an Excel file.');
        return;
    }

    const file = input.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const sheet = workbook.Sheets['Carrier Charges Horizontal'];
            if (!sheet) {
                alert('❌ Sheet "Carrier Charges Horizontal" not found. Available: ' + workbook.SheetNames.join(', '));
                return;
            }

            const rows = XLSX.utils.sheet_to_json(sheet);
            if (!rows.length) {
                alert('❌ No data found.');
                return;
            }

            function normalize(str) {
                if (!str) return '';
                return str.toString().trim().replace(/\s*,\s*/g, ', ').replace(/\s+/g, ' ').toUpperCase();
            }

            // Determine mode from first row
            const mode = normalize(rows[0].MODE || '');
            if (!['SEA','LCL','AIR'].includes(mode)) {
                alert('❌ Invalid MODE. Must be SEA, LCL, or AIR.');
                return;
            }
            const modeKey = mode.toLowerCase();
            const chargeColumns = getHorizontalChargeColumns(modeKey);
            const targetArr = modeKey === 'air' ? db.carrierChargesAir : db.carrierChargesSeaLcl;

            let imported = 0, updated = 0;

            rows.forEach(row => {
                const pol = normalize(row.POL || '');
                const liner = normalize(row.LINER || '');
                const cargo = normalize(row.CARGO || '');
                if (!pol || !liner) return; // skip invalid rows

                // Build charges object (sell = buy)
                const charges = {};
                chargeColumns.forEach(col => {
                    const raw = row[col];
                    if (raw === undefined || raw === null || raw === '') return;

                    let strVal = String(raw).trim();
                    let currency = 'INR';
                    let numericStr = strVal;

                    // Check for $ symbol → USD
                    if (strVal.includes('$')) {
                        currency = 'USD';
                        numericStr = strVal.replace(/[^0-9.]/g, '');
                    } else {
                        // Remove commas (Indian format) and any non-digit except decimal
                        numericStr = strVal.replace(/,/g, '').replace(/[^0-9.]/g, '');
                    }

                    const val = parseFloat(numericStr);
                    if (isNaN(val) || val <= 0) return;

                    let key = col;
                    if (col === 'THC 20') key = 'THC_20';
                    else if (col === 'THC 40') key = 'THC_40';

                    charges[key] = {
                        amount: val,
                        currency: currency,
                        buyAmount: val,
                        buyCurrency: currency
                    };
                });

                if (Object.keys(charges).length === 0) return;

                // Find existing record (case‑insensitive)
                let idx = -1;
                if (modeKey === 'air') {
                    idx = targetArr.findIndex(r =>
                        normalize(r.carrier) === liner &&
                        normalize(r.pol) === pol &&
                        normalize(r.commodity || '') === cargo
                    );
                } else {
                    idx = targetArr.findIndex(r =>
                        r.mode === modeKey &&
                        normalize(r.carrier) === liner &&
                        normalize(r.pol) === pol &&
                        normalize(r.commodity || '') === cargo
                    );
                }

                if (idx !== -1) {
                    // Merge: update existing charges
                    const existing = targetArr[idx];
                    Object.entries(charges).forEach(([key, val]) => {
                        if (!existing.charges[key]) {
                            existing.charges[key] = val;
                        } else {
                            // Keep larger amount if conflict
                            if (val.amount > existing.charges[key].amount) {
                                existing.charges[key].amount = val.amount;
                                existing.charges[key].buyAmount = val.buyAmount;
                            }
                            existing.charges[key].currency = val.currency || existing.charges[key].currency;
                            existing.charges[key].buyCurrency = val.buyCurrency || existing.charges[key].buyCurrency;
                        }
                    });
                    existing.updated = new Date().toISOString();
                    updated++;
                } else {
                    // Create new record
                    const newRec = {
                        carrier: liner,
                        pol: pol,
                        commodity: cargo,
                        charges: charges,
                        updated: new Date().toISOString()
                    };
                    if (modeKey !== 'air') newRec.mode = modeKey;
                    targetArr.push(newRec);
                    imported++;
                }
            });

            saveDB();
            // Refresh the correct table
            const displayMode = modeKey === 'air' ? 'air' : (modeKey === 'lcl' ? 'lcl' : 'sealcl');
            renderCarrierChargesMaster(displayMode);
            alert(`✅ Import completed.\nNew: ${imported}, Updated: ${updated}`);
            autoBackup();
        } catch (err) {
            alert('❌ Import failed: ' + err.message);
            console.error(err);
        }
    };
    reader.readAsArrayBuffer(file);
    input.value = '';
}

// ===== 1. selectBackupFolder – stores ONLY the handle, does NOT change the saved path =====
async function selectBackupFolder() {
    try {
        if (!window.showDirectoryPicker) {
            alert('Your browser does not support the File System Access API. Please use Chrome or Edge.');
            return;
        }
        const handle = await window.showDirectoryPicker();
        backupFolderHandle = handle;
        // Store handle in IndexedDB for persistence
        await storeFolderHandle(handle);
        // Store the path name for display
        db.backupFolderPath = handle.name;
        saveDB();
        // Update display
        const displayEl = document.getElementById('backup-folder-path');
        if (displayEl) displayEl.textContent = `📁 ${handle.name} (folder selected)`;
        const inputEl = document.getElementById('backup-folder-path-input');
        if (inputEl) inputEl.value = handle.name;
        alert('✅ Folder selected. Auto-backup will write directly to this folder.');
        startAutoBackup();
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error('Folder selection error:', err);
            alert('Failed to select folder: ' + err.message);
        }
    }
}




// ===== 2. saveBackupPath – stores the typed path exactly as entered =====
function saveBackupPath() {
    const inputEl = document.getElementById('backup-folder-path-input');
    const path = inputEl ? inputEl.value.trim() : '';
    if (!path) {
        alert('Please enter a folder path.');
        return;
    }
    db.backupFolderPath = path;
    saveDB();
    const displayEl = document.getElementById('backup-folder-path');
    if (displayEl) {
        displayEl.textContent = `📁 ${path} (path saved)`;
    }
    alert('✅ Path saved. Use "Browse Folder" to enable direct write.');
}


// ===== REPLACE autoBackupToFolder with this =====
async function autoBackupToFolder() {
    try {
        if (!backupFolderHandle) {
            console.warn('No folder handle available – backup skipped.');
            const statusEl = document.getElementById('backup-status');
            statusEl.textContent = '⚠️ No folder selected. Click "Browse Folder" to select.';
            statusEl.className = 'backup-status error';
            return;
        }

        // Check permission
        const opts = { mode: 'readwrite' };
        if (await backupFolderHandle.requestPermission(opts) !== 'granted') {
            throw new Error('Permission to write to folder was denied.');
        }

        const fileName = `AutoBackup_${new Date().toISOString().split('T')[0]}.json`;
        const backupData = { timestamp: new Date().toISOString(), data: db };
        const jsonStr = JSON.stringify(backupData, null, 2);

        // Create or get file handle
        let fileHandle;
        try {
            fileHandle = await backupFolderHandle.getFileHandle(fileName, { create: true });
        } catch (e) {
            fileHandle = await backupFolderHandle.getFileHandle(fileName, { create: true });
        }
        const writable = await fileHandle.createWritable({ keepExistingData: false });
        await writable.write(jsonStr);
        await writable.close();

        db.lastBackup = new Date().toISOString();
        saveDB();
        const statusEl = document.getElementById('backup-status');
        statusEl.textContent = `✅ Last backup: ${new Date().toLocaleString('en-IN')} (saved to ${backupFolderHandle.name}/${fileName})`;
        statusEl.className = 'backup-status success';
    } catch (e) {
        console.error('Folder backup failed:', e);
        const statusEl = document.getElementById('backup-status');
        statusEl.textContent = `❌ Backup failed: ${e.message}`;
        statusEl.className = 'backup-status error';
    }
}



// ==== REPLACE fallbackBackupDownload ====
async function fallbackBackupDownload() {
    try {
        const backupData = { timestamp: new Date().toISOString(), data: db };
        const json = JSON.stringify(backupData, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `AutoBackup_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        db.lastBackup = new Date().toISOString();
        saveDB();
        const statusEl = document.getElementById('backup-status');
        statusEl.textContent = `✅ Last backup: ${new Date().toLocaleString('en-IN')} (download fallback)`;
        statusEl.className = 'backup-status success';
    } catch (e) {
        console.error('Fallback download failed:', e);
        const statusEl = document.getElementById('backup-status');
        statusEl.textContent = `❌ Backup failed: ${e.message}`;
        statusEl.className = 'backup-status error';
    }
}

// ==== REPLACE autoBackup (the manual trigger) ====
async function autoBackup() {
    if (backupFolderHandle) {
        await autoBackupToFolder();
    } else {
        // No handle – show warning, do NOT download
        const statusEl = document.getElementById('backup-status');
        statusEl.textContent = '⚠️ No folder selected. Click "Browse Folder" to enable auto-backup.';
        statusEl.className = 'backup-status error';
        console.warn('Auto-backup skipped – no folder handle.');
    }
}


// ============ INDEXEDDB HELPERS (Robust) ============
function storeFolderHandle(handle) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('GatewayEximBackup', 2); // version 2
        request.onupgradeneeded = function(e) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('handles')) {
                db.createObjectStore('handles', { keyPath: 'id' });
            }
        };
        request.onsuccess = function(e) {
            const db = e.target.result;
            try {
                const tx = db.transaction('handles', 'readwrite');
                const store = tx.objectStore('handles');
                const putReq = store.put({ id: 'folderHandle', handle: handle });
                putReq.onsuccess = () => resolve();
                putReq.onerror = () => reject(putReq.error);
                tx.oncomplete = () => db.close();
            } catch (err) {
                reject(err);
            }
        };
        request.onerror = () => reject(request.error);
    });
}

function getFolderHandle() {
    return new Promise((resolve) => {
        const request = indexedDB.open('GatewayEximBackup', 2);
        request.onupgradeneeded = function(e) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('handles')) {
                db.createObjectStore('handles', { keyPath: 'id' });
            }
        };
        request.onsuccess = function(e) {
            const db = e.target.result;
            // Check if the store exists before trying to access it
            if (!db.objectStoreNames.contains('handles')) {
                db.close();
                resolve(null);
                return;
            }
            try {
                const tx = db.transaction('handles', 'readonly');
                const store = tx.objectStore('handles');
                const getReq = store.get('folderHandle');
                getReq.onsuccess = () => {
                    db.close();
                    resolve(getReq.result ? getReq.result.handle : null);
                };
                getReq.onerror = () => {
                    db.close();
                    resolve(null);
                };
                tx.oncomplete = () => db.close();
            } catch (err) {
                db.close();
                resolve(null);
            }
        };
        request.onerror = () => resolve(null);
    });
}



// RATES REQUEST //

function populateRateRequestDropdowns() {
    const pols = db.pol.filter(p => !(db.hiddenItems.pol || []).includes(p)).sort();
    const pods = db.pod.filter(p => !(db.hiddenItems.pod || []).includes(p)).sort();
    const containers = db.containers.filter(c => !(db.hiddenItems.containers || []).includes(c)).sort();
    const defaultInv = '20 GP & 40 HC';
    if (!containers.includes(defaultInv)) containers.unshift(defaultInv);

    const formatSuffixes = ['sea1', 'sea2', 'air'];
    formatSuffixes.forEach(suffix => {
        // Populate POL datalist
        const polList = document.getElementById(`rr-pol-list-${suffix}`);
        if (polList) polList.innerHTML = pols.map(p => `<option value="${p}">`).join('');

        // Populate POD datalist
        const podList = document.getElementById(`rr-pod-list-${suffix}`);
        if (podList) podList.innerHTML = pods.map(p => `<option value="${p}">`).join('');

        // Populate INVENTORY dropdown (only for SEA formats)
        const invEl = document.getElementById(`rr-inventory-${suffix}`);
        if (invEl && suffix !== 'air') {
            invEl.innerHTML = containers.map(c => `<option value="${c}" ${c === defaultInv ? 'selected' : ''}>${c}</option>`).join('');
        }
    });

    // Set default values
    const company = db.companyName || 'GATEWAY EXIM';
    const fwd1 = document.getElementById('rr-forwarder-sea1');
    const fwd2 = document.getElementById('rr-forwarder-sea2');
    if (fwd1) fwd1.value = company;
    if (fwd2) fwd2.value = company;

    const validity1 = document.getElementById('rr-validity-sea1');
    const validity2 = document.getElementById('rr-validity-sea2');
    const endOfMonth = getEndOfMonthDate();
    if (validity1) validity1.value = endOfMonth;
    if (validity2) validity2.value = endOfMonth;

    const clearance = document.getElementById('rr-clearance-air');
    if (clearance) clearance.value = 'INQUIRY';
}

// Switch between formats
function switchRateRequestFormat(format) {
    currentRateRequestFormat = format;
    document.querySelectorAll('#raterequest .form-section[id^="rr-format-"]').forEach(el => el.style.display = 'none');
    const target = document.getElementById(`rr-format-${format}`);
    if (target) target.style.display = 'block';
    document.querySelectorAll('#raterequest .tab-heading .btn').forEach(btn => btn.classList.remove('active'));
    const btns = document.querySelectorAll('#raterequest .tab-heading .btn');
    const map = { 'seaWithShipper': 0, 'seaWithoutShipper': 1, 'air': 2 };
    if (map[format] !== undefined && btns[map[format]]) {
        btns[map[format]].classList.add('active');
    }
    populateRateRequestDropdowns();
}


function getRateRequestData(format) {
    // Determine mode based on format
    let mode = 'SEA';
    if (format === 'air') mode = 'AIR';

    const getVal = (id) => {
        const el = document.getElementById(id);
        const val = el ? el.value : '';
        return val;
    };
    const getSel = (id) => {
        const el = document.getElementById(id);
        const val = el ? el.value : '';
        return val;
    };

    let data = { format, mode };

    if (format === 'seaWithShipper') {
        data.shipper = getVal('rr-shipper');
        data.forwarder = getVal('rr-forwarder-sea1');
        data.pol = getVal('rr-pol-sea1');
        data.pod = getVal('rr-pod-sea1');
        data.commodity = getSel('rr-commodity-sea1');
        data.inventory = getSel('rr-inventory-sea1');
        data.weight = getVal('rr-weight-sea1');
        data.term = getSel('rr-term-sea1');
        data.validity = getVal('rr-validity-sea1');
        data.freeTime = getSel('rr-freeTime-sea1');
		data.remarks = getVal('rr-remarks-sea1');
    } else if (format === 'seaWithoutShipper') {
        data.forwarder = getVal('rr-forwarder-sea2');
        data.pol = getVal('rr-pol-sea2');
        data.pod = getVal('rr-pod-sea2');
        data.commodity = getSel('rr-commodity-sea2');
        data.inventory = getSel('rr-inventory-sea2');
        data.weight = getVal('rr-weight-sea2');
        data.term = getSel('rr-term-sea2');
        data.validity = getVal('rr-validity-sea2');
        data.freeTime = getSel('rr-freeTime-sea2');
		data.remarks = getVal('rr-remarks-sea2');
    } else if (format === 'air') {
        data.shipper = getVal('rr-shipper-air');
        data.pol = getVal('rr-pol-air');
        data.pod = getVal('rr-pod-air');
        data.clearance = getVal('rr-clearance-air');
        data.commodity = getSel('rr-commodity-air');
        data.weight = getVal('rr-weight-air');
        data.packaging = getVal('rr-packaging-air');
        data.pallet = getSel('rr-pallet-air');
        data.dimension = getVal('rr-dimension-air');
        data.temp = getSel('rr-temp-air');
		data.remarks = getVal('rr-remarks-air');
    }
    return data;
}

function buildRateRequestEmail(data) {
    const format = data.format;
    const company = db.companyName || 'GATEWAY EXIM';
    let html = `<div style="font-family:Arial,sans-serif;max-width:700px;margin:0 auto;padding:20px;background:#ffffff;color:#1a1a1a;">
        <h2 style="color:#1e3a8a;border-bottom:2px solid #1e3a8a;padding-bottom:8px;">📩 Rate Request</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">`;

    if (format === 'seaWithShipper') {
        html += `
            <tr><td style="padding:6px 8px;font-weight:bold;">SHIPPER</td><td style="padding:6px 8px;">${data.shipper || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">FORWARDER</td><td style="padding:6px 8px;">${data.forwarder || company}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">POL</td><td style="padding:6px 8px;">${data.pol || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">POD</td><td style="padding:6px 8px;">${data.pod || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">COMMODITY</td><td style="padding:6px 8px;">${data.commodity || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">INVENTORY</td><td style="padding:6px 8px;">${data.inventory || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">GROSS WEIGHT</td><td style="padding:6px 8px;">${data.weight ? data.weight + ' Kgs' : '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">FREIGHT TERM</td><td style="padding:6px 8px;">${data.term || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">VALIDITY</td><td style="padding:6px 8px;">${data.validity || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">DEST. FREE TIME</td><td style="padding:6px 8px;">${data.freeTime || '-'}</td></tr>
        `;
    } else if (format === 'seaWithoutShipper') {
        html += `
            <tr><td style="padding:6px 8px;font-weight:bold;">FORWARDER</td><td style="padding:6px 8px;">${data.forwarder || company}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">POL</td><td style="padding:6px 8px;">${data.pol || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">POD</td><td style="padding:6px 8px;">${data.pod || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">COMMODITY</td><td style="padding:6px 8px;">${data.commodity || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">INVENTORY</td><td style="padding:6px 8px;">${data.inventory || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">GROSS WEIGHT</td><td style="padding:6px 8px;">${data.weight ? data.weight + ' Kgs' : '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">FREIGHT TERM</td><td style="padding:6px 8px;">${data.term || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">VALIDITY</td><td style="padding:6px 8px;">${data.validity || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">DEST. FREE TIME</td><td style="padding:6px 8px;">${data.freeTime || '-'}</td></tr>
        `;
    } else if (format === 'air') {   // ✅ FIXED: was 'general'
        html += `
            <tr><td style="padding:6px 8px;font-weight:bold;">SHIPPER</td><td style="padding:6px 8px;">${data.shipper || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">POL</td><td style="padding:6px 8px;">${data.pol || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">POD</td><td style="padding:6px 8px;">${data.pod || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">CLEARANCE DATE</td><td style="padding:6px 8px;">${data.clearance || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">COMMODITY</td><td style="padding:6px 8px;">${data.commodity || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">GROSS WEIGHT</td><td style="padding:6px 8px;">${data.weight ? data.weight + ' Kgs' : '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">PACKAGING</td><td style="padding:6px 8px;">${data.packaging || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">PALLETIZED OR LOOSE</td><td style="padding:6px 8px;">${data.pallet || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">DIMENSION (L x W x H)</td><td style="padding:6px 8px;">${data.dimension || '-'}</td></tr>
            <tr><td style="padding:6px 8px;font-weight:bold;">TEMP CARGO</td><td style="padding:6px 8px;">${data.temp || '-'}</td></tr>
        `;
    }
    html += `</table>
        <p style="margin-top:16px;font-size:12px;color:#64748b;text-align:center;">Generated on ${new Date().toLocaleString('en-IN')}</p>
    </div>`;
    return html;
}




function clearRateRequestForm(format) {
    const ids = {
        'seaWithShipper': [
            'rr-shipper', 'rr-forwarder-sea1', 'rr-pol-sea1', 'rr-pod-sea1',
            'rr-commodity-sea1', 'rr-inventory-sea1', 'rr-weight-sea1',
            'rr-term-sea1', 'rr-validity-sea1', 'rr-freeTime-sea1',
            'rr-remarks-sea1'   // 🆕 added
        ],
        'seaWithoutShipper': [
            'rr-forwarder-sea2', 'rr-pol-sea2', 'rr-pod-sea2',
            'rr-commodity-sea2', 'rr-inventory-sea2', 'rr-weight-sea2',
            'rr-term-sea2', 'rr-validity-sea2', 'rr-freeTime-sea2',
            'rr-remarks-sea2'   // 🆕 added
        ],
        'air': [
            'rr-shipper-air', 'rr-pol-air', 'rr-pod-air', 'rr-clearance-air',
            'rr-commodity-air', 'rr-weight-air', 'rr-packaging-air',
            'rr-pallet-air', 'rr-dimension-air', 'rr-temp-air',
            'rr-remarks-air'    // 🆕 added
        ]
    };
    const fieldIds = ids[format] || [];
    fieldIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (el.tagName === 'SELECT') el.selectedIndex = 0;
            else if (el.type === 'number') el.value = '';
            else if (el.type === 'text' || el.type === 'date' || el.type === 'textarea') el.value = '';
        }
    });
    // Reset defaults (preserve remarks clearing)
    if (format === 'seaWithShipper' || format === 'seaWithoutShipper') {
        const suffix = format === 'seaWithShipper' ? 'sea1' : 'sea2';
        document.getElementById(`rr-validity-${suffix}`).value = getEndOfMonthDate();
        document.getElementById(`rr-weight-${suffix}`).value = 25500;
        document.getElementById(`rr-forwarder-${suffix}`).value = db.companyName || 'GATEWAY EXIM';
        document.getElementById(`rr-term-${suffix}`).value = 'PREPAID';
        document.getElementById(`rr-freeTime-${suffix}`).value = '14 Days';
        // remarks already cleared
    }
    if (format === 'air') {
        document.getElementById('rr-clearance-air').value = 'INQUIRY';
        document.getElementById('rr-pallet-air').value = 'PALLETIZED';
        document.getElementById('rr-temp-air').value = 'NORMAL';
        // remarks already cleared
    }
}


function getEndOfMonthDate() {
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    return lastDay.toISOString().split('T')[0];
}


function buildRateRequestPreviewHTML(data) {
    const format = data.format;
    const company = db.companyName || 'GATEWAY EXIM';
    const userName = getLoggedInUserName() || db.defaultUser || 'N/A';
    
    let rows = [];
    // Add mode at the top
    rows.push(['MODE', data.mode === 'AIR' ? '✈️ AIR' : '🚢 SEA']);

    if (format === 'seaWithShipper') {
        rows = rows.concat([
            ['SHIPPER', data.shipper || '-'],
            ['FORWARDER', data.forwarder || company],
            ['POL', data.pol || '-'],
            ['POD', data.pod || '-'],
            ['INVENTORY', data.inventory || '-'],
            ['COMMODITY', data.commodity || '-'],
            ['GROSS WEIGHT', data.weight ? data.weight + ' Kgs' : '-'],
            ['VALIDITY', data.validity || '-'],
            ['FREIGHT TERM', data.term || '-'],
            ['DEST. FREE TIME', data.freeTime || '-']
        ]);
    } else if (format === 'seaWithoutShipper') {
        rows = rows.concat([
            ['FORWARDER', data.forwarder || company],
            ['POL', data.pol || '-'],
            ['POD', data.pod || '-'],
            ['INVENTORY', data.inventory || '-'],
            ['COMMODITY', data.commodity || '-'],
            ['GROSS WEIGHT', data.weight ? data.weight + ' Kgs' : '-'],
            ['VALIDITY', data.validity || '-'],
            ['FREIGHT TERM', data.term || '-'],
            ['DEST. FREE TIME', data.freeTime || '-']
        ]);
    } else if (format === 'air') {
        rows = rows.concat([
            ['SHIPPER', data.shipper || '-'],
            ['POL', data.pol || '-'],
            ['POD', data.pod || '-'],
            ['CLEARANCE DATE', data.clearance || '-'],
            ['COMMODITY', data.commodity || '-'],
            ['GROSS WEIGHT', data.weight ? data.weight + ' Kgs' : '-'],
            ['PACKAGING', data.packaging || '-'],
            ['PALLETIZED OR LOOSE', data.pallet || '-'],
            ['DIMENSION (L x W x H)', data.dimension || '-'],
            ['TEMP CARGO', data.temp || '-']
        ]);
    }

    let rowsHtml = rows.map(([label, value]) => `
        <tr>
            <td style="border:1px solid #d1d5db;padding:4px 7px;font-weight:700;width:30%;background:#f8fafc;">${label}</td>
            <td style="border:1px solid #d1d5db;padding:4px 7px;width:70%;">${value}</td>
        </tr>
    `).join('');

    let html = `
    <div style="background:#ffffff;color:#1a1a1a;font-family:'Segoe UI',Arial,sans-serif;max-width:100%;margin:0 auto;padding:10px;box-sizing:border-box;">
        <div style="border-bottom:2px solid #1e3a8a;padding-bottom:6px;margin-bottom:8px;">
            <div style="font-size:0.9rem;font-weight:700;color:#1e3a8a;">${company}</div>
            <div style="font-size:0.65rem;color:#64748b;">${db.companyAddress || ''}</div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:8px;">
            <div style="text-align:left;">
                <div style="font-size:1.2rem;color:#1e3a8a;font-weight:800;letter-spacing:1px;">📩 RATE REQUEST</div>
                <div style="font-size:0.8rem;color:#64748b;">${data.mode === 'AIR' ? '✈️ AIR' : '🚢 SEA'}</div>
            </div>
            <div style="text-align:right;">
                <div style="font-family:'Courier New',monospace;color:#d97706;font-weight:700;font-size:0.85rem;background:#fffbeb;padding:4px 10px;border-radius:4px;">${new Date().toLocaleDateString('en-IN')}</div>
            </div>
        </div>
        <p style="font-size:0.85rem;color:#1a1a1a;margin:4px 0 10px 0;">Please assist to quote the rates as per below.</p>
        <table style="width:100%;border-collapse:collapse;font-size:0.78rem;">
            <thead>
                <tr><th colspan="2" style="background:#1e3a8a;color:white;padding:4px 7px;font-size:0.78rem;text-align:center;">Rate Request Details</th></tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>`;

    // ---- 🆕 ADD REMARKS SECTION ----
    if (data.remarks) {
        html += `
        <div style="margin-top:12px; border-top:1px solid #e2e8f0; padding-top:8px;">
            <div style="font-weight:700; color:#1e3a8a; font-size:0.78rem;">📝 Remarks</div>
            <div style="font-size:0.85rem; color:#1a1a1a; background:#f8fafc; padding:6px 10px; border-radius:4px; margin-top:4px;">
                ${data.remarks}
            </div>
        </div>`;
    }

    html += `</div>`;
    return html;
}


function buildRateRequestCompactEmailHTML(data) {
    const format = data.format;
    const company = db.companyName || 'GATEWAY EXIM';
    
    let rows = [];
    // Add MODE row at the top
    rows.push(['MODE', data.mode === 'AIR' ? '✈️ AIR' : '🚢 SEA']);

    if (format === 'seaWithShipper') {
        rows = rows.concat([
            ['SHIPPER', data.shipper || '-'],
            ['POL', data.pol || '-'],
            ['FORWARDER', data.forwarder || company],
            ['POD', data.pod || '-'],
            ['INVENTORY', data.inventory || '-'],
            ['COMMODITY', data.commodity || '-'],
            ['GROSS WEIGHT', data.weight ? data.weight + ' Kgs' : '-'],
            ['VALIDITY', data.validity || '-'],
            ['FREIGHT TERM', data.term || '-'],
            ['DEST. FREE TIME', data.freeTime || '-']
        ]);
    } else if (format === 'seaWithoutShipper') {
        rows = rows.concat([
            ['POL', data.pol || '-'],
            ['FORWARDER', data.forwarder || company],
            ['POD', data.pod || '-'],
            ['INVENTORY', data.inventory || '-'],
            ['COMMODITY', data.commodity || '-'],
            ['GROSS WEIGHT', data.weight ? data.weight + ' Kgs' : '-'],
            ['VALIDITY', data.validity || '-'],
            ['FREIGHT TERM', data.term || '-'],
            ['DEST. FREE TIME', data.freeTime || '-']
        ]);
    } else if (format === 'air') {
        rows = rows.concat([
            ['SHIPPER', data.shipper || '-'],
            ['POL', data.pol || '-'],
            ['POD', data.pod || '-'],
            ['CLEARANCE DATE', data.clearance || '-'],
            ['COMMODITY', data.commodity || '-'],
            ['GROSS WEIGHT', data.weight ? data.weight + ' Kgs' : '-'],
            ['PACKAGING', data.packaging || '-'],
            ['PALLETIZED OR LOOSE', data.pallet || '-'],
            ['DIMENSION (L x W x H)', data.dimension || '-'],
            ['TEMP CARGO', data.temp || '-']
        ]);
    }

    let rowsHtml = rows.map(([label, value]) => `
        <tr>
            <td style="border:1px solid #d1d5db;padding:4px 8px;font-weight:700;width:30%;background:#f8fafc;">${label}</td>
            <td style="border:1px solid #d1d5db;padding:4px 8px;width:70%;">${value}</td>
        </tr>
    `).join('');

    let html = `<div style="font-family:'Aptos','Segoe UI',Arial,sans-serif;max-width:17cm;min-width:13cm;width:auto;margin:0 auto;background:#ffffff;padding:4px;box-sizing:border-box;color:#1a1a1a;font-size:10px;">
        <p style="margin:0 0 4px 0;font-size:13px;line-height:1.4;">Dear Sir/Madam,</p>
        <br>
        <p style="margin:0 0 10px 0;font-size:13px;line-height:1.4;">Good Day !</p>
        <p style="font-size:12px;color:#1a1a1a;margin:-4px 0 10px 0;">Please assist to quote the rates as per below.</p>
        <div style="font-size:13px;font-weight:800;color:#1e3a8a;">RATE REQUEST — ${data.mode === 'AIR' ? '✈️ AIR' : '🚢 SEA'}</div>
        <br>
        <table style="width:15cm;min-width:15cm;max-width:100%;border-collapse:collapse;margin-top:0;font-size:10px;">
            <thead>
                <tr><th colspan="2" style="border:1px solid #1e3a8a;padding:4px 8px;text-align:center;background:#1e3a8a;color:white;font-weight:700;font-size:12px;line-height:1.4;vertical-align:middle;">Rate Request Details</th></tr>
            </thead>
            <tbody>
                ${rowsHtml}
            </tbody>
        </table>`;

    // ---- 🆕 ADD REMARKS (if present) ----
    if (data.remarks) {
        html += `
        <div style="margin-top:6px; font-size:10px; border-top:1px solid #e2e8f0; padding-top:4px;">
            <strong>📝 Remarks:</strong> ${data.remarks}
        </div>`;
    }

    html += `</div>`;
    return html;
}



function previewRateRequest() {
    const format = currentRateRequestFormat;
    const data = getRateRequestData(format);
    if (!data.pol || !data.pod) {
        alert('Please select both POL and POD.');
        return;
    }
    // ✅ Store for copy function
    _previewRRData = data;

    const html = buildRateRequestPreviewHTML(data);
    document.getElementById('modal-title').textContent = 'Rate Request Preview';
    document.getElementById('previewBody').innerHTML = `
        <div style="margin-bottom:10px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn btn-info" onclick="copyRateRequestTables()">📋 Copy Tables (Compact)</button>
        </div>
        ${html}
    `;
    document.getElementById('previewBody').style.background = 'white';
    openModal('previewModal');
}


function copyRateRequestTables() {
    // ✅ Use stored data if available, else fetch from form
    let data = _previewRRData;
    if (!data) {
        const format = currentRateRequestFormat;
        data = getRateRequestData(format);
        console.log('📊 No stored preview data, fetched from form:', data);
    } else {
        console.log('📊 Using stored preview data:', data);
    }

    if (!data.pol || !data.pod) {
        alert('⚠️ Please select both POL and POD before copying.');
        return;
    }

    const compactHtml = buildRateRequestCompactEmailHTML(data);
    console.log('📄 HTML built, length:', compactHtml.length);

    if (navigator.clipboard && navigator.clipboard.write) {
        const blobHTML = new Blob([compactHtml], { type: 'text/html' });
        const blobPlain = new Blob([`Rate Request - ${data.pol} to ${data.pod}`], { type: 'text/plain' });
        const clipboardItem = new ClipboardItem({
            'text/html': blobHTML,
            'text/plain': blobPlain
        });
        navigator.clipboard.write([clipboardItem])
            .then(() => {
                alert('✅ Tables copied with formatting!');
            })
            .catch(function(err) {
                console.warn('Clipboard API error:', err);
                fallbackCopyText(compactHtml);
                alert('⚠️ Copied as plain text (formatting may be lost).');
            });
    } else {
        fallbackCopyText(compactHtml);
        alert('✅ Copied as plain text.');
    }
}


function populateDrumTypesDropdown() {
    const sel = document.getElementById('rr-drum-type');
    if (!sel) return;
    const drums = db.drumTypes || [];
    sel.innerHTML = '<option value="">Select Drum Type</option>' +
        drums.map(d => `<option value="${d.id}">${d.name} (${d.length}×${d.width}×${d.height} cm, ${d.weightPerDrum} kg)</option>`).join('');
}


function onDrumTypeChange() {
    const sel = document.getElementById('rr-drum-type');
    if (!sel) return;
    const id = sel.value;
    if (!id) return;
    const drum = (db.drumTypes || []).find(d => d.id === id);
    if (!drum) return;
    const lEl = document.getElementById('rr-drum-l');
    const wEl = document.getElementById('rr-drum-w');
    const hEl = document.getElementById('rr-drum-h');
    const wtEl = document.getElementById('rr-drum-weight');
    if (lEl) lEl.value = drum.length || '';
    if (wEl) wEl.value = drum.width || '';
    if (hEl) hEl.value = drum.height || '';
    if (wtEl) wtEl.value = drum.weightPerDrum || '';
    calculateDrumTotals();
}


function calculateDrumTotals() {
    const qtyEl = document.getElementById('rr-drum-qty');
    const wtEl = document.getElementById('rr-drum-weight');
    const totalEl = document.getElementById('rr-drum-total');
    if (!qtyEl || !wtEl || !totalEl) return;
    const qty = parseFloat(qtyEl.value) || 0;
    const wt = parseFloat(wtEl.value) || 0;
    const total = qty * wt;
    totalEl.value = total > 0 ? total.toFixed(2) + ' Kgs' : '0.00 Kgs';
}

function useDrumWeight() {
    const totalEl = document.getElementById('rr-drum-total');
    const gwEl = document.getElementById('rr-gross-weight');
    if (!gwEl || !totalEl) return;
    const totalVal = parseFloat(totalEl.value) || 0;
    if (totalVal > 0) {
        gwEl.value = totalVal.toFixed(2);
    } else {
        alert('Please enter Quantity and Weight per Drum to calculate total.');
    }
}



function sendRateRequestEmail() {
    const format = currentRateRequestFormat;
    const data = getRateRequestData(format);
    if (!data.pol || !data.pod) {
        alert('Please select both POL and POD.');
        return;
    }

    // Determine default CC based on mode
    let defaultCC = '';
    if (data.mode === 'AIR') {
        defaultCC = db.defaultCCEmailAir || '';
    } else {
        // SEA
        defaultCC = db.defaultCCEmailSea || '';
    }

    // Generate quote number
    const now = new Date();
    const base = `RR-${String(now.getFullYear()).slice(-2)}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
    const all = db.drafts.rr || [];
    let seq = 1;
    let qn = base;
    while (all.some(r => r.quoteNumber === qn)) { seq++; qn = `${base}-${String(seq).padStart(2,'0')}`; }
    data.quoteNumber = qn;

    const htmlContent = buildRateRequestCompactEmailHTML(data);
    currentEmailData = { data: data, mode: 'raterequest', htmlContent: htmlContent };

    // Subject with mode
    const modeLabel = data.mode === 'AIR' ? 'AIR' : 'SEA';
    const subject = `${modeLabel} RATE REQUEST // ${qn} // ${data.pol} TO ${data.pod} // ${data.commodity}`;
    document.getElementById('email-subject').value = subject;
    document.getElementById('email-html-preview').innerHTML = htmlContent;
    document.getElementById('email-cc').value = defaultCC;

    openModal('emailModal');
}



function saveRateRequestDraft() {
    const format = currentRateRequestFormat;
    const data = getRateRequestData(format);
    if (!data.pol || !data.pod) {
        alert('Please select both POL and POD.');
        return;
    }
    const qn = saveRateRequestDraftWithData(data);
    alert(`Rate Request saved as Draft!\nQuote Number: ${qn}`);
}


function saveRateRequestDraftWithData(data) {
    // If no quote number, generate one
    if (!data.quoteNumber) {
        const now = new Date();
        const base = `RQ-RR-${String(now.getFullYear()).slice(-2)}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}-${String(now.getHours()).padStart(2,'0')}${String(now.getMinutes()).padStart(2,'0')}`;
        const all = db.drafts.rr || [];
        let seq = 1;
        let qn = base;
        while (all.some(r => r.quoteNumber === qn)) { seq++; qn = `${base}-${String(seq).padStart(2,'0')}`; }
        data.quoteNumber = qn;
    }
    data.timestamp = new Date().toISOString();
    data.lastModified = new Date().toISOString();
    data.mode = 'rr';
    data.status = 'DRAFT';
    data.followUpStatus = 'PENDING';

    if (!db.drafts.rr) db.drafts.rr = [];
    db.drafts.rr.push(data);
    saveDB();
    return data.quoteNumber;
}

function previewRateRequestDraft(target, mode, idx) {
    const rec = db[target][mode][idx];
    if (!rec) {
        alert('Record not found.');
        return;
    }
    let format = rec.format || 'seaWithShipper';
    if (rec.clearance !== undefined) format = 'air';
    else if (rec.shipper && !rec.forwarder) format = 'seaWithShipper';
    else if (!rec.shipper && rec.forwarder) format = 'seaWithoutShipper';
    else if (rec.shipper && rec.forwarder) format = 'seaWithShipper';
    
    currentRateRequestFormat = format;
    _previewRRData = rec;

    const modeLabel = rec.mode === 'AIR' ? '✈️ AIR' : '🚢 SEA';
    const html = buildRateRequestPreviewHTML(rec);
    document.getElementById('modal-title').textContent = `${modeLabel} Rate Request Preview`;
    document.getElementById('previewBody').innerHTML = `
        <div style="margin-bottom:10px; display:flex; gap:8px; flex-wrap:wrap;">
            <button class="btn btn-info" onclick="copyRateRequestTables()">📋 Copy Tables (Compact)</button>
        </div>
        ${html}
    `;
    document.getElementById('previewBody').style.background = 'white';
    openModal('previewModal');
}



function convertRRToQuote(target, mode, idx) {
    // Get the RR draft data
    const rrData = db[target][mode][idx];
    if (!rrData) {
        alert('Rate Request not found.');
        return;
    }

    // Determine which mode (SEA, AIR, LCL) this RR belongs to
    let targetMode = 'sea'; // default
    if (rrData.format === 'air' || rrData.clearance !== undefined) {
        targetMode = 'air';
    } else if (rrData.format === 'seaWithShipper' || rrData.format === 'seaWithoutShipper') {
        targetMode = 'sea';
    } else {
        // Fallback: check if specific fields exist
        if (rrData.clearance !== undefined) targetMode = 'air';
        else if (rrData.shipper !== undefined) targetMode = 'sea';
        else targetMode = 'sea';
    }

    // Switch to the appropriate tab
    switchToTab(targetMode);

    // Map RR fields to quotation fields
    const fieldMap = {
        'client': rrData.shipper || rrData.forwarder || '',
        'pol': rrData.pol || '',
        'pod': rrData.pod || '',
        'commodity': rrData.commodity || '',
        'weight': rrData.weight || '',
        'carrier': '', // RR doesn't have carrier – leave empty for user to fill
        'incoterm': rrData.term || '',
        'transit': '', // RR doesn't have transit time – user will fill
        'validityDate': rrData.validity || '',
    };

    // If SEA, also set container
    if (targetMode === 'sea') {
        fieldMap.container = rrData.inventory || '';
    }

    // If AIR, also set pallets and volume (if available)
    if (targetMode === 'air') {
        fieldMap.pallets = '';
        fieldMap.volume = '';
    }

    // Populate the form fields
    Object.keys(fieldMap).forEach(key => {
        const el = document.getElementById(`${targetMode}-${key}`);
        if (el && fieldMap[key] !== undefined && fieldMap[key] !== null) {
            el.value = fieldMap[key];
        }
    });

    // Set the quote number from the RR draft
    const qnBox = document.getElementById(`${targetMode}-qn-box`);
    const qnValue = document.getElementById(`${targetMode}-qn-value`);
    if (qnBox && qnValue && rrData.quoteNumber) {
        qnValue.textContent = rrData.quoteNumber;
        qnBox.classList.add('show');
    }

    // Confirm conversion and remove RR draft
    if (confirm(`Convert RR draft "${rrData.quoteNumber}" to ${targetMode.toUpperCase()} quotation? The RR draft will be removed.`)) {
        db[target][mode].splice(idx, 1);
        saveDB();
        renderRecords('drafts');
        alert(`✅ RR draft converted to ${targetMode.toUpperCase()} quotation.\nQuote Number: ${rrData.quoteNumber}\n\nPlease fill freight rates and charges, then click QUOTE to finalize.`);
    }
}

function convertRRToQuoteFromPreview(target, mode, idx) {
    closeModal('previewModal');
    convertRRToQuote(target, mode, idx);
}


// Save all three default CCs
function saveDefaultCC() {
    db.defaultCCEmailSea = document.getElementById('default-cc-sea').value.trim();
    db.defaultCCEmailAir = document.getElementById('default-cc-air').value.trim();
    db.defaultCCEmailLcl = document.getElementById('default-cc-lcl').value.trim();
    saveDB();
    loadDefaultCC();
    alert('Default CC emails saved!');
    autoBackup();
}

function loadDefaultCC() {
    const sea = document.getElementById('default-cc-sea');
    const air = document.getElementById('default-cc-air');
    const lcl = document.getElementById('default-cc-lcl');
    const currentSea = document.getElementById('current-cc-sea');
    const currentAir = document.getElementById('current-cc-air');
    const currentLcl = document.getElementById('current-cc-lcl');

    if (sea) sea.value = db.defaultCCEmailSea || '';
    if (air) air.value = db.defaultCCEmailAir || '';
    if (lcl) lcl.value = db.defaultCCEmailLcl || '';

    if (currentSea) currentSea.textContent = db.defaultCCEmailSea || 'Not Set';
    if (currentAir) currentAir.textContent = db.defaultCCEmailAir || 'Not Set';
    if (currentLcl) currentLcl.textContent = db.defaultCCEmailLcl || 'Not Set';
}

// Render RR Drafts (dedicated tab)
function renderRRDrafts() {
    const list = document.getElementById('rrdrafts-list');
    const counters = document.getElementById('rrdrafts-counters');
    if (!list) return;

    const searchText = (document.getElementById('rrdrafts-search-text')?.value || '').toLowerCase();
    const searchQN = (document.getElementById('rrdrafts-search-qn')?.value || '').toLowerCase();
    const searchDate = document.getElementById('rrdrafts-search-date')?.value || '';
    const modeFilter = document.getElementById('rrdrafts-mode-filter')?.value || '';

    let records = db.drafts.rr || [];
    records = records.filter(r => {
        const text = `${r.shipper||''} ${r.pol||''} ${r.pod||''} ${r.forwarder||''}`.toLowerCase();
        if (searchText && !text.includes(searchText)) return false;
        const qn = (r.quoteNumber || '').toLowerCase();
        if (searchQN && !qn.includes(searchQN)) return false;
        if (searchDate) {
            const d = new Date(r.timestamp).toISOString().split('T')[0];
            if (d !== searchDate) return false;
        }
        if (modeFilter && r.mode !== modeFilter) return false;
        return true;
    });

    if (counters) {
        counters.innerHTML = `
            <div class="counter-card" style="border-color:#ec4899;">
                <div class="counter-label">📩 Total RR Drafts</div>
                <div class="counter-value">${records.length}</div>
            </div>
        `;
    }

    if (records.length === 0) {
        list.innerHTML = '<p style="color:var(--text-light);padding:20px;text-align:center;">No RR drafts found.</p>';
        return;
    }

    list.innerHTML = records.map((rec, idx) => {
        const realIdx = db.drafts.rr.indexOf(rec);
        const modeClass = 'highlight-rr';
        const displayName = rec.shipper || rec.forwarder || rec.client || '?';
        const route = `${rec.pol || '?'} → ${rec.pod || '?'}`;
        const lastMod = rec.lastModified ? new Date(rec.lastModified).toLocaleString('en-IN') : new Date(rec.timestamp).toLocaleString('en-IN');
        const modeIcon = rec.mode === 'AIR' ? '✈️' : '🚢';
        const modeLabel = rec.mode === 'AIR' ? 'AIR Rate Request' : 'SEA Rate Request';

        return `<div class="record-card ${modeClass}">
            <div class="record-info">
                <h4>${modeIcon} ${modeLabel} — ${displayName} (${route})</h4>
                <p>Format: ${rec.format || 'N/A'} | Status: <strong>${rec.status || 'DRAFT'}</strong></p>
                <p class="quote-num">📋 ${rec.quoteNumber || 'N/A'}</p>
                <p class="last-modified">🕐 Last Modified: ${lastMod}</p>
            </div>
            <div class="record-actions">
                <button class="btn btn-sm btn-preview" onclick="previewRateRequestDraft('drafts','rr',${realIdx})">👁 Preview</button>
                <button class="btn btn-sm btn-quoted" onclick="convertRRToQuote('drafts','rr',${realIdx})">📤 Quote</button>
                <button class="btn btn-sm btn-duplicate" onclick="duplicateQuote('drafts','rr',${realIdx})">📋 Duplicate</button>
                <button class="btn btn-sm btn-draft" onclick="editRecord('drafts','rr',${realIdx})">✏️ Edit</button>
                <button class="btn btn-sm btn-clear" onclick="deleteRecord('drafts','rr',${realIdx})">🗑️ Delete</button>
            </div>
        </div>`;
    }).join('');
}

// Clear RR Drafts filters
function clearRRDraftsFilters() {
    document.getElementById('rrdrafts-search-text').value = '';
    document.getElementById('rrdrafts-search-qn').value = '';
    document.getElementById('rrdrafts-search-date').value = '';
    renderRRDrafts();
}


// ==================== ENHANCED RATES VIEW ====================
let ratesSortColumn = 'timestamp';
let ratesSortOrder = 'desc'; // 'asc' or 'desc'

function renderEnhancedRates() {
    const container = document.getElementById('rates-list-container');
    const paginationEl = document.getElementById('rates-pagination');
    if (!container) return;

    // --- Get filter values ---
    const searchText = (document.getElementById('rates-search-text')?.value || '').toLowerCase();
    const searchQN = (document.getElementById('rates-search-qn')?.value || '').toLowerCase();
    const searchDate = document.getElementById('rates-search-date')?.value || ''; // ✅ NEW
    const statusFilter = document.getElementById('rates-status-filter')?.value || '';
    const modeFilter = document.getElementById('rates-mode-filter')?.value || '';
    const userFilter = document.getElementById('rates-user-filter')?.value || '';

    // --- Collect all quotes from SEA, AIR, LCL ---
    let allQuotes = [];
    ['sea', 'air', 'lcl'].forEach(mode => {
        (db.rates[mode] || []).forEach((quote, idx) => {
            allQuotes.push({
                ...quote,
                _mode: mode,
                _idx: idx,
                _modeLabel: mode.toUpperCase()
            });
        });
    });

    // --- Populate User Filter dropdown dynamically ---
    const userSelect = document.getElementById('rates-user-filter');
    if (userSelect) {
        const users = [...new Set(allQuotes.map(q => q.sales || q.createdBy || db.defaultUser || 'Unknown'))].filter(Boolean);
        const currentVal = userSelect.value;
        userSelect.innerHTML = '<option value="">All Users</option>' + 
            users.map(u => `<option value="${u}" ${u === currentVal ? 'selected' : ''}>${u}</option>`).join('');
    }

    // --- Apply filters ---
    let filtered = allQuotes.filter(q => {
        // Search by text
        if (searchText) {
            const searchable = `${q.quoteNumber||''} ${q.client||''} ${q.pol||''} ${q.pod||''}`.toLowerCase();
            if (!searchable.includes(searchText)) return false;
        }
        // Search by Quote Number
        if (searchQN && !(q.quoteNumber||'').toLowerCase().includes(searchQN)) return false;
        // ✅ Search by Date
        if (searchDate) {
            const d = new Date(q.timestamp).toISOString().split('T')[0];
            if (d !== searchDate) return false;
        }
        // Status
        if (statusFilter && (q.followUpStatus || 'PENDING') !== statusFilter) return false;
        // Mode
        if (modeFilter && q._modeLabel !== modeFilter) return false;
        // User
        if (userFilter && (q.sales || q.createdBy || db.defaultUser) !== userFilter) return false;
        return true;
    });

    // --- Sort ---
    const sortKey = ratesSortColumn;
    const sortOrder = ratesSortOrder === 'asc' ? 1 : -1;
    filtered.sort((a, b) => {
        let valA = a[sortKey] || '';
        let valB = b[sortKey] || '';
        if (sortKey === 'timestamp') {
            valA = new Date(valA);
            valB = new Date(valB);
            return sortOrder * (valA - valB);
        }
        valA = String(valA).toLowerCase();
        valB = String(valB).toLowerCase();
        return sortOrder * valA.localeCompare(valB);
    });

    // --- Update Counters ---
    updateRatesCounters(allQuotes, filtered);

    // --- Pagination ---
    const perPage = 10;
    const total = filtered.length;
    const totalPages = Math.ceil(total / perPage) || 1;
    let page = parseInt(sessionStorage.getItem('ratesPage') || '1');
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    sessionStorage.setItem('ratesPage', String(page));

    const start = (page - 1) * perPage;
    const pageData = filtered.slice(start, start + perPage);

    if (total === 0) {
        container.innerHTML = '<p style="color:var(--text-light);padding:20px;text-align:center;">No quotes found.</p>';
        paginationEl.innerHTML = '';
        updateSelectedCount();
        return;
    }

    // --- Build HTML for each quote row ---
    let html = `
    <div class="rates-table-wrapper">
        <table class="rates-enhanced-table" id="rates-table">
            <thead>
                <tr>
                    <th style="width:30px;"><input type="checkbox" id="rates-select-all" onchange="toggleAllRatesCheckboxes()" /></th>
                    <th data-sort="quoteNumber" onclick="sortRates('quoteNumber')" style="width:12%;">QUOTE REF <span class="sort-arrow"></span></th>
                    <th data-sort="client" onclick="sortRates('client')" style="width:15%;">CUSTOMER <span class="sort-arrow"></span></th>
                    <th data-sort="pol" onclick="sortRates('pol')" style="width:14%;">ORIGIN <span class="sort-arrow"></span></th>
                    <th data-sort="pod" onclick="sortRates('pod')" style="width:14%;">DESTINATION <span class="sort-arrow"></span></th>
                    <th data-sort="_modeLabel" onclick="sortRates('_modeLabel')" style="width:8%;">SERVICE <span class="sort-arrow"></span></th>
                    <th data-sort="followUpStatus" onclick="sortRates('followUpStatus')" style="width:10%;">STATUS <span class="sort-arrow"></span></th>
                    <th data-sort="validityDate" onclick="sortRates('validityDate')" style="width:12%;">VALID TILL <span class="sort-arrow"></span></th>
                    <th data-sort="timestamp" onclick="sortRates('timestamp')" style="width:10%;">CREATED ON <span class="sort-arrow"></span></th>
                </tr>
            </thead>
            <tbody>
    `;

    pageData.forEach((q, index) => {
        const status = q.followUpStatus || 'PENDING';
        const statusClass = `follow-up-${status.toLowerCase().replace('-','')}`;
        const validityDate = q.validityDate ? new Date(q.validityDate) : null;
        const today = new Date();
        today.setHours(0,0,0,0);
        let validityDisplay = '-';
        if (validityDate) {
            const diff = Math.ceil((validityDate - today) / (1000 * 60 * 60 * 24));
            const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][validityDate.getMonth()];
            const day = String(validityDate.getDate()).padStart(2,'0');
            const year = String(validityDate.getFullYear()).slice(-2);
            const datePart = `${day}-${month}-${year}`;
            if (diff >= 0) {
                validityDisplay = `${datePart} (<span class="validity-days">${diff}</span>)`;
            } else {
                validityDisplay = `${datePart} (<span class="validity-days expired">Expired</span>)`;
            }
        }

        const createdDate = q.timestamp ? new Date(q.timestamp) : new Date();
        const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][createdDate.getMonth()];
        const day = String(createdDate.getDate()).padStart(2,'0');
        const year = String(createdDate.getFullYear()).slice(-2);
        const createdDisplay = `${day}-${month}-${year}`;

        const serviceMap = { 'SEA': 'FCL', 'AIR': 'AIR', 'LCL': 'LCL' };
        const service = serviceMap[q._modeLabel] || q._modeLabel;

        const rowBg = (index % 2 === 1) ? '#C7F0EA' : 'transparent';

        html += `
            <tr style="background:${rowBg};" data-quote='${JSON.stringify(q).replace(/'/g,"&apos;")}'>
                <td style="text-align:center;"><input type="checkbox" class="rates-row-checkbox" data-quote='${JSON.stringify(q).replace(/'/g,"&apos;")}' onchange="updateSelectedCount()" /></td>
                <td><strong>${q.quoteNumber || 'N/A'}</strong></td>
                <td>${q.client || '-'}</td>
                <td>${q.pol || '-'}</td>
                <td>${q.pod || '-'}</td>
                <td><span class="service-badge">${service}</span></td>
                <td>
                    <select class="status-dropdown ${statusClass}" onchange="updateQuoteStatus(this, '${q._mode}', ${q._idx})">
                        <option value="PENDING" ${status==='PENDING'?'selected':''}>⏳ Pending</option>
                        <option value="SENT" ${status==='SENT'?'selected':''}>📤 Sent</option>
                        <option value="FOLLOW-UP" ${status==='FOLLOW-UP'?'selected':''}>🔄 Follow-up</option>
                        <option value="WON" ${status==='WON'?'selected':''}>✅ Won</option>
                        <option value="LOST" ${status==='LOST'?'selected':''}>❌ Lost</option>
                    </select>
                </td>
                <td>${validityDisplay}</td>
                <td>${createdDisplay}</td>
            </tr>
        `;
    });

    html += `</tbody></table></div>`;
    container.innerHTML = html;

    // --- Update sort arrows ---
    updateSortArrows();

    // --- Pagination ---
    if (totalPages <= 1) {
        paginationEl.innerHTML = '';
    } else {
        let pagHtml = `<button class="page-btn" onclick="changeRatesPage(${page - 1})" ${page === 1 ? 'disabled' : ''}>‹ Prev</button>`;
        pagHtml += `<span class="page-info">Page ${page} of ${totalPages} (${total} records)</span>`;
        pagHtml += `<button class="page-btn" onclick="changeRatesPage(${page + 1})" ${page === totalPages ? 'disabled' : ''}>Next ›</button>`;
        paginationEl.innerHTML = pagHtml;
    }

    updateSelectedCount();
}

function updateSortArrows() {
    document.querySelectorAll('#rates-table th[data-sort]').forEach(th => {
        const col = th.dataset.sort;
        const arrow = th.querySelector('.sort-arrow');
        if (col === ratesSortColumn) {
            arrow.textContent = ratesSortOrder === 'asc' ? ' ▲' : ' ▼';
        } else {
            arrow.textContent = '';
        }
    });
}

function sortRates(column) {
    if (ratesSortColumn === column) {
        ratesSortOrder = ratesSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        ratesSortColumn = column;
        ratesSortOrder = 'asc';
    }
    renderRecords('rates');
}

function updateQuoteStatus(select, mode, idx) {
    const newStatus = select.value;
    const quote = db.rates[mode][idx];
    if (!quote) return;
    quote.followUpStatus = newStatus;
    quote.followUpUpdated = new Date().toISOString();
    quote.lastModified = new Date().toISOString();
    if (newStatus === 'LOST') {
        setTimeout(() => {
            const reason = prompt('Please enter reason for losing this quote:\n\nOptions:\n- High Rates\n- Slow Response\n- No Service\n- Client Not Interested\n- Competitor Won\n- Budget Constraints\n- Other');
            if (reason) {
                quote.lostReason = reason;
                saveDB();
                renderRecords('rates');
            }
        }, 100);
    } else {
        saveDB();
        // Update only the status dropdown style
        select.className = 'status-dropdown follow-up-' + newStatus.toLowerCase().replace('-','');
    }
}

function toggleAllRatesCheckboxes() {
    const checked = document.getElementById('rates-select-all').checked;
    document.querySelectorAll('.rates-row-checkbox').forEach(cb => cb.checked = checked);
    updateSelectedCount();
}

function updateSelectedCount() {
    const checked = document.querySelectorAll('.rates-row-checkbox:checked').length;
    const el = document.getElementById('rates-selected-count');
    if (el) el.textContent = checked + ' selected';
}

function getSelectedQuotes() {
    const selected = [];
    document.querySelectorAll('.rates-row-checkbox:checked').forEach(cb => {
        const q = JSON.parse(cb.dataset.quote);
        selected.push(q);
    });
    return selected;
}

function ratesBulkAction(action) {
    const selected = getSelectedQuotes();
    if (selected.length === 0) {
        alert('Please select at least one quote.');
        return;
    }
    if (action === 'preview') {
        const q = selected[0];
        previewSavedRecord('rates', q._mode, q._idx);
    } else if (action === 'pdf') {
        const q = selected[0];
        downloadSavedPDF('rates', q._mode, q._idx);
    } else if (action === 'email') {
        const q = selected[0];
        emailSavedQuote('rates', q._mode, q._idx);
    } else if (action === 'duplicate') {
        selected.forEach(q => {
            duplicateQuote('rates', q._mode, q._idx);
        });
        alert(`Duplicated ${selected.length} quote(s).`);
    } else if (action === 'edit') {
        const q = selected[0];
        editRecord('rates', q._mode, q._idx);
    } else if (action === 'delete') {
        if (!confirm(`Delete ${selected.length} selected quote(s)?`)) return;
        // Delete in reverse order to avoid index shifting
        const toDelete = selected.map(q => ({ mode: q._mode, idx: q._idx })).reverse();
        toDelete.forEach(({ mode, idx }) => {
            if (idx < db.rates[mode].length) {
                db.rates[mode].splice(idx, 1);
            }
        });
        saveDB();
        renderRecords('rates');
        alert('Selected quotes deleted.');
    }
}

function changeRatesPage(page) {
    sessionStorage.setItem('ratesPage', String(page));
    renderRecords('rates');
}

function clearRatesFilters() {
    document.getElementById('rates-search-text').value = '';
    document.getElementById('rates-search-qn').value = '';
    document.getElementById('rates-search-date').value = ''; // ✅ NEW
    document.getElementById('rates-status-filter').value = '';
    document.getElementById('rates-mode-filter').value = '';
    document.getElementById('rates-user-filter').value = '';
    sessionStorage.setItem('ratesPage', '1');
    renderRecords('rates');
}

function updateRatesCounters(allQuotes, filtered) {
    const countersEl = document.getElementById('rates-counters');
    if (!countersEl) return;

    const totalSea = db.rates.sea ? db.rates.sea.length : 0;
    const totalAir = db.rates.air ? db.rates.air.length : 0;
    const totalLcl = db.rates.lcl ? db.rates.lcl.length : 0;
    const totalAll = totalSea + totalAir + totalLcl;

    const converted = allQuotes.filter(q => q.convertedToShipment === true).length;
    const expired = allQuotes.filter(q => {
        if (!q.validityDate) return false;
        const v = new Date(q.validityDate);
        const today = new Date();
        today.setHours(0,0,0,0);
        return v < today;
    }).length;

    countersEl.innerHTML = `
        <div class="counter-card" style="border-color:#3b82f6;"><div class="counter-label">🚢 SEA</div><div class="counter-value">${totalSea}</div></div>
        <div class="counter-card" style="border-color:#f59e0b;"><div class="counter-label">✈️ AIR</div><div class="counter-value">${totalAir}</div></div>
        <div class="counter-card" style="border-color:#10b981;"><div class="counter-label">📦 LCL</div><div class="counter-value">${totalLcl}</div></div>
        <div class="counter-card" style="border-color:#8b5cf6;"><div class="counter-label">📋 CONVERTED</div><div class="counter-value">${converted}</div></div>
        <div class="counter-card" style="border-color:#ef4444;"><div class="counter-label">⏰ EXPIRED</div><div class="counter-value">${expired}</div></div>
        <div class="counter-card" style="border-color:#1e3a8a;"><div class="counter-label">📊 TOTAL</div><div class="counter-value">${totalAll}</div></div>
    `;
}

// ==================== ENHANCED DRAFTS VIEW ====================
let draftsSortColumn = 'timestamp';
let draftsSortOrder = 'desc';

function renderEnhancedDrafts() {
    const draftsPanel = document.getElementById('drafts');
    if (!draftsPanel) return;

    let container = document.getElementById('drafts-list-container');
    let paginationEl = document.getElementById('drafts-pagination');

    if (!container) {
        container = document.createElement('div');
        container.id = 'drafts-list-container';
        const filterRow = draftsPanel.querySelector('.filter-row');
        if (filterRow) filterRow.after(container);
        else draftsPanel.appendChild(container);
    }

    if (!paginationEl) {
        paginationEl = document.createElement('div');
        paginationEl.id = 'drafts-pagination';
        paginationEl.className = 'pagination';
        container.after(paginationEl);
    }

    ['drafts-sea-list', 'drafts-air-list', 'drafts-lcl-list'].forEach(id => {
        const old = document.getElementById(id);
        if (old) old.remove();
    });
    draftsPanel.querySelectorAll('.section-heading').forEach(el => el.remove());

    const searchText = (document.getElementById('drafts-search-text')?.value || '').toLowerCase();
    const searchQN = (document.getElementById('drafts-search-qn')?.value || '').toLowerCase();
    const searchDate = document.getElementById('drafts-search-date')?.value || '';

    let allDrafts = [];
    ['sea', 'air', 'lcl'].forEach(mode => {
        (db.drafts[mode] || []).forEach((draft, idx) => {
            allDrafts.push({
                ...draft,
                _mode: mode,
                _idx: idx,
                _modeLabel: mode.toUpperCase()
            });
        });
    });

    let filtered = allDrafts.filter(d => {
        if (searchText) {
            const text = `${d.client||''} ${d.pol||''} ${d.pod||''} ${d.carrier||''} ${d.quoteNumber||''}`.toLowerCase();
            if (!text.includes(searchText)) return false;
        }
        if (searchQN && !(d.quoteNumber||'').toLowerCase().includes(searchQN)) return false;
        if (searchDate) {
            const dDate = new Date(d.timestamp).toISOString().split('T')[0];
            if (dDate !== searchDate) return false;
        }
        return true;
    });

    const sortKey = draftsSortColumn;
    const sortOrder = draftsSortOrder === 'asc' ? 1 : -1;
    filtered.sort((a, b) => {
        let valA = a[sortKey] || '';
        let valB = b[sortKey] || '';
        if (sortKey === 'timestamp') {
            valA = new Date(valA);
            valB = new Date(valB);
            return sortOrder * (valA - valB);
        }
        valA = String(valA).toLowerCase();
        valB = String(valB).toLowerCase();
        return sortOrder * valA.localeCompare(valB);
    });

    updateDraftsCounters(allDrafts, filtered);

    const perPage = 10;
    const total = filtered.length;
    const totalPages = Math.ceil(total / perPage) || 1;
    let page = parseInt(sessionStorage.getItem('draftsPage') || '1');
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    sessionStorage.setItem('draftsPage', String(page));

    const start = (page - 1) * perPage;
    const pageData = filtered.slice(start, start + perPage);

    if (total === 0) {
        container.innerHTML = '<p style="color:var(--text-light);padding:20px;text-align:center;">No drafts found.</p>';
        paginationEl.innerHTML = '';
        return;
    }

    // Build table with fixed widths
    let html = `
    <div class="rates-table-wrapper">
        <table class="rates-enhanced-table">
            <thead>
                <tr>
                    <th style="width:12%;" data-sort="quoteNumber" onclick="sortDrafts('quoteNumber')">QUOTE REF <span class="sort-arrow"></span></th>
                    <th style="width:15%;" data-sort="client" onclick="sortDrafts('client')">CUSTOMER <span class="sort-arrow"></span></th>
                    <th style="width:14%;" data-sort="pol" onclick="sortDrafts('pol')">ORIGIN <span class="sort-arrow"></span></th>
                    <th style="width:14%;" data-sort="pod" onclick="sortDrafts('pod')">DESTINATION <span class="sort-arrow"></span></th>
                    <th style="width:8%;" data-sort="_modeLabel" onclick="sortDrafts('_modeLabel')">SERVICE <span class="sort-arrow"></span></th>
                    <th style="width:12%;" data-sort="validityDate" onclick="sortDrafts('validityDate')">VALID TILL <span class="sort-arrow"></span></th>
                    <th style="width:10%;" data-sort="timestamp" onclick="sortDrafts('timestamp')">CREATED ON <span class="sort-arrow"></span></th>
                    <th style="width:15%;">ACTIONS</th>
                </tr>
            </thead>
            <tbody>
    `;

    pageData.forEach((d, index) => {
        const validityDate = d.validityDate ? new Date(d.validityDate) : null;
        const today = new Date();
        today.setHours(0,0,0,0);
        let validityDisplay = '-';
        if (validityDate) {
            const diff = Math.ceil((validityDate - today) / (1000 * 60 * 60 * 24));
            const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][validityDate.getMonth()];
            const day = String(validityDate.getDate()).padStart(2,'0');
            const year = String(validityDate.getFullYear()).slice(-2);
            validityDisplay = `${day}-${month}-${year}`;
            if (diff >= 0) validityDisplay += ` (${diff})`;
            else validityDisplay += ` (Expired)`;
        }
        const createdDate = d.timestamp ? new Date(d.timestamp) : new Date();
        const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][createdDate.getMonth()];
        const day = String(createdDate.getDate()).padStart(2,'0');
        const year = String(createdDate.getFullYear()).slice(-2);
        const createdDisplay = `${day}-${month}-${year}`;

        const serviceMap = { 'SEA': 'FCL', 'AIR': 'AIR', 'LCL': 'LCL' };
        const service = serviceMap[d._modeLabel] || d._modeLabel;

        const rowBg = (index % 2 === 1) ? '#C7F0EA' : 'transparent';

        html += `
            <tr style="background:${rowBg};">
                <td><strong>${d.quoteNumber || 'N/A'}</strong></td>
                <td>${d.client || '-'}</td>
                <td>${d.pol || '-'}</td>
                <td>${d.pod || '-'}</td>
                <td><span class="service-badge">${service}</span></td>
                <td>${validityDisplay}</td>
                <td>${createdDisplay}</td>
                <td>
                    <button class="btn btn-sm btn-preview" onclick="editRecord('drafts','${d._mode}',${d._idx})" title="Edit">✏️</button>
                    <button class="btn btn-sm btn-preview" onclick="previewSavedRecord('drafts','${d._mode}',${d._idx})" title="Preview">👁</button>
                    <button class="btn btn-sm btn-pdf" onclick="downloadSavedPDF('drafts','${d._mode}',${d._idx})" title="PDF">📄</button>
                    <button class="btn btn-sm btn-duplicate" onclick="duplicateQuote('drafts','${d._mode}',${d._idx})" title="Duplicate">📋</button>
                    <button class="btn btn-sm btn-clear" onclick="deleteRecord('drafts','${d._mode}',${d._idx})" title="Delete">×</button>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table></div>`;
    container.innerHTML = html;

    updateDraftsSortArrows();

    if (totalPages <= 1) {
        paginationEl.innerHTML = '';
    } else {
        let pagHtml = `<button class="page-btn" onclick="changeDraftsPage(${page - 1})" ${page === 1 ? 'disabled' : ''}>‹ Prev</button>`;
        pagHtml += `<span class="page-info">Page ${page} of ${totalPages} (${total} records)</span>`;
        pagHtml += `<button class="page-btn" onclick="changeDraftsPage(${page + 1})" ${page === totalPages ? 'disabled' : ''}>Next ›</button>`;
        paginationEl.innerHTML = pagHtml;
    }
}

function updateDraftsCounters(allDrafts, filtered) {
    const countersEl = document.getElementById('drafts-counters');
    if (!countersEl) return;
    const sea = allDrafts.filter(d => d._mode === 'sea').length;
    const air = allDrafts.filter(d => d._mode === 'air').length;
    const lcl = allDrafts.filter(d => d._mode === 'lcl').length;
    const total = allDrafts.length;
    countersEl.innerHTML = `
        <div class="counter-card" style="border-color:#3b82f6;"><div class="counter-label">🚢 SEA Drafts</div><div class="counter-value">${sea}</div></div>
        <div class="counter-card" style="border-color:#f59e0b;"><div class="counter-label">✈️ AIR Drafts</div><div class="counter-value">${air}</div></div>
        <div class="counter-card" style="border-color:#10b981;"><div class="counter-label">📦 LCL Drafts</div><div class="counter-value">${lcl}</div></div>
        <div class="counter-card" style="border-color:#1e3a8a;"><div class="counter-label">📊 TOTAL</div><div class="counter-value">${total}</div></div>
    `;
}

function sortDrafts(column) {
    if (draftsSortColumn === column) {
        draftsSortOrder = draftsSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        draftsSortColumn = column;
        draftsSortOrder = 'asc';
    }
    renderRecords('drafts');
}

function updateDraftsSortArrows() {
    document.querySelectorAll('#drafts-list-container .rates-enhanced-table th[data-sort]').forEach(th => {
        const col = th.dataset.sort;
        const arrow = th.querySelector('.sort-arrow');
        if (col === draftsSortColumn) {
            arrow.textContent = draftsSortOrder === 'asc' ? ' ▲' : ' ▼';
        } else {
            arrow.textContent = '';
        }
    });
}

function changeDraftsPage(page) {
    sessionStorage.setItem('draftsPage', String(page));
    renderRecords('drafts');
}


// ==================== ENHANCED RR DRAFTS VIEW ====================
let rrSortColumn = 'timestamp';
let rrSortOrder = 'desc';

function renderEnhancedRRDrafts() {
    const rrPanel = document.getElementById('rrdrafts');
    if (!rrPanel) return;

    let container = document.getElementById('rrdrafts-list-container');
    let paginationEl = document.getElementById('rrdrafts-pagination');

    if (!container) {
        container = document.createElement('div');
        container.id = 'rrdrafts-list-container';
        const filterRow = rrPanel.querySelector('.filter-row');
        if (filterRow) filterRow.after(container);
        else rrPanel.appendChild(container);
    }

    if (!paginationEl) {
        paginationEl = document.createElement('div');
        paginationEl.id = 'rrdrafts-pagination';
        paginationEl.className = 'pagination';
        container.after(paginationEl);
    }

    const oldList = document.getElementById('rrdrafts-list');
    if (oldList) oldList.remove();

    const searchText = (document.getElementById('rrdrafts-search-text')?.value || '').toLowerCase();
    const searchQN = (document.getElementById('rrdrafts-search-qn')?.value || '').toLowerCase();
    const searchDate = document.getElementById('rrdrafts-search-date')?.value || '';
    const modeFilter = document.getElementById('rrdrafts-mode-filter')?.value || '';

    let allRR = db.drafts.rr || [];
    allRR = allRR.map((rr, idx) => ({ ...rr, _idx: idx }));

    let filtered = allRR.filter(rr => {
        if (searchText) {
            const text = `${rr.shipper||''} ${rr.forwarder||''} ${rr.pol||''} ${rr.pod||''} ${rr.quoteNumber||''}`.toLowerCase();
            if (!text.includes(searchText)) return false;
        }
        if (searchQN && !(rr.quoteNumber||'').toLowerCase().includes(searchQN)) return false;
        if (searchDate) {
            const dDate = new Date(rr.timestamp).toISOString().split('T')[0];
            if (dDate !== searchDate) return false;
        }
        if (modeFilter && rr.mode !== modeFilter) return false;
        return true;
    });

    const sortKey = rrSortColumn;
    const sortOrder = rrSortOrder === 'asc' ? 1 : -1;
    filtered.sort((a, b) => {
        let valA = a[sortKey] || '';
        let valB = b[sortKey] || '';
        if (sortKey === 'timestamp') {
            valA = new Date(valA);
            valB = new Date(valB);
            return sortOrder * (valA - valB);
        }
        valA = String(valA).toLowerCase();
        valB = String(valB).toLowerCase();
        return sortOrder * valA.localeCompare(valB);
    });

    updateRRCounters(allRR, filtered);

    const perPage = 10;
    const total = filtered.length;
    const totalPages = Math.ceil(total / perPage) || 1;
    let page = parseInt(sessionStorage.getItem('rrPage') || '1');
    if (page < 1) page = 1;
    if (page > totalPages) page = totalPages;
    sessionStorage.setItem('rrPage', String(page));

    const start = (page - 1) * perPage;
    const pageData = filtered.slice(start, start + perPage);

    if (total === 0) {
        container.innerHTML = '<p style="color:var(--text-light);padding:20px;text-align:center;">No RR drafts found.</p>';
        paginationEl.innerHTML = '';
        return;
    }

    // Build table with fixed widths
    let html = `
    <div class="rates-table-wrapper">
        <table class="rates-enhanced-table">
            <thead>
                <tr>
                    <th style="width:14%;" data-sort="quoteNumber" onclick="sortRR('quoteNumber')">QUOTE REF <span class="sort-arrow"></span></th>
                    <th style="width:16%;" data-sort="shipper" onclick="sortRR('shipper')">SHIPPER <span class="sort-arrow"></span></th>
                    <th style="width:14%;" data-sort="pol" onclick="sortRR('pol')">POL <span class="sort-arrow"></span></th>
                    <th style="width:14%;" data-sort="pod" onclick="sortRR('pod')">POD <span class="sort-arrow"></span></th>
                    <th style="width:10%;" data-sort="mode" onclick="sortRR('mode')">MODE <span class="sort-arrow"></span></th>
                    <th style="width:12%;" data-sort="timestamp" onclick="sortRR('timestamp')">CREATED ON <span class="sort-arrow"></span></th>
                    <th style="width:20%;">ACTIONS</th>
                </tr>
            </thead>
            <tbody>
    `;

    pageData.forEach((rr, index) => {
        const createdDate = rr.timestamp ? new Date(rr.timestamp) : new Date();
        const month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][createdDate.getMonth()];
        const day = String(createdDate.getDate()).padStart(2,'0');
        const year = String(createdDate.getFullYear()).slice(-2);
        const createdDisplay = `${day}-${month}-${year}`;

        const modeIcon = rr.mode === 'AIR' ? '✈️' : '🚢';
        const modeDisplay = rr.mode || 'SEA';

        const rowBg = (index % 2 === 1) ? '#C7F0EA' : 'transparent';

        html += `
            <tr style="background:${rowBg};">
                <td><strong>${rr.quoteNumber || 'N/A'}</strong></td>
                <td>${rr.shipper || rr.forwarder || '-'}</td>
                <td>${rr.pol || '-'}</td>
                <td>${rr.pod || '-'}</td>
                <td><span class="service-badge">${modeIcon} ${modeDisplay}</span></td>
                <td>${createdDisplay}</td>
                <td>
                    <button class="btn btn-sm btn-preview" onclick="editRecord('drafts','rr',${rr._idx})" title="Edit">✏️</button>
                    <button class="btn btn-sm btn-preview" onclick="previewRateRequestDraft('drafts','rr',${rr._idx})" title="Preview">👁</button>
                    <button class="btn btn-sm btn-quoted" onclick="convertRRToQuote('drafts','rr',${rr._idx})" title="Convert to Quote">📤</button>
                    <button class="btn btn-sm btn-duplicate" onclick="duplicateQuote('drafts','rr',${rr._idx})" title="Duplicate">📋</button>
                    <button class="btn btn-sm btn-clear" onclick="deleteRecord('drafts','rr',${rr._idx})" title="Delete">×</button>
                </td>
            </tr>
        `;
    });

    html += `</tbody></table></div>`;
    container.innerHTML = html;

    updateRRSortArrows();

    if (totalPages <= 1) {
        paginationEl.innerHTML = '';
    } else {
        let pagHtml = `<button class="page-btn" onclick="changeRRPage(${page - 1})" ${page === 1 ? 'disabled' : ''}>‹ Prev</button>`;
        pagHtml += `<span class="page-info">Page ${page} of ${totalPages} (${total} records)</span>`;
        pagHtml += `<button class="page-btn" onclick="changeRRPage(${page + 1})" ${page === totalPages ? 'disabled' : ''}>Next ›</button>`;
        paginationEl.innerHTML = pagHtml;
    }
}

function updateRRCounters(allRR, filtered) {
    const countersEl = document.getElementById('rrdrafts-counters');
    if (!countersEl) return;
    const total = allRR.length;
    countersEl.innerHTML = `
        <div class="counter-card" style="border-color:#ec4899;"><div class="counter-label">📩 RR Drafts</div><div class="counter-value">${total}</div></div>
    `;
}

function sortRR(column) {
    if (rrSortColumn === column) {
        rrSortOrder = rrSortOrder === 'asc' ? 'desc' : 'asc';
    } else {
        rrSortColumn = column;
        rrSortOrder = 'asc';
    }
    renderRecords('rrdrafts');
}

function updateRRSortArrows() {
    document.querySelectorAll('#rrdrafts-list-container .rates-enhanced-table th[data-sort]').forEach(th => {
        const col = th.dataset.sort;
        const arrow = th.querySelector('.sort-arrow');
        if (col === rrSortColumn) {
            arrow.textContent = rrSortOrder === 'asc' ? ' ▲' : ' ▼';
        } else {
            arrow.textContent = '';
        }
    });
}

function changeRRPage(page) {
    sessionStorage.setItem('rrPage', String(page));
    renderRecords('rrdrafts');
}

// ==================== TOGGLE SIDE NAV ====================
function toggleNav() {
    const wrapper = document.querySelector('.app-wrapper');
    wrapper.classList.toggle('nav-collapsed');
    // Store preference in localStorage (optional)
    const isCollapsed = wrapper.classList.contains('nav-collapsed');
    localStorage.setItem('navCollapsed', isCollapsed ? 'true' : 'false');
}

// Restore nav state on load
document.addEventListener('DOMContentLoaded', function() {
    const navState = localStorage.getItem('navCollapsed');
    if (navState === 'true') {
        document.querySelector('.app-wrapper').classList.add('nav-collapsed');
    }
});


// ==================== ONEDRIVE JSON AUTO-SYNC ====================

/**
 * Converts a OneDrive sharing link to a direct download URL
 * Supports both personal OneDrive and business/SharePoint links
 */
function getOneDriveDirectUrl(shareLink) {
    // --- Handle Dropbox links ---
    if (shareLink.includes('dropbox.com')) {
        // Remove any existing dl, raw, or st parameters
        let cleanLink = shareLink.replace(/[?&](dl|raw|st)=[^&]*/g, '');
        // If there's already a ? add &raw=1, else add ?raw=1
        if (cleanLink.includes('?')) {
            return cleanLink + '&raw=1';
        } else {
            return cleanLink + '?raw=1';
        }
    }
    // --- Handle OneDrive links ---
    if (shareLink.includes('1drv.ms')) {
        return shareLink.replace('1drv.ms', '1drv.ws');
    }
    return shareLink;
}


// ==================== JSON URL SYNC (Google Drive + GitHub) ====================

let autoSyncInterval = null;
let autoSyncEnabled = false;
let syncIntervalMinutes = 5;

/**
 * Google Drive share link se File ID extract karein
 */
function extractGoogleDriveFileId(url) {
    const match = url.match(/\/d\/([^/]+)/);
    if (match) return match[1];
    const idMatch = url.match(/[?&]id=([^&]+)/);
    if (idMatch) return idMatch[1];
    return null;
}

/**
 * URL ko direct fetchable URL mein convert karein
 */
function getDirectFetchUrl(url, apiKey) {
    if (url.includes('drive.google.com') || url.includes('drive.usercontent.google.com')) {
        const fileId = extractGoogleDriveFileId(url);
        if (!fileId) return null;
        if (!apiKey) return null;
        return `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
    }
    if (url.includes('dropbox.com')) {
        return url.replace(/[?&]dl=0/, '&raw=1').replace(/[?&]dl=1/, '&raw=1');
    }
    if (url.includes('1drv.ms')) {
        return url.replace('1drv.ms', '1drv.ws');
    }
    if (url.includes('gist.githubusercontent.com')) {
        return url;
    }
    return url;
}

// ===== SAVE SETTINGS =====
function saveJsonSyncSettings() {
    const url = document.getElementById('json-url-input').value.trim();
    const apiKey = document.getElementById('google-api-key-input').value.trim();
    const interval = parseInt(document.getElementById('sync-interval-input').value) || 5;
    
    if (!url) {
        alert('Please enter a JSON URL.');
        return;
    }
    
    db.jsonSyncUrl = url;
    db.googleApiKey = apiKey;
    db.syncInterval = interval;
    saveDB();
    
    const msgEl = document.getElementById('sync-message');
    msgEl.textContent = `✅ Settings saved! URL: ${url.substring(0, 50)}... | Interval: ${interval} min`;
    msgEl.style.color = 'var(--success)';
    
    // Update interval if auto-sync is running
    if (autoSyncEnabled) {
        clearInterval(autoSyncInterval);
        startAutoSync(interval);
    }
}

// ===== LOAD SAVED SETTINGS =====
function loadJsonSyncUrl() {
    const savedUrl = db.jsonSyncUrl || '';
    const savedKey = db.googleApiKey || '';
    const savedInterval = db.syncInterval || 5;
    const urlInput = document.getElementById('json-url-input');
    const keyInput = document.getElementById('google-api-key-input');
    const intervalInput = document.getElementById('sync-interval-input');
    
    if (urlInput) urlInput.value = savedUrl;
    if (keyInput) keyInput.value = savedKey;
    if (intervalInput) intervalInput.value = savedInterval;
    
    syncIntervalMinutes = savedInterval;
}

// ===== FETCH & MERGE =====
function fetchAndMergeJSON() {
    const urlInput = document.getElementById('json-url-input');
    let url = urlInput.value.trim();
    if (!url) {
        alert('Please enter a valid URL.');
        return;
    }

    const apiKeyInput = document.getElementById('google-api-key-input');
    let apiKey = apiKeyInput ? apiKeyInput.value.trim() : '';

    const msgEl = document.getElementById('sync-message');
    msgEl.textContent = '⏳ Fetching JSON...';
    msgEl.style.color = 'var(--text-light)';

    let fetchUrl = getDirectFetchUrl(url, apiKey);
    if (!fetchUrl) {
        msgEl.textContent = '❌ Could not extract File ID from Google Drive link.';
        msgEl.style.color = 'var(--danger)';
        return;
    }

    console.log('🔗 Fetching from:', fetchUrl);

    fetch(fetchUrl, { cache: 'no-cache' })
        .then(response => {
            if (!response.ok) {
                if (response.status === 403) {
                    if (response.type === 'opaque' || response.type === 'error') {
                        throw new Error('CORS error: Add your domain to API key restrictions.');
                    }
                    throw new Error('API Key invalid or Drive API not enabled.');
                }
                if (response.status === 404) {
                    throw new Error('File not found. Check File ID and public sharing.');
                }
                throw new Error('HTTP ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const importedDb = data.data || data;
            if (!importedDb || typeof importedDb !== 'object') {
                throw new Error('Invalid JSON format.');
            }
            const summary = mergeDatabase(importedDb);
            saveDB();
            msgEl.textContent = `✅ Merge successful! ${summary}`;
            msgEl.style.color = 'var(--success)';
            refreshCurrentTab();
        })
        .catch(err => {
            msgEl.textContent = `❌ Error: ${err.message}`;
            msgEl.style.color = 'var(--danger)';
            console.error('Fetch error:', err);
        });
}

// ===== START AUTO-SYNC =====
function startAutoSync(intervalMinutes) {
    const intervalMs = intervalMinutes * 60 * 1000;
    if (autoSyncInterval) clearInterval(autoSyncInterval);
    autoSyncInterval = setInterval(fetchAndMergeJSON, intervalMs);
    autoSyncEnabled = true;
    
    const toggleBtn = document.getElementById('auto-sync-toggle');
    const syncNowBtn = document.getElementById('sync-now-btn');
    const statusEl = document.getElementById('auto-sync-status');
    
    if (toggleBtn) toggleBtn.textContent = '⏰ Auto-Sync On';
    if (syncNowBtn) syncNowBtn.style.display = 'inline-block';
    if (statusEl) statusEl.textContent = `Running (every ${intervalMinutes} min)`;
}

// ===== TOGGLE AUTO-SYNC =====
function toggleAutoSync() {
    const url = document.getElementById('json-url-input').value.trim();
    if (!url) {
        alert('Please enter a JSON URL first.');
        return;
    }
    
    const toggleBtn = document.getElementById('auto-sync-toggle');
    const syncNowBtn = document.getElementById('sync-now-btn');
    const statusEl = document.getElementById('auto-sync-status');
    
    if (autoSyncEnabled) {
        // Turn OFF
        clearInterval(autoSyncInterval);
        autoSyncEnabled = false;
        if (toggleBtn) toggleBtn.textContent = '⏰ Auto-Sync Off';
        if (syncNowBtn) syncNowBtn.style.display = 'none';
        if (statusEl) statusEl.textContent = 'Stopped';
        return;
    }
    
    // Turn ON
    const interval = parseInt(document.getElementById('sync-interval-input').value) || 5;
    syncIntervalMinutes = interval;
    startAutoSync(interval);
    
    // Immediate first sync
    fetchAndMergeJSON();
}

// ===== SYNC NOW (Manual) =====
function syncNow() {
    if (!autoSyncEnabled) {
        alert('Auto-sync is OFF. Please turn it ON first, or use "Fetch & Merge" for one-time sync.');
        return;
    }
    const msgEl = document.getElementById('sync-message');
    msgEl.textContent = '⏳ Manual sync triggered...';
    msgEl.style.color = 'var(--text-light)';
    fetchAndMergeJSON();
}

// ===== TEST URL =====
function testJsonUrl() {
    const url = document.getElementById('json-url-input').value.trim();
    const apiKey = document.getElementById('google-api-key-input').value.trim();
    if (!url) {
        alert('Please enter a URL.');
        return;
    }
    const msgEl = document.getElementById('sync-message');
    msgEl.textContent = '⏳ Testing URL...';
    msgEl.style.color = 'var(--text-light)';

    const fetchUrl = getDirectFetchUrl(url, apiKey);
    if (!fetchUrl) {
        msgEl.textContent = '❌ Could not extract File ID.';
        msgEl.style.color = 'var(--danger)';
        return;
    }

    fetch(fetchUrl)
        .then(res => {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(data => {
            msgEl.textContent = `✅ URL works! Data has ${Object.keys(data).length} top-level keys.`;
            msgEl.style.color = 'var(--success)';
            console.log('✅ Test successful:', data);
        })
        .catch(err => {
            msgEl.textContent = `❌ Test failed: ${err.message}`;
            msgEl.style.color = 'var(--danger)';
            console.error('❌ Test failed:', err);
        });
}

// ===== REFRESH CURRENT TAB =====
function refreshCurrentTab() {
    const activePanel = document.querySelector('.tab-panel.active');
    if (!activePanel) return;
    const tabId = activePanel.id;
    if (tabId === 'rates') renderRecords('rates');
    else if (tabId === 'drafts') renderRecords('drafts');
    else if (tabId === 'rrdrafts') renderRecords('rrdrafts');
    else if (tabId === 'ratesheet') { renderRateSheet(); updateExpiryDashboard(); }
    else if (tabId === 'dsr') renderShipments();
    else if (tabId === 'bldraft') renderBLDrafts();
    else if (tabId === 'database') renderDatabase();
}



// ==================== RATE SHEET BULK ACTIONS ====================

function toggleAllRatesheetCheckboxes() {
    const checked = document.getElementById('ratesheet-select-all').checked;
    document.querySelectorAll('.ratesheet-row-checkbox').forEach(cb => cb.checked = checked);
    updateRatesheetSelectedCount();
}

function updateRatesheetSelectedCount() {
    const checked = document.querySelectorAll('.ratesheet-row-checkbox:checked').length;
    const el = document.getElementById('ratesheet-selected-count');
    if (el) el.textContent = checked + ' selected';
}

function getSelectedRateSheetIndices() {
    const indices = [];
    document.querySelectorAll('.ratesheet-row-checkbox:checked').forEach(cb => {
        const idx = parseInt(cb.dataset.idx);
        if (!isNaN(idx)) indices.push(idx);
    });
    return indices;
}

function ratesheetBulkAction(action) {
    const indices = getSelectedRateSheetIndices();
    if (indices.length === 0) {
        alert('Please select at least one rate.');
        return;
    }

    switch (action) {
        case 'preview':
            const firstIdx = indices[0];
            previewRateSheet(firstIdx);
            break;

        case 'edit':
            // Only one at a time – open the first selected
            const editIdx = indices[0];
            if (indices.length > 1) {
                if (!confirm(`You selected ${indices.length} rates. Only the first one will be edited. Continue?`)) return;
            }
            editRateSheet(editIdx);
            break;

        case 'duplicate':
            if (!confirm(`Duplicate ${indices.length} selected rate(s)?`)) return;
            // Duplicate in reverse order to avoid index shifting if we want to keep original order
            indices.slice().reverse().forEach(idx => {
                duplicateRateSheet(idx);
            });
            // Re-render after all
            renderRateSheet();
            updateRatesheetSelectedCount();
            break;

        case 'renew':
            if (!confirm(`Renew ${indices.length} selected rate(s)?`)) return;
            indices.forEach(idx => {
                renewRateSheet(idx);
            });
            // The renew function opens a modal for each – we need to handle it differently.
            // We'll open the first one and after it's done, continue.
            // For simplicity, we'll just open the first one and let user do rest manually.
            if (indices.length > 1) {
                alert(`Renew opened for the first selected rate (${indices.length} total). Please renew each one manually.`);
            }
            renewRateSheet(indices[0]);
            break;

        case 'delete':
            if (!confirm(`Delete ${indices.length} selected rate(s)? This cannot be undone.`)) return;
            // Delete in reverse order to avoid index shifting
            indices.slice().sort((a, b) => b - a).forEach(idx => {
                if (idx < db.rateSheet.length) {
                    db.rateSheet.splice(idx, 1);
                }
            });
            saveDB();
            renderRateSheet();
            updateExpiryDashboard();
            updateRatesheetSelectedCount();
            break;

        default:
            alert('Unknown action');
    }
}
