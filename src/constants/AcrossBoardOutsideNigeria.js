// import FORMCONSTANTS from "./FORMCONSTANTS";

const DEFAULT_META = {
  quantity: 1,
  quantity_modifier: 0,
  quantity_limit: -1
};

const AB1 = {
  name: "Huggies Snug & Dry Diapers",
  sku: "5H4S8P3OK0665P",
  meta: { size: 2, quantity: 1, quantity_modifier: 0 }
};

const AB2 = {
  name: "Huggies Snug & Dry Diapers",
  sku: "7GMKNMZ88KQRAT",
  meta: { size: 3, quantity: 2, quantity_modifier: 0 }
};

const AB3 = {
  name: "Huggies One and Done baby Wipes (56pcs)",
  sku: "5R6L5WN06CHBBB",
  meta: {
    quantity: 1,
    quantity_modifier: 0
  }
};

let tempArray = [AB1, AB2, AB3];

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

const ACROSSBOARDOUTSIDENIGERIA = returnFullArray();

export default ACROSSBOARDOUTSIDENIGERIA;
