// Once an action is invoked, you pass info to the dispatcher
// You'll need the gestapo / dispatcher here
// import { gestapo }
export default const CalcActions = {
	Calculate: (inputString) => {
    // --------------
    // --- STEP 2 ---
    // --------------
		// We'll assume that the this.calculate function in Step 1 invoked this 
    // Calculate method and pass the <input> string here.
    //
    // Now that we have the string, we can let the dispatcher notify 
    // all Stores that an action has been invoked by 'dispatching' an 
    // action. How do the stores know which actions they need to respond to?
    // By giving it a label (actionType). Check out an example:

    // gestapo.dispatch ({
    //   actionType: CONSTANT.CALCULATE,  //<-- This is the label CalcStore
    //                                    //    will look for
    //   inputString: inputString //<-- this is the raw info CalcStore needs
    // })

    // Aside: In Flux, the Dispatcher dispatches info to every single store.
    //        It's up to the Store to decide if it needs to do anything.
    //        This map might help: http://fluxxor.com/images/flux-complex.png

    // Go to dispatcher.js for Step 3
	},

}