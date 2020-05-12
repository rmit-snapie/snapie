import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import progressReducer from './ProgressReducer';
import questionsContentReducer from './QuestionsContentReducer';
import navigationReducer from './NavigationReducer';

const rootReducer = combineReducers({
  userReducer,
  progressReducer,
  questionsContentReducer,
  navigationReducer,
});

export default rootReducer;
