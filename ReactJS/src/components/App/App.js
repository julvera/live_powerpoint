import React, {Component} from 'react';


class App extends (Component) {
	constructor(props) {
        super(props);

        this.state = {
            title: 'This is my title',
            mouse_over_num: 0,
        }

        this.handleChangeTitle=this.handleChangeTitle.bind(this);
        this.handleMouseOver=this.handleMouseOver.bind(this);
    }

    handleChangeTitle(ev){
        this.setState({
            title: ev.target.value,
        });
    }

    handleMouseOver(ev){
        this.setState({
            mouse_over_num: this.state.mouse_over_num + 1,
        });
    }

    render() {
		return (
			<div >
                <h1>{this.state.title}
                    <span className="badge badge-primary">
                    {this.state.mouse_over_num}</span>
                </h1>
                <label htmlFor="titleInput">Change this shitty title </label>
                    <input type="text" id="titleInput"
                    onChange={this.handleChangeTitle}
                    value={this.state.title}/>
                <div onMouseOver={this.handleMouseOver}>
                    <h2>{this.props.component_title}</h2>
                </div>
			</div>
		);
	} 
}

//export the current classes in order to be used outside
export default App;
