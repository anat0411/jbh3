import React, { Component } from "react";
import ProfileContext from "../../contexts/ProfileContext";

class ProfileButton extends Component {
  static contextType = ProfileContext;

  render() {
    return (
      <button onClick={this.context.toggleImage}>Toggle Image Profile</button>
    );
  }
}

export default ProfileButton;
