import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import counterReducer from './CounterReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
  counterReducer: counterReducer,
});

export default rootReducer;
