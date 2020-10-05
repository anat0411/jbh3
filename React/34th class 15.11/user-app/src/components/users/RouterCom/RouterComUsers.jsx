import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddUser from "../addUser";
import UsersList from "../usersList";

class RouterComponentUsers extends React.Component {
  constructor() {
    super();
    this.users = [{ name: "Anat", age: 21, phone: "9876545678" }];
  }
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/addUser">Add Account</Link>
            </li>
            <li>
              <Link to="/usersList">Accounts List</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route path="/addUser">
              <AddUser NewInfo={this.NewUser.bind(this)} />
            </Route>
            <Route path="/usersList">
              <UsersList users={this.users} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  NewUser(user) {
    console.log("New User Parent:", user);
    this.users.push(user);
    this.setState({});
  }
}

export default RouterComponentUsers;
