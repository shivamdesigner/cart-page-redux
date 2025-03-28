import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import { API_URL } from "../../conf/conf"
import axios from "axios";
const initialState = {
    ApiCart: [],
    loading: false,
    error: null
}

export const getCartItem = createAsyncThunk("viewData", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const addToCart = createAsyncThunk("addToCart", async (id, { rejectWithValue }) => {
    try {
        const response = await axios.post('https://fakestoreapi.com/carts' , id)
        return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})
export const APIcartSlice = createSlice({
    name: 'apiCart',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItem.pending, (state) => {
                state.loading = true
            })
            .addCase(getCartItem.fulfilled, (state, action) => {
                state.loading = false
                state.ApiCart = action.payload
            })
            .addCase(getCartItem.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload.message
            })
            .addCase(addToCart.pending, (state) => {
                state.loading = true
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false
                state.cart.push(action.payload)
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload.message
            })
    }
})
export default APIcartSlice.reducer