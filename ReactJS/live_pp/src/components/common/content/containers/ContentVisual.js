import React, { Component } from 'react';
import ContentLabel from './ContentLabel';

class ContentVisual extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            me: this.props.slide_value,
        }
        this.visualTypeProcessing = this.visualTypeProcessing.bind(this);
    }
  
    visualTypeProcessing(){
        switch(this.state.me.type){
            case "img":
            case "img_url":
                return (
                    <img className='imgCard' src={this.state.me.src}/>
                );
            case "video":
                return (
                    <object  width="100%" height="100%" data={this.state.me.src}/>
                );
            case "web":
                return(
                    <iframe src={this.state.me.src}/>
                );
            default:
                return(<div></div>);
        }
    }

    render() {
        let display_visual = this.visualTypeProcessing();
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {display_visual}
                    <ContentLabel
                        onlyContent={this.state.me.onlyContent}
                        id={this.state.me.id}
                        title={this.state.me.title}
                    />
                </div>
            </div>           
        );
    }
}

export default ContentVisual;