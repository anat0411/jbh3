import React from "react";
import "./popup.css";

const Popup = () => {
  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="popup" onClick={handleClick}>
      <h1>My Popup</h1>
    </div>
  );
};

const PopupWrapper = (props) => {
  return (
    <div className="popup-wrapper" onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export { Popup, PopupWrapper };
