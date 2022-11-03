import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Ionicons"
import FIcon from "react-native-vector-icons/FontAwesome5"
import Ant from "react-native-vector-icons/AntDesign"
import { MotiView } from 'moti';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


export default function HomeFooter({height, navigation,resetKeyboardView}) {

    const {width} = Dimensions.get("screen")


    async function signOut()  {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          return auth().signOut();
          
        } catch (error) {
          console.log("Not Signed In Developer Error!");
        }
      };  


if(resetKeyboardView) {
    return (
        <>
        <View style={{flexDirection:"row",justifyContent:"flex-end"}}>
            <Text style={{color:"black",fontFamily:"Reg",fontSize:height*0.03,marginRight:width*0.15,alignSelf:"center"}}>Burger Menu</Text>
            <MotiView from={{scale:0}} animate={{scale:0.9}} exit={{scale:0}} transition={{delay:900}} >
                <TouchableOpacity onPress={()=>{navigation.navigate("Like")}} style={{borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"black",}}>
                    <Icon name='heart-sharp' color={"#FF6EB4"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                </TouchableOpacity>

            </MotiView>
               
        </View>
        <View style={{flexDirection: 'row',justifyContent:"space-around",margin:height*0.01}}>
            <MotiView from={{scale:0}} animate={{scale:0.8}} exit={{scale:0}} transition={{delay:200}} >
                <View style={{borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"black",}}>
                    <FIcon name='skull' color={"white"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                </View>
            </MotiView>
            <MotiView from={{scale:0}} animate={{scale:0.8}} exit={{scale:0}} transition={{delay:300}} >
                    <View style={{borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"black",}}>
                        <Icon name='person' color={"#89CFF0"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                    
                    </View>
            </MotiView>
            <MotiView from={{scale:0}} animate={{scale:0.8}} exit={{scale:0}} transition={{delay:400}} >
                <View style={{borderRadius:50,height:height*0.08,width:0.08*height,elevation:2 ,backgroundColor:"black",}}>
                    <Icons name='news' color={"white"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
    
                </View>
            </MotiView>
        </View>
    
               <View style={{flexDirection:"row",}}>
               
                <MotiView from={{scale:0}} animate={{scale:0.8}} exit={{scale:0}} transition={{delay:500}} style={{margin:height*0.07,marginTop:0}}>
                <TouchableOpacity onPress={()=>signOut()} style={{borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"black",}}>
                    <Ant name='logout' color={"purple"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                </TouchableOpacity>
                </MotiView>
               </View>
               </>

      )
    
}
    
}