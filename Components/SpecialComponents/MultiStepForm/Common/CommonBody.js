import 'react-native-get-random-values'
import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Food } from '../../../../data/Burgerfile';
import Option from '../OptionContainer/Option';
import { useRef } from 'react';
import { useEffect } from 'react';
import { customAlphabet } from 'nanoid';


export default function CommonBody({id}) {
  const {width,height} = Dimensions.get("screen");
  const [state,setState] = useState(0);
  const ref = useRef(null);

  const [itemCart,setItemCart] = useState({title:"",orderId:0,customizedItems:[],total:0});
  const [total,setTotal] = useState(0);
  const [orderId,setOrderId] = useState(0);

  useEffect(()=>{
    const nanoid = customAlphabet('1234567890', 3);
    const x = Number(nanoid(5));
    const val = itemCart;
    val.orderId = x;
    setItemCart(val);
    setOrderId(x);
  },[]);




  useEffect(()=>{
    ref.current?.scrollToIndex({index:state,animated:true})
  },[state]);



  const data =  Food[id].obj.question.map((_,index)=>{
                  return {question:Food[id].obj.question[index],data:Food[id].obj.option[index],color:Food[1].obj.color}
                });
  const length = Food[id].obj.question.length;





  const renderItem = ({item})=>{
    return(
      
      <Option state={state} setState={setState} total={total} setTotal={setTotal} length={length} height={height} width={width} data={item.data} question={item.question} color={Food[id].obj.color} itemCart={itemCart} setItemCart={setItemCart} />
      
    )
  }


  return (
    <>
      <View>
        <View style={{margin:height*0.03,marginBottom:0}}>
          <Text style={{alignSelf:"flex-end"}}>Make ur Custom Burger</Text>
          <Text style={{alignSelf:"flex-end",fontWeight:"bold"}}>OrderID : {orderId}</Text>
          <Text style={{alignSelf:"flex-end",fontWeight:"bold"}}> Price: ${itemCart.total}</Text>
        </View>
        <FlatList ref={ref} horizontal initialScrollIndex={0} pagingEnabled scrollEnabled={false}  data={data} renderItem={renderItem} />


      
    </View>
   
    </>
   
  )
}