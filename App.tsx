import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import LoginNavigation from './src/navigation/routes';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import reducersStore, {persistor} from './src/store';
import Hello from './src/components/Hello';

export default function App() {
  return (
    <Provider store={reducersStore}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          {/* <LoginNavigation /> */}

          <Hello />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
