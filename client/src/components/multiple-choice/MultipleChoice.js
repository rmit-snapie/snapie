import React, {useState, useEffect} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import styles from './MultipleChoiceStyle';
import Cheers from '../cheers/Cheers';
import {MULTIPLE_CHOICE} from '../../../environments/Routes';
import {resetRoute} from '../../helpers/NavigateHelper';
import {popCurrentStack} from '../../redux/actions/QuestionTypeActions';
import {testCompleted} from '../../redux/actions/ProgressActions';
import {readText} from '../../helpers/TextToSpeech';

const MultipleChoice = ({
  handlePopCurrentStack,
  currentStack,
  handleTestCompleted,
  route: {
    params: {question},
  },
  navigation,
}) => {
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
    if (currentStack.length !== 1) {
      handlePopCurrentStack(MULTIPLE_CHOICE);
      const tempStack = currentStack.filter(stack => stack !== MULTIPLE_CHOICE);
      setTimeout(() => resetRoute(navigation, _.sample(tempStack)), 1000);
    } else {
      setTimeout(() => handleTestCompleted(2), 1000);
    }
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

MultipleChoice.propTypes = {
  handlePopCurrentStack: Proptypes.func.isRequired,
  currentStack: Proptypes.arrayOf(Proptypes.string).isRequired,
  handleTestCompleted: Proptypes.func.isRequired,
  route: Proptypes.object.isRequired,
  navigation: Proptypes.object.isRequired,
};

export default connect(
  state => ({currentStack: state.questionsTypeStackReducer.currentStack}),
  {handlePopCurrentStack: popCurrentStack, handleTestCompleted: testCompleted},
)(MultipleChoice);
