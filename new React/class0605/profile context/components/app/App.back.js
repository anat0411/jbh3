import React, { Component } from "react";
import "./App.css";

const ColorContext = React.createContext();

function Child(props) {
  return (
    <ColorContext.Consumer>
      {({ color, setColor }) => (
        <div style={{ color: color }}>
          {props.children}
          <button onClick={() => setColor("black")}>Black</button>
        </div>
      )}
    </ColorContext.Consumer>
  );
}

class ChildClass extends Component {
  static contextType = ColorContext;

  render() {
    return (
      <div style={{ color: this.context.color }}>
        {this.props.children}
        <button onClick={() => this.context.setColor("black")}>My Black</button>
      </div>
    );
  }
}

class Parent extends Component {
  state = {
    color: "yellow",
  };

  render() {
    return (
      <ColorContext.Provider
        value={{
          color: this.state.color,
          setColor: (color) => this.setState({ color: color }),
        }}
      >
        {this.props.children}
      </ColorContext.Provider>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Parent>
        <Child>
          <Child>
            <Child>
              <ChildClass>
                <Child>
                  <Child>
                    <h1>HELLO</h1>
                  </Child>
                </Child>
              </ChildClass>
            </Child>
          </Child>
        </Child>
      </Parent>
    </div>
  );
}

export default App;
