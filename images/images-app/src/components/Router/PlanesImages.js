import React, { Component } from "react";
import ImageRow from "../image components/ImagesRow";
import ImagesData from "../ImagesData/planes/planesImages.json";
import "./WrapperCSS.css";

export default class PlanesImages extends Component {
  render() {
    return (
      <div className="container wrapper">
        <ImageRow data={ImagesData} />
      </div>
    );
  }
}
