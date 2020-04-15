import {questions} from '../domain-models/Questions';

export const getQuestions = type => {
  return questions.filter(question => question.type === type);
};

export const createBlanks = answer => {
  let blanks = [];
  for (let i = 0; i < answer.length; i++) {
    blanks.push('_');
  }
  return blanks;
};
