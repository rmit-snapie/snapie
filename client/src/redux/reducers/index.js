import {combineReducers} from 'redux';
import progressReducer from './ProgressReducer';
import questionsContentReducer from './QuestionsContentReducer';
import vocabulariesReducer from './VocabulariesReducer';
import progressCounterReducer from './ProgressCounterReducer';

const rootReducer = combineReducers({
  progressReducer,
  questionsContentReducer,
  vocabulariesReducer,
  progressCounterReducer,
});

export default rootReducer;
