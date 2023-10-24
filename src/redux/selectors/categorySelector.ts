import { RootState } from "../store";

export const getCategorySelector = (state: RootState) => state.categoryReducer;
