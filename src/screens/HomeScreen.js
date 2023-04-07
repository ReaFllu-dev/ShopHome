import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import Home from '../tabs/Home'
import Search from '../tabs/Search'
import Notify from '../tabs/Notify'
import Wishlist from '../tabs/Wishlist'
import User from '../tabs/User'
import { TouchableOpacity } from 'react-native-gesture-handler'


const HomeScreen = () => {
    const [selectedTab, setSelectedTab] = useState(0)
    return (
        <View style={styles.container}>

            {selectedTab == 0 ? (<Home />) : selectedTab == 1 ? (<Search />) : selectedTab == 2 ? (<Notify />) : selectedTab == 3 ? (<Wishlist />) : <User />}

            <View style={styles.bottomView}>
                <TouchableOpacity style={styles.bottomtab}
                    onPress={() => {
                        setSelectedTab(0)
                    }}>
                    <Image source={selectedTab == 0 ? require('../images/Home_Click.png') : require('../images/Home.png')
                    }
                        style={[styles.bottomtabicon, { width: 30, height: 30 }
                        ]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomtab}
                    onPress={() => {
                        setSelectedTab(1)
                    }}>
                    <Image source=
                        {selectedTab == 1 ? require('../images/search.png') : require('../images/search.png')}
                        style={[styles.bottomtabicon, { width: 25, height: 25 }]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomtab} onPress={() => {
                    setSelectedTab(2)
                }}>
                    <Image source={selectedTab == 2 ? require('../images/notify_Click.png') : require('../images/notify.png')} style={[styles.bottomtabicon, { width: 30, height: 30 }]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomtab} onPress={() => {
                    setSelectedTab(3)
                }}>
                    <Image source={selectedTab == 3 ? require('../images/wishlist_Click.png') : require('../images/wishlist.png')} style={[styles.bottomtabicon, { width: 35, height: 40 }]} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomtab} onPress={() => {
                    setSelectedTab(4)
                }}>
                    <Image source={selectedTab == 4 ? require('../images/user_CLick.png') : require('../images/uyser.png')} style={[styles.bottomtabicon, { width: 30, height: 30 }]} />
                </TouchableOpacity>

            </View>
        </View>

    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bottomView: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: 60,
        flexDirection: 'row',
        backgroundColor: "white",
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    bottomtab: {
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: "center"
    },
    bottomtabicon: {
        width: 40,
        height: 40
    }
})