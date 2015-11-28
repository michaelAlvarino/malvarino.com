import React, {Component, PropTypes} from 'react'
import {Router, Route, Link} from 'react-router'
import Draggable from 'react-draggable'
import MaNavbar from '../shared/maNavbar'

export default class Calculator extends Component{
	// TODO: Add state to the component to keep track of the <input> string
	//
	// --------------
	// --- STEP 6 ---
	// --------------
	// Here's where we make the View listen for changes in the store.
	// Basically, we give a callback function to the Store / EventEmitter with
	// an associated label. This callback gets run every single time that 
	// specific label gets emitted.
	// Check out line 77 for behind-the-scenes details.
	//
	// componentDidMount: () => {
  //                 // label               // callback
	//   CalcStore.on( CONSTANT.CHANGE_EVENT, this.updateView );
	// },
	// 
	// EXAMPLE CALLBACK
	// updateView : () => {
	//   this.setState({calculated: CalcStore.calculatedResult });
	//   // React re-renders views on state changes
	//   // So, if we update the calcuated result, it should show up on the 
	//   // real DOM
	// },
	//
	// --------------
	// --- STEP 7 ---
	// --------------
	// Remember to remove the callback from the EventEmitter when you unmount
	// the component. Garbage collection stuff (I think...)
	//
	// componentWillUnmount: () => {
	//   CalcStore.removeListener(CONSTANT.CHANGE_EVENT, this.updateView);
	// },
	//
	// I THINK WE'RE DONE HERE
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
							// --------------
							// --- STEP 1 ---
							// --------------
							// 
							// This is where we'll start in the Flux cycle
							// Add onClick={this.calculate} here
							// this.calculate should be a function that invokes an  
							// ActionCreator (CalcActions). Think
							// calculate: () => { CalcActions.Calculate(this.state.input) }
							//
							// Go to calcActions.js for Step 2
							<button>Calculate!</button>
						</div>
					</div>
				</Draggable>
			</div>
		);
	}
}
// EventEmitter works like this...
// EventEmitter = {
//   @store = {
//  	 label1: [callback1, callback2, callback3],
//     label2: [callback5, callback 7],
//     label3: [callback6]
//   },
//   #on: (label, callback) => {
//     @store[label].push(callback); // i know i didn't account non-existing
//                                   // arrays
//   },
//   #removeListener: (label, callback) => {
//     @store[label].delete(callback); // not a real method
//   },
//   #emit: (label) => {
//	   for (callback in @store[label])  {
//       callback(); // invoke each callback associated with the label
//     }
//   }
// }