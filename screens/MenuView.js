import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'

export default function MenuView({route}) {
    const {item} = route.params;
    const {width} = Dimensions.get("screen");
  return (
    <View style={{backgroundColor:"white",justifyContent:"space-between",flexDirection:"row",alignItems:"center",borderBottomLeftRadius:width*0.08,elevation:3}}>
        <View >
        <Text style={{fontFamily:"Reg",fontSize:width*0.08,padding:width*0.03}}>Top Notch</Text>
        <Text style={{fontFamily:"Anton",fontSize:width*0.05,padding:width*0.03,textDecorationLine:"underline"}}> {item.name+"          "}</Text>

        </View>
        <View >
            <Image source={item.img_url1} style={{height:width*0.8,width:width*0.8}} resizeMode={"contain"} />

        </View>
    </View>
  )
}