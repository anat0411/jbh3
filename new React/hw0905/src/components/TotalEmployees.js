import React, { Component } from "react";
import EmployeesComtext from "../context/EmployeesContext";

export default class TotalEmployees extends Component {
  static contextType = EmployeesComtext;

  render() {
    return <div>Total Employees {this.context.totalEmployees}</div>;
  }
}
