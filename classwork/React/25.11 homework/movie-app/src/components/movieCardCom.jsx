import React from "react";

class MovieCardCom extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="card">
          <div>{this.props.movie_card.Title}</div>
          <div>{this.props.movie_card.Year}</div>
          <div>{this.props.movie_card.imdbID}</div>
          <img src={this.props.movie_card.Poster}></img>
          {/* needs to be in img tag */}
        </div>
      </div>
    );
  }
}

export default MovieCardCom;
