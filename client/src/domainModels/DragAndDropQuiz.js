import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
import {PanResponder, Animated} from 'react-native';

class DragAndDropQuiz extends Component {
  static propTypes = {
    quizData: PropTypes.object.isRequired,
  };
  render() {
    const {quizData} = this.props;
    console.log('render drag&dropQuiz: props data:', quizData);
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          multiple choice: {quizData.questionContent}
        </Text>
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

export default DragAndDropQuiz;
