import React, { FC } from "react";
import { useTranslation } from "react-i18next";

import styles from "./NotFoundBlock.module.scss";

export const NotFoundBlock: FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        {t("notFound.header")}
      </h1>
      <p className={styles.description}>{t("notFound.description")}</p>
    </div>
  );
};
