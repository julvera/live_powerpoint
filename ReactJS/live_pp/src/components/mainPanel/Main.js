import React from 'react';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import './main.css';
import BrowseContentPanel from '../browseContentPanel/components/BrowseContentPanel.js';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel.js';
import BrowsePresentationPanel from '../browsePresentationPanel/components/BrowsePresentationPanel.js';
import Comm from '../../services/Comm';

//import needed to use redux with react.js
import { createStore } from 'redux';
import myReducers from '../../reducers'
import {updateContentMap,updatePresentation} from '../../actions';

import { Provider } from 'react-redux';

//json import
//import * as contentJson from '../../data/contentMap.json';
//import * as presJson from '../../data/pres.json'

const store = createStore(myReducers);

export default class Main extends React.Component{
	constructor(props) {
		super(props);

		//store.dispatch(updateContentMap(contentJson));
		//store.dispatch(updatePresentation(presJson));

		Comm.loadContent((data) => {
			store.dispatch(updateContentMap(data));
		},
		(error)=>{
			console.log("Error loadContent  :   ");
			console.log(error);
		});

		Comm.loadPres('',(data) => {
			store.dispatch(updatePresentation(data));
		},
		(error)=>{
			console.log("Error loadPres :");
			console.log(error);
		});


		
	}
	
	render() {		
 		return (
			<Provider store={store} >
				<div className='container-fluid height-100'>
				<button onclick="Comm.play('efa0a79a-2f20-4e97-b0b7-71f824bfe349')">Start</button>
				<button onclick="Comm.end()">End</button>
				<button onclick="Comm.pause()">Pause</button>
				<button onclick="Comm.begin()">Begin</button>
				<button onclick="Comm.backward()">Prev</button>
				<button onclick="Comm.forward()">Next</button>
					<div className="row height-100">
						<div className='col-md-3 col-lg-3 height-100 vertical-scroll thumnail'>
							<BrowsePresentationPanel />
						</div>
						<div className='col-md-6 col-lg-6 height-100 thumbnail'>
							<EditSlidPanel/>
						</div>
						<div className='col-md-3 col-lg-3 height-100 vertical-scroll thumbnail'>
							<BrowseContentPanel/>
						</div>
					</div>
				</div>
			</Provider>
		);
	}
}



				