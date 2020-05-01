import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import styles from './PairSelectionStyle';
import Cheers from '../cheers/Cheers';
import {shuffle} from '../../helpers/QuestionHelper';
import {readText} from '../../helpers/TextToSpeech';

class PairSelection extends Component {
  constructor(props) {
    super(props);
    const {questionContent, answers, imagesAsset} = props.question;
    this.state = {
      pictures: shuffle(imagesAsset),
      possibleAnswers: shuffle(answers),
      currentQuestion: questionContent,
      currentAnswer: {answer: null, index: null},
      currentPicture: {asset: null, index: null},
      cheers: {display: false, sad: false},
      shakeAnimation: new Animated.Value(0),
    };
    this.triggerShake = this.triggerShake.bind(this);
    this.resetAnswerState = this.resetAnswerState.bind(this);
    this.removeCorrectPair = this.removeCorrectPair.bind(this);
    this.openCheers = this.openCheers.bind(this);
  }

  resetAnswerState = () => {
    const tempAnswer = {answer: null, index: null};
    const tempPicture = {asset: null, index: null};
    this.setState({
      currentAnswer: tempAnswer,
      currentPicture: tempPicture,
    });
  };

  removeCorrectPair = (answer, asset) => {
    const {possibleAnswers, pictures} = this.state;
    const tempAnswers = possibleAnswers.filter(
      filterAnswer => filterAnswer !== answer,
    );
    const tempPictures = pictures.filter(picture => picture !== asset);
    this.setState({
      possibleAnswers: tempAnswers,
      pictures: tempPictures,
    });
  };

  triggerShake = () => {
    Animated.timing(this.state.shakeAnimation, {
      duration: 400,
      toValue: 3,
      easing: Easing.bounce,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      this.setState({
        shakeAnimation: new Animated.Value(0),
      });
    }, 1000);
  };

  openCheers = () => {
    this.setState({
      cheers: {display: true, sad: false},
    });
    this.setState({possibleAnswers: ['lol']});
  };

  componentDidMount() {
    readText(this.state.currentQuestion);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      possibleAnswers,
      currentAnswer,
      currentPicture: {asset},
    } = this.state;
    if (currentAnswer.answer && asset) {
      if (currentAnswer.answer === asset.name) {
        this.removeCorrectPair(currentAnswer.answer, asset);
      } else {
        this.triggerShake();
      }
      this.resetAnswerState();
    }

    if (possibleAnswers.length === 0) {
      return this.openCheers();
    }
  }

  render() {
    const handleAnswerPressed = (index, answer) => {
      const {currentAnswer} = this.state;
      if (currentAnswer.index === index) {
        this.setState({
          currentAnswer: {answer: null, index: null},
        });
      } else {
        readText(answer);
        this.setState({
          currentAnswer: {answer: answer, index: index},
        });
      }
    };

    const handlePicturePressed = (asset, index) => {
      const {currentPicture} = this.state;
      if (currentPicture.index === index) {
        this.setState({
          currentPicture: {asset: null, index: null},
        });
      } else {
        this.setState({
          currentPicture: {asset: asset, index: index},
        });
      }
    };

    const interpolated = this.state.shakeAnimation.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, -15, 0, -15, 0],
    });

    const shakeStyle = {
      transform: [
        {
          translateX: interpolated,
        },
      ],
    };

    const {
      currentAnswer,
      currentPicture,
      currentQuestion,
      pictures,
      possibleAnswers,
      cheers: {sad, display},
    } = this.state;

    if (display) {
      return <Cheers cheers={display} sad={sad} />;
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.questionWrapper}>
            <Text
              onPress={() => readText(currentQuestion)}
              style={styles.questionContent}>
              {currentQuestion}
            </Text>
          </View>
          <View style={styles.answersWrapper}>
            <Animated.View style={[shakeStyle, styles.column1]}>
              {possibleAnswers.map((answer, index) => (
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
            </Animated.View>
            <Animated.View style={[shakeStyle, styles.column2]}>
              {pictures.map((picture, index) => (
                <TouchableOpacity
                  onPress={() => handlePicturePressed(picture, index)}
                  style={
                    currentPicture.index === index
                      ? styles.chosenAsset
                      : styles.notChosenAsset
                  }
                  key={index}>
                  <Animated.Image
                    style={[styles.asset]}
                    source={picture.asset}
                  />
                </TouchableOpacity>
              ))}
            </Animated.View>
          </View>
        </View>
      );
    }
  }
}

PairSelection.propTypes = {
  question: PropTypes.object.isRequired,
};

export default PairSelection;
