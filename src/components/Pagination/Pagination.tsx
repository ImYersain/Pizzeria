import React, { FC } from "react";
import ReactPaginate from "react-paginate";

import { useAppDispatch } from "../../redux/store";
import { setCurrentPage } from "../../redux/slices/categorySlice";

import styles from "./Pagination.module.scss";
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

interface IPaginationProps {
  currentPage: string;
}

export const Pagination: FC<IPaginationProps> = ({ currentPage }) => {
  const dispatch = useAppDispatch();

  const onChangePage = (value: number) => {
    dispatch(setCurrentPage(value.toString()));
  };

  // useWhyDidYouUpdate("Pagination", currentPage);  // --> lib "ahooks", to watch when and how many times component will rerender

  return (
    <div className={styles.root}>
      <ReactPaginate
        breakLabel="..."
        nextLabel={">"}
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel={"<"}
        renderOnZeroPageCount={false}
        currentPage={currentPage}
      />
    </div>
  );
};
