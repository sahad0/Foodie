import { View, Text ,TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper';
import Icons from "react-native-vector-icons/Ionicons"

export default function Burger({height,width,data,question}) {
    console.log(data)

   

    const [checked, setChecked] = React.useState("");



    
  return (
    <>
    <View style={{height:height*0.5,padding:height*0.05,flexDirection:"column",justifyContent:"space-between",height:height,width:width}}>
            <View style={{justifyContent:"space-between",width:width*0.8}}>

                <View >
                    
                    <Text style={{marginBottom:height*0.02}}>{question}</Text>
                    <ScrollView style={{height:height*0.32}}>
                    {
                        data.map((k,index)=>(
                            <View key={index} style={{flexDirection:"row",justifyContent:"space-between",width:height*0.25,marginTop: height*0.04}}>
                                <View style={{flexDirection:"row",}}>
                                    <View>
                                    <Checkbox
                                        color={data.color}
                                        status={checked===k.name ? 'checked' : 'unchecked'}
                                        onPress={() => {
                                        setChecked(k.name);
                                        }}
                                    />
                                    </View>
                                    <View>
                                        <Text style={{fontFamily:"League",color:"black",fontSize:25}}>{k.name}</Text>
                                        <Text style={{fontFamily:"Sanch",color:"black",fontSize:15}}>{ k.type}</Text>  
                                    </View>
                                </View>
                                <View style={{justifyContent:"center"}}>
                                    <Text style={{fontSize:height*0.02}}> - {k.price}$</Text>
                                </View>
                            </View>
                        ))
                    }  
                    </ScrollView> 

                </View>
                <View style={{flexDirection:"row",marginTop:height*0.02}}>
                <TouchableOpacity style={{marginLeft: height*0.15,height:height*0.08,width:height*0.08,backgroundColor:"white",elevation:2,justifyContent:"center",alignItems:"center",borderRadius:height*0.2}}>
                        <Icons name='ios-chevron-back' color={"pink"} size={40} style={{}} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginLeft: height*0.05,height:height*0.08,width:height*0.08,backgroundColor:"white",elevation:2,justifyContent:"center",alignItems:"center",borderRadius:height*0.2}}>
                        <Icons name='ios-chevron-forward-sharp' color={"pink"} size={40} style={{}} />
                    </TouchableOpacity>
                </View>
               
                    

        

           
           
            </View>
           


           

        </View>
   
        
    </>
  )
}