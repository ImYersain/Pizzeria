import { FC, memo } from "react";
import { useAppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { getCategorySelector } from "../redux/selectors/categorySelector";
import { changeActiveCategory } from "../redux/slices/categorySlice";

export const Categories: FC = memo(() => {
  const { t, i18n } = useTranslation();
  const { categories, activeCategoryId } = useSelector(getCategorySelector);
  const dispatch = useAppDispatch();

  const onClickChangeCategory = (index: number) => {
    dispatch(changeActiveCategory(index));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickChangeCategory(index)}
            className={activeCategoryId === index ? "active" : ""}
          >
            {t(`category.name.${category}`)}
          </li>
        ))}
      </ul>
    </div>
  );
});
