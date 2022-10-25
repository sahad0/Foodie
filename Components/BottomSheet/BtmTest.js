import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"; 






export default function BtmTest({height,width,resetKeyboardView}) {

    // const {height,width,resetKeyboardView} = Children;

    const translateY = useSharedValue(0);
    const prevVal = useSharedValue({y:0});

   

    useEffect(()=>{ 
        runOnJS(Scrollto)(-height/3.5,50);//changed
    },[resetKeyboardView]);



    const Scrollto = (h,d)=>{
        translateY.value = withSpring(h,{damping:d,},);
    }


    const gesture = Gesture.Pan()
    .onStart(()=>{prevVal.value = {y:translateY.value}})
    .onUpdate((e)=>{
        translateY.value  = e.translationY+prevVal.value.y;
        translateY.value  = Math.max(translateY.value,-height+height*0.72)})//changed
    .onEnd(()=>{
        if(translateY.value < (height/6)*-1){  //changed
        runOnJS(Scrollto)(-height/3.5,50);


        }
        else if(translateY.value >(height/6)*-1){ //changed    

            runOnJS(Scrollto)(height,50);
    
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
            backgroundColor:"#ffff", //changed
            height:height,
            borderRadius:width*0.5,//changed
            elevation:10,
            borderColor:"gray",
            // borderTopLeftRadius:height*0.11,
            top:height,
            
        },
       
    })


  return (
    <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.btmSheet,rBottomStyle]}>
           {/* {Children.children} */}
           
        </Animated.View>
    </GestureDetector>
  )



}

