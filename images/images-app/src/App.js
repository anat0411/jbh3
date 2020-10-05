import React, { Component } from "react";
import ImagePage from "./components/image components/ImagesPage";
import MainHeader from "./components/headers/MainHeader";
import "./App.css";
import Parallax from "./components/image components/parallax/Parallax";
import SubHeader from "./components/headers/SubHeader";
import MenuRouter from "./components/Router/MenuRouter";
import Footer from "./components/headers/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader></MainHeader>
        <Parallax />
        <SubHeader />
        <MenuRouter />
        <Footer />
      </div>
    );
  }
}

export default App;
