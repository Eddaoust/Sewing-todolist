import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from "../screens/Login/WelcomeScreen";
import LoginChoiceScreen from "../screens/Login/LoginChoiceScreen";
import LoginScreen from "../screens/Login/LoginScreen";
import RegistrationScreen from "../screens/Login/RegistrationScreen";

const AuthNavigator = props => {
    const AuthStack = createStackNavigator();

    return (
        <AuthStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'black',
                headerStyle: { backgroundColor: 'transparent' },
            }}>
            <AuthStack.Screen
                name="WelcomeScreen"
                options={{
                    headerShown: false
                }}
                component={WelcomeScreen}/>
            <AuthStack.Screen
                name="LoginChoiceScreen"
                options={{
                    headerShown: false,
                }}
                component={LoginChoiceScreen}/>
            <AuthStack.Screen
                name="LoginScreen"
                options={{
                    headerShown: true,
                    headerBackTitleVisible: false,
                    headerTitle: ''
                }}
                component={LoginScreen}/>
            <AuthStack.Screen
                name="RegistrationScreen"
                options={{
                    headerShown: true,
                    headerBackTitleVisible: false,
                    headerTitle: ''
                }}
                component={RegistrationScreen}/>
        </AuthStack.Navigator>
    );
};


export default AuthNavigator;