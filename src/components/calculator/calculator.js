import React, {Component, PropTypes} from 'react'
import {Router, Route, Link} from 'react-router'
import Draggable from 'react-draggable'
import MaNavbar from '../shared/maNavbar'

export default class Calculator extends Component{
	render(){
		return(
			<div className="container">
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
							<input type="form-control"></input>
							<button>click</button>
						</div>
					</div>
				</Draggable>
			</div>
		);
	}
}
