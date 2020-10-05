import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.FilterTextChanged = this.FilterTextChanged.bind(this);
    this.InStockOnlyChanged = this.InStockOnlyChanged.bind(this);
  }

  render() {
    return (
      <div>
        <input
          onChange={this.FilterTextChanged}
          className="form-control form-control-sm"
          type="text"
          id="inputSmall"
        ></input>
        <input
          style={{ marginLeft: "20px" }}
          onChange={this.InStockOnlyChanged}
          type="checkbox"
          className="form-check-input"
        ></input>
        Is In STock?
      </div>
    );
  }

  InStockOnlyChanged(e) {
    this.props.InStockOnlyChanged(e.target.checked);
  }

  FilterTextChanged(e) {
    let valFilter = e.target.value;
    this.props.FilterTextChanged(valFilter);
  }
}
