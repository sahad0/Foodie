import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/HeaderComponents/Home/Header'

import BottomItems from '../Components/BodyComponents/Home/BottomItems'
import { Button, View } from 'react-native'
import FOoter from '../Components/FooterComponent/Home/FOoter'
import crashlytics from '@react-native-firebase/crashlytics';


export default function HomeV1_0({navigation}) {




  return (
   <SafeAreaView style={{display:"flex",}}>
    {/* <Button title='Hello' onPress={()=>{crashlytics().crash()}} /> */}

    <View style={{flexGrow:1}}>
      <Header navigation={navigation}/>
    </View>
    <View style={{flexGrow:1}}>
        <BottomItems navigation={navigation} />
    </View>
    <FOoter/>
   
   </SafeAreaView>
  )
}