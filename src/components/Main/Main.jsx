import React from "react";
import s from "./Main.module.scss";
import Items from "../Items/Items";
import { useSelector } from "react-redux";
import {
  getSearchFilmName,
  getTotalFilmsCount,
} from "../../redux/films-selectors";

const Main = () => {
  const totalFilmsCount = useSelector(getTotalFilmsCount);
  const searchFilmName = useSelector(getSearchFilmName);

  return (
    <div className={s.mainWrapper}>
      <div>
        <div className={s.mainInfo}>
          <div>
            You searched for: <span>{searchFilmName}</span>
          </div>
          <div>
            <span>{totalFilmsCount ? totalFilmsCount : 0}</span> results found
          </div>
        </div>
        <Items />
      </div>
    </div>
  );
};

export default Main;
