import {SIGNING_IN, SIGN_IN_ERROR, SIGNED_IN} from '../types';

const initialState = {
  loading: false,
  username: 'Jake the Dog',
  error: null,
};

const useReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNING_IN:
      return {...state, loading: true};
    case SIGNED_IN:
      return {...state, loading: false, username: action.payload, error: null};
    case SIGN_IN_ERROR:
      return {...state, loading: false, error: action.payload};
    default:
      return state;
  }
};

export default useReducer;
