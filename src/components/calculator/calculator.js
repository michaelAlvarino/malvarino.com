import React, {Component, PropTypes} from 'react'
import {Router, Route, Link} from 'react-router'
import Draggable from 'react-draggable'
import CalcActions from '../../actions/calcActions'
import HomeButton from '../home/homeButton';

/*
* import store
*/
import Store from '../../store/store'

export default class Calculator extends Component{
	constructor(props){
		super(props);
		this.state = Store.getData();
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		if(!!event){this.setState({calculator: event.target.value})};
	}
	componentDidMount(){
		Store.addChangeListener(this.handleChange);
	}
	handleSubmit(event){
		event.preventDefault();
		CalcActions.Calculate(event.target["0"].value);
		this.setState(Store.getData());
	}
	render(){
		return(
			<div>
				<HomeButton/>
				<div className="Calculator">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<input type="text" onChange={this.handleChange.bind(this)} value={this.state.calculator} placeholder="Expression"></input>
						<button type="submit">Calculate</button>
					</form>
				</div>
			</div>
		);
	}
}
Calculator.propTypes = { calculator: React.PropTypes.number };
