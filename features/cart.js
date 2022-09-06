import { createSlice } from "@reduxjs/toolkit";

const val = { items: [], total: 0 }


const cartSlice = createSlice({
    name: "wow",
    initialState: { value: val },
    reducers: {
        AddToCart: (state, action) => {
            state.value.items = [...state.value.items, action.payload.item];
            state.value.total += action.payload.price;
        },
        RemoveFromCart: (state, action) => {
            state.value.items = state.value.items.filter((k) => {
                return k.id != action.payload.item.id;
            })
            state.value.total -= action.payload.price;
        }
    }
})

export const { AddToCart, RemoveFromCart } = cartSlice.actions;

export default cartSlice.reducer;