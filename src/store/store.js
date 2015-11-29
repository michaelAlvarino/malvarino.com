import Dispatcho from '../dispatcher/dispatcher'
import {EventEmitter} from 'events'
import Constants from '../constants/constants'

const CHANGE_EVENT = "change";

var Store = {
	data: [],
	timesTwo: (inpu) => {
		return inpu*2;
	}
};

Dispatcho.register((payload) => {
	console.log(payload);
	switch(payload.actionType){
		case Constants.CALCULATE:
			console.log("switch/case");
			let calc = payload.item.target.previousElementSibling.value;
			console.log(calc.toString());
			console.log(Store.timesTwo(calc));
			break;

		default:
			//no-op
	}
});

export default Store;