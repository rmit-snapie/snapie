import axios from 'axios';
import {SIGN_IN_ERROR, SIGNED_IN, SIGNING_IN} from '../types';
import {SIGN_IN_API} from '../../../environments/constants';

export const login = credentials => {
  return async function(dispatch) {
    dispatch({type: SIGNING_IN});
    try {
      console.log(credentials);
      const signIn = await axios.post(SIGN_IN_API, credentials);
      if (signIn.data.error) {
        dispatch({type: SIGN_IN_ERROR, payload: signIn.data.error});
      } else {
        dispatch({type: SIGNED_IN, payload: signIn.data.username});
      }
    } catch (e) {
      console.log(e);
    }
  };
};
