import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image, ActivityIndicator, View} from 'react-native';
import styles from './ExploreStyle';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';
import ImageLabels from './image-labels/ImageLabels';
import {LABELS_API} from './constants';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: '',
      base64encoded: '',
      loading: false,
      results: [],
      analyzed: false,
    };
  }

  takePicture = async () => {
    this.setState({loading: true, analyzed: false});
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({imageUri: data.uri, base64encoded: data.base64});
    }
    this.setState({loading: false});
  };

  analyze = async () => {
    this.setState({loading: true});
    axios
      .post(LABELS_API, {
        image: this.state.base64encoded,
        maxResults: 5,
      })
      .then(response => {
        this.setState({results: [...response.data]});
      })
      .then(() => {
        this.setState({loading: false, analyzed: true});
      });
  };

  render() {
    const {imageUri, loading, results, analyzed} = this.state;
    const {navigation} = this.props;

    if (imageUri) {
      return (
        <ImageLabels
          imageUri={imageUri}
          loading={loading}
          results={results}
          analyze={() => this.analyze()}
          navigation={navigation}
          analyzed={analyzed}
        />
      );
    }
    return (
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
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
        <View style={styles.captureWrapper}>
          {loading ? (
            <ActivityIndicator
              animating={loading}
              size="large"
              color="#ffffff"
            />
          ) : (
            <TouchableOpacity onPress={this.takePicture.bind(this)}>
              <Image
                style={styles.lookUp}
                source={require('./assets/camera.png')}
              />
            </TouchableOpacity>
          )}
        </View>
      </RNCamera>
    );
  }
}

Explore.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Explore;
