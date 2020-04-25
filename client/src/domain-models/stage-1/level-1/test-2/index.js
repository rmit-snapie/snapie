import {ColorRed} from '../assets/Base64Assets';
import {ColorBlue} from '../assets/Base64Assets';
import {ColorGreen} from '../assets/Base64Assets';
import {ColorYellow} from '../assets/Base64Assets';
import {ColorOrange} from '../assets/Base64Assets';

export const LEVEL_ONE_TEST_TWO_QUESTIONS = [
  {
    id: 'q1',
    level: 'level-1',
    stage: 'stage-1',
    createdAt: '03-04-2020',
    updatedAt: '03-04-2020',
    type: 'multipleChoice',
    questionContent: 'What color is this ?',
    possibleAnswersCount: 4,
    answers: ['red', 'yellow', 'black', 'white'],
    correctAnswer: 'yellow',
    imagesAsset: ColorYellow,
    correctAnswerCount: 1,
  },
  {
    id: 'q2',
    level: 'level-1',
    stage: 'stage-1',
    createdAt: '08-04-2020',
    updatedAt: '08-04-2020',
    type: 'fillTheBlank',
    questionContent: 'This color is ',
    possibleAnswersCount: 4,
    answers: ['blue', 'yellow', 'black', 'white'],
    correctAnswer: 'blue',
    imagesAsset: ColorBlue,
    correctAnswerCount: 1,
  },
  {
    id: 'q3',
    level: 'level-1',
    stage: 'stage-1',
    createdAt: '14-04-2020',
    updatedAt: '14-04-2020',
    questionContent: 'Spell this color',
    possibleAnswersCount: 4,
    answers: ['g', 'e', 'r', 'e', 'n'],
    correctAnswer: 'green',
    imagesAsset: ColorOrange,
    correctAnswerCount: 1,
  },
  {
    id: 'q4',
    level: 'level-1',
    stage: 'stage-1',
    createdAt: '14-04-2020',
    updatedAt: '14-04-2020',
    questionContent: 'Choose the pairs',
    answers: ['red', 'green', 'blue', 'yellow'],
    imagesAsset: [
      {
        name: 'yellow',
        asset: ColorYellow,
      },
      {
        name: 'red',
        asset: ColorRed,
      },
      {
        name: 'green',
        asset: ColorGreen,
      },
      {
        name: 'blue',
        asset: ColorBlue,
      },
    ],
    correctAnswerCount: 1,
  },
];
