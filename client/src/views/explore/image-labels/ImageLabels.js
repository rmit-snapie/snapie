import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './ImageLabelsStyle';
import {
  ActivityIndicator,
  Button,
  Image,
  ImageBackground,
  Text,
  View,
  ScrollView,
} from 'react-native';
import {readText} from '../../../helpers/TextToSpeech';
import {replaceTo} from '../../../helpers/NavigateHelper';
import {EXPLORE_SCREEN} from '../../../../environments/Routes';

const ImageLabels = ({
  imageUri,
  loading,
  results,
  analyze,
  analyzed,
  navigation,
}) => {
  const [displayResults, setDisplayResults] = useState([]);
  const [displayMore, setDisplayMore] = useState(false);
  useEffect(() => {
    setDisplayMore(false);
    if (results.length !== 0) {
      setDisplayResults([results[0]]);
    }
  }, [results]);

  const emptyResults = () => {
    return results.length === 0;
  };

  const seeMore = () => {
    setDisplayMore(true);
    setDisplayResults(results);
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
        {loading ? (
          <ActivityIndicator animating={loading} size="large" color="#ffffff" />
        ) : (
          <ScrollView>
            {!emptyResults() &&
              displayResults.map((item, index) => (
                <View style={styles.resultWrapper} key={index}>
                  <View key={index} style={styles.labelWrapper}>
                    <Image style={styles.image} source={{uri: item.urls[0]}} />
                    <Text style={styles.label}>{item.description}</Text>
                  </View>
                  <View style={styles.actionButtonsWrapper}>
                    <Button
                      onPress={() => readText(item.description)}
                      style={styles.actionButton}
                      title="Listen"
                    />
                    <Button style={styles.actionButton} title="Save" />
                    {results.length > 1 && !displayMore && (
                      <Button
                        onPress={() => seeMore()}
                        style={styles.actionButton}
                        title="See More"
                      />
                    )}
                  </View>
                </View>
              ))}
            {emptyResults() && analyzed && (
              <Text style={styles.noResultText}>
                No result is found :( try again
              </Text>
            )}
          </ScrollView>
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
  analyzed: PropTypes.bool.isRequired,
  results: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.object.isRequired,
};

export default ImageLabels;
