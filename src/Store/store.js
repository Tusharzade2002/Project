import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../Store/Product/productSlice';


const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export {store};
