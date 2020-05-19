import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

class InternetIndicator extends Component {
  state = {
    online: false,
  };
  componentDidMount() {
    NetInfo.addEventListener(state => {
      this.setState({online: state.isInternetReachable});
    });
  }

  render() {
    const {online} = this.state;
    return (
      <View style={styles.container}>
        <View style={online ? styles.greenCircle : styles.redCircle} />
        <Text style={styles.text}>
          {online ? 'Online' : 'No internet connection'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 20,
    left: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greenCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#8ee000',
    marginRight: 7,
  },
  redCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#e53838',
    marginRight: 7,
  },
  text: {
    fontFamily: 'Quicksand-Bold',
    fontSize: 14,
  },
});

export default InternetIndicator;
