import { createSlice } from "@reduxjs/toolkit";
import { getblogs,createpost } from "./blogThunk";

 const initialState={
    posts:[],
    status:"loading",
    error:null,
    filter:{}
 };

const blogSlice=createSlice({
    name:"blog",
    initialState,
    reducers:{
        setFilter: (state, action) => {
            state.filter = { ...state.filter, ...action.payload };
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(getblogs.pending,(state)=>{
            state.status = "loading";
            state.error=null
        })
        .addCase(getblogs.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.posts=action.payload;
        })
        .addCase(getblogs.rejected,(state,action)=>{
            state.status="failed",
            state.error =action.error.message;
            state.posts=[]
        })
    
    .addCase(createpost.pending,(state)=>{
        state.status = "loading";
        state.error=null;
    })
    .addCase(createpost.fulfilled,(state,action)=>{
        state.status="succeeded";
        state.posts.unshift(action.payload);
    })
    .addCase(createpost.rejected,(state,action)=>{
        state.status="failed",
        state.error =action.error.message;
        state.posts=[]
    })
}
})
export const  {setFilter}=blogSlice.actions;
export default blogSlice.reducer;