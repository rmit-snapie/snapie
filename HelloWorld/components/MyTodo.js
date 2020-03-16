import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MyTodoIcon from "./MyTodoIcon";
const MyTodo = ({ todo, toggleComplete, deleteTodo }) => (
  <View style={styles.todoContainer}>
    <Text style={styles.todoText}> {todo.title}</Text>
    <View style={styles.buttons}>
      <MyTodoIcon
        name="Done"
        complete={todo.complete}
        onPress={() => toggleComplete(todo.todoIndex)}
      />
      <MyTodoIcon name="Delete" onPress={() => deleteTodo(todo.todoIndex)} />
    </View>
  </View>
);
const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderColor: "#ededed",
    paddingLeft: 14,
    paddingTop: 7,
    paddingBottom: 7,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 2, height: 2 },
    flexDirection: "row",
    alignItems: "center"
  },
  todoText: {
    fontSize: 17
  },
  buttons: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
export default MyTodo;
