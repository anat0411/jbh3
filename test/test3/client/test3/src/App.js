import React from "react";
import "./App.css";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <header>Hello! here you can see al the products we have</header>
      <ProductsList />
    </div>
  );
}

export default App;
