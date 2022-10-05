import { View,Image } from 'react-native'
import React from 'react'
import { SharedElement } from 'react-navigation-shared-element'

export default function ItemImage({img_url,height,id}) {
  return (
    <View style={{alignItems:"center"}}>
      <SharedElement id={`item.${id}.img`}>
        <Image source={img_url} style={{height:height*0.27,width:height*0.6,}} resizeMode={"contain"}/>
      </SharedElement>
    </View>
 
  )
}

ItemImage.sharedElements = (route, otherRoute, showing) => {
  const { id } = route.params;
  return [
      { id: `item.${id}.img` },

  ];
}