import {combineReducers} from 'redux';
import progressReducer from './ProgressReducer';
import questionsContentReducer from './QuestionsContentReducer';
import vocabulariesReducer from './VocabulariesReducer';
import progressCounterReducer from './ProgressCounterReducer';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  progressReducer,
  questionsContentReducer,
  vocabulariesReducer,
  progressCounterReducer,
  userReducer,
});

export default rootReducer;
