import React, { Component } from 'react';
import Slid from '../../common/slid/components/Slid.js'

import {connect} from 'react-redux';


class EditSlidPanel extends Component {
    constructor(props) {
        super(props);
        this.stage = {
        }
    }

    getRender(){
        let array_render=[];
        if (this.props.selected_slid.id == undefined)
            return ;
        array_render.push(
                <Slid key={"EditSlidePanel_Slide "+ this.props.selected_slid.id}
                                    id={this.props.selected_slid.id} 
                                    title={this.props.selected_slid.title} 
                                    txt={this.props.selected_slid.txt}
                                    content_id={this.props.selected_slid.content_id} 
                                    displayMode="FULL_MNG"
                                    />)
                
        return array_render;
    }

    render() {
        let array_render = this.getRender();
        return (
            <div className="thumbnail">
                {array_render}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let mySelectedSlid ={}
    for(let slidTpm in state.updateModelReducer.presentation.slidArray){
        if(state.updateModelReducer.presentation.slidArray[slidTpm].id == state.selectedReducer.slid.id){
            mySelectedSlid = state.updateModelReducer.presentation.slidArray[slidTpm];
            break;
        }
    }
    return {
    selected_slid: mySelectedSlid
    } };

export default connect(mapStateToProps)(EditSlidPanel);
