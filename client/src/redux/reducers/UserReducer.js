import {LOG_IN, LOGGING_IN} from '../types';

const initialState = {
  loggedIn: false,
  isLoggingIn: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {...state, isLoggingIn: false, loggedIn: action.payload};
    case LOGGING_IN:
      return {...state, isLoggingIn: true};
    default:
      return state;
  }
};

export default userReducer;
