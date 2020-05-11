import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';
import {LABELS_API} from '../../../views/explore/constants';

class Camera extends Component {
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

  takeMore = () => {
    this.setState({imageUrl: ''});
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

  imageUriIsEmpty = () => {
    return this.state.imageUri === '';
  };

  render() {
    const {imageUri} = this.state;

    return (
      <View style={styles.preview}>
        <View style={styles.cameraWrapper}>
          {imageUri ? (
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
          <TouchableOpacity
            style={styles.takePictureButton}
            onPress={this.takePicture.bind(this)}>
            <Image
              style={styles.lookUp}
              source={require('../../../assets/TakePictureIcon.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraWrapper: {
    flex: 3,
    borderWidth: 6,
    borderColor: '#cfcfcf',
    borderRadius: 25,
    overflow: 'hidden',
  },
  camera: {
    height: '100%',
    width: 300,
  },
  captureWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  takePictureButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7ab5f',
  },
  lookUp: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
});

export default Camera;
