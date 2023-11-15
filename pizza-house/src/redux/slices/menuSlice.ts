import { createSlice } from "@reduxjs/toolkit";
import { MenuItem } from "../../utils/global";
import { apiRestaurant } from "../services/restaurant/apiRestaurant";


const menuSlice = createSlice({
    "name":"menuSlice",
    "initialState":{
        menu:[] as [] | MenuItem[]
    },
    "reducers":{
        filterMenu:(state,action)=>{
            state.menu = state.menu.filter(item=> item?.ingredients.includes(action.payload));
        },
    },
    extraReducers:(builder)=>{
        builder.addMatcher(apiRestaurant.endpoints.getMenu.matchFulfilled,(state,action)=>{
            state.menu = action.payload?.data 
        })
    }
});


export const { filterMenu } = menuSlice.actions;

export const menuReducer = menuSlice.reducer;