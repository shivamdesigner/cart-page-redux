import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    cart:[],
    loading:false,
    error:null
}
export const CartReducer = createSlice({
    name:'cart',
    initialState,
    reducers:{
        
    }
})
export default CartReducer.reducer