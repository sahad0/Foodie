import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ListItems() {
    const {width,height} = Dimensions.get("screen");

    const data = [
        {
            id:3,
            img_url:require("../assets/images/Catalog/ramen1.png"),
            name:"Ramen",
        },
        {
            id:4,
            img_url:require("../assets/images/Catalog/sake1.png"),
            name:"Sake",
        },
        
        {
            id:6,
            img_url:require("../assets/images/Catalog/udon1.png"),
            name:"Udon",
        },
        {
            id:1,
            name:"Oden",
            img_url:require("../assets/images/Catalog/oden1.png"),
        },
            {
            id:2,
            img_url:require("../assets/images/Catalog/onigiri1.png"),
            name:"Onigiri",
        },
        
    ]

    const renderItem =({item})=>(
        
        <TouchableOpacity style={{borderColor:"lightgray",borderWidth:1.5,borderRadius:width*0.2,margin:width*0.02,}}> 
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
    <Text style={{fontFamily:"Reg",fontSize:height*0.03,backgroundColor:"white",padding:height*0.02}}>Rich in flavours</Text>

    </View>
    
  )
}