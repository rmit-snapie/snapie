import React, {Component} from 'react';
import {connect} from 'react-redux';
import {object} from 'prop-types';
import styles from './FindTheObjectStyle';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';
import {LABELS_API} from '../../../environments/constants';
import Loading from '../../shared/components/loading/Loading';
import Cheers from '../cheers';

class FindTheObject extends Component {
  constructor(props) {
    super(props);
    const {questionContent, correctAnswer} = props.currentQuestion;
    this.state = {
      questionContent: questionContent,
      correctAnswer: correctAnswer,
      imageUri: '',
      base64encoded: '',
      results: [],
      loading: false,
      analyzing: false,
      cheers: {display: false, sad: false},
    };
  }

  imageUriIsEmpty = () => {
    return this.state.imageUri === '';
  };

  takePicture = async () => {
    if (!this.imageUriIsEmpty()) {
      this.recapture();
    } else {
      this.setState({loading: true});
      if (this.camera) {
        const options = {quality: 0.5, base64: true};
        const data = await this.camera.takePictureAsync(options);
        this.setState({imageUri: data.uri, base64encoded: data.base64});
      }
      this.setState({loading: false});
    }
  };

  recapture = () => {
    this.setState({imageUri: '', loading: false, analyzed: false});
  };

  analyze = async () => {
    this.setState({analyzing: true});
    axios
      .post(LABELS_API, {
        image: this.state.base64encoded,
        maxResults: 5,
      })
      .then(response => {
        this.setState({results: [...response.data], analyzing: false});
      });
  };

  openCheers = (display, sad) => {
    this.setState({cheers: {display: display, sad: sad}});
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {results: oldResults} = prevState;
    const {results, correctAnswer} = this.state;
    if (results !== oldResults && results.length !== 0) {
      if (
        results.some(
          result =>
            result.description.toLowerCase() === correctAnswer.toLowerCase(),
        )
      ) {
        this.openCheers(true, false);
      } else {
        this.openCheers(true, true);
      }
    }
  }

  render() {
    const {questionContent, imageUri, loading, analyzing, cheers} = this.state;
    const src = imageUri
      ? require('../../shared/assets/buttons/CancelButton.png')
      : require('../../shared/assets/buttons/TakePictureButton.png');
    if (analyzing) {
      return <Loading />;
    }
    if (cheers.display) {
      return <Cheers cheers={cheers.display} sad={cheers.sad} />;
    }
    return (
      <View style={styles.preview}>
        <View style={styles.questionWrapper}>
          <Text style={styles.questionContent}>{questionContent}</Text>
        </View>
        <View style={styles.cameraWrapper}>
          {!this.imageUriIsEmpty() ? (
            <ImageBackground source={{uri: imageUri}} style={styles.camera} />
          ) : (
            <RNCamera
              ref={ref => (this.camera = ref)}
              style={styles.camera}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.auto}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'Snapie would like to access your camera',
                buttonPositive: 'Confirm',
                buttonNegative: 'Cancel',
              }}
              androidRecordAudioPermissionOptions={{
                title: 'Permission to use audio recording',
                message: 'Snapie would like to access your microphone',
                buttonPositive: 'Confirm',
                buttonNegative: 'Cancel',
              }}
            />
          )}
        </View>
        <View style={styles.captureWrapper}>
          {loading && this.imageUriIsEmpty() ? (
            <ActivityIndicator
              style={styles.loading}
              animating={loading}
              size="large"
            />
          ) : (
            <TouchableOpacity onPress={this.takePicture.bind(this)}>
              <Image style={styles.capture} source={src} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.analyzeWrapper}>
          <TouchableOpacity
            onPress={this.analyze.bind(this)}
            style={
              this.imageUriIsEmpty()
                ? [styles.checkButton, styles.disabledCheck]
                : [styles.checkButton, styles.checkAnswer]
            }
            disabled={this.imageUriIsEmpty()}>
            <Text style={styles.check}>Check</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

FindTheObject.propTypes = {
  currentQuestion: object.isRequired,
};

export default connect(
  state => ({
    currentQuestion: state.questionsContentReducer.currentQuestion,
  }),
  null,
)(FindTheObject);
