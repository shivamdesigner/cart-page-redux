import { configureStore } from "@reduxjs/toolkit";
import cartSlice from '../slice/cart/CartReducer'
import  APIcartSlice from "../slice/ApisliceCart/CartReducer";
export const store = configureStore({
    reducer:{
        cart:cartSlice,
        apiCart:APIcartSlice 
    }
})