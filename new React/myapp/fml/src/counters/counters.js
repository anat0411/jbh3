// import React from "react";
// import Counter from "./counter";

// let counterData = [
//   { id: 1, initNum: 5, addOrRemove: 2, minNum: 0, maxNum: 20 },
//   { id: 2, initNum: 1, addOrRemove: 8, minNum: -10, maxNum: 30 },
//   { id: 3, initNum: 6, addOrRemove: 9, minNum: -20, maxNum: 40 },
//   { id: 4, initNum: 2, addOrRemove: 1, minNum: 1, maxNum: 10 }
// ];

// class Counters extends React.Component {
//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <h1>Counters List: ({counterData.length})</h1>
//         </div>
//         <div className="row">
//           {counterData.map((counter, i) => {
//             return (
//               <Counter
//                 counterVal={counter.initNum}
//                 addOrRemove={counter.addOrRemove}
//                 minVal={counter.minNum}
//                 maxVal={counter.maxNum}
//               ></Counter>
//             );
//           })}
//         </div>
//       </div>
//     );
//   }
// }

// export default Counters;

import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        {this.props.data.map(d => (
          <Counter counter={d}></Counter>
        ))}
      </div>
    );
  }
}
