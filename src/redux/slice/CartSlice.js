import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        data:[]
    },

    reducers :{
        addtoCart (state , action){
             let tempdata = state.data;
             let isexistingItem  = false
            tempdata.map(item=>{
                if(item.id==action.payload.id){
                    isexistingItem=true;
                    item.qty=item.qty+1;
                }
            })

            if(!isexistingItem){
                tempdata.push(action.payload)
         
            }
            state.data=tempdata
        },

        reduceItemFromCart(state, action){
            let temdata = state.data;
            let isexistingItem  = false
            temdata.map(item=>{
                if(item.id==action.payload.id){ 
                item.qty=item.qty-1;
                }
            })
            state.data=temdata
        },

          removeitemfromCart(state , action){
               let tempdata = state.data;
               tempdata.splice(action.payload.id);
               state.data=tempdata
          }
    }

 
})


export const {addtoCart , removeitemfromCart, reduceItemFromCart} = CartSlice.actions;
export default CartSlice.reducer