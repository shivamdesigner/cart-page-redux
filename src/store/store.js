import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../slice/cart/CartReducer'
export const store = configureStore({
    reducer:{
        cart:cartSlice
    }
})