import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {arrayOf, object, func} from 'prop-types';
import styles from './ImageLabelsStyle';
import {Image, TouchableOpacity, Text, View} from 'react-native';
import {readText} from '../../../helpers/TextToSpeech';
import {addNewVocab} from '../../../redux/actions/VocabulariesActions';
import SnapieModal from '../../../shared/components/snapie-modal/SnapieModal';
const ListenButton = require('../../../shared/assets/buttons/ListenButton.png');
const SaveButton = require('../../../shared/assets/buttons/SaveButton.png');
const Ticked = require('../../../shared/assets/gifs/Ticked.gif');
const ViewMoreButton = require('../../../shared/assets/buttons/ViewMoreButton.png');
const ViewLessButton = require('../../../shared/assets/buttons/ViewLessButton.png');

const ImageLabels = ({results, handleAddVocabulary, vocabularies}) => {
  const [displayResults, setDisplayResults] = useState(results);
  const [displayMore, setDisplayMore] = useState(false);
  const [openModal, setOpenModal] = useState({
    display: false,
    type: null,
    message: null,
  });

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

  const vocabularyAlreadyAdded = word => {
    return vocabularies.some(vocab => vocab.word === word);
  };

  const addVocabulary = (vocab, url) => {
    if (vocabularyAlreadyAdded(vocab)) {
      setOpenModal({
        display: true,
        type: 'error',
        message: 'Vocabulary is already added!',
      });
    } else {
      setOpenModal({display: true, type: 'success', message: 'Success!'});
      handleAddVocabulary({
        word: vocab,
        url: url,
      });
    }
    setTimeout(() => {
      setOpenModal({display: false, type: null, message: null});
    }, 1000);
  };

  const closeModal = () => {
    setOpenModal(prevState => ({
      ...prevState,
      display: false,
    }));
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
  const saveOrTick = vocab => {
    if (vocabularyAlreadyAdded(vocab)) {
      return Ticked;
    }
    return SaveButton;
  };
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
                <TouchableOpacity
                  onPress={() =>
                    addVocabulary(result.description, result.urls[0])
                  }>
                  <Image
                    style={styles.actionButton}
                    source={saveOrTick(result.description)}
                  />
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
      {displayMore && (
        <View style={styles.viewLessWrapper}>
          <TouchableOpacity onPress={() => seeLess()}>
            <Image style={styles.viewLess} source={ViewLessButton} />
          </TouchableOpacity>
        </View>
      )}
      {openModal.display && (
        <SnapieModal
          display={openModal.display}
          animationType="fade"
          message={openModal.message}
          setDisplay={closeModal}
          type={openModal.type}
        />
      )}
    </View>
  );
};

ImageLabels.propTypes = {
  results: arrayOf(object).isRequired,
  handleAddVocabulary: func.isRequired,
  vocabularies: arrayOf(object),
};

export default connect(
  state => ({vocabularies: state.vocabulariesReducer.vocabularies}),
  {handleAddVocabulary: addNewVocab},
)(ImageLabels);
