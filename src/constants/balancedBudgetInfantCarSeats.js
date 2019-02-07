// import FORMCONSTANTS from "./FORMCONSTANTS";

const DEFAULT_META = {
  quantity: 1,
  quantity_modifier: 0,
  quantity_limit: -1
};

const AB1 = {
  name: "Joie, Gemm group O+ car seat",
  sku: "WMLWGJY2AXT2PY",
  meta: {
    per_child_not_more_than_two: true,
    quantity: "n",
    quantity_modifier: -1,
    quantity_limit: 2
  }
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

const BALANCEDBUDGETINFANTCARSEATS = returnFullArray();

export default BALANCEDBUDGETINFANTCARSEATS;
