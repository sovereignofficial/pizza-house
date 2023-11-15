import { createSlice } from "@reduxjs/toolkit";
import { CartItemType, CartSummary } from "../../utils/global";
import { routes } from "../../utils/pizzaHouse.config";

const cartSlice = createSlice({
    "name":"cartSlice",
    "initialState":{
        cart:[] as [] | CartItemType[],
        cartSummary:{
            "items":[],
            "cartPrice":0,
            "totalPrice":0,
            "discount":0
        } as CartSummary
    },
    "reducers":{
        addToCart:(state,action)=>{

            //check if there is item
            const itemFound = state.cart.find(item=> item.id === action.payload.id)

            if(itemFound){
                 itemFound.quantity++;
            }else{
            // add to cart
            state.cart = [...state.cart , action.payload];
            }

            //update routes
            const cartRoute = routes.find(route=>route.route === "Cart")
            if(cartRoute){
             cartRoute.itemsAmount = state.cart.length
            }
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
        },
        setSummary:(state)=>{
            state.cartSummary.items = state.cart;
            const cartPrice = state.cartSummary?.items.reduce((acc,curr)=>{
                return acc + (curr.quantity * curr.unitPrice);
            },0)  ?? 0;

            state.cartSummary.cartPrice = cartPrice;
            state.cartSummary.totalPrice = cartPrice - state.cartSummary.discount;
        }
    }
});

export const { addToCart, deleteFromCart , incrementQuantity , decrementQuantity,setSummary} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;