import React, { Component } from 'react';
import Slid from '../../slid/components/Slid.js'

class SlidList extends Component {
    constructor(props) {
        super(props);
        this.stage = {
            selected_slide: this.props.selected_slide,
            contentMap: this.props.contentMap
        }
    }

    render() {

       
        
        return (
            <div className="thumbnail">
                    <Slid key={"EditSlidePanel_Slide "+ this.props.selected_slide.id}
                                    id={this.props.selected_slide.id} 
                                    title={this.props.selected_slide.title} 
                                    txt={this.props.selected_slide.txt}
                                    content_id={this.props.selected_slide.content_id} 
                                    contentMap={this.props.contentMap}
                                    displaymode={'FULL_MNG'}
                                    />
            </div>
        );
    }
}

export default SlidList;