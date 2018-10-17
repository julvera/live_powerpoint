import React, { Component } from 'react';
import './lib/bootstrap-3.3.7-dist/css/bootstrap.min.css';

//extends the object Component
class Main extends Component {
    //class constructor whith given properties
    constructor(props) {
        super(props);
        this.state = {
            msg:"Hello this is an empty react project",
        }; 
    }

    
  //render function use to update the virtual dom
  render() {
    
    return (
    <h1>{this.state.msg}</h1>
    );
  }
}

//export the current classes in order to be used outside
export default Main;
