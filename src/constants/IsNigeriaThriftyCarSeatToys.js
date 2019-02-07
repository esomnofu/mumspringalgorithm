// import FORMCONSTANTS from "./FORMCONSTANTS";

const DEFAULT_META = {
  quantity: 1,
  quantity_modifier: 0,
  quantity_limit: -1
};

const AB1 = {
  name: "Taf toys garden spiral",
  sku: "E4JW0N3TBKYZ33",
  meta: null
};

let tempArray = [AB1];

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

const ISNIGERIATHRIFTYCARSEATS = returnFullArray();

export default ISNIGERIATHRIFTYCARSEATS;
