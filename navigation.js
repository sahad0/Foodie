import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from "./screens/Home"
import Restaurant from "./screens/Restaurant"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import cartReducer from "./features/cart";
import Login from './screens/Login'
const Stack = createStackNavigator();

const RootNavigation = () => {
    const store = configureStore({
        reducer: {
            cart: cartReducer,
        }
    })



    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
                <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Restaurant" component={Restaurant} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default RootNavigation;