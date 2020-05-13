// import {} from '../helpers/QuestionHelper';
const Question = {
  id: 'q1',
  stage: 'stage-1',
  level: 'level-1',
  test: 'test-1',
  getData: function() {
    // todo: return question data....
  },

  checkAnswer: function(userAnswer) {
    // todo: check if the answer is correct
  },
};
export const createQuestionObject = questionData => {
  let myQuestion = new Question();
  Object.keys(questionData).forEach((key, index) => {
    //   builder
    myQuestion.key = questionData[key];
  });
  // todo: builder... base on info
  // todo: myquestion = Question.init(info)
  //   let myQuestion = null;
  return myQuestion;
};
