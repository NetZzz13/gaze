import React from "react";
import s from "./App.module.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { Provider } from "react-redux";
import store from "./redux/reduxStore";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className={s.app}>
          <Header />
          <Main />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
