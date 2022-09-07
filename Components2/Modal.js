import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Ionicon from "react-native-vector-icons/Ionicons"

import { RemoveFromCart } from '../features/cart'



const Modale = ({ modal, setModal }) => {
    const dispatch = useDispatch();

    const cart = useSelector((state) => {
        return (
            state.cart.value
        )
    })
    // function renderOrder() {
    //     return (

    //     )
    // }

    return (

        <Modal animationType='slide' visible={modal} transparent={true} onRequestClose={() => { setModal(false) }}>
            <View style={{ display: "flex", flex: 1, justifyContent: "flex-end", flexDirection: "column", backgroundColor: "rgba(0,0,0,0.4)" }}>
                <View >
                    <View style={{ backgroundColor: "white" }}>

                        <Text style={{ color: "black", fontFamily: "Cinzel", fontSize: 20, marginLeft: "2%", marginBottom: "6%", marginTop: "2%" }}>Order Details</Text>
                    </View>
                    <View style={{ backgroundColor: "white" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "4%" }}>
                            <Text style={{ fontWeight: "bold", color: "black" }}>Item</Text>
                            <Text style={{ fontWeight: "bold", color: "black" }}>Price</Text>

                        </View>
                        <ScrollView style={{ height: 250 }}>
                            {cart.items.map((k, index) => {


                                return (

                                    <View View key={index} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "4%" }} >
                                        <View style={{ display: "flex", flexDirection: "row", }}>
                                            <Text style={{ color: "black" }}>{k.name + "   (" + k.nameRestaurant + ")"}</Text>
                                            <TouchableOpacity onPress={() => {
                                                dispatch(RemoveFromCart({
                                                    item: k,
                                                    price: k.price,
                                                }))
                                            }}>

                                                <Ionicon style={{ paddingLeft: "3%", fontWeight: "bold", color: "gray" }} name="close-circle" size={20} />
                                            </TouchableOpacity>
                                        </View>

                                        <Text style={{ fontWeight: "bold", color: "black" }}>{k.quantity + "  X   " + k.price + "$"}</Text>

                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>

                    <View style={{ backgroundColor: "white", padding: "4%" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ color: "black" }}>Total</Text>
                            <Text style={{ color: "black" }}>{cart.total + "$"}</Text>
                        </View>

                        <TouchableOpacity onPress={() => { setModal(false) }} style={{ backgroundColor: "black", width: "50%", alignSelf: "center", borderRadius: 30 }}>
                            <Text style={{ color: "white", padding: 15, alignSelf: "center", fontFamily: "Cinzel" }}>CheckOut</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default Modale