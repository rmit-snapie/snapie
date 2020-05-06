import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './HomeStyle';
import {
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  Platform,
} from 'react-native';
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
import {play, stop, pause} from '../../helpers/playTrack';

import {getImage, dirs, removeImage} from '../../helpers/downImage';
let filepath = dirs.DocumentDir + '/sad.png';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {image: null};
  }
  renderImage = async () => {
    getImage().then(any => {
      // console.log('return: ', filepath);
      this.setState({image: true});
    });
  };
  remove = async () => {
    removeImage();
    this.setState({image: false});
  };
  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground style={styles.background} source={HomeScreen}>
        <View style={styles.profileWrapper}>
          <Text style={styles.profileText}>Hello</Text>
          <Text style={styles.profileText}>User 123</Text>
          <Image source={DefaultAvatar} style={styles.avatar} />
        </View>
        {/* <Button
          title="fetch Image"
          onPress={() =>
            getImage(
              'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/sad.png',
            )
          }>
          fetch Image
        </Button> */}
        <Button
          title="fetch JS"
          onPress={() =>
            getImage(
              'https://tam-terraform-state.s3-ap-southeast-1.amazonaws.com/StageOneQuestions.js',
            )
          }>
          fetch js
        </Button>
        <Button title="get image" onPress={() => this.renderImage()} />
        {this.state.image && (
          <Image
            style={{width: 100, height: 100}}
            source={{
              uri: Platform.OS === 'android' ? 'file://' + filepath : filepath,
            }}
          />
        )}
        <Button title="remove image" onPress={() => this.remove()} />
        <Button title="play" onPress={() => play()}>
          play
        </Button>
        <Button title="stop" onPress={() => stop()}>
          stop
        </Button>
        <Button title="pause" onPress={() => pause()}>
          stop
        </Button>
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
