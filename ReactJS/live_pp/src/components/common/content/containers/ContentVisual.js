import React, { Component } from 'react';

class ContentVisual extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            me: this.props.slide_value,
        }
        this.visualTypePreocessing = this.visualTypePreocessing.bind(this);      
    }
  
    visualTypePreocessing(){
        switch(this.state.me.type){
            case "img":
            case "img_url":
                return (
                    <img 
                        className='imgCard' 
                        src={this.state.me.src}  
                    />
                    );
            case "video":
                return (
                  <object  width="100%" height="100%"
                            data={this.state.me.src}>
                    </object>
                    );
            case "web":
                return(
                    <iframe src={this.state.me.src}/>
                );
            default:
                    return(<div></div>)
        }
    }

    render() {
        let display_visual = this.visualTypePreocessing();
        console.log(this.state.me.onlyContent)
        let display_info;
        if(!this.state.me.onlyContent){
            display_info = (<div>ID : {this.state.me.id}  Title: {this.state.me.title}</div>)
        }
        console.log(display_visual);
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    {display_visual}
                    {display_info}
                </div>
            </div>           
        );
    }
}

export default ContentVisual;