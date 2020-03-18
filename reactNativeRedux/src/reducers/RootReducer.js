import {combineReducers} from 'redux';
import bookReducer from './BookReducer';
const rootReducer = combineReducers({bookReducer});
export default rootReducer;

import {createStore} from 'redux';
// import {rootReducer} from './src/reducers/RootReducer';

export const store = createStore(rootReducer);
