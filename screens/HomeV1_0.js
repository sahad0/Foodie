import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'

import BottomItems from '../Components/BottomItems'
import { View } from 'react-native'
import FOoter from '../Components/FOoter'

export default function HomeV1_0({navigation}) {
  return (
   <SafeAreaView style={{display:"flex",}}>
    <View style={{flexGrow:1}}>
      <Header />
    </View>
    <View style={{flexGrow:1}}>
        <BottomItems navigation={navigation} />
    </View>
   
   </SafeAreaView>
  )
}