import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
//import { TouchableOpacity } from 'react-native-gesture-handler'
const { width, height } = Dimensions.get('window')


const Header = ({ title, leftIcon, rightIcon, onclickLeftIcon, onclickRightIcon }) => {
    return (
        <View style={styles.HeaderBar}>
            <TouchableOpacity style={styles.btn} onPress={() => {
                onclickLeftIcon()
            }}>
                <Image source={leftIcon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}
            </Text>
            <TouchableOpacity style={styles.btn} onPress={() => {
                onclickRightIcon()
            }}>
                <Image source={rightIcon} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    HeaderBar: {
        width: width,
        height: 60,
        backgroundColor: '#1B98F5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingleft: 10,
        paddingright: 10,
    },
    btn: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 40,
        height: 40,
        tintColor: 'white',

    },
    title: {
        fontSize: 25,
        fontFamily: 'bold',
        fontWeight: '800',
        color: "white"

    }
})