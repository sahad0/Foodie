import { View, Text, Dimensions, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/MaterialCommunityIcons";

import CarousalDiscounts from './CarousalDiscounts';
import { SharedElement } from 'react-navigation-shared-element';
import MenuItems from './MenuItems';
import { useDispatch, useSelector } from 'react-redux';
import { Like_Unlike } from '../../../features/cart';

export default function BottomItems({navigation}) {
    const{width,height} = Dimensions.get("screen");

    const {liked} = useSelector((state)=>state.cart.value);
    const dispatch = useDispatch();



    const data = [
        {
            id:1,
            img_url:require('../../../assets/images/FOods/Ichiraku.png'),
            heading:"Ichiraku Ramen",
            price:25,
        },
        {
            id:2,
            img_url:require('../../../assets/images/FOods/MealBox.png'),
            heading:"Flavoured MealBox",
            price:25,
        },
        {
            id:3,
            img_url:require('../../../assets/images/FOods/soya.png'),
            heading:"Soya and Been",
            price:25,
        },
        {
            id:4,
            img_url:require('../../../assets/images/FOods/pepperoni.png'),
            heading:"Pepper Oni",
            price:25,
        },
        {
            id:5,
            img_url:require('../../../assets/images/FOods/combo.png'),
            heading:"Combo Box",
            price:25,
        },
        {
            id:6,
            img_url:require('../../../assets/images/FOods/noode3.png'),
            heading:"Chicken Noodle",
            price:25,
        },
        {
            id:7,
            img_url:require('../../../assets/images/FOods/pepperoni.png'),
            heading:"Pepper Oni",
            price:25,
        },
        {
            id:8,
            img_url:require('../../../assets/images/FOods/combo.png'),
            heading:"Combo Box",
            price:25,
        },
        {
            id:9,
            img_url:require('../../../assets/images/FOods/noode3.png'),
            heading:"Chicken Noodle",
            price:25,
        },
        
        
    ]

    
    
    const renderItem = ({item})=> {
        const check =  (x)=> { 
            return x.id === item.id;
        }
        
        const flag = liked.some(check);
       
        return(
            <TouchableOpacity onPress={()=>{navigation.navigate("Item",{item})}} style={{backgroundColor:"white",width:width/2.2,margin:width*0.02,borderRadius:height*0.01}}>
                <SharedElement  id={`item.${item.id}.img`} >
                    <Image source={item.img_url}  style={{height:width*0.4,width:width*0.4,position:"relative",top:height*0.01}} resizeMode={"contain"}/>
                </SharedElement>
                    <Text style={{fontFamily:"Anton",fontSize:width*0.05,margin:height*0.02,color:"#595959"}}>{item.heading}</Text>
                <Text style={{alignSelf:"center",color:"gray"}}>Blend on Spices</Text>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",margin:width*0.04,marginTop:height*0.03,alignItems:"center"}}>
                    <Text style={{color:"gray"}}>{"$"+item.price}</Text>
                    <TouchableOpacity onPress={()=>{dispatch(Like_Unlike({items:item}))}} style={{borderColor:"lightgray",borderRadius:25,borderWidth:0.4}} >
                            {
                                flag ? 
                                <>
                                     <Icons name={"heart"} size={height*0.03} color={"#FF6EB4"} style={{padding:10}} />

                                </> 
                                : 
                                <>
                                    <Icons name={"heart-outline"} size={height*0.03} color={"#FF6EB4"} style={{padding:10}} />

                                </>
                            }
    
                    </TouchableOpacity>
                   
                </View>
            </TouchableOpacity>
        )
    }
    
    

    

  return (
    <>
      <FlatList   data={data} initialNumToRender={6} renderItem={renderItem} numColumns={2} style={{backgroundColor:"#FAFAFA",height:height*0.86}} scrollEventThrottle={16}
      ListHeaderComponent={
        ()=>
        <>
            <CarousalDiscounts />
            <MenuItems navigation={navigation}/>
        </>
        }
        
    
     />
        
    
    </>
  )
}