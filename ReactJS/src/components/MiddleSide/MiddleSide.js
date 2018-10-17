import React, {Component} from 'react';
import Part from '../Part/Part'


class MiddleSide extends (Component) {
	constructor(props) {
        super(props);
    }

    render() {
        let display_result = this.props.part_list.map( //itere a traver chaque item
            (one_part) => (
                <Part key={one_part.id} part_value={one_part}></Part>
            )
        );
		return (
            <div>
                {display_result}
			</div>
		);
	} 
}

//export the current classes in order to be used outside
export default MiddleSide;
