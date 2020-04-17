import React, {useRef} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';

const ObjectA = props => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log('grant at :', pan);
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
      onPanResponderRelease: () => {
        console.log('release at :', pan);
        pan.flattenOffset();
        props.object.currentPosition = pan;
        // console.log(props.object);
        props.setPosition(props.object);
        // reachTarget === true
        let reachTarget = props.setPosition(props.object);
        if (reachTarget == false) {
          pan.setValue({x: 0, y: 0});
        } else {
          console.log('reach', typeof pan.x);
          //   pan.setValue({
          //     x: pan.x._value + reachTarget.x,
          //     y: pan.y._value,
          //   });
          //   pan.setValue({
          //     x: pan.x._value + reachTarget.dx,
          //     y: pan.y._value + reachTarget.dy,
          //   });
        }
      },
    }),
  ).current;
  //   const panTarget = useRef(new Animated.ValueXY()).current;

  //   const panTargetResponder = useRef(
  //     PanResponder.create({
  //       onMoveShouldSetPanResponder: () => true,
  //       onPanResponderGrant: () => {
  //         console.log('grant at :', pan);
  //         pan.setOffset({
  //           x: pan.x._value,
  //           y: pan.y._value,
  //         });
  //       },
  //       onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
  //       onPanResponderRelease: () => {
  //         console.log('release at :', pan);
  //         pan.flattenOffset();
  //       },
  //     }),
  //   ).current;

  return (
    <View
      onLayout={event => {
        const layout = event.nativeEvent.layout;
        // console.info(props.object.name, ' object layout', layout);

        props.object.origin = layout;
        props.object.column = props.column;
        // console.log(props.object);
        props.setPosition(props.object);
      }}>
      {/* <Animated.View
        style={{
          transform: [{translateX: panTarget.x}, {translateY: panTarget.y}],
        }}
        {...panTargetResponder.panHandlers}>
        <View
          style={{
            position: 'absolute',
            // top: props.object.target.y,
            // left: props.object.target.x,
            // height: props.object.height,
            // width: props.object.width,
            backgroundColor: 'grey',
            borderRadius: 5,
          }}
          //   onLayout={event => {
          //     const layout = event.nativeEvent.layout;
          //     console.info(props.object.name, ' target layout', layout);
          //   }}
        >
          <Text style={styles.text}>target {props.object.name}</Text>
        </View>
      </Animated.View> */}
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
        }}
        {...panResponder.panHandlers}>
        <View style={styles.box}>
          <Text>{props.object.name}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});
export default ObjectA;
