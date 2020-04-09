import React, {Component} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';
// import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const initPosition = {x: 0, y: 100};
const height = 150;
const width = 150;
const checkInRegtangle = (pan, wishPosition, height, width) => {
  return (
    pan.x._value > wishPosition.x - width &&
    pan.x._value < wishPosition.x + width &&
    pan.y._value > wishPosition.y - height &&
    pan.y._value < wishPosition.y + height
  );
};

class DragAndDropQuiz extends Component {
  constructor(props) {
    super(props);
    // this.state = {};
    // this.onGestureEvent = Animated.event([
    //   {
    //     nativeEvent: {
    //       translationX: this.dragX,
    //       translationY: this.dragY,
    //       state: this.gestureState,
    //     },
    //   },
    // ]);
  }
  // static propTypes = {
  //   quizData: PropTypes.object.isRequired,
  // };

  pan = new Animated.ValueXY();
  panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.pan.setOffset({
        x: this.pan.x._value,
        y: this.pan.y._value,
      });
    },
    onPanResponderMove: Animated.event([
      null,
      {dx: this.pan.x, dy: this.pan.y},
    ]),
    onPanResponderRelease: () => {
      console.log('release at: ', this.pan);
      // alert('You dropped it at:' + this.pan.x._value + ' ' + this.pan.y._value);
      this.pan.flattenOffset();
      // check if in the grey area, then fit to the grey
      if (checkInRegtangle(this.pan, {x: 0, y: -height}, height, width)) {
        console.log('y < 0 : ', this.pan, 'moving back to origin');
        // this.pan.flattenOffset();
        Animated.spring(this.pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
        this.pan.setValue({x: -0.5, y: -151});
        // console.log(this.pan);
      } else {
        // else go back to original position
        Animated.spring(this.pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
        this.pan.setValue({x: 0, y: 0});
      }
    },
  });

  render() {
    const {quizData} = this.props;
    console.log('render drag&dropQuiz: props data:', quizData);
    return (
      <View>
        {/* grey box: upper position compare to blue box */}
        <View style={styles.wishBox} />
        <Animated.View
          style={{
            transform: [{translateX: this.pan.x}, {translateY: this.pan.y}],
          }}
          {...this.panResponder.panHandlers}>
          <View style={styles.box} />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    paddingBottom: 15,
  },
  box: {
    height: height,
    width: width,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  wishBox: {
    height: height,
    width: width,
    backgroundColor: 'grey',
    borderRadius: 5,
  },
});

export default DragAndDropQuiz;
