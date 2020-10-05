import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FetchMovies from "./components/fetchMovies";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h2>Movies</h2>
        </div>
        <div className="row">
          <FetchMovies />
        </div>
      </div>
    );
  }
}

export default App;
