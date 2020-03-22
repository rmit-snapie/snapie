import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {colors} from './Theme';
import {Component} from 'react';
// const Message = ({message}) => (
//   <View style={styles.emptyContainer}>
//     <Text style={styles.message}>{message}</Text>
//   </View>
// );
export default class Message extends React.Component {
  render() {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.message}>"my mess"</Text>
      </View>
    );
  }
}
// const Message  = ()  => (
//   <View style={styles.emptyContainer}>
//     <Text style={styles.message}>my mess</Text>
//   </View>
// );
const styles = StyleSheet.create({
  emptyContainer: {
    // padding: 10,
    // borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    backgroundColor: colors.primary,
    // justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    alignSelf: 'center',
    fontSize: 20,
  },
});
// export default Message;
