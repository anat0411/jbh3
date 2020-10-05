import React from "react";
import { Form } from "react-bootstrap";

const Search = (props) => {
  const {
    searchText,
    searchTextChangedHandler,
    isCheckedShowInStockOnly,
    toggleShowInStockOnly,
    isCategoryShown,
    toggleShowCategories,
    filterByPriceRange,
  } = props;

  return (
    <div style={styles}>
      <div>
        <input
          type="text"
          value={searchText}
          placeholder="Search..."
          onChange={searchTextChangedHandler}
        />
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={isCheckedShowInStockOnly}
          onClick={toggleShowInStockOnly}
          name="showInStockOnly"
        />
        <label htmlFor="showInStockOnly">Only show products in stock</label>
      </div>
      <div>
        <input
          type="checkbox"
          defaultChecked={isCategoryShown}
          onClick={toggleShowCategories}
          name="shouldGroupByCategory"
        />
        <label htmlFor="shouldGroupByCategory">Group By Category</label>
      </div>
      <Form style={{ border: "1px solid #cccc", padding: "0.3rem" }}>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Price: </Form.Label>
          <Form.Control
            type="range"
            defaultValue="0"
            onChange={filterByPriceRange}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

const styles = {
  display: "inline-block",
  padding: "0.7rem",
  margin: "0.2rem",
  border: "1px solid blue",
};

export default Search;
