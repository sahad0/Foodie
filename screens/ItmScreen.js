import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/Ionicons";


export default function ItmScreen() {

        const {width,height} = Dimensions.get("screen");


  return (
    <SafeAreaView style={{display:"flex",flex:1,backgroundColor:"white"}}>
        {/* TOpbar */}
      <View style={{padding:width*0.1,flexDirection:"row",justifyContent:"space-between"}}>
        <TouchableOpacity style={{backgroundColor:"white",elevation:5,borderRadius:width*0.5}}>
            <Icons name='arrow-back' size={30}  color={"black"} style={{padding:width*0.03}}/>
           

        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"white",elevation:5,borderRadius:width*0.5,display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Image source={require("../assets/images/Vector/heart.png")} style={{height:height*0.05,width:height*0.07,}} resizeMode={"contain"} />
        </TouchableOpacity>
      </View>


      {/* ImageBar */}
      <View style={{alignItems:"center"}}>
        <Image source={require("../assets/images/FOods/Ichiraku.png")} style={{height:height*0.27,width:height*0.6,}} resizeMode={"contain"}/>
      </View>
     


      {/* Title */}


      <View style={{padding:height*0.03}}>
        <Text style={{fontFamily:"Anton",fontSize:30,color:"black"}}>Ichiraku Ramen</Text>
      </View>

      {/* price and COunter */}
      <View style={{display: 'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
        <View style={{paddingLeft:height*0.03,flexDirection:"row"}}>
            <Text style={{fontFamily:"CInzel",fontSize:17,color:"black"}}>$</Text>

            <Text style={{fontFamily:"CInzel",fontSize:25,color:"black"}}>25.00</Text>
        </View>
        <View style={{display: 'flex',flexDirection:"row",alignItems:"center",backgroundColor:"white",borderRadius:width*0.2,borderColor:"lightgray",borderWidth:1,marginRight:height*0.05,}}>
            <TouchableOpacity><Text style={{fontSize:width*0.05,padding:width*0.03,color:"black"}}>-</Text></TouchableOpacity>
            <Text style={{fontSize:width*0.05,padding:width*0.03,color:"black"}}>10</Text>
            <TouchableOpacity><Text style={{fontSize:width*0.05,padding:width*0.03,color:"black"}}>+</Text></TouchableOpacity>

        </View>


      </View>


      {/* About */}

      <View style={{paddingLeft:width*0.06,paddingTop:width*0.03}}>
        <Text style={{fontSize:width*0.05,fontFamily:"Sil",color:"black",paddingLeft:width*0.03}}>About Ramen :</Text>
        <Text style={{fontStyle:"italic",textAlign:"justify",paddingLeft:width*0.03,paddingRight:width*0.05}}>
            {"   "}A Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of types of noodle and a selection of meats or vegetables, often topped with a boiled egg.
        </Text>
      </View>


      {/* Total */}

      <View>

      </View>
      

    </SafeAreaView>
  )
}