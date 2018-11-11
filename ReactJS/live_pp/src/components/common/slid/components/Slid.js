import React, { Component } from 'react';
import './Slid.css';

import Content from '../../content/components/Content.js'
import EditMetaSlid from '../containers/EditMetaSlid.js'

import { connect } from 'react-redux';
import {setSelectedSlid, updateSlid } from '../../../../actions'


class Slid extends Component {
    constructor(props) {
        super(props);
        //List of var entry
        this.state = {
            title: this.props.title,
            txt: this.props.txt,
        };
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeTxt=this.handleChangeTxt.bind(this);
        this.updateSelectedSlid=this.updateSelectedSlid.bind(this);
    }

    updateCurrentSlid(id, title,txt,content_id){
        const tmpSlid={id:id,
                    title:title,
                    txt:txt,
                    content_id:content_id};
       this.props.dispatch(updateSlid("Update",tmpSlid));
    }

    handleChangeTitle(e){   
        this.updateCurrentSlid(this.props.id,e.target.value,this.props.txt,this.props.content_id)
    }

    handleChangeTxt(e){
        this.updateCurrentSlid(this.props.id,this.props.title,e.target.value,this.props.content_id)
    }

    updateSelectedSlid(){
        const tmpSlid={id:this.props.id,
                    title:this.props.title,
                    txt:this.props.txt,
                    content_id:this.props.content_id};
       this.props.dispatch(setSelectedSlid(tmpSlid));
    }
       
    allowDrop(ev) {
        ev.preventDefault();
    }
    
    drop() {
        this.updateCurrentSlid(this.props.slid.id, this.props.slid.title, this.props.slid.txt, this.props.slid.content_id); 
    }

    render() {

        let display_result = [];
        if(this.props.displayMode === "FULL_MNG"){
            display_result.push(<EditMetaSlid key={this.props.id} 
                                handleChangeTitle={this.handleChangeTitle} 
                                handleChangeTxt={this.handleChangeTxt}
                                title={this.props.title}
                                txt={this.props.txt}></EditMetaSlid>)
        }
                
        return (
            <div className="thumbnail" onClick={()=>{this.updateSelectedSlid()}}>
                <div>
                    {this.props.title}
                </div>
                <div>
                    {this.props.txt}
                </div>
                <div  onDragOver={(ev) => this.allowDrop(ev)} onDrop={() => this.drop()}>
                     <Content key={"Slid"+this.props.content_id} 
                            content={this.props.content_map[this.props.content_id]} 
                            displayContentMode={"TypeOnly"}/>
                </div>
                <div>
                    {display_result}
                </div>
            </div>      
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        content_map: state.updateModelReducer.content_map,
        slid: state.selectedReducer.slid,
    } };

export default connect(mapStateToProps)(Slid);