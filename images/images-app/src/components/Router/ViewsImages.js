import React, { Component } from "react";
import "./WrapperCSS.css";
import ImagesRow from "../image components/ImagesRow";
import ImagesData from "../ImagesData/views/viewsImages.json";

export default class ViewsImages extends Component {
  render() {
    return (
      <div className="conatiner wrapper">
        <ImagesRow data={ImagesData} />
      </div>
    );
  }
}
