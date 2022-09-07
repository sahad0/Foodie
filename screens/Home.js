import axios from "axios";
import { useEffect, useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import BottomBar from "../Components/BottomBar";
import Catagories from "../Components/Catagories";
import HeadBar from "../Components/HeadBar";
import SearchBar from "../Components/SearchBar";
import React from "react";
import Modale from "../Components2/Modal";

export default function Home({ navigation }) {


    const [showSearch, setShowSearch] = useState(false);
    const [restaurantData, setRestaurantData] = useState([]);
    const [place, setPlace] = useState("NewYork");
    const [offset, setOffset] = useState(0);
    const [type, setType] = useState("Delivery");
    const [modal, setModal] = useState(false);


    useEffect(() => {
        setOffset(0);
        fetchYelp();
    }, []);

    useEffect(() => {
        fetchYelp();
    }, [offset]);



    const Yelp_Api_Key = "3uK2tWDfjxw4bM5--fq1_XvyvmVU1HAPH4dTL_AciCEgrDrm-0hbG5PpIjEFIfhAvqHZaPpRgz6PeEZtR0FkGa4Bnjrs2v6pZ8acEL1l1W0q_tyZHZ2BN1x5apwLY3Yx";

    async function fetchYelp() {

        if (offset < 30) {
            const config = {
                headers: {
                    Authorization:
                        `Bearer ${Yelp_Api_Key}`,
                },
                params: {
                    term: "restaurants",
                    location: place,
                    limit: 10,
                    offset: offset,

                },
            };

            const value = await axios.get("https://api.yelp.com/v3/businesses/search", config)
                .then((response) => {

                    const dataa = response.data.businesses.filter((k) => {
                        return k.transactions.includes(type.toLowerCase());
                    })


                    if (offset == 0) {

                        setRestaurantData(dataa);
                    }
                    else {
                        const updated = [...restaurantData].concat(dataa);
                        setRestaurantData(updated);
                    }


                })
                .catch(err => setRestaurantData([]));
        }




    }

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1, }}>
            <View style={{
                backgroundColor: "white",
                paddingBottom: "3%",
            }}>
                <HeadBar setShowSearch={setShowSearch} showSearch={showSearch} setType={setType} type={type} setOffset={setOffset} fetchYelp={fetchYelp} />
                {showSearch ? (<SearchBar place={place} setShowSearch={setShowSearch} setPlace={setPlace} fetchYelp={fetchYelp} setOffset={setOffset} />) : (<></>)}

            </View>

            <View>
                <Catagories restaurantData={restaurantData} setOffset={setOffset} offset={offset} navigation={navigation} />
            </View>
            <View style={{ position: "absolute", bottom: "0%", backgroundColor: "white", width: "100%", height: "10%" }}>
                <BottomBar setModal={setModal} />
            </View>
            <Modale modal={modal} setModal={setModal} />
        </SafeAreaView >
    )
}