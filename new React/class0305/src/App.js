import React, { Component } from "react";
import "./App.css";
import { Popup, PopupWrapper } from "./components/Popup";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPopupOpen: false,
    };
  }

  openPopup = (e) => {
    this.setState({ isPopupOpen: true });
  };

  closePopup = (e) => {
    this.setState({ isPopupOpen: false });
  };

  render() {
    const { isPopupOpen } = this.state;

    return (
      <div className="App">
        <h1>Events</h1>

        <button onClick={this.openPopup}>Open Popup</button>
        {isPopupOpen && (
          <PopupWrapper onClick={this.closePopup}>
            <Popup />
          </PopupWrapper>
        )}
      </div>
    );
  }
}

export default App;
