import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import AddingRowToList from "./addRowToList";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    // this.state.users = props.users;
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="container">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {this.props.users.map((user, index) => {
                    return <AddingRowToList key={index} new_user={user} />;
                  })}
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default UsersList;
