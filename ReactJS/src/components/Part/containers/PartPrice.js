import React, {Component} from 'react';


class PartPrice extends (Component) {
	constructor(props) {
        super(props);

        // this.state = {
        //     price: this.props.price,
        //     price_type: this.props.price_type, //$ or E
        // }
    }

    render() {
		return (
            <div>
                <h5>this is partprice for price type {this.props.price_type}</h5>
			</div>
		);
	} 
}

//export the current classes in order to be used outside
export default PartPrice;
