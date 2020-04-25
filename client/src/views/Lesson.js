import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goToFirstScreenInStack, navigateTo} from '../helpers/NavigateHelper';

class Lesson extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const {navigation, currentStack, progress} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is Lesson.</Text>
        <Text style={styles.text}>
          Stage: {progress.stage} - Level: {progress.level} - Test:{' '}
          {progress.test}
        </Text>
        <Button
          title="Play"
          onPress={() => navigateTo(navigation, currentStack[0])}
        />
        <Button
          title="Go back Home"
          onPress={() => goToFirstScreenInStack(navigation)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Amiko-Bold',
    fontSize: 20,
    paddingBottom: 15,
  },
});

Lesson.propTypes = {
  navigation: PropTypes.object.isRequired,
  currentStack: PropTypes.arrayOf(PropTypes.string).isRequired,
  progress: PropTypes.object.isRequired,
};

export default connect(
  state => ({
    currentStack: state.questionTypeStackReducer.currentStack,
    progress: state.progressReducer,
  }),
  null,
)(Lesson);
