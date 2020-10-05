import React from 'react';

class AboutComponent extends React.Component {
    state = {
        name: "AboutComponent"
    }
    render() {
        return (
            <div>
                <h2>AboutComponent</h2>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}

export default AboutComponent;