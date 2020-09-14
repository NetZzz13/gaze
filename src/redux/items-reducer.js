import { filmsAPI } from "../api/api";

const initialState = {
  films: [],
  pageSize: 10,
  totalFilmsCount: 0,
  currentPage: 1,
  isFetching: false,
  searchValue: "",
};

export const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_VALUE": {
      return { ...state, searchValue: action.searchValue };
    }
    case "SET_FILMS": {
      return { ...state, films: action.films };
    }
    case "SET_FILMS_TOTAL_COUNT": {
      return { ...state, totalFilmsCount: action.totalFilmsCount };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.currentPage };
    }
    case "TOOGLE_IS_FETCHING": {
      return { ...state, isFetching: action.isFetching };
    }
    default:
      return state;
  }
};

export const actions = {
  setSearchValue: (searchValue) => {
    return {
      type: "SET_SEARCH_VALUE",
      searchValue,
    };
  },
  setFilms: (films) => {
    return {
      type: "SET_FILMS",
      films,
    };
  },
  setFilmsTotalCount: (totalFilmsCount) => {
    return {
      type: "SET_FILMS_TOTAL_COUNT",
      totalFilmsCount,
    };
  },

  setCurrentPage: (currentPage) => {
    return {
      type: "SET_CURRENT_PAGE",
      currentPage,
    };
  },

  toogleIsFetching: (isFetching) => {
    return {
      type: "TOOGLE_IS_FETCHING",
      isFetching,
    };
  },
};

export const getItemsThunkCreator = (currentPage, searchValue) => {
  return async (dispatch) => {
    dispatch(actions.toogleIsFetching(true));

    let data = await filmsAPI.getFilms(currentPage, searchValue);

    dispatch(actions.setSearchValue(searchValue));
    dispatch(actions.setFilms(data.Search));
    dispatch(actions.setFilmsTotalCount(data.totalResults));
    dispatch(actions.setCurrentPage(currentPage));

    dispatch(actions.toogleIsFetching(false));
  };
};

export default itemsReducer;
