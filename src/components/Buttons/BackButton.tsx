import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const BackButton = () => {
  const { t } = useTranslation();

  return (
    <Link to="/" className="button button--black">
      <span>{t("buttons.back.label")}</span>
    </Link>
  );
};
