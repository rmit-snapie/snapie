import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.loading} source={require('../assets/Loading.gif')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    height: 150,
    width: 350,
    resizeMode: 'contain',
  },
});

export default Loading;
