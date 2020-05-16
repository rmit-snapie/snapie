import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import progressReducer from './ProgressReducer';
import questionsContentReducer from './QuestionsContentReducer';

const rootReducer = combineReducers({
  userReducer,
  progressReducer,
  questionsContentReducer,
});

export default rootReducer;
