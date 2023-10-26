import React, { useRef, useState, useCallback, FC } from "react";
import { useAppDispatch } from "../../redux/store";

import { changeSearchValue } from "../../redux/slices/filterSlice";
import debounce from "lodash.debounce";

import styles from "./Search.module.scss";
import searchIconSvg from "../../assets/img/search.svg";
import clearIconSvg from "../../assets/img/clear.svg";
import { useTranslation } from "react-i18next";

export const Search: FC = () => {
  const { t } = useTranslation();
  const inputRef = useRef<HTMLInputElement>();
  const [localSearchValue, setLocalSearchValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const onClickClear = () => {
    setLocalSearchValue("");
    dispatch(changeSearchValue(""));
    inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(changeSearchValue(str));
    }, 1000),
    []
  );

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={styles.root}>
      <img src={searchIconSvg} className={styles.search__icon} />
      <input
        ref={inputRef}
        className={styles.search__input}
        placeholder={t("search.placeholder")}
        value={localSearchValue}
        onChange={onChangeSearch}
      />
      {localSearchValue && (
        <img
          className={styles.clear_icon}
          src={clearIconSvg}
          onClick={onClickClear}
        />
      )}
    </div>
  );
};
