import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
// import {goToFirstScreenInStack} from '../helpers/NavigateHelper';
import PropTypes from 'prop-types';
import DragObject from './DragObject';
const haftDeviceWidth = Dimensions.get('window').width / 2.0;
const object1 = {
  name: 'object 1',
  origin: {x: haftDeviceWidth - 50, y: 200},
  target: {x: haftDeviceWidth - 50, y: 50},
  height: 100,
  width: 100,
};
const object2 = {
  name: 'object 2',
  origin: {x: 0, y: 200},
  target: {x: 0, y: 50},
  height: 100,
  width: 100,
};
const object3 = {
  name: 'object 3',
  origin: {x: Dimensions.get('window').width - 100, y: 200},
  target: {x: Dimensions.get('window').width - 100, y: 50},
  height: 100,
  width: 100,
};

class DragAndDropQuiz extends Component {
  render() {
    const {quizData} = this.props;
    console.log('render drag&dropQuiz: props data:', quizData);
    return (
      <View style={styles.container}>
        <DragObject object={object1} />
        <DragObject object={object2} />
        <DragObject object={object3} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // alignContent: 'space-between',
  },
});

export default DragAndDropQuiz;
