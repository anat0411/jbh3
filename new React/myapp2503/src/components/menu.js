import React, { Component } from "react";
import { LoginInfoContext } from "../contexts/logingInfoContextProvider";

export default class Menu extends Component {
  static contextType = LoginInfoContext;

  changeLogin = () => {
    if (this.context.isLogin) {
      this.context.logout();
    } else {
      this.context.login();
    }
  };

  render() {
    let userData = this.context.isLogin
      ? this.context.userNameLogedIn
      : "NotLogged!";
    return (
      <div>
        {/* <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a
            onClick={e => this.changeLogin()}
            className="navbar-brand"
            href="#"
          >
            {userData}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">
                  Products
                </a>
              </li>
            </ul>
          </div>
        </nav> */}

        <LoginInfoContext.Consumer>
          {context => {
            return (
              <div>
                <h1>this is header</h1>
                <h3>{context.isLogin.toString()}</h3>
              </div>
            );
          }}
        </LoginInfoContext.Consumer>
      </div>
    );
  }
}
