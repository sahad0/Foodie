import { FlatList, SafeAreaView, ScrollView, Text, View, } from 'react-native'
import React, { useState } from 'react'
import ResHeader from '../Components2/ResHeader';
import FoodItems from '../Components2/FoodItems';
import BottomBar from "../Components/BottomBar";
import Ioniocon from "react-native-vector-icons/Ionicons"
import { useSelector } from 'react-redux';
import { FadeView } from 'react-native-fadeview-wrapper';


export default function Restaurant({ route }) {


    const cart = useSelector((state) => {
        return (
            state.cart.value
        )
    })




    return (

        <SafeAreaView style={{ display: "flex", flex: 1, backgroundColor: "white" }}>



            <View style={{ backgroundColor: "#eee", }}>

                <FoodItems route={route} />

            </View>
            <FadeView style={{ zIndex: 999, display: "flex", alignSelf: "center", flex: 1, bottom: "6%", position: "absolute", }} visible={cart.items.length !== 0 ? true : false} duration={250}>


                <View style={{ backgroundColor: "black", borderRadius: 30, paddingVertical: "4%", paddingHorizontal: "30%" }}>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <Text style={{ color: "white", }}>View Cart    </Text>
                        <Ioniocon color={"white"} name="cart" size={20} />
                        <Text style={{ color: "white", paddingLeft: "10%" }}>{cart.total + "$"}</Text>
                    </View>
                </View>



            </FadeView>


        </SafeAreaView >
    )

}