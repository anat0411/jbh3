import React, { Component } from "react";
import "./ImageCSS.css";

export default class Image extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.src);
    return (
      <div className="col-md-6">
        <div className="description">{this.props.description}</div>
        <img
          src={this.props.src}
          alt=""
          max-width="400"
          height="270"
          className="thumbnail img"
        />
      </div>
    );
  }
}
