import React from "react";
import "./bootstrap.min.css";
import Home from "./components/home";
import About from "./components/about";
import Photos from "./components/photos";
import Services from "./components/services";
import Navigator from "./components/navigator";
import PhotoDetails from "./components/photosdetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navigator></Navigator>

        <Switch>
          <Route path="/" exact={true} component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/photos" exact={true} component={Photos}></Route>
          <Route path="/photos/:id" component={PhotoDetails}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
