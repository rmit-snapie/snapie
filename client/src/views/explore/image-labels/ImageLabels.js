import React, {useState, useEffect} from 'react';
import {arrayOf, object} from 'prop-types';
import styles from './ImageLabelsStyle';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import {readText} from '../../../helpers/TextToSpeech';
const ListenButton = require('../../../shared/assets/ListenButton.png');
const SaveButton = require('../../../shared/assets/SaveButton.png');
const ViewMoreButton = require('../../../shared/assets/ViewMoreButton.png');
const ViewLessButton = require('../../../shared/assets/ViewLessButton.png');

const ImageLabels = ({results}) => {
  const [displayResults, setDisplayResults] = useState(results);
  const [displayMore, setDisplayMore] = useState(true);

  useEffect(() => {
    setDisplayMore(false);
    if (results.length !== 0) {
      setDisplayResults([results[0]]);
    }
  }, [results]);

  const resultIsEmpty = () => {
    return results.length === 0;
  };

  const seeMore = () => {
    setDisplayMore(true);
    setDisplayResults(results);
  };

  const seeLess = () => {
    setDisplayMore(false);
    setDisplayResults([results[0]]);
  };

  if (resultIsEmpty()) {
    return (
      <View style={styles.container}>
        <Text style={styles.notFound}>
          We did not find any results :( please try again
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.resultsWrapper}>
        {displayResults.map((result, index) => (
          <View key={index} style={styles.resultWrapper}>
            <View style={styles.imageWrapper}>
              <Image style={styles.image} source={{uri: result.urls[0]}} />
              <View style={styles.actionButtonsWrapper}>
                <TouchableOpacity onPress={() => readText(result.description)}>
                  <Image style={styles.actionButton} source={ListenButton} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image style={styles.actionButton} source={SaveButton} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.description}>{result.description}</Text>
            {!displayMore && (
              <TouchableOpacity onPress={() => seeMore()}>
                <Image style={styles.viewMore} source={ViewMoreButton} />
              </TouchableOpacity>
            )}
          </View>
        ))}
      </View>
      <View style={styles.viewLessWrapper}>
        {displayMore && (
          <TouchableOpacity onPress={() => seeLess()}>
            <Image style={styles.viewLess} source={ViewLessButton} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

ImageLabels.propTypes = {
  results: arrayOf(object).isRequired,
};

export default ImageLabels;
