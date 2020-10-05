import React, { Component } from "react";
import "./FooterCSS.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="container wrapp">
        <div className="main">Contact Me!</div>
        <div className="row">
          <a
            className="col-md-3 linkTag"
            target="_blank"
            href="https://www.facebook.com/anat.aig"
          >
            <i className="fa fa-facebook-official" aria-hidden="true"></i>
            Facebook
          </a>
          <a
            className="col-md-3 linkTag"
            target="_blank"
            href="https://www.instagram.com/anat_aig/"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
            Anat Aig on Instagram
          </a>
          <a
            className="col-md-3 linkTag"
            target="_blank"
            href="https://www.instagram.com/photos__aa/"
          >
            <i className="fa fa-instagram" aria-hidden="true"></i>
            photos__aa on Instagram
          </a>
          <a
            className="col-md-3 linkTag"
            target="_blank"
            href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=anat4000@gmail.com&body=!Hi%0A%0AI%20wanted%20to%20write%20you%20about%0A%0A%0A%0A"
          >
            <i className="fa fa-envelope" aria-hidden="true"></i>
            Email Me
          </a>
        </div>
      </div>
    );
  }
}
