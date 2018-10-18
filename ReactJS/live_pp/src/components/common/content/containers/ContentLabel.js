import React, { Component } from 'react';

class ContentLabel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let display_info;
        if(!this.props.onlyContent){
            display_info = (<div>ID : {this.props.id}  Title: {this.props.title}</div>)
        }
        return (
            <div>
                {display_info}
            </div>
        );
    }
}

export default ContentLabel;