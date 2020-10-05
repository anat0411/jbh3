import React, { Component } from "react";
import Product from "./Product";

export default class ProductsList extends Component {
  state = {
    productsList: [],
    sortedProducts: false,
    searchInput: "",
    // productsNamesFound:[]
  };

  getAllData = async () => {
    const res = await fetch("http://localhost:3001/api/products", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
    const resJson = await res.json();
    this.setState({ productsList: resJson });
  };

  componentDidMount() {
    this.getAllData();
  }

  sortProducts = () => {
    let products = [...this.state.productsList];

    //Sort
    if (this.state.sortedProducts) {
      products = products.sort((a, b) => {
        return a.product_units - b.product_units;
      });
    }

    //Search input- doesn't work

    // if (this.state.searchInput.length > 3) {
    //   products.map((product, name) => {
    //     name = product.product_name;
    //     name.includes(this.state.searchInput)
    //       ? show card
    //       : do nothing;
    //   });
    // }

    return products.map((product) => (
      <div key={product.product_id} className="row">
        <Product key={product.product_id} product={product} />
      </div>
    ));
  };

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div>Search: </div>
        <input
          id="text"
          type="text"
          onChange={this.handleChange}
          value={this.state.searchInput}
        />
        <div className="checkbox-wrapper">
          <input
            id="checkbox"
            type="checkbox"
            value={this.state.sortedProducts}
            onChange={(e) =>
              this.setState({ sortedProducts: e.target.checked })
            }
            onClick={this.sortProducts}
          />
        </div>
        <div>Sorted</div>
        {this.sortProducts()}
      </div>
    );
  }
}
