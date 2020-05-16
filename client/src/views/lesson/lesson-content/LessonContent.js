import React from 'react';
import {arrayOf, object} from 'prop-types';
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

const LessonContent = ({currentQuestion, navigation}) => {
  const type = currentQuestion ? currentQuestion.type : 'unknown';
  switch (type) {
    case FILL_THE_BLANK:
      return <FillTheBlank />;
    case MULTIPLE_CHOICE:
      return <MultipleChoice />;
    case MULTIPLE_CHOICE_IMAGES:
      return <MultipleChoice />;
    case PAIR_SELECTION:
      return <PairSelection />;
    case SPELLING_ORDER:
      return <SpellingOrder />;
    case PRONOUNCE_THE_WORD:
      return <Pronounce />;
    default:
      return (
        <View style={styles.container}>
          <Text>Something went wrong :(</Text>
          <Text>unknown type of : {type}</Text>
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
  questions: arrayOf(object).isRequired,
  currentQuestion: object.isRequired,
  progress: object.isRequired,
  navigation: object.isRequired,
};

export default connect(
  state => ({
    questions: state.questionsContentReducer.questions,
    currentQuestion: state.questionsContentReducer.currentQuestion,
    progress: state.progressReducer,
  }),
  null,
)(LessonContent);
