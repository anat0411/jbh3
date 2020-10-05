import React from 'react';

class FormComponent extends React.Component {

    state = {
        name: this.props.user_to_edit ? this.props.user_to_edit.name : "",
        age: this.props.user_to_edit ? this.props.user_to_edit.age : "",
        phone: this.props.user_to_edit ? this.props.user_to_edit.phone : "",
        id: this.props.user_to_edit ? this.props.user_to_edit.id : ""
    }

    render() {
        return (
            <div className="form" >
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" value={this.state.name} className="form-control" onChange={this.handleChange.bind(this)} name="name" placeholder="Name..." />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="number" value={this.state.age} className="form-control" onChange={this.handleChange.bind(this)} name="age" placeholder="Age..." />
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="text" value={this.state.phone} className="form-control" onChange={this.handleChange.bind(this)} name="phone" placeholder="Phone..." />
                </div>
                {
                    this.props.edit ?
                        <div className="btn btn-danger" onClick={this.editUser.bind(this)} >Edit</div> :
                        <div className="btn btn-success" onClick={this.saveUser.bind(this)} >Save</div>
                }


                {/* <h2>{this.state.name}</h2> */}
            </div>
        )
    }

    // updateName(e){
    //     var x =  e.target; // target = the element that triggerd the event
    //     console.log(x);
    //     this.state.name = e.target.value;
    // }
    // updateAge(e){
    //     this.state.age = e.target.value;
    // }
    // updatePhone(e){
    //     this.state["phone"] = e.target.value;
    // }

    handleChange(e) {
        // this.state[ e.target.name ] = e.target.value;
        // this.setState({});
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    saveUser() {
        let new_user = {
            name: this.state.name,
            age: this.state.age,
            phone: this.state.phone
        }
        console.log("New User Child: ", new_user);

        this.props.callParentGetNewUserFunc(new_user);
    }
    editUser() {
        let new_user = {
            id: this.state.id,
            name: this.state.name,
            age: this.state.age,
            phone: this.state.phone
        }
        
        console.log("New User Child: ", new_user);

        this.props.editUser(new_user);
    }
}

export default FormComponent;