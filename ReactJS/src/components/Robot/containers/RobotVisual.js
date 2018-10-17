import React, {Component} from 'react';


class RobotVisual extends (Component) {
	constructor(props) {
        super(props);
        this.visualTypeProcessing= this.visualTypeProcessing.bind(this);
    }

    visualTypeProcessing() {
        let render_visual;
        switch(this.props.type) {
            case 'img':
                render_visual = (
                    <img 
                        className='imgCard' 
                        src={this.props.src}  
                    />
                );
                break;

            case "video":
                render_visual = (
                    <object  
                        width="100%"
                        height="100%"
                        data={this.props.src}
                    />
                );
                break;

            default:
                break;
        }

        return (
            <div className="thumbnail">
                {render_visual}
            </div>            
        );
    }

    render() {
        let display_result = this.visualTypeProcessing();
		return (display_result);
	} 
}

//export the current classes in order to be used outside
export default RobotVisual;
