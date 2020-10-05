import React from "react";

const ProductRow = (props) => {
  const { product, isInStock, showCategories } = props;

  const styleToChoose = isInStock ? null : { color: "red", fontWeight: "bold" };

  return (
    <tr>
      {!showCategories && <td>{product.category}</td>}
      <td style={styleToChoose}>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  );
};

export default ProductRow;
