import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class RenderTable extends Component {
  render() {
    const renderGames = ({ id, teamA, teamB, scoreA, scoreB }) => (
      <button
        className="btn col-md-4 mt-3 mb-3 btn-outline-primary ml-3 mr-3"
        key={id}
        onClick={() => {
          console.log(`pushing id number ${id}`);
          history.push({
            pathname: `/game/${id}`,
            state: { id, teamA, teamB, scoreA, scoreB },
          });
        }}
      >
        {teamA} VS {teamB}
      </button>
    );
    console.log(this.props);
    const { history } = this.props;
    return <div>{this.props.data.map(renderGames)}</div>;
  }
}

export default withRouter(RenderTable);
