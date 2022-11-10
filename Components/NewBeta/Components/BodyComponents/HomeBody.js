import { View, Text ,FlatList ,Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import Icons from 'react-native-vector-icons/Ionicons';
import HomeHeader from '../HeaderComponents/HomeHeader';
import Ev from 'react-native-vector-icons/EvilIcons';
import { Divider } from 'react-native-paper';
import BodyItems from './BodyItems';



export default function HomeBody({data,datas,height,width}) {


    const renderItems = ({item})=>(
      <View style={{flexDirection:"row",}}>
        <View style={{width:width*0.8,margin:height*0.03,marginTop:0,marginBottom:0}} >
            <Text style={{padding:height*0.01,fontFamily:"Straw",marginTop:height*0.03,color:"gray",fontSize:height*0.02}}>
              Cherry Cream
            </Text>
        <View>

          <View style={{borderRadius:height*0.04,overflow:"hidden",elevation:2}}>
    
            <View  style={{width:width*0.8,height:height*0.22,backgroundColor:item.color1,borderRadius:height*0.04,overflow:"hidden"}}>
              <View style={{margin:height*0.04}}>
              <Text style={{fontFamily:"Ogg",color:"black",fontSize:height*0.03,}}>{item.h1}</Text>
              <Text style={{color:"gray",fontSize:height*0.015,fontFamily:"Cav"}}>{item.h2}</Text>
                 
              </View>
              <View style={{backgroundColor:"white",width:height*0.07,borderRadius:height,marginLeft:width*0.6,marginTop:height*0.01}}>
                    <TouchableOpacity>
                    <Icons name={'heart-outline'} color={"#FF6EB4"} size={20} style={{padding:height*0.01,alignSelf:"center"}} />
                    </TouchableOpacity>
                  </View>
            </View>
    
            <View style={{height:height*0.25,width:height*0.25,backgroundColor:item.color2,position:"absolute",right:0,bottom:"35%",borderRadius:height,left:"50%",alignItems:"center",justifyContent:"center"}}>
              <Image source={item.img} style={{width:height*0.22,height:height*0.22,maxHeight:height*0.25,maxWidth:height*0.25}} resizeMode={"contain"} />
            </View>
          </View>
          
        </View>
    
    
        </View>

        <View>
          <Divider style={{height:height*0.22,width:1,alignItems:"center",backgroundColor:item.color2}} />
        </View>


        </View>
      )


      const datass = [
        {
          img : require("../../../../assets/images/im/1.png"),
          name: "Whipped Cream",
        },
        {
          img : require("../../../../assets/images/im/2.png"),
          name: "Soup and Stew",
        },
        {
          img :  require("../../../../assets/images/hi.png"),
          name: "Berry Cream",
        },
        {
          img :  require("../../../../assets/images/hiii.png"),
          name: "Dessert Sauce",
        },
        {
          img : require("../../../../assets/images/im/1.png"),
          name: "Whipped Cream",
        },
        {
          img : require("../../../../assets/images/im/2.png"),
          name: "Soup and Stew",
        },
        {
          img :  require("../../../../assets/images/hi.png"),
          name: "Berry Cream",
        },
        {
          img :  require("../../../../assets/images/hiii.png"),
          name: "Dessert Sauce",
        },
       
        
      ]



      const value = [
         {
          img : require("../../../../assets/images/im/1.png"),
          name: "Whipped Cream",
        },
        {
          img : require("../../../../assets/images/im/2.png"),
          name: "Soup and Stew",
        },
        {
          img : require("../../../../assets/images/im/3.png"),
          name: "Whipped Cream",
        },
        {
          img : require("../../../../assets/images/im/4.png"),
          name: "Soup and Stew",
        },
        {
          img : require("../../../../assets/images/im/5.png"),
          name: "Whipped Cream",
        },
        {
          img : require("../../../../assets/images/im/6.png"),
          name: "Soup and Stew",
        },
        {
          img : require("../../../../assets/images/im/7.png"),
          name: "Whipped Cream",
        },
        {
          img : require("../../../../assets/images/im/8.png"),
          name: "Soup and Stew",
        },
        {
          img : require("../../../../assets/images/im/9.png"),
          name: "Whipped Cream",
        },
        {
          img : require("../../../../assets/images/im/10.png"),
          name: "Soup and Stew",
        },
        {
          img : require("../../../../assets/images/im/11.png"),
          name: "Whipped Cream",
        },
        {
          img : require("../../../../assets/images/im/12.png"),
          name: "Soup and Stew",
        },
        {
          img : require("../../../../assets/images/im/13.png"),
          name: "Soup and Stew",
        },
      ]



      const renderItems1 = ({item})=>(
          <View style={{margin:height*0.02}}>
            <Image source={item.img} style={{height:height*0.18,width:height*0.18}} resizeMode={"contain"} />
            <Text style={{alignSelf:"center",marginTop:height*0.02,color:"black",fontFamily:"Straw"}}>{item.name}</Text>
          </View>
      )
    
  

      const Component = ({height,width})=>(
        <>
        <Divider style={{width:"100%",height:0.5,alignSelf:"center",marginTop:height*0.06,}} />

        <View style={{flexDirection:"row",margin:height*0.03,marginBottom:0,justifyContent:"flex-end"}}>
            <Ev name='chevron-down' color={"black"} style={{alignSelf:"center",marginLeft:height*0.01}} size={30}/>
            <Text style={{fontFamily:"Straw",fontSize:height*0.028,color:"black"}}>Popular</Text>

        </View>
        <FlatList  initialScrollIndex={0.5}   horizontal showsHorizontalScrollIndicator={false}   data={datass} renderItem={renderItems1} />
        
        <Divider style={{width:"100%",height:0.5,alignSelf:"center",marginTop:height*0.03,}} />

        <View style={{flexDirection:"row",margin:height*0.03,marginLeft:height*0.01,marginTop:height*0.06,marginBottom:0,}}>
            <Ev name='chevron-down' color={"black"} style={{alignSelf:"center",marginLeft:height*0.01}} size={30}/>
            <Text style={{fontFamily:"Straw",fontSize:height*0.028,color:"black"}}>Grab Some!</Text>

        </View>

        <FlatList data={value} style={{marginTop:height*0.04,}} renderItem={render} numColumns={2} showsHorizontalScrollIndicator={false} />
        
        </>
        
      )


      const render = ({item})=>{
        return(
          <BodyItems item={item}/>
        )}

      


      





  return (
    <View style={{marginTop:0,height:height*0.82}}>
        <View style={{flexDirection:"row"}}>


            <FlatList  style={{marginTop:height*0.01}} ListHeaderComponent={<HomeHeader width={width} height={height} />} ListFooterComponent={<Component width={width} height={height} />} showsVerticalScrollIndicator={true} data={data} renderItem={renderItems}  />
        

        </View>
  </View>
  )
}