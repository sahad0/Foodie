import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"; 



export default function BottomSheet({...Children}) {

    const {height,width,resetKeyboardView,initialScrl,lmtScroll,screen} = Children;

    //initialScrl           2  -  3.5
    //limitScroll           0.2 - 0.72
    //screen                cart                  Home

    const translateY = useSharedValue(0);
    const prevVal = useSharedValue({y:0});

    
    useEffect(()=>{ 
        runOnJS(Scrollto)(initialScrl,50);
    },[resetKeyboardView]);



    const Scrollto = (h,d)=>{
        translateY.value = withSpring(h,{damping:d},);
    }


    const gesture = Gesture.Pan()
    .onStart(()=>{prevVal.value = {y:translateY.value}})
    .onUpdate((e)=>{
        translateY.value  = e.translationY+prevVal.value.y;
        translateY.value  = Math.max(translateY.value,lmtScroll)})
    .onEnd(()=>{
        if(screen==="Cart"){
            if(translateY.value > -height/4){
            runOnJS(Scrollto)(-height/4,50);


            }
            if(translateY.value < -height/4){
                runOnJS(Scrollto)(-height/2-height*0.2,50);
        
            }
        }
        else if(screen==="Home"){
            if(translateY.value < (height/6)*-1){  //changed
                runOnJS(Scrollto)(-height/3.5,50);
        
        
                }
            else if(translateY.value >(height/6)*-1){ //changed    
        
                    runOnJS(Scrollto)(height,50);
            
            }
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
            backgroundColor:screen==="Home" ? "black":"white",
            height:height,
            borderRadius:screen==="Home" ? width*0.5:25,
            elevation:10,
            borderTopLeftRadius:screen==="Home" ? width*0.5:height*0.11,
            top:height,
        },
        
    })


  return (
    <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.btmSheet,rBottomStyle]}>
           {Children.children}
        </Animated.View>
    </GestureDetector>
  )



}

