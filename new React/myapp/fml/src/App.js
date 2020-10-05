// import React from "react";
// import "./App.css";
// import Counters from "./counters/counters";

// function App() {
//   return (
//     <div className="App">
//       <Counters />
//     </div>
//   );
// }

// export default App;

import React from "react";
import Counters from "./counters/counters";
import randomnum from "./counters/random";

let countersTestData = [
  { initialvalue: 50, interval: 5, min: 0, max: 100, id: randomnum(10) },
  { initialvalue: 30, interval: 5, min: 10, max: 30, id: randomnum(10) }
];

function App() {
  return <Counters data={countersTestData}></Counters>;
}

export default App;
