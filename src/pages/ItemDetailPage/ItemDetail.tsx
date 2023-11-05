import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import { IFetchPizzas } from "../../types/index";
import { BackButton, AddItemButton } from "../../components";

interface IItemDetail {
  id: string;
  pizzaItem: IFetchPizzas;
  activeType: number;
  setActiveType: React.Dispatch<React.SetStateAction<number>>;
  typeNames: string[];
  activeSize: number;
  setActiveSize: React.Dispatch<React.SetStateAction<number>>;
  onClickAddItem: (pizzaItem: IFetchPizzas) => void;
}

export const ItemDetail: FC<IItemDetail> = ({
  id,
  pizzaItem,
  activeType,
  setActiveType,
  typeNames,
  activeSize,
  setActiveSize,
  onClickAddItem,
}): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className="container">
      {pizzaItem ? (
        <div style={{ margin: "0 auto", textAlign: "center" }}>
          <h1>{t(`pizzas.pizza${id}`)}</h1>
          <img
            className="pizza-block__image"
            src={pizzaItem.imageUrl}
            alt="Pizza"
          />
          <div className="pizza-block__price">
            {t("pizzas.price.from")} {pizzaItem.price} czk
          </div>
          <div className="pizza-block__selector">
            <ul>
              {pizzaItem.types.map((typeIndex) => (
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
              {pizzaItem.sizes.map((size, index) => (
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

          {activeType === 0 ? (
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, pariatur. adipisicing elit. Inventore, pariatur. Ipsum
              dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
              amet, consectetur adipisicing.
            </div>
          ) : (
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              molestiae, voluptate alias temporibus harum unde. Lorem ipsum
              dolor sit amet consectetur. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Error, reprehenderit?
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="pizza-block__bottom">
              <BackButton />
            </div>

            <AddItemButton onClick={() => onClickAddItem(pizzaItem)} />
          </div>
        </div>
      ) : (
        <h2>Загрузка...</h2>
      )}
    </div>
  );
};
