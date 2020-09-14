export const getFilms = (state) => {
  return state.itemsPage.films
};

export const getPageSize = (state) => {
  return state.itemsPage.pageSize;
};

export const getTotalFilmsCount = (state) => {
  return state.itemsPage.totalFilmsCount;
};

export const getSearchFilmName = (state) => {
  return state.itemsPage.searchValue;
};

export const getCurrentPage = (state) => {
  return state.itemsPage.currentPage;
};

export const getIsFetching = (state) => {
  return state.itemsPage.isFetching;
};