import React, {useRef} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';

const ObjectA = props => {
  // console.log('object render: ', props.object);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        // console.log('grant at :', pan);

        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (e, gesture) => {
        Animated.event([null, {dx: pan.x, dy: pan.y, useNativeDriver: true}], {
          config: {useNativeDriver: true},
        })(e, gesture);
      },
      onPanResponderTerminate: (evt, gestureState) => {
        // console.log('panresponsder terminated for android: ', pan);
        // console.log('release at :', pan, evt.nativeEvent);
        pan.flattenOffset();
        let reachReturn = props.checkReachTarget(props.object, gestureState);
        if (reachReturn === false) {
          // console.log('not reach');
          pan.setValue({x: 0, y: 0});
        } else {
          // console.log('reach');
          pan.setValue(reachReturn);
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        // console.log('release at :', pan, evt.nativeEvent);
        pan.flattenOffset();
        let reachReturn = props.checkReachTarget(props.object, gestureState);
        if (reachReturn === false) {
          // console.log('not reach');
          pan.setValue({x: 0, y: 0});
        } else {
          // console.log('reach');
          pan.setValue(reachReturn);
        }
      },
    }),
  ).current;
  return (
    <View
      onLayout={event => {
        const layout = event.nativeEvent.layout;
        // console.info(props.object.name, ' object layout', layout);
        props.object.origin = layout;
        props.setOrigin(props.object);
      }}>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
          useNativeDriver: true,
        }}
        {...panResponder.panHandlers}>
        <View
          style={{
            height: parseInt(`${props.object.type === 'image' ? 100 : 20}`),
            width: 100,
            backgroundColor: `${
              props.object.type === 'image' ? 'blue' : 'red'
            }`,
            borderRadius: 15,
            paddingLeft: 5,
            margin: 25,
            marginBottom: parseInt(
              `${props.object.type === 'image' ? 25 : 105}`,
            ),
          }}>
          <Text>
            {props.object.type === 'image'
              ? 'image - ' + props.object.name
              : 'answer  - ' + props.object.target}
          </Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 60,
    fontWeight: 'bold',
  },
});
export default ObjectA;
