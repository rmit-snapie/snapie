import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goToFirstScreenInStack, navigateTo} from '../helpers/NavigateHelper';
// components that possibly being used here
import MultipleChoice from '../components/multiple-choice/MultipleChoice';
import FillTheBlank from '../components/fill-the-blank/FillTheBlank';
import SpellingOrder from '../components/spelling-order/SpellingOrder';
import PairSelection from '../../PairSelection';
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
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    // persist in state so that when reload this component, user go back to last working
    this.state = {
      currentLevel: 1,
      currentTest: 1,
      questionBank: null,
      currentQuestion: 1,
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
    this.getQuestions(this.state.currentLevel, this.state.currentTest);
  }

  renderQuestion = currentQuestion => {
    let data = this.state.questionBank[currentQuestion];
    console.log('current question data: ', data);
    switch (data.type) {
      case FILL_THE_BLANK:
        console.log('type : ', data.type);
        return <Text>{data.type}</Text>;
        break;
      case MULTIPLE_CHOICE:
        console.log('type : ', data.type);
        return <Text>{data.type}</Text>;
        // code block
        break;
      case PAIR_SELECTION:
        console.log('type : ', data.type);
        return <Text>{data.type}</Text>;
        // code block
        break;
      case SPELLING_ORDER:
        console.log('type : ', data.type);
        return <Text>{data.type}</Text>;
        // code block
        break;
      default:
        console.log('type : ', data.type);
        return <Text>{data.type}</Text>;
      // code block
    }
  };
  render() {
    const {navigation, currentStack} = this.props;
    // todo: change stage to props here when using redux
    console.log('lesson stage: ', this.state);
    // console.log('lesson props: ', this.props);
    // if (this.state.questionBank.length > 0) {
    //   this.renderQuestion(this.state.currentQuestion);
    // }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is Lesson.</Text>
        {this.state.questionBank &&
          this.renderQuestion(this.state.currentQuestion)}
        {/* {this.renderQuestion(this.state.currentQuestion)} */}

        {/* <Button
          // todo: not use navigation here, use user answer stage to render question components
          // actually, don't need this button, just render the questions
          title="Play"
          onPress={() => navigateTo(navigation, currentStack[0])}
        /> */}

        <Button
          title="Go back Home"
          onPress={() => goToFirstScreenInStack(navigation)}
        />
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
