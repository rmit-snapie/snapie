import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goToFirstScreenInStack, navigateTo} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
import {MULTIPLE_CHOICE, DRAG_AND_DROP} from '../../environments/Routes';
class Lesson extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is Lesson.</Text>

        <Button
          title="Multiple choice"
          onPress={() => navigateTo(navigation, MULTIPLE_CHOICE)}
        />
        <Button
          title="drag and drop choice"
          onPress={() => navigateTo(navigation, DRAG_AND_DROP)}
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
    fontSize: 20,
    paddingBottom: 15,
  },
});

export default Lesson;
