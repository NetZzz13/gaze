import React, { useEffect} from "react";
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
} from "../../redux/films-selectors";
import { getItemsThunkCreator } from "../../redux/items-reducer";
import { useHistory } from "react-router-dom";
import * as queryString from "querystring";

const ItemsWithUrlParse = (props) => {
  //useSelector() - хук, принимающий в себя в селектор (селектор - принимает весь state и возвращает его часть)
  const totalFilmsCount = useSelector(getTotalFilmsCount);
  const currentPage = useSelector(getCurrentPage);
  const pageSize = useSelector(getPageSize);
  const films = useSelector(getFilms);
  const searhfilm = useSelector(getSearchFilmName);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    //search - автозаполнение items-ов при вводе ссылки + распарсить полученную строку.
    //substr(1) - срезаем в строке знак "?" у 1-го параметра
    const parsed = queryString.parse(history.location.search.substr(1));
    let actualPage = currentPage;
    let searchFromString = searhfilm;

    if (!!parsed.page) actualPage = Number(parsed.page);
    if (parsed.s) searchFromString = parsed.s;

    dispatch(getItemsThunkCreator(actualPage, searchFromString));
  }, []);

  //если searhfilm есть, то при изменении searhfilm запушить строку в history (т.е. в URL)
  useEffect(() => {
    searhfilm &&
      history.push({
        pathname: "/",
        search: `?s=${searhfilm}&page=${currentPage}`,
      });
  }, [searhfilm, currentPage]);

  return (
    <div>
      <Paginator
        totalFilmsCount={totalFilmsCount}
        currentPage={currentPage}
        pageSize={pageSize}
        portionSize={5}
      />
      <div className={s.items}>
        {films && films.map((elem) => <Item film={elem} key={elem.imdbID} />)}
      </div>
    </div>
  );
};

export default ItemsWithUrlParse;
