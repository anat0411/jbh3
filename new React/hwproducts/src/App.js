import React, { Fragment } from "react";
import FilterableProductTable from "./components/FilterableProductTable";
import "./bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Fragment>
      <FilterableProductTable />
      <p style={{ marginLeft: "2rem" }}>
        Note: Red colored items are not in stock.
      </p>
    </Fragment>
  );
}

export default App;
