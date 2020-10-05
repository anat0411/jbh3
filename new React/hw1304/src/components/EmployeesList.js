import React, { Component } from "react";
import Employee from "./Employee";
import EmployeesContext from "../context/EmployeesContext";

export default class EmployeesList extends Component {
  static contextType = EmployeesContext;
  render() {
    console.log(this.context);
    return (
      <div>
        {this.context.dataRes ? this.context.dataRes.length : 0}

        {this.context.dataRes.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </div>
    );
  }
}
