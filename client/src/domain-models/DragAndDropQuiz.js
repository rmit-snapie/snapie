import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Object from './Object';
// import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
import DragObject from './DragObject';

const haftDeviceWidth = Dimensions.get('window').width / 2.0;
const object1 = {
  name: '1',
  target: '2',
  type: 'image',
  origin: {x: 38, y: 0},
  // target: {x: 150 - haftDeviceWidth, y: 150},
  // origin: {x: 150, y: 500},
  // target: {x: 150, y: 150},
  // origin: {x: 0, y: 0},

  height: 100,
  width: 100,
};
const object8 = {
  name: '8',
  target: '4',
  type: 'answer',
  height: 20,
  width: 100,
  origin: {x: 226, y: 0},
};
const object3 = {
  name: '3',
  target: '6',
  type: 'image',
  height: 100,
  width: 100,
  origin: {x: 38, y: 0},
};
const object7 = {
  name: '7',
  target: '5',
  type: 'answer',
  height: 20,
  width: 100,
  origin: {x: 226, y: 150},
};
const object4 = {
  name: '4',
  target: '8',
  type: 'image',
  height: 100,
  width: 100,
  origin: {x: 38, y: 0},
};

const object6 = {
  name: '6',
  target: '3',
  type: 'answer',
  height: 20,
  width: 100,
  origin: {x: 226, y: 300},
};

const object5 = {
  name: '5',
  target: '7',
  type: 'image',
  height: 100,
  width: 100,
  origin: {x: 38, y: 0},
};
const object2 = {
  name: '2',
  target: '1',
  type: 'answer',
  height: 20,
  width: 100,
  origin: {x: 226, y: 350},
  // origin: {x: 120, y: 100},
  // target: {x: 10, y: 150},
  // origin: {x: 100, y: 0},
  // target: {x: 100, y: 150},
  // height: 80,
  // width: 80,
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
  calculatePosition = objectA => {
    let currentPosition = objectA.currentPosition;
    let originPosition = objectA.origin;
    let columnPosition =
      objectA.column === 'layoutLeft'
        ? this.state.layoutLeft
        : this.state.layoutRight;
    if (columnPosition == undefined || originPosition == undefined) {
      return undefined;
    }
    currentPosition == undefined
      ? (currentPosition = {x: {_value: 0}, y: {_value: 0}})
      : (currentPosition = currentPosition);
    const x = currentPosition.x._value + originPosition.x + columnPosition.x;
    const y = currentPosition.y._value + originPosition.y + columnPosition.y;

    console.log(objectA.name, ' is at position: ', x, ' - ', y);
    return {x: x, y: y};
  };

  checkReachTarget = object => {
    let targetObject = this.state.objects.filter(
      objectA => objectA.name === object.target,
    )[0];
    console.log('checking reach target: ');
    console.info('object: ', object);
    console.info('target: ', targetObject);
    const objectPosition = this.calculatePosition(object);
    const targetPosition = this.calculatePosition(targetObject);
    if (objectPosition == undefined || targetPosition == undefined) {
      return false;
    }
    if (
      this.checkOverLapping(
        objectPosition,
        targetPosition,
        object,
        targetObject,
      )
    ) {
      return {
        dx: targetPosition.x - objectPosition.x,
        dy: targetPosition.y - objectPosition.y,
      };
    } else return false;
  };
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
    console.info('object position: ', moveX, moveY);
    console.info('target position: ', targetPosition);
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
      console.log('need to go to:', gotoPosition);
      return {x: -haftDeviceWidth, y: 0};
    } else return false;
  };
  checkReachTargetRight = (object, gestureState) => {
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
    targetPosition = {
      x: targetPosition.x + haftDeviceWidth,
      y: targetPosition.y,
    };
    console.info('object position: ', moveX, moveY);
    console.info('target position: ', targetPosition);
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
      console.log('need to go to:', gotoPosition);
      return {x: haftDeviceWidth, y: 0};
    } else return false;
  };
  setOrigin = object => {
    this.state.objects = this.state.objects.map(objectA =>
      objectA.name === object.name ? object : objectA,
    );
    this.setState({objects: this.state.objects});
  };
  updatePosition = object => {
    // console.log('update for: ', object);
    if (this.checkReachTarget(object) === false) {
      this.state.objects = this.state.objects.map(objectA =>
        objectA.name === object.name ? object : objectA,
      );
      // console.log('update ', this.state.objects);
      this.setState({objects: this.state.objects});
      return false;
    } else {
      return true;
    }
    // this.state.name = object;
    // this.setState(
    //   this.state.objects.map(objectA =>
    //     objectA.name === object.name ? object : objectA,
    //   ),
    // );
  };

  render() {
    // const {quizData} = this.props;
    console.info('draganddropquiz render state: ', this.state);
    // console.info(
    //   'render state:  columns left:',
    //   this.state.layoutLeft,
    //   ' ---- columns right: ',
    //   this.state.layoutRight,
    // );
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          // flexWrap: 'wrap',
          alignItems: 'flex-start',
          // justifyContent: 'space-evenly',
          // padding: 25,
        }}>
        <View
          style={{
            flex: 1,
            // flexDirection: 'column',
            // flexWrap: 'wrap',
            // alignItems: 'center',
            // justifyContent: 'space-evenly',
            // padding: 25,
          }}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.info(' component layout', layout);
            this.setState({layoutLeft: layout});
            // this.rowLeft = layout;
          }}>
          {questions.map(object => (
            <Object
              object={object}
              setOrigin={this.setOrigin}
              setPosition={this.updatePosition}
              checkReachTarget={this.checkReachTargetRight}
              column="layoutLeft"
            />
          ))}
          {/* <Object
          object={object1}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object3}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        /> */}
          {/* <Object object={object2} setPosition={this.updatePosition} /> */}
          {/* <Object object={object2} /> */}
        </View>
        <View
          style={{
            flex: 1,
            // flexDirection: 'column',
            // flexWrap: 'wrap',
            // alignItems: 'center',
            // justifyContent: 'space-evenly',
            // padding: 25,
          }}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            console.info(' component layout', layout);
            this.setState({layoutRight: layout});
            // this.rowLeft = layout;
          }}>
          {answers.map(object => (
            <Object
              object={object}
              setOrigin={this.setOrigin}
              setPosition={this.updatePosition}
              checkReachTarget={this.checkReachTargetLeft}
              column="layoutRight"
            />
          ))}
          {/* <Object
          object={object1}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object3}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        />
        <Object
          object={object2}
          setPosition={this.updatePosition}
          column="layoutLeft"
        /> */}
          {/* <Object object={object2} setPosition={this.updatePosition} /> */}
          {/* <Object object={object2} /> */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  text: {
    fontSize: 20,
    paddingBottom: 15,
  },
});
export default DragAndDropQuiz;
//  {/* <DragObject object={object1} />
//         <DragObject object={object2} />
//         <DragObject object={object3} /> */}
