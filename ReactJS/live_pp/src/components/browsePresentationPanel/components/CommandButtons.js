import React, { Component } from 'react';
import { connect } from 'react-redux';
import {updateSlid,sendNavCmd } from '../../../actions/index'

var Tools = require('../../../services/Tools.js');

class CommandButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            removeSlidNumber: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    addSlid(){
        var content_id = Object.values(this.props.content_map)[0].id;
        var id=Tools.generateUUID();
        const tmpSlid={id:id,
            title:"New Slide",
            txt:"New txt",
            content_id:content_id};
        this.props.dispatch(updateSlid('Add',tmpSlid));
    }

    handleChange(event) {
        this.setState({removeSlidNumber: event.target.value});
    }

    removeSlid(){
        const tmpSlid={id:this.state.removeSlidNumber,
            title:"New Slide",
            txt:"New txt",
            content_id:''};
        this.props.dispatch(updateSlid('Remove',tmpSlid));
    }

    savePres(){
       this.props.dispatch(sendNavCmd("SAVE_CMD"));
    }
    render() {
        
        return (
            <div>
                <div><button onClick={() => this.addSlid()}>Add Slid</button></div>
                <input type="text" placeholder="Remove slid number" value={this.state.removeSlidNumber} onChange={this.handleChange} />
                <div><button onClick={() => this.removeSlid()}>Remove</button></div>
				<div><button onClick={() => this.savePres()}>Save</button></div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        content_map: state.updateModelReducer.content_map,
    } };

export default connect(mapStateToProps)(CommandButton);