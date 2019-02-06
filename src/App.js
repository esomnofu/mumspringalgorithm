import React, { Component } from "react";
import RequestRegistry from "./components/RequestRegistry";
import RequestResults from "./components/RegistryResults";
import CONSTANTS from "./constants/Categories";
import { BrowserRouter, Route } from "react-router-dom";

import FORMCONSTANTS from "./constants/FORMCONSTANTS";

//Import Model
import RegistryCreator from "./model/RegistryCreator";

class App extends Component {
  state = {
    //final Arr of objs returned to registry after logic
    cart: [],
    type: "",
    formAnswers: {
      location: "nigeria",
      gender: "boy",
      budget: 2,
      wantsStroller: true,
      noOfbabies: 3
    }
  };

  componentDidMount() {
    this.testRegistryCreator();
  }

  decideExpectantMotherFactory = object => {
    switch (object.shoppingStrategy) {
      case 1:
        this.produceRegistryForThrifter(object);
        this.setState({ type: "Thrifter" });
        break;

      case 2:
        this.produceRegistryForBalancedBudget(object);
        this.setState({ type: "Balanced Budget" });
        break;

      case 3:
        this.produceRegistryForQualityOverPrice(object);
        this.setState({ type: "Quality over Price" });
        break;

      default:
        console.log("No expectant case found");
    }
  };

  produceRegistryForThrifter = object => {
    //Get Categories and Sub Categories
    const categories = CONSTANTS.Categories;
    const subcategories = CONSTANTS.SubCategories;
    var newArray = [];

    //Iterate Category
    categories.forEach(category => {
      category.forEach(cat => {
        //Iterate Sub Category
        subcategories.forEach(subs => {
          subs.forEach(sub => {
            //Start Doing Logics for each sub category

            if (
              cat.toLocaleLowerCase() === sub.subcategory.toLocaleLowerCase()
            ) {
              const budget = sub.budget;
              //For Now - Add objects to cart based on budget
              if (budget.includes("AB") || budget.includes("T")) {
                newArray.push(sub);
              }
            }
          });
        });
      });
    });

    this.setState({
      cart: newArray
    });

    setTimeout(() => {}, 1000);
  };

  produceRegistryForBalancedBudget = object => {
    //Get Categories and Sub Categories
    const categories = CONSTANTS.Categories;
    const subcategories = CONSTANTS.SubCategories;
    var newArray = [];

    //Iterate Category
    categories.forEach(category => {
      category.forEach(cat => {
        //Iterate Sub Category
        subcategories.forEach(subs => {
          subs.forEach(sub => {
            //Start Doing Logics for each sub category
            if (
              cat.toLocaleLowerCase() === sub.subcategory.toLocaleLowerCase()
            ) {
              const budget = sub.budget;
              //For Now - Add objects to cart based on budget
              if (budget.includes("AB") || budget.includes("BB")) {
                newArray.push(sub);
              }
            }
          });
        });
      });
    });

    this.setState({
      cart: newArray
    });

    setTimeout(() => {
      // this.props.history.push("/results");
    }, 1000);
  };

  produceRegistryForQualityOverPrice = object => {
    //Get Categories and Sub Categories
    const categories = CONSTANTS.Categories;
    const subcategories = CONSTANTS.SubCategories;
    var newArray = [];

    //Iterate Category
    categories.forEach(category => {
      category.forEach(cat => {
        //Iterate Sub Category
        subcategories.forEach(subs => {
          subs.forEach(sub => {
            //Start Doing Logics for each sub category
            if (
              cat.toLocaleLowerCase() === sub.subcategory.toLocaleLowerCase()
            ) {
              const budget = sub.budget;
              //For Now - Add objects to cart based on budget
              if (budget.includes("AB") || budget.includes("QP")) {
                newArray.push(sub);
              }
            }
          });
        });
      });
    });

    this.setState({
      cart: newArray
    });

    setTimeout(() => {}, 1000);
  };

  //KAITECH MUMSPRING TESTING
  //KAITECH MUMSPRING TESTING
  //KAITECH MUMSPRING TESTING
  testRegistryCreator = () => {
    //grab registryArray From Constants
    const { registryArray } = FORMCONSTANTS;
    // RegistryCreator creator = new RegistryCreator(registryArray);
    //Pass registryArray and formAnswers to Class
    let registryCreatorHandler = new RegistryCreator(
      registryArray,
      this.state.formAnswers
    );

    //Start Calling Class Methods
    //First - Add All AcrossBoard
    registryCreatorHandler.addAcrossBoardProducts();
    registryCreatorHandler.addAcrossBoardGenderProducts();
    registryCreatorHandler.addAcrossBoardGeographyProducts();
    registryCreatorHandler.addBudgetBasedProducts();
    registryCreatorHandler.addCarSeatToysProducts();
    registryCreatorHandler.addInfantCarSeatProducts();
    console.log(
      "Final Array Products for these form answers combination is: ",
      this.state.formAnswers
    );
    console.log("");
    console.log(registryCreatorHandler.finalRegistryArray);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route
            exact
            path="/"
            render={() => (
              <RequestRegistry
                decideOutcome={this.decideExpectantMotherFactory}
              />
            )}
          />
          <Route
            path="/questions"
            render={() => (
              <RequestRegistry
                decideOutcome={this.decideExpectantMotherFactory}
              />
            )}
          />
          <Route
            path="/results"
            render={() => (
              <RequestResults cart={this.state.cart} type={this.state.type} />
            )}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
