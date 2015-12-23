/*
* import the dispatcher to emit actions
*/
import Dispatcho from '../dispatcher/dispatcher'
import Constants from '../constants/constants'

/*
* Calculate action
*/
const CalcActions = {
	// define the function
	Calculate: (data) => {
		//dispatch the action
		Dispatcho.dispatch({
			actionType: Constants.CALCULATE,
			item: data
		});
	}
}

export default CalcActions;