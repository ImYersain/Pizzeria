export enum NameOfSort {
  POPULAR = "Популярности",
  PRICE = "Цене",
  ALPHABET = "Алфавиту",
}

export interface ISort {
  name: NameOfSort;
  sortProperty: string;
}

export type TfilterInitialState = {
  sorts: ISort[];
  sort: ISort;
  searchValue: string;
  isOrderASC: boolean;
};
