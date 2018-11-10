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
                    <object data={this.props.content.src}/>
                );
            case "web":
                return(
                    <iframe src={this.props.content.src}/>
                );
            default:
                return(<div></div>);
        }
    }

    drag(ev,content) {
        console.log("is content")
        console.log(content)
        ev.dataTransfer.setData("text", content.id);
    }
    
    render() {
        let display_visual = this.visualTypeProcessing();
        return (
            <div>
                <div className="contentVisual" draggable="true" onDragStart={(ev) => this.drag(ev,this.props.content)}>
                    {display_visual}
                </div>
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