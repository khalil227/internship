import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/Product/productSlice";
import usersReducer from "./features/Users/usersSlice";

export default store = configureStore({
  reducer: {
    products: productReducer,
    user: usersReducer,
  },
});
