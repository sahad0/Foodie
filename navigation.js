import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from "./screens/Home"
import Restaurant from "./screens/Restaurant"
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import cartReducer from "./features/cart";
import Login from './screens/Login'
import HomeV1_0 from './screens/HomeV1_0'
import { StatusBar } from 'react-native'
import { firebase } from '@react-native-firebase/auth'
import CatView from './screens/CatView'
import ItmScreen from './screens/ItmScreen'
const Stack = createStackNavigator();

const RootNavigation = () => {
    const store = configureStore({
        reducer: {
            cart: cartReducer,
        }
    })
    // firebase.auth().onAuthStateChanged((user) => {
    //     if (user) {
    //       // User logged in already or has just logged in.
    //       console.log(user.uid);
    //     } else {
    //       // User not logged in or has just logged out.
    //       console.log("H")
    //     }
    //   });


    return (
        <Provider store={store}>
            <NavigationContainer>
            <StatusBar  hidden/>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                <Stack.Screen name="Item" component={ItmScreen} />
                    <Stack.Screen name="Home" component={HomeV1_0} />
                    <Stack.Screen name="Cat" component={CatView} />

                    <Stack.Screen name="Restaurant" component={Restaurant} />

                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default RootNavigation;