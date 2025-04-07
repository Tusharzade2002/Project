import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const  getblogs = createAsyncThunk("posts/fetch",async()=>{

    try{
        const response=await axios.get("https://dummyjson.com/posts")
        console.log(response.data);
        return response.data.posts;
        
    }catch(e){
             throw new Error(e.response || "errorrrrr")
    }
})