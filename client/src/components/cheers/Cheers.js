import React, {useState} from 'react';
import {Animated, StyleSheet, Dimensions, View, Button} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Cheers = ({cheers, sad, ...props}) => {
  const [opacity] = useState(new Animated.Value(0));

  const imagePath = sad
    ? require('../../domain-models/assets/cheers/sad.png')
    : require('../../domain-models/assets/cheers/confetti.png');

  const onLoad = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.container}>
      <Animated.Image
        onLoad={() => onLoad()}
        source={imagePath}
        style={[
          {
            opacity: opacity,
            transform: [
              {
                scale: opacity.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.85, 1],
                }),
              },
            ],
          },
          cheers ? styles.image : styles.hidden,
        ]}
      />
      <Button title="next" onPress={() => props.nextQuestion()}>
        next
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    zIndex: 2,
  },
  hidden: {
    display: 'none',
  },
});

export default Cheers;
