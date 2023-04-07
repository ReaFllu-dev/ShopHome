import { View, Text, Dimensions, StyleSheet, Image, FlatList, TouchableOpacity, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../common/Header'
import { useNavigation } from '@react-navigation/native'
const { width } = Dimensions.get('window').width

const Home = () => {
    const navigation = useNavigation()
    const [Products, setProducts] = useState([])
    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => { setProducts(json) })
    }
    return (
        <View style={styles.container}>
            <Header
                leftIcon={require('../images/menu.png')}
                rightIcon={require('../images/cart.png')}
                title={'ShopHome'}
                onclickLeftIcon={() => {
                    navigation.openDrawer()
                }}
            />
            <FlatList
                data={Products}
                renderItem={({ item, index }) => {
                    return (
                        <TouchableOpacity style={styles.Productitem}
                            onPress={() => {
                                navigation.navigate('ProductDetails', { data: item })
                            }}>
                            <Image source={{ uri: item.image }} style={styles.itemImage} />
                            <View>
                                <Text style={styles.Producttitle}>
                                    {item.title.length > 25 ? item.title.substring(0, 25) + '.....' : item.title}
                                </Text>
                                <Text style={styles.Productdesc}>
                                    {item.description.length > 30 ? item.description.substring(0, 30) + '.....' : item.description}
                                </Text>
                                <Text style={styles.Productprice}>{'$' + item.price}
                                </Text>
                            </View>

                        </TouchableOpacity>
                    )
                }}
            // keyExtractor={item => item.index}
            />

        </View >

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Productitem: {
        width: width,
        height: 100,
        backgroundColor: "#fff",
        marginTop: 10,
        flexDirection: 'row'
    },
    itemImage: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    Producttitle: {
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 20
    },
    Productdesc: {
        fontSize: 17,
        marginLeft: 20

    },
    Productprice: {
        fontSize: 20,
        fontWeight: "600",
        marginLeft: 20,
        color: "#242B2E"

    }
})