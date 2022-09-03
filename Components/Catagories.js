import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import RestaurantCards from './RestaurantCards'
import { FadeView } from 'react-native-fadeview-wrapper';


export default function Catagories({ restaurantData, setOffset, offset }) {


    const [showCatagories, setShowcatagories] = useState(0);


    const arr = [
        {
            img: require("../assets/images/3.webp"),
            text: "Starters"
        },

        {
            img: require("../assets/images/2.jpg"),
            text: "Grillers"
        },
        {
            img: require("../assets/images/4.jpg"),
            text: "Soups"
        },
        {
            img: require("../assets/images/5.jpeg"),
            text: "Steaks"
        },

        {
            img: require("../assets/images/1.jpg"),
            text: "Soft Drinks"
        },
        {
            img: require("../assets/images/6.webp"),
            text: "Desserts"
        },
        {
            img: require("../assets/images/7.png"),
            text: "Ice-Creams"
        },

    ]


    return (
        <>
            <View>
                <FadeView style={{ zIndex: -1 }} visible={showCatagories < 200 ? true : false} duration={250}>
                    <View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ backgroundColor: "#16191E", marginTop: "1%", paddingBottom: "2%", }}>

                            {arr.map((k, index) =>
                            (

                                <TouchableOpacity key={index} style={{ display: "flex", alignItems: "center" }}>

                                    <Image source={k.img} style={{ height: 90, width: 90, resizeMode: "cover", }} />

                                    <Text style={{ fontWeight: "800", fontSize: 12, color: "white", paddingHorizontal: "2%", paddingVertical: 10, width: "auto" }}>{k.text}</Text>

                                </TouchableOpacity>

                            )
                            )}
                        </ScrollView>
                    </View>
                </FadeView>

                <View style={{ zIndex: -1, marginBottom: '46%' }}>
                    <RestaurantCards setShowcatagories={setShowcatagories} restaurantData={restaurantData} setOffset={setOffset} offset={offset} />
                </View>



            </View >


        </>
    )
}