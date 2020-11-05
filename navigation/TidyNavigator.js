import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';
import StockNavigator from "./StockNavigator";

const TidyNavigator = props => {
    const TidyBottomBar = createBottomTabNavigator();
    
    return (
        <TidyBottomBar.Navigator
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                activeBackgroundColor: '#F4D1D1',
                inactiveBackgroundColor: '#F4D1D1',
            }}>
            <TidyBottomBar.Screen
                name="NewsFeedNavigator"
                component={StockNavigator}
                options={{
                    tabBarIcon: () => (
                        <MaterialIcons name="dashboard" size={24} color="black" />
                    )
                }}/>
            <TidyBottomBar.Screen
                name="StockNavigator"
                component={StockNavigator}
                options={{
                    tabBarIcon: () => (
                    <FontAwesome5 name="store" size={24} color="black" />
                    )
                }}/>
            <TidyBottomBar.Screen
                name="ShoppingListNavigator"
                component={StockNavigator}
                options={{
                    tabBarIcon: () => (
                        <Feather name="list" size={24} color="black" />
                    )
                }}/>
            <TidyBottomBar.Screen
                name="CreationNavigator"
                component={StockNavigator}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome5 name="user-alt" size={24} color="black" />
                    )
                }}/>
        </TidyBottomBar.Navigator>
    );
};

export default TidyNavigator;