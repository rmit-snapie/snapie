import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import progressReducer from './ProgressReducer';
import questionTypeStackReducer from './QuestionTypeStackReducer';

const rootReducer = combineReducers({
  userReducer,
  progressReducer,
  questionTypeStackReducer,
});

export default rootReducer;
