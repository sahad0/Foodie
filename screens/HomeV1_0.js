import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../Components/Header'
import CarousalDiscounts from '../Components/CarousalDiscounts'

export default function HomeV1_0() {
  return (
   <SafeAreaView style={{display:"flex",flex:1,backgroundColor:"white"}}>
        <Header />
        <CarousalDiscounts />
   </SafeAreaView>
  )
}