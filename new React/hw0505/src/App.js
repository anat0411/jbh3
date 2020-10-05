import React from "react";
import "./App.css";
import Popup from "./components/Popup";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
  }

  openPopup = () => {
    this.setState({ isPopupOpen: true });
  };
  closePopup = () => {
    this.setState({ isPopupOpen: false });
  };

  render() {
    return (
      <div>
        <header>Please open the Popup window</header>
        <button onClick={this.openPopup}>Open Popup</button>
        {this.state.isPopupOpen && <Popup close={this.closePopup} />}
      </div>
    );
  }
}
