import React from 'react';
//redux, redux-persist
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';

//react-navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//views
import Home from './src/views/Home';
import Explore from './src/views/Explore';
import Quiz from './src/views/Quiz';
import Review from './src/views/Review';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Explore" component={Explore} />
            <Stack.Screen name="Review" component={Review} />
            <Stack.Screen name="Quiz" component={Quiz} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
