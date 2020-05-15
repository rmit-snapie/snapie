import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import progressReducer from './ProgressReducer';
import questionsContentReducer from './QuestionsContentReducer';
import vocabulariesReducer from './VocabulariesReducer';
import recentReducer from './RecentReducer';

const rootReducer = combineReducers({
  userReducer,
  progressReducer,
  questionsContentReducer,
  vocabulariesReducer,
  recentReducer
});

export default rootReducer;
