import React from 'react';
import './main.css';
import Content from '../common/content/Content.js'
import * as slidesJson from '../../data/contentMap.json';

export default class Main extends React.Component{
	constructor(props) {
		super(props);
		let slideListTmp = slidesJson.temp;
        this.state = {
            slide_list: slideListTmp,
        }; 
	}
	render() {
		return (
			<div>
				<Content slide_list={this.state.slide_list}></Content>
			</div>
		);
	}
}
