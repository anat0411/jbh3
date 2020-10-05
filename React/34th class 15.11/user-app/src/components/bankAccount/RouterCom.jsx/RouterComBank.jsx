import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AccountsList from "../accountsList";
import AddAccount from "../addAcount";

class RouterComponentBank extends React.Component {
  constructor() {
    super();
    this.accounts = [];
  }
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/addAcount">Add Account</Link>
            </li>
            <li>
              <Link to="/accountList">Accounts List</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route path="/addAcount">
              <AddAccount NewInfo={this.NewAccount.bind(this)} />
            </Route>
            <Route path="/accountList">
              <AccountsList accounts={this.accounts} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
  NewAccount(account) {
    console.log("New Account Parent:", account);
    this.accounts.push(account);
    this.setState({});
  }
}

export default RouterComponentBank;
