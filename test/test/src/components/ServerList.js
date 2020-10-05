import React, { Component } from "react";
import ServerCard from "./ServerCard";

export default class ServerList extends Component {
  state = {
    serversList: [],
    onServers: [],
  };

  getAllData = async () => {
    const res = await fetch("http://localhost:3001/api/servers", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
    const resJson = await res.json();
    console.log("ALL SERVERS", resJson);
    this.setState({ serversList: resJson });
  };

  getOnServers = async () => {
    const res = await fetch("http://localhost:3001/api/server/onstatus", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });
    const resJson = await res.json();
    console.log("on servers:", resJson);
    this.setState({ onServers: resJson });
  };

  componentDidMount() {
    this.getAllData();
    this.getOnServers();
  }

  render() {
    const serversData = this.state.serversList;
    const onServersData = this.state.onServers;
    console.log(onServersData);

    const sortedArr = serversData.sort(function (a, b) {
      return new Date(a.created_on) - new Date(b.created_on);
    });
    console.log(sortedArr);

    return (
      <div className="container">
        <button>Sorted By Date</button>
        <div className="row">
          {sortedArr.map((server, index) => {
            return <ServerCard key={index} server={server} />;
          })}
        </div>
        <hr />
        <button>Sorted by status ON</button>
        <div className="row">
          {onServersData.map((server, index) => {
            console.log(server);
            return <ServerCard key={index} server={server} />;
          })}
        </div>
      </div>
    );
  }
}
