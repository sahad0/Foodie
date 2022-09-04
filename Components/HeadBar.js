import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function HeadBar({ setShowSearch, showSearch, setType, type, fetchYelp, setOffset }) {




    const UserBtn = ({ text, active, setActive }) => {
        return (<>
            <View >
                <TouchableOpacity onPress={() => { setType(text), setOffset(0), fetchYelp() }}>
                    <Text style={{ color: type === text ? "white" : "black", backgroundColor: type === text ? "black" : "white", paddingHorizontal: "4%", paddingVertical: "2%", borderRadius: 16, fontWeight: "bold" }}>{text}</Text>
                </TouchableOpacity>
            </View>
        </>)
    }



    return (

        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>

            <View style={{ display: "flex", flexDirection: "row", alignSelf: "center", paddingTop: "8%" }}>
                <TouchableOpacity style={{ paddingRight: "10%", marginLeft: "5%", }} ><Ionicons style={{ color: "black" }} name='restaurant-outline' size={24} /></TouchableOpacity>
                <UserBtn style={{ paddingRight: "10%" }} text={"Delivery"} type={type} setType={setType} />
                <UserBtn style={{ paddingRight: "10%" }} text={"Pickup"} type={type} setType={setType} />
            </View>
            <View style={{ paddingTop: "10%", padding: "2%", marginRight: "2%" }}><TouchableOpacity onPress={() => { showSearch ? setShowSearch(false) : setShowSearch(true) }}><Ionicons style={{ color: "black" }} name={showSearch ? 'chevron-up-outline' : 'search'} size={24} /></TouchableOpacity></View>
        </View>
    )
} true