import {  SafeAreaView,  Dimensions, View, Image, } from 'react-native'
import React from 'react'
import {ItemAbout,ItemPrice,ItemTitle,ItemTotal} from '../Components/BodyComponents/Item';
import ItemHeader from "../Components/HeaderComponents/Item/ItemHeader"
import { SharedElement } from 'react-navigation-shared-element';

export default function ItmScreen({route,navigation}) {

        const {width,height} = Dimensions.get("screen");
        const {item} = route.params;
        
        

  return (
    <SafeAreaView style={{display:"flex",flex:1,backgroundColor:"white"}}>
      
      <ItemHeader navigation={navigation} width={width} height={height}/>

      <View style={{alignItems:"center"}}>
      <SharedElement id={`item.${item.id}.img`}>
        <Image source={item.img_url} style={{height:height*0.27,width:height*0.6,}} resizeMode={"contain"}/>
      </SharedElement>
    </View>

      <ItemTitle heading={item.heading} height={height}/>

      <ItemPrice width={width} price={item.price} height={height}/>

      <ItemAbout width={width} />
      
      <ItemTotal width={width} height={height} />

    </SafeAreaView>
  )
}

ItmScreen.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;
  return [
      { id: `item.${item.id}.img` },

  ];
}