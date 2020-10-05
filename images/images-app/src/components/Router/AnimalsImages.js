import React, { Component } from "react";
import ImageRow from "../image components/ImagesRow";
import "./WrapperCSS.css";
import ImagesData from "../ImagesData/animals/animalsImages.json";

export default class AnimalsImages extends Component {
  render() {
    return (
      <div className="container wrapper">
        <ImageRow data={ImagesData} />
      </div>
    );
  }
}
