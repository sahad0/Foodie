import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialIcons"


export default function CartHeader({navigation,width,height,cussineType,setcussineType}) {

    const  ChangeCusine = ()=>{
        cussineType==="Delivery" ? setcussineType("Dining") : setcussineType("Delivery") 
    }

    return (
       
       <View style={{padding:width*0.1,flexDirection:"row",justifyContent:"space-between",display:"flex",backgroundColor:"white",elevation:5,borderBottomRightRadius:height*0.08,height:height*0.17,position:"absolute",marginTop:0,zIndex:999999,width:width,}}>
       <TouchableOpacity onPress={()=>{navigation.goBack()}} 
       style={{ backgroundColor:"white",elevation:5,borderRadius:width*0.5,display:"flex",justifyContent:"center",alignItems:"center"}}>
           <Icons name='arrow-back' size={30}  color={"black"} style={{padding:width*0.03}}/>
          
  
       </TouchableOpacity>
       <Text style={{fontFamily:"Reg",fontSize:width*0.06,color:"gray"}}>My Cart</Text>
       <TouchableOpacity onPress={ChangeCusine} style={{backgroundColor:"white",elevation:5,borderRadius:width*0.5,display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Material   name={cussineType==="Delivery" ? 'delivery-dining' : 'ramen-dining'} style={{padding:width*0.03}} size={30} color={"black"} />
       </TouchableOpacity>
     </View>
    )
  }