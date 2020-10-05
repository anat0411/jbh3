import React, { Component } from "react";

import "./App.css";
import Parent from "./Parent/Parent";
import Child from "./Child/Child";
import Title from "./Title/Title";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Parent>
          <Child>
            <Child>
              <Title text="First Title" />
            </Child>
            <Title text="Hello Title" />
          </Child>
          <Child>
            <Title text="Sec Title" />
          </Child>
        </Parent>
      </div>
    );
  }
}

export default App;
