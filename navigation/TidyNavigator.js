import React from 'react';
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {FontAwesome5, Feather, MaterialIcons} from '@expo/vector-icons';
import StockNavigator from "./StockNavigator";
import NewsFeedNavigator from "./NewsFeedNavigator";
import ShoppingListNavigator from "./ShoppingListNavigator";
import CustomBottomTapbarIcon from "../components/CustomBottomTapbarIcon";

const TidyNavigator = () => {
    const TidyBottomBar = createMaterialBottomTabNavigator();
    
    return (
        <TidyBottomBar.Navigator
            labeled={false}
            activeColor="#35433A"
            inactiveColor="#fff"
            barStyle={{
                backgroundColor: '#f4d1d1',
                elevation: 5
            }}>
            <TidyBottomBar.Screen
                name="NewsFeedNavigator"
                component={NewsFeedNavigator}
                options={{
                    tabBarIcon: ({focused, color}) => (
                        <CustomBottomTapbarIcon
                            icon={<MaterialIcons name="dashboard" size={24} color={color} />}
                        />
                    )
                }}/>
            <TidyBottomBar.Screen
                name="StockNavigator"
                component={StockNavigator}
                options={{
                    tabBarIcon: ({focused, color}) => (
                        <CustomBottomTapbarIcon
                            icon={<FontAwesome5 name="store" size={20} color={color} />}
                        />
                    )
                }}/>
            <TidyBottomBar.Screen
                name="ShoppingListNavigator"
                component={ShoppingListNavigator}
                options={{
                    tabBarIcon: ({focused, color}) => (
                        <CustomBottomTapbarIcon
                            icon={<Feather name="list" size={24} color={color} />}
                        />
                    )
                }}/>
            <TidyBottomBar.Screen
                name="CreationNavigator"
                component={StockNavigator}
                options={{
                    tabBarIcon: ({focused, color}) => (
                        <CustomBottomTapbarIcon
                            icon={<FontAwesome5 name="user-alt" size={20} color={color} />}
                        />
                    )
                }}/>
        </TidyBottomBar.Navigator>
    );
};

export default TidyNavigator;