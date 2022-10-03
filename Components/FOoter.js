import { View, Text, Dimensions } from 'react-native'
import React from 'react'

export default function FOoter() {
    const {height,width} = Dimensions.get("screen");
  return (
    <View style={{backgroundColor:"black",height:height*0.06,marginTop:1,position:"relative",top:0}}>
      <Text style={{color:"black"}}>FOoter</Text>
    </View>
  )
}