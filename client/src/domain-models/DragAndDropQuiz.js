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
  // origin: {x: 150 - haftDeviceWidth, y: 500},
  // target: {x: 150 - haftDeviceWidth, y: 150},
  // origin: {x: 150, y: 500},
  // target: {x: 150, y: 150},
  // origin: {x: 0, y: 0},

  // height: 80,
  // width: 80,
};
const object2 = {
  name: '2',
  target: '1',
  // origin: {x: 10, y: 500},
  // target: {x: 10, y: 150},
  // origin: {x: 100, y: 0},
  // target: {x: 100, y: 150},
  // height: 80,
  // width: 80,
};
const object3 = {
  name: '3',
  target: '1',
  // origin: {x: 290, y: 500},
  // target: {x: 290, y: 150},
  // origin: {x: 200, y: 0},
  // target: {x: 200, y: 150},
  // height: 80,
  // width: 80,
};

class DragAndDropQuiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objects: [object1, object2, object3],
    };
  }
  calculatePosition = objectA => {
    let currentPosition = objectA.currentPosition;
    let originPosition = objectA.origin;
    let columnPosition =
      objectA.column === 'layoutLeft'
        ? this.state.layoutLeft
        : this.state.layoutRight;
    if (columnPosition == undefined) {
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
      objectPosition.x > targetPosition.x - object.origin.width &&
      objectPosition.x < targetPosition.x + target.origin.width &&
      objectPosition.y > targetPosition.y - object.origin.height &&
      objectPosition.y < targetPosition.y + target.origin.height
    );
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

    console.info(
      'render state:  columns left:',
      this.state.layoutLeft,
      ' ---- columns right: ',
      this.state.layoutRight,
    );
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          // alignItems: 'flex-start',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            // console.info(' row1 layout', layout);
            this.setState({layoutLeft: layout});
            // this.rowLeft = layout;
          }}>
          <Object
            object={object1}
            setPosition={this.updatePosition}
            column="layoutLeft"
          />
          {/* <Object object={object2} setPosition={this.updatePosition} /> */}
          {/* <Object object={object2} /> */}
        </View>
        <View
          style={{
            flex: 2,
            // flexDirection: 'column',
            // alignContent: 'space-between',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
          onLayout={event => {
            const layout = event.nativeEvent.layout;
            // console.info(' row2 layout', layout);
            this.setState({layoutRight: layout});
            // this.rowRight = layout;
          }}>
          <Object
            object={object2}
            setPosition={this.updatePosition}
            column="layoutRight"
            // layout = {this.state.layoutRight}
            // onLayout={event => {
            //   const layout = event.nativeEvent.layout;
            //   console.info(' 2 layout', layout);
            // }}
          />
          <Object
            object={object3}
            setPosition={this.updatePosition}
            column="layoutRight"
          />
        </View>

        {/* <DragObject object={object1} />
        <DragObject object={object2} />
        <DragObject object={object3} /> */}
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
