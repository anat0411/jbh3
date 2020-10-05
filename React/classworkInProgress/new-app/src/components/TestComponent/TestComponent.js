import React from 'react';

class TestComponent extends React.Component{
    state = {
        name:"Test Name"
    }
    render(){
        return(
            <div>
                <h2>TestComponent</h2>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}

export default TestComponent;