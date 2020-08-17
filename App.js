import 'react-native-gesture-handler';
import React from 'react';
import MainStackNavigator from './src/MainStackNavigator';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './src/store';



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainStackNavigator />
      </PersistGate>
    </Provider>
  );
}