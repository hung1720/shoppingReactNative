import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cartSlices";
import cartSlice from "./slices/cartSlices"
const store = configureStore({
    reducer:{
        cart: cartSlices,
    }
})

export default store;