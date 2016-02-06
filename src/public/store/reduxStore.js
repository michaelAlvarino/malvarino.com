import {createStore} from 'redux';
import reducer from '../reducers/reducers'

// make a redux store
const Store = createStore(reducer);

// export it...
export default Store;
