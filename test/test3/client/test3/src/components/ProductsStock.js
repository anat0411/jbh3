import React, { Component } from "react";

export default class ProductsStock extends Component {
  state = {
    units: "",
    units_update_time: this.props.data.units_update_time,
  };

  changeUnitsNumber = async () => {
    const data = this.props.data;
    const url = `http://localhost:3001/api/products/${data.product_id}/units`;
    const res = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        units: this.state.units,
      }),
    });

    const { success } = await res.json();

    //works, chrome needs to be refreshed so the data will shown on each card
  };

  handleChange = (e) => {
    this.setState({ units: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div>Update Stock</div>
          <input
            type="number"
            name="units"
            value={this.state.units}
            onChange={this.handleChange}
          />
          <button onClick={this.changeUnitsNumber} className="btn btn-primary">
            Update
          </button>
        </div>
      </div>
    );
  }
}
