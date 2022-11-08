import { View, Text ,FlatList ,Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import HomeHeader from '../HeaderComponents/HomeHeader';
import Ev from 'react-native-vector-icons/EvilIcons';



export default function HomeBody({data,datas,height,width}) {


    const renderItems = ({item})=>(
    
        <View style={{width:width*0.8,margin:height*0.03,marginTop:0,marginBottom:0}} >
            <Text style={{padding:height*0.01,fontFamily:"Straw",marginTop:height*0.03,color:"gray",fontSize:height*0.02}}>
              Cherry Cream
            </Text>
          <View style={{borderRadius:height*0.04,overflow:"hidden",elevation:2}}>
    
            <View  style={{width:width*0.8,height:height*0.22,backgroundColor:item.color1,borderRadius:height*0.04,overflow:"hidden"}}>
              <View style={{margin:height*0.04}}>
              <Text style={{fontFamily:"Ogg",color:"black",fontSize:height*0.03,}}>{item.h1}</Text>
              <Text style={{color:"gray",fontSize:height*0.015,fontFamily:"Cav"}}>{item.h2}</Text>
                 
              </View>
              <View style={{backgroundColor:"white",width:height*0.06,borderRadius:height,marginLeft:width*0.08}}>
                    <Icons name={'heart-outline'} color={"#FF6EB4"} size={20} style={{padding:height*0.01,alignSelf:"center"}} />
                  </View>
            </View>
    
            <View style={{height:height*0.25,width:height*0.25,backgroundColor:item.color2,position:"absolute",right:0,bottom:"35%",borderRadius:height,left:"50%",alignItems:"center",justifyContent:"center"}}>
              <Image source={item.img} style={{width:height*0.22,height:height*0.22,maxHeight:height*0.25,maxWidth:height*0.25}} resizeMode={"contain"} />
            </View>
          
        </View>
    
    
        </View>
      )
    
    
      const renderItems1 = ({item})=>(
        <View style={{width:width*0.2,flexDirection:"row",margin:height*0.05,marginLeft:0,borderColor:"lightgray",borderWidth:0.5,borderRadius:height,transform:[{rotateZ:"90deg"}]}}>
            <View style={{flexDirection:"row",padding:height*0.02,paddingTop:height*0.01,paddingBottom:height*0.01}}>
            <Material name='local-fire-department' color={"red"} size={20}/>
             
              <Text style={{color:"black",}}>{item.data}</Text>
            </View>
            
        </View>
    
      )


      





  return (
    <View style={{marginTop:0,height:height*0.82}}>
        <View style={{flexDirection:"row"}}>


            <FlatList  style={{marginTop:height*0.01}} ListHeaderComponent={<HomeHeader width={width} height={height} />} showsVerticalScrollIndicator={false} data={data} renderItem={renderItems}  />
        

        </View>
  </View>
  )
}