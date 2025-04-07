import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Store/Product/productSlice';
import  userReducer  from '../Store/User/userSlice';
import  blogReducer from '../Store/Blog/blogSlice';
import postReducer from '../Store/Post/postSlice'


const store = configureStore({
  reducer: {
    product: productReducer,
    user:userReducer,
    blog : blogReducer,
    posts: postReducer,
  },
});

export default store;
