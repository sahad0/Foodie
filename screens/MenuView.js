import { View, Text, Image, Dimensions, SafeAreaView } from 'react-native'
import React from 'react'
import MenuBody from '../Components/BodyComponents/Menu/MenuBody';
import BottomSheet from "../Components/BottomSheet/BottomSheet" 
import Test from '../Components/SpecialComponents/MultiStepForm/Common/CommonBody';
import { useRef } from 'react';
import CommonBody from '../Components/SpecialComponents/MultiStepForm/Common/CommonBody';
import { useState } from 'react';
import { useEffect } from 'react';
import { Burger } from '../data/Burgerfile';



export default function MenuView({route}) {
    const {item,sIndex} = route.params;
    const {width,height} = Dimensions.get("screen");
    const [state,setState] = useState(0);


    const [id,setId] = useState(item.id);

    useEffect(()=>{
        setId(item?.id);
    },[]);
    
   
    
  const val = [
    {
      id:1,
      title: "Burger",
      icon: require('../assets/Menu/1.png'),
    },
    {
      id:2,
      title: "Tacos",
      icon: require('../assets/Menu/6.png'),
    },
    {
      id:3,
      title: "HotDog",
      icon: require('../assets/Menu/5.png'),
    },
    {
      id:4,
      title: "Smoothie",
      icon: require('../assets/Menu/2.png'),
    },
    {
      id:5,
      title: "FRies",
      icon: require('../assets/Menu/3.png'),
    },
    {
      id:6,
      title: "Pizza",
      icon: require('../assets/Menu/4.png'),
    },
   
    {
      id:7,
      title: "Donut",
      icon: require('../assets/Menu/7.png'),
    },

    {
      id:8,
      title: "Chicken",
      icon: require('../assets/Menu/8.png'),
    },
   
  ]


  return (
    
    id>=0 ? 
    (
    <>
      <SafeAreaView style={{backgroundColor:"white",alignItems:"center",flex:1,}}>
      <MenuBody data={val} height={height} width={width} sIndex={sIndex} setId={setId} setState={setState}/>
      <BottomSheet height={height} width={width} resetKeyboardView={true} >
        <CommonBody id={id} state={state} setState={setState} />
      </BottomSheet>
      
      </SafeAreaView>

    </>
    )
    :
    (<></>)
  )
}