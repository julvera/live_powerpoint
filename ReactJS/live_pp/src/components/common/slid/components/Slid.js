import React, { Component } from 'react';
import Content from '../../content/components/Content.js'
import EditMetaSlid from '../containers/EditMetaSlid.js'

class Slid extends Component {
    constructor(props) {
        super(props);
        //List of var entry
        this.state = {
            //id: this.props.id,
            title: this.props.title,
            txt: this.props.txt,
            //content_id: this.props.content_id,
            //contentMap: this.props.contentMap,
            //displaymode : this.props.displayMode,
        };
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeTxt=this.handleChangeTxt.bind(this);
    }

    handleChangeTitle(e){
        this.setState({title:e.target.value});
    }

    handleChangeTxt(e){
        this.setState({txt:e.target.value});
    }

    render() {

        let display_result = [];
        if(this.props.displayMode == "FULL_MNG"){
            display_result.push(<EditMetaSlid key={this.props.id} 
                                handleChangeTitle={this.handleChangeTitle} 
                                handleChangeTxt={this.handleChangeTxt}
                                title={this.state.title}
                                txt={this.state.txt}></EditMetaSlid>)
        }
                
        
        return (
            <div className ="align-center height-30">
                <div>
                    {this.state.title}
                </div>
                <div>
                    {this.state.txt}
                </div>
                <div className="height-30">
                    <Content key={"Slid"+this.props.content_id} content={this.props.contentMap[this.props.content_id]} displayContentMode={"TypeOnly"}> </Content>
                </div>
                <div>
                    {display_result}
                </div>
            </div>      
        );
    }
}

export default Slid;