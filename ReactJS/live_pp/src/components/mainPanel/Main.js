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
		}
		//store.dispatch(updateContentMap(contentJson));
		//store.dispatch(updatePresentation(presJson));

		this.loadContentUpdate=this.loadContentUpdate.bind(this);
		this.loadPresUpdate=this.loadPresUpdate.bind(this);
		this.callbackErr =this.callbackErr.bind(this);
		

		this.comm.loadContent(this.loadContentUpdate,this.callbackErr);
		this.comm.loadPres(0,this.loadPresUpdate,this.callbackErr);
		this.comm.socketConnection(store.getState().updateModelReducer.presentation.id);

		store.subscribe(() => {
			this.setState({presentation:store.getState().updateModelReducer.presentation});
			this.setState({contentMap:store.getState().updateModelReducer.content_map});
			switch (store.getState().commandReducer.cmdPres){
				case 'SAVE_CMD':
					this.comm.savPres(store.getState().updateModelReducer.presentation,this.callbackErr);
					store.dispatch(sendNavCmd(""));
					return
				case 'START':
					console.log(store.getState().updateModelReducer.presentation.id)
					this.comm.play(store.getState().updateModelReducer.presentation.id);
					store.dispatch(sendNavCmd(""));
					return
				case 'END':
					this.comm.end();
					store.dispatch(sendNavCmd(""));
					return
				case 'PAUSE':
					this.comm.pause();
					store.dispatch(sendNavCmd(""));
					return
                case 'BEGIN':
					this.comm.begin();
					store.dispatch(sendNavCmd(""));
                    return 
                case 'NEXT':
					this.comm.forward();
					store.dispatch(sendNavCmd(""));
                    return 
                case 'PREV':
					this.comm.backward()
					store.dispatch(sendNavCmd(""));
					return 
				default:
					return
			}
		});
	};

	loadContentUpdate(data){
		store.dispatch(updateContentMap(data));
	}
	   
	loadPresUpdate(data){
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



				