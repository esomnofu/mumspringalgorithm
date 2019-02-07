// import FORMCONSTANTS from "./FORMCONSTANTS";

const DEFAULT_META = {
  quantity: 1,
  quantity_modifier: 0,
  quantity_limit: -1
};

const AB1 = {
  name: "Florentina 2-piece nursery",
  sku: "PX2RG68YAGFF4Z",
  meta: null
};

const AB2 = {
  name: "Cot Bed Florentina - 1 piece",
  sku: "5GX2H45HMI8T7R",
  meta: { per_child_minus_one: true, quantity: "n", quantity_modifier: -1 }
};

const AB3 = {
  name: "'Comfort' Changing Mat - White by Pinolino",
  sku: "5SNE2BAV9QH5Y0",
  meta: null
};

const AB4 = {
  name: "Changing Cover Mats-Points Grey By Pinolino",
  sku: "IUM97Q6ATM3JG8",
  meta: null
};

const AB5 = {
  name: "Motorola MBP667 Wi-Fi Connect Video Baby Monitor (UK-NG Plug)",
  sku: "736MWOWZ83NEQ2",
  meta: null
};

const AB6 = {
  name: "Tommee Tippee, No Touch Forehead Thermometer",
  sku: "85A3HSECJYI9OI",
  meta: null
};

const AB7 = {
  name: "Joie, Serina 2-in-1 Swing/Rocker",
  sku: "GQCNCSLFXTWJ8C",
  meta: { per_child: true, quantity: "n", quantity_modifier: 0 }
};

const AB8 = {
  name: "Tommee Tippee, Sangenic Diaper Bin",
  sku: "9MROMLPGIYJSHX",
  meta: null
};

const AB9 = {
  name: "Rose et Chocolat Uniz White",
  sku: "T30BZW1ZNBESXK",
  meta: { per_child: true, quantity: "n", quantity_modifier: 0 }
};

let tempArray = [AB1, AB2, AB3, AB4, AB5, AB6, AB7, AB8, AB9];

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

const QUALITYOVERPRICE = returnFullArray();

export default QUALITYOVERPRICE;
