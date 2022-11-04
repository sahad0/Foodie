import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/HeaderComponents/Home/Header'

import BottomItems from '../Components/BodyComponents/Home/BottomItems'
import { Button, Dimensions, View } from 'react-native'
import crashlytics from '@react-native-firebase/crashlytics';
import HomeFooter from '../Components/FooterComponent/Home/HomeFooter'
import BottomSheet from '../Components/BottomSheet/BottomSheet'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { useState } from 'react'


export default function HomeV1_0({navigation}) {

  const {height, width} = Dimensions.get('screen');
  const [resetKeyboardView,setResetKeyboardView] = useState(false);




 


  return (
   <SafeAreaView style={{display:"flex",flex:1,}}>
    {/* <Button title='Hello' onPress={()=>{crashlytics().crash()}} /> */}

    <View style={{flexGrow:1}}>
      <Header navigation={navigation} setResetKeyboardView={setResetKeyboardView} resetKeyboardView={resetKeyboardView} />
    </View>
    <View style={{flexGrow:1}}>
        <BottomItems navigation={navigation} />
    </View>
    {/* <FOoter/> */}
    <BottomSheet height={height} width={width} setResetKeyboardView={setResetKeyboardView} resetKeyboardView={resetKeyboardView} initialScrl={-height/3} lmtScroll={-height+height*0.72} screen={"Home"} >
      <HomeFooter height={height} width={width} navigation={navigation} resetKeyboardView={resetKeyboardView} />
    </BottomSheet>
   
   </SafeAreaView>
  )
}