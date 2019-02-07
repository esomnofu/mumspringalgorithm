// import FORMCONSTANTS from "./FORMCONSTANTS";

const DEFAULT_META = {
  quantity: 1,
  quantity_modifier: 0,
  quantity_limit: -1
};

const AB1 = {
  name: "Baby magical fairy bodysuit pink",
  sku: "5PARABZ8QPPHLH",
  meta: null
};

const AB2 = {
  name: "5-piece starter set",
  sku: "EGBIKKN71XLH51",
  meta: null
};

const AB3 = {
  name: "3 piece set baby clothing mint",
  sku: "QC5R0NKBW37YLS",
  meta: null
};

const AB4 = {
  name: "knotted baby turbans (baby pink)",
  sku: "PFARKLJI2UJT0B",
  meta: null
};

const AB5 = {
  name: "3-piece hat (pink)",
  sku: "OGVKIT7A0O4HAP",
  meta: null
};

const AB6 = {
  name: "3-piece mittens (pink)",
  sku: "38RMNXTPSX0QD2",
  meta: null
};

let tempArray = [AB1, AB2, AB3, AB4, AB5, AB6];

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

const ACROSSBOARDGIRLS = returnFullArray();

export default ACROSSBOARDGIRLS;
