import React, { Component } from "react";
import "./WrapperCSS.css";
import ImagesRow from "../image components/ImagesRow";
import ImagesData from "../ImagesData/people/peopleImages.json";

export default class PeopleImages extends Component {
  render() {
    return (
      <div className="conatiner wrapper">
        <ImagesRow data={ImagesData} />
      </div>
    );
  }
}
