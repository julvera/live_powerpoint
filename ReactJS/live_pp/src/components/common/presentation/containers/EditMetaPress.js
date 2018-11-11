import React from 'react';

export default class EditMetaPress extends React.Component{
    constructor(props) {
        super(props);
        this.stage = {
        }
    }
    render(){
        return (
            <div className="form-group">
                <label htmlFor="currentPresentationTitle">Title </label>
                <input
                    type="text"
                    className="form-control"
                    id="currentPresentationTitle"
                    onChange={this.props.handleChangeTitle}
                    value={this.props.title}
                    />
                <label htmlFor="currentDescriptionText">Description</label>
                <textarea
                    rows="5"
                    type="text"
                    className="form-control"
                    id="currentDescriptionText"
                    onChange={this.props.handleChangeDescription}
                    value={this.props.description}>
                </textarea>
            </div>
        ); 
    }
}