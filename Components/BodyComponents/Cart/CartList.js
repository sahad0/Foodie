import { View, Text, Image, FlatList } from 'react-native'
import React from 'react'
import {  useSelector } from 'react-redux';

import CartListrenderItem from '../../../Components1/Cart/CartListrenderItem';


export default function CartList({height,width,navigation}) {

  const {items} = useSelector((state)=>state.cart.value);
  

    const renderItems = ({item,index})=>{
        return(
            <CartListrenderItem  height={height} index={index} item={item} navigation={navigation} width={width}/>
        )
    }



    const HandleEmpty = ()=>(
        <View style={{backgroundColor:"white",alignItems:"center",height:height*0.8}}>
            <Image source={require("../../../assets/images/empty1.png")} style={{height:height*0.4,width:width*0.7,marginTop:height*0.1,position:"absolute",zIndex:9999}} resizeMode={"contain"} />
            <Text style={{fontSize:height*0.05,fontFamily:"monster",color:"black",marginTop:height*0.1}}>I  See</Text>
            
            <Text style={{fontSize:height*0.05,fontFamily:"monster",color:"black",marginTop:height*0.3}}>
                YouR CaRT 
            </Text>
            <Text>is EmPty!</Text>
        </View>
    )



  return (
    <View style={{flexGrow:2,backgroundColor:"#FEFDFD",height:height*0.9,marginBottom:height*0.5,marginTop:height*0.1,flexGrow:2,height:height*0.7,marginTop:height*0.1,marginBottom:height*0.2,backgroundColor:"#FEFDFD"}}>
        <FlatList data={items} renderItem={renderItems} ListEmptyComponent={<HandleEmpty />} />
       
      
    </View>
  )
}


// 

// 