import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
import MultipleChoiceQuiz from '../domainModels/MultipleChoiceQuiz';
import multipleChoiceQuizData from '../domainModels/MultipleChoiceQuiz.json';
import DragAndDropQuiz from '../domainModels/DragAndDropQuiz';
class Quiz extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const {navigation} = this.props;
    return (
      <View>
        <Text
          style={styles.text}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.info('quiz text layout', layout);
          }}>
          This is Quiz.
        </Text>
        {/* {multipleChoiceQuizData.type === 'multipleChoice' && (
          <MultipleChoiceQuiz quizData={multipleChoiceQuizData} />
        )} */}
        <DragAndDropQuiz />
        <Button
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.info('quiz button layout', layout);
          }}
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

export default Quiz;
