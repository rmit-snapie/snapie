import React, {Component} from 'react';
import {connect} from 'react-redux';
import {object, string} from 'prop-types';
import styles from './HomeStyle';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import {navigateTo} from '../../helpers/NavigateHelper';
import {
  EXPLORE_SCREEN,
  LESSON_SCREEN,
  PROFILE_SCREEN,
  REVIEW_SCREEN,
} from '../../../environments/Routes';
import DefaultAvatar from '../../shared/assets/DefaultAvatar.png';
import HomeScreen from '../assets/home-screen-icons/HomeScreen.png';
import LessonButton from '../assets/home-screen-icons/Lesson.png';
import ExploreButton from '../assets/home-screen-icons/Explore.png';
import ReviewButton from '../assets/home-screen-icons/Book.png';
import ImageButton from '../../shared/components/image-button/ImageButton';

class Home extends Component {
  render() {
    const {navigation, username} = this.props;
    return (
      <ImageBackground style={styles.background} source={HomeScreen}>
        <View style={styles.profileWrapper}>
          <Text style={styles.profileText}>Hello</Text>
          {username !== '' && (
            <Text style={styles.profileText}>{username}</Text>
          )}
          <TouchableOpacity
            onPress={() => navigateTo(navigation, PROFILE_SCREEN)}>
            <Image source={DefaultAvatar} style={styles.avatar} />
          </TouchableOpacity>
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
            handlePress={() => navigateTo(navigation, REVIEW_SCREEN)}
            source={ReviewButton}
          />
        </View>
      </ImageBackground>
    );
  }
}

Home.propTypes = {
  navigation: object.isRequired,
  username: string.isRequired,
};

export default connect(
  state => ({username: state.userReducer.username}),
  null,
)(Home);
