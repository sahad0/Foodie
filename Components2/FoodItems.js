import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'
import ResHeader from './ResHeader'
import foods from '../tempData/foods'


const FoodItems = ({ route }) => {



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
                    <TouchableOpacity style={{ marginRight: "5%" }}><Text style={{ fontFamily: "Cinzel", color: "black" }}>Add+</Text></TouchableOpacity>
                </View>
                <Text style={{ marginTop: "3%", fontFamily: "Sil", fontSize: 10, width: "70%", color: "black" }}>{item.desc}</Text>
                <Text style={{ marginTop: "3%", fontFamily: "Sil", fontSize: 19, fontWeight: "200", textDecorationLine: "underline", paddingBottom: "4%", color: "green" }}>{item.price}</Text>

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