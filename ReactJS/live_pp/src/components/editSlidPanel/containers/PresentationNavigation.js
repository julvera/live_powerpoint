import React, { Component } from 'react';
import { connect } from 'react-redux';
import {sendNavCmd } from '../../../actions/index'

var Tools = require('../../../services/Tools.js');

class PresentationNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.props.dispatch(sendNavCmd(event.target.value));
    }

    render() {
        return (
            <div>
                <button value='BEGIN' onClick={(ev) => this.handleClick(ev)}>Begin</button>
                 <button value='START' onClick={(ev) => this.handleClick(ev)}>Start</button>
                 <button value='END' onClick={(ev) => this.handleClick(ev)}>End</button>
                 <button value='PAUSE' onClick={(ev) => this.handleClick(ev)}>Pause</button>
                 <button value='PREV' onClick={(ev) => this.handleClick(ev)}>Prev</button>
                 <button value='NEXT' onClick={(ev) => this.handleClick(ev)}>Next</button>
            </div>
        );
    }
}


export default connect()(PresentationNavigation);