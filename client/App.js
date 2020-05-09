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
import {EXPLORE_SCREEN, HOME_SCREEN, LESSON_SCREEN, REVIEW_SCREEN} from './environments/Routes';
//Views
import Home from './src/views/home/Home';
import Explore from './src/views/explore/Explore';
import Review from './src/views/review/Review';
import Lesson from './src/views/lesson/Lesson';
import Pronounce from './src/components/pronounce/Pronounce';

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
            <ApplicationStack.Screen name="VOICE" component={Pronounce} />
          </ApplicationStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
