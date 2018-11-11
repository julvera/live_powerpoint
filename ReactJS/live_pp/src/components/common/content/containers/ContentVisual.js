import React, { Component } from 'react';
import ContentLabel from './ContentLabel';
import { connect } from 'react-redux';
import {updateDraggedElt} from '../../../../actions'

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
                    <img src={this.props.content.src} alt="Slid Img"/>
                );
            case "video":
                return (
                    <object data={this.props.content.src} aria-label="Slid Video"/>
                );
            case "web":
                return(
                    <iframe src={this.props.content.src} title="Slid WebPage"/>
                );
            default:
                return(<div></div>);
        }
    }

    drag(content) {
        this.props.dispatch(updateDraggedElt(content.id));
    }
    
    render() {
        let display_visual = this.visualTypeProcessing();
        return (
            <div>
                <div className="contentVisual" draggable="true" onDragStart={() => this.drag(this.props.content)}>
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

export default connect() (ContentVisual);