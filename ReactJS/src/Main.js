import React from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

import LeftSide from './components/LeftSide/LeftSide';
import MiddleSide from './components/MiddleSide/MiddleSide';
import * as robotsjson from './data/robots.json';
import * as partsjson from './data/robot_parts.json';


class Main extends React.Component{
	constructor(props) {
        super(props);
        let robotListTmp = robotsjson.robots;
        let partListTmp = partsjson.parts;
		this.state = { 
            msg: "welcome to robot shop",
            robot_list: robotListTmp,
            part_list: partListTmp,
        }
    }

    render() {
        return (
          <div className="container-fluid">
            <div className="row">
                <h1>{this.state.msg}</h1>
            </div>
            <div className="row">
                <div className="col-md-4 col-lg-4" >
                    <LeftSide robot_list={this.state.robot_list}/>
                </div>
                <div className="col-md-4 col-lg-4" >
                    <MiddleSide part_list={this.state.part_list}/>

                </div>
                <div className="col-md-4 col-lg-4" >
                
                </div>
            </div>
          </div>
        );
    }
}

//export the current classes in order to be used outside
export default Main;
