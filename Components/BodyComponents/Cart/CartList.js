import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import Icons from "react-native-vector-icons/MaterialCommunityIcons"


export default function CartList({height,width,}) {

  const {items} = useSelector((state)=>state.cart.value);
  console.log(items)

    const renderItems = ({item,index})=>(
        <View style={[{backgroundColor:"white",margin:height*0.01,borderRadius:height*0.02,flexDirection:"row",elevation:5,},index===0? {marginTop:height*0.08} : {marginTop:height*0.01} ]}>
            <View style={{padding:22,}}>
                <View style={{margin:5,backgroundColor:"#FCFCFC",borderRadius:height*0.02,}}>
                    <Image source={item.img_url} resizeMode={"contain"} style={{height:height*0.125,width:height*0.125,padding:5,}} />
                </View>
            </View>


            <View>

                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:height*0.01}}>
                    <Text style={{fontFamily:"Anton",fontSize:height*0.025,margin:height*0.010,color:"#595959"}}>{item.heading}</Text>
                    <TouchableOpacity style={{marginTop:height*0.01,}}>
                    <Icons name='close-thick' color={"lightblue"} size={height*0.02} style={{marginRight:"5%",}} />

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
                    <Text style={{marginLeft:height*0.014,marginTop:height*0.014,fontSize:height*0.015,color:"purple",fontStyle:"italic",marginLeft:height*0.018}}>$</Text>

                    <Text style={{marginTop:height*0.014,fontSize:height*0.022,color:"purple",fontStyle:"italic"}}>{"$"+item.price}</Text>

                    </View>
                    
                    <View style={{flexDirection:"row",margin:height*0.014,marginLeft:height*0.06}}>
                        <TouchableOpacity style={{borderColor:"lightgray",borderWidth:1,borderStyle:"solid",alignItems:"center",justifyContent:"center",borderRadius:5}}>
                        <Text style={{fontSize:18,borderColor:"lightgray",paddingLeft:8,paddingRight:8,}}>-</Text>

                        </TouchableOpacity>
                        <Text style={{marginLeft:18,fontSize:18,color:"black"}}>{item.count}</Text>
                        <Text style={{marginLeft:18,fontSize:18,color:"black"}}>+</Text>

                    </View>
                </View>
            </View>

       </View>
    )



  return (
    <View style={{flexGrow:2,height:height*0.35,marginTop:height*0.1}}>
        <FlatList data={items} renderItem={renderItems} />
       
      
    </View>
  )
}