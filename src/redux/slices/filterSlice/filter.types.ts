export enum NameOfSort {
  POPULAR = "Popular",
  PRICE = "Price",
  ALPHABET = "Alphabet",
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
