import React from 'react';
import PropTypes from 'prop-types';
import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {readText} from '../../../helpers/TextToSpeech';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ImageLabels = ({imageUri, loading, results, analyze}) => {
  return (
    <ImageBackground
      blurRadius={90}
      style={styles.previewImage}
      source={{uri: imageUri}}>
      <View style={styles.resultsWrapper}>
        {loading && (
          <ActivityIndicator animating={loading} size="large" color="#ffffff" />
        )}
        {results.map((item, index) => (
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
      </View>
      <View style={styles.lookUpButtonWrapper}>
        <Button title="Analyze" onPress={analyze} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  previewImage: {
    flex: 1,
    height: windowHeight,
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultsWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 300,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    borderRadius: 16,
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'Amiko-Bold',
    color: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    fontSize: 16,
  },
  actionButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    fontFamily: 'Amiko-Bold',
    fontSize: 20,
  },
  lookUpButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

ImageLabels.propTypes = {
  imageUri: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageLabels;
