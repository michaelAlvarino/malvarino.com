import React, {Component, PropTypes} from 'react'
import {Router, Route, Link} from 'react-router'
import calculate from '../../actions/calcActions'
import HomeButton from '../home/homeButton'
import CalcInput from './calcInput'
import Enumerator from './enumerator'

/*
* import store
*/
import Store from '../../store/reduxStore'

export default class Calculator extends Component{
	constructor(props){
		super(props);
		this.state = {
			solution: 0,
			prefixQueue: [],
			operators: [],
			prefixes: []
		};
	}
	handleSubmit(event){
		event.preventDefault();
		Store.dispatch(calculate(event.target["0"].value));
		let _state = Store.getState().calculator;
		this.setState({
			solution: _state.solution,
			prefixQueue: _state.prefixQueue,
			operators: _state.operators,
			prefixes: _state.prefixes
		});
	}
	render(){
		return(
			<div>
				<HomeButton/>
				<div className="Calculator">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<CalcInput solution={this.state.solution}/>
		        <button type="submit">Calculate</button>
					</form>
					<div className="enumerations">
						<Enumerator classProp="prefixEnumerator" toEnumerate={this.state.prefixes} />
						<Enumerator classProp="operatorsEnumerator" toEnumerate={this.state.operators} />
						<Enumerator classProp="prefixQueueEnumerator" toEnumerate={this.state.prefixQueue} />
					</div>
				</div>
			</div>
		);
	}
}
Calculator.propTypes = {solution: PropTypes.number}
