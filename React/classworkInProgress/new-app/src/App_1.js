import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/TestComponent/TestComponent';
import FormComponent from './components/FormComponent/FormComponent';
import ListComponent from './components/ListComponent/ListComponent';
class App extends React.Component {
    state = {
        name: "saar afuta",
        kids: [
            "or",
            "adam",
            "ynai"
        ],
        new_user: "",
        users: [
            { id: 1, name: "test", age: 22, phone: "05021561" },
            { id: 2, name: "test 22", age: 56, phone: "234234234" },
            { id: 3, name: "Player", age: 44, phone: "1684864" }
        ],
        id_counter: 3

    }

    componentDidMount() { // component load / render
        // if (localStorage.counter) {
        //     this.state.id_counter = localStorage.counter;
        // } else {
        //     localStorage.counter = this.state.id_counter;
        // }
        // setTimeout(() => {
        //     this.state.kids.push("Sami");
        //     // this.state.name = "sahi";
        //     this.setState({name:"shai"});
        // }, 3000);
    }

    getNewUser(user) {
        console.log("New User Parent:", user);
        this.state.id_counter = this.state.id_counter + 1;
        //user.id = ++this.state.id_counter;
        user.id = this.state.id_counter;
        this.state.users.push(user);
        this.state.new_user = user;
        this.setState({});

    }
    editUser(user_to_edit) {
        console.log("Edit User Parent:", user_to_edit);
        for (let i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].id == user_to_edit.id) {
                this.state.users[i].name = user_to_edit.name;
                this.state.users[i].age = user_to_edit.age;
                this.state.users[i].phone = user_to_edit.phone;
            }
        }
        this.setState({});
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <ListComponent editUser={this.editUser.bind(this)} users={this.state.users} />
                    </div>
                    <div className="col-md-4">
                        <FormComponent callParentGetNewUserFunc={this.getNewUser.bind(this)} />
                    </div>
                </div>

            </div>

            // <div>
            //     <div className="" >First This is First Div 111 { this.state.name } </div>
            //     <TestComponent />
            //     <h2>Kids</h2>
            //     <ul>
            //         {/* <li>{this.kids[0]}</li>
            //         <li>{this.kids[1]}</li>
            //         <li>{this.kids[2]}</li> */}
            //         {
            //             // for( let i = 0 ; i < kids.length; i++ ){
            //             //  kid = kids[i];
            //             // return <li>{kid}</li>
            //             //}

            //             /*  
            //                 Arrow Function
            //                 function(kid){}
            //                 (kid) => {}
            //             */
            //             this.state.kids.map( (kid) => {
            //                 return <li>{kid}</li>
            //             })
            //         }
            //     </ul>
            // </div>
        )

    }
}

/* old code */
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/



export default App;
