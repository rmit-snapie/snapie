import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goToFirstScreenInStack, navigateTo} from '../helpers/NavigateHelper';
// components that possibly being used here
import MultipleChoice from '../components/multiple-choice/MultipleChoice_copy';
import FillTheBlank from '../components/fill-the-blank/FillTheBlank_copy';
import SpellingOrder from '../components/spelling-order/SpellingOrder_copy';
import PairSelection from '../components/pair-selection/PairSelection_copy';

// consts:
import {
  FILL_THE_BLANK,
  MULTIPLE_CHOICE,
  PAIR_SELECTION,
  SPELLING_ORDER,
} from '../../environments/Routes';

// todo: build and import question data files.
// todo: this data should fetch from asyncstorage, not imported here.
// import here just for demo
import {LEVEL_ONE_TEST_ONE_QUESTIONS} from '../domain-models/stage-1/level-1/test-1/index';

class Lesson extends Component {
  constructor(props) {
    super(props);
    // persist in state so that when reload this component, user go back to last working
    this.state = {
      currentLevel: 1,
      currentTest: 1,
      questionBank: null,
      currentQuestion: 0,
    };
  }
  // todo: have redux props of current answer questions or level of user
  // base on the props, fetch data from storage; can fetch from the app component, then pass as props here
  getQuestions = (level, test) => {
    // todo: fetch data from storage, using level and test
    let myQuestions = LEVEL_ONE_TEST_ONE_QUESTIONS;
    // return myQuestions
    this.setState({questionBank: myQuestions});
  };
  componentDidMount() {
    // todo: get current question from props using redux, from storage
    this.getQuestions(this.state.currentLevel, this.state.currentTest);
  }
  nextQuestion = () => {
    let nextQuestion = this.state.currentQuestion + 1;
    if (nextQuestion < this.state.questionBank.length) {
      this.setState({currentQuestion: nextQuestion});
    }
    //todo: load next level
    else {
      console.log('load next level data....');
      this.setState({currentQuestion: nextQuestion});
    }
  };
  renderQuestion = currentQuestion => {
    if (!this.state.questionBank || this.state.questionBank.length < 1) {
      // empty data
      return <Text>empty</Text>;
    }
    if (
      currentQuestion < 0 ||
      currentQuestion > this.state.questionBank.length - 1
    ) {
      // out of range
      return (
        <View>
          <Text>todo: load more data</Text>
          <Button
            title="Go back Home"
            onPress={() => goToFirstScreenInStack(this.props.navigation)}
          />
        </View>
      );
    }
    let data = this.state.questionBank[currentQuestion];
    console.log('current question data: ', data);
    switch (data.type) {
      case FILL_THE_BLANK:
        console.log('type blank: ', data.type);

        return (
          <FillTheBlank questionData={data} nextQuestion={this.nextQuestion} />
        );
        break;
      case MULTIPLE_CHOICE:
        console.log('type choice: ', data.type);
        return (
          <MultipleChoice
            questionData={data}
            nextQuestion={this.nextQuestion}
          />
        );

        break;
      case PAIR_SELECTION:
        console.log('type pair: ', data.type);
        return (
          <PairSelection questionData={data} nextQuestion={this.nextQuestion} />
        );

        break;
      case SPELLING_ORDER:
        console.log('type spell: ', data.type);
        // return <Text>{data.type}</Text>;
        return (
          <SpellingOrder questionData={data} nextQuestion={this.nextQuestion} />
        );

        break;
      default:
        console.log('type default: ', data.type);
        return (
          <Button
            title="Go back Home"
            onPress={() => goToFirstScreenInStack(this.props.navigation)}
          />
        );
    }
  };
  render() {
    // todo: change stage to props here when using redux
    console.log('lesson stage: ', this.state);
    return (
      <View style={styles.container}>
        {this.state.questionBank &&
          this.renderQuestion(this.state.currentQuestion)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    paddingBottom: 15,
  },
});

Lesson.propTypes = {
  navigation: PropTypes.object.isRequired,
  currentStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default connect(
  state => ({currentStack: state.questionTypeStackReducer.currentStack}),
  null,
)(Lesson);
