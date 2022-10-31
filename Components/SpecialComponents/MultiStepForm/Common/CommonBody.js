import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { Burger } from '../../../../data/Burgerfile';
import Option from '../OptionContainer/Option';
import { useRef } from 'react';
import { useEffect } from 'react';


export default function CommonBody() {
  const {width,height} = Dimensions.get("screen");
  const [state,setState] = useState(0);
  const ref = useRef(null);

  useEffect(()=>{
    ref.current?.scrollToIndex({index:state,animated:true})
  },[state]);

  const data =  Burger.question.map((_,index)=>{
                  return {question:Burger.question[index],data:Burger.option[index],color:Burger.color}
                });
  const length = Burger.question.length;





  const renderItem = ({item})=>{
    return(
      
      <Option state={state} setState={setState} length={length} height={height} width={width} data={item.data} question={item.question} color={item.color} />
      
    )
  }


  return (
    <>
      <View>
        <View style={{margin:height*0.03,marginBottom:0}}>
          <Text style={{alignSelf:"flex-end"}}>Make ur Custom Burger!</Text>
          <Text style={{alignSelf:"flex-end",fontWeight:"bold"}}>OrderID : 5689</Text>
          <Text style={{alignSelf:"flex-end",fontWeight:"bold"}}> Price: $50</Text>
        </View>
        <FlatList ref={ref} horizontal initialScrollIndex={0} pagingEnabled scrollEnabled={false}  data={data} renderItem={renderItem} />


      
    </View>
   
    </>
   
  )
}