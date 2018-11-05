import React, { Component } from 'react';
import Slid from '../../slid/components/Slid.js'

class SlidList extends Component {
    constructor(props) {
        super(props);
        this.stage = {
            slidArray: this.props.slidArray,
        }
    }

    render() {

        let display_result = []
		for(let slide in this.props.slidArray){
            display_result.push(<Slid key={"SlidList_Side : " + this.props.slidArray[slide].id}
                                    id={this.props.slidArray[slide].id} 
                                    title={this.props.slidArray[slide].title} 
                                    txt={this.props.slidArray[slide].txt}
                                    content_id={this.props.slidArray[slide].content_id} 
                                    displayMode={'SHORT'}
                                    > </Slid>)
        }
        
        return (
            <div className="thumbnail">
                    {display_result}
            </div>
        );
    }
}

export default SlidList;