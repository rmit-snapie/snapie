import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import Proptypes from 'prop-types';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './MultipleChoiceStyle';
import Cheers from '../cheers/Cheers';
import {readText} from '../../helpers/TextToSpeech';
import {questionCompleted} from '../../redux/actions/ProgressActions';

const MultipleChoice = ({question, handleQuestionCompleted}) => {
  const {questionContent, answers, correctAnswer, imageAsset} = question;
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

  const handleAnswerCheck = answer => {
    if (correctAnswer !== answer) {
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
          <View style={styles.assetsWrapper}>
            <Image style={styles.image} source={{uri: imageAsset}} />
          </View>
          <View style={styles.questionWrapper}>
            <Text
              onPress={() => readText(questionContent)}
              style={styles.questionContent}>
              {questionContent}
            </Text>
          </View>
          <View style={styles.answersWrapper}>
            {answers.map((answer, index) => (
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
          </View>
          <View style={styles.buttonWrapper}>
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

MultipleChoice.defaultProps = {
  question: {},
};

MultipleChoice.propTypes = {
  question: Proptypes.object.isRequired,
  handleQuestionCompleted: Proptypes.func.isRequired,
};

export default connect(
  null,
  {handleQuestionCompleted: questionCompleted},
)(MultipleChoice);
