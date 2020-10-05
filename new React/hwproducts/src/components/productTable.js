import React from "react";
import ProductRow from "./productRow";
import ProductCategoryRow from "./ProductCategoryRow";
import { Table } from "react-bootstrap";

const ProductTable = (props) => {
  const {
    products,
    showCategories,
    sortByName,
    sortByNameAscending,
    sortByPrice,
    sortByPriceAscending,
    sortByCategory,
    sortByCategoryAscending,
    activeSort,
  } = props;
  let lastCategory = "";
  let rows = [];

  products.map((product) => {
    if (showCategories && product.category !== lastCategory) {
      lastCategory = product.category;
      rows.push(
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }
    rows.push(
      <ProductRow
        key={product.id}
        product={product}
        isInStock={product.stocked}
        showCategories={showCategories}
      />
    );

    return rows;
  });

  return (
    <Table bordered hover>
      <thead>
        <tr>
          {!showCategories && (
            <th onClick={sortByCategory}>
              Category{" "}
              <span
                style={
                  activeSort === "category"
                    ? { color: "black" }
                    : { color: "#bbb" }
                }
              >
                <span>
                  {sortByCategoryAscending ? (
                    <i className="fas fa-sort-down"></i>
                  ) : (
                    <i className="fas fa-sort-up"></i>
                  )}
                </span>
              </span>
            </th>
          )}
          <th onClick={sortByName}>
            Name{" "}
            <span
              style={
                activeSort === "name" ? { color: "black" } : { color: "#bbb" }
              }
            >
              <span>
                {sortByNameAscending ? (
                  <i className="fas fa-sort-down"></i>
                ) : (
                  <i className="fas fa-sort-up"></i>
                )}
              </span>
            </span>
          </th>
          <th onClick={sortByPrice}>
            Price{" "}
            <span
              style={
                activeSort === "price" ? { color: "black" } : { color: "#bbb" }
              }
            >
              <span>
                {sortByPriceAscending ? (
                  <i className="fas fa-sort-down"></i>
                ) : (
                  <i className="fas fa-sort-up"></i>
                )}
              </span>
            </span>
          </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default ProductTable;
