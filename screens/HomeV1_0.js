import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/HeaderComponents/Home/Header'

import BottomItems from '../Components/BodyComponents/Home/BottomItems'
import { View } from 'react-native'
import FOoter from '../Components/FooterComponent/Home/FOoter'

export default function HomeV1_0({navigation}) {
  return (
   <SafeAreaView style={{display:"flex",}}>
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