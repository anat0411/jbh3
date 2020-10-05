import React, { Component } from "react";
import ProfileContext from "../../contexts/ProfileContext";
import ProfileImage from "./ProfileImage";
import ProfileLocation from "./ProfileLocation";
import ProfileButton from "./ProfileButton";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profileData: {},
      showImage: true,
    };
  }

  componentDidMount() {
    this.getProfileData();
  }

  getProfileData = async () => {
    const profileJson = await fetch("https://randomuser.me/api/");
    const { results } = await profileJson.json();

    this.setState({ profileData: results[0] });
  };

  toggleImage = () => {
    this.setState({ showImage: !this.state.showImage });
  };

  render() {
    const { profileData, showImage } = this.state;

    return (
      <ProfileContext.Provider
        value={{ profileData, toggleImage: this.toggleImage }}
      >
        <div>
          <h1>Profile Page</h1>
          {showImage && <ProfileImage />}
          <ProfileLocation />
          <ProfileButton />
        </div>
      </ProfileContext.Provider>
    );
  }
}

export default Profile;
