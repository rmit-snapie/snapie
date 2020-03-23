import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {persistor, store} from './src/redux/store';
import HelloWorld from './src/components/HelloWorld';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HelloWorld />
      </PersistGate>
    </Provider>
  );
}
