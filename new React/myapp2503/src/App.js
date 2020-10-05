import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./bootstrap.min.css";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Menu from "./components/menu";
import LogingInfoContextProvider from "./contexts/logingInfoContextProvider";

function App() {
  return (
    <div className="container">
      <LogingInfoContextProvider>
        <BrowserRouter>
          <Menu></Menu>
          <Switch>
            <Route path="/" exact={true} component={Home}></Route>

            <Route path="/about" component={About}></Route>
            <Route path="/products" component={Products}></Route>
          </Switch>
        </BrowserRouter>
      </LogingInfoContextProvider>
    </div>
  );
}

export default App;
