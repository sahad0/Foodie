import { View } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";



export default function SearchBar({ place, setPlace, fetchYelp, setOffset, setShowSearch }) {


    function findRestaurants(textt) {
        setPlace(textt);
    }
    function SearchDone() {
        setOffset(0);
        fetchYelp();
        setShowSearch(false);
    }
    return (

        <View style={{ display: "flex", flexDirection: "row", alignItems: "center", position: "absolute", marginTop: "22%", zIndex: 5, backgroundColor: "white" }}>


            <View style={{ padding: "4%", paddingBottom: "7%", width: "100%" }}>
                <Searchbar onIconPress={SearchDone} style={{ width: "100%", shadowOpacity: 0, }} icon={() => <Ionicons style={{ marginTop: "1%", color: "black" }} name='search' size={30} />} placeholder="Search" onChangeText={findRestaurants} value={place} />
            </View >
        </View>
    )
}