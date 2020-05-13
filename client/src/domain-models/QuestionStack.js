import {createQuestionObject} from './QuestionObject';
import {} from '../helpers/QuestionHelper';
const QuestionStack = {
  // todo: need this info in model data json...
  // mega data:
  _currentStage: 1,
  _levelAmount: 3,
  _currentLevel: 1,
  _testAmount: 3,
  _currentTest: 1,
  _questionAmount: 3,
  _assetURIList: ['image1URI', 'image2URI'],
  _questionList: [],
  _currentQuestion: 0,
  getFirstQuestion: function() {
    //   todo: return first question as an object
    let questionData = this._questionList[0];
    this._currentQuestion = 0;
    let firstQuestion = createQuestionObject(questionData);
    return firstQuestion;
  },
  nextQuestion: function() {
    // todo: build next question object, then return
    // if last, load question of next level
    if (this._currentQuestion == this._questionAmount) {
      this._loadQuestions();
      return this._getFirstQuestion();
    } else {
      // if not last question, return the next,
      this._currentQuestion += 1;
      let nextQuestionData = this._questionList[this.currentQuestion];
      let nextQuestion = createQuestionObject(nextQuestionData);
      return nextQuestion;
    }
  },
  loadQuestions: function() {
    // alert("Hi! I'm " + this.name[0] + '.');
    // todo: load questions from stage, level, test
    // if last question: get next test
    // if last test: get next level
    // if last level: get next stage
  },
};

export const createStack = (stage, level, test) => {
  // todo: builder... base on stage, level, test
  return;
};
export const initFirstStack = () => {
  // todo : return first stack where stage = level = test = 1
  return QuestionStack;
};
