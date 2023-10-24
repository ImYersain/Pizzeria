import React, { useState, useRef, useEffect, FC, memo } from "react";
import { useAppDispatch } from "../redux/store";
import { changeOrderType, changeSortType } from "../redux/slices/filterSlice";

import { ISort } from "../redux/slices/filterSlice/filter.types";

interface SortProps {
  sorts: ISort[];
  sort: ISort;
  isOrderASC: boolean;
}
export const Sort: FC<SortProps> = memo(({ sorts, sort, isOrderASC }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const sortRef = useRef();

  const onClickSort = (obj: ISort) => {
    dispatch(changeSortType(obj));
    setOpenModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpenModal(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside); // here is mounting (componentDidMount)
    return () => document.body.removeEventListener("click", handleClickOutside); // here is unmouting (componentWillUnmount)
  }, []);

  return (
    <div ref={sortRef} className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpenModal(!openModal)}>{sort.name}</span>
      </div>
      {openModal && (
        <div className="sort__popup">
          <ul>
            {sorts.map((obj, index) => (
              <li
                key={index}
                onClick={() => onClickSort(obj)}
                className={
                  obj.sortProperty === sort.sortProperty ? "active" : ""
                }
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div
        style={{
          margin: "10px 10px",
          width: "150px",
          cursor: "pointer",
          border: "1px solid #fe5f1e",
          borderRadius: "5px",
          padding: "5px",
          color: "#fe5f1e",
          textAlign: "center",
        }}
        onClick={() => dispatch(changeOrderType())}
      >
        {isOrderASC ? "По возрастанию" : "По убыванию"}
      </div>
    </div>
  );
});
