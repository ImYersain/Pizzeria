import React, { FC } from "react";

import emptyCartImg from "../../assets/img/empty-cart.png";
import { BackButton } from "../Buttons/BackButton";

export const EmptyCart: FC = () => {
  return (
    <>
      <div className="cart cart--empty">
        <h2>Корзина пустая 😕</h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={emptyCartImg} />
        <BackButton />
      </div>
    </>
  );
};
