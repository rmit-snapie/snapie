import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import progressReducer from './ProgressReducer';
import questionsContentReducer from './QuestionsContentReducer';
import reviewScreen from './ReviewScreen';

const rootReducer = combineReducers({
  userReducer,
  progressReducer,
  questionsContentReducer,
  reviewScreen
});

export default rootReducer;
