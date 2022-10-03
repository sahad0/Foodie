import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'

import BottomItems from '../Components/BottomItems'
import FOoter from '../Components/FOoter'

export default function HomeV1_0() {
  return (
   <SafeAreaView style={{display:"flex",flex:1,backgroundColor:"white"}}>
        <Header />
        <BottomItems />
        <FOoter />
   </SafeAreaView>
  )
}