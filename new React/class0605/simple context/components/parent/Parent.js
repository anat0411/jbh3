import React, { Component } from "react";
import ColorContext from "../../../contexts/ColorContext";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "blue",
    };
  }

  changeColor = (color) => {
    this.setState({ color: color });
  };

  render() {
    return (
      <div>
        <ColorContext.Provider value={this.state.color}>
          {this.props.children}
          <button onClick={() => this.changeColor("yellow")}>Yellow</button>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default Parent;
