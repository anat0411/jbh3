import React, { Component } from "react";

// function Clock(props) {
//   const { name, time } = props;

//   return (
//     <div>
//       <h1>Clock for {name}</h1>
//       <h2>{time}</h2>
//     </div>
//   );
// }

// export default Clock;

const getTimeStr = () => {
  const time = new Date();
  return time.toTimeString();
};

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: getTimeStr(),
    };
  }

  getCurrentTime() {
    this.intervalID = setInterval(() => {
      this.setState({ time: getTimeStr() });
    }, 1000);
  }

  componentDidMount() {
    this.getCurrentTime();
  }

  componentDidUpdate(prevProps, prevState) {}

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div>
        <h1>Clock for {this.props.name}</h1>
        <h2>{this.state.time}</h2>
      </div>
    );
  }
}

export default Clock;
