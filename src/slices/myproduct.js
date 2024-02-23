import { createSlice } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS_URL } from "../constant";
export const status = {
  Load: "Loading",
  success: "Successfull Load",
  fail: "Failed Load",
};
const myproduct = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: status.Load,
  },
  reducers: {
    setproduct(state, action) {
      state.data = action.payload;
    },
    setload(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setproduct, setload } = myproduct.actions;

export default myproduct.reducer;

export function fetchdata() {
  return async function thunk(dispatch) {
    console.log("in thunk function");
    dispatch(setload(status.Load));
    try {
      const res = await axios.get(PRODUCTS_URL);
      console.log("resthunk", res);
      dispatch(setproduct(res.data));
      dispatch(setload(status.success));
    } catch (err) {
      console.log("error");
      dispatch(setload(status.fail));
    }
  };
}
