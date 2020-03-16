import React from "react";
import { View } from "react-native";
import MyTodo from "./MyTodo";
const MyTodoList = ({ todos, toggleComplete, deleteTodo, type }) => {
  const getVisibleTodos = (todos, type) => {
    switch (type) {
      case "All":
        return todos;
      case "Complete":
        return todos.filter(t => t.complete);
      case "Active":
        return todos.filter(t => !t.complete);
    }
  };
  todos = getVisibleTodos(todos, type);

  todos = todos.map((todo, i) => {
    return (
      <MyTodo
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        key={i}
        todo={todo}
      />
    );
  });
  return <View>{todos}</View>;
};
export default MyTodoList;
