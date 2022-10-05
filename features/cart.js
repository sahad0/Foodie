import { createSlice } from "@reduxjs/toolkit";

const val = { user:null,auth:false,items: [], total: 0 }


const cartSlice = createSlice({
    name: "wow",
    initialState: { value: val },
    reducers: {
        // Authenication
        SignIn: (state,action) => {
            if(action.payload.user){
                state.value.user = action.payload.user;
                state.value.auth = true;
            }
        },
        SignOut: (state,action) => {
            if(state.value.user!==null){
                state.value.user = null;
                state.value.auth = false;
            }

        },


        // Feature
        AddToCart: (state, action) => {
            if (state.value.items.length !== 0) {
                let flag = false;
                state.value.items.filter((k) => {
                    if (k.id === action.payload.item.id) {
                        if (action.payload.item.nameRestaurant === k.nameRestaurant) {
                            k.quantity += 1
                            state.value.total += action.payload.price;
                            flag = true;
                        }


                    }

                })
                if (flag === false) {

                    state.value.items = [...state.value.items, action.payload.item]
                    state.value.total += action.payload.price;

                }
            }
            else {
                state.value.items = [...state.value.items, action.payload.item]
                state.value.total += action.payload.price;
            }

        },
        RemoveFromCart: (state, action) => {


            if (state.value.items.length !== 0) {
                let flag = false;
                state.value.items.filter((k) => {
                    if (k.id === action.payload.item.id) {

                        if (action.payload.item.nameRestaurant === k.nameRestaurant) {
                            k.quantity -= 1
                            if (k.quantity === 0) {
                                state.value.items = state.value.items.filter((k) => {
                                    if (k.id !== action.payload.item.id || k.nameRestaurant != action.payload.item.nameRestaurant) {
                                        return k;
                                    }


                                })
                            }
                            state.value.total -= action.payload.price;
                            flag = true;
                        }


                    }


                })
                if (flag === false) {
                    state.value.items = state.value.items.filter((k) => {
                        return k.id != action.payload.item.id;

                    })
                    state.value.total -= action.payload.price;
                }
            }


        }
    }
})

export const {SignIn,SignOut, AddToCart, RemoveFromCart } = cartSlice.actions;

export default cartSlice.reducer;