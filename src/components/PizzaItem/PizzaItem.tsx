import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "../../redux/store";
import { addItem } from "../../redux/slices/cartSlice";

import { IFetchPizzas } from "../../types/index";
import { AddItemButton } from "../../components";

export const PizzaItem: FC<IFetchPizzas> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const { t } = useTranslation();
  const typeNames: string[] = [t("dough.thin"), t("dough.traditional")];
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickAddItem = () => {
    dispatch(
      addItem({
        id,
        title,
        price,
        imageUrl,
        type: typeNames[activeType],
        size: sizes[activeSize],
      })
    );
    setCount((prev) => ++prev);
  };

  const onClickPizzaItem = (id: string) => {
    navigate(`/${id}`);
  };

  return (
    <div className="pizza-block">
      <div onClick={() => onClickPizzaItem(id)}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{t(`pizzas.pizza${id}`)}</h4>
      </div>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeIndex) => (
            <li
              key={typeIndex}
              className={activeType === typeIndex ? "active" : ""}
              onClick={() => setActiveType(typeIndex)}
            >
              {typeNames[typeIndex]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              key={index}
              className={activeSize === index ? "active" : ""}
              onClick={() => setActiveSize(index)}
            >
              {size} cm.
            </li>
          ))}
        </ul>
      </div>
      <AddItemButton onClick={onClickAddItem} count={count} price={price} />
    </div>
  );
};
