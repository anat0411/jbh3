import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Comments from "./Comments";

class Game extends Component {
  render() {
    const data = this.props.location.state;
    console.log(this.props);
    return (
      <div>
        <h2>
          {data.teamA} VS {data.teamB}
        </h2>
        <div>Game Number: {data.id}</div>
        <div>
          Team Number 1: {data.teamA}, Score:
          {data.scoreA}
        </div>
        <div>
          Team Number 2: {data.teamB}, Score:
          {data.scoreB}
        </div>
        <Comments id={data.id} />
      </div>
    );
  }
}

export default withRouter(Game);
