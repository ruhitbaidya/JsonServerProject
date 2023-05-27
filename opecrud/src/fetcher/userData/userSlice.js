import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath : "user",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:3002/"
    }),
    endpoints : (builder)=>({
        getAllUser : builder.query({
            query : ()=>({
                url : "userInfo"
            })
        })
    })
})

export const {useGetAllUserQuery} = apiSlice;