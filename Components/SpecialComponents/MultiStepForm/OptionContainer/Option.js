import { View, Text ,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';
import Icons from "react-native-vector-icons/Ionicons"
import { MotiView } from 'moti';

export default function Option({height,width,data,question,color,state,setState,length,itemCart,setItemCart,setTotal}) {

//   const [itemCart,setItemCart] = useState({title:"",orderId:"",customizedItems:[],total:[]});
   

    const [checked, setChecked] = React.useState("");

    const handleCheck = (id,price,item)=>{

            const temp = itemCart;
            if(temp.customizedItems[id]){
                itemCart.total -= temp.customizedItems[id].price;
                temp.customizedItems[id] = item;
                itemCart.total += price;

                
            }
            else{
                temp.customizedItems[id] = item;
                itemCart.total += price;
            }

            setItemCart(itemCart);
            setTotal(temp.total);
    }




    
  return (
    <>
    <View style={{height:height*0.5,padding:height*0.05,flexDirection:"column",justifyContent:"space-between",height:height,width:width}}>
            <View style={{justifyContent:"space-between",width:width*0.8}}>

                <View >
                    
                    <Text style={{marginBottom:height*0.02,color:"gray"}}>{question}</Text>
                    <ScrollView style={{height:height*0.32}}>
                    {
                        data.map((k,index)=>(
                            <View key={index} style={{flexDirection:"row",justifyContent:"space-between",width:height*0.25,marginTop: height*0.04}}>
                                <View style={{flexDirection:"row",}}>
                                    <View>
                                    <RadioButton
                                        color={color}
                                        status={checked===k.name ? 'checked' : 'unchecked'}
                                        onPress={() => {setChecked(k.name),handleCheck(k.tag,k.price,k)}}
                                    />
                                    </View>
                                    <View>
                                        <Text style={{fontFamily:"League",color:"black",fontSize:25}}>{k.name}</Text>
                                        <Text style={{fontFamily:"Sanch",color:"black",fontSize:15}}>{ k.type}</Text>  
                                    </View>
                                </View>
                                <View style={{justifyContent:"center"}}>
                                    <Text style={{fontSize:height*0.02,color:"gray"}}> -      {k.price}$</Text>
                                </View>
                            </View>
                        ))
                    }  
                    </ScrollView> 

                </View>
                <View style={{flexDirection:"row",marginTop:height*0.02}}>
                    {
                        state===0 ? 
                        <>
                        <MotiView from={{translateY:100}} animate={{translateY:0}} transition={{duration:500}}>
                            <TouchableOpacity 
                                onPress={(()=>{
                                    if(state===length-1){
                                        return ;
                                    }

                                    setState(state+1);

                                })}
                                style={{marginLeft: width*0.58,height:height*0.08,width:height*0.08,backgroundColor:"white",elevation:5,justifyContent:"center",alignItems:"center",borderRadius:height*0.2}}>
                                <Icons name='ios-chevron-forward-sharp' color={color} size={40}  />
                            </TouchableOpacity>
                        </MotiView>
                        </>
                        :
                        state===length-1 ?
                        <>
                        <MotiView from={{translateY:100}} animate={{translateY:0}} transition={{delay:300}}>
                           <TouchableOpacity 
                                onPress={(()=>{
                                    
                                    setState(state-1);
                                })}
                                style={{marginLeft: height*0.15,height:height*0.08,width:height*0.08,backgroundColor:"white",elevation:5,justifyContent:"center",alignItems:"center",borderRadius:height*0.2}}>
                                        <Icons name='ios-chevron-back' color={color} size={40}  />
                            </TouchableOpacity>
                        </MotiView>
                            <MotiView from={{translateY:100}} animate={{translateY:0}} transition={{delay:500}}>
                            <TouchableOpacity 
                                   
                                    style={{marginLeft: height*0.05,height:height*0.08,width:height*0.08,backgroundColor:"white",elevation:5,justifyContent:"center",alignItems:"center",borderRadius:height*0.2}}>
                                        <Icons name='ios-fast-food-sharp' color={"black"} size={40}  />
                            </TouchableOpacity>
                            </MotiView>
                        </>
                        :
                        <>
                        <MotiView style={{flexDirection:"row"}} from={{translateY:100}} animate={{translateY:0}} transition={{delay:500}}>

                            <TouchableOpacity 
                                onPress={(()=>{
                                    if(state===0){
                                        return ;
                                    }
                                    setState(state-1);
                                })}
                                style={{marginLeft: height*0.15,height:height*0.08,width:height*0.08,backgroundColor:"white",elevation:5,justifyContent:"center",alignItems:"center",borderRadius:height*0.2}}>
                                        <Icons name='ios-chevron-back' color={color} size={40}  />
                            </TouchableOpacity>
                            <TouchableOpacity 
                                    onPress={(()=>{
                                        if(state===length-1){
                                            return ;
                                        }

                                        setState(state+1);

                                    })}
                                    style={{marginLeft: height*0.05,height:height*0.08,width:height*0.08,backgroundColor:"white",elevation:5,justifyContent:"center",alignItems:"center",borderRadius:height*0.2}}>
                                        <Icons name='ios-chevron-forward-sharp' color={color} size={40}  />
                            </TouchableOpacity>
                        </MotiView>

                        </>
                        
                    }
                </View>
               
                    

        

           
           
            </View>
           


           

        </View>
   
        
    </>
  )
}


                