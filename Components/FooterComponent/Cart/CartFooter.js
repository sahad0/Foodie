import { View, Text, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native'
import React from 'react'
import Icons from "react-native-vector-icons/Fontisto";
import { Divider } from 'react-native-paper';
import { useSelector } from 'react-redux';
// import * as Animatable from 'react-native-animatable';


export default function CartFooter({height,width}) {

  
const {total} = useSelector((state)=>state.cart.value);

const styles = StyleSheet.create({
    paymenView:{
        borderWidth:1,
        borderColor: "lightgray",
        borderRadius:80,
        marginLeft:height*0.01
    },
    payamentBtn:{
        height:50,
        width:50,
        paddingVertical:height*0.03,
        margin:20
    }
  })


  return (
    <View style={{flexGrow:3,backgroundColor:"white",padding:height*0.03,borderTopLeftRadius:height*0.08,elevation:4,borderColor:"black",height:height*0.35}}>
        <View style={{flexDirection:"row",alignItems:"center",borderBottomColor:"black"}}>
            <View style={{flex:1}}>
                <Icons name='ticket' color={"#595959"} size={30}  />
            </View>
            <View style={{flex:4}}>
               <TextInput placeholder='Promo Code' style={{marginRight:height*0.02}} />
            </View>
            
            <TouchableOpacity style={{flex:2,backgroundColor:"#2E2E2E",alignItems:"center",paddingHorizontal:height*0.02,paddingVertical:height*0.02,borderRadius:height*0.01}}>
                <Text style={{color:"white"}}>Apply</Text>
            </TouchableOpacity>
        </View>

        <Divider style={{color:"black",marginTop:height*0.06,}}/>
        <View style={{margin:height*0.01,marginTop:height*0.005}}>
            <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                <Text style={{color:"lightgray"}}>Item Total</Text>
                <Text style={{color:"gray"}}>{"$"+total}</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:height*0.01}}>
                <Text style={{color:"lightgray"}}>Delivery</Text>
                <Text style={{color:"gray",}}>Free</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:height*0.04}}>
                <Text style={{color:"black"}}>Total</Text>
                <Text style={{color:"black",}}>{"$"+total}</Text>
            </View>
        </View>
        
        <View style={{flexDirection:"row",marginTop:height*0.05,justifyContent:"space-between"}}>
            <TouchableOpacity style={styles.paymenView}>
                <Image source={require("../../../assets/images/gpay.png")} style={styles.payamentBtn} resizeMode={"contain"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymenView}>
                <Image source={require("../../../assets/images/PAYPAL.png")} style={styles.payamentBtn} resizeMode={"contain"}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.paymenView}>
                <Image source={require("../../../assets/images/apple.png")} style={styles.payamentBtn} resizeMode={"contain"}/>
            </TouchableOpacity>
        </View>

    </View>
  )
  }


