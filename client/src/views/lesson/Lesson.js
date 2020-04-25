import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './LessonStyle';
import {View, Text, Button} from 'react-native';
import {goToFirstScreenInStack} from '../../helpers/NavigateHelper';
//Components
import MultipleChoice from '../../components/multiple-choice/MultipleChoice_copy';
import FillTheBlank from '../../components/fill-the-blank/FillTheBlank_copy';
import SpellingOrder from '../../components/spelling-order/SpellingOrder_copy';
import PairSelection from '../../components/pair-selection/PairSelection_copy';

import {setLocalQuestions} from '../../redux/actions/QuestionsContentActions';

class Lesson extends Component {
  constructor(props) {
    super(props);
    // persist in state so that when reload this component, user go back to last working
    this.state = {
      questionBank: props.questions,
      currentStage: props.progress.stage,
      currentLevel: props.progress.level,
      currentTest: props.progress.test,
      currentQuestion: 0,
    };
  }

  componentDidMount() {
    const {currentStage, currentLevel, currentTest} = this.state;
    this.props.handleSetLocalQuestions({
      stage: currentStage,
      level: currentLevel,
      test: currentTest,
    });
  }

  nextQuestion = () => {
    let nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < this.state.questionBank.length) {
      this.setState({currentQuestion: nextQuestion});
    } else {
      this.setState({currentQuestion: nextQuestion});
    }
  };

  renderQuestion = currentQuestion => {
    if (!this.props.questions) {
      return <Text>empty</Text>;
    }
    if (currentQuestion > this.state.questionBank.length - 1) {
      return (
        <View>
          <Text>load more data</Text>
          <Button
            title="Go back Home"
            onPress={() => goToFirstScreenInStack(this.props.navigation)}
          />
        </View>
      );
    }

    let data = this.state.questionBank[currentQuestion];
    switch (data.type) {
      case 'fillTheBlank':
        return (
          <FillTheBlank questionData={data} nextQuestion={this.nextQuestion} />
        );
      case 'multipleChoice':
        return (
          <MultipleChoice
            questionData={data}
            nextQuestion={this.nextQuestion}
          />
        );
      case 'pairSelection':
        return (
          <PairSelection questionData={data} nextQuestion={this.nextQuestion} />
        );
      case 'spellingOrder':
        return (
          <SpellingOrder questionData={data} nextQuestion={this.nextQuestion} />
        );
      default:
        return (
          <Button
            title="Go back Home"
            onPress={() => goToFirstScreenInStack(this.props.navigation)}
          />
        );
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {this.state.questionBank &&
          this.renderQuestion(this.state.currentQuestion)}
      </View>
    );
  }
}

Lesson.propTypes = {
  navigation: PropTypes.object.isRequired,
  currentStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  progress: PropTypes.object.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSetLocalQuestions: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    currentStack: state.questionsTypeStackReducer,
    progress: state.progressReducer,
    questions: state.questionsContentReducer,
  }),
  {handleSetLocalQuestions: setLocalQuestions},
)(Lesson);
