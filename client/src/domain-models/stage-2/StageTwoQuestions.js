const ColorRed = require('../stage-1/assets/red.png');
const ColorYellow = require('../stage-1/assets/yellow.png');
const ColorGreen = require('../stage-1/assets/green.png');
const ColorBlue = require('../stage-1/assets/blue.png');
const ColorOrange = require('../stage-1/assets/orange.png');
import {
  FILL_THE_BLANK,
  MULTIPLE_CHOICE,
  MULTIPLE_CHOICE_IMAGES,
  PAIR_SELECTION,
  PRONOUNCE_THE_WORD,
  SPELLING_ORDER,
} from '../../../environments/Routes';

export const STAGE_TWO = [
  //first level
  [
    [
      {
        id: 'q1',
        stage: 'stage-2',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What season is it ?',
        possibleAnswersCount: 4,
        answers: ['spring', 'summer', 'fall', 'winter'],
        correctAnswer: 'winter',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-2',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What season is it ?',
        possibleAnswersCount: 4,
        answers: ['spring', 'summer', 'winter', 'fall'],
        correctAnswer: 'fall',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-2',
        level: 'level-1',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose SUMMER',
        answers: [
          {
            name: 'winter',
            asset: ColorRed,
          },
          {
            name: 'fall',
            asset: ColorGreen,
          },
          {
            name: 'summer',
            asset: ColorBlue,
          },
          {
            name: 'spring',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'summer',
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
        stage: 'stage-2',
        level: 'level-2',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What is it ?',
        possibleAnswersCount: 4,
        answers: ['bag', 'pen', 'pencil', 'eraser'],
        correctAnswer: 'pencil',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-2',
        level: 'level-2',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose PEN',
        answers: [
          {
            name: 'eraser',
            asset: ColorRed,
          },
          {
            name: 'pen',
            asset: ColorGreen,
          },
          {
            name: 'pencil',
            asset: ColorYellow,
          },
          {
            name: 'bag',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'pen',
        imageAsset: null,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-2',
        level: 'level-2',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What is it ?',
        possibleAnswersCount: 4,
        answers: ['ruler', 'pencil', 'eraser', 'bag'],
        correctAnswer: 'ruler',
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
        stage: 'stage-2',
        level: 'level-3',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose DOG',
        answers: [
          {
            name: 'dog',
            asset: ColorRed,
          },
          {
            name: 'cat',
            asset: ColorGreen,
          },
          {
            name: 'bird',
            asset: ColorYellow,
          },
          {
            name: 'fish',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'dog',
        imageAsset: null,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-2',
        level: 'level-2',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What animal is it ?',
        possibleAnswersCount: 4,
        answers: ['dog', 'cat', 'bird', 'fish'],
        correctAnswer: 'bird',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-2',
        level: 'level-2',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose RABBIT',
        answers: [
          {
            name: 'dog',
            asset: ColorRed,
          },
          {
            name: 'cat',
            asset: ColorGreen,
          },
          {
            name: 'rabbit',
            asset: ColorYellow,
          },
          {
            name: 'fish',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'rabbit',
        imageAsset: null,
        correctAnswerCount: 1,
      },
    ],
  ],

  //Fourth Level
  [
    [
      {
        id: 'q1',
        stage: 'stage-2',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is it ?',
        possibleAnswersCount: 4,
        answers: ['purple', 'brown', 'black', 'white'],
        correctAnswer: 'purple',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-2',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What color is it ?',
        possibleAnswersCount: 4,
        answers: ['purple', 'brown', 'black', 'white'],
        correctAnswer: 'black',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
    ],
    [
      {
        id: 'q1',
        stage: 'stage-2',
        level: 'level-1',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose PINK',
        answers: [
          {
            name: 'purple',
            asset: ColorRed,
          },
          {
            name: 'brown',
            asset: ColorGreen,
          },
          {
            name: 'pink',
            asset: ColorBlue,
          },
          {
            name: 'white',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'pink',
        imageAsset: null,
        correctAnswerCount: 1,
      },
    ],
  ],
];
