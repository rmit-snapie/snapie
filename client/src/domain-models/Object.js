import React, {useRef} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Text,
  Dimensions,
} from 'react-native';
const DeviceWidth = Dimensions.get('window').width;
const ObjectA = props => {
  // console.log('object render: ', props.object);
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
      onPanResponderMove: (e, gesture) => {
        // console.log('panresponder move event: ', e),
        // console.log('panresponder move gesture: ', gesture);
        // todo: update position?
        Animated.event([null, {dx: pan.x, dy: pan.y}])(e, gesture);
      },
      onPanResponderTerminate: (evt, gestureState) => {
        console.log('panresponsder terminated for android: ', pan);
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log('release at :', pan, evt.nativeEvent);
        pan.flattenOffset();
        let reachReturn = props.checkReachTarget(props.object, gestureState);
        if (reachReturn === false) {
          console.log('not reach');
          pan.setValue({x: 0, y: 0});
        } else {
          console.log('reach');
          pan.setValue(reachReturn);
          // pan.setValue({x: -DeviceWidth / 2, y: 0});
        }
        // props.object.currentPosition = pan;
        // console.log(props.object);
        // props.setPosition(props.object);
        // reachTarget === true
        // let reachTarget = props.setPosition(props.object);
        // if (reachTarget == false) {
        //   pan.setValue({x: 0, y: 0});
        // } else {
        //   console.log('reach', typeof pan.x);
        //   pan.setValue({
        //     x: pan.x._value + reachTarget.x,
        //     y: pan.y._value,
        //   });
        //   pan.setValue({
        //     x: pan.x._value + reachTarget.dx,
        //     y: pan.y._value + reachTarget.dy,
        //   });
        // }
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
      // style={{top: props.object.origin.y, left: props.object.origin.x}}
      onLayout={event => {
        const layout = event.nativeEvent.layout;
        console.info(props.object.name, ' object layout', layout);
        props.object.origin = layout;
        props.setOrigin(props.object);
        // props.object.column = props.column;
        // console.log(props.object);
        // props.setPosition(props.object);
      }}>
      <Animated.View
        style={{
          transform: [{translateX: pan.x}, {translateY: pan.y}],
          useNativeDriver: true,
        }}
        {...panResponder.panHandlers}>
        <View
          style={
            {
              top: 0,
              left: 0,
              // top: props.object.origin.y,
              // left: props.object.origin.x,
              height: parseInt(`${props.object.type === 'image' ? 100 : 20}`),
              // width: `${props.object.type === 'image' ? 100 : 100}`,
              width: 100,
              backgroundColor: `${
                props.object.type === 'image' ? 'blue' : 'grey'
              }`,
              borderRadius: 15,
              // padding: 5,
              paddingLeft: 5,

              margin: 25,
              marginBottom: parseInt(
                `${props.object.type === 'image' ? 25 : 105}`,
              ),
            }
            // styles.box
            // {left: props.object.origin.x, top: props.object.origin.y}
          }>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  titleText: {
    fontSize: 60,
    // lineHeight: 24,
    fontWeight: 'bold',
  },
  // box: {
  //   top: 20,
  //   left: 20,
  //   height: 100,
  //   width: 100,
  //   backgroundColor: 'blue',
  //   borderRadius: 5,
  // },
});
export default ObjectA;
