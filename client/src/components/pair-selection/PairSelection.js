import React from 'react';
import {View, Text} from 'react-native';
import styles from './PairSelectionStyle';
import {getQuestions} from '../../helpers/QuestionHelper';

const pairSelectionQuestion = getQuestions('pairSelection')[0];
const {questionContent, answers, correctAnswer} = pairSelectionQuestion;

const PairSelection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.questionWrapper}>
        <Text style={styles.questionContent}>{questionContent}</Text>
      </View>
      <View style={styles.child2}>
        <View style={styles.row1}>
          <Text>Row 1</Text>
        </View>
        <View style={styles.row2}>
          <Text>Row 2</Text>
        </View>
      </View>
      <View style={styles.child3}>
        <Text>Child 3</Text>
      </View>
    </View>
  );
};

export default PairSelection;
