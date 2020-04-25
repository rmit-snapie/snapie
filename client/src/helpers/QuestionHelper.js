import {STAGE_ONE_LEVEL_ONE} from '../domain-models/stage-1/level-1';

export const getLocalTestQuestions = (stage, level, test) => {
  if (stage === 1) {
    if (level === 1) {
      return STAGE_ONE_LEVEL_ONE[test - 1];
    }
  }
};

export const createBlanks = answer => {
  let blanks = [];
  for (let i = 0; i < answer.length; i++) {
    blanks.push('_');
  }
  return blanks;
};

export const shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
