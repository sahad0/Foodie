import { View, Text, Image, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import MenuBody from '../Components/BodyComponents/Menu/MenuBody';
import BottomSheet from "../Components/BottomSheet/BottomSheet" 
import Test from '../Components/SpecialComponents/MultiStepForm/Common/CommonBody';
import { useRef } from 'react';
import CommonBody from '../Components/SpecialComponents/MultiStepForm/Common/CommonBody';



export default function MenuView({route}) {
    const {item,sIndex} = route.params;
    const {width,height} = Dimensions.get("screen"); 
    
  const val = [
    {
      title: "Burger",
      icon: require('../assets/Menu/1.png'),
    },
    {
      title: "Tacos",
      icon: require('../assets/Menu/6.png'),
    },
    {
      title: "HotDog",
      icon: require('../assets/Menu/5.png'),
    },
    {
      title: "Smoothie",
      icon: require('../assets/Menu/2.png'),
    },
    {
      title: "FRies",
      icon: require('../assets/Menu/3.png'),
    },
    {
      title: "Pizza",
      icon: require('../assets/Menu/4.png'),
    },
   
  
    {
      title: "Donut",
      icon: require('../assets/Menu/7.png'),
    },

    {
      title: "Chicken",
      icon: require('../assets/Menu/8.png'),
    },
   
  ]


  return (
    
    <>
    <SafeAreaView style={{backgroundColor:"white",alignItems:"center",flex:1,}}>
    
    <MenuBody data={val} height={height} width={width} sIndex={sIndex}/>
    <BottomSheet height={height} width={width} resetKeyboardView={true}>
      <CommonBody />
    </BottomSheet>
    
    </SafeAreaView>

    </>
  )
}