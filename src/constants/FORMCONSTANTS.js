//IMPORTING CONSTANT FILES
import ACROSSBOARDBOYS from "./AcrossBoardBoys";
import ACROSSBOARDGIRLS from "./AcrossBoardGirls";
import ACROSSBOARDNIGERIA from "./AcrossBoardNigeria";
import ACROSSBOARDNOCONDITIONS from "./AcrossBoardNoConditions";
import ACROSSBOARDOUTSIDENIGERIA from "./AcrossBoardOutsideNigeria";
import BALANCEDBUDGET from "./BalancedBudget";
import BALANCEDBUDGETINFANTCARSEATS from "./balancedBudgetInfantCarSeats";
import ISNIGERIAOTHERCARSEATSTOYS from "./IsNigeriaOtherCarSeatToys";
import ISNIGERIATHRIFTYCARSEATTOYS from "./IsNigeriaThriftyCarSeatToys";
import OTHERINFANTCARSEATSANDSTROLLER from "./OtherInfantCarSeatsAndStroller";
import QUALITYOVERPRICE from "./QualityOverPrice";
import QUALITYOVERPRICEINFANTCARSEATS from "./qualityOverPriceInfantCarSeats";
import QUALITYOVERPRICEINFANTCARSEATSANDSTROLLER from "./QualityOverPriceInfantCarSeatsAndStroller";
import THRIFTY from "./Thrifty";
import THRIFTYINFANTCARSEATS from "./thriftyInfantCarSeats";

const FORMCONSTANTS = {
  FACTORS: {
    GEOGRAPHY: 0,
    GENDER: 1,
    BUDGET: 2,
    STROLLER: 3
  },

  BUDGET: {
    THRIFTY: 1,
    BALANCEDBUDGET: 2,
    QUALITYOVERPRICE: 3
  },

  CARSEAT: {
    MAXIMUM: 2
  },

  registryArray: {
    ABNC: ACROSSBOARDNOCONDITIONS,
    ABB: ACROSSBOARDBOYS,
    ABG: ACROSSBOARDGIRLS,
    ABN: ACROSSBOARDNIGERIA,
    ABON: ACROSSBOARDOUTSIDENIGERIA,
    BB: BALANCEDBUDGET,
    T: THRIFTY,
    QoP: QUALITYOVERPRICE,
    TCS: ISNIGERIATHRIFTYCARSEATTOYS,
    OCS: ISNIGERIAOTHERCARSEATSTOYS,
    QOPICSAS: QUALITYOVERPRICEINFANTCARSEATSANDSTROLLER,
    OICSAS: OTHERINFANTCARSEATSANDSTROLLER,
    TICS: THRIFTYINFANTCARSEATS,
    BBICS: BALANCEDBUDGETINFANTCARSEATS,
    QOPICS: QUALITYOVERPRICEINFANTCARSEATS
  },

  DEFAULT_META: {
    quantity: 1,
    quantity_modifier: 0,
    quantity_limit: -1
  }
};

export default FORMCONSTANTS;
