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
    <View style={{backgroundColor:"black",height:height*0.1,borderRadius:height*0.1,flexDirection:"row",justifyContent:"center"}}>
      <TouchableOpacity onPress={()=>signOut()}>
        <Icons name='home-roof' size={28} color={"white"} style={{padding:15}} />
      </TouchableOpacity>
        
        <Icons name='account-heart-outline' size={28} color={"white"} style={{padding:15}} />



    </View>
  )
}