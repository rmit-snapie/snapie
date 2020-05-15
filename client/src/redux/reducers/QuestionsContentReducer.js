import {
  INITIALIZE_LOCAL_QUESTIONS,
  INITIALIZE_QUESTIONS,
  SET_CURRENT_QUESTION,
} from '../types';
import {STAGE_ONE} from '../../domain-models/stage-1/StageOneQuestions';
import {
  getLocalTestQuestions,
  getTestQuestions,
} from '../../helpers/QuestionHelper';
import {getOnlineQuestions} from '../../helpers/OnlineQuestionHelper';

// let questions, stage, level, test;

const initialState = {
  currentQuestion: {},
  testQuestions: [],
};

const questionsContentReducer = (state = initialState, action) => {
  let questions, stage, level, test;
  // console.log('questioncontentreducer  > currentStage: ', stage);
  switch (action.type) {
    case INITIALIZE_LOCAL_QUESTIONS:
      ({stage, level, test} = action.payload);
      // questions = getLocalTestQuestions(stage, level, test);
      // todo: do not get data here, will have bug....
      questions = getTestQuestions(action.payload);
      state = questions;
      return state;
    case INITIALIZE_QUESTIONS:
      // state = action.payload;
      // console.log(
      //   'questionsContentReducer > INITIALIZE_QUESTIONS > testQuestions: ',
      //   action.payload,
      // );
      return {...state, testQuestions: action.payload};
    case SET_CURRENT_QUESTION:
      // console.log(
      //   'questionsContentReducer > SET_CURRENT_QUESTION > save to currentQuestion: ',
      //   action.payload,
      // );
      return {...state, currentQuestion: action.payload};
    default:
      return state;
  }
};

export default questionsContentReducer;
