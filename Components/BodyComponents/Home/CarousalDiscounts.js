import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import React from 'react'
import { useRef } from 'react';
import Animated from 'react-native-reanimated';
import { Searchbar } from 'react-native-paper';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function CarousalDiscounts() {

  const scrollX = useRef(new Animated.Value(0)).current;

  const {width,height} = Dimensions.get("screen");
    const val = [
      {
        id:6,
        url:require("../../../assets/images/Sushi/6.png")},
      
      
        {
            id:1,
            url:require("../../../assets/images/Sushi/7.png")
        },
        {
          id:2,
          url:require("../../../assets/images/Sushi/4.png")
  
      },
        
        
        
        {
          id:5,
          url:require("../../../assets/images/Sushi/5.png")

        },
        {
          id:4,
          url:require("../../../assets/images/Sushi/1.png")
  
      },
     

       
        
        
    ]

    const Indicator = ()=>(
        val.map((k,index)=>{
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.6, 0.9, 0.6],
            extrapolate:"clamp",
          })
          return(
            <Animated.View key={k.id} style={{backgroundColor:"lightgray",height:10,width:10,borderRadius:5,marginLeft:width*0.015,transform:[{scale}]}} />
        )}
        )
        
    )


    const renderItem = ({ item }) => (
      <View style={{height:height*0.25,width:width,borderRadius:25,alignItems:"center",position:"relative",top:0}}>
        <Image source={item.url} style={{height:height*0.2,width:width*0.85,borderRadius:15,margin:height*0.01,}} resizeMode={"contain"}  
        />
      </View>
    )
    

     
  return (
    <View>
      <Animated.FlatList
       onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      bounces={false} horizontal pagingEnabled data={[...val]} renderItem={renderItem} showsHorizontalScrollIndicator={false} initialNumToRender={4} 
        
      />
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <Indicator  />
      </View>
      <View style={{alignItems:"center",}}>
      <Searchbar
      icon={()=>(  <Ionicons name="search-outline" style={{color:"gray"}} size={28} />)}
      
      style={{
        color:"black",
        fontWeight:"bold",
        fontFamily:"Cinzel !important",
        height:height*0.06,
        width:width*0.9,
        borderRadius:25,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        backgroundColor: 'white',
        marginTop:height*0.02,
      }}
      placeholder="Search your food..."
      
      
    />

    </View>

      
    </View>
  )
}