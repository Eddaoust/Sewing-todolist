import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StockNavigator from "./StockNavigator";

const TidyNavigator = props => {
    const TidyBottomBar = createBottomTabNavigator();
    
    return (
        <TidyBottomBar.Navigator>
            <TidyBottomBar.Screen
                name="StockNavigator"
                component={StockNavigator}/>
        </TidyBottomBar.Navigator>
    );
};

export default TidyNavigator;