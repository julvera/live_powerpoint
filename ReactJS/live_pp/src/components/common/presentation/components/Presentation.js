import React, { Component } from 'react';
import PresentationVisual from '../containers/PresentationVisual.js'
import './Presentation.css'
import EditPresSlide from '../containers/EditMetaPress.js'
import {connect } from 'react-redux';

import {updatePresentationContent} from '../../../../actions'

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeDescription=this.handleChangeDescription.bind(this);
    }

    handleChangeTitle(e){
        this.props.dispatch(updatePresentationContent(e.target.value, this.props.description));
    }

    handleChangeDescription(e){
        this.props.dispatch(updatePresentationContent(this.props.title,e.target.value));
    }

    render() {
        let display_result = [];
        if(this.props.displayMode === "FULL_MNG"){
            display_result.push(<EditPresSlide key={"EditPresSlide"+this.props.presentation.id} 
                                handleChangeTitle={this.handleChangeTitle} 
                                handleChangeDescription={this.handleChangeDescription}
                                title={this.props.presentation.title}
                                description={this.props.presentation.description}/>)
        }

        return (
            <div>
                <div>
                    {display_result}
                </div>
               <PresentationVisual  key={"EditPresSlide"+this.props.presentation.id}
                                id={this.props.presentation.id}
                                title={this.props.presentation.title} 
                                description={this.props.presentation.description}
                                slidArray={this.props.presentation.slidArray}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        presentation: state.updateModelReducer.presentation,
    } };

export default connect(mapStateToProps)(Presentation);