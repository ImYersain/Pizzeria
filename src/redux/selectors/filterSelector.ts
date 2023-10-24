import { RootState } from "../store";

export const getFilterSelector = (state: RootState) => state.filterReducer;
