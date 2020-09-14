import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.omdbapi.com/",
});

export const filmsAPI = {
  getFilms(currentPage = 1, searchValue) {
    return instance
      .get(`?i=tt3896198&apikey=8523cbb8&s=${searchValue}&page=${currentPage}`)
      .then((response) => response.data);
  },
};
