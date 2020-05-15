import React from 'react';
import 'react-native-gesture-handler';
//redux, redux-persist
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
//react-navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//Routes
import {
  EXPLORE_SCREEN,
  FIND_THE_OBJECT,
  HOME_SCREEN,
  LESSON_SCREEN,
  // PROFILE_SCREEN,
  REVIEW_SCREEN,
} from './environments/Routes';
//Views
import Home from './src/views/home/Home';
import Explore from './src/views/explore/Explore';
import Review from './src/views/review/Review';
import Lesson from './src/views/lesson/Lesson';
import Pronounce from './src/question-types/pronounce/Pronounce';
// import FindTheObject from './src/question-types/find-the-object/FindTheObject';
// import Profile from './src/views/profile/Profile';

const ApplicationStack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <ApplicationStack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <ApplicationStack.Screen name={HOME_SCREEN} component={Home} />
            <ApplicationStack.Screen name={LESSON_SCREEN} component={Lesson} />
            <ApplicationStack.Screen name={REVIEW_SCREEN} component={Review} />
            <ApplicationStack.Screen
              name={EXPLORE_SCREEN}
              component={Explore}
            />
            {/* <ApplicationStack.Screen
              name={PROFILE_SCREEN}
              component={Profile}
            /> */}
            {/* <ApplicationStack.Screen
              name={FIND_THE_OBJECT}
              component={FindTheObject}
            /> */}
          </ApplicationStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}