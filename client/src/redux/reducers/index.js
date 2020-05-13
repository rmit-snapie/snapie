import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import progressReducer from './ProgressReducer';
import questionsContentReducer from './QuestionsContentReducer';
import vocabulariesReducer from './VocabulariesReducer';

const rootReducer = combineReducers({
  userReducer,
  progressReducer,
  questionsContentReducer,
  vocabulariesReducer,
});

export default rootReducer;
