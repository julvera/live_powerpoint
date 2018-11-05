import React, { Component } from 'react';
import Presentation from '../../common/presentation/components/Presentation.js'
import './BrowsePresentationPanel.css'

class BrowsePResentationPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presentation: this.props.presentation,
        }
    }

    render() {
        
        return (
            <div className="thumbnail">
               <Presentation displayMode={"FULL_MNG"}/>
            </div>
        );
    }
}

export default BrowsePResentationPanel;