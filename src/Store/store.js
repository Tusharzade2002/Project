import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Product/productSlice.js';
import  userReducer  from './User/userSlice.js'
import blogReducer from './Blog/blogSlice.js';



const store = configureStore({
  reducer: {
    product: productReducer,
    user:userReducer,
    blog:blogReducer,
  },
});

export default store;
