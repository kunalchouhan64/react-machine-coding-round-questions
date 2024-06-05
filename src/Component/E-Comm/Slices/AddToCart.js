import { createSlice } from "@reduxjs/toolkit";

const AddToCart = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addtocart: (state, action) => {
            const existingproduct = state.items.find((item) => item.id === action.payload.id)
            if (existingproduct) {
                existingproduct.quantity += 1
            }
            else {
                state.items.push({ ...action.payload, quantity: 1 })
            }

        },
        removefromcart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id)
        },
        increasequantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity += 1
            }
        },
        decreasequantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload.id)
            if (item) {
                item.quantity -= 1
            }
        },
    }
})

export const { addtocart, removefromcart, increasequantity, decreasequantity } = AddToCart.actions
export default AddToCart.reducer