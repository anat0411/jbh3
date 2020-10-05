import React, { Component } from "react";
import ColorContext from "../../../contexts/ColorContext";

// class Title extends Component {
//     static contextType = ColorContext;

//     render() {
//         return (
//             <h1 style={{ color: this.context }}>
//                 {this.props.text}
//             </h1>
//         )
//     }
// }

function Title(props) {
  return (
    <ColorContext.Consumer>
      {(context) => <h1 style={{ color: context }}>{props.text}</h1>}
    </ColorContext.Consumer>
  );
}

export default Title;
