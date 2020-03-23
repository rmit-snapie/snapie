import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goBack, goToFirstScreenInStack, pushTo} from './navigate';

const LoadingScreen = ({navigation, route: {params}}) => {
  const loading = params.loading;
  console.log(loading);
  return (
    <View style={styles.container}>
      <Text>Loading Screen</Text>
      <Text>Is loading: {loading.toString()}</Text>
      <Button
        title="Push to another loading screen"
        onPress={() => pushTo(navigation, 'Loading Screen')}
      />
      <Button title="Go back" onPress={() => goBack(navigation)} />
      <Button
        title="Go back to home"
        onPress={() => goToFirstScreenInStack(navigation)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
