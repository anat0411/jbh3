import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import TableRow from "../tableRow/tableRow";

class DisplayUsersComponent extends React.Component {
  //   state = {
  //     name: "User Component"
  //   };

  constructor(props) {
    super(props);
    // this.state.users = props.users;
  }

  render() {
    return (
      <div className="container">
        <h2>User Component</h2>
        {/* <h3>{this.state.name}</h3> */}
        <Table striped bordered hover>
          <thead>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone</th>
              </tr>
              <tr>
                {this.props.users.map(user => {
                  return <TableRow new_user={user} />;
                })}
              </tr>
            </tbody>
          </thead>
        </Table>
      </div>
    );
  }
}

export default DisplayUsersComponent;
