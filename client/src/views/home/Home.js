import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './HomeStyle';
import {View, Text, Button} from 'react-native';
import {navigateTo, replaceTo} from '../../helpers/NavigateHelper';
import {
  EXPLORE_SCREEN,
  LESSON_SCREEN,
  REVIEW_SCREEN,
} from '../../../environments/Routes';
import {connect} from 'react-redux';
import {setLocalQuestions} from '../../redux/actions/QuestionsContentActions';

class Home extends Component {
  componentDidMount() {
    const {stage, level, test} = this.props.progress;
    this.props.handleSetLocalQuestions({
      stage: stage,
      level: level,
      test: test,
    });
  }

  render() {
    const {navigation} = this.props;
    return (
      <View testID="home-screen" style={styles.container}>
        <Text style={styles.text}>We are at home screen.</Text>
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
          title="Go to Lesson"
          onPress={() => replaceTo(navigation, LESSON_SCREEN)}
        />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
  progress: PropTypes.object.isRequired,
  handleSetLocalQuestions: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    progress: state.progressReducer,
  }),
  {handleSetLocalQuestions: setLocalQuestions},
)(Home);
