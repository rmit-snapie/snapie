import {INITIALIZE_LOCAL_QUESTIONS, INITIALIZE_QUESTIONS} from '../types';
import {getOnlineQuestions} from '../../helpers/QuestionHelper';
export function setLocalQuestions(currentProgress) {
  return function(dispatch) {
    dispatch({
      type: INITIALIZE_LOCAL_QUESTIONS,
      payload: currentProgress,
    });
  };
}

export function setQuestions(data) {
  return function(dispatch) {
    dispatch({
      type: INITIALIZE_QUESTIONS,
      payload: data,
    });
  };
}

// export function setFirstOnlineQuestion(data) {
//   return function(dispatch) {
//     dispatch({
//       type: INITIALIZE_ONLINE_QUESTIONS,
//       payload: data,
//     });
//   };
// }
