import React, { Component } from 'react';
import Presentation from '../../common/presentation/components/Presentation.js'
import './BrowsePresentationPanel.css'

class BrowsePResentationPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            presentation: this.props.presentation,
            contentMap: this.props.contentMap
        }
    }

    render() {
        
        return (
            <div className="thumbnail">
               <Presentation presentation={this.props.presentation}
                            contentMap={this.props.contentMap}
                            displayMode={"FULL_MNG"}/>
            </div>
        );
    }
}

export default BrowsePResentationPanel;