import { IFetchPizzas } from "../../../types/index";

export enum PizzaFetchingStatus {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface IPizzaInitialState {
  items: IFetchPizzas[];
  status: PizzaFetchingStatus;
}
