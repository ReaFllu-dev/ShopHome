import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
//import { TouchableOpacity } from 'react-native-gesture-handler'

const CustomButton = ({ bg, title, color, onClick }) => {
    return (
        <TouchableOpacity activeOpacity={1} style={[styles.btn, { backgroundColor: bg }]} onPress={() => {
            onClick()
        }}>
            <Text style={{ color: color, fontSize: 20, fontWeight: "300" }}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton
const styles = StyleSheet.create({
    btn: {
        width: Dimensions.get('window').width - 40,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderRadius: 25,
    }
})