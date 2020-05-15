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

export const STAGE_ONE = [
  //first level
  [
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'Which color is this ?',
        possibleAnswersCount: 4,
        answers: ['red', 'yellow', 'green', 'orange'],
        correctAnswer: 'red',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'Which color is this ?',
        possibleAnswersCount: 4,
        answers: ['red', 'yellow', 'green', 'orange'],
        correctAnswer: 'green',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose BLUE',
        answers: [
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
          {
            name: 'orange',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'blue',
        imageAsset: null,
        correctAnswerCount: 1,
      },
    ],
  ],

  //second level
  [
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'Which body part is this ?',
        possibleAnswersCount: 4,
        answers: ['head', 'hand', 'leg', 'back'],
        correctAnswer: 'head',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose LEG',
        answers: [
          {
            name: 'leg',
            asset: ColorRed,
          },
          {
            name: 'arm',
            asset: ColorGreen,
          },
          {
            name: 'head',
            asset: ColorYellow,
          },
          {
            name: 'back',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'leg',
        imageAsset: null,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'Which body part is this ?',
        possibleAnswersCount: 4,
        answers: ['hand', 'head', 'leg', 'ear'],
        correctAnswer: 'ear',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
    ],
  ],

  //third level
  [
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-3',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose APPLE',
        answers: [
          {
            name: 'apple',
            asset: ColorRed,
          },
          {
            name: 'banana',
            asset: ColorGreen,
          },
          {
            name: 'orange',
            asset: ColorYellow,
          },
          {
            name: 'strawberry',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'apple',
        imageAsset: null,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'Which fruit is this ?',
        possibleAnswersCount: 4,
        answers: ['apple', 'strawberry', 'banana', 'orange'],
        correctAnswer: 'orange',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose PINEAPPLE',
        answers: [
          {
            name: 'apple',
            asset: ColorRed,
          },
          {
            name: 'pineapple',
            asset: ColorGreen,
          },
          {
            name: 'orange',
            asset: ColorYellow,
          },
          {
            name: 'banana',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'pineapple',
        imageAsset: null,
        correctAnswerCount: 1,
      },
    ],
  ],
];
