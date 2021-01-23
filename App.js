import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
// Create redux Store
import thunkMiddleware from 'redux-thunk';
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import reducer from './store/reducers/index';

import AppNavigator from "./navigation/AppNavigator";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const fetchFonts = async () => {
    await Font.loadAsync({
        'josefin-sans': require('./assets/fonts/JosefinSans-Regular.ttf'),
        'josefin-sans-light': require('./assets/fonts/JosefinSans-Light.ttf'),
        'josefin-sans-semi-bold': require('./assets/fonts/JosefinSans-SemiBold.ttf'),
        'poppins-semi-bold': require('./assets/fonts/Poppins-SemiBold.otf'),
        'poppins-light': require('./assets/fonts/Poppins-Light.otf'),
    });
};

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded) {
        return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>
    }
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}
