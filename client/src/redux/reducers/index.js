import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import progressReducer from './ProgressReducer';
import questionsContentReducer from './QuestionsContentReducer';
import vocabulariesReducer from './VocabulariesReducer';
import progressCounterReducer from './ProgressCounterReducer';

const rootReducer = combineReducers({
  userReducer,
  progressReducer,
  questionsContentReducer,
  vocabulariesReducer,
  progressCounterReducer,
});

export default rootReducer;
