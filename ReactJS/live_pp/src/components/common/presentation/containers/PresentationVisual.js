import React, { Component } from 'react';
import SlidList from './SlidList.js'

class PresentationVisual extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            title: this.props.title,
            description: this.props.description,
            slidArray: this.props.slidArray,
        }
    }

    render() {        
        return (
            <div className="thumbnail">
                <h3>Titre</h3> 
                {this.props.title}
                <h3>Description</h3>
                {this.props.description}
                <div>
                <SlidList key={"SlidList" + this.props.id} 
                        slidArray={this.props.slidArray}/>
                </div>
            </div>
        );
    }
}

export default PresentationVisual;