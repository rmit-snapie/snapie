import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, View, Text, StyleSheet} from 'react-native';
import {
  FILL_THE_BLANK,
  MULTIPLE_CHOICE,
  MULTIPLE_CHOICE_IMAGES,
  PAIR_SELECTION,
  PRONOUNCE_THE_WORD,
  SPELLING_ORDER,
  HOME_SCREEN,
} from '../../../../environments/Routes';
//question-types
import FillTheBlank from '../../../question-types/fill-the-blank/FillTheBlank';
import MultipleChoice from '../../../question-types/multiple-choice/MultipleChoice';
import SpellingOrder from '../../../question-types/spelling-order/SpellingOrder';
import PairSelection from '../../../question-types/pair-selection/PairSelection';
import Pronounce from '../../../question-types/pronounce/Pronounce';
import {replaceTo} from '../../../helpers/NavigateHelper';

const LessonContent = ({questions, progress, navigation}) => {
  const question = !progress.replay.start
    ? questions[progress.question]
    : questions[progress.replay.question];
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
    case PRONOUNCE_THE_WORD:
      return <Pronounce question={question} />;
    default:
      return (
        <View style={styles.container}>
          <Text>Something went wrong :(</Text>
          <Button
            title="Home"
            onPress={() => replaceTo(navigation, HOME_SCREEN)}
          />
        </View>
      );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

LessonContent.propTypes = {
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  progress: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    questions: state.questionsContentReducer,
    progress: state.progressReducer,
  }),
  null,
)(LessonContent);
