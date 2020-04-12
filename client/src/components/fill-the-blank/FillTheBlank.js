import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './FillTheBlankStyle';
import {questions} from '../../domainModels/Questions';

const fillTheBlankQuestion = questions.filter(
  question => question.type === 'fillTheBlank',
)[0];

const {questionContent, answers, correctAnswer} = fillTheBlankQuestion;
let blanks = '';
for (let i = 0; i < correctAnswer.length; i++) {
  blanks += '_';
}
console.log(blanks);

const FillTheBlank = () => {
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(null);

  const handleAnswerPressed = index => {
    if (index === currentAnswerIndex) {
      setCurrentAnswerIndex(null);
    } else {
      setCurrentAnswerIndex(index);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.child1}>
        <Text>Child 1</Text>
      </View>
      <View style={styles.child2}>
        <Text style={styles.questionContent}>
          {questionContent} {blanks}
        </Text>
      </View>
      <View style={styles.child3}>
        {answers.map((answer, index) => (
          <TouchableOpacity
            onPress={() => handleAnswerPressed(index)}
            activeOpacity={0}
            key={answer}
            style={
              index === currentAnswerIndex
                ? [styles.answer, styles.chosenAnswer]
                : [styles.answer, styles.notChosenAnswer]
            }>
            <Text>{answer}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.child4}>
        <Text>Child 4</Text>
      </View>
    </View>
  );
};

export default FillTheBlank;
