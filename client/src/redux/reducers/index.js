import {combineReducers} from 'redux';
import progressReducer from './ProgressReducer';
import questionsContentReducer from './QuestionsContentReducer';

const rootReducer = combineReducers({
  progressReducer,
  questionsContentReducer,
});

export default rootReducer;
