import { View, Text } from 'react-native'
import React from 'react'

export default function ({heading,height}) {
  return (
    <View style={{padding:height*0.03}}>
        <Text style={{fontFamily:"Anton",fontSize:30,color:"black"}}>{heading}</Text>
    </View>
  )
}