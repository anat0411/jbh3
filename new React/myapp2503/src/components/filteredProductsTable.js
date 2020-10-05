import React, { Component } from "react";

//------- 1. FilterableProductTable--------
export default class FilteredProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "", //search text
      inStockOnly: false // instock true/ false
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div>
        {/* Search Bar */}
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />

        {/* Search Bar */}
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

//------- 1.1  SearchBar--------
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  // onchanged input text changed

  handleFilterTextChange(e) {
    let currentValueText = e.target.value;
    //call parent handler (filtered products table)
    this.props.onFilterTextChange(currentValueText);
  }

  //onchanged radio textChanged

  handleInStockChange(e) {
    let currentCheckedStatus = e.target.checked;
    //call parent handler (filtered products table)
    this.props.onInStockChange(currentCheckedStatus);
  }

  render() {
    return (
      <form style={{ padding: "10px 0px" }}>
        <div class="row">
          <div class="col-lg-4">
            <input
              type="text"
              style={{ width: "100%" }}
              placeholder="Search..."
              value={this.props.filterText}
              onChange={this.handleFilterTextChange}
            />
          </div>
          <div class="col-lg-4">
            <div class="custom-control custom-checkbox">
              <input
                type="checkbox"
                onChange={this.handleInStockChange}
                className="custom-control-input"
                id="customSwitch1"
                checked={this.props.inStockOnly}
              ></input>
              <label className="custom-control-label" for="customSwitch1">
                {" "}
                Only show products in stock
              </label>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

//------ 1.2  ProductTable------
class ProductTable extends React.Component {
  render() {
    // filtering parameters from parents
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    // table rows components
    const rows = [];
    let lastCategory = null;

    // using filter methos //

    // var displayArr = this.props.products.filter(product => {
    //   var isInStoked = !inStockOnly || product.stocked;
    //   var isInText = product.name.indexOf(filterText) !== -1;
    //   return isInStocked && isInText;
    // });
    // //

    //array of components
    this.props.products.forEach(product => {
      //skip this product: filterText is not inside product.name (NOT CONTAINS)
      if (product.name.indexOf(filterText) === -1) {
        // -1 is the spot in the array/ there is no product if it's -1
        return;
      }

      //skip this product: state: stocked
      if (inStockOnly && !product.stocked) {
        return;
      }

      //new category
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table className="table">
        <thead>
          <tr class="table-dark">
            <th scope="col">שם מוצר</th>
            <th scope="col">מחיר</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

//----- 1.2.1 ProductCategoryRow-----
class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th
          colSpan="2"
          style={{ backgroundColor: "#D0D0D0", textDecoration: "underline" }}
        >
          {category}
        </th>
      </tr>
    );
  }
}

//------1.2.2 ProductRow------
class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    let styleStocked = product.stocked
      ? { color: "black" }
      : { color: "red", textDecoration: "line-through" };

    return (
      <tr className="table-active">
        <td style={styleStocked}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
