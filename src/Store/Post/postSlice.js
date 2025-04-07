import { createSlice } from "@reduxjs/toolkit";
import createpost from './postThunk.js'


 const postSlice=createSlice({
    name: "posts",
    initialState: {
      post: null,
      loading: false,
      error: null,
    },
    reducers:{
      
        },
        extraReducers: (builder) => {
            builder
              .addCase(createpost.pending, (state) => {
                state.loading = true;
                state.error = null;
              })
              .addCase(createpost.fulfilled, (state, action) => {
                state.loading = false;
                state.post = action.payload;
              })
              .addCase(createpost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
              });
          },
    
})
export default postSlice.reducer;
