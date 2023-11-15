import { createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { MenuItem } from '../../../utils/global';

export const apiRestaurant = createApi({
    reducerPath:"restaurantApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://react-fast-pizza-api.onrender.com/api"}),
    tagTypes:["Restaurant"],
    endpoints:(builder)=>({
        getMenu:builder.query<MenuItem[],void>({
            query:()=>'menu'
        }),
        createOrder:builder.mutation({
            query:(payload)=>({
                url:'/order',
                method:'POST',
                body:payload,
                headers:{
                    'Content-Type':'application/json'
                }
            })            
        })
    }),
});

export const { useGetMenuQuery , useCreateOrderMutation} = apiRestaurant;