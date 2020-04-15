export const questions = [
  {
    id: 'q1',
    level: 'level-1',
    stage: 'stage-1',
    status: 'new',
    attemptCount: 0,
    createdAt: '03-04-2020',
    updatedAt: '03-04-2020',

    type: 'multipleChoice',
    interactType: 'radioButton',

    questionContent: 'What is this ?',
    possibleAnswersCount: 4,
    answers: ['rulers', 'papers', 'pencils', 'erasers'],
    correctAnswer: 'rulers',
    imagesAsset: ['catURI', 'dogURI', 'windowURI', 'houseURI'],
    correctAnswerCount: 1,
  },
  {
    id: 'q2',
    level: 'level-1',
    stage: 'stage-1',
    status: 'new',
    attemptCount: 0,
    createdAt: '08-04-2020',
    updatedAt: '08-04-2020',

    type: 'fillTheBlank',
    interactType: 'radioButton',

    questionContent: 'This is a',
    possibleAnswersCount: 4,
    answers: ['grape', 'watermelon', 'banana', 'citrus'],
    correctAnswer: 'banana',
    imagesAsset: ['grapeURI', 'watermelonURI', 'bananaURI', 'citrusURI'],
    correctAnswerCount: 1,
  },
  {
    id: 'q3',
    level: 'level-1',
    stage: 'stage-1',
    status: 'new',
    attemptCount: 0,
    createdAt: '14-04-2020',
    updatedAt: '14-04-2020',

    type: 'spellingOrder',
    interactType: 'radioButton',

    questionContent: 'Spell this word',
    possibleAnswersCount: 4,
    answers: ['e', 'r', 'g', 'e', 'n'],
    correctAnswer: 'green',
    imagesAsset: ['greenURI'],
    correctAnswerCount: 1,
  },
];
