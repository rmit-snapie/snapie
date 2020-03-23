import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goToFirstScreenInStack, navigateTo} from '../helpers/NavigateHelper';

class Explore extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is Explore.</Text>
        <View style={styles.buttonWrapper1}>
          <Button
            title="Go to Review"
            onPress={() => navigateTo(navigation, 'Review')}
          />
          <Button
            title="Go back Home"
            onPress={() => goToFirstScreenInStack(navigation)}
          />
        </View>
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
  buttonWrapper1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Explore;
