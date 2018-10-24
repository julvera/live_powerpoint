import React, { Component } from 'react';
import ContentLabel from './ContentLabel';

class ContentVisual extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            me: this.props.content,
        }
        this.visualTypeProcessing = this.visualTypeProcessing.bind(this);
    }
  
    visualTypeProcessing(){
        switch(this.state.me.type){
            case "img":
            case "img_url":
                return (
                    <img src={this.props.content.src}/>
                );
            case "video":
                return (
                    <object  width="100%" height="100%" data={this.props.content.src}/>
                );
            case "web":
                return(
                    <iframe src={this.props.content.src}/>
                );
            default:
                return(<div></div>);
        }
    }

    render() {
        let display_visual = this.visualTypeProcessing();
        return (
            <div className="thumbnail">
                {display_visual}
                <ContentLabel
                    displayContentMode={this.props.displayContentMode}
                    id={this.props.content.id}
                    title={this.props.content.title}
                />
            </div>           
        );
    }
}

export default ContentVisual;