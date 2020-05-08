import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Image, TouchableOpacity, SectionList } from 'react-native';
// import { goToFirstScreenInStack, navigateTo } from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
// import { LESSON_SCREEN } from '../../environments/Routes';

class Review extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      words: ['Aa', 'Bb', 'Cc', 'Dd', 'Ee', 'Ff'],
      currentWord: '',
      recent: []
    };
  }

  setCurrent(item) {
    // console.warn(item)
    this.setState({ currentWord: item })
    if (!this.state.recent.includes(item)) {
      if (this.state.recent.length >= 5) {
        this.state.recent.pop()
        this.state.recent.unshift(item)
      } else {
        this.state.recent.unshift(item)
      }
    }
  }

  render() {
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
            <TouchableOpacity >
              <Image
                style={styles.lookUp}
                source={require('./../assets/home-screen-icons/DefaultAvatar.png')}
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
            renderItem={({ item }) => <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => this.setCurrent(item)}>
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
        {/* <Button
              title="Go to Lesson"
              onPress={() => navigateTo(navigation, LESSON_SCREEN)}
            />
            <Button
              title="Go back Home"
              onPress={() => goToFirstScreenInStack(navigation)}
            /> */}
        {/* </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    paddingBottom: 15,
  },
  buttonWrapper1: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  lookUp: {
    width: 50,
    height: 50,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  labelWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    width: 300,
    backgroundColor: 'rgba(0,0,0, 0.4)',
    borderRadius: 16,
    padding: 10,
  },
});

export default Review;
