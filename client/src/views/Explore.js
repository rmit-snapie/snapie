import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goToFirstScreenInStack, navigateTo} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
import {REVIEW_SCREEN} from '../../environments/Routes';
import TakePhoto from '../components/take-photo/TakePhoto';

class Explore extends Component {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <TakePhoto/>
        {/*<Text style={styles.text}>This is Explore.</Text>*/}
        {/*<View style={styles.buttonWrapper1}>*/}
        {/*  <Button*/}
        {/*    title="Go to Review"*/}
        {/*    onPress={() => navigateTo(navigation, REVIEW_SCREEN)}*/}
        {/*  />*/}
        {/*  <Button*/}
        {/*    title="Go back Home"*/}
        {/*    onPress={() => goToFirstScreenInStack(navigation)}*/}
        {/*  />*/}
        {/*</View>*/}
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
