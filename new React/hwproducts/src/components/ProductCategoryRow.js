import React from "react";
import "./productCategoryRow.styles.css";

const ProductCategoryRow = ({ category }) => {
  return (
    <tr className="category">
      <td colSpan="2">{category}</td>
    </tr>
  );
};

export default ProductCategoryRow;
