import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {questionCompleted} from '../../redux/actions/ProgressActions';
import {playCheers, playSad, stop} from '../../helpers/AudioHelper';

const Cheers = ({sad, correctAnswer, handleQuestionCompleted, progress}) => {
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
    if (progress.replay.start) {
      handleQuestionCompleted(
        progress.replay.stage,
        progress.replay.level,
        progress.replay.test,
        progress.replay.question,
        true,
      );
    } else {
      handleQuestionCompleted(stage, level, test, question, false);
    }
    return stop();
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
};

export default connect(
  state => ({progress: state.progressReducer}),
  {handleQuestionCompleted: questionCompleted},
)(Cheers);
