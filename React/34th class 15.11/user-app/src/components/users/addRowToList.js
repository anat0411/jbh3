import React from "react";

class AddingRowToList extends React.Component {
  render() {
    return (
      <tr>
        {/* <tr>{this.props.new_user.id}</tr> */}
        <td>{this.props.new_user.name}</td>
        <td>{this.props.new_user.age}</td>
        <td>{this.props.new_user.phone}</td>
      </tr>
    );
  }
}

export default AddingRowToList;
