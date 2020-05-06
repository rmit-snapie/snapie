import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Image} from 'react-native';
import styles from './ExploreStyle';
import {RNCamera} from 'react-native-camera';
import axios from 'axios';
import ImageLabels from './image-labels/ImageLabels';
import {LABELS_API, UNSPLASH_FETCH_IMAGES} from './constants';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUri: '',
      base64encoded: '',
      loading: false,
      results: [],
    };
  }

  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 0.5, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.setState({imageUri: data.uri, base64encoded: data.base64});
    }
  };

  analyze = async () => {
    this.setState({loading: true});
    axios
      .post(LABELS_API, {
        image: this.state.base64encoded,
        rawResult: 'false',
        maxResults: 3,
      })
      .then(response => {
        for (let i = 0; i < response.data.length; i++) {
          axios
            .post(UNSPLASH_FETCH_IMAGES, {
              keyword: response.data[i].label,
            })
            .then(response1 => {
              const obj = {
                label: response.data[i].label,
                image: response1.data[i].small,
              };
              this.setState({
                results: [...this.state.results, obj],
              });
            });
        }
      })
      .then(() => {
        this.setState({loading: false});
      });
  };

  render() {
    const {imageUri, loading, results} = this.state;
    const {navigation} = this.props;
    if (imageUri) {
      return (
        <ImageLabels
          imageUri={imageUri}
          loading={loading}
          results={results}
          analyze={() => this.analyze()}
          navigation={navigation}
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
        <TouchableOpacity onPress={this.takePicture.bind(this)}>
          <Image
            style={styles.lookUp}
            source={require('./assets/camera.png')}
          />
        </TouchableOpacity>
      </RNCamera>
    );
  }
}

Explore.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Explore;
