import { View, Text, Image, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import MenuComponent from '../../../Components1/Home/MenuComponent';
import { Divider, Searchbar } from 'react-native-paper';


export default function MenuItems({navigation}) {
    const {width,height} = Dimensions.get("screen");

    const data = [
        {
        id:1,
        name:"Burger",
        img_url:require("../../../assets/images/List/1.png"),
        },
        {
          id:7,
          name:"Tacos",
          img_url:require("../../../assets/images/List/7.png"),
        },
        {
          id:6,
          name:"HotDog",
          img_url:require("../../../assets/images/List/6.png"),
        },
        {
          id:2,
          name:"Smoothie",
          img_url:require("../../../assets/images/List/2.png"),
        },
        {
          id:4,
          name:"Fries",
          img_url:require("../../../assets/images/List/4.png"),
        },
        {
          id:5,
          name:"Pizza",
          img_url:require("../../../assets/images/List/5.png"),
        },
            
        {
          id:8,
          name:"Donut",
          img_url:require("../../../assets/images/List/8.png"),
        },
        {
          id:9,
          name:"Chicken",
          img_url:require("../../../assets/images/List/9.png"),
        },

          
         
      
      
 
        
    ]

    const renderItem =({item,index})=>(
      <TouchableOpacity onPress={()=>navigation.navigate("Cat",{item:item,sIndex:index})}style={{flexDirection:"row",alignItems: 'center',paddingBottom:height*0.05}}>
      
        <View style={{flexDirection:"column",alignItems:"center"}}>
                <Image source={item.img_url} style={{width:width*0.18,height:height*0.09,borderRadius:width*0.05,margin:width*0.04,borderTopRightRadius:width*0.18
                }} />
        <Text>{item.name}</Text>
        </View>
        <Divider  style={{width:width*0.003,height:"100%",transform:[{rotateY:"75deg"}]}}/>
        </TouchableOpacity>
    )


  return (
    <View style={{margin:width*0.04,marginLeft: 0,marginRight:0,marginTop:0,backgroundColor:"white",position:"relative",marginBottom:0,paddingTop:height*0.03}}>
     <MenuComponent data={data} renderItem={renderItem} />
    <View style={{alignItems:"flex-end",backgroundColor:"#FFBAD2",width:"100%",}}>
    <Text style={{fontFamily:"Anton",fontSize:35,color:"white",marginRight:height*0.03}}>Love Bites! </Text>

    </View>
    </View>
    
  )
}