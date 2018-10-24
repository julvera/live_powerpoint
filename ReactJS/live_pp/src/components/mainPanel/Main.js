import React from 'react';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import './main.css';
import BrowseContentPanel from '../browseContentPanel/components/BrowseContentPanel.js';
import Slid from '../common/slid/components/Slid.js';


import * as contentJson from '../../data/contentMap.json';

export default class Main extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='container-fluid height-100'>
				<div className="row height-100">
					<div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
						
					</div>
					<div className='col-md-6 col-lg-6 height-100 thumbnail'>
						<Slid id="1" title="This is a title" 
						txt="This is a text" content_id="2" 
						contentMap={contentJson} displayMode="SHORT"/>
					</div>
					<div className='col-md-3 col-lg-3 height-100 vertical-scroll thumbnail'>
						<BrowseContentPanel contentMap={contentJson}/>
					</div>
				</div>
			</div>
		);
	}
}



				