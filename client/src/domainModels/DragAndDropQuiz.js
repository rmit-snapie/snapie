import React, {Component} from 'react';
import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';
// import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';

class DragAndDropQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
  static propTypes = {
    quizData: PropTypes.object.isRequired,
  };
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
      if (this.pan.y._value < 0) {
        console.log('y < 0 : ', this.pan, 'moving back to origin');
        this.pan.flattenOffset();
        Animated.spring(this.pan, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true,
        }).start();
        this.pan.setValue({x: 0, y: 0});
        // console.log(this.pan);
      }
    },
  });

  render() {
    const {quizData} = this.props;
    console.log('render drag&dropQuiz: props data:', quizData);
    return (
      <View>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    paddingBottom: 15,
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
});

export default DragAndDropQuiz;
