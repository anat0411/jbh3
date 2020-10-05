import React, { Component } from "react";
import Employee from "./Employee";
import EmployeesContext from "../context/EmployeesContext";

export default class EmployeesList extends Component {
  static contextType = EmployeesContext;
  render() {
    return (
      <div>
        {this.context.employees.map((employee) => (
          <Employee key={employee.id} employee={employee} />
        ))}
      </div>
    );
  }
}

{
  /* <EmployeesContext.Consumer>
        {(context) => {
          context.employees &&
            context.employees.map((employee) => (
              <div key={employee.id}>
                <Employee employee={employee} />
              </div>
            ));
        }}
      </EmployeesContext.Consumer> */
}
