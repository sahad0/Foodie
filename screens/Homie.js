import { View, Text, SafeAreaView, Dimensions, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import HomeHeader from '../Components/NewBeta/Components/HeaderComponents/HomeHeader';
import HomeBody from '../Components/NewBeta/Components/BodyComponents/HomeBody';
import HomeHead from '../Components/NewBeta/Components/HeaderComponents/HomeHead';


export default function Homie() {
  const {width,height} = Dimensions.get("screen");

  const data = [
    {
      h1:"Cherry!",
      h2:"Cream of Delight",
      img :  require("../assets/images/hiii.png"),
      color1:"#CAE8F6",
      color2:"#B7E0F3",
      
    },
    {
      h1:"Cherry!",
      h2:"Cream of Delight",
      img :  require("../assets/images/im/2.png"),
      color1:"#C7E3A4",
      color2:"#B6DA88",
    },
    {
      h1:"Cherry!",
      h2:"Cream of Delight",
      img :  require("../assets/images/hiii.png"),
      color1:"#FDF6C3",
      color2:"#FFC2B2",
      
    },
    {
      h1:"Cherry!",
      h2:"Cream of Delight",
      img :  require("../assets/images/im/2.png"),
      color1:"#F8CBEE",
      color2:"#F8BFEC",
    },
    {
      h1:"Cherry!",
      h2:"Cream of Delight",
      img :  require("../assets/images/hiii.png"),
      color1:"#C9C3F3",
      color2:"#BAB3EF",
      
    },
    
    
  ]

  const datas = [
      {
        data:"50+",
      },
      {
        data:"100+",
      },
      {
        data:"200+",
      },
      {
        data:"300+",
      },
      {
        data:"400+",
      },
     
  ]









  return (
    <SafeAreaView style={{backgroundColor:"white",flex:1}}>
      
     <HomeHead height={height} width={width} />

    
      <HomeBody  width={width} height={height} data={data} datas={datas} />

    

     
    </SafeAreaView>
  )
}