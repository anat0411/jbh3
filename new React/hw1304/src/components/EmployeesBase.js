import React from "react";
import { useState, useEffect, Fragment } from "react";
import TotalEmployees from "./TotalEmployees";
import EmployeesList from "./EmployeesList";
import EmployeesContext from "../context/EmployeesContext";

const EmployeesBase = () => {
  const [dataRes, setDataRes] = useState({});
  const [stillLoading, setStillLoading] = useState(true);
  const [totalEmployees, setTotalEmployees] = useState(0);

  const getData = async () => {
    const url = "https://reqres.in/api/users";
    const users = await fetch(url);
    const results = await users.json();

    setDataRes(results.data);
    setStillLoading(false);
    setTotalEmployees(results.total);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {stillLoading ? (
        <div>loading</div>
      ) : (
        <EmployeesContext.Provider value={{ dataRes, totalEmployees }}>
          <Fragment>
            <TotalEmployees />
            <EmployeesList />
          </Fragment>
        </EmployeesContext.Provider>
      )}
    </div>
  );
};
export default EmployeesBase;
