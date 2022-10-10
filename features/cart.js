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
        //Cart Functionalities

        // {foodItem: {
        //     id:id,
        //     heading:heading,
        //     price:price,
        //     total:total,
        //     count:count,
        //   }}
        AddtoCart: (state,action) => {
            let val = false;
            state.value.items.filter((k)=>{
                if(k.id==action.payload.foodItem.id){
                    val = true;
                    k.total += action.payload.foodItem.total;
                    k.count +=action.payload.foodItem.count;
                    state.value.total += action.payload.foodItem.total;
                }
            });
            
            
            if(!val){
                state.value.items.unshift(action.payload.foodItem);
                state.value.total += action.payload.foodItem.total;
            }

            
        },

        RemovefromCart : (state,action)=>{
            state.value.items = state.value.items.filter((k)=>{
                return k.id!==action.payload.id;
            });
            state.value.total -= action.payload.total;
        },

        ReduceItemsfromCart : (state,action)=>{
            state.value.items = state.value.items.filter((k,index)=>{
                if(k.id === action.payload.id){
                    if(k.count===1){
                        state.value.items.splice(index, 1); 
                        state.value.total -= action.payload.price;
                        return;
                    }
                    k.count-=1;
                    k.total-= action.payload.price;
                    state.value.total -= action.payload.price;

                }
                return k;
            });
        },

        IncreaseItemsfromCart : (state,action)=>{
            state.value.items = state.value.items.filter((k,index)=>{
                if(k.id === action.payload.id){
                    
                    k.count+=1;
                    k.total+=action.payload.price;
                    state.value.total += action.payload.price;

                }
                return k;
            });
        }

    }
})

export const {SignIn,SignOut,AddtoCart,RemovefromCart,ReduceItemsfromCart,IncreaseItemsfromCart} = cartSlice.actions;

export default cartSlice.reducer;