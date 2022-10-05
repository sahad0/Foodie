import { View, Text, SafeAreaView, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { ItemImage ,ItemAbout,ItemPrice,ItemTitle,ItemTotal} from '../Components/BodyComponents/Item';
import ItemHeader from "../Components/HeaderComponents/Item/ItemHeader"

export default function ItmScreen({route,navigation}) {

        const {width,height} = Dimensions.get("screen");
        const {item} = route.params;
        
        

  return (
    <SafeAreaView style={{display:"flex",flex:1,backgroundColor:"white"}}>
      
      <ItemHeader navigation={navigation} width={width} height={height}/>

      <ItemImage img_url={item.img_url} height={height} />

      <ItemTitle heading={item.heading} height={height}/>

      <ItemPrice width={width} price={item.price} height={height}/>

      <ItemAbout width={width} />
      
      <ItemTotal width={width} height={height} />

    </SafeAreaView>
  )
}