import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slice/ProductsSlice";
import WishlistSlice from "./slice/WishlistSlice";
import CartSlice from "./slice/CartSlice";
import AddressSlice from "./slice/AddressSlice";

 export const store = configureStore({
    reducer : {
        product : ProductsSlice,
        wishlist:WishlistSlice,
        cart :CartSlice,
        address:AddressSlice
    }
 })