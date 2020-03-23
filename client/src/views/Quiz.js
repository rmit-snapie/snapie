import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goToFirstScreenInStack} from '../helpers/NavigateHelper';

class Quiz extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is Quiz.</Text>
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

export default Quiz;
