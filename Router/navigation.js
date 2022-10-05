import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import cartReducer from "../features/cart";
import HomeV1_0 from '../screens/HomeV1_0'
import CatView from '../screens/CatView'
import ItmScreen from '../screens/ItmScreen'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';

const Stack = createSharedElementStackNavigator();
enableScreens();

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


                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default RootNavigation;