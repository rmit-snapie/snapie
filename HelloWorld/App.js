import * as React from "react";
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  ScrollView
} from "react-native";
import { SplashScreen } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import BottomTabNavigator from "./navigation/BottomTabNavigator";
import useLinking from "./navigation/useLinking";
import MyHeading from "./components/MyHeading";
import MyTextInput from "./components/MyTextInput";
import MyButton from "./components/MyButton";
import MyTodoList from "./components/MyTodoList";
import MyTodoIcon from "./components/MyTodoIcon";
import MyTabBar from "./components/MyTabBar";

const Stack = createStackNavigator();
let todoIndex = 0;
// use react hook...
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const [inputValue, setInputValue] = React.useState("");
  const [todos, setTodo] = React.useState([]);
  const [type, setType] = React.useState("All");
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  const submitTodo = () => {
    if (inputValue.match(/^\s*$/)) {
      return;
    }
    const todo = {
      title: inputValue,
      todoIndex: todoIndex,
      complete: false
    };
    todoIndex++;
    // const todos = todos.push(todo);
    setTodo([...todos, todo]);
  };
  const deleteTodo = todoIndex => {
    // console.log("delete: ", todoIndex, todos);
    let newtodos = todos.filter(todo => todo.todoIndex !== todoIndex);
    // console.log("after filter:", newtodos);
    setTodo(newtodos);
  };
  const toggleComplete = todoIndex => {
    todos.forEach(todo => {
      if (todo.todoIndex === todoIndex) {
        todo.complete = !todo.complete;
      }
    });
    setTodo(todos);
  };
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    // console.log(`this app is starting on ${Platform.OS}`);
    // console.log("todos:", todos);
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        {/* <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}
        <Text style={styles.instructions}> {instructions}</Text>
        <Text style={styles.welcome}> Welcome to React Native! todo app</Text>
        <Text style={styles.instructions}>To get started, type in a todo </Text>

        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <MyHeading />
          <MyTextInput
            label="my todo:"
            inputValue={inputValue}
            inputChange={text => {
              console.log("input : ", text);
              setInputValue(text);
            }}
          />
          <MyTodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            type={type}
          />
        </ScrollView>

        <MyButton submitTodo={submitTodo} text="Submit" />
        <MyTabBar type={type} setType={setType} />
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          <Stack.Navigator>
            <Stack.Screen name="Root" component={BottomTabNavigator} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 5
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  content: { flex: 1, paddingTop: 10, minHeight: 300, minWidth: 300 }
});
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  default: "web app"
});
