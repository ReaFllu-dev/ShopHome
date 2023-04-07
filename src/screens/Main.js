import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
const Drawer = createDrawerNavigator()
const Mainfun = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerShown: false }} />
        </Drawer.Navigator>

    )
}

export default Mainfun

const styles = StyleSheet.create({})