import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import styles from './PairSelectionStyle';
import Cheers from '../cheers/Cheers';
import {shuffle} from '../../helpers/QuestionHelper';
import {readText} from '../../helpers/TextToSpeech';
import {questionCompleted} from '../../redux/actions/ProgressActions';

class PairSelection extends Component {
  constructor(props) {
    super(props);
    const {questionContent, answers, imagesAsset} = props.question;
    this.state = {
      pictures: shuffle(imagesAsset),
      possibleAnswers: shuffle(answers),
      currentQuestion: questionContent,
      currentAnswer: {answer: null, index: null},
      cheers: {display: false, sad: false},
      shakeAnimation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    readText(this.state.currentQuestion);
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

    const handlePicturePressed = asset => {
      const {currentAnswer, possibleAnswers, pictures} = this.state;
      if (currentAnswer.answer === asset.name) {
        const tempAnswers = possibleAnswers.filter(
          answer => answer !== asset.name,
        );
        const tempPictures = pictures.filter(picture => picture !== asset);
        this.setState({
          pictures: tempPictures,
          possibleAnswers: tempAnswers,
          currentAnswer: {answer: null, index: null},
        });
      } else {
        triggerShake();
        this.setState({
          currentAnswer: {answer: null, index: null},
        });
      }
      if (possibleAnswers.length === 1) {
        this.setState({
          cheers: {display: true, sad: false},
        });
        setTimeout(() => this.props.handleQuestionCompleted(), 1500);
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

    const triggerShake = () => {
      Animated.timing(this.state.shakeAnimation, {
        duration: 400,
        toValue: 3,
        easing: Easing.bounce,
        useNativeDriver: true,
      }).start(() => {
        this.setState(prevState => ({
          ...prevState,
          shakeAnimation: new Animated.Value(0),
        }));
      });
    };

    const {
      currentAnswer,
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
                  onPress={() => handlePicturePressed(picture)}
                  style={styles.assetWrapper}
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

PairSelection.defaultProps = {
  question: {},
};

PairSelection.propTypes = {
  question: PropTypes.object.isRequired,
  handleQuestionCompleted: PropTypes.func.isRequired,
};

export default connect(
  null,
  {handleQuestionCompleted: questionCompleted},
)(PairSelection);
