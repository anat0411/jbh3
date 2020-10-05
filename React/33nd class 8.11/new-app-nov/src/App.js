import React from "react";
import logo from "./logo.svg";
import "./App.css";
import RouterComponent from "./components/routerComponent/routerComponent";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <RouterComponent />
        </div>
      </div>
    );
  }
}

export default App;
