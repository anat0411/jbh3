import React from "react";
import "./App.css";
import ServerList from "./components/ServerList";

function App() {
  return (
    <div className="App">
      <h3>Hello!</h3>
      <h4>Here you can see all the differect servers</h4>
      <ServerList />
    </div>
  );
}

export default App;
