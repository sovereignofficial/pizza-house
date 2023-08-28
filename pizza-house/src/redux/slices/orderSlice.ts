import { createSlice } from "@reduxjs/toolkit";
import { OrderType } from "../../utils/global";

const orderSlice = createSlice({
    name: "orderSlice",
    initialState: {
        orders: [] as [] | OrderType[],
        orderFound: {} as {} | OrderType,
        newOrder: {
            "client": "",
            "address": "",
            "phone": "",
            "date": "",
            "paid": 0,
            "items": [],
            "status": "on prepare",//create enum for this
            "estimatedTime": new Date()
        } as Partial<OrderType>
    },
    reducers: {
        createNewOrder: () => {
            // set date time now before calculate estimated arriving time

            // calculate estimated time

            // set status
        },
        inspectOrder: () => { },
        onChangeClient: () => { },
        onChangeAddress: () => { },
        onChangePhone: () => { },
        setItemsFromCart: () => {
            //get items from cart

            // change total fee to be paid 
        },
        calculateStatus:()=>{
            // according to the estimate date time change the status as preparing , on the way or arrived
        }
    }
})

export const { createNewOrder, inspectOrder, onChangeClient, onChangeAddress, onChangePhone, setItemsFromCart, calculateStatus} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;