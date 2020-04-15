import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
import MultipleChoiceQuiz from '../domainModels/MultipleChoiceQuiz';
import multipleChoiceQuizData from '../domainModels/MultipleChoiceQuiz.json';
import DragAndDropQuiz from '../domainModels/DragAndDropQuiz';
class Lesson extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is Lesson.</Text>
        {/* {multipleChoiceQuizData.type === 'multipleChoice' && (
          <MultipleChoiceQuiz quizData={multipleChoiceQuizData} />
        )} */}
        <DragAndDropQuiz />
        <Button
          title="Go back Home"
          onPress={() => goToFirstScreenInStack(navigation)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
    // top: 0,
    // left: 0,
  },
  text: {
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default Lesson;
