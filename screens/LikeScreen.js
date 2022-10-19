import { View, Text, Image, SafeAreaView, Dimensions } from 'react-native'
import React from 'react'
import LikeBody1 from '../Components/BodyComponents/Like/LikeBody1';
import Header from '../Components/HeaderComponents/Home/Header';

export default function LikeScreen({navigation}) {
    const {height, width} = Dimensions.get("screen");
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
        
        <LikeBody1 height={height} width={width} navigation={navigation}/>
    </SafeAreaView>
  )
}