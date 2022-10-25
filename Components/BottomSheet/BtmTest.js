import {  Dimensions, StyleSheet,View,Text } from 'react-native'
import React, { useEffect } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"; 
import Icons from "react-native-vector-icons/Entypo";
import Icon from "react-native-vector-icons/Ionicons"
import FIcon from "react-native-vector-icons/FontAwesome5"
import Ant from "react-native-vector-icons/AntDesign"





export default function BtmTest({height,width,resetKeyboardView}) {

    // const {height,width,resetKeyboardView} = Children;

    const translateY = useSharedValue(0);
    const prevVal = useSharedValue({y:0});

    
    useEffect(()=>{ 
        runOnJS(Scrollto)(-height/2,20);
    },[resetKeyboardView]);



    const Scrollto = (h,d)=>{
        translateY.value = withSpring(h,{damping:d},);
    }


    const gesture = Gesture.Pan()
    .onStart(()=>{prevVal.value = {y:translateY.value}})
    .onUpdate((e)=>{
        translateY.value  = e.translationY+prevVal.value.y;
        translateY.value  = Math.max(translateY.value,-height+height*0.2)})
    .onEnd(()=>{
        if(translateY.value > -height/4){
        // translateY.value = withSpring(-height/4,{damping:50});
        runOnJS(Scrollto)(-height/4,50);


        }
        if(translateY.value < -height/4){
            // translateY.value = withSpring(-height/2-height*0.2,{damping:50});
            runOnJS(Scrollto)(-height/2-height*0.2,50);
    
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
            backgroundColor:"white", //changed
            height:height,
            borderRadius:width*0.17,
            elevation:10,
            // borderTopLeftRadius:height*0.11,
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
           {/* {Children.children} */}
           <View style={{flexDirection:"row"}}>
            <View style={{margin:height*0.05,marginLeft:height*0.03,borderColor:'white',borderWidth:1,borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"white",}}>
                <Icon name='heart-sharp' color={"#FF6EB4"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                <Text style={{color:"gray",alignSelf: 'center',}}>Liked</Text>
            </View>
            <View style={{margin:height*0.05,marginLeft:height*0.03,borderColor:'white',borderWidth:1,borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"white",}}>
                <Icon name='person' color={"#89CFF0"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                <Text style={{color:"gray",alignSelf: 'center',}}>Profile</Text>
            
            </View>
            <View style={{margin:height*0.05,marginLeft:height*0.03,borderColor:'white',borderWidth:1,borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"white",}}>
                <Icons name='news' color={"black"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                <Text style={{color:"gray",alignSelf: 'center',}}>Orders</Text>

            </View>
           </View>

           <View style={{flexDirection:"row"}}>
            <View style={{marginLeft:height*0.1,borderColor:'white',borderWidth:1,borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"white",}}>
                <FIcon name='skull' color={"black"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                <Text style={{color:"gray",alignSelf: 'center',}}>Coins</Text>

            </View>
            <View style={{marginLeft:height*0.1,borderColor:'white',borderWidth:1,borderRadius:50,height:height*0.08,width:0.08*height,elevation:2,backgroundColor:"white",}}>
                <Ant name='logout' color={"purple"} size={30} style={{padding:height*0.02,width:height*0.3,height:height*0.1}} />
                <Text style={{color:"gray",alignSelf: 'center',}}>LogOut</Text>
            </View>
            
           </View>
        </Animated.View>
    </GestureDetector>
  )



}

