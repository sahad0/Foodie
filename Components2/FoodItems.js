import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import FastImage from 'react-native-fast-image'
import ResHeader from './ResHeader'
import foods from '../tempData/foods'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { AddToCart, RemoveFromCart } from '../features/cart'



const FoodItems = ({ route }) => {
    const { name } = route.params;
    const [sample, setSample] = useState(true)
    const cart = useSelector((state) => { return state.cart.value })

    const dispatch = useDispatch();


    function checkAdded(val) {
        let a = cart.items.filter(k => {
            if (k.nameRestaurant === val.nameRestaurant && k.id === val.id) {
                return k;
            }
        }
        )
        if (a.length !== 0) {
            return true;
        }
        else {
            return false;
        }


    }



    const renderItem = ({ item }) => (
        <View style={{ marginTop: "5%", backgroundColor: "white" }} >
            <View >
                <FastImage style={{ height: 200 }} source={{
                    uri: item.image_url,
                    priority: FastImage.priority.normal,
                }} resizeMode={FastImage.resizeMode.cover} />
            </View>

            <View style={{ width: "100%", marginLeft: "3%", paddingTop: "4%" }}>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ fontFamily: "Cinzel", color: "black" }}>{item.name}</Text>
                    <TouchableOpacity
                        style={{ marginRight: "4%" }}
                        onPress={() => {

                            dispatch(AddToCart(
                                {
                                    item: {
                                        id: item.id,
                                        img: item.image_url,
                                        name: item.name,
                                        desc: item.desc,
                                        nameRestaurant: name,
                                        price: item.price,
                                        quantity: 1,

                                    },
                                    price: item.price,
                                }


                            ))


                        }}


                    >
                        <Text style={{ fontFamily: "Cinzel", color: "black" }}>Add+</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ marginTop: "3%", fontFamily: "Sil", fontSize: 10, width: "70%", color: "black" }}>{item.desc}</Text>
                <Text style={{ marginTop: "3%", fontFamily: "Sil", fontSize: 19, fontWeight: "200", textDecorationLine: "underline", paddingBottom: "4%", color: "green" }}>{item.price + "$"}</Text>

            </View>

        </View>
    );
    const HeaderComp = () => {
        return (

            <ResHeader route={route} />

        )
    }



    return (
        <FlatList nestedScrollEnabled
            style={{ paddingBottom: "13%", height: "auto" }}
            data={foods}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            ListHeaderComponent={<HeaderComp />}
        />

    )
}



export default FoodItems