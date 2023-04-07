import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Mainfun from './screens/Main'
import ProductDetails from './screens/ProductDetails'

const Stack = createNativeStackNavigator()
const appNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Mainfun"
                    component={Mainfun}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="ProductDetails"
                    component={ProductDetails}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default appNavigator