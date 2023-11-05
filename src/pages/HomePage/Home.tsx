import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Categories, Pagination, Sort } from "../../components";
import { ISort } from "../../redux/slices/filterSlice/filter.types";

interface IHomeProps {
  sorts: ISort[];
  sort: ISort;
  isOrderASC: boolean;
  pizzas: React.JSX.Element[];
  skeleton: React.JSX.Element[];
  currentPage: string;
}
export const Home: FC<IHomeProps> = ({
  sorts,
  sort,
  isOrderASC,
  pizzas,
  skeleton,
  currentPage,
}): JSX.Element => {
  const { t } = useTranslation();

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
