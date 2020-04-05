import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, StyleSheet} from 'react-native';
import {navigateTo} from '../helpers/NavigateHelper';
import {
  EXPLORE_SCREEN,
  QUIZ_SCREEN,
  REVIEW_SCREEN,
} from '../../environments/Routes';
import MultipleChoiceQuiz from '../domainModels/MultipleChoiceQuiz';
import multipleChoiceQuizData from '../domainModels/MultipleChoiceQuiz.json';
class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const {navigation} = this.props;
    return (
      <View testID="home-screen" style={styles.container}>
        <Text style={styles.text}>We are at home screen.</Text>
        <MultipleChoiceQuiz quizData={multipleChoiceQuizData} />
        <View style={styles.buttonWrapper1}>
          <Button
            title="Go to Explore"
            onPress={() => navigateTo(navigation, EXPLORE_SCREEN)}
          />
          <Button
            title="Go to Review"
            onPress={() => navigateTo(navigation, REVIEW_SCREEN)}
          />
        </View>
        <Button
          title="Go to Quiz"
          onPress={() => navigateTo(navigation, QUIZ_SCREEN)}
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
  buttonWrapper1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
