import React, { Component } from "react";
import RenderTable from "./RenderTable";

export default class Football extends Component {
  state = {
    games: [],
  };

  getGames = async () => {
    const res = await fetch("http://localhost:3001/football", {
      method: "GET",
      mode: "cors",
      credentials: "include",
    });

    const resJson = await res.json();
    console.log(resJson);
    this.setState({ games: resJson });
  };

  componentDidMount() {
    this.getGames();
  }

  render() {
    const { games } = this.state;
    console.log(games);
    return (
      <div>
        <RenderTable data={games} />
      </div>
    );
  }
}
