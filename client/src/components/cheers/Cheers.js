import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  questionCompleted,
  stop,
  completeRelayQuestion,
  testCompleted,
  levelCompleted,
  stageCompleted,
  completeAQuestion,
} from '../../redux/actions/ProgressActions';
import {playCheers, playSad} from '../../helpers/AudioHelper';
import {stopAudio} from '../../helpers/AudioHelper';
import {
  getNumberOfTests,
  getNumberOfQuestions,
  getTestQuestions,
  getNumberOfLevels,
} from '../../helpers/QuestionHelper';
import {
  setQuestions,
  setCurrentQuestion,
} from '../../redux/actions/QuestionsContentActions';
const Cheers = ({
  sad,
  correctAnswer,
  handleQuestionCompleted,
  progress,
  ...props
}) => {
  console.log('Cheers > props > progress', progress);
  console.log('Cheers > props > questions ', props.questions);
  const {stage, level, test, question} = progress;
  const imagePath = sad
    ? require('./assets/sad.gif')
    : require('./assets/cheers.gif');

  useEffect(() => {
    if (sad) {
      playSad();
    } else {
      playCheers();
    }
  }, [sad]);

  const handleContinue = () => {
    stopAudio();
    if (progress.replay.start) {
      if (question === getNumberOfQuestions(stage, level, test)) {
        console.log('Cheers > handleContinue > replay true > stop ');
        props.stop();
      } else {
        console.log(
          'Cheers > handleContinue > replay true > completereplayquestion ',
        );
        props.completeRelayQuestion();
      }
    } else {
      // if last question
      if (question === getNumberOfQuestions(stage, level, test)) {
        // of last test of last level: next stage
        if (
          test === getNumberOfTests(stage, level) &&
          level === getNumberOfLevels(stage)
        ) {
          props.stageCompleted();
          getTestQuestions({
            stage: stage + 1,
            level: 0,
            test: 0,
          }).then(data => {
            // console.log(
            //   'Cheers > handleContinue > stagecomplete> resutl: ',
            //   data,
            // );
            console.log(
              'Cheers > handleContinue > replay true > stageCompleted ',
            );
            // dispatch current question
            // console.log('set next question: ', data[0]);
            props.setCurrentQuestion(data[0]);
            return props.prepareData(data);
          });
        } else if (
          test === getNumberOfTests(stage, level) &&
          level < getNumberOfLevels(stage)
        ) {
          // of last test :    next level:
          props.levelCompleted();
          getTestQuestions({
            stage: stage,
            level: level + 1,
            test: 0,
          }).then(data => {
            // console.log(
            //   'Cheers > handleContinue > getnextLevel > resut: ',
            //   data,
            // );
            console.log(
              'Cheers > handleContinue > replay true > levelCompleted ',
            );
            // dispatch current question
            // console.log('set next question: ', data[0]);
            props.setCurrentQuestion(data[0]);
            return props.prepareData(data);
          });
        } else if (test < getNumberOfTests(stage, level)) {
          // next test:
          getTestQuestions({
            stage: stage,
            level: level,
            test: test + 1,
          }).then(data => {
            // console.log(
            //   'Cheers > handleContinue > getnextTest > resutl: ',
            //   data,
            // );
            console.log(
              'Cheers > handleContinue > replay true > testCompleted ',
            );
            // dispatch current question

            // console.log('set next question: ', data[0]);
            props.setCurrentQuestion(data[0]);
            return props.prepareData(data);
          });
          props.testCompleted();
        }
      } else {
        // else: there are still questions ahead: next question
        console.log('Cheers > handleContinue > replay true > next question ');
        // dispatch current question
        let nextQuestionIndex = question + 1;
        if (nextQuestionIndex == getNumberOfQuestions(stage, level, test)) {
          console.log('next question over index........', nextQuestionIndex);
        }

        // console.log('set next question: ', props.quetions[nextQuestionIndex]);
        console.log(
          'Cheers > handleContinue > replay true > next question > next:',
          props.questions[nextQuestionIndex],
        );
        props.setCurrentQuestion(props.questions[nextQuestionIndex]);
        return props.completeAQuestion(nextQuestionIndex);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.gifWrapper}>
        <Image source={imagePath} style={styles.image} />
      </View>
      <View style={styles.correctAnswerWrapper}>
        {sad && (
          <Text style={styles.correctAnswer}>
            The correct answer was {correctAnswer}
          </Text>
        )}
      </View>
      <View style={styles.continueButtonWrapper}>
        <TouchableOpacity
          onPress={() => handleContinue()}
          style={styles.continueButton}>
          <Text style={styles.continueTitle}> Continue </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gifWrapper: {
    flex: 4,
    justifyContent: 'flex-end',
  },
  image: {
    width: 400,
    height: 400,
    zIndex: 2,
  },
  correctAnswerWrapper: {
    flex: 2,
    justifyContent: 'flex-start',
    width: 300,
  },
  correctAnswer: {
    lineHeight: 40,
    textAlign: 'center',
    fontFamily: 'Amiko-Bold',
    fontSize: 24,
  },
  continueButtonWrapper: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  continueButton: {
    borderBottomWidth: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    paddingTop: 13,
    paddingBottom: 13,
    paddingRight: 16,
    paddingLeft: 16,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 16,
    borderBottomColor: '#58a700',
    borderColor: 'rgb(229, 229, 229)',
    shadowColor: 'rgba(120,114,120,0.64)', // IOS
    backgroundColor: '#78c800',
  },
  continueTitle: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

Cheers.defaultProps = {
  correctAnswer: '',
};

Cheers.propTypes = {
  cheers: PropTypes.bool.isRequired,
  sad: PropTypes.bool.isRequired,
  correctAnswer: PropTypes.string,
  handleQuestionCompleted: PropTypes.func.isRequired,
  progress: PropTypes.object.isRequired,
  questions: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    progress: state.progressReducer,
    questions: state.questionsContentReducer.testQuestions,
  }),
  {
    handleQuestionCompleted: questionCompleted,
    stop: stop,
    completeRelayQuestion: completeRelayQuestion,
    prepareData: setQuestions,
    testCompleted: testCompleted,
    levelCompleted: levelCompleted,
    stageCompleted: stageCompleted,
    completeAQuestion: completeAQuestion,
    setCurrentQuestion: setCurrentQuestion,
  },
)(Cheers);
