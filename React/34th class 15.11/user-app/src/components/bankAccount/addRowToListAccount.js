import React from "react";

class AddingAccountToList extends React.Component {
  render() {
    return (
      <div className="container">
        <tr>
          <th>{this.props.new_account.id}</th>
          <th>{this.props.new_account.bank}</th>
          <th>{this.props.new_account.branch}</th>
          <th>{this.props.new_account.number}</th>
        </tr>
      </div>
    );
  }
}

export default AddingAccountToList;
