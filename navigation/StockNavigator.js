import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StockListScreen from "../screens/Stock/StockListScreen";

const StockNavigator = () => {
    const StockStack = createStackNavigator();

    return (
        <StockStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'black',
                headerStyle: {
                    backgroundColor: '#F4D1D1',
                    elevation: 0
                },
                headerTitleStyle: {
                    fontFamily: 'josefin-sans'
                }
            }}>
            <StockStack.Screen
                name="STOCK"
                component={StockListScreen}/>
        </StockStack.Navigator>
    );
};

export default StockNavigator;