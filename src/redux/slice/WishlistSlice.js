import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../utils/constant";

    const WishListSlice = createSlice({
        name:"wishlist",
        initialState:{
            data:[]
        },

        reducers:{
            add_to_wishlist (state , action){
                  state.data.push(action.payload)
            } 
        }
    })


    export const {add_to_wishlist} = WishListSlice.actions;
    export default WishListSlice.reducer
