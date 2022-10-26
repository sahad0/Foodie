import { View, Text ,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/Ionicons";
import Material from "react-native-vector-icons/MaterialIcons"


export default function CartHeader({navigation,width,height,cussineType,setcussineType}) {

    const  ChangeCusine = ()=>{
        cussineType==="Delivery" ? setcussineType("Dining") : setcussineType("Delivery") 
    }

    return (
       
       <View style={{padding:width*0.1,flexDirection:"row",justifyContent:"space-between",display:"flex",backgroundColor:"white",elevation:5,borderBottomRightRadius:height*0.01,borderBottomLeftRadius:height*0.01,height:height*0.17,marginTop:0,zIndex:999999,width:width,}}>
       <TouchableOpacity  onPress={()=>{navigation.navigate('Home')}} 
       style={{ backgroundColor:"white",elevation:5,borderRadius:width*0.15,height:height*0.16,height:width*0.16,display:"flex",justifyContent:"center",alignItems:"center"}}>
           <Icons name='arrow-back' size={30}  color={"black"} style={{paddingLeft:width*0.04,paddingRight:width*0.04}}/>
          
  
       </TouchableOpacity>
       <Text style={{fontFamily:"Reg",fontSize:width*0.06,color:"gray"}}>My Cart</Text>
       <TouchableOpacity onPress={ChangeCusine} style={{backgroundColor:"white",elevation:5,borderRadius:width*0.5,height:height*0.16,height:width*0.16,display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Material   name={cussineType==="Delivery" ? 'delivery-dining' : 'ramen-dining'} style={{paddingLeft:width*0.04,paddingRight:width*0.04}} size={30} color={"black"} />
       </TouchableOpacity>
     </View>
    )
  }