import React from 'react';
import UserCardComponent from '../UserCardComponent/UserCardComponent';

class ListComponent extends React.Component {
    state = {
        users: []
    }
    constructor(props) {
        super(props);
        this.state.users = props.users;

    }

    render() {
        return (
            <div>
                {/* <UserCardComponent user_passed={this.state.users[1]} name="dsasd" id="asda" bla="asdasd" /> */}
                <div>List Comp</div>
                {
                    this.state.users.map((user, index) => {
                        return (
                            <UserCardComponent editUser={this.editUser.bind(this)} key={index} user_passed={user} />
                        )
                    })
                }
            </div>

        )
    }

    editUser(new_user) {
        this.props.editUser(new_user);
    }
}

export default ListComponent; 