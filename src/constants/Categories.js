// //CATEGORIES
// //CATEGORIES
// //CATEGORIES
// const nursery = [
//   "mattresses",
//   "cribs and cots",
//   "bedding",
//   "changing station",
//   "changing pads",
//   "changing pad covers",
//   "monitors",
//   "travel cot"
// ];

// const travel = ["strollers", "car seat toys", "carriers", "infant  car seat"];
// const play = [
//   "Play Mats & Activity Centre",
//   "Bouncers and Swings",
//   "infant seats"
// ];
// const health = ["Skin & Hair Care", "bath", "Grooming & Hygiene", "Teethers"];
// const feeding = ["Pumping", "Bottle Feeding", "Bibs"];
// const diapering = ["diaper bags", "Diapers"];
// const clothing = ["Rompers", "Hats", "Mittens"];

// //SUB CATEGORIES
// //SUB CATEGORIES
// //SUB CATEGORIES
// const mattresses = [
//   {
//     sku: "MS001",
//     name: "Comfort Mattress by Pinolino 140 x 70cm",
//     price: 28000,
//     subcategory: "mattresses",
//     budget: ["AB"],
//     dependencies: ["budget"],
//     quantity: 1
//   }
// ];

// const bedding = [
//   {
//     sku: "MS002",
//     name: "Jersey Fitted Sheet For Cot Bed - Pack of 2",
//     price: 7800,
//     subcategory: "bedding",
//     budget: ["AB"],
//     dependencies: ["budget"],
//     quantity: 1
//   }
// ];

// const cribs = [
//   {
//     sku: "MS040",
//     name: "Lenny or madeline changer",
//     price: 28000,
//     subcategory: "cribs and cots",
//     budget: ["T"],
//     dependencies: ["budget"],
//     quantity: 1
//   },
//   {
//     sku: "MS041",
//     name: "viktoria 2-piece Nursery furniture set",
//     price: 28000,
//     subcategory: "cribs and cots",
//     budget: ["BB"],
//     dependencies: ["budget"],
//     quantity: 1
//   },
//   {
//     sku: "MS042",
//     name: "Florentina 2-piece nursery furniture set",
//     price: 28000,
//     subcategory: "cribs and cots",
//     budget: ["QP"],
//     dependencies: ["budget"],
//     quantity: 1
//   }
// ];

// const changingStation = [
//   {
//     sku: "MS043",
//     name: "madeline changer with storage by pinolino",
//     price: 28000,
//     subcategory: "changing station",
//     budget: ["T"],
//     dependencies: ["budget"],
//     quantity: 1
//   }
// ];

// const monitors = [
//   {
//     sku: "MS048",
//     name: "Motorola video baby monitor",
//     price: 28000,
//     subcategory: "Monitors",
//     budget: ["BB"],
//     dependencies: ["budget"],
//     quantity: 1,
//     static: true
//   },
//   {
//     sku: "MS049",
//     name:
//       "Tommee Tippee no touch forehead thermometer and Motorola video baby monitor",
//     price: 28000,
//     subcategory: "Monitors",
//     budget: ["QP"],
//     dependencies: ["budget"],
//     quantity: 1,
//     static: true
//   }
// ];

// const CONSTANTS = {
//   Categories: [nursery, travel, play, health, feeding, diapering, clothing],
//   SubCategories: [mattresses, bedding, cribs, changingStation, monitors]
// };

// export default CONSTANTS;

//CATEGORIES
//CATEGORIES
//CATEGORIES
const nursery = [
  "mattresses",
  "cribs and cots",
  "bedding",
  "changing station",
  "changing pads",
  "changing pad covers",
  "monitors",
  "travel cot"
];

const travel = ["strollers", "car seat toys", "carriers", "infant  car seat"];
const play = [
  "Play Mats & Activity Centre",
  "Bouncers and Swings",
  "infant seats"
];
const health = ["Skin & Hair Care", "bath", "Grooming & Hygiene", "Teethers"];
const feeding = ["Pumping", "Bottle Feeding", "Bibs"];
const diapering = ["diaper bags", "Diapers"];
const clothing = ["Rompers", "Hats", "Mittens"];

