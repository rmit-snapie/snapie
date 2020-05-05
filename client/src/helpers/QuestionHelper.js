import {STAGE_ONE} from '../domain-models/stage-1/StageOneQuestions';
import {STAGE_TWO} from '../domain-models/stage-2/StageTwoQuestions';

export const getLocalTestQuestions = (
  stage: number,
  level: number,
  test: number,
) => {
  // TODO this only handles two stages, from stage three and further, the import will a downloadable content
  // TODO must adapt to this
  switch (stage) {
    case 0:
      return STAGE_ONE[level][test];
    case 1:
      return STAGE_TWO[level][test];
    default:
      return [];
  }
};

// TODO these two functions are also hard coded, have to fix
export const getTestsQuestionsLength = (
  stage: number,
  level: number,
  test: number,
) => {
  if (stage === 0) {
    return STAGE_ONE[level][test].length;
  } else if (stage === 1) {
    return STAGE_TWO[level][test].length;
  }
};

export const getStageLevelsLength = (stage: number, level: number) => {
  if (stage === 0) {
    return STAGE_ONE[level].length;
  } else if (stage === 1) {
    return STAGE_TWO[level].length;
  }
};

export const createBlanks = answer => {
  return answer.split('').map(_ => '_');
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
