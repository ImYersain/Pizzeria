import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux/store";

import { PizzaItem, SkeletonPizzaItem } from "../../components";

import { fetchPizzas } from "../../redux/slices/pizzasSlice";
import { getFilterSelector } from "../../redux/selectors/filterSelector";
import { getCategorySelector } from "../../redux/selectors/categorySelector";
import { Home } from "./Home";

const HomeContainer = () => {
  // const [searchValue] = useOutletContext();   <-- if we use context
  const dispatch = useAppDispatch();

  const { items, status } = useSelector(
    (state: RootState) => state.pizzasReducer
  );
  const { activeCategoryId, currentPage } = useSelector(getCategorySelector);
  const { isOrderASC, sort, sorts, searchValue } = useSelector(
    getFilterSelector
  );

  useEffect(() => {
    const category = activeCategoryId > 0 ? `category=${activeCategoryId}` : "";
    const order = isOrderASC ? "asc" : "desc";
    const search = searchValue ? `&search=${searchValue}` : "";
    const sortProperty = sort.sortProperty;

    const fetching = () => {
      dispatch(
        fetchPizzas({ currentPage, category, sortProperty, order, search })
      );
    };

    fetching();
  }, [activeCategoryId, sort, isOrderASC, currentPage, searchValue]);

  const pizzas = items.map((pizza) => <PizzaItem key={pizza.id} {...pizza} />);
  const skeleton = [...new Array(8)].map((_, index) => (
    <SkeletonPizzaItem key={index} />
  ));

  return (
    <Home
      sorts={sorts}
      sort={sort}
      isOrderASC={isOrderASC}
      pizzas={pizzas}
      skeleton={skeleton}
      currentPage={currentPage}
    />
  );
};

export default HomeContainer;
