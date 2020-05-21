import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from "../screens/Login/LoginScreen";

const AuthNavigator = props => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator headerMode="none">
            <AuthStack.Screen
                name="LoginScreen"
                component={LoginScreen}/>
        </AuthStack.Navigator>
    );
};


export default AuthNavigator;