import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photosData: []
    };
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(photos => {
        //console.log(photos)
        this.setState({ photosData: photos });
      });
  }

  render() {
    return (
      <div>
        <h1>Photos</h1>
        <ul>
          {this.state.photosData.map(photo => (
            <li>
              <Link to={"/photos/" + photo.id}>{photo.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
