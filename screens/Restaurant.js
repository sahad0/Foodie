import { SafeAreaView, ScrollView, View, } from 'react-native'
import React, { useState } from 'react'
import ResHeader from '../Components2/ResHeader';
import FoodItems from '../Components2/FoodItems';


export default function Restaurant() {

    const restaurantValue = {
        name: "Da Andrea",
        phone: "+12123671979",
        price: "$$",
        rating: 4.5,
        review_count: 1520,
        transactions: ["restaurant_reservation", "delivery", "pickup"],
        image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/ZbJxx7Rl8fUH7Pg4GU2p3g/o.jpg",
        location: "NewYork",
    }
    const [loaded, setLoaded] = useState(false);



    return (

        <SafeAreaView style={{ display: "flex", flex: 1, backgroundColor: "white" }}>
            <ScrollView showsHorizontalScrollIndicator={false}>
                <ResHeader restaurantValue={restaurantValue} setLoaded={setLoaded} loaded={loaded} />
                <ScrollView style={{ marginTop: "5%" }}>

                    <FoodItems setLoaded={setLoaded} loaded={loaded} />

                </ScrollView>
            </ScrollView>
        </SafeAreaView >
    )

}