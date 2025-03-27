import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cart: [],
    loading: false,
    error: null
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id)
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload)
            if (item) {
                item.quantity += 1
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload)
            if (item) {
                if (item.quantity === 1) {
                    state.cart = state.cart.filter(item => item.id !== action.payload)
                } else {
                    item.quantity -= 1;
                }
            }
        },
        clearCart: (state) => {
            state.cart = []
        }
    }
})
export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity,clearCart } = cartSlice.actions
export default cartSlice.reducer