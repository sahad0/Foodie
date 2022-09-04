import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import React, { memo, useEffect, useState } from 'react'


import Cards from './Cards';




export default function RestaurantCards({ restaurantData, setShowcatagories, setOffset, offset, navigation }) {










    if (restaurantData.length > 0) {


        return (

            <FlatList initialNumToRender={5}
                keyExtractor={(item, index) => { return item.id + index }}

                onEndReached={() => { setOffset(offset + 10) }} style={{ zIndex: 3 }}
                onEndReachedThreshold={50}
                onScroll={(event) => setShowcatagories(event.nativeEvent.contentOffset.y)}
                data={restaurantData}
                renderItem={(k) => (
                    <Cards
                        image_url={k.item.image_url}
                        name={k.item.name}
                        city={k.item.location.city}
                        rating={k.item.rating}
                        review_count={k.item.review_count}
                        is_closed={k.item.is_closed}
                        transaction1={k.item.transactions[0]}
                        phone={k.item.phone}
                        navigation={navigation}
                    />
                )} />

        )

    }
    else {
        return (
            <View style={{ display: "flex", alignSelf: "center", justifyContent: "center", flexDirection: "row", marginTop: "40%" }}>
                <Text >No Search Found</Text>
            </View>)
    }
}

