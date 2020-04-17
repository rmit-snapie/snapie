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
    this.state = {
      originLayout: {},
      targetLayout: {},
    };
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
    // note: target lays at the upper part of the original object.
    // otherwise: use the formular of checkReachOriginal
    return (
      // (this formular is for the relative position)
      // it is because pan uses dx:dy from the origin touch position for measuring, hence comes the adapted formular below
      // top-left corner reach the left edge of target , expanded to the left by 4/5 width
      pan.x._value >
        this.props.object.target.x -
          this.props.object.origin.x -
          this.props.object.width * 0.9 &&
      // top-left corner not out-range the right edge of target
      pan.x._value <
        this.props.object.target.x -
          this.props.object.origin.x +
          this.props.object.width &&
      // top-left corner reach the bottom edge of target
      pan.y._value >
        this.props.object.target.y -
          this.props.object.origin.y -
          this.props.object.height &&
      // top-left corner not out-range the upper edge of target , expanded to the upper by 4/5 height
      pan.y._value <
        this.props.object.target.y -
          this.props.object.origin.y +
          this.props.object.height * 0.9
    );
  };
  checkReachOrigin = pan => {
    // note: target lays at the lower part of the original object.
    // otherwise: use the formular of checkReachTarget
    return (
      // (this formular is for the relative position)
      // it is because pan uses dx:dy from the origin touch position for measuring, hence comes the adapted formular below
      // top-left corner reach the left edge of origin , expanded to the left by 4/5 width
      // now, values are most of the time minor (-), hence:
      pan.x._value >
        -this.props.object.target.x +
          this.props.object.origin.x -
          this.props.object.width * 0.9 &&
      // top-left corner not out-range the right edge of origin
      pan.x._value <
        -this.props.object.target.x +
          this.props.object.origin.x +
          this.props.object.width &&
      // top-left corner reach the bottom edge of target
      pan.y._value >
        -this.props.object.target.y +
          this.props.object.origin.y -
          this.props.object.height &&
      // top-left corner not out-range the upper edge of target , expanded to the upper by 4/5 height
      pan.y._value <
        -this.props.object.target.y +
          this.props.object.origin.y +
          this.props.object.height * 0.9
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
      <View style={styles.constainer}>
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
              // position: 'absolute',
              // top: this.props.object.target.y,
              // left: this.props.object.target.x,
              height: this.props.object.height,
              width: this.props.object.width,
              backgroundColor: 'grey',
              borderRadius: 25,
            }}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              console.info(this.props.object.name, ' target layout', layout);
              this.setState({targetLayout: layout});
            }}>
            <Text style={styles.text}>target {this.props.object.name}</Text>
          </View>
        </Animated.View>
        <View style={{height: 50}} />
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
              // position: 'absolute',
              // top: this.props.object.origin.y,
              // left: this.props.object.origin.x,
              height: this.props.object.height,
              width: this.props.object.width,
              backgroundColor: 'red',
              borderRadius: 25,
            }}
            onLayout={event => {
              const layout = event.nativeEvent.layout;
              console.info(this.props.object.name, ' layout', layout);
              this.setState({originLayout: layout});
            }}>
            <Text style={styles.text}>{this.props.object.name}</Text>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  box: {},
  text: {
    fontSize: 20,
    paddingBottom: 15,
    // alignSelf: 'center',
  },
});

export default DragObject;
