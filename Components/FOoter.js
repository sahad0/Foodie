import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"

export default function FOoter() {
    const {height} = Dimensions.get("screen");
  return (
    <View style={{backgroundColor:"black",height:height*0.1,borderRadius:height*0.1,flexDirection:"row",justifyContent:"center"}}>
        <Icons name='home-roof' size={28} color={"white"} style={{padding:15}} />
        <Icons name='account-heart-outline' size={28} color={"white"} style={{padding:15}} />



    </View>
  )
}