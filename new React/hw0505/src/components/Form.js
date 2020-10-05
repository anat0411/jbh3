import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      gender: "F",
      levelDefault: 0,
      message: "",
      levelOption: [1, 2, 3, 4],
    };
  }

  handleInputChange = (e) => {
    if (e.target.type === "checkbox") {
      this.setState({ [e.target.name]: e.target.checked });
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };

  render() {
    const { firstName, lastName, gender, levelDefault, message } = this.state;
    return (
      <div>
        <header>Please fill up the Form </header>
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={this.handleInputChange}
          placeholder="First Name"
        />
        <input
          type="text"
          name="lastname"
          value={lastName}
          onChange={this.handleInputChange}
          placeholder="Last Name"
        />
        <br />
        F
        <input
          type="radio"
          name="gender"
          checked={gender === "F"}
          value="F"
          onChange={this.handleInputChange}
        />
        M
        <input
          type="radio"
          name="gender"
          checked={gender === "M"}
          value="M"
          onChange={this.handleInputChange}
        />
        Q
        <input
          type="radio"
          name="gender"
          checked={gender === "Q"}
          value="Q"
          onChange={this.handleInputChange}
        />
        <br />
        <select
          name="levelDefault"
          value={levelDefault}
          onChange={this.handleInputChange}
        >
          {this.state.levelOption.map((level) => (
            <option value={level}>{level}</option>
          ))}
        </select>
        <br />
        <p> If you have any message, please leave it here:</p>
        <textarea
          name="massage"
          value={message}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}
