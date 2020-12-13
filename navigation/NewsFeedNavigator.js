import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NewsFeedHomeScreen from "../screens/NewsFeed/NewsFeedHomeScreen";

const NewsFeedNavigator = () => {
    const NewsFeedStack = createStackNavigator();

    return (
        <NewsFeedStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'black',
                headerStyle: {
                    backgroundColor: '#F4D1D1',
                    elevation: 0
                },
            }}>
            <NewsFeedStack.Screen
                name="NewsFeedHomeScreen"
                component={NewsFeedHomeScreen}/>
        </NewsFeedStack.Navigator>
    );
};

export default NewsFeedNavigator;