import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HeadBar({ setShowSearch, showSearch, setType, type, fetchYelp, setOffset }) {




    const UserBtn = ({ text, active, setActive }) => {
        return (<>
            <View style={{ paddingTop: "19%", padding: "2%" }}>
                <TouchableOpacity onPress={() => { setType(text), setOffset(0), fetchYelp() }}>
                    <Text style={{ color: type === text ? "white" : "black", backgroundColor: type === text ? "black" : "white", paddingHorizontal: "4%", paddingVertical: "2%", borderRadius: 16, fontWeight: "bold" }}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>)
    }



    return (

        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

            <View style={{ display: "flex", flexDirection: "row", alignSelf: "center", }}>
                <View style={{ paddingTop: "19%", padding: "2%", paddingLeft: "8%", paddingRight: "4%" }}><TouchableOpacity ><Ionicons name='restaurant-outline' size={24} /></TouchableOpacity></View>
                <UserBtn text={"Delivery"} type={type} setType={setType} />
                <UserBtn text={"Pickup"} type={type} setType={setType} />
            </View>
            <View style={{ paddingTop: "13%", padding: "2%" }}><TouchableOpacity onPress={() => { showSearch ? setShowSearch(false) : setShowSearch(true) }}><Ionicons name={showSearch ? 'chevron-up-outline' : 'search'} size={24} /></TouchableOpacity></View>
        </View>
    )
} true