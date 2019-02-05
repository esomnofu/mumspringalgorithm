import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RegistryResults extends Component {
  state = {};
  render() {
    const { cart } = this.props;
    var totalCost = 0;
    var tableBody = cart.map((item, index) => {
      totalCost += item.price;
      return (
        <tr key={index}>
          <td>{item.sku}</td>
          <td>{item.subcategory}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
        </tr>
      );
    });

    return (
      <div className="container">
        <br />
        <h5 className="text-primary text-center mb-3">
          {" "}
          Registry List for {this.props.type}{" "}
          <span className="float-right">
            <button
              className="btn btn-sm btn-info"
              onClick={() => this.props.history.push("/")}
            >
              {" "}
              Go to Questions{" "}
            </button>
          </span>
        </h5>
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>SKU</th>
              <th>Sub Category</th>
              <th>Item Name</th>
              <th>Item Price</th>
            </tr>
          </thead>

          <tbody>
            {tableBody}
            <tr>
              <td colSpan="3">
                {" "}
                <strong>Total Cost For Registry </strong>{" "}
              </td>
              <td>
                <strong>&#8358; {this.numberWithCommas(totalCost)}.00</strong>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="alert alert-info">
          <p>
            Remember to get stocks ready before Due Date of:{" "}
            <strong> 12th February 2019 </strong>
          </p>
        </div>
      </div>
    );
  }

  numberWithCommas = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
}

export default withRouter(RegistryResults);
