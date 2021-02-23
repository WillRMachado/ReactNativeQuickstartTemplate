import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';

import stockReducer from './counter/counter.store';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, stockReducer);

// const composeEnhancers =
//   typeof window === 'object' && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']
//     ? window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({})
//     : compose;

const middlewares = [];

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const reducersStore = configureStore({
  reducer: {
    store: persistedReducer,
  },
  //   enhancers: [composeEnhancers],
  middleware: [thunk, ...middlewares],
});

let persistor = persistStore(reducersStore);

export type RootState = ReturnType<typeof reducersStore.getState>;

export {persistor};
export default reducersStore;
