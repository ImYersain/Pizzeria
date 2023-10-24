import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IFetchPizzas } from "../../../types/index";
import { IPizzaInitialState, PizzaFetchingStatus } from "./pizzas.types";

export const fetchPizzas = createAsyncThunk<
  IFetchPizzas[],
  Record<string, string>
>("pizzas/fetchPizzas", async (params) => {
  const { currentPage, category, sortProperty, order, search } = params;
  const response = await axios.get(
    `https://64f4f88e932537f4051ad1ac.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortProperty}&order=${order}${search}`
  );

  return response.data;
});

const initialState: IPizzaInitialState = {
  items: [],
  status: PizzaFetchingStatus.LOADING,
};

const pizzasSlice = createSlice({
  name: "pizzas",
  initialState,
  reducers: {
    addItems: (state, action: PayloadAction<IFetchPizzas[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = PizzaFetchingStatus.LOADING;
      state.items = [];
    }),
      builder.addCase(fetchPizzas.fulfilled, (state, action) => {
        state.status = PizzaFetchingStatus.SUCCESS;
        state.items = [...state.items, ...action.payload];
      }),
      builder.addCase(fetchPizzas.rejected, (state) => {
        state.status = PizzaFetchingStatus.ERROR;
        state.items = [];
      });
  },
});

export const { addItems } = pizzasSlice.actions;
export default pizzasSlice.reducer;
