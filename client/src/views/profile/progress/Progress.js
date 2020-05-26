import React, {Component} from 'react';
import {object} from 'prop-types';
import {connect} from 'react-redux';
import styles from './ProgressStyle';
import {ImageBackground, View, Text, Animated} from 'react-native';
import ProfileProgressBackground from '../../../shared/assets/ProfileProgressBackground.png';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testsOpacity: new Animated.Value(0),
      levelsOpacity: new Animated.Value(0),
      wordsOpacity: new Animated.Value(0),
      badgesOpacity: new Animated.Value(0),
    };
  }

  onLoad = (opacity, duration) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };
  componentDidMount() {
    const {
      testsOpacity,
      levelsOpacity,
      wordsOpacity,
      badgesOpacity,
    } = this.state;
    this.onLoad(testsOpacity, 500);
    this.onLoad(levelsOpacity, 700);
    this.onLoad(wordsOpacity, 900);
    this.onLoad(badgesOpacity, 1100);
  }

  render() {
    const {
      testsOpacity,
      levelsOpacity,
      wordsOpacity,
      badgesOpacity,
    } = this.state;
    const {
      progressCounter: {testsCompleted, levelsCompleted},
    } = this.props;
    const words =
      (5 * (testsCompleted - (testsCompleted % 3))) / 3 +
      2 * (testsCompleted % 3);
    return (
      <ImageBackground
        source={ProfileProgressBackground}
        style={styles.container}>
        <View style={styles.row}>
          <View style={styles.testsWrapper}>
            <Animated.View
              style={[
                styles.smallerCircle,
                styles.testCircle,
                {
                  opacity: testsOpacity,
                  transform: [
                    {
                      scale: testsOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.85, 1],
                      }),
                    },
                  ],
                },
              ]}>
              <Text style={styles.testText}>
                {testsCompleted}
                {'\n'}test(s)
              </Text>
            </Animated.View>
          </View>

          <View style={styles.levelsWrapper}>
            <Animated.View
              style={[
                styles.circle,
                styles.levelsCircle,
                {
                  opacity: levelsOpacity,
                  transform: [
                    {
                      scale: levelsOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.85, 1],
                      }),
                    },
                  ],
                },
              ]}>
              <Text style={styles.levelText}>
                {levelsCompleted}
                {'\n'}level(s)
              </Text>
            </Animated.View>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.wordsWrapper}>
            <Animated.View
              style={[
                styles.circle,
                styles.wordsCircle,
                {
                  opacity: wordsOpacity,
                  transform: [
                    {
                      scale: wordsOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.85, 1],
                      }),
                    },
                  ],
                },
              ]}>
              <Text style={styles.wordText}>
                {words}
                {'\n'}word(s)
              </Text>
            </Animated.View>
          </View>
          <View style={styles.badgesWrapper}>
            <Animated.View
              style={[
                styles.smallerCircle,
                styles.badgesCircle,
                {
                  opacity: badgesOpacity,
                  transform: [
                    {
                      scale: badgesOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.85, 1],
                      }),
                    },
                  ],
                },
              ]}>
              <Text style={styles.badgeText}>
                {levelsCompleted}
                {'\n'} badge(s)
              </Text>
            </Animated.View>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

Progress.propTypes = {
  progressCounter: object.isRequired,
};

export default connect(
  state => ({progressCounter: state.progressCounterReducer}),
  null,
)(Progress);
