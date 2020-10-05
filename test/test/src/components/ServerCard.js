import React, { Component } from "react";

export default class ServerCard extends Component {
  changeStatus = async () => {
    const res = await fetch(
      `http://localhost:3001/api/server/${this.props.server.status}`,
      {
        method: "GET",
        mode: "cors",
        credentials: "include",
      }
    );

    const resJson = await res.json();
    console.log(resJson);
  };
  render() {
    const data = this.props.server;
    console.log(data);

    return (
      <div className="col-md-3 card mt-3 mb-3">
        <button className="btn btn-primary" onClick={this.changeStatus}>
          Change Status
        </button>
        <div>{data.server_name}</div>
        <div>{data.IP}</div>
        <div>{data.company_name}</div>
        <div>{data.created_on}</div>
      </div>
    );
  }
}
