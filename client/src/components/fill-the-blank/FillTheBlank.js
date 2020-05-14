import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './FillTheBlankStyle';
import Cheers from '../cheers/Cheers';
import {createBlanks, renderImageWrapper} from '../../helpers/QuestionHelper';
import {readText} from '../../helpers/TextToSpeech';

const FillTheBlank = ({progress, questions}) => {
  // get question data from redux store, base on progress and questions
  let question = !progress.replay.start
    ? questions[progress.question]
    : questions[progress.replay.question];
  console.log('FillTheBlank > current question: ', question);
  const {stage} = progress;
  if (question == undefined) {
    return (
      <View>
        <Text>question undefined...</Text>
      </View>
    );
  }
  const {questionContent, answers, correctAnswer, imageAsset} = question;
  const blanks = createBlanks(correctAnswer);
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: null,
    index: null,
  });
  const [cheers, setCheers] = useState({display: false, sad: false});

  useEffect(() => {
    readText(questionContent);
  }, [question, questionContent]);

  const resetCurrentAnswer = () => {
    setCheers({display: false, sad: false});
  };

  const handleAnswerPressed = (index, answer) => {
    if (currentAnswer.index === index) {
      resetCurrentAnswer();
    } else {
      readText(answer);
      setCurrentAnswer({
        answer: answer,
        index: index,
      });
    }
  };

  const handleAnswerCheck = () => {
    if (currentAnswer.answer !== correctAnswer) {
      setCheers({display: true, sad: true});
    } else {
      setCheers({display: true, sad: false});
    }
  };

  return (
    <View style={styles.container}>
      {cheers.display && (
        <Cheers
          cheers={cheers.display}
          sad={cheers.sad}
          correctAnswer={correctAnswer}
        />
      )}
      {!cheers.display && (
        <>
          <View style={styles.mediaWrapper}>
            <TouchableWithoutFeedback onPress={() => readText(correctAnswer)}>
              {renderImageWrapper(stage, imageAsset, styles.image)}
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.questionWrapper}>
            <Text
              onPress={() => readText(questionContent)}
              style={styles.questionContent}>
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

FillTheBlank.propTypes = {
  questions: PropTypes.array.isRequired,
  progress: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    questions: state.questionsContentReducer,
    progress: state.progressReducer,
  }),
  null,
)(FillTheBlank);
