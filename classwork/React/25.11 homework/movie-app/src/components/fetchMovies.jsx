import React from "react";
import MovieCardCom from "./movieCardCom";

class FetchMovies extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    movies: []
  };

  getMovies = () => {
    let api = "21af947d";
    let url = "http://www.omdbapi.com";
    let search = "one";
    fetch("http://www.omdbapi.com?apikey=" + api + "&s=" + search, {
      method: "get",
      query: JSON.stringify({ apikey: "21af947d", s: search })
      //   headers: {
      //     "Content-Type": "application/json"
      //   }
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(res => {
        console.log("Res2: ", res);
        this.setState({ movies: res.Search });
        console.log(this.state.movies);
      })
      .catch(err => {
        console.error(err);
      });
  };

  componentDidMount() {
    var movies = this.getMovies();

    if (this.state.movies.length <= 0) {
      return;
    } else {
      this.setState({ movies: movies });
    }
  }

  render() {
    console.log(this.state.movies);
    return (
      <div className="container">
        <div className="row">
          <label>Search For Movie: </label>
          <input id="search"></input>
          {/* <img src="data:image/png;base64,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"></img> */}
        </div>
        <div className="row">
          {this.state.movies.map((movie, index) => {
            return <MovieCardCom key={index} movie_card={movie} />;
          })}
        </div>
      </div>
    );
  }
}

export default FetchMovies;
