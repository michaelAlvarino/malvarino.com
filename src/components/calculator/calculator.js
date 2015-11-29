import React, {Component, PropTypes} from 'react'
import {Router, Route, Link} from 'react-router'
import Draggable from 'react-draggable'
import MaNavbar from '../shared/maNavbar'
import CalcActions from '../../actions/calcActions'

/*
* import store
*/
import Store from '../../store/store'

export default class Calculator extends Component{
	handleClick(e){
		console.log(e);
		CalcActions.Calculate(e);
	}
	render(){
		return(
			<div>
				<MaNavbar/>
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
						<div>
							<input type="text"></input>
							<input type="submit" value="Calculate!" onClick={this.handleClick.bind(this)}></input>
						</div>
					</div>
				</Draggable>
			</div>
		);
	}
}
