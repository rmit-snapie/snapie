import ColorRed from '../assets/red.png';
import ColorYellow from '../assets/yellow.png';
import ColorBlue from '../assets/blue.png';
import ColorGreen from '../assets/green.png';
import ColorOrange from '../assets/orange.png';

export const LEVEL_ONE_TEST_ONE_QUESTIONS = [
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
    correctAnswer: 'red',
    imagesAsset: ColorRed,
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
    answers: ['yellow', 'blue', 'black', 'white'],
    correctAnswer: 'yellow',
    imagesAsset: ColorYellow,
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
    answers: ['r', 'o', 'a', 'e', 'n', 'g'],
    correctAnswer: 'orange',
    imagesAsset: ColorOrange,
    correctAnswerCount: 1,
  },
  {
    id: 'q4',
    level: 'level-1',
    stage: 'stage-1',
    status: 'new',
    attemptCount: 0,
    createdAt: '14-04-2020',
    updatedAt: '14-04-2020',

    type: 'pairSelection',
    interactType: 'radioButton',

    questionContent: 'Choose the pairs',
    answers: ['yellow', 'red', 'green', 'blue'],
    imagesAsset: [
      {
        name: 'yellow',
        asset: require(ColorYellow),
      },
      {
        name: 'red',
        asset: require(ColorRed),
      },
      {
        name: 'green',
        asset: require(ColorGreen),
      },
      {
        name: 'blue',
        asset: require(ColorBlue),
      },
    ],
    correctAnswerCount: 1,
  },
];
