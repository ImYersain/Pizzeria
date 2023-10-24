import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPizza } from "../../../types/index";
import { TCartInitialState } from "./cart.types";
import { getCartFromLocalStorage } from "./cartLocalStorageLogic";

const initialState: TCartInitialState = getCartFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IPizza>) => {
      const findItem = state.items.find(
        (item) =>
          item.id === action.payload.id &&
          item.type === action.payload.type &&
          item.size === action.payload.size
      );
      if (findItem) {
        findItem.count++; //почему не state.items[findItem].count++    GPT!!!!
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice += action.payload.price;
    },

    removeItem: (
      state,
      action: PayloadAction<{ id: string; price: number }>
    ) => {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      state.totalPrice -= findItem.price * findItem.count;

      state.items = state.items.filter((item) => item.id !== findItem.id);
    },

    minusCountItem: (state, action: PayloadAction<string>) => {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem && findItem.count > 1) {
        findItem.count--;
      } else {
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
      state.totalPrice = state.totalPrice - findItem.price;
    },

    clearAllItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  minusCountItem,
  clearAllItems,
} = cartSlice.actions;
export default cartSlice.reducer;
