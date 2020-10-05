import React from "react";

class AddUser extends React.Component {
  state = {
    // id: this.state.id,
    name: this.props.name,
    age: this.props.age,
    phone: this.props.phone
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="form">
            <div className="form-group">
              <label>Name</label>
              <input
                value={this.state.name}
                type="text"
                className="form-control"
                onChange={this.handleChange.bind(this)}
                name="name"
                placeholder="Name..."
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                value={this.state.age}
                type="number"
                className="form-control"
                onChange={this.handleChange.bind(this)}
                name="age"
                placeholder="Age..."
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                value={this.state.phone}
                type="text"
                className="form-control"
                onChange={this.handleChange.bind(this)}
                name="phone"
                placeholder="Phone..."
              />
            </div>
            <div className="btn btn-success" onClick={this.saveUser.bind(this)}>
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
  saveUser() {
    let new_user = {
      // id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      phone: this.state.phone
    };
    console.log("New User Child: ", new_user);

    this.props.NewInfo(new_user);
  }
}

export default AddUser;
