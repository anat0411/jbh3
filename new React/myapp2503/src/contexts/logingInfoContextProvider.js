import React, { Component, createContext } from "react";

//global context API Creted in react
export const LoginInfoContext = createContext();

export default class LoginInfoContextProvider extends Component {
  state = {
    isLogin: true,
    userNameLogedIn: "gs"
  };

  login = () => {
    this.setState({ isLogin: true });
  };

  logout = () => {
    this.setState({ isLogin: false });
  };

  render() {
    return (
      <LoginInfoContext.Provider
        value={{ ...this.state, login: this.login, logout: this.logout }}
      >
        {this.props.children}
      </LoginInfoContext.Provider>
    );
  }
}
