import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import emptyCartImg from "../../assets/img/empty-cart.png";
import { BackButton } from "../Buttons/BackButton";

export const EmptyCart: FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="cart cart--empty">
        <h2>{t("cart.empty.header")} 😕</h2>
        <p>
          {t("cart.empty.description")}
          <br />
          {t("cart.empty.description2")}
        </p>
        <img src={emptyCartImg} />
        <BackButton />
      </div>
    </>
  );
};
