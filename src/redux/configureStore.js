import { combineReducers, createStore } from 'redux';
import counterReducer from './ducks/counter';

const rootReducer = combineReducers({
	counter: counterReducer,
});

const store = createStore(rootReducer);
/* Adam: its bit confusing, but u can just get the general idea, memorize stuff and use it everywhere */

export default store;
