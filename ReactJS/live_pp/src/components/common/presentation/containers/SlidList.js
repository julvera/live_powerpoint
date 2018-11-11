import React, { Component } from 'react';
import Slid from '../../slid/components/Slid.js'
import './slidList.css';

class SlidList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        let display_result = []
		for(let slid in this.props.slidArray){
            display_result.push(<div key={"SlidList_Side : " + this.props.slidArray[slid].id}>
                                Slid {slid}
                                 <Slid 
                                    id={this.props.slidArray[slid].id} 
                                    title={this.props.slidArray[slid].title} 
                                    txt={this.props.slidArray[slid].txt}
                                    content_id={this.props.slidArray[slid].content_id} 
                                    displayMode={'SHORT'}
                                    > </Slid></div>)
        }
        
        return (
            <div>
                    {display_result}
            </div>
        );
    }
}

export default SlidList;