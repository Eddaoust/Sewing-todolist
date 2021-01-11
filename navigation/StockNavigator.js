import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import StockListScreen from "../screens/Stock/StockListScreen";
import ProductAddScreen from "../screens/Stock/ProductAddScreen";
import MainCategoryAddScreen from "../screens/Stock/MainCategoryAddScreen";

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
                component={StockListScreen}
                options={{ title: 'STOCK' }}/>
            <StockStack.Screen
                name="ProductAddScreen"
                component={ProductAddScreen}
                options={{ title: 'AJOUTER UN PRODUIT' }}/>
            <StockStack.Screen
                name="MainCategoryAddScreen"
                component={MainCategoryAddScreen}
                options={{ title: 'AJOUTER UNE CATÉGORIE' }}/>
        </StockStack.Navigator>
    );
};

export default StockNavigator;