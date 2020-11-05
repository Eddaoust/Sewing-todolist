import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StockListScreen from "../screens/Stock/StockListScreen";

const StockNavigator = props => {
    const StockStack = createStackNavigator();

    return (
        <StockStack.Navigator>
            <StockStack.Screen
                name="StockListScreen"
                component={StockListScreen}/>
        </StockStack.Navigator>
    );
};

export default StockNavigator;