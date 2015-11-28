import { Dispatcher } from 'flux';
const gestapo = new Dispatcher();

const CONSTANTS = {
	CALCULATE: "CALCULATE"
}

gestapo.dispatch({
	type: CONSTANTS.CALCULATE,
	string: string
})