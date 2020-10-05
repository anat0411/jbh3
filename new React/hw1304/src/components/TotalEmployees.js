import React, { Component } from "react";
import EmployeesComtext from "../context/EmployeesContext";

export default class TotalEmployees extends Component {
  static contextType = EmployeesComtext;

  render() {
    console.log(this.context);
    return <div>Total Employees {this.context.totalEmployees}</div>;
  }
}
