// Login
import {LOG_IN, LOGGING_IN} from '../types';

export function login(state) {
  return function(dispatch) {
    dispatch({type: LOGGING_IN});
    dispatch({type: LOG_IN, payload: state});
  };
}
