import React, { Component } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import FastImage from "react-native-fast-image";
class Cards extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {



        return (
            <TouchableOpacity activeOpacity={1} onPress={() => {
                this.props.navigation.navigate("Restaurant",
                    {
                        name: this.props.name,
                        img: this.props.image_url,
                        city: this.props.city,
                        rating: this.props.rating,
                        transaction: this.props.transaction1,
                        phone: this.props.phone,


                    })
            }}>
                <View style={{ marginBottom: "5%" }}>

                    <View style={{ backgroundColor: "white", display: "flex", alignItems: "center", }}>
                        <FastImage
                            style={{ width: "100%", height: 250, padding: "10%" }}
                            source={{ uri: this.props.image_url }}
                            resizeMode={FastImage.resizeMode.cover}
                        />
                        <TouchableOpacity style={{ position: "absolute", right: "5%", top: "10%" }}>

                            <Ionicons name="heart" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "white", paddingBottom: "5%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ fontFamily: "Cinzel", fontSize: 18, backgroundColor: "white", marginTop: "1%", color: "black" }}>{this.props.name}</Text>
                            <Text style={{ fontFamily: "Cinzel", marginTop: "1%", right: "20%", color: "gray" }}>45-50 min.</Text>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", }}>
                            <Ionicons style={{ marginTop: "1.7%" }} color="gray" name='location-sharp' size={10} />
                            <Text style={{ color: "gray", marginTop: "1.1%" }}>{this.props.city}</Text>
                        </View>


                        <View>
                            <TouchableOpacity style={{ display: "flex", flexDirection: "row", backgroundColor: "green", marginLeft: "2%", width: this.props.rating.toString().length > 1 ? "13%" : "9%", borderRadius: 3, marginTop: "3%", }}>
                                <Ionicons name='star' color="white" size={16} style={{ paddingHorizontal: 3, paddingTop: 1 }} />
                                <Text style={{ fontWeight: "700", fontFamily: "Cinzel", fontSize: 15, color: "white", }}>
                                    {this.props.rating}
                                </Text>

                            </TouchableOpacity>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginRight: "5%" }}>
                                <View style={{ display: "flex", flexDirection: "row", paddingTop: "3%", paddingLeft: "2%" }}>
                                    <Text style={{ color: "green" }}>{this.props.review_count}</Text>
                                    <Text style={{ color: "green" }}> Reviews</Text>
                                </View>
                                <Text style={{ color: "black" }}>{this.props.is_closed ? "Open" : "Closed"}</Text>
                            </View>
                        </View>


                    </View>

                </View>
            </TouchableOpacity>
        )
    }

}

export default Cards;
