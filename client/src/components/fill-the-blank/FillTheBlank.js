import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './FillTheBlankStyle';
import Cheers from '../cheers/Cheers';
import {createBlanks, getQuestions} from '../../helpers/QuestionHelper';

const fillTheBlankQuestion = getQuestions('fillTheBlank')[0];
const {questionContent, answers, correctAnswer} = fillTheBlankQuestion;
let blanks = createBlanks(answers);

const FillTheBlank = () => {
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: null,
    index: null,
  });

  const [cheers, setCheers] = useState({display: false, sad: false});

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
      setCheers({display: true, sad: false});
    } else {
      setCheers({display: true, sad: true});
    }
  };

  return (
    <View style={styles.container}>
      {cheers.display && <Cheers cheers={cheers.display} sad={cheers.sad} />}
      {!cheers.display && (
        <>
          <View style={styles.mediaWrapper}>
            <Text>Box 1</Text>
            <Text>Box 1</Text>
          </View>
          <View style={styles.questionWrapper}>
            <Text style={styles.questionContent}>
              {questionContent}{' '}
              {currentAnswer.answer ? currentAnswer.answer : blanks}
            </Text>
          </View>
          <View style={styles.answersWrapper}>
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
          <View style={styles.confirmButtonWrapper}>
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
        </>
      )}
    </View>
  );
};

export default FillTheBlank;
