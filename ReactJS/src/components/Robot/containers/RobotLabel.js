import React, {Component} from 'react';


class RobotLabel extends (Component) {
	constructor(props) {
        super(props);
    }

    render() {
		return (
			<div >
                <h1>{this.props.title}</h1>
                <h5>ID: {this.props.id} | LABEL: {this.props.title}</h5>
			</div>
		);
	} 
}

//export the current classes in order to be used outside
export default RobotLabel;
