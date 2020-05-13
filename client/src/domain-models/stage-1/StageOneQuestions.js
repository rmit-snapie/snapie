const ColorRed = require('./assets/red.png');
const ColorYellow = require('./assets/yellow.png');
const ColorGreen = require('./assets/green.png');
const ColorBlue = require('./assets/blue.png');
const ColorOrange = require('./assets/orange.png');
import {
  FILL_THE_BLANK,
  MULTIPLE_CHOICE,
  MULTIPLE_CHOICE_IMAGES,
  PAIR_SELECTION,
  PRONOUNCE_THE_WORD,
  SPELLING_ORDER,
} from '../../../environments/Routes';
// todo: mega data:
// stage name
// level
// test
// asset required...
export const STAGE_ONE = [
  //first level
  [
    // test 1
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is this ?',
        possibleAnswersCount: 4,
        answers: ['red', 'yellow', 'green', 'white'],
        correctAnswer: 'red',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Which color is yellow',
        answers: [
          {
            name: 'red',
            asset: ColorRed,
          },
          {
            name: 'blue',
            asset: ColorBlue,
          },
          {
            name: 'yellow',
            asset: ColorYellow,
          },
          {
            name: 'orange',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'yellow',
        imageAsset: null,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is the apple ?',
        possibleAnswersCount: 4,
        answers: ['green', 'red', 'yellow', 'blue'],
        correctAnswer: 'red',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
    ],
    // test 2
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is this ?',
        possibleAnswersCount: 4,
        answers: ['red', 'yellow', 'green', 'purple'],
        correctAnswer: 'green',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: FILL_THE_BLANK,
        questionContent: 'The color of this banana is',
        possibleAnswersCount: 4,
        answers: ['yellow', 'green', 'black', 'white'],
        correctAnswer: 'yellow',
        imageAsset: ColorYellow,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Which is the color orange',
        answers: [
          {
            name: 'green',
            asset: ColorGreen,
          },
          {
            name: 'blue',
            asset: ColorBlue,
          },
          {
            name: 'yellow',
            asset: ColorYellow,
          },
          {
            name: 'orange',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'orange',
        imageAsset: null,
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: SPELLING_ORDER,
        questionContent: 'Spell this color',
        possibleAnswersCount: 4,
        answers: ['e', 'e', 'n', 'r', 'g'],
        correctAnswer: 'green',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
    ],
    // test 3
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Which color is blue',
        answers: [
          {
            name: 'green',
            asset: ColorGreen,
          },
          {
            name: 'blue',
            asset: ColorBlue,
          },
          {
            name: 'yellow',
            asset: ColorYellow,
          },
          {
            name: 'orange',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'blue',
        imageAsset: null,
        correctAnswerCount: 1,
      },
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: FILL_THE_BLANK,
        questionContent: 'This color is (orange fruit)',
        possibleAnswersCount: 4,
        answers: ['orange', 'white', 'blue', 'black'],
        correctAnswer: 'orange',
        imageAsset: ColorOrange,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PRONOUNCE_THE_WORD,
        questionContent: 'Read this color',
        imageAsset: ColorBlue,
        correctAnswer: 'blue',
        correctAnswerCount: 1,
      },
    ],
  ],

  //second level
  [
    // test 1
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '03-04-2020',
        updatedAt: '03-04-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is this ?',
        possibleAnswersCount: 4,
        answers: ['red', 'yellow', 'black', 'white'],
        correctAnswer: 'red',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '08-04-2020',
        updatedAt: '08-04-2020',
        type: FILL_THE_BLANK,
        questionContent: 'This color is',
        possibleAnswersCount: 4,
        answers: ['yellow', 'blue', 'black', 'white'],
        correctAnswer: 'yellow',
        imageAsset: ColorYellow,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: SPELLING_ORDER,
        questionContent: 'Spell this color',
        possibleAnswersCount: 4,
        answers: ['r', 'o', 'a', 'e', 'n', 'g'],
        correctAnswer: 'orange',
        imageAsset: ColorOrange,
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['yellow', 'red', 'green', 'blue'],
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
    ],
    [[{}]],
    [[{}]],
  ],
  [[{}], [{}], [{}]],
];
