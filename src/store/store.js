import Dispatcho from '../dispatcher/dispatcher'
import EventEmitter from 'events'
import Constants from '../constants/constants'

const CHANGE_EVENT = "change";

class StoreCls extends EventEmitter {

	constructor() {
		super();
		this.data = {
			calculator: null
		};
	}

	getData(){
		return this.data;
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
}

const Store = new StoreCls();

Store.dispatchToken = Dispatcho.register((payload) => {
	switch(payload.actionType){
		case Constants.CALCULATE:
			// console.log("debug: " + payload.item);
			Store.data.calculator = eval(payload.item);
			// console.log(Store.data.calculator);
			Store.emitChange();
			break;
		default:
			//no-op
	}
});

export default Store;
