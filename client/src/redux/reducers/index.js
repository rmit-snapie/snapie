import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import progressReducer from './ProgressReducer';

const rootReducer = combineReducers({
  userReducer,
  progressReducer,
});

export default rootReducer;
