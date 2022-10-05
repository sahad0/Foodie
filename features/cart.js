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

    }
})

export const {SignIn,SignOut } = cartSlice.actions;

export default cartSlice.reducer;