import React, {Component} from 'react';
import {object} from 'prop-types';
import {
  ImageBackground,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  View,
} from 'react-native';
import styles from './ExploreStyle';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';
import {LABELS_API} from '../../../environments/constants';
import {goToFirstScreenInStack, replaceTo} from '../../helpers/NavigateHelper';
import Loading from '../../shared/components/Loading';
import ImageLabels from './image-labels/ImageLabels';
import {REVIEW_SCREEN} from '../../../environments/Routes';
const AnalyzeButton = require('../../shared/assets/AnalyzeButton.png');
const ExploreSnapIcon = require('../../shared/assets/ExploreSnapIcon.png');
const RecaptureIcon = require('../../shared/assets/RecaptureIcon.png');
const BackToHomeIcon = require('../../shared/assets/BackToHomeIcon.png');
const GoToBookButton = require('../../shared/assets/GoToBookButton.png');
const XIcon = require('../../shared/assets/XIcon.png');

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: '',
      base64encoded: '',
      loading: false,
      results: [],
      analysis: {analyzing: false, analyzed: false},
    };
  }

  imageUriIsEmpty = () => {
    return this.state.imageUri === '';
  };

  takePicture = async () => {
    if (!this.imageUriIsEmpty()) {
      this.analyze();
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
    this.setState({
      imageUri: '',
      base64encoded: '',
      loading: false,
      analyzing: false,
      analysis: {analyzing: false, analyzed: false},
      results: [],
    });
  };

  analyze = async () => {
    this.setState({analysis: {analyzing: true}});
    axios
      .post(LABELS_API, {
        image: this.state.base64encoded,
        maxResults: 5,
      })
      .then(response => {
        this.setState({
          results: [...response.data],
          analysis: {analyzing: false, analyzed: true},
        });
      });
  };

  render() {
    const {
      imageUri,
      loading,
      results,
      analysis: {analyzing, analyzed},
    } = this.state;
    const {navigation} = this.props;
    const src = imageUri ? AnalyzeButton : ExploreSnapIcon;
    if (analyzing) {
      return <Loading />;
    }
    if (analyzed) {
      return (
        <View style={styles.container}>
          <View style={styles.exploreHeader}>
            <TouchableOpacity onPress={this.recapture.bind(this)}>
              <Image style={styles.goBack} source={RecaptureIcon} />
            </TouchableOpacity>
          </View>
          <ImageLabels results={results} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <View style={styles.exploreHeader}>
          <TouchableOpacity onPress={() => goToFirstScreenInStack(navigation)}>
            <Image style={styles.goHome} source={BackToHomeIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.cameraWrapper}>
          {!this.imageUriIsEmpty() ? (
            <ImageBackground source={{uri: imageUri}} style={styles.camera} />
          ) : (
            <RNCamera
              ref={ref => {
                this.camera = ref;
              }}
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
              }}>
              <TouchableOpacity
                onPress={() => replaceTo(navigation, REVIEW_SCREEN)}>
                <Image style={styles.goToBook} source={GoToBookButton} />
              </TouchableOpacity>
            </RNCamera>
          )}
        </View>
        <View style={styles.exploreFooter}>
          {!this.imageUriIsEmpty() && (
            <TouchableOpacity
              style={styles.exitWrapper}
              onPress={this.recapture.bind(this)}>
              <Image style={styles.exit} source={XIcon} />
            </TouchableOpacity>
          )}
          <View style={styles.captureWrapper}>
            {loading ? (
              <ActivityIndicator
                animating={loading}
                size="large"
                color="#ffffff"
                style={styles.loading}
              />
            ) : (
              <TouchableOpacity onPress={this.takePicture.bind(this)}>
                <Image style={styles.lookUp} source={src} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}

Explore.propTypes = {
  navigation: object.isRequired,
};

export default Explore;
