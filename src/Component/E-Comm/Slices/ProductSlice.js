import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: 'Products',
    initialState: [],
    reducers: {
        Products: (state, action) => {
            state.push(action.payload)
        }
    }
})


export const { Products } = ProductSlice.actions
export default ProductSlice.reducer