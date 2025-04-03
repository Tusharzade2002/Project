import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

export const getuser =createAsyncThunk("user/fatch",async()=>{
    try{   const response =await axios.get("https://dummyjson.com/users");
       console.log(response.data);
       return response.data.users;
    }catch(e){
       throw new Error(e.response.data || "fetching error")
    }
})