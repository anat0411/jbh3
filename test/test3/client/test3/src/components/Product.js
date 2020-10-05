import React, { Component } from "react";
import ProductsStock from "./ProductsStock";

export default class Product extends Component {
  render() {
    const data = this.props.product;

    return (
      <div className="col-md-3 card mt-3 mb-3">
        <div>{data.product_name}</div>
        <div>avaliable units: {data.product_units}</div>
        <div>last time units number was updated: {data.units_update_time}</div>
        <div>{data.manufacturer_name}</div>
        <div>
          <ProductsStock data={data} />
        </div>
      </div>
    );
  }
}
