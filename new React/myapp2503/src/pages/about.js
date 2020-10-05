import React, { Component } from "react";
import Comp1 from "../components/comp1";
import Comp2 from "../components/comp2";
import Comp3 from "../components/comp3";

export default class About extends Component {
  render() {
    let comp2 = <Comp2></Comp2>;
    let comp3 = <Comp3></Comp3>;
    return (
      <div>
        <Comp1 title="[Comp-01]" comp2={comp2} comp3={comp3}>
          <div>
            <p>Children HTML Inside Comp1</p>
            <a target="_top" href="http://www.ynet.co.il">
              ynet
            </a>
          </div>
        </Comp1>
      </div>
    );
  }
}
