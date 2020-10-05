import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DisplayUsersComponent from "./users/displayUsers";
import EditUserComponent from "./editUsers/editUser";

class RouterComponent extends React.Component {
  constructor() {
    super();
    this.users = [];
  }
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/user">Users</Link>
            </li>
            <li>
              <Link to="/editUsers">Add Users</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route path="/editUsers">
              <EditUserComponent NewInfo={this.NewUser.bind(this)} />
            </Route>
            <Route path="/user">
              <DisplayUsersComponent users={this.users} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  NewUser(user) {
    console.log("New User Parent:", user);
    this.users.push(user);
  }
}

export default RouterComponent;
