import {createQuestionObject} from './QuestionObject';
import {getStageQuestions} from '../helpers/QuestionHelper';
const QuestionStack = {
  // todo: need this info in model data json...
  // mega data:
  _currentStage: 1,
  _levelAmount: 3,
  _currentLevel: 1,
  _testAmount: 3,
  _currentTest: 1,
  _questionAmount: 3,
  _assetURIList: [
    'red.png',
    'blue.png',
    'yellow.png',
    'orange.png',
    'green.png',
  ],
  //   default emplty
  // todo: always load data before use
  _questionList: [],
  _currentQuestion: null,
  _currentQuestionIndex:-1;
  checkAssets: function() {
    // todo: check if asset exist, if not, download it...
  },
  getFirstQuestion: function() {
    //   todo: return first question as an object
    // todo: check not empty: if empty then load data
    // if(){}
    let questionData = this._questionList[0];
    this._currentQuestionIndex = 0;
    this._currentQuestion = createQuestionObject(questionData);
    return this._currentQuestion;
  },
  nextQuestion: function() {
    // todo: build next question object, then return
    // if last, load question of next level
    if (this._currentQuestionIndex == this._questionAmount - 1) {
      this.loadNextTestQuestions();
      return this.getFirstQuestion();
    } else {
      // if not last question, return the next question,
      this._currentQuestionIndex += 1;
      let questionData = this._questionList[this._currentQuestionIndex];
      this._currentQuestion = createQuestionObject(questionData);
      return this._currentQuestion;
    }
  },
  loadNextTestQuestions: function() {
       // todo: get support functions from helper
    //   todo: if last test: load next level, if last level: load next stage
    // note: start from 1, not 0 as array

    if(this._currentTest==this._testAmount && this._currentLevel==this._levelAmount){
        // todo: load next stage
        let stageData = getStageQuestions(this._currentStage+1)
        // todo: load first level, first test
        this.loadQuestionsFromTest(stageData.levels["1"].tests["1"].questions);
        // todo: update and check assets
    }
    else if (this._currentTest==this._testAmount && this._currentLevel < this._levelAmount){
        let stageData = getStageQuestions(this._currentStage)
        // todo: load next level, first test
        this.loadQuestionsFromTest(stageData.levels[this._currentLevel+1].tests["1"].questions);
         // todo: update and check assets
    }else {
        // todo: load next test
        this.loadQuestionsFromTest(stageData.levels[this._currentLevel].tests[this._currentTest+1].questions);
         // todo: update and check assets
    }
   
    // dummy data
    let testQuestionData = {"data":"data"};
    this.loadQuestionsFromTest(testQuestionData);
  },
  loadQuestionsFromTest: function(testQuestionArray) {
    // todo: set the array
   this._questionList = testQuestionArray;
//    todo: check other info
  }

};

// export const createStack = (stage, level, test) => {
//   // todo: builder... base on stage, level, test

//   return;
// };
// export const initFirstStack = () => {
//   // todo : return first stack where stage = level = test = 1
//   return QuestionStack;
// };
