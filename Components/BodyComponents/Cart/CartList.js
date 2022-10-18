import { View, Text, Image, FlatList ,TouchableOpacity} from 'react-native'
import React from 'react'
import {  useSelector } from 'react-redux';
import { SharedElement } from 'react-navigation-shared-element';
import { useDispatch } from 'react-redux';
import { RemovefromCart,IncreaseItemsfromCart,ReduceItemsfromCart } from '../../../features/cart'
import Icons from "react-native-vector-icons/MaterialCommunityIcons"
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function CartList({height,width,navigation}) {

  const {items} = useSelector((state)=>state.cart.value);
  const dispatch = useDispatch();
  const len= items.length;

  const RenderRight = (progress,dragX) => {
    return(
      <View>
          <Text style={{color:"white"}}>Delete</Text>
      </View>
    )
  }


    const renderItems = ({item,index})=>{

       const deleteList = ()=>{
        dispatch(RemovefromCart({id:item.id,total:item.total}));
       }
       

        return(
          <Swipeable useNativeAnimations renderRightActions={RenderRight} onSwipeableOpen={() => deleteList()}>
          <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate("Item",{item:item})} style={[{backgroundColor:"white",margin:height*0.01,borderRadius:height*0.02,flexDirection:"row",elevation:5,},index===0? {marginTop:height*0.08} : {marginTop:height*0.01},index===len-1 ? {marginBottom:height*0.28} :null]}>
            <View style={{padding:22,}}>
                <View style={{margin:5,backgroundColor:"#FCFCFC",borderRadius:height*0.02,}}>
                <SharedElement id={`item.${item.id}.img`}>
                    <Image source={item.img_url} resizeMode={"contain"} style={{height:height*0.125,width:height*0.125,padding:5,}} />
                </SharedElement>
                </View>
            </View>
            <View>
                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:height*0.01}}>
                    <Text style={{fontFamily:"Anton",fontSize:height*0.025,margin:height*0.010,color:"#595959"}}>{item.heading}</Text>
                    
                    <TouchableOpacity onPress={()=>dispatch(RemovefromCart({id:item.id,total:item.total}))} style={{marginTop:height*0.01,}}>
                        <Icons name='close-thick' color={"gray"} size={height*0.02} style={{marginRight:"5%",}} />
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
                    <Text style={{marginLeft:height*0.014,marginTop:height*0.014,fontSize:height*0.015,color:"#45b6fe",fontStyle:"italic",marginLeft:height*0.018}}>$</Text>
                    <Text style={{marginTop:height*0.014,fontSize:height*0.022,color:"#45b6fe",}}>{"$"+item.price}</Text>
                    </View>
                    
                    <View style={{flexDirection:"row",margin:height*0.014,marginLeft:height*0.06,alignItems:"center"}}>
                        
                        <TouchableOpacity onPress={()=>dispatch(ReduceItemsfromCart({id:item.id,price:item.price}))} style={{borderColor:"lightgray",borderWidth:1,borderStyle:"solid",borderRadius:5}}>
                            <Text style={{fontSize:22,borderColor:"lightgray",paddingLeft:8,paddingRight:8,color:"gray"}}>-</Text>
                        </TouchableOpacity>
                        
                        <Text style={{marginLeft:18,fontSize:18,color:"black"}}>{item.count}</Text>
                        <TouchableOpacity onPress={()=>dispatch(IncreaseItemsfromCart({id:item.id,price:item.price}))}>
                            <Text style={{marginLeft:18,fontSize:22,color:"black"}}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        </Swipeable>
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
    <View style={{flexGrow:2,backgroundColor:"#FEFDFD",height:height*0.3,marginBottom:height*0.5,marginTop:height*0.1,flexGrow:2,height:height*0.7,marginTop:height*0.1,backgroundColor:"#FEFDFD"}}>
        <FlatList  data={items} renderItem={renderItems} ListEmptyComponent={<HandleEmpty />} />
       
      
    </View>
  )
}


// 

// 