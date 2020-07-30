import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from "../screens/Login/WelcomeScreen";
import LoginChoiceScreen from "../screens/Login/LoginChoiceScreen";

const AuthNavigator = props => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator
            headerMode="none"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}>
            <AuthStack.Screen
                name="WelcomeScreen"
                component={WelcomeScreen}/>
            <AuthStack.Screen
                name="LoginChoiceScreen"
                component={LoginChoiceScreen}/>
        </AuthStack.Navigator>
    );
};


export default AuthNavigator;