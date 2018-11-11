import React, { Component } from 'react';
import ContentVisual from '../containers/ContentVisual.js';

class Content extends Component {
    constructor(props) {
        super(props);
        this.stage = {
        }
    }

    render() {
        return (
            <div className="thumbnail">
                <ContentVisual content={this.props.content} displayContentMode={this.props.displayContentMode}> </ContentVisual>
            </div>
        );
    }
}

export default Content;