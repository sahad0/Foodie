import { View, Text ,Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";

export default function LikeBody1({height,width,navigation}) {

    

  return (
    <>
    <View style={{zIndex:99999}}>
     <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={{
            width: width*0.25,
            margin:width*0.07,
            borderRadius:40,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2},
            shadowRadius: 10,
            elevation: 3,
            backgroundColor: 'white'
            
        }}>
            
        <Ionicons color={"black"} style={{padding:width*0.04,alignSelf:"center",}} name='arrow-back' size={25}/>
    </TouchableOpacity>
    </View>
    <Text style={{fontFamily:"Anton",position:"absolute",fontSize:200,color:"black",alignSelf:"center",marginLeft:height*0.1,}}>LiKE </Text>
    <View style={{alignItems:"center",height:height,marginTop:height*0.1}}>
        <Image  source={require("../../../assets/images/heart.png")} resizeMode={"cover"} style={{height:height*0.37,width:height*0.37,}} />
        <Image  source={require("../../../assets/images/heart.png")} resizeMode={"cover"} style={{height:height*0.15,width:height*0.15,}} />
        <Text style={{color:"black",fontFamily:'Helvetica'}}>Add some food to your collection....</Text>
    
    </View>

    </>
  )
}