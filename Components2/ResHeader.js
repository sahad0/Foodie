import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

import { Divider } from 'react-native-paper';


const ResHeader = ({ restaurantValue, }) => {


    return (
        <View>
            <Image source={{
                uri: restaurantValue.image_url,
            }} style={{ height: 330, width: "100%", top: "0%" }} />

            <View style={{ backgroundColor: "white", padding: "3%", paddingTop: "6%", position: "absolute", width: "100%", bottom: 0, height: "45%" }} >
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Text style={{ fontFamily: "Cinzel", fontSize: 18, color: "black" }}>{restaurantValue.name} </Text>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: "4%" }}>
                        <Ionicons style={{ color: "black" }} name='star'></Ionicons>
                        <Text style={{ color: "black" }}>{restaurantValue.rating}</Text>
                    </View>

                </View>

                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", }}>

                    <Text style={{ fontFamily: "Cinzel", fontSize: 12, color: "black" }}>{"(" + restaurantValue.transactions[0] + ","}</Text>
                    <Text style={{ fontFamily: "Cinzel", fontSize: 12, color: "black" }}>{restaurantValue.transactions[1] + ")"}</Text>
                </View>

                <View style={{ marginTop: "4%", display: "flex", flexDirection: "row", width: "100%" }}>
                    <TouchableOpacity style={{ display: "flex", flexDirection: "row", alignItems: "center", paddingTop: "2%" }}>
                        <Ionicons style={{ color: "black" }} name='call' />
                        <Text style={{ fontWeight: "100", fontFamily: "Cinzel", fontSize: 12, textDecorationLine: "underline", marginLeft: "1%", color: "black" }}>{restaurantValue.phone}</Text>
                    </TouchableOpacity>
                    <View style={{ display: "flex", flexDirection: "row", width: "100%", paddingTop: "2%", paddingLeft: "5%", }}>
                        <Ionicons style={{ color: "black" }} name='location-sharp' />
                        <Text style={{ fontSize: 10, fontFamily: "Cinzel", color: "black" }}>{restaurantValue.location}</Text>
                    </View>
                </View>

            </View>
            <Divider style={{ width: "90%", display: "flex", alignSelf: "center", }} />


        </View>
    )
}


export default ResHeader