//SUB CATEGORIES
//SUB CATEGORIES
//SUB CATEGORIES
const mattresses = [
  {
    sku: "MS001",
    name: "Comfort Mattress by Pinolino 140 x 70cm",
    price: 25000,
    subcategory: "mattresses",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const bedding = [
  {
    sku: "MS002",
    name: "Jersey Fitted Sheet For Cot Bed - Pack of 2",
    price: 7800,
    subcategory: "bedding",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const carriers = [
  {
    sku: "MS003",
    name: "Infantino flip 4-in-1 convertible carrier",
    price: 17500,
    subcategory: "Carriers",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const cribs = [
  {
    sku: "MS040",
    name: "Lenny or madeline changer",
    price: 45000,
    subcategory: "cribs and cots",
    budget: ["T"],
    dependencies: ["budget"],
    quantity: 1
  },
  {
    sku: "MS041",
    name: "viktoria 2-piece Nursery furniture set",
    price: 23000,
    subcategory: "cribs and cots",
    budget: ["BB"],
    dependencies: ["budget"],
    quantity: 1
  },
  {
    sku: "MS042",
    name: "Florentina 2-piece nursery furniture set",
    price: 18000,
    subcategory: "cribs and cots",
    budget: ["QP"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const changingStation = [
  {
    sku: "MS043",
    name: "madeline changer with storage by pinolino",
    price: 48000,
    subcategory: "changing station",
    budget: ["T"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const monitors = [
  {
    sku: "MS048",
    name: "Motorola video baby monitor",
    price: 26800,
    subcategory: "Monitors",
    budget: ["BB"],
    dependencies: ["budget"],
    quantity: 1,
    static: true
  },
  {
    sku: "MS049",
    name:
      "Tommee Tippee no touch forehead thermometer and Motorola video baby monitor",
    price: 48000,
    subcategory: "Monitors",
    budget: ["QP"],
    dependencies: ["budget"],
    quantity: 1,
    static: true
  }
];

const playMatsAndActivityCentre = [
  {
    sku: "MS004",
    name: "Lamaze freddie the firefly gym",
    price: 17500,
    subcategory: "Play Mats & Activity Centre",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const infantSeats = [
  {
    sku: "MS005",
    name: "summer infant 4-in-1 super seat neutral",
    price: 25000,
    subcategory: "Infant Seats",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const skinAndHairCare = [
  {
    sku: "MS006",
    name: "Harry and Rose baby bath set",
    price: 12500,
    subcategory: "Skin & Hair Care",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  },
  {
    sku: "MS007",
    name: "Harry and Rose baby soft lotion",
    price: 10001,
    subcategory: "Skin & Hair Care",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 3
  },
  {
    sku: "MS008",
    name: "Harry and Rose baby hair and body wash",
    price: 3750,
    subcategory: "Skin & Hair Care",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 2
  },
  {
    sku: "MS009",
    name: "Harry and Rose nappy spray",
    price: 2750,
    subcategory: "Skin & Hair Care",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 3
  }
];

const bath = [
  {
    sku: "MS010",
    name: "neat nursery co baby bath set",
    price: 22000,
    subcategory: "Bath",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const groomingAndHygiene = [
  {
    sku: "MS011",
    name: "Tommee Tippee closer to nature grooming kit",
    price: 10000,
    subcategory: "Grooming & Hygiene",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  },
  {
    sku: "MS059",
    name: "3d grey print hooded towel",
    price: 4000,
    subcategory: "Bath",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  },
  {
    sku: "MS060",
    name: "Boon sprig vertical drying rack",
    price: 7500,
    subcategory: "Grooming & Hygiene",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const bottleFeeding = [
  {
    sku: "MS014",
    name: "Tommee Tippee closer to nature newborn starter set",
    price: 15000,
    subcategory: "Bottle Feeding",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const teethers = [
  {
    sku: "MS012",
    name: "The teething egg",
    price: 8000,
    subcategory: "Teethers",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const pumping = [
  {
    sku: "MS013",
    name: "Silicone pump and white stopper combo",
    price: 15000,
    subcategory: "Pumping",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const bibs = [
  {
    sku: "MS015",
    name: "Bib and burp",
    price: 5000,
    subcategory: "Bibs",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const diaperBags = [
  {
    sku: "MS016",
    name: "Cosatto Supa change bag say hello",
    price: 20000,
    subcategory: "diaper bags",
    budget: ["AB"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const diapers = [
  {
    sku: "MS017",
    name: "Molfix baby wipes 60 count",
    price: 400,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Nigeria",
    quantity: 1
  },
  {
    sku: "MS018",
    name: "1-Newborn- small pack (2kg-5kg) 12 count",
    price: 540,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Nigeria",
    quantity: 1
  },
  {
    sku: "MS019",
    name: "1-Newborn- small pack (2kg-5kg) 12 count",
    price: 24700,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Nigeria",
    quantity: 1
  },
  {
    sku: "MS020",
    name: "1-Newborn Twin pack (3kg-5kg) 44 count",
    price: 29000,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Nigeria",
    quantity: 1
  },
  {
    sku: "MS021",
    name: "2-mini small pack (3kg-6kg) 10 count",
    price: 21000,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Nigeria",
    quantity: 1
  },
  {
    sku: "MS022",
    name: "2-mini-Jumbo- pack (3kg-6kg) 96 count",
    price: 18000,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Nigeria",
    quantity: 1
  },
  {
    sku: "MS023",
    name: "3-midi-small- pack (4kg- 9kg) 9 count",
    price: 38000,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Nigeria",
    quantity: 1
  },
  {
    sku: "MS024",
    name: "3-midi-twin- pack (4kg- 9kg) 36 count",
    price: 13000,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Nigeria",
    quantity: 1
  },
  {
    sku: "MS025",
    name: "3-midi-jumbo- pack (4kg- 9kg) 88 count",
    price: 19000,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Nigeria",
    quantity: 1
  },
  {
    sku: "MS026",
    name: "Huggies Snug & Dry Diapers",
    price: 12500,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Outside Nigeria",
    quantity: 1,
    size: 2
  },
  {
    sku: "MS027",
    name: "Huggies Snug & Dry Diapers",
    price: 11500,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Outside Nigeria",
    quantity: 2,
    size: 3
  },
  {
    sku: "MS028",
    name: "Huggies One and Done baby Wipes (56pcs)",
    price: 11200,
    subcategory: "Diapers",
    budget: ["AB"],
    dependencies: ["budget", "location"],
    location: "Outside Nigeria",
    quantity: 1
  }
];

const rompers = [
  {
    sku: "MS029",
    name: "Happy, little and loud baby short romper",
    price: 11000,
    subcategory: "Rompers",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "boy"
  },
  {
    sku: "MS030",
    name: "cool dragon baby short rompers",
    price: 13600,
    subcategory: "Rompers",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "boy"
  },
  {
    sku: "MS031",
    name: "3 piece set baby clothing",
    price: 28000,
    subcategory: "Rompers",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "boy"
  },
  {
    sku: "MS032",
    name: "Baby magical fairy bodysuit pink",
    price: 12080,
    subcategory: "Rompers",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "girl"
  },
  {
    sku: "MS033",
    name: "5-piece starter set",
    price: 13000,
    subcategory: "Rompers",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "girl"
  },
  {
    sku: "MS034",
    name: "3 piece set baby clothing mint",
    price: 17000,
    subcategory: "Rompers",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "girl"
  }
];

const hats = [
  {
    sku: "MS035",
    name: "3-piece hat (beep!)",
    price: 16540,
    subcategory: "Hats",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "boy"
  },
  {
    sku: "MS036",
    name: "knotted baby turbans (baby pink)",
    price: 11230,
    subcategory: "Hats",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "girl"
  },
  {
    sku: "MS037",
    name: "3-piece hat (pink)",
    price: 12870,
    subcategory: "Hats",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "girl"
  }
];

const mittens = [
  {
    sku: "MS038",
    name: "3-piece mittens (beep!)",
    price: 21200,
    subcategory: "Mittens",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "boy"
  },
  {
    sku: "MS039",
    name: "3-piece mittens (pink)",
    price: 17800,
    subcategory: "Mittens",
    budget: ["AB"],
    dependencies: ["budget", "gender"],
    quantity: 1,
    gender: "girl"
  }
];

const cribsAndCots = [
  {
    sku: "MS040",
    name: "Lenny or madeline changer",
    price: 6500,
    subcategory: "Cribs and cots",
    budget: ["T"],
    dependencies: ["budget"],
    quantity: 1
  },
  {
    sku: "MS041",
    name: "viktoria 2-piece Nursery furniture set",
    price: 13300,
    subcategory: "Cribs and cots",
    budget: ["BB"],
    dependencies: ["budget"],
    quantity: 1
  },
  {
    sku: "MS042",
    name: "Florentina 2-piece nursery furniture set",
    price: 13200,
    subcategory: "Cribs and cots",
    budget: ["QP"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const changingPads = [
  {
    sku: "MS044",
    name: "Shaped changing mat-plastic white",
    price: 12300,
    subcategory: "Changing pads",
    budget: ["T"],
    dependencies: ["budget"],
    quantity: 1,
    static: true
  },
  {
    sku: "MS045",
    name: "Comfort changing mat-white by pinolino",
    price: 1250,
    subcategory: "Changing pads",
    budget: ["QP", "BB"],
    dependencies: ["budget"],
    quantity: 1,
    static: true
  }
];

const changingPadCovers = [
  {
    sku: "MS046",
    name: "Changing cover mats - points grey by pinolino",
    price: 1200,
    subcategory: "Changing pad covers",
    budget: ["QP", "BB"],
    dependencies: ["budget"],
    quantity: 1,
    static: true
  },
  {
    sku: "MS047",
    name: "Shaped changing mats cover - dots",
    price: 227000,
    subcategory: "Changing pad covers",
    budget: ["T"],
    dependencies: ["budget"],
    quantity: 1,
    static: true
  }
];

const stroller = [
  {
    sku: "MS050",
    name: "Joie juva classic O+ car seat",
    price: 29800,
    subcategory: "stroller",
    budget: ["T"],
    dependencies: ["budget", "answer to question"],
    quantity: 1
  },
  {
    sku: "MS051",
    name: "Joie, Gemm group O+ car seat",
    price: 31000,
    subcategory: "stroller",
    budget: ["balance", "budget"],
    dependencies: ["budget", "answer to question"],
    quantity: 1
  },
  {
    sku: "MS052",
    name: "Joie Everystage FX",
    price: 12000,
    subcategory: "stroller",
    budget: ["QP"],
    dependencies: ["budget", "answer to question"],
    quantity: 1
  }
];

const carSeatToys = [
  {
    sku: "MS053",
    name: "Taf toys garden spiral",
    price: 24000,
    subcategory: "Car Seat Toys",
    budget: ["T"],
    dependencies: ["budget"],
    quantity: 1
  },
  {
    sku: "MS054",
    name: "Taf toys music and lights play and kick car toy",
    price: 13000,
    subcategory: "Car Seat Toys",
    budget: ["BB", "QP"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const bouncersSwingsAndRockers = [
  {
    sku: "MS055",
    name: "Joie wish bouncer-petite city",
    price: 17000,
    subcategory: "Bouncers, Swings and Rockers",
    budget: ["T"],
    dependencies: ["budget"],
    quantity: 1
  },
  {
    sku: "MS056",
    name: "Joie, serina swivel",
    price: 19400,
    subcategory: "Bouncers, Swings and Rockers",
    budget: ["BB"],
    dependencies: ["budget"],
    quantity: 1
  },
  {
    sku: "MS057",
    name: "Joie serina 2-in-1 swing/rocker",
    price: 15000,
    subcategory: "Bouncers, Swings and Rockers",
    budget: ["QP"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const diaperBin = [
  {
    sku: "MS058",
    name: "Tommee Tippee sangenic diaper bin",
    price: 12100,
    subcategory: "Diaper bin",
    budget: ["QP"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const shoes = [
  {
    sku: "MS059",
    name: "Boys and girls: Rose et Chocolat Uniz white",
    price: 13000,
    subcategory: "Shoes",
    budget: ["QP"],
    dependencies: ["budget"],
    quantity: 1
  }
];

const travelCot = [
  {
    sku: "MS900",
    name: "joie kubbie compact travel cot-coal",
    price: 14000,
    budget: ["AB"],
    subcategory: "travel cot",
    dependencies: ["answer to question"],
    quantity: 1
  }
];

const CONSTANTS = {
  Categories: [nursery, travel, play, health, feeding, diapering, clothing],
  SubCategories: [
    mattresses,
    bedding,
    cribs,
    changingStation,
    monitors,
    carriers,
    playMatsAndActivityCentre,
    infantSeats,
    skinAndHairCare,
    bath,
    groomingAndHygiene,
    bottleFeeding,
    teethers,
    pumping,
    bibs,
    diaperBags,
    diapers,
    rompers,
    hats,
    mittens,
    cribsAndCots,
    changingPads,
    changingPadCovers,
    stroller,
    carSeatToys,
    bouncersSwingsAndRockers,
    shoes,
    travelCot,
    diaperBin
  ]
};

export default CONSTANTS;
