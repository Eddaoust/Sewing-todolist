import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from "./AuthNavigator";

const AppNavigator = props => {
    const user = useSelector(state => state.user);

    return (
        <NavigationContainer>
            {(!user.activated && !user.auth) && <AuthNavigator/>}
        </NavigationContainer>
    );
};

export default AppNavigator;