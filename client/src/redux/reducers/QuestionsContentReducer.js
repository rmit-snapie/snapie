import {INITIALIZE_LOCAL_QUESTIONS} from '../types';
import {getLocalTestQuestions} from '../../helpers/QuestionHelper';
import {STAGE_ONE} from '../../domain-models/stage-1/StageOneQuestions';

let questions, stage, level, test;
const initialState = STAGE_ONE[0][0];

const questionsContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE_LOCAL_QUESTIONS:
      ({stage, level, test} = action.payload);
      questions = getLocalTestQuestions(stage, level, test);
      state = questions;
      return state;
    default:
      return state;
  }
};

export default questionsContentReducer;
