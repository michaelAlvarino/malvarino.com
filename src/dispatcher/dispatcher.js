// ----------------
// --- STEP 2.5 ---
// ----------------
// You'll need a CalculatorStore for 'business' logic
// That will require the EventEmitter library
// Note: The EventEmitter communicates changes in the Store to React components. More on that in a little bit.

// Jump to line 54 for the Store stuff

// import EventEmitter or something
import { Dispatcher } from 'flux';
const gestapo = new Dispatcher();

const CONSTANTS = {
	CALCULATE: "CALCULATE"//,
// CHANGE_EVENT: "CHANGE_EVENT"
}
 
// var _calculatedResult = null; // doesn't have to be this data structure

// Extend CalcActions with EventEmitter
// const CalcStore = assign({}, EventEmitter.prototype, {
//   --------------
//   --- STEP 4 ---
//   --------------
//   So, here's the business logic where you'll actual do stuff. When you 
//   finish the logic, save the result to a private variable (line 19). 
//   Here's also where you'll 'send' information back to the React 
//   components to update views. 
//   
//   How do we send information back? EventEmitter. When you finish the 
//   logic, you emit an event. The React component will listen for this 
//   specfic event and update itself
//
//   calculate: (string) => {
//     // Do string parse stuff
//     _calculatedResult = result;              //<--- Store calculated value
//     CalcStore.emit(CONSTANTS.CHANGE_EVENT)); //<--- Emitting an event
//                                              //     which let's the View
//                                              //     know that the Store
//                                              //     has been updated
//
//     // Go to line 45...
//   },
//   ----------------
//   --- STEP 4.5 ---
//   ----------------
//   Let the View 'pull' information from the Store. You'll see what I mean.
//   
//   calculatedResult: () => {
//     return _calculatedResult; 
//
//     // Go to 'components/calculator.js' line 9
//   },
// 
//   --------------
//   --- STEP 3 ---
//   --------------
//   Here's where our Store listens for dispatches. We receive a 'payload' 
//   which should be the JSON object we dispatched in Step 2:
//   payload -> { actionType: CONSTANTS.CALCULATE, inputString: inputString }
// 
//   dispatchId: gestapo.register( (payload) => {
//     switch (payload.actionType) {  //<--- Looking at actionType
//
//       case CONSTANTS.CALCULATE: //<--- If it's releveant, do something
//         calculate(payload.string); //<--- Invoke some specific logic to 
//                                    //     'calculate'
//         break;
//
//         // Go to line 23 for Step 4
//     }
//   })
// })