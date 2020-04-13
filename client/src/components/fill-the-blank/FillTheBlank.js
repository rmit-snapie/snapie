import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './FillTheBlankStyle';
import {questions} from '../../domain-models/Questions';

const fillTheBlankQuestion = questions.filter(
  question => question.type === 'fillTheBlank',
)[0];

const {questionContent, answers, correctAnswer} = fillTheBlankQuestion;
let blanks = '';
for (let i = 0; i < correctAnswer.length; i++) {
  blanks += '_';
}

const FillTheBlank = () => {
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: null,
    index: null,
  });

  const handleAnswerPressed = (index, answer) => {
    if (currentAnswer.index === index) {
      setCurrentAnswer(prevState => ({
        ...prevState,
        answer: null,
        index: null,
      }));
    } else {
      setCurrentAnswer(prevState => ({
        ...prevState,
        answer: answer,
        index: index,
      }));
    }
  };

  const handleAnswerCheck = () => {
    if (currentAnswer.answer === correctAnswer) {
      console.log('good');
    } else {
      console.log('bad');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.child1}>
        <Text>Child 1</Text>
      </View>
      <View style={styles.child2}>
        <Text style={styles.questionContent}>
          {questionContent}{' '}
          {currentAnswer.answer ? currentAnswer.answer : blanks}
        </Text>
      </View>
      <View style={styles.child3}>
        {answers.map((answer, index) => (
          <TouchableOpacity
            onPress={() => handleAnswerPressed(index, answer)}
            activeOpacity={0}
            key={answer}
            style={
              index === currentAnswer.index
                ? [styles.answer, styles.chosenAnswer]
                : [styles.answer, styles.notChosenAnswer]
            }>
            <Text style={styles.answerTitle}>{answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.child4}>
        <TouchableOpacity
          style={
            currentAnswer.answer === null
              ? [styles.confirmButton, styles.disabledConfirm]
              : [styles.confirmButton, styles.confirmAnswer]
          }
          disabled={currentAnswer.answer === null}
          onPress={() => handleAnswerCheck(currentAnswer.answer)}>
          <Text style={styles.confirmTitle}> Confirm </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FillTheBlank;
