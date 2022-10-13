import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { AddtoCart } from '../../../features/cart'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

export default function ({width,height,total,heading,id,price,img_url,navigation}) {

  const dispatch = useDispatch();
  const {items} = useSelector((state)=>state.cart.value);
  
  const findElement = (k)=>{
    return k.id === id;
  }
  const element = [...items].find(findElement);
 
  

  const Add = ()=>{
    const count = total/price;
    dispatch(AddtoCart(
      {foodItem: {
        id:id,
        heading:heading,
        price:price,
        total:total,
        count:count,
        img_url:img_url,
      }}
    ))
  }


  return (
    <View style={{margin:height*0.03,flexDirection:"row",backgroundColor:"white",elevation:6,borderRadius:10,justifyContent:"space-between"}}>
        <View >
          <View style={{flexDirection:"row",paddingTop:width*0.08,paddingLeft:width*0.1}}>
              <Text style={{fontFamily:"Cinzel",fontSize:width*0.06,color:"black"}}>$</Text>

              <Text style={{fontFamily:"Cinzel",fontSize:width*0.06,color:"black"}}>{total+".00"}</Text>
          </View>
          <View style={{padding:width*0.03,marginLeft:width*0.06}}>
          <Text style={{fontWeight:"bold",fontStyle:"italic",color:"gray",paddingBottom:height*0.02}}>Total price</Text>

          </View>
        </View> 

        <View style={{paddingTop:width*0.06,padding:width*0.06,alignItems:"center",}}>
            {element!==undefined ? 
            <>
             <TouchableOpacity onPress={Add} style={{backgroundColor:"white",padding:width*0.03,paddingLeft:width*0.1,paddingRight:width*0.08,borderRadius:width*0.2,flexDirection:"row",alignItems:"center"}}>
                  <Image source={require("../../../assets/images/tick.png")} style={{height:40,width:40,alignSelf:"center"}} resizeMode={"contain"} />
                  <Text style={{marginLeft:height*0.009,color:"gray"}}>Added</Text>
            </TouchableOpacity>
            </>
            :
            <>
            <TouchableOpacity onPress={Add} style={{backgroundColor:"#23272A",padding:width*0.03,paddingLeft:width*0.1,paddingRight:width*0.08,borderRadius:width*0.2}}>
                  <Text style={{color:"white",fontFamily:"Reg",fontSize:width*0.05}}>Add to Cart</Text>
            </TouchableOpacity>
            </>}
            
           
        
        </View>
      </View>
  )
}