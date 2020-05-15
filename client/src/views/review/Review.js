import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
// import { updateRecentArr } from './../../redux/reducers/ReviewScreen'
import { readText } from './../../helpers/TextToSpeech'
import styles from './ReviewStyle';
import {goToFirstScreenInStack} from './../../helpers/NavigateHelper';

class Review extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      // words: ['Apple', 'America', 'Banana', 'Cat', 'Dog', 'Egg', 'Fruit'],
      currentWord: '',
      currentImg: '',
      recent: this.props.recentReducer.recentArr || [],
      words: this.props.vocabulariesReducer || []
    };
  }

  setCurrent(item) {
    this.setState({ currentWord: item.word, currentImg: item.url })
    if (!this.state.recent.includes(item)) {
      if (this.state.recent.length >= 3) {
        this.state.recent.pop()
        this.state.recent.unshift(item)
      } else {
        this.state.recent.unshift(item)
      }
    } else {
      var index = this.state.recent.indexOf(item)
      this.state.recent.splice(index, 1)
      this.state.recent.unshift(item)
    }
    // this.props.dispatch(updateRecentArr(this.state.recent));
  }

  render() {
    const DATA = [
      { title: 'Recents', data: this.state.recent },
      { title: 'A', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "A" }) },
      { title: 'B', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "B" }) },
      { title: 'C', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "C" }) },
      { title: 'D', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "D" }) },
      { title: 'E', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "E" }) },
      { title: 'F', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "F" }) },
      { title: 'G', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "G" }) },
      { title: 'H', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "H" }) },
      { title: 'I', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "I" }) },
      { title: 'J', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "J" }) },
      { title: 'K', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "K" }) },
      { title: 'L', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "L" }) },
      { title: 'M', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "M" }) },
      { title: 'N', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "N" }) },
      { title: 'O', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "O" }) },
      { title: 'P', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "P" }) },
      { title: 'Q', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "Q" }) },
      { title: 'R', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "R" }) },
      { title: 'S', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "S" }) },
      { title: 'T', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "T" }) },
      { title: 'U', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "U" }) },
      { title: 'V', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "V" }) },
      { title: 'W', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "W" }) },
      { title: 'X', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "X" }) },
      { title: 'Y', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "Y" }) },
      { title: 'Z', data: this.state.words.filter(function (item) { return item.word.charAt(0) == "Z" }) },
    ]
    // console.warn(this.state.words)
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'flex-start', backgroundColor: '#efc458',}}>
        <TouchableOpacity onPress={() => goToFirstScreenInStack(navigation)}>
            <Image style={styles.goHome} source={require('./../../shared/assets/BackToHomeIcon.png')} />
          </TouchableOpacity>
        </View>
        {this.state.currentWord == '' && (
          <View style={styles.noSelect}>
            <Text style={styles.noSelectText}>Let's Review</Text>
          </View>
        )}
        {this.state.currentWord !== '' && (
          <View style={styles.buttonWrapper1}>
            <Image
              style={styles.bigImg}
              source={{ uri: this.state.currentImg }}
            />
            <View>
              <Text style={styles.text}>{this.state.currentWord}</Text>
              <TouchableOpacity style={{ marginLeft: 25 }} onPress={() => readText(this.state.currentWord)}>
                <Image
                  style={styles.listenBtn}
                  source={require('./../../shared/assets/ListenButton.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={styles.container}>
          <SectionList
            sections={DATA.filter(function (data) { return data.data.length !== 0 })}
            renderItem={({ item }) => <TouchableOpacity style={{ alignItems: 'center', marginBottom: 10 }} onPress={() => this.setCurrent(item)}>
              <View style={styles.labelWrapper}>
                <Text style={styles.item}>{item.word}</Text>
                <Image
                  style={styles.smallImg}
                  source={{ uri: item.url }} />
              </View>
            </TouchableOpacity>}
            renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
            keyExtractor={(item, index) => index}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  vocabulariesReducer: state.vocabulariesReducer,
  recentReducer: state.recentReducer
})

export default connect(mapStateToProps)(Review);