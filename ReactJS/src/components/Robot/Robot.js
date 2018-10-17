import React, {Component} from 'react';
import RobotLabel from './containers/RobotLabel'
import RobotVisual from './containers/RobotVisual'


class Robot extends (Component) {
	constructor(props) {
        super(props);

        this.state = {
            me: this.props.robot_value,
        }
    }

    render() {
		return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Robot {this.props.me.id} description</h3>
                </div>
                <div className="panel-body">
                    <RobotLabel 
                        title={this.state.me.title}
                        id={this.state.me.id}
                    />
                    <RobotVisual
                        src={this.state.me.visual_src}
                        type={this.state.me.visual_type}
                    />
                </div>
            </div>
		);
	} 
}

//export the current classes in order to be used outside
export default Robot;
