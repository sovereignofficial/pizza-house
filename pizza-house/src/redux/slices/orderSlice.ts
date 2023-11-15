import { createSlice } from "@reduxjs/toolkit";
import { CartItemType, OrderType } from "../../utils/global";

const orderSlice = createSlice({
    name: "orderSlice",
    initialState: {
        orders: [] as [] | OrderType[],
        orderFound: {} as {} | OrderType,
        newOrder: {
            customer:{
                "client": "",
                "address": "",
                "phone": "",
                "date": "",
                "paid": 0,
                "status": "on prepare",//create enum for this
            } as Partial<OrderType>,
            cart:[] as CartItemType[]
        } 
    },
    reducers: {
        createNewOrder: (state) => {
            // set date time now before calculate estimated arriving time

            // calculate estimated time

            // set status
        },
        inspectOrder: () => { },
        onChangeClient: (state,action) => {
            state.newOrder.customer.client = action.payload
         },
        onChangeAddress: (state,action) => { 
            state.newOrder.customer.address = action.payload
        },
        onChangePhone: (state,action) => {
            state.newOrder.customer.phone = action.payload
         },
        setItemsFromCart: (state,action) => {
            //get items from cart
            state.newOrder.cart = action.payload.cart
            // change total fee to be paid 
            state.newOrder.customer.paid = action.payload.totalPrice
        },
        calculateStatus:()=>{
            // according to the estimate date time change the status as preparing , on the way or arrived
        }
    }
})

export const { createNewOrder, inspectOrder, onChangeClient, onChangeAddress, onChangePhone, setItemsFromCart, calculateStatus} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;