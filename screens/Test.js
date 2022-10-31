import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import Burger from '../Components/SpecialComponents/MultiStepForm/BurgerForm/Burger';
import { FlatList } from 'react-native-gesture-handler';
import { burgerData } from '../data/Burgerfile';


export default function Test() {
  const {width,height} = Dimensions.get("screen");

  const data =  burgerData.question.map((k,index)=>{
                  return {question:burgerData.question[index],data:burgerData.option[index]}
                });





  const renderItem = ({item})=>{
    return(
      
      <Burger height={height} width={width} data={item.data} question={item.question} />
      
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
        <FlatList horizontal initialScrollIndex={0} pagingEnabled  data={data} renderItem={renderItem} />


      
    </View>
   
    </>
   
  )
}