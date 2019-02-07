// import FORMCONSTANTS from "./FORMCONSTANTS";

const DEFAULT_META = {
  quantity: 1,
  quantity_modifier: 0,
  quantity_limit: -1
};

const AB1 = {
  name: "Happy, little and loud baby short romper",
  sku: "S7FD8HXC97J0DX",
  meta: null
};

const AB2 = {
  name: "cool dragon baby short rompers",
  sku: "K240E8SBXA24NB",
  meta: null
};

const AB3 = {
  name: "3 piece set baby clothing",
  sku: "TSKQPIW9MF8OZQ",
  meta: null
};

const AB4 = {
  name: "3-piece hat  (beep!)",
  sku: "098BGHLSA4Z3MI",
  meta: null
};

const AB5 = {
  name: "3-piece mittens (beep!) ",
  sku: "QC08HYC1RHUAKF",
  meta: null
};

let tempArray = [AB1, AB2, AB3, AB4, AB5];

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

const ACROSSBOARDBOYS = returnFullArray();

export default ACROSSBOARDBOYS;
