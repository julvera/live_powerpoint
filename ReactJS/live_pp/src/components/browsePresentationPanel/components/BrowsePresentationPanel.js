import React, { Component } from 'react';
import Presentation from '../../common/presentation/components/Presentation.js'
import CommandButton from './CommandButtons'

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
            <div>
                <div>
                    <CommandButton/>
                    <Presentation displayMode={"FULL_MNG"}/>
                </div>
            </div>
        );
    }
}

export default BrowsePResentationPanel;