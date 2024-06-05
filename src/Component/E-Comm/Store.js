import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./Slices/ProductSlice";
import AddToCart, { addtocart } from "./Slices/AddToCart";


const Store = configureStore({
    reducer: {
        Products: ProductSlice,
        cart: AddToCart
    }
})

export default Store