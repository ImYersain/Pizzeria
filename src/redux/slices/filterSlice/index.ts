import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TfilterInitialState, NameOfSort, ISort } from "./filter.types";

const initialState: TfilterInitialState = {
  sorts: [
    {
      name: NameOfSort.POPULAR,
      sortProperty: "raiting",
    },
    {
      name: NameOfSort.PRICE,
      sortProperty: "price",
    },
    {
      name: NameOfSort.ALPHABET,
      sortProperty: "title",
    },
  ],
  sort: {
    name: NameOfSort.POPULAR,
    sortProperty: "raiting",
  },
  searchValue: "",
  isOrderASC: true,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeSortType: (state, action: PayloadAction<ISort>) => {
      state.sort = action.payload;
    },
    changeOrderType: (state) => {
      state.isOrderASC = !state.isOrderASC;
    },
    changeSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const {
  changeSortType,
  changeOrderType,
  changeSearchValue,
} = filterSlice.actions;
export default filterSlice.reducer;
