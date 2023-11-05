import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store";
import { addItem } from "../../redux/slices/cartSlice";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { IFetchPizzas } from "../../types/index";
import { ItemDetail } from "./ItemDetail";

const ItemDetailContainer = () => {
  const { t } = useTranslation();
  const typeNames: string[] = [t("dough.thin"), t("dough.traditional")];
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
      navigate("/");
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
    <ItemDetail
      id={id}
      pizzaItem={pizzaItem}
      activeType={activeType}
      activeSize={activeSize}
      setActiveSize={setActiveSize}
      setActiveType={setActiveType}
      typeNames={typeNames}
      onClickAddItem={onClickAddItem}
    />
  );
};

export default ItemDetailContainer;
