import React, { Component } from 'react';
import PresentationVisual from '../containers/PresentationVisual.js'
import './Presentation.css'
import EditPresSlide from '../containers/EditMetaPress.js'

class Presentation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.presentation.title,
            description: this.props.presentation.description,
            slidArray: this.props.presentation.slidArray,
            contentMap: this.props.contentMap
        }
        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleChangeDescription=this.handleChangeDescription.bind(this);
    }

    handleChangeTitle(e){
        this.setState({title:e.target.value});
    }

    handleChangeDescription(e){
        this.setState({description:e.target.value});
    }

    render() {
        console.log(this.props.presentation)
        let display_result = [];
        if(this.props.displayMode == "FULL_MNG"){
            display_result.push(<EditPresSlide key={this.props.id} 
                                handleChangeTitle={this.handleChangeTitle} 
                                handleChangeDescription={this.handleChangeDescription}
                                title={this.state.title}
                                description={this.state.description}/>)
        }

        return (
            <div className="thumbnail">
                <div>
                    {display_result}
                </div>
               <PresentationVisual title={this.state.title} 
                                description={this.state.description}
                                slidArray={this.props.presentation.slidArray}
                                contentMap={this.props.contentMap}/>
            </div>
        );
    }
}

export default Presentation;