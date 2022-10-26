import { View, Text, Image, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import LikeBody1 from '../Components/BodyComponents/Like/LikeBody1';
import Header from '../Components/HeaderComponents/Home/Header';
import LikeBody2 from '../Components/BodyComponents/Like/LikeBody2';
import { useSelector } from 'react-redux';


export default function LikeScreen({navigation}) {
    const {height, width} = Dimensions.get("screen");

    const {liked} = useSelector((state)=>state.cart.value);

 

  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      {liked.length ===0 ? 
      <>
        <LikeBody1 height={height} width={width} navigation={navigation}/>

      </> 
      :
      
      <>
        <LikeBody2 height={height} width={width} navigation={navigation} />
      
      </>}
        
    </SafeAreaView>
  )
}