import { View, Text, FlatList, Image,Animated, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { MotiImage, MotiView } from 'moti'
import { useRef } from 'react'
import { useEffect } from 'react';

export default function MenuBody({data,height,width,sIndex}) {


    const ScrollX = useRef(new Animated.Value(0)).current;

 

const renderItem = ({item,index})=>{
    

    
   return (
    <View style={[{alignItems:"center",}]}>
   <Text style={{fontFamily:"Lucky",fontSize:height*0.04,marginTop:height*0.13,color:"black"}}>{item.title}</Text>
   <MotiView  style={{width:width,alignItems:"center"}}>
    <MotiImage from={{scale:0}} animate={{scale:1}} source={item.icon} style={{height:height*0.25,width:height*0.25,margin:height*0.2,marginBottom:0,marginTop:height*0.05}} resizeMode={"contain"}/>
    </MotiView>
    </View>

)}
const backG = ['pink','lightyellow','lightblue','lightyellow','orange','pink','lightpink','lightblue'];

    const backgroundColor = ScrollX.interpolate({
        inputRange: backG.map((_,index)=>index*width),
        outputRange: backG.map((bg)=>bg)
    })



  return (
    <>
   <Animated.View style={[StyleSheet.absoluteFillObject,{backgroundColor}]}>


   <Animated.FlatList    initialScrollIndex={sIndex}   scrollEventThrottle={32}  onScroll={Animated.event([{nativeEvent: {contentOffset: {x: ScrollX}}}],{useNativeDriver:false})}   data={data}   renderItem={renderItem} horizontal pagingEnabled showsHorizontalScrollIndicator={false}  />

   </Animated.View>
   </>
  )
}