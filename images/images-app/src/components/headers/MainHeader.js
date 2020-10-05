import React, { Component } from "react";
import "./headerCSS.css";

export default class MainHeader extends Component {
  render() {
    return (
      <div className="container headerContainer">
        <div className="headerWrapp">
          <div className="header">Anat's Gallary</div>
          <div className="subHeader">
            When Was The Last Time You've Visited a Gallary?
          </div>
        </div>
      </div>
    );
  }
}
