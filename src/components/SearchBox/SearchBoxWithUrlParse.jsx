import React from "react";
import s from "./SearchBox.module.scss";
import { Button } from "react-bootstrap";
import { Field, Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getItemsThunkCreator } from "../../redux/items-reducer";
import { getSearchFilmName } from "../../redux/films-selectors";

const SearchBoxWithUrlParse = (props) => {
  const dispatch = useDispatch();
  const searhfilm = useSelector(getSearchFilmName);

  const submit = (values, { setSubmitting }) => {
    dispatch(getItemsThunkCreator(1, values.searchValue));
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{ searchValue: searhfilm }}
      onSubmit={submit}
      enableReinitialize={true}
    >
      {({ isSubmitting }) => (
        <Form className={s.searchForm}>
          {/* name должен согласовываться со свойством в  initialValues*/}
          <Field
            type="text"
            name="searchValue"
            className="form-control form-control-lg mr-sm-2"
            placeholder="Enter film"
            style={{ width: "auto" }}
          />

          <Button
            type="submit"
            variant="outline-primary"
            size="lg"
            disabled={isSubmitting}
            className={s.buttonSubmit}
          >
            Search
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBoxWithUrlParse;
