export interface IFetchPizzas {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  types: number[];
  sizes: number[];
}

export interface IPizza {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  type: any;
  size: any;
  count?: number;
}
