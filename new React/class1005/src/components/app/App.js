import React, { useState } from "react";
import "./App.css";
import Counter from "../Counter/Counter";
import Clock from "../Clock/Clock";
import ColorContext from "../../contexts/ColorContext";

function App() {
  const [show, setShow] = useState(true);
  const [color, setColor] = useState("green");

  const buttons = ["blue", "red", "green", "yellow"].map((color) => (
    <button key={color} onClick={() => setColor(color)}>
      {color}
    </button>
  ));

  return (
    <ColorContext.Provider value={color}>
      <div>
        {show && <Counter />}
        {show && <Clock />}
        <button onClick={() => setShow(!show)}>Toggle</button>
        <div>{buttons}</div>
      </div>
    </ColorContext.Provider>
  );
}

export default App;
