import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Ionicons"
import FIcon from "react-native-vector-icons/FontAwesome5"
import Ant from "react-native-vector-icons/AntDesign"
import { MotiView } from 'moti';


export default function HomeFooter({height, navigation,resetKeyboardView}) {


if(resetKeyboardView) {
    return (
        <>
        <View style={{flexDirection:"row"}}>
            <MotiView from={{opacity:0}} animate={{opacity:1}} transition={{delay:200}}>
                <TouchableOpacity onPress={()=>{navigation.navigate("Like")}} style={{margin:height*0.05,marginLeft:height*0.03,marginBottom:0,borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"black",}}>
                    <Icon name='heart-sharp' color={"#FF6EB4"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                </TouchableOpacity>
            </MotiView>
                <MotiView from={{opacity:0}} animate={{opacity:1}} transition={{delay:300}}>
                <View style={{margin:height*0.05,marginLeft:height*0.03,marginBottom:0,borderWidth:1,borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"black",}}>
                    <Icon name='person' color={"#89CFF0"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                
                </View>
                </MotiView>
                <MotiView from={{opacity:0}} animate={{opacity:1}} transition={{delay:400}}>
                <View style={{margin:height*0.05,marginLeft:height*0.03,marginBottom:0,borderWidth:1,borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"black",}}>
                    <Icons name='news' color={"white"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
    
                </View>
                </MotiView>
               </View>
    
               <View style={{flexDirection:"row"}}>
               <MotiView from={{opacity:0}} animate={{opacity:1}} transition={{delay:500}}>
                <View style={{marginLeft:height*0.1,borderWidth:1,borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"black",}}>
                    <FIcon name='skull' color={"white"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
    
                </View>
                </MotiView>
                <MotiView from={{opacity:0}} animate={{opacity:1}} transition={{delay:600}}>
                <View style={{marginLeft:height*0.1,borderWidth:1,borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"black",}}>
                    <Ant name='logout' color={"purple"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                </View>
                </MotiView>
               </View>
               </>
      )
    
}
    
}