import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Basketball from "./components/Basketball";
import Football from "./components/Football";
import Game from "./components/Game";
import history from "./history";

export default class App extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Welcome to our page!</h2>
        <h5 className="text-center">
          By clicking your chosen sport, you will find all the important info
        </h5>
        <Router>
          <div>
            <nav>
              <div className="btn ml-3 mr-3 btn-light col-md-3">
                <Link to="/football">Football</Link>
              </div>
              <div className="btn btn-light col-md-3">
                <Link to="/basketball">Basketball</Link>
              </div>
            </nav>

            <Switch history={history}>
              <Route path="/basketball">
                <Basketball />
              </Route>
              <Redirect exact from="/" to="football" />
              <Route path="/football">
                <Football />
              </Route>
              <Route path="/game/:id">
                <Game />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
