import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import {Host} from 'react-native-portalize';
import AuthNavigator from "./AuthNavigator";
import TidyNavigator from "./TidyNavigator";

const AppNavigator = () => {
    const user = useSelector(state => state.user);

    return (
        <NavigationContainer>
            <Host>
                {(!user.activated && !user.auth) && <AuthNavigator/>}
                {(user.activated && user.auth) && <TidyNavigator/>}
            </Host>
        </NavigationContainer>
    );
};

export default AppNavigator;