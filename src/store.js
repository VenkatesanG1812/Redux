import { configureStore } from "@reduxjs/toolkit";
import createSlice from "./slices/cart";
import myproduct from "./slices/myproduct";
const store = configureStore({
  reducer: { createSlice, myproduct },
});

export default store;
