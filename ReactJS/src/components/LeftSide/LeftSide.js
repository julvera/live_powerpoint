import React, {Component} from 'react';
import Robot from '../Robot/Robot';


class LeftSide extends (Component) {
	constructor(props) {
        super(props);
    }

    render() {
        let display_result = this.props.robot_list.map( //itere a traver chaque item
            (one_bot) => (
                <Robot key={one_bot.id} robot_value={one_bot}></Robot>
            )
        );

		return (
			<div >
                this is my LeftSide component
                {display_result}
			</div>
		);
	} 
}

//export the current classes in order to be used outside
export default LeftSide;
