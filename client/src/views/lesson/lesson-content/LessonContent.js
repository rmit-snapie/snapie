import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'react-native';
import {
  FILL_THE_BLANK,
  MULTIPLE_CHOICE,
  PAIR_SELECTION,
  SPELLING_ORDER,
} from '../../../../environments/Routes';
//components
import FillTheBlank from '../../../components/fill-the-blank/FillTheBlank';
import MultipleChoice from '../../../components/multiple-choice/MultipleChoice';
import PairSelection from '../../../components/pair-selection/PairSelection';
import SpellingOrder from '../../../components/spelling-order/SpellingOrder';
//redux actions
import {stop, testCompleted} from '../../../redux/actions/ProgressActions';
import {setLocalQuestions} from '../../../redux/actions/QuestionsContentActions';

const LessonContent = ({
  questions,
  progress,
  handleStop,
  handleTestCompleted,
  handleSetLocalQuestions,
}) => {
  const {stage, level, test} = progress;
  if (progress.question === questions.length) {
    handleSetLocalQuestions({
      stage: stage,
      level: level,
      test: test,
    });
    return null;
  }

  const question = questions[progress.question];
  switch (question.type) {
    case FILL_THE_BLANK:
      return <FillTheBlank question={question} />;
    case MULTIPLE_CHOICE:
      return <MultipleChoice question={question} />;
    case PAIR_SELECTION:
      return <PairSelection question={question} />;
    case SPELLING_ORDER:
      return <SpellingOrder question={question} />;
    default:
      return <Button title="Go back Home" />;
  }
};

LessonContent.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  progress: PropTypes.object.isRequired,
  handleStop: PropTypes.func.isRequired,
  handleTestCompleted: PropTypes.func.isRequired,
  handleSetLocalQuestions: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    questions: state.questionsContentReducer,
    progress: state.progressReducer,
  }),
  {
    handleTestCompleted: testCompleted,
    handleStop: stop,
    handleSetLocalQuestions: setLocalQuestions,
  },
)(LessonContent);
