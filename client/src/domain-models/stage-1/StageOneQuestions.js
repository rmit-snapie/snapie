const ColorRed = require('./assets/red.png');
const ColorYellow = require('./assets/yellow.png');
const ColorGreen = require('./assets/green.png');
const ColorBlue = require('./assets/blue.png');
const ColorOrange = require('./assets/orange.png');
import {
  FILL_THE_BLANK,
  FIND_THE_OBJECT,
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
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose YELLOW',
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
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['yellow', 'red'],
        imagesAsset: [
          {
            name: 'yellow',
            asset: ColorYellow,
          },
          {
            name: 'red',
            asset: ColorRed,
          },
        ],
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
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: FILL_THE_BLANK,
        questionContent: 'The color of the Banana is',
        possibleAnswersCount: 4,
        answers: ['yellow', 'green', 'red', 'white'],
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
        questionContent: 'Choose ORANGE',
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
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['yellow', 'red', 'green', 'orange'],
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
            name: 'orange',
            asset: ColorOrange,
          },
        ],
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
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '08-04-2020',
        updatedAt: '08-04-2020',
        type: FILL_THE_BLANK,
        questionContent: 'The color of the Orange is',
        possibleAnswersCount: 4,
        answers: ['white', 'orange', 'green', 'yellow'],
        correctAnswer: 'orange',
        imageAsset: ColorYellow,
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
        questionContent: 'Say the color blue',
        imageAsset: ColorBlue,
        correctAnswer: 'blue',
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: SPELLING_ORDER,
        questionContent: 'Spell the word',
        possibleAnswersCount: 4,
        answers: ['e', 'u', 'b', 'l'],
        correctAnswer: 'blue',
        imageAsset: ColorBlue,
        correctAnswerCount: 1,
      },
      {
        id: 'q5',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['orange', 'red', 'green', 'blue'],
        imagesAsset: [
          {
            name: 'orange',
            asset: ColorOrange,
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
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose ARM',
        answers: [
          {
            name: 'arm',
            asset: ColorRed,
          },
          {
            name: 'leg',
            asset: ColorGreen,
          },
          {
            name: 'head',
            asset: ColorYellow,
          },
          {
            name: 'foot',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'arm',
        imageAsset: null,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['head', 'arm'],
        imagesAsset: [
          {
            name: 'head',
            asset: ColorYellow,
          },
          {
            name: 'arm',
            asset: ColorRed,
          },
        ],
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
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'Which body part is this ?',
        possibleAnswersCount: 4,
        answers: ['hand', 'foot', 'leg', 'head'],
        correctAnswer: 'hand',
        imageAsset: ColorGreen,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: SPELLING_ORDER,
        questionContent: 'Spell this word',
        possibleAnswersCount: 4,
        answers: ['m', 'r', 'a'],
        correctAnswer: 'arm',
        imageAsset: ColorBlue,
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['head', 'hand', 'leg'],
        imagesAsset: [
          {
            name: 'head',
            asset: ColorYellow,
          },
          {
            name: 'hand',
            asset: ColorRed,
          },
          {
            name: 'leg',
            asset: ColorGreen,
          },
        ],
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
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '14-05-2020',
        updatedAt: '14-05-2020',
        type: FIND_THE_OBJECT,
        questionContent: 'Take a photo of an EAR',
        correctAnswer: 'ear',
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['head', 'hand', 'ear'],
        imagesAsset: [
          {
            name: 'head',
            asset: ColorOrange,
          },
          {
            name: 'hand',
            asset: ColorRed,
          },
          {
            name: 'ear',
            asset: ColorGreen,
          },
        ],
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '14-05-2020',
        updatedAt: '14-05-2020',
        type: FIND_THE_OBJECT,
        questionContent: 'Take a photo of a LEG',
        correctAnswer: 'leg',
        correctAnswerCount: 1,
      },
      {
        id: 'q5',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['arm', 'leg', 'hand', 'ear'],
        imagesAsset: [
          {
            name: 'arm',
            asset: ColorOrange,
          },
          {
            name: 'leg',
            asset: ColorRed,
          },
          {
            name: 'hand',
            asset: ColorGreen,
          },
          {
            name: 'ear',
            asset: ColorBlue,
          },
        ],
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
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-3',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'Which fruit is this ?',
        possibleAnswersCount: 4,
        answers: ['banana', 'apple', 'strawberry', 'orange'],
        correctAnswer: 'banana',
        imageAsset: ColorRed,
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['apple', 'banana'],
        imagesAsset: [
          {
            name: 'apple',
            asset: ColorYellow,
          },
          {
            name: 'banana',
            asset: ColorRed,
          },
        ],
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
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PRONOUNCE_THE_WORD,
        questionContent: 'Say banana',
        imageAsset: ColorBlue,
        correctAnswer: 'banana',
        correctAnswerCount: 1,
      },
      {
        id: 'q3',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose STRAWBERRY',
        answers: [
          {
            name: 'strawberry',
            asset: ColorRed,
          },
          {
            name: 'apple',
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
        correctAnswer: 'strawberry',
        imageAsset: null,
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['orange', 'banana', 'strawberry', 'apple'],
        imagesAsset: [
          {
            name: 'orange',
            asset: ColorYellow,
          },
          {
            name: 'banana',
            asset: ColorRed,
          },
          {
            name: 'strawberry',
            asset: ColorGreen,
          },
          {
            name: 'apple',
            asset: ColorBlue,
          },
        ],
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
      {
        id: 'q2',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '08-04-2020',
        updatedAt: '08-04-2020',
        type: FILL_THE_BLANK,
        questionContent: 'This is a ',
        possibleAnswersCount: 4,
        answers: ['strawberry', 'pineapple', 'apple', 'orange'],
        correctAnswer: 'strawberry',
        imageAsset: ColorYellow,
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
        questionContent: 'Say the word pineapple',
        imageAsset: ColorBlue,
        correctAnswer: 'pineapple',
        correctAnswerCount: 1,
      },
      {
        id: 'q4',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: SPELLING_ORDER,
        questionContent: 'Spell the word',
        possibleAnswersCount: 4,
        answers: ['e', 'n', 'r', 'o', 'a', 'g'],
        correctAnswer: 'orange',
        imageAsset: ColorBlue,
        correctAnswerCount: 1,
      },
      {
        id: 'q5',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '14-04-2020',
        updatedAt: '14-04-2020',
        type: PAIR_SELECTION,
        questionContent: 'Choose the pairs',
        answers: ['pineapple', 'strawberry', 'orange', 'apple'],
        imagesAsset: [
          {
            name: 'pineapple',
            asset: ColorOrange,
          },
          {
            name: 'strawberry',
            asset: ColorRed,
          },
          {
            name: 'orange',
            asset: ColorGreen,
          },
          {
            name: 'apple',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
  ],
];
