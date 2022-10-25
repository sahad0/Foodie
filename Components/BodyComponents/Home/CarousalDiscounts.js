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
            id:1,
            url:require("../../../assets/images/Sushi/1.png")
        },
        {
          id:2,
          url:require("../../../assets/images/Sushi/2.png")
  
        },
        {
          id:3,
          url:require("../../../assets/images/Sushi/3.png")
      },
      {
        id:4,
        url:require("../../../assets/images/Sushi/4.png")

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
      <View style={{height:height*0.28,width:width,alignItems:"center",position:"relative",top:0,}}>
        <View style={{elevation:10,borderColor:"black",borderRadius:25,marginTop:height*0.018}}>
        <Image source={item.url} style={{height:height*0.25,width:width*0.85,borderRadius:15,padding:height*0.01,}} resizeMode={"contain"}  
        />
        </View>
      </View>
    )
    

     
  return (
    <View>
      <Animated.FlatList
       onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
      bounces={false} horizontal pagingEnabled data={val} renderItem={renderItem} showsHorizontalScrollIndicator={false} initialNumToRender={4} 
        
      />
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",margin:height*0.03}}>
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