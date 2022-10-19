import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';

export default function LikeBody2({navigation,height, width}) {

  const {items} = useSelector((state)=>state.cart.value);
  
  // const renderItems = () => (

  // )


  return (
    <View style={{flexDirection:"row",}}>
      <View style={{width:width*0.45,borderColor:"lightgray",borderWidth:1,alignItems:"center",borderRadius:height*0.03,margin:height*0.01}} >
        <Image  source={items[0].img_url} resizeMode={"contain"} style={{height:height*0.18,margin:height*0.1,}} />
      </View>
      <View style={{width:width*0.45,borderColor:"lightgray",borderWidth:1,alignItems:"center",borderRadius:height*0.03,margin:height*0.01}} >
        <Image  source={items[0].img_url} resizeMode={"contain"} style={{height:height*0.18,margin:height*0.1}} />
      </View>
      


     {/* <FlatList  data={items} renderItems={renderItems} /> */}
    </View>
  )
}