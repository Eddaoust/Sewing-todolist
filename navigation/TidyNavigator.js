import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';
import StockNavigator from "./StockNavigator";

const TidyNavigator = props => {
    const TidyBottomBar = createMaterialBottomTabNavigator();
    
    return (
        <TidyBottomBar.Navigator
            labeled={false}
            activeColor="#35433A"
            inactiveColor="#fff"
            barStyle={{ backgroundColor: '#F4D1D1' }}>
            <TidyBottomBar.Screen
                name="NewsFeedNavigator"
                component={StockNavigator}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="dashboard" size={24} color="#fff" />
                    )
                }}/>
            <TidyBottomBar.Screen
                name="StockNavigator"
                component={StockNavigator}
                options={{
                    tabBarIcon: () => (
                    <FontAwesome5 name="store" size={24} color="#fff" />
                    )
                }}/>
            <TidyBottomBar.Screen
                name="ShoppingListNavigator"
                component={StockNavigator}
                options={{
                    tabBarIcon: () => (
                        <Feather name="list" size={24} color="#fff" />
                    )
                }}/>
            <TidyBottomBar.Screen
                name="CreationNavigator"
                component={StockNavigator}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="user-alt" size={24} color="#fff" />
                    )
                }}/>
        </TidyBottomBar.Navigator>
    );
};

export default TidyNavigator;