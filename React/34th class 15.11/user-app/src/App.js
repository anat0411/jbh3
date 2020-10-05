import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/pageFile/pageFile";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <MainPage />
      </div>
    );
  }
}

export default App;
