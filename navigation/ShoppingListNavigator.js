import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShoppingListScreen from "../screens/ShoppingList/ShoppingListScreen";

const ShoppingListNavigator = () => {
    const ShoppingStack = createStackNavigator();

    return (
        <ShoppingStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'black',
                headerStyle: {
                    backgroundColor: '#F4D1D1',
                    elevation: 0
                },
            }}>
            <ShoppingStack.Screen
                name="ShoppingListScreen"
                component={ShoppingListScreen}/>
        </ShoppingStack.Navigator>
    );
};


export default ShoppingListNavigator;