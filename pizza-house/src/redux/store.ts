import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./slices/menuSlice";
import { cartReducer } from "./slices/cartSlice";
import { orderReducer } from "./slices/orderSlice";

export const store = configureStore({
    reducer:{
        menuReducer,
        cartReducer,
        orderReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({}).concat([])
})