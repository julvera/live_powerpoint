import React, { Component } from 'react';
import SlidList from './SlidList.js'

class PresentationVisual extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    
    render() {     
        return (
            <div>
                <h3>Titre</h3> 
                {this.props.title}
                <h3>Description</h3>
                {this.props.description}
                <div className="vertical-scroll height-100">
                <SlidList key={"SlidList" + this.props.id} 
                        slidArray={this.props.slidArray}/>
                </div>
            </div>
        );
    }
}

export default PresentationVisual;