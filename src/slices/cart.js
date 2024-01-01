import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartslice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const id = state.findIndex((item) => item.id === action.payload.id);
      console.log(id);
      // return state.filter((prod) => prod.id !== action.payload.id);
      if (id == -1) {
        state.push(action.payload);
      } else {
        alert(action.payload.title + "Product is already added");
      }
    },
    remove(state, action) {
      return state.filter((prod) => prod.id !== action.payload);
    },
  },
});
export const { add, remove } = cartslice.actions;

export default cartslice.reducer;
