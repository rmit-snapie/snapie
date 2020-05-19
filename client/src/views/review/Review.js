import React from 'react';
import {View, Text, Image, TouchableOpacity, SectionList} from 'react-native';
import {object, bool, func, arrayOf} from 'prop-types';
import {readText} from './../../helpers/TextToSpeech';
import styles from './ReviewStyle';
import {goToFirstScreenInStack} from './../../helpers/NavigateHelper';
import HomeIcon from '../../shared/assets/BackToHomeIcon.png';
import ListenIcon from '../../shared/assets/ListenButton.png';

const Review = ({
  navigation,
  featured,
  setFeatured,
  DATA,
  vocabulariesAreEmpty,
}) => {
  const {word, url} = featured;
  return (
    <View style={styles.container}>
      <View style={styles.reviewHeader}>
        <View style={styles.actionsWrapper}>
          <TouchableOpacity onPress={() => goToFirstScreenInStack(navigation)}>
            <Image style={styles.goHome} source={HomeIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.featuredWrapper}>
          <View style={styles.featuredVocab}>
            {word === '' ? (
              <Text style={styles.noSelectText}>
                {vocabulariesAreEmpty
                  ? 'Find a word in explore'
                  : 'Choose a word'}
              </Text>
            ) : (
              <>
                <Image style={styles.bigImg} source={{uri: url}} />
                <View style={styles.vocabInfo}>
                  <Text style={styles.text}>{word}</Text>
                  <TouchableOpacity onPress={() => readText(word)}>
                    <Image style={styles.listenBtn} source={ListenIcon} />
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </View>

      <View style={styles.vocabulariesWrapper}>
        {vocabulariesAreEmpty ? (
          <View style={styles.centeredView}>
            <Text style={styles.emptyMessage}>
              Go to Explore and catch them all!
            </Text>
          </View>
        ) : (
          <SectionList
            sections={DATA.filter(function(data) {
              return data.data.length !== 0;
            })}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => setFeatured(item)}>
                <View style={styles.vocabularyWrapper}>
                  <Image style={styles.smallImg} source={{uri: item.url}} />
                  <View
                    style={
                      featured.word === item.word
                        ? [styles.labelWrapper, styles.chosenLabelWrapper]
                        : styles.labelWrapper
                    }>
                    <Text style={styles.item}>{item.word}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
            renderSectionHeader={({section}) => (
              <Text style={styles.sectionHeader}>{section.title}</Text>
            )}
            keyExtractor={(item, index) => index}
          />
        )}
      </View>
    </View>
  );
};

Review.propTypes = {
  DATA: arrayOf(object).isRequired,
  navigation: object.isRequired,
  featured: object.isRequired,
  setFeatured: func.isRequired,
  vocabulariesAreEmpty: bool.isRequired,
};

export default Review;
