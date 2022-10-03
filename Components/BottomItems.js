import { View, Text, Dimensions, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Fontisto";
import CarousalDiscounts from './CarousalDiscounts';
import ListItems from './ListItems';
import FOoter from './FOoter';

export default function BottomItems() {
    const{width,height} = Dimensions.get("screen");
    const data = [
        {
            id:1,
            img_url:require('../assets/images/FOods/Ichiraku.png'),
            heading:"Ichiraku Ramen",
            price:"$25"
        },
        {
            id:2,
            img_url:require('../assets/images/FOods/combo.png'),
            heading:"Flavoured MealBox",
            price:"$25"
        },
        {
            id:3,
            img_url:require('../assets/images/FOods/MealBox.png'),
            heading:"Hot Pepper MealBox",
            price:"$25"
        },
        {
            id:4,
            img_url:require('../assets/images/FOods/Ichiraku.png'),
            heading:"Ichiraku Ramen",
            price:"$25"
        },
        {
            id:5,
            img_url:require('../assets/images/FOods/combo.png'),
            heading:"Flavoured MealBox",
            price:"$25"
        },
        {
            id:6,
            img_url:require('../assets/images/FOods/MealBox.png'),
            heading:"Hot Pepper MealBox",
            price:"$25"
        },
        {
            id:7,
            img_url:require('../assets/images/FOods/Ichiraku.png'),
            heading:"Ichiraku Ramen",
            price:"$25"
        },
        {
            id:8,
            img_url:require('../assets/images/FOods/combo.png'),
            heading:"Flavoured MealBox",
            price:"$25"
        },
        {
            id:9,
            img_url:require('../assets/images/FOods/MealBox.png'),
            heading:"Hot Pepper MealBox",
            price:"$25"
        },
    ]
    const renderItem = ({item})=>(
        <View style={{backgroundColor:"white",width:width/2.2,margin:width*0.02,borderRadius:height*0.01}}>
            <Image source={item.img_url}  style={{height:150,width:150,position:"relative",top:height*0.01}} resizeMode={"contain"}/>
            <Text style={{fontFamily:"Anton",fontSize:width*0.05,margin:height*0.02}}>{item.heading}</Text>
            <Text style={{alignSelf:"center"}}>Blend on Spices</Text>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:width*0.04,marginTop:height*0.03}}>
                <Text>$25</Text>
                <TouchableOpacity >

                <Icon name="opencart" size={20}  style={{color:"gray",backgroundColor:"white"}}/>
                </TouchableOpacity>
               
            </View>
        </View>
    )

    

  return (
    <>
    <View style={{backgroundColor:"#FAFAFA",marginBottom:height*0.2}} >
      <FlatList data={[...data]} renderItem={renderItem} numColumns={2} style={{backgroundColor:"#FAFAFA",}} 
      ListHeaderComponent={
        ()=>
        <>
            <CarousalDiscounts />
            <ListItems />
        </>
        }
        
    
     />
        
    </View>
    <FOoter />
    </>
  )
}