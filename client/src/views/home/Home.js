import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './HomeStyle';
import {View, Text, Image, ImageBackground} from 'react-native';
import {navigateTo} from '../../helpers/NavigateHelper';
import {
  EXPLORE_SCREEN,
  LESSON_SCREEN,
  REVIEW_SCREEN,
} from '../../../environments/Routes';
import {connect} from 'react-redux';
import {setLocalQuestions} from '../../redux/actions/QuestionsContentActions';
import DefaultAvatar from '../assets/home-screen-icons/DefaultAvatar.png';
import HomeScreen from '../assets/home-screen-icons/HomeScreen.png';
import LessonButton from '../assets/home-screen-icons/Lesson.png';
import ExploreButton from '../assets/home-screen-icons/Explore.png';
import ReviewButton from '../assets/home-screen-icons/Book.png';
import ImageButton from '../image-button/ImageButton';

class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground style={styles.background} source={HomeScreen}>
        <View style={styles.profileWrapper}>
          <Text style={styles.profileText}>Hello</Text>
          <Text style={styles.profileText}>User 123</Text>
          <Image source={DefaultAvatar} style={styles.avatar} />
        </View>
        <View style={styles.buttonsWrapper}>
          <ImageButton
            screen
            handlePress={() => navigateTo(navigation, LESSON_SCREEN)}
            source={LessonButton}
          />
          <ImageButton
            screen
            handlePress={() => navigateTo(navigation, EXPLORE_SCREEN)}
            source={ExploreButton}
          />
          <ImageButton
            screen
            handlePress={() => navigateTo(navigation, 'VOICE')}
            source={ReviewButton}
          />
        </View>
      </ImageBackground>
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
