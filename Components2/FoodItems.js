import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'



const FoodItems = () => {


    const foods = [
        {
            name: "Grill Chicken",
            desc: " A mix of dried spices such as paprika, cumin, garlic, onion, coriander, salt, and pepper.",
            image_url: "https://www.spiceindiaonline.com/wp-content/uploads/2021/05/Tandoori-Chicken-20.jpg",
            price: "10$"
        },
        {
            name: "Tandoori Chicken",
            desc: "A dish of roasted chicken marinated in yogurt and generously spiced,",
            image_url: "https://img.delicious.com.au/FYRZk_hs/w759-h506-cfill/del/2017/06/tandoori-style-chicken-48263-2.jpg",
            price: "10$"
        },
        {
            name: "Barbeque Chicken",
            desc: "Chickens that are barbecued, grilled or smoked",
            image_url: "https://www.mashed.com/img/gallery/heres-the-difference-between-grilled-and-tandoori-chicken/intro-1607603831.jpg",
            price: "22$"
        },
        {
            name: "Crab and samphire salad",
            desc: "Samphire is a coastal succulent available from greengrocers. If unavailable, shaved asparagus, fennel or radish can be used.",
            image_url: "https://img.delicious.com.au/xgDVmFy4/w759-h506-cfill/del/2015/10/del1015p149-1-16842-1.jpg",
            price: "12$"
        },
        {
            name: "Zucchini fritters",
            desc: "Gold zucchini fritters make a crunchy flavour-packed opener for any entertaining situation",
            image_url: "https://img.delicious.com.au/JiaTxDTT/w759-h506-cfill/del/2015/10/zucchini-fritters-15773-2.jpg",
            price: "15$"
        },
        {
            name: "Carrot tzatziki",
            desc: "Carrot Dish",
            image_url: "https://img.delicious.com.au/SxcErOEi/w759-h506-cfill/del/2015/10/carrot-tzatziki-15562-2.jpg",
            price: "15$"
        },
        {
            name: "Beef Manhattan ",
            desc: "A dish consisting of roast beef and gravy.",
            image_url: "https://img.delicious.com.au/SxcErOEi/w759-h506-cfill/del/2015/10/carrot-tzatziki-15562-2.jpg",
            price: "15$"
        },
        {
            name: "Chicken fried steak",
            desc: "an American breaded cutlet dish consisting of a piece of beefsteak.",
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Chicken_Fried_Steak.jpg/1024px-Chicken_Fried_Steak.jpg",
            price: "15$"
        },



    ]





    return (
        <View  >

            <View style={{ width: "100%", marginLeft: "3%", }}>
                <View style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                    <Text style={{ fontFamily: "Cinzel", color: "black" }}>{foods[0].name}</Text>
                    <TouchableOpacity style={{ marginRight: "5%" }}><Text style={{ fontFamily: "Cinzel", color: "black" }}>Add+</Text></TouchableOpacity>
                </View>
                <Text style={{ marginTop: "3%", fontFamily: "Sil", fontSize: 10, width: "70%", color: "black" }}>{foods[0].desc}</Text>
                <Text style={{ marginTop: "3%", fontFamily: "Sil", fontSize: 19, fontWeight: "200", textDecorationLine: "underline", paddingBottom: "4%", color: "green" }}>{foods[0].price}</Text>

            </View>
            <View >
                <Image style={{ height: 200 }} source={{
                    uri: foods[0].image_url,
                }} />
            </View>
        </View>
    )
}



export default FoodItems