import React, { FC, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/store";
import { addItem } from "../redux/slices/cartSlice";
import axios from "axios";

import { IFetchPizzas } from "../types/index";
import { BackButton, AddItemButton } from "../components";

const ItemDetail: FC = (): JSX.Element => {
  const typeNames = ["Тонкое", "Традиционное"];
  const [pizzaItem, setPizzaItem] = useState<IFetchPizzas>();
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);

  const dispatch = useAppDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchItemById = async () => {
    try {
      const res = await axios.get(
        `https://64f4f88e932537f4051ad1ac.mockapi.io/items/${id}`
      );
      setPizzaItem(res.data);
    } catch (error) {
      console.log(error);
      navigate("/404");
    }
  };

  useEffect(() => {
    fetchItemById();
  }, []);

  const onClickAddItem = (pizzaItem: IFetchPizzas) => {
    const { id, title, price, imageUrl, sizes } = pizzaItem;
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
  };

  return (
    <div className="container">
      {pizzaItem ? (
        <div style={{ margin: "0 auto", textAlign: "center" }}>
          <h1>{pizzaItem.title}</h1>
          <img
            className="pizza-block__image"
            src={pizzaItem.imageUrl}
            alt="Pizza"
          />
          <div className="pizza-block__price">от {pizzaItem.price} ₽</div>
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
                  {size} см.
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

export default ItemDetail;
