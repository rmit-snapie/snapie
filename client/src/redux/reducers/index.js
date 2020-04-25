import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import progressReducer from './ProgressReducer';
import questionsTypeStackReducer from './QuestionsTypeStackReducer';
import questionsContentReducer from './QuestionsContentReducer';

const rootReducer = combineReducers({
  userReducer,
  progressReducer,
  questionsTypeStackReducer,
  questionsContentReducer,
});

export default rootReducer;
