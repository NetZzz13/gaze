import React, { useEffect } from "react";
import s from "./Items.module.scss";
import Item from "./Item/Item";
import Paginator from "../Paginator/Paginator";
import { useSelector, useDispatch } from "react-redux";
import {
  getFilms,
  getPageSize,
  getCurrentPage,
  getTotalFilmsCount,
  getSearchFilmName,
  getIsFetching,
} from "../../redux/films-selectors";
import { getItemsThunkCreator } from "../../redux/items-reducer";
import Preloader from "../common/Preloader";

const Items = (props) => {
  //useSelector() - хук, принимающий в себя в селектор (селектор - принимает весь state и возвращает его часть)
  const totalFilmsCount = useSelector(getTotalFilmsCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const films = useSelector(getFilms);
  const searhfilm = useSelector(getSearchFilmName);
  const isFetching = useSelector(getIsFetching);

  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(getItemsThunkCreator(currentPage, searhfilm));
    },
    [/* dispatch, currentPage, searhfilm */]
  );

  return (
    <div>
      <Paginator
        totalFilmsCount={totalFilmsCount}
        currentPage={currentPage}
        pageSize={pageSize}
        portionSize={5}
      />
      {isFetching ? (
        <Preloader />
      ) : (
        <div className={s.items}>
          {films && films.map((elem) => <Item film={elem} key={elem.imdbID} />)}
        </div>
      )}
    </div>
  );
};

export default Items;
