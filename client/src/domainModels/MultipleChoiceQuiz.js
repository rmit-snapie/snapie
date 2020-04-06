import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';

class MultipleChoiceQuiz extends Component {
  static propTypes = {
    quizData: PropTypes.object.isRequired,
  };
  render() {
    const {quizData} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          multiple choice: {quizData.questionContent}
        </Text>
        {/* <Button title="Go back Home" onPress={} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default MultipleChoiceQuiz;
