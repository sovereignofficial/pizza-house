import { configureStore } from "@reduxjs/toolkit";
import { menuReducer } from "./slices/menuSlice";
import { cartReducer } from "./slices/cartSlice";
import { orderReducer } from "./slices/orderSlice";
import { apiRestaurant } from "./services/restaurant/apiRestaurant";

export const store = configureStore({
    reducer:{
        menuReducer,
        cartReducer,
        orderReducer,
        [apiRestaurant.reducerPath]:apiRestaurant.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware({}).concat([apiRestaurant.middleware])
})