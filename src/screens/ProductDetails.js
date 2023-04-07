import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../common/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import Home from '../tabs/Home'
import CustomButton from '../common/CustomButton'
//import { TouchableOpacity } from 'react-native-gesture-handler'
//import Home from '../tabs/Home'

const ProductDetails = () => {
    const navigation = useNavigation()
    const route = useRoute()
    return (
        <View style={styles.container}>
            <Header
                leftIcon={require('../images/back.png')}
                rightIcon={require('../images/cart.png')}
                title={"ProductDetail"}
                onclickLeftIcon={() => {
                    navigation.goBack()
                }}
            />
            <Image source={{ uri: route.params.data.image }} style={styles.img} />
            <Text style={styles.imgtitle}>
                {route.params.data.title}
            </Text>
            <Text style={styles.imgdesc}>
                {route.params.data.description.length > 300 ? route.params.data.description.substring(0, 200) + "....." : route.params.data.description}
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.imgdo, { color: "black" }]}>Price:</Text>
                <Text style={styles.imgdo} >
                    {"$" + route.params.data.price}
                </Text>
            </View>
            <TouchableOpacity style={styles.wishlistbtn}>
                <Image source={require('../images/wishlist.png')}
                    style={styles.icon} />
            </TouchableOpacity>
            <CustomButton bg={"#F4BE2C"} title={"Add TO Cart"} color={"#242B2E"} onClick={() => { }} />
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    img: {
        width: "100%",
        height: "45%",
        resizeMode: "center",
    },
    imgtitle: {
        fontSize: 25,
        fontWeight: "600",
        color: "black",
        marginBottom: 5,
        marginLeft: 20
    },
    imgdesc: {
        fontSize: 18,
        fontWeight: "400",
        color: "grey",
        marginLeft: 20,
        marginRight: 10,
    },
    imgdo: {
        fontSize: 25,
        fontWeight: "600",
        color: "green",
        marginTop: 10,
        marginLeft: 20,
        marginRight: 10,
    },
    wishlistbtn: {
        width: 50,
        height: 50,
        position: 'absolute',
        right: 20,
        top: 100,
        backgroundColor: "#CAD5E2",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
    },
    icon: {
        width: 30,
        height: 30
    }

})