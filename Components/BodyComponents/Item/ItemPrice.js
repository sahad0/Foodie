import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

export default function ({width,price,height,setTotal}) {

  const [no,setNo] = useState(1);

  useEffect(()=>{
    setTotal(price*no);
  },[no]);
 
   function decCounter (){
      if(no>1){
        setNo(no-1)
      }
    }
  function incCounter (){
    if(no<9){
        setNo(no+1);
    }
  }

  return (
    <View style={{display: 'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center",}}>
        <View style={{paddingLeft:height*0.03,flexDirection:"row"}}>
            <Text style={{fontFamily:"Cinzel",fontSize:17,color:"orange"}}>$</Text>

            <Text style={{fontFamily:"Cinzel",fontSize:25,color:"orange"}}>{"$ "+price+".00"}</Text>
        </View>
        

        {/* COunter */}
        <View style={{display: 'flex',flexDirection:"row",alignItems:"center",backgroundColor:"white",borderRadius:width*0.2,borderColor:"lightgray",borderWidth:1,marginRight:height*0.05,}}>
            <TouchableOpacity onPress={decCounter}><Text style={{fontSize:width*0.05,padding:width*0.03,color:"black"}}>-</Text></TouchableOpacity>
            <Text style={{fontSize:width*0.05,padding:width*0.03,color:"black"}}>{no}</Text>
            <TouchableOpacity onPress={incCounter}><Text style={{fontSize:width*0.05,padding:width*0.03,color:"black"}}>+</Text></TouchableOpacity>

        </View>


      </View>
  )
}