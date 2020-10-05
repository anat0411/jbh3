import React, { Component } from "react";

export default class Employee extends Component {
  render(props) {
    return (
      <div className="container">
        <div>Employee Number {this.props.employee.id}</div>

        <div>{this.props.employee.first_name}</div>
        <div>{this.props.employee.last_name}</div>
        <div>{this.props.employee.email}</div>
        <img src={this.props.employee.avatar}></img>
      </div>
    );
  }
}
