// import FORMCONSTANTS from "./FORMCONSTANTS";

const DEFAULT_META = {
  quantity: 1,
  quantity_modifier: 0,
  quantity_limit: -1
};

const AB1 = {
  name: "Molfix baby wipes 60 count",
  sku: "NUSM3K4QGSR5U4",
  meta: {
    quantity: 1,
    quantity_modifier: 0
  }
};

const AB2 = {
  name: "1-Newborn-small pack (2kg-5kg) 12 count",
  sku: "6611B81CZ8FR2F",
  meta: {
    quantity: 1,
    quantity_modifier: 0
  }
};

const AB3 = {
  name: "1-Newborn Twin pack (3kg-5kg) 44 count",
  sku: "SG0D54VU0NYRR6",
  meta: {
    quantity: 1,
    quantity_modifier: 0
  }
};

const AB4 = {
  name: "2-mini small pack (3kg-6kg) 10 count",
  sku: "RTFYOZPB3Q0TJT",
  meta: {
    quantity: 1,
    quantity_modifier: 0
  }
};

const AB5 = {
  name: "2-mini-Jumbo-pack  (3kg-6kg) 96 count",
  sku: "C0PL7OSW4K1XLI",
  meta: {
    quantity: 1,
    quantity_modifier: 0
  }
};

const AB6 = {
  name: "3-midi-small-pack (4kg- 9kg) 9 count",
  sku: "P16F8OO7Y5Y596",
  meta: {
    quantity: 1,
    quantity_modifier: 0
  }
};

const AB7 = {
  name: "3-midi-twin-pack (4kg- 9kg) 36 count",
  sku: "R9G4Q8TKVSAR7I",
  meta: {
    quantity: 1,
    quantity_modifier: 0
  }
};

const AB8 = {
  name: "3-midi-jumbo-pack (4kg- 9kg) 88 count",
  sku: "OKBJ0LJEM3L0O9",
  meta: {
    quantity: 1,
    quantity_modifier: 0
  }
};

let tempArray = [AB1, AB2, AB3, AB4, AB5, AB6, AB7, AB8];

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

const ACROSSBOARDNIGERIA = returnFullArray();

export default ACROSSBOARDNIGERIA;
