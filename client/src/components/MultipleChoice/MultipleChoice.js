import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './MultipleChoiceStyle';
import {questions} from '../../domainModels/MultipleChoiceQuestions';
import MultipleChoiceModal from './MultipleChoiceModal';

const multipleChoiceQuestion = questions.filter(
  question => question.type === 'multipleChoice',
)[0];
const {questionContent, answers, correctAnswer} = multipleChoiceQuestion;

const MultipleChoice = () => {
  const [currentAnswerIndex, setCurrentAnswerIndex] = useState(null);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [sad, setSad] = useState(false);

  const handleAnswerPressed = (index, answer) => {
    if (currentAnswerIndex === index) {
      setCurrentAnswerIndex(null);
      setCurrentAnswer(null);
    } else {
      setCurrentAnswerIndex(index);
      setCurrentAnswer(answer);
    }
  };

  const handleAnswerCheck = answer => {
    if (correctAnswer !== answer) {
      setSad(true);
      setModalOpen(true);
    } else {
      setSad(false);
      setModalOpen(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.assetsWrapper}>
        <Text>Box</Text>
        <Text>Box 2</Text>
      </View>
      <View style={styles.questionWrapper}>
        <Text style={styles.questionContent}>{questionContent}</Text>
      </View>
      <View style={styles.answersWrapper}>
        {answers.map((ans, index) => (
          <TouchableOpacity
            activeOpacity={0}
            onPress={() => handleAnswerPressed(index, ans)}
            style={
              currentAnswerIndex === index
                ? [styles.answer, styles.chosenAnswer]
                : [styles.answer, styles.notChosenAnswer]
            }
            key={ans}>
            <Text
              style={
                currentAnswerIndex === index
                  ? styles.chosenAnswerTitle
                  : styles.answerTitle
              }>
              {ans}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={
            currentAnswer === null
              ? [styles.confirmButton, styles.disabledConfirm]
              : [styles.confirmButton, styles.confirmAnswer]
          }
          disabled={currentAnswer === null}
          onPress={() => handleAnswerCheck(currentAnswer)}>
          <Text style={styles.confirmTitle}> Confirm </Text>
        </TouchableOpacity>
      </View>
      <MultipleChoiceModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        sad={sad}
      />
    </View>
  );
};

export default MultipleChoice;
