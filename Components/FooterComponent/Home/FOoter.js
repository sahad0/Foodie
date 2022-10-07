import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


export default function FOoter() {
    const {height} = Dimensions.get("screen");

    async function signOut()  {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        return auth().signOut();
        
      } catch (error) {
        console.log("Not Signed In Developer Error!");
      }
    };  


  return (
    <View style={{position:"absolute",width:"100%",marginTop:height*0.93,backgroundColor:"black",borderRadius:height*0.05,height:height*0.08,flexDirection:"row",justifyContent:"center"}}>
      <TouchableOpacity onPress={()=>signOut()}>
        <Icons name='home-roof' size={28} color={"white"} style={{marginBottom:height*0.05,marginTop:height*0.005,paddingLeft:height*0.03}} />
      </TouchableOpacity>
        
        <Icons name='account-heart-outline' size={28} color={"white"} style={{marginBottom:height*0.05,marginTop:height*0.005,paddingLeft:height*0.03}} />



    </View>
  )
}