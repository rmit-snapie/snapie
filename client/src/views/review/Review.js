import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { updateRecentArr } from './../../redux/reducers/ReviewScreen'
import { readText } from './../../helpers/TextToSpeech'
import styles from './ReviewStyle';

class Review extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      words: ['Apple', 'America', 'Banana', 'Cat', 'Dog', 'Egg', 'Fruit'],
      currentWord: '',
      recent: this.props.reviewScreen.recentArr || []
    };
  }

  setCurrent(item) {
    this.setState({ currentWord: item })
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
    // console.warn(this.props.reviewScreen.recentArr)
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.buttonWrapper1}>
          <Image
            style={styles.tinyLogo}
            source={require('./../assets/home-screen-icons/DefaultAvatar.png')}
          />
          <View>
            <Text style={styles.text}>{this.state.currentWord}</Text>
            <TouchableOpacity onPress={() => readText(this.state.currentWord)}>
              <Image
                style={styles.lookUp}
                source={require('./sample.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container}>
          <SectionList
            sections={[
              { title: 'Recents', data: this.state.recent },
              { title: 'A', data: this.state.words.filter((item) => item.charAt(0) == "A") },
              { title: 'B', data: this.state.words.filter((item) => item.charAt(0) == "B") },
              { title: 'C', data: this.state.words.filter((item) => item.charAt(0) == "C") },
              { title: 'D', data: this.state.words.filter((item) => item.charAt(0) == "D") },
              { title: 'E', data: this.state.words.filter((item) => item.charAt(0) == "E") },
              { title: 'F', data: this.state.words.filter((item) => item.charAt(0) == "F") },
              { title: 'G', data: this.state.words.filter((item) => item.charAt(0) == "G") },
              { title: 'H', data: this.state.words.filter((item) => item.charAt(0) == "H") },
              { title: 'I', data: this.state.words.filter((item) => item.charAt(0) == "I") },
              { title: 'J', data: this.state.words.filter((item) => item.charAt(0) == "J") },
              { title: 'K', data: this.state.words.filter((item) => item.charAt(0) == "K") },
              { title: 'L', data: this.state.words.filter((item) => item.charAt(0) == "L") },
            ]}
            renderItem={({ item }) => <TouchableOpacity style={{ alignItems: 'center', marginBottom: 10 }} onPress={() => this.setCurrent(item)}>
              <View style={styles.labelWrapper}>
                <Text style={styles.item}>{item}</Text>
                <Image
                  style={styles.lookUp}
                  source={require('./../assets/home-screen-icons/DefaultAvatar.png')} />
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
  reviewScreen: state.reviewScreen
})

export default connect(mapStateToProps)(Review);