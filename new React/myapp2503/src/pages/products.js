import React, { Component } from "react";
// import FilteredProducts from "../products/filteredProducts";
import FilteredProductTable from "../components/filteredProductsTable";
import { LoginInfoContext } from "../contexts/logingInfoContextProvider";

let Test = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football"
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball"
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball"
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch"
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5"
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
];

export default class Products extends Component {
  //conected to provider data
  static contextType = LoginInfoContext;

  render() {
    console.log(this.context);

    let content;
    if (!this.context.isLogin) {
      content = <h1>Not logged in</h1>;
    } else {
      content = <FilteredProductTable products={Test}></FilteredProductTable>;
    }
    return (
      <div className="row">
        <div className="col-lg-12">
          <h1>Filtering Products Demo</h1>

          {/* <FilteredProductTable products={Test}></FilteredProductTable> */}
        </div>
        {/* <FilteredProducts data={pruductsTest}></FilteredProducts> */}
        {content}
      </div>
    );
  }
}
