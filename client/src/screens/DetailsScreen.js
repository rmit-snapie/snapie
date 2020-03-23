import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {goToFirstScreenInStack, pushTo} from './navigate';

const DetailsScreen = ({navigation, route: {params}}) => {
  return (
    <View style={styles.container}>
      <Text>This is details screen</Text>
      <Text>Props: {JSON.stringify(params)}</Text>
      <Button
        title="Go to another detail page"
        onPress={() =>
          pushTo(navigation, 'Details Screen', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Go home"
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

export default DetailsScreen;
