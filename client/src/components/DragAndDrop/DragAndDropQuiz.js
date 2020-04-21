import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Object from './Object';
// import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';

const haftDeviceWidth = Dimensions.get('window').width / 2.0;
const object1 = {
  name: '1',
  target: '2',
  type: 'image',
  height: 100,
  width: 100,
};
const object8 = {
  name: '8',
  target: '4',
  type: 'answer',
  height: 20,
  width: 100,
};
const object3 = {
  name: '3',
  target: '6',
  type: 'image',
  height: 100,
  width: 100,
};
const object7 = {
  name: '7',
  target: '5',
  type: 'answer',
  height: 20,
  width: 100,
};
const object4 = {
  name: '4',
  target: '8',
  type: 'image',
  height: 100,
  width: 100,
};

const object6 = {
  name: '6',
  target: '3',
  type: 'answer',
  height: 20,
  width: 100,
};

const object5 = {
  name: '5',
  target: '7',
  type: 'image',
  height: 100,
  width: 100,
};
const object2 = {
  name: '2',
  target: '1',
  type: 'answer',
  height: 20,
  width: 100,
};
const questions = [object1, object3, object4, object5];
const answers = [object2, object6, object7, object8];

const objectArray = [...questions, ...answers];
class DragAndDropQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: objectArray,
    };
  }
  checkOverLapping = (objectPosition, targetPosition, object, target) => {
    return (
      objectPosition.x > targetPosition.x + 25 &&
      objectPosition.x < targetPosition.x + target.width + 25 &&
      objectPosition.y > targetPosition.y + 116 &&
      objectPosition.y < targetPosition.y + target.height + 116
    );
  };
  checkReachTargetLeft = (object, gestureState) => {
    let {moveX, moveY, ...gesture} = gestureState;
    let targetObject = this.state.objects.filter(
      objectA => objectA.name === object.target,
    )[0];
    let targetPosition = targetObject.currentPosition
      ? targetObject.currentPosition
      : targetObject.origin;
    if (typeof targetPosition.x !== typeof 3) {
      targetPosition = {x: targetPosition.x._value, y: targetPosition.y._value};
    }
    let objectPosition = object.currentPosition
      ? object.currentPosition
      : object.origin;
    if (typeof objectPosition.x !== typeof 3) {
      objectPosition = {x: objectPosition.x._value, y: objectPosition.y._value};
    }
    // console.info('object position: ', moveX, moveY, object);
    // console.info('target position: ', targetPosition, targetObject);
    if (
      this.checkOverLapping(
        {x: moveX, y: moveY},
        targetPosition,
        object,
        targetObject,
      )
    ) {
      // console.log('need to go to:', gotoPosition);
      return {x: -haftDeviceWidth, y: targetPosition.y - objectPosition.y};
    } else return false;
  };
  checkReachTargetRight = (object, gestureState) => {
    let {moveX, moveY, ...gesture} = gestureState;
    // console.log(this.state.objects);
    let targetObject = this.state.objects.filter(
      objectA => objectA.name === object.target,
    )[0];
    // console.log(targetObject);
    let targetPosition = targetObject.currentPosition
      ? targetObject.currentPosition
      : targetObject.origin;
    if (typeof targetPosition.x !== typeof 3) {
      targetPosition = {x: targetPosition.x._value, y: targetPosition.y._value};
    }
    let objectPosition = object.currentPosition
      ? object.currentPosition
      : object.origin;
    if (typeof objectPosition.x !== typeof 3) {
      objectPosition = {x: objectPosition.x._value, y: objectPosition.y._value};
    }
    targetPosition = {
      x: targetPosition.x + haftDeviceWidth,
      y: targetPosition.y,
    };
    // console.info('object position: ', moveX, moveY, object);
    // console.info('target position: ', targetPosition, targetObject);
    if (
      this.checkOverLapping(
        {x: moveX, y: moveY},
        targetPosition,
        object,
        targetObject,
      )
    ) {
      let gotoPosition = {
        x: targetPosition.x,
        y: targetPosition.y + targetObject.height,
      };
      // console.log('need to go to:', gotoPosition);
      return {x: haftDeviceWidth, y: targetPosition.y - objectPosition.y};
    } else return false;
  };
  setOrigin = object => {
    this.state.objects = this.state.objects.map(objectA =>
      objectA.name === object.name ? object : objectA,
    );
    this.setState({objects: this.state.objects});
  };

  render() {
    // console.info('draganddropquiz render state: ', this.state.objects);
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            flex: 1,
          }}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            // console.info(' component layout', layout);
            this.setState({layoutLeft: layout});
          }}>
          {questions.map(object => (
            <Object
              key={object.name}
              object={object}
              setOrigin={this.setOrigin}
              setPosition={this.updatePosition}
              checkReachTarget={this.checkReachTargetRight}
              column="layoutLeft"
            />
          ))}
        </View>
        <View
          style={{
            flex: 1,
          }}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            // console.info(' component layout', layout);
            this.setState({layoutRight: layout});
          }}>
          {answers.map(object => (
            <Object
              key={object.name}
              object={object}
              setOrigin={this.setOrigin}
              setPosition={this.updatePosition}
              checkReachTarget={this.checkReachTargetLeft}
              column="layoutRight"
            />
          ))}
        </View>
      </View>
    );
  }
}

export default DragAndDropQuiz;
