import axios from "axios";

// eslint-disable-next-line no-shadow
export enum SearchAction {
  SearchFilmsRequest = "SEARCH_FILM_REQUEST",
  SearchFilmsSuccess = "SEARCH_FILM_SUCCESS",
  SearchFilmsFail = "SEARCH_FILM_FAIL",
}

type SearchFilmsRequestAction = {
  type: SearchAction.SearchFilmsRequest;
};

type SearchFilmsSuccessAction = {
  type: SearchAction.SearchFilmsSuccess;
  payload: any;
};

export type SearchActions = SearchFilmsSuccessAction;

export const searchFilms = (title: string) => async (
  dispatch: (arg0: { type: SearchAction; payload: any }) => void
) => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=81c24c6eaa51bc05ca0c4647f08f9289&page=1&query=${title}`
    );
    dispatch({
      type: SearchAction.SearchFilmsSuccess,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
