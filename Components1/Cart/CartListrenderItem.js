import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element';
import { useDispatch } from 'react-redux';
import { RemovefromCart,IncreaseItemsfromCart,ReduceItemsfromCart } from '../../features/cart';
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import {PanGestureHandler,} from 'react-native-gesture-handler';
import Animated, {runOnJS,useAnimatedGestureHandler, useAnimatedStyle,useSharedValue,withSpring,withTiming,} from 'react-native-reanimated';
import Iconss from "react-native-vector-icons/Ionicons"
   


export default function CartListrenderItem({item,index,height,width,navigation}) {
    const styles = StyleSheet.create({
    
        iconContainer: {
          height: 50,
          width: 50,
          position: 'absolute',
          right: '10%',
          justifyContent: 'center',
          alignItems: 'center',
        },
      });
   
   
   
    const dispatch = useDispatch();
    const len= item.length;

    const onDismiss = (id,total)=>{
        dispatch(RemovefromCart({id:id,total:total}))
    }
    

    const threshHold = -width* 0.3;

    const translateX = useSharedValue(0);
    const itemHeight = useSharedValue(height/5.5);
    const marginVertical = useSharedValue(10);
    const opacity = useSharedValue(1);


    const panGesture = useAnimatedGestureHandler({
        onActive: (event) => {
          translateX.value = event.translationX;
        },
        onEnd: () => {
          const shouldBeDismissed = translateX.value < threshHold;

          if (shouldBeDismissed) {
            translateX.value = withTiming(-width);
            itemHeight.value = withSpring(0,{damping:50});
            marginVertical.value = withSpring(0,{damping:50});
            opacity.value = withTiming(0, undefined, (isFinished) => {
              if (isFinished ) {
                runOnJS(onDismiss)(item.id,item.total);

              }
            });
          } else {
            translateX.value = withTiming(0);
          }
        },
      });
        
    
  
  
    const rStyle = useAnimatedStyle(() => ({
        transform: [
          {
            translateX: translateX.value,
          },
        ],
      }));
   


    
  
    const rTaskContainerStyle = useAnimatedStyle(() => {
      
      return {
        height: itemHeight.value,
        marginVertical: marginVertical.value,
        opacity: opacity.value,
      };
    });
  return (
    <Animated.View style={[rTaskContainerStyle,]}>
    <PanGestureHandler
    onGestureEvent={panGesture}
  >
        <Animated.View activeOpacity={1} onPress={()=>navigation.navigate("Item",{item:item})} style={[rStyle,{backgroundColor:"white",margin:height*0.01,marginTop:0,marginBottom:0,borderRadius:height*0.02,flexDirection:"row",elevation:5,}]}>
            <View style={{padding:22,}}>
                <View style={{margin:5,backgroundColor:"#FCFCFC",borderRadius:height*0.02,}}>
                <SharedElement id={`item.${item.id}.img`}>
                    <Image source={item.img_url} resizeMode={"contain"} style={{height:height*0.125,width:height*0.125,padding:5,}} />
                </SharedElement>
                </View>
            </View>
            <View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:height*0.01}}>
                    <Text style={{fontFamily:"Anton",fontSize:height*0.025,margin:height*0.010,color:"#595959"}}>{item.heading}</Text>
                    
                    <TouchableOpacity onPress={()=>dispatch(RemovefromCart({id:item.id,total:item.total}))} style={{marginTop:height*0.01,}}>
                        <Icons name='close-thick' color={"gray"} size={height*0.02} style={{marginRight:"5%",}} />
                    </TouchableOpacity>
                
                </View>
                <View style={{marginLeft:height*0.010,flexDirection:"row",alignItems:"center"}}>
                    <TouchableOpacity>
                    <Icons name='heart' size={height*0.03} color={"#FF6EB4"} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Icons name='share-variant' size={height*0.02} color={"gray"} style={{marginLeft:height*0.01}}/>
                    </TouchableOpacity>
                </View>
            
                <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                    <View style={{flexDirection:"row"}}>
                    <Text style={{marginLeft:height*0.014,marginTop:height*0.014,fontSize:height*0.015,color:"#45b6fe",fontStyle:"italic",marginLeft:height*0.018}}>$</Text>
                    <Text style={{marginTop:height*0.014,fontSize:height*0.022,color:"#45b6fe",}}>{"$"+item.price}</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",margin:height*0.014,marginLeft:height*0.06,alignItems:"center"}}>
                        
                        <TouchableOpacity onPress={()=>dispatch(ReduceItemsfromCart({id:item.id,price:item.price}))} style={{borderColor:"lightgray",borderWidth:1,borderStyle:"solid",borderRadius:5}}>
                            <Text style={{fontSize:22,borderColor:"lightgray",paddingLeft:8,paddingRight:8,color:"gray"}}>-</Text>
                        </TouchableOpacity>
                        
                        <Text style={{marginLeft:18,fontSize:18,color:"black"}}>{item.count}</Text>
                        <TouchableOpacity onPress={()=>dispatch(IncreaseItemsfromCart({id:item.id,price:item.price}))}>
                            <Text style={{marginLeft:18,fontSize:22,color:"black"}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Animated.View>
</PanGestureHandler>
</Animated.View>
  )
}