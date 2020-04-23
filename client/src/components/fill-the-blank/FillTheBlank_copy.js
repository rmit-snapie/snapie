import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './FillTheBlankStyle';
import Cheers from '../cheers/Cheers';
import {createBlanks} from '../../helpers/QuestionHelper';
import {popCurrentStack} from '../../redux/actions/QuestionTypeActions';
import {FILL_THE_BLANK} from '../../../environments/Routes';
import {resetRoute} from '../../helpers/NavigateHelper';
import _ from 'lodash';
import {testCompleted} from '../../redux/actions/ProgressActions';

const FillTheBlank_copy = props => {
  console.log('fillTheBlank props: ', props);
  const {questionContent, answers, correctAnswer} = props.questionData;
  // const blanks = createBlanks(answers);
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
    if (currentAnswer.answer !== correctAnswer) {
      setCheers({display: true, sad: true});
    } else {
      setCheers({display: true, sad: false});
    }
    // if (currentStack.length !== 1) {
    // handlePopCurrentStack(FILL_THE_BLANK);
    // const tempStack = currentStack.filter(stack => stack !== FILL_THE_BLANK);
    // setTimeout(() => resetRoute(navigation, _.sample(tempStack)), 1000);
    // } else {
    // setTimeout(() => handleTestCompleted(2), 1000);
    // }
  };

  return (
    <View style={styles.container}>
      {cheers.display && (
        <Cheers
          cheers={cheers.display}
          sad={cheers.sad}
          nextQuestion={props.nextQuestion}
        />
      )}
      {!cheers.display && (
        <>
          <View style={styles.mediaWrapper}>
            <Text>Box 1</Text>
            <Text>Box 1</Text>
          </View>
          <View style={styles.questionWrapper}>
            <Text style={styles.questionContent}>
              {questionContent}{' '}
              {/* {currentAnswer.answer ? currentAnswer.answer : blanks} */}
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

// FillTheBlank.propTypes = {
//   currentStack: PropTypes.arrayOf(PropTypes.string).isRequired,
//   handlePopCurrentStack: PropTypes.func.isRequired,
//   handleTestCompleted: PropTypes.func.isRequired,
//   route: PropTypes.object.isRequired,
//   navigation: PropTypes.object.isRequired,
// };
export default FillTheBlank_copy;

// export default connect(
//   state => ({currentStack: state.questionTypeStackReducer.currentStack}),
//   {handlePopCurrentStack: popCurrentStack, handleTestCompleted: testCompleted},
// )(FillTheBlank);
