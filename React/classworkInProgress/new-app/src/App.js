import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RouterComponent from "./components/RouterComponent/RouterComponent";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <RouterComponent />
      </div>
    );
  }
}

export default App;
