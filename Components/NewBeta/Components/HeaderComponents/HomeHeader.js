import { View, Text ,Image ,TouchableOpacity } from 'react-native'
import React from 'react'
import { Searchbar } from 'react-native-paper'
import Ev from 'react-native-vector-icons/EvilIcons';



export default function HomeHeader({width,height}) {
  return (
    <>
    
      <View style={{marginTop: height*0.008,marginBottom:0, height:height*0.08,alignItems:"center"}}>
        <Searchbar style={{backgroundColor:"#F5F5F5",width:width*0.9,borderRadius:height*0.010,elevation:0}} inputStyle={{fontSize:height*0.018,}} placeholder="Search items" />
      </View>
      
      <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",margin:height*0.03,marginTop:0,marginBottom:0}}>
        <View style={{flexDirection:"row",}}>
            <Text style={{fontFamily:"Straw",fontSize:height*0.028,color:"black"}}>Featured</Text>
            <Ev name='chevron-right' color={"black"} style={{alignSelf:"center",marginLeft:height*0.01}} size={30}/>
        </View>
        <TouchableOpacity style={{height:height*0.08,width:height*0.08,borderColor:"lightgray",borderWidth:0.5,borderRadius:height,justifyContent:"center",alignItems:"center"}}>
            <Ev name='gear' color={"black"} size={30} />
        </TouchableOpacity>
       
      </View>

      
    </>
  )
}