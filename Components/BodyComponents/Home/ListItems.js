import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ListItems({navigation}) {
    const {width,height} = Dimensions.get("screen");

    const data = [
        {
            id:3,
            name:"Ramen",
            img_url:require("../../../assets/images/Catalog/ramen1.png"),
            img_url1:require("../../../assets/images/Catalog/ramen2.png")
        },
        {
            id:4,
            name:"Sake",
            img_url:require("../../../assets/images/Catalog/sake1.png"),
            img_url1:require("../../../assets/images/Catalog/sake2.png")
        },
        {
          id:5,
          name:"Sushi",
          img_url:require("../../../assets/images/Catalog/sushi1.png"),
          img_url1:require("../../../assets/images/Catalog/sushi2.png")
      },
        
        {
            id:6,
            name:"Udon",
            img_url:require("../../../assets/images/Catalog/udon1.png"),
            img_url1:require("../../../assets/images/Catalog/udon2.png")
        },
        {
            id:1,
            name:"Oden",
            img_url:require("../../../assets/images/Catalog/oden1.png"),
            img_url1:require("../../../assets/images/Catalog/oden2.png")
        },
            {
            id:2,
            name:"Onigiri",
            img_url:require("../../../assets/images/Catalog/onigiri1.png"),
            img_url1:require("../../../assets/images/Catalog/onigiri2.png")
        },
        
    ]

    const renderItem =({item})=>(
        
        <TouchableOpacity onPress={()=>navigation.navigate("Cat",{item:item})} style={{borderColor:"lightgray",borderWidth:1.5,borderRadius:width*0.2,margin:width*0.02,}}> 
                <Image source={item.img_url} style={{width:width*0.16,height:height*0.08,borderRadius:width*0.2,margin:width*0.02,
                }} />
            </TouchableOpacity>
        
    )


  return (
    <View style={{margin:width*0.03,backgroundColor:"white",position:"relative",top:0}}>
      <FlatList  data={[...data]}
      
        showsHorizontalScrollIndicator={false}
      horizontal
      renderItem={renderItem}
      />
    <Text style={{fontFamily:"Reg",fontSize:height*0.03,backgroundColor:"white",padding:height*0.02}}>Picks for you!</Text>

    </View>
    
  )
}