import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageLabelsStyle';
import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import {readText} from '../../../helpers/TextToSpeech';
import {replaceTo} from '../../../helpers/NavigateHelper';
import {EXPLORE_SCREEN} from '../../../../environments/Routes';

const ImageLabels = ({imageUri, loading, results, analyze, navigation}) => {
  const emptyResults = () => {
    return results.length === 0;
  };
  return (
    <ImageBackground
      blurRadius={!emptyResults() || loading ? 90 : 0}
      style={styles.previewImage}
      source={{uri: imageUri}}>
      <View style={styles.backButtonWrapper}>
        <Button
          title="Back"
          onPress={() => replaceTo(navigation, EXPLORE_SCREEN)}
        />
      </View>
      <View style={styles.resultsWrapper}>
        {loading && (
          <ActivityIndicator animating={loading} size="large" color="#ffffff" />
        )}
        {!emptyResults() &&
          results.map((item, index) => (
            <View style={styles.resultWrapper} key={index}>
              <View key={index} style={styles.labelWrapper}>
                <Image style={styles.image} source={{uri: item.image}} />
                <Text style={styles.label}>{item.label}</Text>
              </View>
              <View style={styles.actionButtonsWrapper}>
                <Button
                  onPress={() => readText(item.label)}
                  style={styles.actionButton}
                  title="Listen"
                />
                <Button style={styles.actionButton} title="Save" />
              </View>
            </View>
          ))}
        {emptyResults() && (
          <Text style={styles.noResultText}>
            No result is found :( try again
          </Text>
        )}
      </View>
      <View style={styles.lookUpButtonWrapper}>
        <Button title="Analyze" onPress={analyze} />
      </View>
    </ImageBackground>
  );
};

ImageLabels.propTypes = {
  imageUri: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  analyze: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default ImageLabels;
