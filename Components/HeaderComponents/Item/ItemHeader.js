import { Image, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/Ionicons";


export default function ItemHeader({navigation,width,height}) {
  return (
     
     <View style={{padding:width*0.1,flexDirection:"row",justifyContent:"space-between"}}>
     <TouchableOpacity onPress={()=>{navigation.goBack()}} style={{backgroundColor:"white",elevation:5,borderRadius:width*0.5}}>
         <Icons name='arrow-back' size={30}  color={"black"} style={{padding:width*0.03}}/>
        

     </TouchableOpacity>
     <TouchableOpacity style={{backgroundColor:"white",elevation:5,borderRadius:width*0.5,display:"flex",justifyContent:"center",alignItems:"center"}}>
         <Image source={require("../../../assets/images/Vector/heart1.png")} style={{height:height*0.035,width:height*0.07,}} resizeMode={"contain"} />
     </TouchableOpacity>
   </View>
  )
}