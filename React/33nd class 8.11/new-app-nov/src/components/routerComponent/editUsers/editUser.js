import React from "react";

class EditUserComponent extends React.Component {
  //   state = {
  //     name: "Edit User Component"
  //   };
  state = {
    // id: this.state.id,
    name: this.props.name,
    age: this.props.age,
    phone: this.props.phone
  };
  render() {
    return (
      <div className="container">
        <h2>Add User Component</h2>
        {/* <h3>{this.state.name}</h3> */}
        {
          <div className="form">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={this.state.name}
                className="form-control"
                onChange={this.handleChange.bind(this)}
                name="name"
                placeholder="Name..."
              />
            </div>
            <div className="form-group">
              <label>Age</label>
              <input
                type="number"
                value={this.state.age}
                className="form-control"
                onChange={this.handleChange.bind(this)}
                name="age"
                placeholder="Age..."
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="text"
                value={this.state.phone}
                className="form-control"
                onChange={this.handleChange.bind(this)}
                name="phone"
                placeholder="Phone..."
              />
            </div>
            <div className="btn btn-success" onClick={this.saveUser.bind(this)}>
              Save
            </div>
            {/* <h2>{this.state.name}</h2> */}
          </div>
        }
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
      id: this.state.id,
      name: this.state.name,
      age: this.state.age,
      phone: this.state.phone
    };
    console.log("New User Child: ", new_user);

    this.props.NewInfo(new_user);
  }
}

export default EditUserComponent;
