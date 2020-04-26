import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './FillTheBlankStyle';
import Cheers from '../cheers/Cheers';
import {createBlanks} from '../../helpers/QuestionHelper';
import {readText} from '../../helpers/TextToSpeech';
import {questionCompleted} from '../../redux/actions/ProgressActions';

const FillTheBlank = ({question, handleQuestionCompleted}) => {
  const {questionContent, answers, correctAnswer, imageAsset} = question;
  const blanks = createBlanks(answers);
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: null,
    index: null,
  });
  const [cheers, setCheers] = useState({display: false, sad: false});

  useEffect(() => {
    readText(questionContent);
  }, [questionContent]);

  const resetAnswerState = () => {
    setCurrentAnswer({answer: null, index: null});
  };

  const handleAnswerPressed = (index, answer) => {
    if (currentAnswer.index === index) {
      resetAnswerState();
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
    setTimeout(() => handleQuestionCompleted(), 1500);
  };

  return (
    <View style={styles.container}>
      {cheers.display && <Cheers cheers={cheers.display} sad={cheers.sad} />}
      {!cheers.display && (
        <>
          <View style={styles.mediaWrapper}>
            <Image style={styles.image} source={imageAsset} />
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

FillTheBlank.defaultProps = {
  question: {},
};

FillTheBlank.propTypes = {
  question: PropTypes.object,
  handleQuestionCompleted: PropTypes.func.isRequired,
};

export default connect(
  null,
  {handleQuestionCompleted: questionCompleted},
)(FillTheBlank);
