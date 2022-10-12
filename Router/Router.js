import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import { firebase } from '@react-native-firebase/auth';
import { SignIn, SignOut } from '../features/cart';
import Login from '../screens/Login';
import HomeV1_0 from '../screens/HomeV1_0'
import ItmScreen from '../screens/ItmScreen'
import CartScreen from '../screens/CartScreen';
import MenuView from '../screens/MenuView';

const Stack = createSharedElementStackNavigator();
enableScreens();

const RootNavigation = () => {

   

    const dispatch = useDispatch();

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch(SignIn({user:JSON.stringify(user)}));
        } else {
            dispatch(SignOut());

        }
      });
    const auth = useSelector((state)=>state.cart.value.auth);

    return (
            
            <NavigationContainer>
                <StatusBar  hidden/>
                {auth ? 
                <>
                    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={'Home'}>
                    
                    <Stack.Screen name="Home" component={HomeV1_0} />

                    <Stack.Screen name="Cart" component={CartScreen} />


                    <Stack.Screen name="Cat" component={MenuView} />
                    <Stack.Screen name="Item" component={ItmScreen} />
                
                    </Stack.Navigator>     
                </>
                :
                <>
                    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={ 'Login'}>
                        <Stack.Screen name="Login" component={Login} />
                    </Stack.Navigator>   
                </>
                }

                

                
            </NavigationContainer>
    )
}

export default RootNavigation;