import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSearchFilmName } from "../../redux/films-selectors";
import { getItemsThunkCreator } from "../../redux/items-reducer";
import s from "./Paginator.module.scss";

const Paginator = (props) => {
  const searchFilmName = useSelector(getSearchFilmName);
  const dispatch = useDispatch();

  const onChangePage = (pageNumber, searchFilmName) => {
    dispatch(getItemsThunkCreator(pageNumber, searchFilmName));
  };

  useEffect(() => {
    //для сбрасывания  portionNumber при перерендере компонента
    setPortionNumber(1);
  }, [searchFilmName]);

  //логика определения количества и отображения порций в пагинации
  let pagesCount = Math.ceil(props.totalFilmsCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / props.portionSize);

  let [portionNumber, setPortionNumber] = useState(1);

  let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
  let rightPortionPageNumber = portionNumber * props.portionSize;

  return (
    <Pagination className={s.paginator}>
      {portionCount > portionNumber && (
        <Pagination.First
          variant="light"
          onClick={() => {
            setPortionNumber(1);
          }}
        />
      )}

      {portionNumber > 1 && (
        <Pagination.Prev
          variant="light"
          className={s.prevButton}
          onClick={() => {
            setPortionNumber(portionNumber - 1);
          }}
        ></Pagination.Prev>
      )}

      {pages
        .filter(
          (elem) =>
            elem >= leftPortionPageNumber && elem <= rightPortionPageNumber
        )
        .map((elem) => {
          return (
            <Pagination.Item
              className={props.currentPage === elem ? "active" : ""}
              onClick={(e) => {
                onChangePage(elem, searchFilmName);
              }}
              key={elem}
            >
              {elem}
            </Pagination.Item>
          );
        })}

      {portionCount > portionNumber && (
        <Pagination.Next
          variant="light"
          onClick={() => {
            setPortionNumber(portionNumber + 1);
          }}
        />
      )}

      {portionCount > portionNumber && (
        <Pagination.Last
          variant="light"
          onClick={() => {
            setPortionNumber(portionCount);
          }}
        />
      )}
    </Pagination>
  );
};

export default Paginator;
