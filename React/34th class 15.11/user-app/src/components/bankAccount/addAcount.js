import React from "react";

class AddAccount extends React.Component {
  state = {
    // id: this.state.id,
    bank: this.props.bank,
    branch: this.props.branch,
    number: this.props.number
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="form">
            <div className="form-group">
              <label>Bank Name</label>
              <input
                type="text"
                value={this.state.bank}
                className="form-control"
                onChange={this.handleChange.bind(this)}
                name="bank"
                placeholder="Bank Name..."
              />
            </div>
            <div className="form-group">
              <label>Branch</label>
              <input
                type="number"
                value={this.state.branch}
                className="form-control"
                onChange={this.handleChange.bind(this)}
                name="branch"
                placeholder="Branch..."
              />
            </div>
            <div className="form-group">
              <label>Account Number</label>
              <input
                type="text"
                value={this.state.number}
                className="form-control"
                onChange={this.handleChange.bind(this)}
                name="number"
                placeholder="Account Number..."
              />
            </div>
            <div
              className="btn btn-success"
              onClick={this.saveAccount.bind(this)}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  saveAccount() {
    let new_account = {
      //   id: this.state.id,
      bank: this.state.bank,
      branch: this.state.branch,
      number: this.state.number
    };
    console.log("New Account Child: ", new_account);

    this.props.NewInfo(new_account);
  }
}

export default AddAccount;
