// import FORMCONSTANTS from "./FORMCONSTANTS";

const DEFAULT_META = {
  quantity: 1,
  quantity_modifier: 0,
  quantity_limit: -1
};

let AB1 = {
  name: "Mattress 140 x 70",
  sku: "479LCQO1LEC0VV",
  meta: {
    quantity: 1,
    quantity_modifier: 0
  }
};

let AB2 = {
  name: "Jersey Fitted Sheet For Cot Bed - Pack of 2",
  sku: "CUCLKZGHZD8NF1",
  meta: { color: "grey", per_child: true, quantity: "n", quantity_modifier: 0 }
};

let AB3 = {
  name: "Infantino flip 4-in-1convertible carrier",
  sku: "NL6OB3BWGSUSZ7",
  meta: null
};

let AB4 = {
  name: "Lamaze freddie the firefly gym",
  sku: "65XV3F9D1MZZ3X",
  meta: null
};

let AB5 = {
  name: "summer infant 4-in-1 super seat neutral",
  sku: "T55SML81MFLIHT",
  meta: null
};

let AB6 = {
  name: "Harry and Rose baby bath set",
  sku: "SOA1MBWXOSVT9O",
  meta: null
};

let AB7 = {
  name: "Harry and Rose baby soft lotion",
  sku: "SQSX9IU0AKSKRR",
  meta: {
    quantity: 3,
    quantity_modifier: 0
  }
};

let AB8 = {
  name: "Harry and Rose baby hair and body wash",
  sku: "H6P6MEEP8SE3HR",
  meta: {
    quantity: 2,
    quantity_modifier: 0
  }
};

let AB9 = {
  name: "Harry and Rose nappy spray",
  sku: "I9P1V2YBDM0PAA",
  meta: {
    quantity: 3,
    quantity_modifier: 0
  }
};

let AB10 = {
  name: "neat nursery co baby bath set + 3d grey print hooded towel",
  sku: "FV83OBY5KXDQMA",
  meta: null
};

let AB11 = {
  name:
    "Tommee Tippee closer to nature grooming kit + Boon sprig vertical drying rack",
  sku: "KQ1RTW4A1D96WU",
  meta: null
};

let AB12 = {
  name: "The teething egg",
  sku: "Z5JP7GNVA05UY5",
  meta: null
};

let AB13 = {
  name: "Silicone pump and white stopper combo",
  sku: "0QZI6MRE5PCVA7",
  meta: null
};

let AB14 = {
  name: "Tommee Tippee closer to nature newborn starter set",
  sku: "9OFOICY0CUXXTL",
  meta: null
};

let AB15 = {
  name: "Bib and burp",
  sku: "9673MZK83O8X0K",
  meta: null
};

let AB16 = {
  name: "Cosatto Supa change bag say hello",
  sku: "IWQ2SGCQIEVEB6",
  meta: null
};

let tempArray = [
  AB1,
  AB2,
  AB3,
  AB4,
  AB5,
  AB6,
  AB7,
  AB8,
  AB9,
  AB10,
  AB11,
  AB12,
  AB13,
  AB14,
  AB15,
  AB16
];

function setDefaultMetaIfEmpty(currVal, index, array) {
  if (!currVal.meta) {
    currVal.meta = DEFAULT_META;
    return currVal;
  }

  return currVal;
}

function returnFullArray() {
  return tempArray.map(setDefaultMetaIfEmpty);
}

const ACROSSBOARDNOCONDITIONS = returnFullArray();

export default ACROSSBOARDNOCONDITIONS;
