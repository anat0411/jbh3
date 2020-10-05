import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FormComponent from "../FormComponent/FormComponent";

class UserCardComponent extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  state = {
    show_popup: false
  };

  render() {
    return (
      <div className="card">
        <div>ID: {this.props.user_passed.id}</div>
        <div>{this.props.user_passed.name}</div>
        <div>{this.props.user_passed.age}</div>
        <div>{this.props.user_passed.phone}</div>
        <Modal
          show={this.state.show_popup}
          onHide={this.handleClose.bind(this)}
        >
          <FormComponent
            editUser={this.editUser.bind(this)}
            edit={true}
            user_to_edit={this.props.user_passed}
          />
        </Modal>
        <div className="btn btn-danger" onClick={this.openPopup.bind(this)}>
          Edit
        </div>
      </div>
    );
  }
  handleClose() {
    this.setState({ show_popup: false });
  }
  openPopup(number) {
    this.setState({ show_popup: true });
  }
  editUser(new_user) {
    this.state.show_popup = false;
    this.props.editUser(new_user);
  }
}

export default UserCardComponent;
