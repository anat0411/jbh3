import React, { Component } from "react";
import ProductTable from "./productTable";
import Search from "./Search";
import axios from "axios";

export class FilterableProductTable extends Component {
  state = {
    products: [],
    searchText: "",
    ignoreStockStatus: true,
    showCategories: true,
    sortByPriceAscending: true,
    sortByNameAscending: true,
    sortByCategoryAscending: true,
    activeSort: "name",
    filterByPriceValue: -1,
    minPrice: -1,
    maxPrice: -1,
  };

  componentDidMount() {
    const fetchData = async () => {
      const url = "./assets/products.json";

      const response = await axios.get(url);
      this.setState(
        {
          products: response.data,
        },
        () => {
          this.sortByName();
          const min = Math.min.apply(
            Math,
            this.state.products.map((product) =>
              parseFloat(product.price.slice(1, product.price.length))
            )
          );
          const max = Math.max.apply(
            Math,
            this.state.products.map((product) =>
              parseFloat(product.price.slice(1, product.price.length))
            )
          );

          this.setState({
            minPrice: min,
            maxPrice: max,
          });
        }
      );
    };

    fetchData();
  }

  searchTextChangedHandler = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  toggleShowInStockOnly = () =>
    this.setState({
      ignoreStockStatus: !this.state.ignoreStockStatus,
    });

  toggleShowCategories = () => {
    this.setState({
      showCategories: !this.state.showCategories,
    });
  };

  comparePriceAscending = (productA, productB) => {
    const priceA = parseFloat(productA.price.slice(1, productA.price.length));
    const priceB = parseFloat(productB.price.slice(1, productB.price.length));
    if (priceA > priceB) {
      return 1;
    }
    if (priceA < priceB) {
      return -1;
    }
    return 0;
  };

  sortByPrice = () => {
    const { products, sortByPriceAscending } = this.state;

    const productsToSort = [...products];
    sortByPriceAscending
      ? productsToSort.sort(this.comparePriceAscending)
      : productsToSort.sort(this.comparePriceAscending).reverse();

    this.setState({
      products: productsToSort,
      sortByPriceAscending: !this.state.sortByPriceAscending,
      activeSort: "price",
    });
  };

  compareNameAscending = (productA, productB) => {
    const nameA = productA.name;
    const nameB = productB.name;

    return nameA.localeCompare(nameB);
  };

  sortByName = () => {
    const { products, sortByNameAscending } = this.state;

    const productsToSort = [...products];
    sortByNameAscending
      ? productsToSort.sort(this.compareNameAscending)
      : productsToSort.sort(this.compareNameAscending).reverse();

    this.setState({
      products: productsToSort,
      sortByNameAscending: !this.state.sortByNameAscending,
      activeSort: "name",
    });
  };

  compareCategoryAscending = (productA, productB) => {
    const categoryA = productA.category;
    const categoryB = productB.category;

    return categoryA.localeCompare(categoryB);
  };

  sortByCategory = () => {
    const { products, sortByCategoryAscending } = this.state;

    const productsToSort = [...products];
    sortByCategoryAscending
      ? productsToSort.sort(this.compareCategoryAscending)
      : productsToSort.sort(this.compareCategoryAscending).reverse();

    this.setState({
      products: productsToSort,
      sortByCategoryAscending: !this.state.sortByCategoryAscending,
      activeSort: "category",
    });
  };

  filterByPriceRange = (e) => {
    this.setState({
      filterByPriceValue: parseInt(e.target.value),
    });
  };

  render() {
    const {
      products,
      searchText,
      ignoreStockStatus,
      showCategories,
      sortByPriceAscending,
      sortByNameAscending,
      sortByCategoryAscending,
      activeSort,
      filterByPriceValue,
      maxPrice,
      minPrice,
    } = this.state;

    let filteredProductsTmp = products.filter((product) => {
      return (
        product.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (ignoreStockStatus || product.stocked)
      );
    });
    if (filterByPriceValue !== -1) {
      filteredProductsTmp = filteredProductsTmp.filter((product) => {
        const price = parseFloat(product.price.slice(1, product.price.length));
        return (
          price >= ((maxPrice - minPrice) * filterByPriceValue) / 100 + minPrice
        );
      });
    }
    const filteredProducts = filteredProductsTmp;

    return (
      <div style={this.styles}>
        <Search
          searchText={searchText}
          searchTextChangedHandler={this.searchTextChangedHandler}
          isCheckedShowInStockOnly={!ignoreStockStatus}
          toggleShowInStockOnly={this.toggleShowInStockOnly}
          isCategoryShown={showCategories}
          toggleShowCategories={this.toggleShowCategories}
          filterByPriceRange={this.filterByPriceRange}
        />
        <br />

        <ProductTable
          products={filteredProducts}
          showCategories={showCategories}
          sortByName={this.sortByName}
          sortByNameAscending={sortByNameAscending}
          sortByPrice={this.sortByPrice}
          sortByPriceAscending={sortByPriceAscending}
          sortByCategory={this.sortByCategory}
          sortByCategoryAscending={sortByCategoryAscending}
          activeSort={activeSort}
        />
      </div>
    );
  }

  styles = {
    display: "inline-block",
    border: "1px solid orange",
    margin: "2rem 0 2rem 2rem",
    padding: "0.3rem",
  };
}

export default FilterableProductTable;
