import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ({width,height,total}) {
  return (
    <View style={{margin:height*0.03,flexDirection:"row",backgroundColor:"white",elevation:6,borderRadius:10,justifyContent:"space-between"}}>
        <View >
          <View style={{flexDirection:"row",paddingTop:width*0.08,paddingLeft:width*0.1}}>
              <Text style={{fontFamily:"Cinzel",fontSize:width*0.06,color:"black"}}>$</Text>

              <Text style={{fontFamily:"Cinzel",fontSize:width*0.06,color:"black"}}>{total+".00"}</Text>
          </View>
          <View style={{padding:width*0.05,paddingLeft:width*0.1}}>
          <Text style={{fontWeight:"bold",fontStyle:"Sizeitalic"}}>Total price</Text>

          </View>
        </View>

        <View style={{paddingTop:width*0.06,paddingRight:width*0.06,alignItems:"center"}}>
            <TouchableOpacity style={{backgroundColor:"#23272A",padding:width*0.03,paddingLeft:width*0.1,paddingRight:width*0.08,borderRadius:width*0.2}}>
                  <Text style={{color:"white",fontFamily:"Reg",fontSize:width*0.05}}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:width*0.02,}}>
                  <Text style={{fontStyle:"italic",textDecorationLine:"underline"}}> Place Order </Text>
            </TouchableOpacity>
        </View>
      </View>
  )
}