import React, {Component} from 'react';
import '../../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';
import './main.css';

import BrowseContentPanel from '../browseContentPanel/components/BrowseContentPanel.js';
import EditSlidPanel from '../editSlidPanel/containers/EditSlidPanel.js';
import BrowsePresentationPanel from '../browsePresentationPanel/components/BrowsePresentationPanel.js';
import Comm from '../../services/Comm';

//import needed to use redux with react.js
import { connect } from 'react-redux';
import { createStore } from 'redux';
import myReducers from '../../reducers'
import {updateContentMap,updatePresentation, sendNavCmd} from '../../actions';

import { Provider } from 'react-redux';

//json import
import * as contentJson from '../../data/contentMap.json';
import * as presJson from '../../data/pres.json'

const store = createStore(myReducers);

class Main extends Component{
	constructor(props) {
		super(props);
		

		this.comm = new Comm()
		this.state = {
			contentMap:contentJson,
			current_pres:presJson,
		}

		this.loadContentUpdate=this.loadContentUpdate.bind(this);
		this.loadPresUpdate=this.loadPresUpdate.bind(this);
		this.callbackErr =this.callbackErr.bind(this);
		
		//FIRST ACTIONS
		// try to load the contentMap from the server
		this.comm.loadContent(this.loadContentUpdate,this.callbackErr);
		// try to load the presentation from the server
		this.comm.loadPres(0,this.loadPresUpdate,this.callbackErr);
		// create the sokect connection between the server and the web browser
		this.comm.socketConnection(this.state.uuid);

		store.subscribe(() => {
			this.setState({presentation:store.getState().updateModelReducer.presentation});
			this.setState({contentMap:store.getState().updateModelReducer.content_map});
			if(store.getState().commandReducer.cmdPres == 'SAVE_CMD'){
				console.log('callingSave')
				this.comm.savPres(store.getState().updateModelReducer.presentation,this.callbackErr);
				console.log("reset cmd");
				store.dispatch(sendNavCmd(""));
			}
		});

		
 

		/*
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

		});*/
	
	}
	loadContentUpdate(data){
		//send action to the store for update the current contentMap
		store.dispatch(updateContentMap(data));
	}
	   
	loadPresUpdate(data){
		//send action to the store for update the current presentation
		store.dispatch(updatePresentation(data));
	}
	   
	callbackErr(msg){
		console.error('Network Failure ?');
		console.error(msg);
	}
	   
	render() {		
 		return (
			<Provider store={store}>
			<div className='container-fluid height-100'>
				<div className="row height-100">
					<div className='col-md-3 col-lg-3 height-100'>
						<BrowsePresentationPanel></BrowsePresentationPanel>
					</div>
					<div className='col-md-6 col-lg-6 height-100'>
						<EditSlidPanel></EditSlidPanel>
					</div>
					<div className='col-md-3 col-lg-3 height-100 vertical-scroll'>
						<BrowseContentPanel> </BrowseContentPanel>
					</div>
				</div>
			</div>
		</Provider>
		);
	}
}

export default Main;



				