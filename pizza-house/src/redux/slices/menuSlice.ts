import { createSlice } from "@reduxjs/toolkit";
import { MenuItem } from "../../utils/global";

const menuSlice = createSlice({
    "name":"menuSlice",
    "initialState":{
        menu:[] as [] | MenuItem[]
    },
    "reducers":{
        filterMenu:(state,action)=>{
            state.menu = state.menu.filter(item=> item?.ingredients.includes(action.payload));
        }
    }
});


export const { filterMenu } = menuSlice.actions;

export const menuReducer = menuSlice.reducer;