import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BottomBar() {
    return (
        <View style={{ display: "flex", flexDirection: "row", alignSelf: "center", paddingBottom: "0%" }}>
            <View style={{ padding: "6%", paddingLeft: "8%", paddingRight: "4%" }}><TouchableOpacity ><Ionicons style={{ color: "black" }} name='home' size={24} /></TouchableOpacity></View>
            <View style={{ padding: "6%", paddingLeft: "8%", paddingRight: "4%" }}><TouchableOpacity ><Ionicons style={{ color: "black" }} name='basket-outline' size={24} /></TouchableOpacity></View>
            <View style={{ padding: "6%", paddingLeft: "8%", paddingRight: "4%" }}><TouchableOpacity ><Ionicons style={{ color: "black" }} name='person-outline' size={24} /></TouchableOpacity></View>
        </View>
    )
}