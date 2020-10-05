import React from 'react';

class GalleryComponent extends React.Component {
    state = {
        name: "GalleryComponent"
    }
    render() {
        return (
            <div>
                <h2>GalleryComponent</h2>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}

export default GalleryComponent;