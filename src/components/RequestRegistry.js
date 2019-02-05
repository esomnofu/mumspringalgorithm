import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RequestRegistry extends Component {
  state = {
    start: 1,
    end: 3,
    nosofbabies: "",
    gender: "",
    birthplace: "",
    babybase: "",
    shoppingStrategy: "",
    foreignaddress: "",
    longcountry: "",
    localaddress: "",
    breastpump: "",
    snoozing: "",
    recommendations: "",
    nursery: "",
    celebrity: "",
    cars: "",
    stroller: ""
  };

  render() {
    return (
      <div className="container">
        <div className="mb-3">
          <br />
          <button type="button" className="btn btn-primary">
            Steps{"     "}
            <span className="badge badge-light">
              {this.state.start} / {this.state.end}
            </span>
          </button>
        </div>

        {this.returnJsx()}
      </div>
    );
  }

  handleonChange = e => {
    const stateName = e.target.id;
    const newValue = e.target.value;
    this.setState({
      [stateName]: newValue
    });
  };

  handleSelect = event => {
    const index = event.nativeEvent.target.selectedIndex;
    const text = event.nativeEvent.target[index].text;

    const stateName = event.target.id;
    var newValue = text;

    newValue = stateName === "shoppingStrategy" ? index : text;

    this.setState({
      [stateName]: newValue
    });
  };

  handleSave = e => {
    e.preventDefault();
    this.setState({
      start: this.state.start + 1
    });
  };

  returnJsx = () => {
    if (this.state.start === 1) {
      return (
        <form>
          <div className="row">
            <div className="col">
              <label htmlFor=""> How many babies are you expecting ? </label>
              <input
                type="number"
                className="form-control"
                placeholder="No of babies?"
                id="nosofbabies"
                onChange={this.handleonChange}
              />
            </div>
            <div className="col">
              <label htmlFor=""> What is the gender you're expecting ?</label>
              <select
                className="form-control"
                onChange={this.handleSelect}
                id="gender"
              >
                <option value="" />
                <option value="">Boy</option>
                <option value="">Girl</option>
                <option value="">Don't know / One of each</option>
              </select>
            </div>
          </div>
          <br />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputState">
                Baby's place of birth will be ?
              </label>
              <select
                id="birthplace"
                className="form-control"
                onChange={this.handleSelect}
              >
                <option />
                <option>Nigeria</option>
                <option>Africa</option>
                <option>United Kingdom</option>
                <option>United States of America</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="inputState"> Where will baby be based?</label>
              <select
                id="babybase"
                className="form-control"
                onChange={this.handleSelect}
              >
                <option />
                <option>Same country as birth. We are keeping it simple</option>
                <option>
                  In a different country from birth country. This baby is a
                  globe-trotter.
                </option>
              </select>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="inputState">
                {" "}
                What's your shopping strategy ?
              </label>
              <select
                id="shoppingStrategy"
                className="form-control"
                onChange={this.handleSelect}
              >
                <option />
                <option>Go thrifty or go home</option>
                <option>
                  I'll probably spurge on a few things but this baby has a
                  budget
                </option>
                <option>
                  When it comes to the big stuff ,I'm more concerned with
                  quality over price
                </option>
              </select>
            </div>
          </div>
          <button
            className="btn btn-md btn-warning float-right"
            onClick={this.handleSave}
          >
            Save & Continue >>>
          </button>
        </form>
      );
    } else if (this.state.start === 2) {
      return (
        <form>
          <div className="row">
            <div className="col">
              <label>
                {" "}
                If baby is born abroad, what’s the foreign address for delivery
                ?{" "}
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Foreign Address?"
                id="foreignaddress"
                onChange={this.handleonChange}
              />
            </div>
            <div className="col">
              <label> How long will baby be in the country of birth ?</label>
              <select
                id="longcountry"
                className="form-control"
                onChange={this.handleSelect}
              >
                <option selected />
                <option>Less than 6 weeks</option>
                <option>6-8 weeks</option>
                <option>More than 8 weeks</option>
              </select>
            </div>
          </div>
          <br />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>What is your preferred local address for delivery?</label>

              <input
                type="text"
                className="form-control"
                placeholder="Delivery Local Address?"
                id="localaddress"
                onChange={this.handleonChange}
              />
            </div>

            <div className="form-group col-md-6">
              <label> Do you intend to use a breast pump ?</label>
              <select
                id="breastpump"
                className="form-control"
                onChange={this.handleSelect}
              >
                <option selected />
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="form-group col-md-12">
              <label> What's your baby's snoozing style ?</label>
              <select
                id="snoozing"
                className="form-control"
                onChange={this.handleSelect}
              >
                <option selected />
                <option>Co-sleeping, in or beside our bed</option>
                <option>In a bassinet in our room</option>
                <option>In a crib</option>
                <option>First in a bassinet and then in a crib</option>
              </select>
            </div>
          </div>
          <button
            className="btn btn-md btn-warning float-right"
            onClick={this.handleSave}
          >
            Save & Continue >>>
          </button>
        </form>
      );
    } else if (this.state.start === 3) {
      return (
        <form>
          <div className="row">
            <div className="col">
              <label>
                {" "}
                Is there anything else that you'd like to tell us that will help
                make better product recommendations ? ( e.g. nursery theme,
                colour scheme, whatsapp number, etc ) ?{" "}
              </label>
              <textarea
                className="form-control"
                id="recommendations"
                onChange={this.handleonChange}
              />
            </div>
            <div className="col">
              <label htmlFor="">
                {" "}
                Is your baby going to have his or her own nursery ?
              </label>
              <select
                id="nursery"
                className="form-control"
                onChange={this.handleSelect}
              >
                <option />
                <option>You Betcha</option>
                <option>Nope</option>
              </select>
            </div>
          </div>
          <br />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputState">
                Which celebrity most personifies your approach to baby planning
                ?
              </label>

              <select
                id="celebrity"
                className="form-control"
                onChange={this.handleSelect}
              >
                <option />
                <option>
                  Princess kate (I'll be planning everything to the finest
                  details- tell me absolutely everything ){" "}
                </option>
                <option>
                  Beyonce( Who runs the world!! I'm a busy mama on a mission-
                  just tell me what i absolutely need )
                </option>
              </select>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="inputState"> How many cars do you have ?</label>
              <select
                id="cars"
                className="form-control"
                onChange={this.handleSelect}
              >
                <option selected="selected" />
                <option>Zero</option>
                <option>One</option>
                <option>Two</option>
                <option>
                  We've got one, but the baby will ride in two( with the
                  nanny/grandparents/godmother)
                </option>
              </select>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="form-group col-md-12">
              <label htmlFor="inputState">
                {" "}
                Prefer a Stroller attached to baby's seat ?
              </label>
              <select
                id="stroller"
                className="form-control"
                onChange={this.handleSelect}
              >
                <option selected />
                <option>Yeah, sure!</option>
                <option>No, Thanks</option>
              </select>
            </div>
          </div>
          <button
            className="btn btn-md btn-success float-right"
            onClick={this.localDecideOutcome}
          >
            Submit
          </button>
        </form>
      );
    }
  };

  localDecideOutcome = e => {
    e.preventDefault();
    this.props.decideOutcome(this.state);
    this.props.history.push("/results");
  };
}

export default withRouter(RequestRegistry);
