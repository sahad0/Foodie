import { View, Text, Dimensions, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import CartHeader from '../Components/HeaderComponents/Cart/CartHeader'
import CartList from '../Components/BodyComponents/Cart/CartList';
import CartFooter from '../Components/FooterComponent/Cart/CartFooter';
import BottomSheet from '../Components/BottomSheet/BottomSheet';

export default function CartScreen({navigation}) {


  const {height,width} = Dimensions.get("screen");
  const [cussineType,setcussineType] = useState("Delivery");


  return (
    <SafeAreaView style={{display:"flex",flex:1,backgroundColor:"transparent"}}>
    <CartHeader height={height} width={width} navigation={navigation} cussineType={cussineType} setcussineType={setcussineType} />

    <CartList  setcussineType={setcussineType} height={height} width={width}  />
    
    
    <BottomSheet height={height} width={width}>
      <CartFooter height={height} width={width}/>
    </BottomSheet>
    
    </SafeAreaView>

  )
}