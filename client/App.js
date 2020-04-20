import React from 'react';
//must have for react-navigation
import 'react-native-gesture-handler';

//redux, redux-persist
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';

//react-navigation
import {NavigationContainer} from '@react-navigation/native';

import StagesWrapper from './src/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <StagesWrapper />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
