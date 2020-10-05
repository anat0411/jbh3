import React, { Component } from "react";
import "./Popup.css";
import Form from "./Form";

export default class Popup extends Component {
  handleClick = (e) => {
    e.stopPropagation();
  };
  render(props) {
    return (
      <div className="wrapper" onClick={this.props.close}>
        <div className="popup" onClick={this.handleClick}>
          <Form />
        </div>
      </div>
    );
  }
}
