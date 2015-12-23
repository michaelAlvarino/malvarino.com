import Dispatcho from '../dispatcher/dispatcher'
import EventEmitter from 'events'
import Constants from '../constants/constants'
import Bst from '../dataStructures/bst'

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
			calculate(payload.item);
			Store.emitChange();
			break;
		default:
			//no-op
	}
});

function calculate(str){
	let bst = new Bst();
	bst.parse(str);
}

export default Store;

