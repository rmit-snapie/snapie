import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity, Animated, Easing} from 'react-native';
import _ from 'lodash';
import styles from './PairSelectionStyle';
import Cheers from '../cheers/Cheers';
import {PAIR_SELECTION} from '../../../environments/Routes';
import {shuffle} from '../../helpers/QuestionHelper';
import {resetRoute} from '../../helpers/NavigateHelper';
import {popCurrentStack} from '../../redux/actions/QuestionTypeActions';
import {testCompleted} from '../../redux/actions/ProgressActions';

class PairSelection_copy extends Component {
  constructor(props) {
    super(props);
    // const {
    //   route: {
    //     params: {question},
    //   },
    // } = props;
    const {questionContent, answers, imagesAsset} = props.questionData;

    this.state = {
      pictures: shuffle(imagesAsset),
      possibleAnswers: shuffle(answers),
      currentQuestion: questionContent,
      currentAnswer: {answer: null, index: null},
      cheers: {display: false, sad: false},
      shakeAnimation: new Animated.Value(0),
    };
  }

  render() {
    const handleAnswerPressed = (index, answer) => {
      const {currentAnswer} = this.state;
      if (currentAnswer.index === index) {
        this.setState(prevState => ({
          ...prevState,
          currentAnswer: {answer: null, index: null},
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          currentAnswer: {answer: answer, index: index},
        }));
      }
    };

    const handlePicturePressed = asset => {
      const {currentAnswer, possibleAnswers, pictures} = this.state;
      const {
        currentStack,
        handlePopCurrentStack,
        handleTestCompleted,
      } = this.props;
      if (currentAnswer.answer === asset.name) {
        const tempAnswers = possibleAnswers.filter(
          answer => answer !== asset.name,
        );
        const tempPictures = pictures.filter(picture => picture !== asset);
        this.setState(prevState => ({
          ...prevState,
          pictures: tempPictures,
          possibleAnswers: tempAnswers,
          currentAnswer: {answer: null, index: null},
        }));
      } else {
        triggerShake();
        this.setState(prevState => ({
          ...prevState,
          currentAnswer: {answer: null, index: null},
        }));
      }
      if (possibleAnswers.length === 1) {
        this.setState(prevState => ({
          ...prevState,
          cheers: {display: true, sad: false},
        }));
        // if (currentStack.length !== 1) {
        //   handlePopCurrentStack(PAIR_SELECTION);
        //   const tempStack = currentStack.filter(
        //     stack => stack !== PAIR_SELECTION,
        //   );
        //   setTimeout(
        //     () => resetRoute(this.props.navigation, _.sample(tempStack)),
        //     1000,
        //   );
        // } else {
        //   setTimeout(() => handleTestCompleted(2), 1000);
        // }
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
      ...states
    } = this.state;

    if (display) {
      return (
        <Cheers
          cheers={display}
          sad={sad}
          nextQuestion={this.props.nextQuestion}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.questionWrapper}>
            <Text style={styles.questionContent}>{currentQuestion}</Text>
          </View>
          <View style={styles.answersWrapper}>
            <Animated.View style={[shakeStyle, styles.column1]}>
              {possibleAnswers.map((ans, index) => (
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
          <View style={styles.child3}>
            <Text>Child 3</Text>
          </View>
        </View>
      );
    }
  }
}
export default PairSelection_copy;

// PairSelection.propTypes = {
//   route: PropTypes.object.isRequired,
//   currentStack: PropTypes.arrayOf(PropTypes.string).isRequired,
//   handlePopCurrentStack: PropTypes.func.isRequired,
//   handleTestCompleted: PropTypes.func.isRequired,
//   navigation: PropTypes.object.isRequired,
// };

// export default connect(
//   state => ({currentStack: state.questionsTypeStackReducer.currentStack}),
//   {handlePopCurrentStack: popCurrentStack, handleTestCompleted: testCompleted},
// )(PairSelection);
