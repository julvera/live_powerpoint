import React, { Component } from 'react';
import Content from '../../common/content/components/Content.js'
import './BrowseContentPanel.css'

class BrowseContentPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let display_result = []
		for(let contents in this.props.contentMap){
			display_result.push(<Content key={contents} content={this.props.contentMap[contents]} displayContentMode={'Full'}> </Content>)
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

export default BrowseContentPanel;