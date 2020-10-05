import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ViewsImages from "./ViewsImages";
import PlanesImages from "./PlanesImages";
import PeopleImages from "./PeopleImages";
import AnimalsImages from "./AnimalsImages";
import "./MenuRouterCSS.css";

export default class MenuRouter extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <nav>
            <div className="row">
              <div className="col-md-3 linkHeader">
                <Link to="/views" className="linkHeader">
                  Views
                </Link>
              </div>
              <div className="col-md-3 linkHeader">
                <Link to="/planes" className="linkHeader">
                  Planes
                </Link>
              </div>
              <div className="col-md-3 linkHeader">
                <Link to="/people" className="linkHeader">
                  People
                </Link>
              </div>
              <div className="col-md-3 linkHeader">
                <Link to="/animals" className="linkHeader">
                  Animals
                </Link>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/planes">
              <PlanesImages />
            </Route>
            <Route path="/people">
              <PeopleImages />
            </Route>
            <Route path="/animals">
              <AnimalsImages />
            </Route>
            <Route path="/views">
              <ViewsImages />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
