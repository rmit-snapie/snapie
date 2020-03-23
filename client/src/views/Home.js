import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {navigateTo} from '../helpers/NavigateHelper';

class Home extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>We are at home screen.</Text>
        <View style={styles.buttonWrapper1}>
          <Button
            title="Go to Explore"
            onPress={() => navigateTo(navigation, 'Explore')}
          />
          <Button
            title="Go to Review"
            onPress={() => navigateTo(navigation, 'Review')}
          />
        </View>
        <Button
          title="Go to Quiz"
          onPress={() => navigateTo(navigation, 'Quiz')}
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
  buttonWrapper1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
