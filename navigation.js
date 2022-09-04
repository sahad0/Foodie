import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Home from "./screens/Home"
import Restaurant from "./screens/Restaurant"
const Stack = createStackNavigator();

const RootNavigation = () => {



    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Restaurant" component={Restaurant} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation;