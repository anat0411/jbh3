import React from 'react';

class HomeComponent extends React.Component {
    state = {
        name: "HomeComponent"
    }
    render() {
        return (
            <div>
                <h2>HomeComponent</h2>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}

export default HomeComponent;