import React, {Component} from 'react';
import PartPrice from './PartPrice'


class PartDescription extends (Component) {
	constructor(props) {
        super(props);

        // this.state = {
        //     description: this.props.description,
        //     price: this.props.price,
        //     price_type: this.props.price_type, //$ or E
        // }
    }

    render() {
		return (
            <div>
                <h3>Description: {this.props.description}</h3>
                <PartPrice price_type={this.props.price_type}></PartPrice>
			</div>
		);
	} 
}

//export the current classes in order to be used outside
export default PartDescription;
