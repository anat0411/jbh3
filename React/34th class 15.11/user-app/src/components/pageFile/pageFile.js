import React from "react";
// import AccountsCom from "../bankAccount/accountsCom/accountsCom";
// import UsersCom from "../users/usersCom/usersCom";
import RouterComponentBank from "../bankAccount/RouterCom.jsx/RouterComBank";
import RouterComponentUsers from "../users/RouterCom/RouterComUsers";

class MainPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">Users</div>
          <div className="col-md-6">Bank Accounts</div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <RouterComponentUsers />
          </div>
          <div className="col-md-6">
            <RouterComponentBank />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
