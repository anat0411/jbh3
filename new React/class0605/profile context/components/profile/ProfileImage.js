import React, { Component } from "react";
import ProfileContext from "../../contexts/ProfileContext";

class ProfileImage extends Component {
  static contextType = ProfileContext;

  render() {
    const { picture } = this.context.profileData;
    const large = picture && picture.large;
    const medium = picture && picture.medium;

    return (
      <div>
        <img src={large} />
        <img src={medium} />
      </div>
    );
  }
}

export default ProfileImage;
