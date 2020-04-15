import React, {Component} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Text,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
const deviceWidth = Dimensions.get('window').width;
class DragObject extends Component {
  constructor(props) {
    super(props);
    this.pan = this.pan;
    this.panResponder = this.panResponder;
    this.checkReachTarget = this.checkReachTarget;
  }
  checkReachTarget = pan => {
    return (
      pan.x._value > this.props.object.target.x - this.props.object.origin.x &&
      pan.x._value <
        this.props.object.target.x -
          this.props.object.origin.x +
          this.props.object.width &&
      pan.y._value <
        this.props.object.target.y -
          this.props.object.origin.y +
          this.props.object.height &&
      pan.y._value > this.props.object.target.y - this.props.object.origin.y
    );
  };
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
      this.pan.flattenOffset();
      console.info('flattenoffset: ', this.pan);
      // check if in the grey area, then fit to the grey
      if (this.checkReachTarget(this.pan)) {
        // console.log(
        //   'touch into target: ',
        //   this.pan,
        //   'moving to target',
        //   this.props.object.target,
        // );
        // this.pan.flattenOffset();
        // Animated.spring(this.pan, {
        //   toValue: {x: 0, y: 0},
        //   useNativeDriver: true,
        // }).start();

        this.pan.setValue({
          x: this.props.object.origin.x - this.props.object.target.x,
          y: -this.props.object.origin.y + this.props.object.target.y,
        });
        // console.info(this.pan);
      } else {
        // else go back to original position
        // console.log(
        //   this.pan,
        //   'moving back to origin',
        //   this.props.object.origin,
        // );
        // Animated.spring(this.pan, {
        //   toValue: {x: 0, y: 0},
        //   useNativeDriver: true,
        // }).start();
        this.pan.setValue({x: 0, y: 0});
        // console.info(this.pan);
      }
    },
  });

  render() {
    const {quizData} = this.props;
    console.log('render drag&dropQuiz: props data:', quizData);
    return (
      <View>
        <View
          style={{
            position: 'absolute',
            top: this.props.object.target.y,
            left: this.props.object.target.x,
            height: this.props.object.height,
            width: this.props.object.width,
            backgroundColor: 'grey',
            borderRadius: 5,
          }}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.info(this.props.object.name, ' target layout', layout);
          }}>
          <Text style={styles.text}>target {this.props.object.name}</Text>
        </View>

        <Animated.View
          style={{
            transform: [{translateX: this.pan.x}, {translateY: this.pan.y}],
          }}
          {...this.panResponder.panHandlers}>
          <View
            style={{
              position: 'absolute',
              top: this.props.object.origin.y,
              left: this.props.object.origin.x,
              height: this.props.object.height,
              width: this.props.object.width,
              backgroundColor: 'red',
              borderRadius: 5,
            }}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              console.info(this.props.object.name, ' layout', layout);
            }}>
            <Text style={styles.text}>{this.props.object.name}</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingBottom: 15,
    alignSelf: 'center',
  },
});

export default DragObject;
