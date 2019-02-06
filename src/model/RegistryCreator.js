import FORMCONSTANTS from "../constants/FORMCONSTANTS";

class RegistryCreator {
  constructor(registryArrays, formAnswers) {
    // super(registryArrays, formAnswers);

    const { location, gender, budget, wantsStroller } = formAnswers;

    let {
      ABNC,
      ABB,
      ABG,
      ABN,
      ABON,
      BB,
      T,
      QoP,
      TCS,
      OCS,
      QOPICSAS,
      OICSAS,
      TICS,
      BBICS,
      QOPICS
    } = registryArrays;

    this.birthLocation = location;
    this.gender = gender;
    this.budget = budget;
    this.wantsStroller = wantsStroller;

    this.acrossBoardArray = ABNC;
    this.acrossBoardBoysArray = ABB;
    this.acrossBoardGirlsArray = ABG;
    this.acrossBoardNigeriaArray = ABN;
    this.acrossBoardOutsideNigeriaArray = ABON;
    this.balancedBudgetArray = BB;
    this.thriftyArray = T;
    this.qualityOverPriceArray = QoP;
    this.thriftyCarSeatToysArray = TCS;
    this.otherCarSeatToysArray = OCS;
    this.qualityOverPriceInfantCarSeatsAndStrollerArray = QOPICSAS;
    this.otherInfantCarSeatAndStrollerArray = OICSAS;
    this.thriftyInfantCarSeatsArray = TICS;
    this.balancedBudgetInfantCarSeatsArray = BBICS;
    this.qualityOverPriceInfantCarSeatsArray = QOPICS;

    this.finalRegistryArray = [];
  }

  addAcrossBoardProducts = () => {
    this.finalRegistryArray = this.finalRegistryArray.concat(
      this.acrossBoardArray
    );
  };

  addAcrossBoardGenderProducts = () => {
    const isMale =
      this.gender.toLowerCase() == "male" || this.gender.toLowerCase() == "boy";

    if (isMale) {
      this.finalRegistryArray = this.finalRegistryArray.concat(
        this.acrossBoardBoysArray
      );
    } else {
      this.finalRegistryArray = this.finalRegistryArray.concat(
        this.acrossBoardGirlsArray
      );
    }
  };

  addAcrossBoardGeographyProducts = () => {
    const isNigeria = this.birthLocation.toLowerCase() == "nigeria";

    if (isNigeria) {
      this.finalRegistryArray = this.finalRegistryArray.concat(
        this.acrossBoardNigeriaArray
      );
    } else {
      this.finalRegistryArray = this.finalRegistryArray.concat(
        this.acrossBoardOutsideNigeriaArray
      );
    }
  };

  addBudgetBasedProducts = () => {
    const { BUDGET } = FORMCONSTANTS;
    switch (this.budget) {
      case BUDGET.THRIFTY:
        this.finalRegistryArray = this.finalRegistryArray.concat(
          this.thriftyArray
        );
        break;

      case BUDGET.BALANCEDBUDGET:
        this.finalRegistryArray = this.finalRegistryArray.concat(
          this.balancedBudgetArray
        );
        break;

      case BUDGET.QUALITYOVERPRICE:
        this.finalRegistryArray = this.finalRegistryArray.concat(
          this.qualityOverPriceArray
        );

        break;

      default:
        console.log("No Match ... Default Bugdet... Passed...");
    }
  };

  addCarSeatToysProducts = () => {
    const { BUDGET } = FORMCONSTANTS;

    if (this.birthLocation.toLowerCase() == "nigeria") {
      const ifThrifty = this.budget == BUDGET.THRIFTY;

      if (ifThrifty) {
        this.finalRegistryArray = this.finalRegistryArray.concat(
          this.thriftyCarSeatToysArray
        );
      } else {
        this.finalRegistryArray = this.finalRegistryArray.concat(
          this.otherCarSeatToysArray
        );
      }
    }
  };

  addInfantCarSeatProducts = () => {
    const { BUDGET } = FORMCONSTANTS;

    if (this.birthLocation.toLowerCase() == "nigeria") {
      //Case Stroller
      if (this.wantsStroller) {
        const ifQoP = this.budget == BUDGET.QUALITYOVERPRICE;

        if (ifQoP) {
          this.finalRegistryArray = this.finalRegistryArray.concat(
            this.qualityOverPriceInfantCarSeatsAndStrollerArray
          );
        } else {
          this.finalRegistryArray = this.finalRegistryArray.concat(
            this.otherInfantCarSeatAndStrollerArray
          );
        }
      }
      //Case No Stroller
      else {
        switch (this.budget) {
          case BUDGET.THRIFTY:
            this.finalRegistryArray = this.finalRegistryArray.concat(
              this.thriftyInfantCarSeatsArray
            );
            break;

          case BUDGET.BALANCEDBUDGET:
            this.finalRegistryArray = this.finalRegistryArray.concat(
              this.balancedBudgetInfantCarSeatsArray
            );
            break;

          case BUDGET.QUALITYOVERPRICE:
            this.finalRegistryArray = this.finalRegistryArray.concat(
              this.qualityOverPriceInfantCarSeatsArray
            );

            break;

          default:
            console.log("No Match ... Default Bugdet... Passed...");
        }
      }
    }
  };
}

export default RegistryCreator;
