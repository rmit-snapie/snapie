import {
  INITIALIZE_LOCAL_QUESTIONS,
  INITIALIZE_ONLINE_QUESTIONS,
} from '../types';
import {STAGE_ONE} from '../../domain-models/stage-1/StageOneQuestions';
import {getLocalTestQuestions} from '../../helpers/QuestionHelper';
import {getOnlineQuestions} from '../../helpers/OnlineQuestionHelper';

let questions, stage, level, test;

const initialState = STAGE_ONE[0][0];

const questionsContentReducer = (state = initialState, action) => {
  // console.log('questioncontentreducer  > currentStage: ', stage);
  switch (action.type) {
    case INITIALIZE_LOCAL_QUESTIONS:
      ({stage, level, test} = action.payload);
      questions = getLocalTestQuestions(stage, level, test);
      state = questions;
      return state;
    case INITIALIZE_ONLINE_QUESTIONS:
      // ({stage, level, test} = action.payload);
      // eslint-disable-next-line no-case-declarations

      // getOnlineQuestions(action.payload).then(result => {
      //   let onlineQuestions = result;
      //   console.log(
      //     'questioncontentreducer > getonlinequestion > resutl: ',
      //     result,
      //   );
      //   state = onlineQuestions;
      //   // return initialState;
      //   return result;
      // });
      return action.payload;
    // return state;
    default:
      return state;
  }
};

export default questionsContentReducer;
