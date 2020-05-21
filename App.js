import React from 'react';
// Create redux Store
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducers/index';

import AppNavigator from "./navigation/AppNavigator";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}
