import React from 'react'
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import HomeV1_0 from '../screens/HomeV1_0'
import CatView from '../screens/CatView'
import ItmScreen from '../screens/ItmScreen'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { enableScreens } from 'react-native-screens';
import Login from '../screens/Login';
import { firebase } from '@react-native-firebase/auth';
import { SignIn, SignOut } from '../features/cart';

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


    return (
            
            <NavigationContainer>
            <StatusBar  hidden/>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
                <Stack.Screen name="Item" component={ItmScreen} />
                    <Stack.Screen name="Home" component={HomeV1_0} />
                    <Stack.Screen name="Cat" component={CatView} />
                    <Stack.Screen name="Login" component={Login} />



                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default RootNavigation;