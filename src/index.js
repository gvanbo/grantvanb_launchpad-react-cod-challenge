import React from 'react';
import ReactDOM from 'react-dom';
import { persistStore } from 'redux-persist';
import App from './App';
import { configureStore } from './app/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';

const store = configureStore();
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<div>Loading...</div>}
      persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
