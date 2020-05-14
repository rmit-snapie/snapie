import {INITIALIZE_LOCAL_QUESTIONS, INITIALIZE_QUESTIONS} from '../types';
import {STAGE_ONE} from '../../domain-models/stage-1/StageOneQuestions';
import {
  getLocalTestQuestions,
  getTestQuestions,
} from '../../helpers/QuestionHelper';
import {getOnlineQuestions} from '../../helpers/OnlineQuestionHelper';

let questions, stage, level, test;

const initialState = STAGE_ONE[0][0];

const questionsContentReducer = (state = initialState, action) => {
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
      stage = action.payload;
      return stage;

    default:
      return state;
  }
};

export default questionsContentReducer;
