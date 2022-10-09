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
                    console.log("currentprice"+k.price+"                "+"recPrice:"+action.payload.foodItem.price);
                    
                    val = true;
                    k.total += action.payload.foodItem.total;
                    k.count +=action.payload.foodItem.count;
                    state.value.total += action.payload.foodItem.total;
                    console.log("Aldready aded"+JSON.stringify(k));
                }
            });
            
            
            if(!val){
                state.value.items.unshift(action.payload.foodItem);
                state.value.total += action.payload.foodItem.total;

                console.log(JSON.stringify(action.payload.foodItem));
                
            }
            console.log("length     :"+state.value.items.length);

            
        }

    }
})

export const {SignIn,SignOut,AddtoCart } = cartSlice.actions;

export default cartSlice.reducer;