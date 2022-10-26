import { View, Text, Dimensions, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import GetLocation from 'react-native-get-location';
import Geocoder from 'react-native-geocoding';

export default function Header({navigation,setResetKeyboardView}) {



    const {width,height} = Dimensions.get("screen");
    const [location,setLocation] = useState('New York');
    // const [location,setLocation] = useState({lat:null,long:null});

    // useEffect(()=>{
    //     Geocoder.init("AIzaSyA25HxHPRFBPyL_ePDcULYiPv1MdwmH0Yg"); 
    //     getLoc();
    // },[])
    // function getLoc(){
    //     GetLocation.getCurrentPosition({
    //         enableHighAccuracy: true,
    //         timeout: 150000,
    //       })
    //         .then(location => {
    //         setLocation({lat:location.latitude,long:location.longitude});
    //         const add = Geocoder.from({
    //             latitude : location.latitude,
    //             longitude : location.longitude
    //         });
    //         console.log(add);
    
    //         })
    //         .catch(ex => {
    //           const {code, message} = ex;
    //           console.warn(code, message);
    //           if (code === 'CANCELLED') {
    //             Alert.alert('Location cancelled by user or by another request');
    //           }
    //           if (code === 'UNAVAILABLE') {
    //             Alert.alert('Location service is disabled or unavailable');
    //           }
    //           if (code === 'TIMEOUT') {
    //             Alert.alert('Location request timed out');
    //           }
    //           if (code === 'UNAUTHORIZED') {
    //             Alert.alert('Authorization denied');
    //           }
    //           setLocation('LOading...');
    //         });
    // }

    const visibleController = ()=>{
        setResetKeyboardView();
    }
    
      



  return (
    <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",position:"relative",top:0,backgroundColor:"white",elevation:2,height:height*0.14}}>
        <TouchableOpacity style={{
            margin:width*0.07,
            borderRadius:40,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2},
            shadowRadius: 10,
            elevation: 3,
            backgroundColor: 'white'
        }} onPress={visibleController}>
        <Ionicons color={"black"} style={{padding:width*0.04, }} name='infinite-outline' size={25}/>
        </TouchableOpacity>
        <View style={{alignItems:"center",marginTop:width*0.08   }}>
            <Text style={{color:"gray",fontFamily:"Sil"}}>Location</Text>
            <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginTop:height*0.01}}>
                <Ionicons color={"green"} name='location-outline' size={15}/>
            <Text style={{color:'black'}}>{location}</Text>
            </View>
        </View>
        <TouchableOpacity style={{
            margin:width*0.07,
            borderRadius:40,
            shadowColor: 'black',
            shadowOpacity: 0.26,
            shadowOffset: { width: 0, height: 2},
            shadowRadius: 10,
            elevation: 3,
            backgroundColor: 'white'
        }} onPress={()=>navigation.navigate("Cart")}>
        <Ionicons color={"black"} style={{padding:width*0.04, }} name='albums-outline' size={25}/>
        </TouchableOpacity>
    </View>
  )
  
}
