// import FORMCONSTANTS from "./FORMCONSTANTS";

const DEFAULT_META = {
  quantity: 1,
  quantity_modifier: 0,
  quantity_limit: -1
};

const AB1 = {
  name: "Lenny Cot by Pinolino",
  sku: "WEHFNKPAY0E46J",
  meta: { per_child: true, quantity: "n", quantity_modifier: 0 }
};

const AB2 = {
  name: "madeline changer with storage by pinolino",
  sku: "7P1G3SG95ZCLWP",
  meta: null
};

const AB3 = {
  name: "Shaped changing mat-plastic white",
  sku: "8MNOC66HUSXZ68",
  meta: null
};

const AB4 = {
  name: "Shaped changing mats cover - dots",
  sku: "XV7UYUKLKGZ2Z2",
  meta: null
};

const AB5 = {
  name: "Joie wish bouncer-petite city",
  sku: "T2291BZPFX7TJ6",
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

const THRIFTY = returnFullArray();

export default THRIFTY;
