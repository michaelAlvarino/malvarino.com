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
		// only handle the change if it exists
		// without this conditional, handlechange is called when handleSubmit changes
		// the value attribute of our input field. this could normally be resolved by
		// displaying the result somewhere other than the input field...
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
				<Draggable
					handle=".calculatorHandle"
					axis="both"
					start={{x: 0, y: 0}}
					moveOnStartChange={false}
					grid={[25, 25]}
					zIndex={100}>
					<div className="calculator">
						<div>
							<p className="calculatorHandle">Calculator</p>
						</div>
						<form onSubmit={this.handleSubmit.bind(this)}>
								<input type="text"
                   					onChange={this.handleChange.bind(this)}
                   					value={this.state.calculator}
                   					className="form-control" placeholder="Search"></input>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
					</div>
				</Draggable>
			</div>
		);
	}
}
Calculator.propTypes = { calculator: React.PropTypes.number };
