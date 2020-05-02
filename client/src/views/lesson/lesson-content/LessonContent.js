import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button} from 'react-native';
import {
  FILL_THE_BLANK,
  MULTIPLE_CHOICE,
  MULTIPLE_CHOICE_IMAGES,
  PAIR_SELECTION,
  SPELLING_ORDER,
} from '../../../../environments/Routes';
//components
import FillTheBlank from '../../../components/fill-the-blank/FillTheBlank';
import MultipleChoice from '../../../components/multiple-choice/MultipleChoice';
import SpellingOrder from '../../../components/spelling-order/SpellingOrder';
import PairSelection from '../../../components/pair-selection/PairSelection';

const LessonContent = ({questions, progress}) => {
  const question = questions[progress.question];
  switch (question.type) {
    case FILL_THE_BLANK:
      return <FillTheBlank question={question} />;
    case MULTIPLE_CHOICE:
      return <MultipleChoice question={question} type={MULTIPLE_CHOICE} />;
    case MULTIPLE_CHOICE_IMAGES:
      return (
        <MultipleChoice question={question} type={MULTIPLE_CHOICE_IMAGES} />
      );
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
};

export default connect(
  state => ({
    questions: state.questionsContentReducer,
    progress: state.progressReducer,
  }),
  null,
)(LessonContent);
