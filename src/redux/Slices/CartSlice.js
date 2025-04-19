
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;  // Increase quantity if item exists
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    decreaseQuantity(state, action) {
      const existingItem = state.find((item) => item.id === action.payload);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        return state.filter((item) => item.id !== action.payload);
      }
    }
  }
});

export const { add, remove, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
