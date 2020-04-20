import React, {useState} from 'react';
import Proptypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import _ from 'lodash';
import styles from './MultipleChoiceStyle';
import Cheers from '../cheers/Cheers';
import {MULTIPLE_CHOICE} from '../../../environments/Routes';
import {resetRoute} from '../../helpers/NavigateHelper';
import {popCurrentStack} from '../../redux/actions/QuestionTypeActions';
import {testCompleted} from '../../redux/actions/ProgressActions';

const MultipleChoice = ({
  handlePopCurrentStack,
  currentStack,
  handleTestCompleted,
  route: {
    params: {question},
  },
  navigation,
}) => {
  const {questionContent, answers, correctAnswer} = question;
  const [currentAnswer, setCurrentAnswer] = useState({
    answer: null,
    index: null,
  });
  const [cheers, setCheers] = useState({display: false, sad: false});

  const resetAnswerState = () => {
    setCurrentAnswer(prevState => ({...prevState, answer: null, index: null}));
  };

  const handleAnswerPressed = (index, answer) => {
    if (currentAnswer.index === index) {
      resetAnswerState();
    } else {
      setCurrentAnswer(prevState => ({
        ...prevState,
        answer: answer,
        index: index,
      }));
    }
  };

  const handleAnswerCheck = answer => {
    if (correctAnswer !== answer) {
      setCheers({display: true, sad: true});
    } else {
      setCheers({display: true, sad: false});
      // setTimeout(() => navigateTo(navigation, HOME_SCREEN), 1000);
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
            <Text>Box 1</Text>
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
                  currentAnswer.index === index
                    ? [styles.answer, styles.chosenAnswer]
                    : [styles.answer, styles.notChosenAnswer]
                }
                key={ans}>
                <Text
                  style={
                    currentAnswer.index === index
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
  state => ({currentStack: state.questionTypeStackReducer.currentStack}),
  {handlePopCurrentStack: popCurrentStack, handleTestCompleted: testCompleted},
)(MultipleChoice);
