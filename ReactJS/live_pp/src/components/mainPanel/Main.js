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

		var comm = new Comm()

		comm.loadContent((contentMap) => {

			store.dispatch(updateContentMap(contentMap));

			comm.loadPres('',(pres) => {

				store.dispatch(updatePresentation(pres));
				comm.socketConnection(pres.id)

			},
			(error)=>{

				console.log("Error loadPres :");
				console.log(error);

			});

		},
		(error)=>{

			console.log("Error loadContent  :   ");
			console.log(error);

		});
	
	}
	
	render() {		
 		return (
			<Provider store={store} >
				<div className='container-fluid height-100'>
				<button onclick="comm.play()">Start</button>
				<button onclick="comm.end()">End</button>
				<button onclick="comm.pause()">Pause</button>
				<button onclick="comm.begin()">Begin</button>
				<button onclick="comm.backward()">Prev</button>
				<button onclick="comm.forward()">Next</button>
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



				