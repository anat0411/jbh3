import React from "react";
import ProfileContext from "../../contexts/ProfileContext";

const ProfileLocation = () => {
  return (
    <ProfileContext.Consumer>
      {({ profileData: { location } }) => (
        <>
          <div>{location && location.state}</div>
          <div>{location && location.city}</div>
        </>
      )}
    </ProfileContext.Consumer>
  );
};

export default ProfileLocation;
