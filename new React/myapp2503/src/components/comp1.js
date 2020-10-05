import React, { Component } from "react";

export default class Comp1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div style={{ border: "1px solid black", height: "300px" }}>
          {this.props.children}
        </div>
        <table style={{ width: "100%", height: "400px" }}>
          <tr>
            <td style={{ width: "30%", height: "100%" }}>{this.props.comp2}</td>
            <td style={{ width: "70%", height: "100%" }}>{this.props.comp3}</td>
          </tr>
        </table>
      </div>
    );
  }
}
