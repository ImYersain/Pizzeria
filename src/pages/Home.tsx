import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../redux/store";
import { useTranslation } from "react-i18next";

import {
  PizzaItem,
  Categories,
  Pagination,
  Sort,
  SkeletonPizzaItem,
} from "../components";

import { fetchPizzas } from "../redux/slices/pizzasSlice";
import { getFilterSelector } from "../redux/selectors/filterSelector";
import { getCategorySelector } from "../redux/selectors/categorySelector";

export const Home: FC = (): JSX.Element => {
  // const [searchValue] = useOutletContext();   <-- if we use context
  const { t } = useTranslation();
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
    <>
      <div className="content__top">
        <Categories />
        <Sort sorts={sorts} sort={sort} isOrderASC={isOrderASC} />
      </div>
      <h2 className="content__title">{t("home.menu")}</h2>
      <div className="content__items">
        {status === "error" ? (
          <h2 style={{ marginBottom: "100px" }}>
            😕 {t("home.fetchingError")}
          </h2>
        ) : (
          <>{status === "loading" ? skeleton : pizzas}</>
        )}
      </div>
      <Pagination currentPage={currentPage} />
    </>
  );
};
