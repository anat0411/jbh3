import React, { Component } from "react";
import Image from "./Image";

export default class ImagesRow extends Component {
  render() {
    const imagesData = this.props.data.imagesData;
    return (
      <div className="container">
        <div className="row">
          {imagesData
            ? imagesData.map((image, index) => {
                let src = image.data.src;
                let description = image.data.description;
                return (
                  <Image key={index} src={src} description={description} />
                );
              })
            : null}
        </div>
      </div>
    );
  }
}
