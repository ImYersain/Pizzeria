import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TCategoryInitialState } from "./category.types";

const initialState: TCategoryInitialState = {
  categories: ["all", "meat", "vegetarian", "grill", "spicy", "closed"],
  activeCategoryId: 0,
  currentPage: "1",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    changeActiveCategory: (state, action: PayloadAction<number>) => {
      state.activeCategoryId = state.categories.findIndex(
        (category, i) => i === action.payload
      );
      state.currentPage = "1";
    },
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload;
    },
  },
});

export const { changeActiveCategory, setCurrentPage } = categorySlice.actions;
export default categorySlice.reducer;
