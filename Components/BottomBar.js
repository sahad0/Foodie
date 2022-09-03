import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function BottomBar() {
    return (
        <View style={{ display: "flex", flexDirection: "row", alignSelf: "center", paddingBottom: "0%" }}>
            <View style={{ padding: "6%", paddingLeft: "8%", paddingRight: "4%" }}><TouchableOpacity ><Ionicons name='home' size={24} /></TouchableOpacity></View>
            <View style={{ padding: "6%", paddingLeft: "8%", paddingRight: "4%" }}><TouchableOpacity ><Ionicons name='basket-outline' size={24} /></TouchableOpacity></View>
            <View style={{ padding: "6%", paddingLeft: "8%", paddingRight: "4%" }}><TouchableOpacity ><Ionicons name='person-outline' size={24} /></TouchableOpacity></View>
        </View>
    )
}