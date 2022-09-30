import { View, Text, ImageBackground, Image, Dimensions } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function CarousalDiscounts() {

  
  const {width,height} = Dimensions.get("screen");
    const val = [
        {
            id:1,
            url:require("../assets/images/Sushi/1.png")
        },
        {
            id:2,
            url:require("../assets/images/Sushi/2.png")

        },
        {
            id:3,
            url:require("../assets/images/Sushi/3.png")

        },
        {
            id:4,
            url:require("../assets/images/Sushi/4.png")

        },
        
        
    ]

    const Indicator = ()=>(
      
        val.map((k)=>{
          return(
            <View key={k.id} style={{backgroundColor:"lightgray",height:10,width:10,borderRadius:5,marginLeft:width*0.01}} />
        )}
        )
        
    )


    const renderItem = ({ item }) => (
      <View style={{height:height*0.25,width:width,borderRadius:25}}>
        <Image source={item.url} style={{height:height*0.2,width:width*0.95,borderRadius:15,margin:height*0.01}} resizeMode={"contain"}  />
      </View>
    )
    


  return (
    <View>
      <FlatList bounces={false} horizontal pagingEnabled data={[...val]} renderItem={renderItem} showsHorizontalScrollIndicator={false} initialNumToRender={4} 
        
      />
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
      <Indicator />
      </View>

      
    </View>
  )
}