import { View, Text ,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Ev from 'react-native-vector-icons/EvilIcons';

export default function HomeHead({height,width}) {
  return (
    <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:height*0.03,marginTop:0,marginBottom:0,padding:height*0.01,paddingTop:height*0.05}}>
          <View >
            <View>
              <View> 
                   <Text style={{fontFamily:"Ogg",color:"black",fontSize:height*0.05,}}>Hello,</Text> 
              </View> 
              <Text style={{color:"gray",fontFamily:"Straw"}}>What would you love to eat ?</Text>   
          </View>
          
           

    </View>
    <View>
              <TouchableOpacity>
                <Image source={require("../../../../assets/images/Sushi/3.png")} style={{width:55,height:55,borderRadius:height}} resizeMode={"cover"} />
              </TouchableOpacity>
            </View>
   
  </View>
       
  )
}


           