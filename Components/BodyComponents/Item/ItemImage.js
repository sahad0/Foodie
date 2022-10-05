import { View,Image } from 'react-native'
import React from 'react'

export default function ({img_url,height}) {
  return (
    <View style={{alignItems:"center"}}>
    <Image source={img_url} style={{height:height*0.27,width:height*0.6,}} resizeMode={"contain"}/>
  </View>
 
  )
}