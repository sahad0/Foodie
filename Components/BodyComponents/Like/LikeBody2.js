import { View, Text, FlatList, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";


export default function LikeBody2({navigation,height, width,items}) {


  const DURATION = 800
  const animation = {
      0: { opacity: 0, transform: [{ translateY: 100 }] ,},
      1: { opacity: 1, transform: [{ translateY: 0 }] }
  }
  
  const animation1 = {
    0: { opacity: 0},
    1: { opacity: 1}
}
const animation2 = {
  0: { opacity: 0, transform: [{ translateX: -100 }] ,},
  1: { opacity: 1, transform: [{ translateX: 0 }] }
}

  const ListHeader = ()=>(
    <Animatable.View style={{height:height*0.3}} animation={animation2} >
      <Animatable.Text animation={animation1} duration={1000} style={{fontFamily:"Anton",fontSize:height*0.18,color:"black",margin:height*0.05,marginTop:0,marginBottom:0}}>Like,</Animatable.Text>
    </Animatable.View>
  )
  const renderItems = ({item,index})=>{
  return(
    
 
        <Animatable.View   useNativeDriver animation={animation} duration={DURATION*index}   style={{width:width*0.45,backgroundColor:"#F7E9F2",alignItems:"center",borderRadius:height*0.07,margin:height*0.01,height:height*0.25,alignItems:"center",justifyContent:"center"}} >
                <Image source={item.img_url}  style={{height:width*0.3,width:width*0.3,postion:"relative",}} resizeMode={"contain"}/>
                <Text style={{paddingBottom:height*0.01,fontFamily:"Reg"}} >{item.heading}</Text>
                <TouchableOpacity  style={{borderColor:"white",borderRadius:25,borderWidth:0.4,backgroundColor:"white"}} >
                        <Icons name='heart' size={height*0.03} color={"#FF6EB4"} style={{padding:10}} />

                {/* <Icon name="opencart" size={20}  style={{color:"gray",duration={DURATION+200} backgroundColor:"white"}}/> */}
                </TouchableOpacity>
      </Animatable.View>
    
    
  )
}

  return (
    <>
    <View >

<View style={{height:height*0.14,backgroundColor:"white",flexDirection:"row",justifyContent:"space-between",alignItems:"flex-start",position:"relative"}}>
 <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={{
        width: width*0.25,
        margin:width*0.07,
        borderRadius:40,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
        zIndex: 99999999,
        
    }}>
    <Ionicons color={"white"} style={{padding:width*0.04,alignSelf:"center",}} name='arrow-back' size={25}/>


    </TouchableOpacity>
    
    </View>
     
      

    </View>
     <FlatList scrollEventThrottle={16} showsVerticalScrollIndicator={false} style={{height:height*6.6}} ListHeaderComponent={()=>(<ListHeader />)}   data={items} renderItem={renderItems} initialNumToRender={4} numColumns={2}  />
 
     </>
  )
}