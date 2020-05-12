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
//components
import FillTheBlank from '../../../components/fill-the-blank/FillTheBlank';
import MultipleChoice from '../../../components/multiple-choice/MultipleChoice';
import SpellingOrder from '../../../components/spelling-order/SpellingOrder';
import PairSelection from '../../../components/pair-selection/PairSelection';
import Pronounce from '../../../components/pronounce/Pronounce';
import {replaceTo} from '../../../helpers/NavigateHelper';

const LessonContent = ({questions, progress, navigation}) => {
  // get current question from redux store based on progress and questions
  const currentQuestion = !progress.replay.start
    ? questions[progress.question]
    : questions[progress.replay.question];

  switch (currentQuestion.type) {
    case FILL_THE_BLANK:
      // return <FillTheBlank question={question} />;
      return <FillTheBlank />;
    case MULTIPLE_CHOICE:
      // return <MultipleChoice question={question} type={MULTIPLE_CHOICE} />;
      return <MultipleChoice type={MULTIPLE_CHOICE} />;
    case MULTIPLE_CHOICE_IMAGES:
      return (
        // <MultipleChoice question={question} type={MULTIPLE_CHOICE_IMAGES} />
        <MultipleChoice type={MULTIPLE_CHOICE_IMAGES} />
      );
    case PAIR_SELECTION:
      // return <PairSelection question={question} />;
      return <PairSelection />;
    case SPELLING_ORDER:
      // return <SpellingOrder question={question} />;
      return <SpellingOrder />;
    case PRONOUNCE_THE_WORD:
      // return <Pronounce question={question} />;
      // console.log('pronounce....question', question);
      return <Pronounce />;
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
    navigation: state.navigationReducer,
  }),
  null,
)(LessonContent);
