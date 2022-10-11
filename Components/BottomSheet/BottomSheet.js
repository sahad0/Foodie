import {  Dimensions, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"; 



export default function BottomSheet({...Children}) {

    console.log(Children);
    const {children,height,width} = Children;

    

    const Scrollto = (h)=>{
        "worklet"
        translateY.value = withSpring(h,{damping:20,},);

    }

    console.log(Children);
    const translateY = useSharedValue(0);
    const prevVal = useSharedValue({y:0});
    useEffect(()=>{
        Scrollto(-height/3.2)
    },[]);

    const gesture = Gesture.Pan()
    .onStart(()=>{prevVal.value = {y:translateY.value}})
    .onUpdate((e)=>{
        translateY.value  = e.translationY+prevVal.value.y;
        translateY.value  = Math.max(translateY.value,-height+height*0.2)})
    .onEnd(()=>{
        if(translateY.value > -height/4){
        translateY.value = withSpring(-height/4,{damping:50});

        }
        if(translateY.value < -height/4){
            translateY.value = withSpring(-height/2-height*0.2,{damping:50});
    
            }
    })

    const rBottomStyle = useAnimatedStyle(()=>{
        return {
            transform:[{translateY:translateY.value}]
        }
    })








    const styles = StyleSheet.create({
        btmSheet:{
            position:"absolute",
            width:width,
            zIndex:99999,
            backgroundColor:"white",
            height:height,
            borderRadius:25,
            elevation:10,
            borderTopLeftRadius:height*0.11,
            top:height,
        },
        nibbi:{
            height:height*0.005,
            backgroundColor:"gray",
            width:width*0.065,
            alignSelf:"center",
            marginTop:height*0.02,
            borderRadius:height*0.08,
        }
    })


  return (
    <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.btmSheet,rBottomStyle]}>
           {Children.children}
        </Animated.View>
    </GestureDetector>
  )



}
