import { View, Text } from 'react-native'
import React from 'react'

export default function ({width}) {
  return (
    <View style={{paddingLeft:width*0.06,paddingTop:width*0.03}}>
        <Text style={{fontSize:width*0.05,fontFamily:"Sil",color:"black",paddingLeft:width*0.03}}>About Ramen :</Text>
        <Text style={{fontStyle:"italic",textAlign:"justify",paddingLeft:width*0.03,paddingRight:width*0.05,color:"gray"}}>
            {"   "}A Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg.
        </Text>
      </View>
  )
}