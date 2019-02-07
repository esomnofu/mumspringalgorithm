// import FORMCONSTANTS from "./FORMCONSTANTS";

const DEFAULT_META = {
  quantity: 1,
  quantity_modifier: 0,
  quantity_limit: -1
};

const AB1 = {
  name: "viktoria 2 piece nursery furniture for multiple children",
  sku: "IJSJX71DW2T0HZ",
  meta: null
};

const AB2 = {
  name: "Cot Bed Viktoria - 1 piece",
  sku: "INVIJ713CIIKMM",
  meta: { per_child_minus_one: true, quantity: "n", quantity_modifier: -1 }
};

const AB3 = {
  name: "'Comfort' Changing Mat - White by Pinolino",
  sku: "89W1OVEAXPRMQ2",
  meta: null
};

const AB4 = {
  name: "Changing Cover Mats-Points Grey By Pinolino",
  sku: "BG1IM3HC1G4C69",
  meta: null
};

const AB5 = {
  name: "Motorola MBP667 Wi-Fi Connect Video Baby Monitor (UK-NG Plug)",
  sku: "NMVBSM08I1XURU",
  meta: null
};

const AB6 = {
  name: "Joie, Serina Swivel",
  sku: "E5AROFGF8Q5A3K",
  meta: { per_child: true, quantity: "n", quantity_modifier: 0 }
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

const BALANCEDBUDGET = returnFullArray();

export default BALANCEDBUDGET;
