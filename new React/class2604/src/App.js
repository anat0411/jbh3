import React from "react";
import "./App.css";
import Clock from "./components/Clock";

// function App() {
//   const userName = "Anat";
//   let time = getTimeString();

//   setInterval(() => {
//     time = getTimeString();
//   }, 1000);

//   return (
//     <div className="App">
//       <Clock name={userName} time={time} />
//     </div>
//   );
// }

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Anat",
      showClock: true,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    const { showClock } = this.state;
    this.setState({ showClock: !showClock });
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Clock</button>
        {/* without () because we only call the func when we want, not when dom is up */}
        {this.state.showClock ? <Clock name={this.state.userName} /> : null}
        {/* {this.state.showClock && <Clock name={this.state.userName} />} */}
      </div>
    );
  }
}
export default App;
