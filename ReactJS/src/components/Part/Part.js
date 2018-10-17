import React, {Component} from 'react';
import PartDescription from './containers/PartDescription';


class Part extends (Component) {
	constructor(props) {
        super(props);

        this.state = {
            me: this.props.part_value,
        }
    }

    render() {
		return (
            <div>
                <h1>This is the description of {this.state.me.title}, {this.state.me.id}</h1>
                <PartDescription description={this.props.title} price_type={this.state.me.price_type}></PartDescription>
			</div>
		);
	} 
}

//export the current classes in order to be used outside
export default Part;
