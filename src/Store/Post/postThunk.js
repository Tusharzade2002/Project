import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

 const createpost = createAsyncThunk("posts/createPost",async(postData, {rejectWithValue})=>{
    console.log("postdata",postData)
            try{
                const response = await axios.post("https://jsonplaceholder.typicode.com/posts",postData);
                console.log("response from thunk",response.data);
                return response.data
            }catch (error) {
                return rejectWithValue(error.response.data);
              }
            
     })

export default createpost;


