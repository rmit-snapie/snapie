import React, {useEffect} from 'react';
import {func, bool, string} from 'prop-types';
import styles from './CheersStyle';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {playCheers, playSad} from '../../helpers/AudioHelper';
const Cheers = ({sad, correctAnswer, handleContinueQuestion}) => {
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

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
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
      </View>
      <View style={styles.continueButtonWrapper}>
        <TouchableOpacity
          onPress={handleContinueQuestion}
          style={styles.continueButton}>
          <Text style={styles.continueTitle}> CONTINUE </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

Cheers.defaultProps = {
  correctAnswer: '',
};

Cheers.propTypes = {
  sad: bool.isRequired,
  correctAnswer: string,
  handleContinueQuestion: func.isRequired,
};

export default Cheers;
