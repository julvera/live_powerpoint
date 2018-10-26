import React, { Component } from 'react';
import Content from '../../common/content/components/Content.js'
import './BrowseContentPanel.css'
import { connect } from 'react-redux';


class BrowseContentPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let display_result = []
		for(let contents in this.props.content_map){
			display_result.push(<Content key={contents} content={this.props.content_map[contents]} displayContentMode={'Full'}> </Content>)
        }
        
        return (
            <div className="thumbnail">
                BrowseContentPanel : 
                <div className="thumbnail">
                    {display_result}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        content_map: state.updateModelReducer.content_map,
    } };


export default connect(mapStateToProps)(BrowseContentPanel);
