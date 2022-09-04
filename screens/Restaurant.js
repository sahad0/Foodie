import { FlatList, SafeAreaView, ScrollView, View, } from 'react-native'
import React, { useState } from 'react'
import ResHeader from '../Components2/ResHeader';
import FoodItems from '../Components2/FoodItems';
import BottomBar from "../Components/BottomBar";


export default function Restaurant({ route }) {






    return (

        <SafeAreaView style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
            <View>


                <View style={{ backgroundColor: "#eee", marginBottom: "12%" }}>

                    <FoodItems route={route} />

                </View>
                <View style={{ position: "absolute", bottom: "0%", backgroundColor: "white", width: "100%", height: "10%" }}>
                    <BottomBar />
                </View>

            </View>
        </SafeAreaView >
    )

}