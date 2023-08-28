import { createSlice } from "@reduxjs/toolkit";
import { CartItemType } from "../../utils/global";

const cartSlice = createSlice({
    "name":"cartSlice",
    "initialState":{
        cart:[] as [] | CartItemType[]
    },
    "reducers":{
        addToCart:(state,action)=>{
            state.cart = [...state.cart , action.payload];
        },
        deleteFromCart:(state,action)=>{
            state.cart = state.cart.filter(item=>item.id !== action.payload);
        },
        incrementQuantity:(state,action)=>{
           const itemFound = state.cart.find(item => item.id === action.payload);

           itemFound && itemFound.quantity++;
        },
        decrementQuantity:(state,action)=>{
            const itemFound = state.cart.find(item => item.id === action.payload);

            itemFound && itemFound.quantity > 1 && itemFound.quantity--;
        }
    }
});

export const { addToCart, deleteFromCart , incrementQuantity , decrementQuantity} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;