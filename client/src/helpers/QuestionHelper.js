// export const getQuestions = type => {
//   return questions.filter(question => question.type === type);
// };

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
