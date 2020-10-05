import React, { Component } from "react";
import SearchBar from "./searchBar";
import ProductTable from "./productTable";

export default class FilteredProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false
    };
  }

  render() {
    return (
      <div>
        <br></br>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          InStockOnlyChanged={this.InStockOnlyChanged}
          FilterTextChanged={this.FilterTextChanged}
        ></SearchBar>
      </div>
    );
  }

  InStockOnlyChanged = value => {
    alert(value);
  };

  FilterTextChanged = value => {
    alert(value);
  };
}
