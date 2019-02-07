import FORMCONSTANTS from "../constants/FORMCONSTANTS";

class RegistryCreator {
  constructor(registryArrays, formAnswers) {
    const { location, gender, budget, wantsStroller, noOfbabies } = formAnswers;

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
    this.noOfbabies = noOfbabies;

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
    this.addItemsPerChildTrueToFinalArray(this.acrossBoardArray);
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
      this.addItemsPerChildTrueToFinalArray(this.acrossBoardNigeriaArray);
    } else {
      this.addItemsPerChildTrueToFinalArray(
        this.acrossBoardOutsideNigeriaArray
      );
    }
  };

  addBudgetBasedProducts = () => {
    const { BUDGET } = FORMCONSTANTS;
    switch (this.budget) {
      case BUDGET.THRIFTY:
        this.addItemsPerChildTrueToFinalArray(this.thriftyArray);
        break;

      case BUDGET.BALANCEDBUDGET:
        this.addItemsPerChildTrueToFinalArray(this.balancedBudgetArray);
        break;

      case BUDGET.QUALITYOVERPRICE:
        this.addItemsPerChildTrueToFinalArray(this.qualityOverPriceArray);
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
        this.addItemsPerChildTrueToFinalArray(this.thriftyCarSeatToysArray);
      } else {
        this.addItemsPerChildTrueToFinalArray(this.otherCarSeatToysArray);
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
          this.addItemsPerChildTrueToFinalArray(
            this.qualityOverPriceInfantCarSeatsAndStrollerArray
          );
        } else {
          this.addItemsPerChildTrueToFinalArray(
            this.otherInfantCarSeatAndStrollerArray
          );
        }
      }
      //Case No Stroller
      else {
        switch (this.budget) {
          case BUDGET.THRIFTY:
            this.addItemsPerChildTrueToFinalArray(
              this.thriftyInfantCarSeatsArray
            );
            break;

          case BUDGET.BALANCEDBUDGET:
            this.addItemsPerChildTrueToFinalArray(
              this.balancedBudgetInfantCarSeatsArray
            );
            break;

          case BUDGET.QUALITYOVERPRICE:
            this.addItemsPerChildTrueToFinalArray(
              this.qualityOverPriceInfantCarSeatsArray
            );
            break;

          default:
            console.log("No Match ... Default Bugdet... Passed...");
        }
      }
    }
  };

  addItemsPerChildTrueToFinalArray = itemArray => {
    itemArray.forEach(item => {
      const originalQuantity = item.meta.quantity;
      const isSameAsChildQuantity = originalQuantity == "n";
      const shouldImplementQuantityLimit = item.meta.quantity_limit > 0;
      const quantityLimit = item.meta.quantity_limit;

      //if the quantity == "n"
      if (isSameAsChildQuantity) {
        //set the items quantity to the same quantity as the number of children the person is having
        let finalQuantity = this.noOfbabies + item.meta.quantity_modifier;
        finalQuantity =
          shouldImplementQuantityLimit && finalQuantity > quantityLimit
            ? quantityLimit
            : finalQuantity;

        if (finalQuantity > 0) {
          for (let i = 0; i < finalQuantity; i++) {
            const copyItem = Object.assign({}, item);
            copyItem.quantity = 1;
            this.finalRegistryArray.push(copyItem);
          }
        }
      } else {
        let finalQuantity = originalQuantity + item.meta.quantity_modifier;
        finalQuantity =
          shouldImplementQuantityLimit && finalQuantity > quantityLimit
            ? quantityLimit
            : finalQuantity;

        for (let i = 0; i < finalQuantity; i++) {
          const copyItem = Object.assign({}, item);
          copyItem.quantity = 1;
          this.finalRegistryArray.push(copyItem);
        }
      }
    });
  };

  addItemsPerChildAndPerChildMinusOneToFinalArray = itemArray => {
    itemArray.forEach(item => {
      const meta = item.meta;
      let nosOfBabies = this.noOfbabies;
      if (meta !== null) {
        if (meta.per_child_minus_one) {
          while (nosOfBabies > 1) {
            this.finalRegistryArray.push(item);
            nosOfBabies -= 1;
          }
        }

        if (meta.per_child) {
          while (nosOfBabies > 0) {
            this.finalRegistryArray.push(item);
            nosOfBabies -= 1;
          }
        }
      } else {
        this.finalRegistryArray.push(item);
      }
    });
  };

  addItemsNotMoreThanTwoToFinalArray = itemArray => {
    const { CARSEAT } = FORMCONSTANTS;
    itemArray.forEach(item => {
      const meta = item.meta;
      let nosOfBabies =
        this.noOfbabies > CARSEAT.MAXIMUM
          ? CARSEAT.MAXIMUM + 1
          : this.noOfbabies;
      if (meta !== null) {
        if (meta.per_child_not_more_than_two) {
          while (nosOfBabies > 1) {
            this.finalRegistryArray.push(item);
            nosOfBabies -= 1;
          }
        }
      } else {
        this.finalRegistryArray.push(item);
      }
    });
  };
}

export default RegistryCreator;
