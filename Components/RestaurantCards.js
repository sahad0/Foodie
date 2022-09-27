import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView, ActivityIndicator } from 'react-native'
import React, { memo, useEffect, useState } from 'react'


import Cards from './Cards';




export default function RestaurantCards({ restaurantData, setShowcatagories, setOffset, offset, navigation }) {





    const handleEmpty = () => {
        return <ActivityIndicator color={"black"} size={"large"} />;
    };


    const renderItem = ({ item, index }) => (
        <Cards
            image_url={item.image_url}
            name={item.name}
            city={item.location.city}
            rating={item.rating}
            review_count={item.review_count}
            is_closed={item.is_closed}
            transaction1={item.transactions[0]}
            phone={item.phone}
            navigation={navigation}
        />
    );



    return (

        <FlatList initialNumToRender={5}
            keyExtractor={(item, index) => { return item.id + index }}

            onEndReached={() => { setOffset(offset + 10) }} style={{ zIndex: 3 }}
            onEndReachedThreshold={50}
            onScroll={(event) => setShowcatagories(event.nativeEvent.contentOffset.y)}
            data={[...restaurantData]}
            ListEmptyComponent={handleEmpty}
            renderItem={renderItem}
            maxToRenderPerBatch={5}
        />

    )


    // else {
    //     return (
    //         <View style={{ display: "flex", alignSelf: "center", justifyContent: "center", flexDirection: "row", marginTop: "40%" }}>
    //             <Text >No Search Found</Text>
    //         </View>)
    // }
}

