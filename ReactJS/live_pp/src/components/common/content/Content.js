import React, { Component } from 'react';
import ContentVisual from './containers/ContentVisual.js';

class Content extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let display_result = []
        display_result=this.props.slide_list.map(
            (slide) => (<ContentVisual key={slide.id} slide_value={slide}> </ContentVisual>)
        );

        return (
            <div>
                {display_result}
            </div>
        );
    }
}

export default Content;