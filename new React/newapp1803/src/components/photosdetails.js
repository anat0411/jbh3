import React, { Component } from "react";

export default class PhotoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: {}
    };
  }

  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/photos/" +
        this.props.match.params.id
    )
      .then(response => response.json())
      .then(photoItem => {
        // console.log(photos);
        this.setState({ photo: photoItem });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.photo.title}</h1>
        <h6>{this.state.photo.id}</h6>
        <ul>
          <img alt="" src={this.state.photo.url}></img>
        </ul>
      </div>
    );
  }
}
