import React, { Component, Fragment } from "react";
import EmployeesContext from "./context/EmployeesContext";
import EmployeesList from "./components/EmployeesList";
import TotalEmployees from "./components/TotalEmployees";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: {},
      stillLoading: true,
      totalEmployees: 0,
    };
  }

  getData = async () => {
    const url = "https://reqres.in/api/users";
    const users = await fetch(url);
    const results = await users.json();

    this.setState({
      employees: results.data,
      stillLoading: false,
      totalEmployees: results.total,
    });
  };
  componentDidMount() {
    this.getData();
  }

  render() {
    const { employees, totalEmployees } = this.state;
    return (
      <div>
        {this.state.stillLoading ? (
          <div>loading</div>
        ) : (
          <EmployeesContext.Provider value={{ employees, totalEmployees }}>
            <Fragment>
              <TotalEmployees />
              <EmployeesList />
            </Fragment>
          </EmployeesContext.Provider>
        )}
      </div>
    );
  }
}
