import {INITIALIZE_LOCAL_QUESTIONS} from '../types';
import {getLocalTestQuestions} from '../../helpers/QuestionHelper';

let questions, stage, level, test;

const questionsContentReducer = (state = [], action) => {
  switch (action.type) {
    case INITIALIZE_LOCAL_QUESTIONS:
      ({stage, level, test} = action.payload);
      questions = getLocalTestQuestions(stage, level, test);
      return [...state, ...questions];
    default:
      return state;
  }
};

export default questionsContentReducer;
