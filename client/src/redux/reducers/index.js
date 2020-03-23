import {combineReducers} from 'redux';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  userReducer: userReducer,
});

export default rootReducer;
