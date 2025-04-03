import { createSlice } from "@reduxjs/toolkit";
import { getuser } from "./userthunk";

 const initialState={
    user:[],
    status:"loading",
    error:null,
    filter:{}
 };

const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
    setFilter: (state, action) => {
        state.filter = { ...state.filter, ...action.payload };
      },
    },
    extraReducers:(builder)=>{
        builder.addCase(getuser.pending,(state)=>{
            state.status = "loading";
        })
        .addCase(getuser.fulfilled,(state,action)=>{
            state.status="succeeded";
            state.products=action.payload;
        })
        .addCase(getuser.rejected,(state,action)=>{
            state.status="failed",
            state.error =action.error.message;
        })
    }
})
export const  {setFilter}=userSlice.actions;
export default userSlice.reducer;