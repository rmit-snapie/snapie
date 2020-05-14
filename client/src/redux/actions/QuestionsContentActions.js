import {
  INITIALIZE_LOCAL_QUESTIONS,
  INITIALIZE_ONLINE_QUESTIONS,
} from '../types';
import {getOnlineQuestions} from '../../helpers/QuestionHelper';
export function setLocalQuestions(currentProgress) {
  return function(dispatch) {
    dispatch({
      type: INITIALIZE_LOCAL_QUESTIONS,
      payload: currentProgress,
    });
  };
}

export function setOnlineQuestions(currentProgress) {
  // return function(dispatch) {
  //   getOnlineQuestions(currentProgress).then(result => {
  //     // let onlineQuestions = result;
  //     console.log(
  //       'questioncontentaction> setonlinequestion > getOnlineQuestions > resutl: ',
  //       result,
  //     );
  //     return dispatch({
  //       type: INITIALIZE_ONLINE_QUESTIONS,
  //       payload: result,
  //     });
  //   });
  // };

  return function(dispatch) {
    dispatch({
      type: INITIALIZE_ONLINE_QUESTIONS,
      payload: currentProgress,
    });
  };
}

export function setFirstOnlineQuestion(data) {
  return function(dispatch) {
    dispatch({
      type: INITIALIZE_ONLINE_QUESTIONS,
      payload: data,
    });
  };
}
