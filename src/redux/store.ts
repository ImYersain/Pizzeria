import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import categoryReducer from "./slices/categorySlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import pizzasReducer from "./slices/pizzasSlice";

export const store = configureStore({
  reducer: {
    categoryReducer,
    filterReducer,
    cartReducer,
    pizzasReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
