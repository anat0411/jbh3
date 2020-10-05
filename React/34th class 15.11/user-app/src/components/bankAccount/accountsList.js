import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import AddingAccountToList from "./addRowToListAccount";

class AccountsList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <Table striped bordered hover>
            <thead>
              <tbody>
                <tr>
                  <th>ID</th>
                  <th>Bank Name</th>
                  <th>Branch</th>
                  <th>Acount Number</th>
                </tr>
                <tr>
                  {this.props.accounts.map(account => {
                    return <AddingAccountToList new_account={account} />;
                  })}
                </tr>
              </tbody>
            </thead>
          </Table>
        </div>
      </div>
    );
  }
}

export default AccountsList;
