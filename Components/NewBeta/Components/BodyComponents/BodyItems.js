import { View, Text ,TouchableOpacity,Image, Dimensions} from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/MaterialCommunityIcons";


export default function BodyItems({item}) {

const {width,height} = Dimensions.get("screen");





  return (
    <TouchableOpacity  style={{elevation:0.1,backgroundColor:"white",width:width/2.2,margin:width*0.02,borderRadius:height*0.01}}>
            <Image source={item.img}  style={{height:width*0.4,width:width*0.4,position:"relative",top:height*0.01}} resizeMode={"contain"}/>
            <Text style={{fontFamily:"Ogg",fontSize:width*0.05,margin:height*0.02,color:"black"}}>Hello</Text>
        <Text style={{color:"gray",fontFamily:"Straw",margin:height*0.02,marginTop:height*0.005}}>Blend on Spices</Text>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:width*0.04,marginTop:height*0.03,alignItems:"center"}}>
            <Text style={{color:"gray"}}>25</Text>
            <TouchableOpacity style={{borderColor:"white",borderRadius:25,backgroundColor:"white"}} >
                            <Icons name={"heart"} size={height*0.03} color={"#FF6EB4"} style={{padding:10}} />
            </TouchableOpacity>
        
        </View>
    </TouchableOpacity>
  )
}