import React from "react";
import AccountsList from "../accountsList";
import AddAccount from "../addAcount";

class AccountsCom extends React.Component {
  constructor() {
    super();
    this.accounts = [];
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Accounts List</h2>
        </div>
        <div className="row">
          <AccountsList accounts={this.accounts} />
        </div>
        <div className="row">
          <h2>Add Account</h2>
        </div>
        <div className="row">
          <AddAccount NewInfo={this.NewAccount.bind(this)} />
        </div>
      </div>
    );
  }
  NewAccount(account) {
    console.log("New Account Parent:", account);
    this.accounts.push(account);
    this.setState({});
  }
}

export default AccountsCom;
