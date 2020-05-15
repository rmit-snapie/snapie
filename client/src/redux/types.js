//users reducer
export const LOG_IN = 'LOG_IN';
export const LOGGING_IN = 'LOGGING_IN';

//progress reducer
export const PLAY = 'PLAY';
export const REPLAY = 'REPLAY';
export const STOP = 'STOP';
export const COMPLETED_A_QUESTION = 'COMPLETED_A_QUESTION';
export const COMPLETED_A_REPLAY_QUESTION = 'COMPLETED_A_REPLAY_QUESTION';
export const COMPLETED_A_TEST = 'COMPLETED_A_TEST';
export const COMPLETED_A_LEVEL = 'COMPLETED_A_LEVEL';
export const COMPLETED_A_STAGE = 'COMPLETED_A_STAGE';

//question type stack reducer
export const SET_CURRENT_STACK = 'SET_CURRENT_STACK';
export const POP_CURRENT_STACK = 'POP_CURRENT_STACK';

//questions content reducer
export const INITIALIZE_LOCAL_QUESTIONS = 'INITIALIZE_LOCAL_QUESTIONS';

//vocabularies reducer
export const ADD_NEW_VOCABULARY = 'ADD_NEW_VOCABULARY';
export const REMOVE_VOCABULARY = 'REMOVE_VOCABULARY';

//progress counter reducer
export const INCREMENT_QUESTION_COUNTER = 'INCREMENT_QUESTION_COUNTER';
export const INCREMENT_TEST_COUNTER = 'INCREMENT_TEST_COUNTER';
export const INCREMENT_LEVEL_COUNTER = 'INCREMENT_LEVEL_COUNTER';
export const INCREMENT_STAGE_COUNTER = 'INCREMENT_STAGE_COUNTER';
