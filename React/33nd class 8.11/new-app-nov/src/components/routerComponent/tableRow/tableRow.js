import React from "react";

class TableRow extends React.Component {
  render() {
    return (
      <div className="container">
        <tr>
          <th>{this.props.new_user.id}</th>
          <th>{this.props.new_user.name}</th>
          <th>{this.props.new_user.age}</th>
          <th>{this.props.new_user.phone}</th>
        </tr>
      </div>
    );
  }
}

export default TableRow;
