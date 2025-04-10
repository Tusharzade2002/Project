import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

export const  getblogs = createAsyncThunk("posts/fetch",async()=>{

    try{
        const response=await axios.get('https://dummyjson.com/posts')
        return response.data.posts; 
    }catch(e){
             throw new Error(e.response || "errorrrrr")
    }
})


export const  createpost = createAsyncThunk("posts/create",async(formData,{rejectWithValue})=>{
     
     
    try{
        const response = await axios.post("https://dummyjson.com/posts/add",formData);
        console.log("response from thunk",response.data);
        return response.data
    }catch (error) {
        return rejectWithValue(error.response.data);
      }
})