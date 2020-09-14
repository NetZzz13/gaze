import React from "react";
import s from "./SearchBox.module.scss";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getItemsThunkCreator } from "../../redux/items-reducer";
import { getSearchFilmName } from "../../redux/films-selectors";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searhfilm = useSelector(getSearchFilmName);

  const changeField = (value) => {
    dispatch(getItemsThunkCreator(1, value));
  };

  return (
    <Formik
      initialValues={{ searchValue: searhfilm }}
      onSubmit={changeField}
      enableReinitialize={true}
    >
      {() => (
        <Form className={s.searchForm}>
          {/* name должен согласовываться со свойством в  initialValues*/}
          <input
            type="text"
            name="searchValue"
            className="form-control form-control-lg mr-sm-2"
            placeholder="Enter film"
            style={{ width: "auto" }}
            onChange={(e) => {
              changeField(e.target.value);
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox;
