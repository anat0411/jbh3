import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeComponent from "./Home/HomeComponent";
import AboutComponent from "./About/AboutComponent";
import GalleryComponent from "./Gallery/GalleryComponent";

class RouterComponent extends React.Component {
  state = {
    name: "RouterComponent"
  };
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
          </ul>
        </nav>
        <div>
          <h2>RouterComponent</h2>
          {/* <HomeComponent />
                    <AboutComponent />
                    <GalleryComponent /> */}
          <Switch>
            <Route path="/about">
              <AboutComponent />
            </Route>
            <Route path="/gallery">
              <GalleryComponent />
            </Route>
            <Route path="/">
              <HomeComponent />
            </Route>
            <Route path="/home">
              <HomeComponent />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default RouterComponent;
