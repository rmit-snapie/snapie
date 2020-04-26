import {STAGE_ONE_LEVEL_ONE} from '../domain-models/stage-1/level-1';
import {STAGE_ONE_LEVEL_TWO} from '../domain-models/stage-1/level-2';
import {STAGE_ONE_LEVEL_THREE} from '../domain-models/stage-1/level-3';
import {STAGE_TWO_LEVEL_ONE} from '../domain-models/stage-2/level-1';
import {STAGE_TWO_LEVEL_TWO} from '../domain-models/stage-2/level-2';
import {STAGE_TWO_LEVEL_THREE} from '../domain-models/stage-2/level-3';

export const getLocalTestQuestions = (
  stage: number,
  level: number,
  test: number,
) => {
  if (stage === 1) {
    if (level === 1) {
      return STAGE_ONE_LEVEL_ONE[test];
    } else if (level === 2) {
      return STAGE_ONE_LEVEL_TWO[test];
    }
    return STAGE_ONE_LEVEL_THREE[test];
  } else if (stage === 2) {
    if (level === 1) {
      return STAGE_TWO_LEVEL_ONE[test];
    } else if (level === 2) {
      return STAGE_TWO_LEVEL_TWO[test];
    }
    return STAGE_TWO_LEVEL_THREE[test];
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
