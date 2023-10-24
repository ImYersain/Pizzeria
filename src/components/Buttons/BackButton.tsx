import React from "react";
import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <Link to="/" className="button button--black">
      <span>Вернуться назад</span>
    </Link>
  );
};
