import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Fontisto";
import CarousalDiscounts from './CarousalDiscounts';
import FOoter from '../../FOoter';
import ListItems from "./ListItems";
import { SharedElement } from 'react-navigation-shared-element';

export default function BottomItems({navigation}) {
    const{width,height} = Dimensions.get("screen");
    const data = [
        {
            id:1,
            img_url:require('../../../assets/images/FOods/Ichiraku.png'),
            heading:"Ichiraku Ramen",
            price:25,
        },
        {
            id:2,
            img_url:require('../../../assets/images/FOods/MealBox.png'),
            heading:"Flavoured MealBox",
            price:25,
        },
        {
            id:3,
            img_url:require('../../../assets/images/FOods/combo.png'),
            heading:"Hot Pepper MealBox",
            price:25,
        },
        {
            id:4,
            img_url:require('../../../assets/images/FOods/Ichiraku.png'),
            heading:"Ichiraku Ramen",
            price:25,
        },
        {
            id:5,
            img_url:require('../../../assets/images/FOods/MealBox.png'),
            heading:"Flavoured MealBox",
            price:25,
        },
        {
            id:6,
            img_url:require('../../../assets/images/FOods/combo.png'),
            heading:"Hot Pepper MealBox",
            price:25,
        },
        
    ]
    
    const renderItem = ({item})=>(
        <TouchableOpacity onPress={()=>{navigation.navigate("Item",{item})}} style={{backgroundColor:"white",width:width/2.2,margin:width*0.02,borderRadius:height*0.01}}>
            <SharedElement  id={`item.${item.id}.img`} >
                <Image source={item.img_url}  style={{height:width*0.4,width:width*0.4,position:"relative",top:height*0.01}} resizeMode={"contain"}/>
            </SharedElement>
                <Text style={{fontFamily:"Anton",fontSize:width*0.05,margin:height*0.02}}>{item.heading}</Text>
            <Text style={{alignSelf:"center"}}>Blend on Spices</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:width*0.04,marginTop:height*0.03}}>
                <Text>$25</Text>
                <TouchableOpacity >

                <Icon name="opencart" size={20}  style={{color:"gray",backgroundColor:"white"}}/>
                </TouchableOpacity>
               
            </View>
        </TouchableOpacity>
    )

    

  return (
    <>
    <View style={{height:height*0.75}} >
      <FlatList  data={[...data]} renderItem={renderItem} numColumns={2} style={{backgroundColor:"#FAFAFA",}} scrollEventThrottle={16}
      ListHeaderComponent={
        ()=>
        <>
            <CarousalDiscounts />
            <ListItems navigation={navigation}/>
        </>
        }
        
    
     />
        
    </View>
    <FOoter/>
    </>
  )
}