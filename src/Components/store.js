import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "./Reducer/cartSlice";


const store = configureStore({
    reducer: {
        cart: cartReduce
    }
})

export default store;