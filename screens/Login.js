import { View, SafeAreaView, Image, Dimensions,Text, TouchableOpacity } from 'react-native'
import React from 'react'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Icons from 'react-native-vector-icons/Fontisto'
import { useSelector } from 'react-redux';


export default function Login({navigation}) {

    const {width,height} = Dimensions.get("screen");
    const cart = useSelector((state)=> state.cart.value);



   
    async function onGoogleButtonPress() {
      try {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
         await auth().signInWithCredential(googleCredential);
        
        
      } catch (error) {
        console.log("Sign In Cancelled");
      }
       
      }
     
   
      return (
        <>
       
        
        <SafeAreaView style={{display:"flex",flex:1,backgroundColor:"white"}}>
          <View style={{display:"flex",flexGrow:1,}}>
          <Text style={{color:"black",fontFamily: 'monster',position: "absolute",fontSize:width*0.2,paddingLeft:width*0.2,paddingTop:width*0.1}}> My </Text>

            <Text style={{color:"black",fontFamily: 'monster',position: "absolute",fontSize:width*0.16,paddingTop:width*0.35,paddingLeft:width*0.152}}> Restaurant </Text>
            <Image source={require("../assets/images/Vector/town.png")} style={{marginTop:height*0.2,height:height*0.5,width:height*0.5}} resizeMode={"contain"} />
          </View>
          <View style={{}}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <TouchableOpacity onPress={() => onGoogleButtonPress()} style={{backgroundColor:"white",elevation:3,borderRadius:width*0.3,margin:width*0.03}}>
                <Icons name='google' size={32} color={"black"} style={{padding:width*0.04}}/>

                </TouchableOpacity>
                <TouchableOpacity  style={{backgroundColor:"white",elevation:3,borderRadius:width*0.3,margin:width*0.03}}>
                  <Icons name='apple' size={32} color={"black"} style={{padding:width*0.04}}/>

                </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity>
                  <Text style={{marginBottom:width*0.5,alignSelf:"center",marginTop:width*0.04,color:"gray"}}>Trouble loggi'n In?</Text>

                  </TouchableOpacity>

                </View>
                
          </View>

        </SafeAreaView>
        </>
      );
    
}