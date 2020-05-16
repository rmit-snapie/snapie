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

export const STAGE_THREE = [
  //first level
  [
    //   test 1
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What food is it ?',
        possibleAnswersCount: 4,
        answers: ['cheese', 'hotdog', 'egg', 'milk'],
        correctAnswer: 'cheese',
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
        questionContent: 'Choose CAKE',
        answers: [
          {
            name: 'cake',
            asset: ColorRed,
          },
          {
            name: 'egg',
            asset: ColorGreen,
          },
          {
            name: 'cheese',
            asset: ColorYellow,
          },
          {
            name: 'hotdog',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'cake',
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
        answers: ['cheese', 'cake'],
        imagesAsset: [
          {
            name: 'cheese',
            asset: ColorYellow,
          },
          {
            name: 'cake',
            asset: ColorRed,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    //   test 2
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose EGG',
        answers: [
          {
            name: 'egg',
            asset: ColorRed,
          },
          {
            name: 'cake',
            asset: ColorGreen,
          },
          {
            name: 'cheese',
            asset: ColorYellow,
          },
          {
            name: 'milk',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'egg',
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
        questionContent: 'What food is it ?',
        possibleAnswersCount: 4,
        answers: ['hotdog', 'cake', 'egg', 'cheese'],
        correctAnswer: 'hotdog',
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
        questionContent: 'Spell the word',
        possibleAnswersCount: 4,
        answers: ['k', 'e', 'a', 'c'],
        correctAnswer: 'cake',
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
        answers: ['cheese', 'hotdog', 'egg'],
        imagesAsset: [
          {
            name: 'cheese',
            asset: ColorYellow,
          },
          {
            name: 'hotdog',
            asset: ColorRed,
          },
          {
            name: 'egg',
            asset: ColorGreen,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    //   test 3
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What food is it ?',
        possibleAnswersCount: 4,
        answers: ['cheese', 'hotdog', 'egg', 'milk'],
        correctAnswer: 'milk',
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
        questionContent: 'Listen and repeat',
        imageAsset: ColorBlue,
        correctAnswer: 'egg',
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
        answers: ['cheese', 'hotdog', 'milk'],
        imagesAsset: [
          {
            name: 'cheese',
            asset: ColorOrange,
          },
          {
            name: 'hotdog',
            asset: ColorRed,
          },
          {
            name: 'milk',
            asset: ColorGreen,
          },
        ],
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
        questionContent: 'Listen and repeat',
        imageAsset: ColorBlue,
        correctAnswer: 'milk',
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
        answers: ['cake', 'egg', 'hotdog', 'milk'],
        imagesAsset: [
          {
            name: 'cake',
            asset: ColorOrange,
          },
          {
            name: 'egg',
            asset: ColorRed,
          },
          {
            name: 'hotdog',
            asset: ColorGreen,
          },
          {
            name: 'milk',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
  ],

  //second level
  [
    //   test 1
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-3',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose GRANDMA',
        answers: [
          {
            name: 'grandma',
            asset: ColorRed,
          },
          {
            name: 'grandpa',
            asset: ColorGreen,
          },
          {
            name: 'brother',
            asset: ColorYellow,
          },
          {
            name: 'sister',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'grandma',
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
        questionContent: 'Who is this ?',
        possibleAnswersCount: 4,
        answers: ['grandma', 'grandpa', 'brother', 'sister'],
        correctAnswer: 'grandpa',
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
        answers: ['grandma', 'grandpa'],
        imagesAsset: [
          {
            name: 'grandma',
            asset: ColorYellow,
          },
          {
            name: 'grandpa',
            asset: ColorRed,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    //   test 2
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'Who is this ?',
        possibleAnswersCount: 4,
        answers: ['grandpa', 'grandma', 'sister', 'brother'],
        correctAnswer: 'brother',
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
        questionContent: 'Listen and repeat',
        imageAsset: ColorBlue,
        correctAnswer: 'grandpa',
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
        questionContent: 'Choose SISTER',
        answers: [
          {
            name: 'grandma',
            asset: ColorRed,
          },
          {
            name: 'grandpa',
            asset: ColorGreen,
          },
          {
            name: 'sister',
            asset: ColorYellow,
          },
          {
            name: 'brother',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'sister',
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
        answers: ['brother', 'grandma', 'sister', 'grandpa'],
        imagesAsset: [
          {
            name: 'brother',
            asset: ColorYellow,
          },
          {
            name: 'grandma',
            asset: ColorRed,
          },
          {
            name: 'sister',
            asset: ColorGreen,
          },
          {
            name: 'grandpa',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    //   test 3
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose PARENTS',
        answers: [
          {
            name: 'grandma',
            asset: ColorRed,
          },
          {
            name: 'sister',
            asset: ColorGreen,
          },
          {
            name: 'parents',
            asset: ColorYellow,
          },
          {
            name: 'grandpa',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'parents',
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
        questionContent: 'This is ',
        possibleAnswersCount: 4,
        answers: ['sister', 'brother', 'parents', 'grandpa'],
        correctAnswer: 'sister',
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
        questionContent: 'Listen and repeat',
        imageAsset: ColorBlue,
        correctAnswer: 'parents',
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
        answers: ['e', 'r', 'h', 't', 'b', 'o', 'r'],
        correctAnswer: 'brother',
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
        answers: ['parents', 'sister', 'brother', 'grandma'],
        imagesAsset: [
          {
            name: 'parents',
            asset: ColorOrange,
          },
          {
            name: 'sister',
            asset: ColorRed,
          },
          {
            name: 'brother',
            asset: ColorGreen,
          },
          {
            name: 'grandma',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
  ],

  //third level
  [
    //   test 1
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What shape is it ?',
        possibleAnswersCount: 4,
        answers: ['circle', 'square', 'rectangle', 'triangle'],
        correctAnswer: 'circle',
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
        questionContent: 'Choose SQUARE',
        answers: [
          {
            name: 'circle',
            asset: ColorRed,
          },
          {
            name: 'square',
            asset: ColorGreen,
          },
          {
            name: 'rectangle',
            asset: ColorYellow,
          },
          {
            name: 'triangle',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'square',
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
        answers: ['circle', 'square'],
        imagesAsset: [
          {
            name: 'circle',
            asset: ColorYellow,
          },
          {
            name: 'square',
            asset: ColorRed,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    //   test 2
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What shape is it ?',
        possibleAnswersCount: 4,
        answers: ['circle', 'rectangle', 'square', 'triangle'],
        correctAnswer: 'rectangle',
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
        questionContent: 'The shape is',
        possibleAnswersCount: 4,
        answers: ['square', 'circle', 'star', 'triangle'],
        correctAnswer: 'square',
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
        questionContent: 'Choose TRIANGLE',
        answers: [
          {
            name: 'circle',
            asset: ColorRed,
          },
          {
            name: 'square',
            asset: ColorGreen,
          },
          {
            name: 'rectangle',
            asset: ColorYellow,
          },
          {
            name: 'triangle',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'triangle',
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
        answers: ['circle', 'square', 'rectangle', 'triangle'],
        imagesAsset: [
          {
            name: 'circle',
            asset: ColorYellow,
          },
          {
            name: 'square',
            asset: ColorRed,
          },
          {
            name: 'rectangle',
            asset: ColorGreen,
          },
          {
            name: 'triangle',
            asset: ColorOrange,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    //   test 3
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-1',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose STAR',
        answers: [
          {
            name: 'triangle',
            asset: ColorRed,
          },
          {
            name: 'rectangle',
            asset: ColorGreen,
          },
          {
            name: 'star',
            asset: ColorBlue,
          },
          {
            name: 'circle',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'star',
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
        questionContent: 'The shape is',
        possibleAnswersCount: 4,
        answers: ['circle', 'square', 'triangle', 'rectangle'],
        correctAnswer: 'triangle',
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
        questionContent: 'Listen and repeat',
        imageAsset: ColorBlue,
        correctAnswer: 'star',
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
        answers: ['a', 'r', 't', 's'],
        correctAnswer: 'star',
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
        answers: ['star', 'triangle', 'circle', 'rectangle'],
        imagesAsset: [
          {
            name: 'star',
            asset: ColorOrange,
          },
          {
            name: 'triangle',
            asset: ColorRed,
          },
          {
            name: 'circle',
            asset: ColorGreen,
          },
          {
            name: 'rectangle',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
  ],

  //fourth level
  [
    //   test 1
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What is it ?',
        possibleAnswersCount: 4,
        answers: ['sun', 'wind', 'rain', 'cloud'],
        correctAnswer: 'sun',
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
        questionContent: 'Choose CLOUD',
        answers: [
          {
            name: 'cloud',
            asset: ColorRed,
          },
          {
            name: 'rain',
            asset: ColorGreen,
          },
          {
            name: 'sun',
            asset: ColorYellow,
          },
          {
            name: 'snow',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'cloud',
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
        answers: ['sun', 'cloud'],
        imagesAsset: [
          {
            name: 'sun',
            asset: ColorYellow,
          },
          {
            name: 'cloud',
            asset: ColorRed,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    //   test 2
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose RAIN',
        answers: [
          {
            name: 'rain',
            asset: ColorRed,
          },
          {
            name: 'cloud',
            asset: ColorGreen,
          },
          {
            name: 'sun',
            asset: ColorYellow,
          },
          {
            name: 'wind',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'rain',
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
        questionContent: 'What is it ?',
        possibleAnswersCount: 4,
        answers: ['rain', 'snow', 'wind', 'sun'],
        correctAnswer: 'wind',
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
        questionContent: 'Spell the word',
        possibleAnswersCount: 4,
        answers: ['d', 'l', 'c', 'o', 'u'],
        correctAnswer: 'cloud',
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
        answers: ['sun', 'wind', 'rain'],
        imagesAsset: [
          {
            name: 'sun',
            asset: ColorYellow,
          },
          {
            name: 'wind',
            asset: ColorRed,
          },
          {
            name: 'rain',
            asset: ColorGreen,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    //   test 3
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What is it ?',
        possibleAnswersCount: 4,
        answers: ['sun', 'wind', 'rain', 'snow'],
        correctAnswer: 'snow',
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
        questionContent: 'Listen and repeat',
        imageAsset: ColorBlue,
        correctAnswer: 'rain',
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
        answers: ['sun', 'wind', 'snow'],
        imagesAsset: [
          {
            name: 'sun',
            asset: ColorOrange,
          },
          {
            name: 'wind',
            asset: ColorRed,
          },
          {
            name: 'snow',
            asset: ColorGreen,
          },
        ],
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
        questionContent: 'Listen and repeat',
        imageAsset: ColorBlue,
        correctAnswer: 'snow',
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
        answers: ['cloud', 'rain', 'wind', 'snow'],
        imagesAsset: [
          {
            name: 'cloud',
            asset: ColorOrange,
          },
          {
            name: 'rain',
            asset: ColorRed,
          },
          {
            name: 'wind',
            asset: ColorGreen,
          },
          {
            name: 'snow',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
  ],

  //fifth level
  [
    //   test 1
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-3',
        test: 'test-1',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose EAT',
        answers: [
          {
            name: 'drink',
            asset: ColorRed,
          },
          {
            name: 'sleep',
            asset: ColorGreen,
          },
          {
            name: 'study',
            asset: ColorYellow,
          },
          {
            name: 'eat',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'eat',
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
        questionContent: 'What activity is it ?',
        possibleAnswersCount: 4,
        answers: ['eat', 'drink', 'study', 'sleep'],
        correctAnswer: 'drink',
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
        answers: ['eat', 'drink'],
        imagesAsset: [
          {
            name: 'eat',
            asset: ColorYellow,
          },
          {
            name: 'drink',
            asset: ColorRed,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    //   test 2
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-2',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE,
        questionContent: 'What activity is it ?',
        possibleAnswersCount: 4,
        answers: ['eat', 'drink', 'sleep', 'study'],
        correctAnswer: 'sleep',
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
        questionContent: 'Listen and repeat',
        imageAsset: ColorBlue,
        correctAnswer: 'drink',
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
        questionContent: 'Choose STUDY',
        answers: [
          {
            name: 'eat',
            asset: ColorRed,
          },
          {
            name: 'drink',
            asset: ColorGreen,
          },
          {
            name: 'sleep',
            asset: ColorYellow,
          },
          {
            name: 'study',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'study',
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
        answers: ['sleep', 'drink', 'study', 'eat'],
        imagesAsset: [
          {
            name: 'sleep',
            asset: ColorYellow,
          },
          {
            name: 'drink',
            asset: ColorRed,
          },
          {
            name: 'study',
            asset: ColorGreen,
          },
          {
            name: 'eat',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
    //   test 3
    [
      {
        id: 'q1',
        stage: 'stage-1',
        level: 'level-2',
        test: 'test-3',
        createdAt: '02-05-2020',
        updatedAt: '02-05-2020',
        type: MULTIPLE_CHOICE_IMAGES,
        questionContent: 'Choose PLAY',
        answers: [
          {
            name: 'eat',
            asset: ColorRed,
          },
          {
            name: 'drink',
            asset: ColorGreen,
          },
          {
            name: 'play',
            asset: ColorYellow,
          },
          {
            name: 'study',
            asset: ColorOrange,
          },
        ],
        correctAnswer: 'play',
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
        type: SPELLING_ORDER,
        questionContent: 'Spell the word',
        possibleAnswersCount: 4,
        answers: ['d', 'u', 't', 's', 'y'],
        correctAnswer: 'study',
        imageAsset: ColorBlue,
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
        questionContent: 'Listen and repeat',
        imageAsset: ColorBlue,
        correctAnswer: 'sleep',
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
        answers: ['e', 'p', 'e', 'l', 's'],
        correctAnswer: 'sleep',
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
        answers: ['play', 'study', 'sleep', 'eat'],
        imagesAsset: [
          {
            name: 'play',
            asset: ColorOrange,
          },
          {
            name: 'study',
            asset: ColorRed,
          },
          {
            name: 'sleep',
            asset: ColorGreen,
          },
          {
            name: 'eat',
            asset: ColorBlue,
          },
        ],
        correctAnswerCount: 1,
      },
    ],
  ],
];
