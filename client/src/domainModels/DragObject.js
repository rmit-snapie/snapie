import React, {Component} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Text,
  // Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';
// const deviceWidth = Dimensions.get('window').width;
class DragObject extends Component {
  constructor(props) {
    super(props);
    this.panOrigin = this.panOrigin;
    this.panOriginResponder = this.panOriginResponder;
    this.checkReachTarget = this.checkReachTarget;

    this.panTarget = this.panTarget;
    this.panTargetResponder = this.panTargetResponder;
    this.checkReachOrigin = this.checkReachOrigin;
  }
  static propTypes = {
    object: PropTypes.object.isRequired,
  };
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
  checkReachOrigin = pan => {
    return (
      pan.x._value > -this.props.object.target.x + this.props.object.origin.x &&
      pan.x._value <
        -this.props.object.target.x +
          this.props.object.origin.x +
          this.props.object.width &&
      pan.y._value <
        -this.props.object.target.y +
          this.props.object.origin.y +
          this.props.object.height &&
      pan.y._value > -this.props.object.target.y + this.props.object.origin.y
    );
  };

  panOrigin = new Animated.ValueXY();
  panOriginResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.panOrigin.setOffset({
        x: this.panOrigin.x._value,
        y: this.panOrigin.y._value,
      });
    },
    onPanResponderMove: Animated.event([
      null,
      {dx: this.panOrigin.x, dy: this.panOrigin.y},
    ]),
    onPanResponderRelease: () => {
      console.log('release at: ', this.panOrigin);
      this.panOrigin.flattenOffset();
      // console.info('flattenoffset: ', this.panOrigin);
      // check if in the grey area, then fit to the grey
      if (this.checkReachTarget(this.panOrigin)) {
        this.panOrigin.setValue({
          x: this.props.object.origin.x - this.props.object.target.x,
          y: -this.props.object.origin.y + this.props.object.target.y,
        });
      } else {
        // else, go back to the original place
        this.panOrigin.setValue({x: 0, y: 0});
      }
    },
  });

  panTarget = new Animated.ValueXY();
  panTargetResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      this.panTarget.setOffset({
        x: this.panTarget.x._value,
        y: this.panTarget.y._value,
      });
    },
    onPanResponderMove: Animated.event([
      null,
      {dx: this.panTarget.x, dy: this.panTarget.y},
    ]),
    onPanResponderRelease: () => {
      console.log('release at: ', this.panTarget);
      this.panTarget.flattenOffset();
      // if reach the target: fit to the place
      if (this.checkReachOrigin(this.panTarget)) {
        this.panTarget.setValue({
          x: -this.props.object.origin.x + this.props.object.target.x,
          y: this.props.object.origin.y - this.props.object.target.y,
        });
      } else {
        // else: go back
        this.panTarget.setValue({x: 0, y: 0});
      }
    },
  });
  render() {
    const {object} = this.props;
    console.log('render DragObject component > props data:', object);
    return (
      <View>
        <Animated.View
          style={{
            transform: [
              {translateX: this.panTarget.x},
              {translateY: this.panTarget.y},
            ],
          }}
          {...this.panTargetResponder.panHandlers}>
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
        </Animated.View>

        <Animated.View
          style={{
            transform: [
              {translateX: this.panOrigin.x},
              {translateY: this.panOrigin.y},
            ],
          }}
          {...this.panOriginResponder.panHandlers}>
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
