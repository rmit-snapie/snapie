import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {object} from 'prop-types';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import styles from './MultipleChoiceStyle';
import Cheers from '../cheers/Cheers';
import {readText} from '../../helpers/TextToSpeech';
import {
  MULTIPLE_CHOICE,
  MULTIPLE_CHOICE_IMAGES,
} from '../../../environments/Routes';
import {renderImageWrapper} from '../../helpers/QuestionHelper';

const MultipleChoice = ({progress, currentQuestion}) => {
  const {stage} = progress.replay.play ? progress.replay : progress;
  const {questionContent, answers, correctAnswer, imageAsset} = currentQuestion;
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: null,
    index: null,
  });
  const [cheers, setCheers] = useState({display: false, sad: false});

  useEffect(() => {
    resetCurrentAnswer();
    readText(questionContent);
  }, [currentQuestion, questionContent]);

  const resetCurrentAnswer = () => {
    setCurrentAnswer({answer: null, index: null});
    setCheers({display: null, sad: false});
  };

  const handleAnswerPressed = (index, answer) => {
    if (currentQuestion.type === MULTIPLE_CHOICE) {
      if (currentAnswer.index === index) {
        resetCurrentAnswer();
      } else {
        readText(answer);
        setCurrentAnswer({
          answer: answer,
          index: index,
        });
      }
    } else {
      if (currentAnswer.index === index) {
        resetCurrentAnswer();
      } else {
        readText(answer.name);
        setCurrentAnswer({
          answer: answer.name,
          index: index,
        });
      }
    }
  };

  const handleAnswerCheck = () => {
    if (correctAnswer !== currentAnswer.answer) {
      setCheers({display: true, sad: true});
    } else {
      setCheers({display: true, sad: false});
    }
  };

  if (currentQuestion === undefined) {
    return (
      <View style={styles.container}>
        <Text>ERROR MULTIPLE CHOICE COULD NOT LOAD</Text>
      </View>
    );
  }

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
          {currentQuestion.type === MULTIPLE_CHOICE && (
            <View style={styles.assetsWrapper}>
              <TouchableWithoutFeedback onPress={() => readText(correctAnswer)}>
                {renderImageWrapper(stage, imageAsset, styles.image)}
              </TouchableWithoutFeedback>
            </View>
          )}
          <View style={styles.questionWrapper}>
            <Text
              onPress={() => readText(questionContent)}
              style={styles.questionContent}>
              {questionContent}
            </Text>
          </View>
          <View
            style={
              currentQuestion.type === MULTIPLE_CHOICE
                ? styles.answersWrapper
                : styles.imageAnswersWrapper
            }>
            {currentQuestion.type === MULTIPLE_CHOICE &&
              answers.map((answer, index) => (
                <TouchableOpacity
                  activeOpacity={0}
                  onPress={() => handleAnswerPressed(index, answer)}
                  style={
                    currentAnswer.index === index
                      ? [styles.answer, styles.chosenAnswer]
                      : [styles.answer, styles.notChosenAnswer]
                  }
                  key={answer}>
                  <Text
                    style={
                      currentAnswer.index === index
                        ? styles.chosenAnswerTitle
                        : styles.answerTitle
                    }>
                    {answer}
                  </Text>
                </TouchableOpacity>
              ))}
            {currentQuestion.type === MULTIPLE_CHOICE_IMAGES &&
              answers.map((answer, index) => (
                <TouchableOpacity
                  key={index}
                  style={
                    currentAnswer.index === index
                      ? [styles.answerImage, styles.chosenAnswerImage]
                      : [styles.answerImage, styles.notChosenAnswerImage]
                  }
                  onPress={() => handleAnswerPressed(index, answer)}>
                  {renderImageWrapper(stage, answer.asset, styles.imageContent)}
                </TouchableOpacity>
              ))}
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              style={
                currentAnswer.answer === null
                  ? [styles.confirmButton, styles.disabledConfirm]
                  : [styles.confirmButton, styles.confirmAnswer]
              }
              disabled={currentAnswer.answer === null}
              onPress={() => handleAnswerCheck()}>
              <Text style={styles.confirmTitle}> Confirm </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

MultipleChoice.propTypes = {
  progress: object.isRequired,
  currentQuestion: object.isRequired,
};

export default connect(
  state => ({
    progress: state.progressReducer,
    currentQuestion: state.questionsContentReducer.currentQuestion,
  }),
  null,
)(MultipleChoice);
